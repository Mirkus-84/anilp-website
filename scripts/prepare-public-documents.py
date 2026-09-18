"""Prepare the public PDFs without changing the supplied registered original."""

import argparse
import re
from pathlib import Path

import pymupdf


def prepare(source_path: Path, output_dir: Path) -> None:
    source = pymupdf.open(source_path)
    if len(source) != 22 or source[0].rect.width != 598 or source[1].rect.width != 156:
        raise ValueError("This script expects the supplied 22-page ANILP founding document.")

    output_dir.mkdir(parents=True, exist_ok=True)
    statute = pymupdf.open()
    statute.insert_pdf(source, from_page=2)
    statute.set_metadata({"title": "Statuto ANILP", "author": "ANILP"})
    statute.save(output_dir / "statuto-anilp.pdf", garbage=4, deflate=True)

    public_act = pymupdf.open()
    public_act.insert_pdf(source, from_page=0, to_page=1)
    # These scanned areas contain private particulars and handwritten signatures.
    first = public_act[0]
    first.add_redact_annot(pymupdf.Rect(82, 165, 500, 514), fill=(0.96, 0.97, 0.98))
    first.add_redact_annot(pymupdf.Rect(0, 582, 598, 843), fill=(1, 1, 1))
    first.apply_redactions(images=2, graphics=2, text=0)
    first.insert_textbox(
        pymupdf.Rect(105, 290, 480, 375),
        "Copia per la consultazione pubblica.\n"
        "Dati anagrafici privati e firme oscurati.\n"
        "Nomi e cariche sono riportati nella pagina successiva.\n"
        "Il documento originale resta conservato dall'associazione.",
        fontsize=10, fontname="helv", align=1, color=(0.12, 0.16, 0.27),
    )

    second = public_act[1]
    second.add_redact_annot(pymupdf.Rect(0, 107, 156, 180), fill=(0.96, 0.97, 0.98))
    second.apply_redactions(images=2, graphics=2, text=0)
    second.insert_textbox(
        pymupdf.Rect(14, 125, 140, 154),
        "Firme oscurate nella copia pubblica.\n"
        "Il documento originale resta conservato dall'associazione.",
        fontsize=3, fontname="helv", align=1, color=(0.12, 0.16, 0.27),
    )
    public_act.set_metadata({"title": "Atto costitutivo ANILP - Copia pubblica", "author": "ANILP"})
    public_act.save(output_dir / "atto-costitutivo-anilp.pdf", garbage=4, deflate=True)

    for filename, expected_pages in [("statuto-anilp.pdf", 20), ("atto-costitutivo-anilp.pdf", 2)]:
        with pymupdf.open(output_dir / filename) as document:
            assert len(document) == expected_pages
            if filename.startswith("atto-"):
                text = "".join(page.get_text() for page in document)
                assert "NNCMHL" not in text and not re.search(r"\bresidente\b", text, re.I)
                assert "Nanocchio Michele" in text and "Macchi 8" in text
        print(f"Prepared {filename}: {expected_pages} pages")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("--output-dir", type=Path, default=Path("public/documenti"))
    args = parser.parse_args()
    prepare(args.source, args.output_dir)
