"""Gera o kit de uma aula (plano do professor + folha convencional + folha adaptada) em HTML e PDF.

Uso: python3 gerar.py CIE6-B01-A03 [--marca "Nome da marca"]
Lê aulas/<codigo>.json e imagens/<imagem>.svg; grava saida/<codigo>.html e saida/<codigo>.pdf.
"""
import argparse
import base64
import json
import subprocess
from pathlib import Path

from jinja2 import Environment, FileSystemLoader, StrictUndefined

BASE = Path(__file__).resolve().parent
CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"


def gerar(codigo: str, marca: str) -> Path:
    aula = json.loads((BASE / "aulas" / f"{codigo}.json").read_text(encoding="utf-8"))
    svg = (BASE / "imagens" / f"{aula['aluno_adaptado']['imagem']}.svg").read_bytes()
    imagem = "data:image/svg+xml;base64," + base64.b64encode(svg).decode()

    env = Environment(loader=FileSystemLoader(BASE), autoescape=True, undefined=StrictUndefined)
    html = env.get_template("modelo.html.j2").render(a=aula, marca=marca, imagem=imagem)

    saida = BASE / "saida"
    saida.mkdir(exist_ok=True)
    html_path = saida / f"{codigo}.html"
    pdf_path = saida / f"{codigo}.pdf"
    html_path.write_text(html, encoding="utf-8")
    subprocess.run(
        [CHROME, "--headless", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer",
         "--virtual-time-budget=10000", f"--print-to-pdf={pdf_path}", html_path.as_uri()],
        check=True, capture_output=True,
    )
    return pdf_path


if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("codigo")
    p.add_argument("--marca", default="[NOME DA MARCA]")
    args = p.parse_args()
    print(gerar(args.codigo, args.marca))
