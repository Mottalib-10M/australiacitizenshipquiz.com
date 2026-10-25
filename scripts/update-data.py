#!/usr/bin/env python3
"""Relit les deux sources officielles qui changent souvent (frais et délais de la citoyenneté
australienne) et les compare à src/data/params-2026.json.

Usage : python3 scripts/update-data.py [--write] [--pdf FICHIER] [--times FICHIER]
  sans --write : affiche les écarts et sort en code 2 s'il y en a ;
  avec --write : écrit src/data/official-latest.json (valeurs lues + date + URL), jamais
                 params-2026.json, qui ne change qu'après relecture humaine (RECETTE §17.4).
  --pdf / --times : lit un fichier local au lieu du réseau (essai hors ligne).

Rythme : lancé À LA MAIN tant que le site n'est pas publié ; AUTOMATIQUE (workflow
.github/workflows/update-data.yml, le 2 de chaque mois) une fois le dépôt publié.

Sources (aucun site concurrent) :
  formulaire 1298i « Citizenship application fees » (PDF Home Affairs) ;
  page « Citizenship processing times » de Home Affairs (tableau des percentiles).
Dépendances : Python 3.10+ (stdlib) ; pypdf pour le PDF (pip install pypdf).
"""
import datetime as dt
import html
import io
import json
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PARAMS = ROOT / "src" / "data" / "params-2026.json"
OUT = ROOT / "src" / "data" / "official-latest.json"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"
AU_FEES = "https://immi.homeaffairs.gov.au/form-listing/forms/1298i.pdf"
AU_TIMES = "https://immi.homeaffairs.gov.au/citizenship/citizenship-processing-times/citizenship-processing-times"


def arg(name: str) -> str | None:
    return sys.argv[sys.argv.index(name) + 1] if name in sys.argv else None


def get(url: str, local: str | None, tries: int = 4) -> bytes:
    import time

    if local:
        return Path(local).read_bytes()
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for i in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except OSError:
            if i == tries - 1:
                raise
            time.sleep(10 * (i + 1))


def text_of(raw: bytes) -> str:
    s = raw.decode("utf-8", errors="ignore")
    # pages SharePoint de Home Affairs : contenu en JSON échappé (<…)
    s = re.sub(r"\\u([0-9a-fA-F]{4})", lambda m: chr(int(m.group(1), 16)), s).replace('\\"', '"').replace("\\n", " ").replace("\\t", " ")
    s = html.unescape(s)
    s = re.sub(r"(?s)<script.*?</script>|<style.*?</style>", " ", s)
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s).replace("\xa0", " "))


def money(s: str) -> int:
    return int(round(float(s.replace(",", ""))))


def fees() -> dict:
    from pypdf import PdfReader  # seule dépendance hors stdlib

    pdf = PdfReader(io.BytesIO(get(AU_FEES, arg("--pdf"))))
    t = re.sub(r"\s+", " ", " ".join((p.extract_text() or "") for p in pdf.pages))

    def amt(pattern: str, group: int = 1) -> int:
        m = re.search(pattern, t)
        if not m:
            raise RuntimeError(f"1298i : motif introuvable « {pattern} »")
        return money(m.group(group))

    d = re.search(r"Design date (\d\d/\d\d)", t)
    return {
        "general": amt(r"Gener ?al eligibility \$([\d,]+)"),
        "generalConcession": amt(r"Gener ?al eligibility \$[\d,]+ Concession fee\* \$([\d,]+)"),
        "otherSituations": amt(r"Other situations \$([\d,]+)"),
        "otherSituationsConcession": amt(r"Other situations \$[\d,]+ Concession fee\* \$([\d,]+)"),
        "descent": amt(r"citizenship by descent \$([\d,]+)"),
        "descentSibling": amt(r"citizenship by descent \$[\d,]+ For second and each subsequent sibling applying at the same time \$([\d,]+)"),
        "adoption": amt(r"bilateral arrangements \$([\d,]+)"),
        "adoptionSibling": amt(r"bilateral arrangements \$[\d,]+ For second and each subsequent sibling applying at the same time \$([\d,]+)"),
        "renunciation": amt(r"renunciation of Australian citizenship \$([\d,]+)"),
        "resumption": amt(r"resume Australian citizenship \$([\d,]+)"),
        "evidence": amt(r"evidence of Australian citizenship \$([\d,]+)"),
        "form": f"1298i (design date {d.group(1)})" if d else "1298i",
    }


TIME = r"(\d+ (?:days?|weeks?|months?))"


def times() -> dict:
    t = text_of(get(AU_TIMES, arg("--times")))
    i = t.find("This table shows")
    if i < 0:
        raise RuntimeError("délais : tableau introuvable sur " + AU_TIMES)
    tab = t[i:]

    def row(after: str, label: str) -> dict:
        j = tab.find(after)
        k = tab.find(label, j if j >= 0 else 0)
        if j < 0 or k < 0:
            raise RuntimeError(f"délais : ligne introuvable « {after} / {label} »")
        vals = re.findall(TIME, tab[k : k + 200])[:4]
        if len(vals) < 4:
            raise RuntimeError(f"délais : moins de 4 valeurs pour « {after} / {label} »")
        return dict(zip(("p25", "p50", "p75", "p90"), vals))

    conf = "by conferral"
    return {
        "decision": row(conf, "From date of application to decision"),
        "approvalToCeremony": row(conf, "From date of approval to ceremony"),
        "applicationToCeremony": row(conf, "From date of application to ceremony"),
        "descentDecision": row("citizenship by descent", "From date of application to decision"),
        "evidenceDecision": row("Evidence of Australian citizenship", "From date of application to decision"),
    }


def main() -> int:
    params = json.loads(PARAMS.read_text())
    lu = dt.date.today().isoformat()
    out, diffs, errors = {"_lu": lu, "_sources": [AU_FEES, AU_TIMES]}, [], []
    for key, fn, ref in (("fees", fees, params["au"]["fees"]), ("processing", times, params["au"]["processing"]["table"])):
        try:
            got = fn()
        except Exception as e:  # une source muette n'arrête pas l'autre
            errors.append(f"{key}: {e}")
            continue
        out[key] = got
        for k, v in got.items():
            if k in ref and k != "form" and ref[k] != v:
                diffs.append(f"{key}.{k} : params={ref[k]} → source={v}")
    for e in errors:
        print("ERREUR", e)
    for d in diffs:
        print("ÉCART ", d)
    if not diffs and not errors:
        print(f"OK : frais et délais identiques aux sources officielles ({lu}).")
    if "--write" in sys.argv:
        OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n")
        print("écrit", OUT.relative_to(ROOT))
    return 2 if diffs else (1 if errors else 0)


if __name__ == "__main__":
    sys.exit(main())
