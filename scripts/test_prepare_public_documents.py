"""Regression checks for the public document preparation safeguards."""

import importlib.util
from pathlib import Path
import tempfile
import unittest

import pymupdf


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location(
    "prepare_public_documents", ROOT / "scripts" / "prepare-public-documents.py"
)
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class PublicDocumentsTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.directory = Path(self.temp.name)
        self.source = self.directory / "registered.pdf"
        with pymupdf.open() as document:
            first = document.new_page(width=598, height=843)
            first.insert_text((100, 200), "residente - NNCMHL80A01F205X")
            first.insert_text((100, 640), "Private signature")
            second = document.new_page(width=156, height=220)
            second.insert_text((10, 25), "Nanocchio Michele", fontsize=8)
            second.insert_text((10, 40), "Macchi 8", fontsize=8)
            second.insert_text((10, 140), "Private signature", fontsize=8)
            for _ in range(20):
                document.new_page()
            document.save(self.source)

    def tearDown(self):
        self.temp.cleanup()

    def assert_rejected(self, mutate, message):
        digital = self.directory / "invalid-statute.pdf"
        output = self.directory / "public"
        with pymupdf.open(ROOT / "public" / "documenti" / "statuto-anilp.pdf") as document:
            mutate(document)
            document.save(digital)
        with self.assertRaisesRegex(ValueError, message):
            MODULE.prepare(self.source, digital, output)
        self.assertFalse(output.exists(), "Invalid inputs must be rejected before writing public files.")

    def test_published_statute_is_clean_and_complete(self):
        with pymupdf.open(ROOT / "public" / "documenti" / "statuto-anilp.pdf") as document:
            self.assertEqual(len(document), 20)
            self.assertEqual(document.embfile_count(), 0)
            for page in document:
                self.assertFalse(page.get_images())
                self.assertIsNone(page.first_widget)
                self.assertIsNone(page.first_annot)
                self.assertGreater(len(page.get_text().strip()), 500)
            self.assertIn("Art. 26", "".join(page.get_text() for page in document))

    def test_preserves_digital_statute_and_redacts_public_act(self):
        digital = ROOT / "public" / "documenti" / "statuto-anilp.pdf"
        output = self.directory / "public"
        MODULE.prepare(self.source, digital, output)
        self.assertEqual((output / "statuto-anilp.pdf").read_bytes(), digital.read_bytes())
        with pymupdf.open(output / "atto-costitutivo-anilp.pdf") as document:
            self.assertEqual(len(document), 2)
            text = "".join(page.get_text() for page in document)
            self.assertIn("Nanocchio Michele", text)
            self.assertNotIn("Private signature", text)
            self.assertNotIn("NNCMHL80A01F205X", text)
            self.assertNotIn("residente", text)

    def test_rejects_images_and_scans(self):
        def add_image(document):
            pixmap = pymupdf.Pixmap(pymupdf.csRGB, pymupdf.IRect(0, 0, 8, 8))
            pixmap.clear_with(255)
            document[0].insert_image(pymupdf.Rect(10, 10, 18, 18), pixmap=pixmap)
        self.assert_rejected(add_image, "scanned pages, images")

    def test_rejects_annotations(self):
        self.assert_rejected(lambda document: document[0].add_text_annot((20, 20), "Private annotation"), "signature annotations")

    def test_rejects_embedded_attachments(self):
        self.assert_rejected(lambda document: document.embfile_add("original.txt", b"Private original"), "without attachments")

    def test_rejects_incomplete_statutes(self):
        self.assert_rejected(lambda document: document.delete_page(-1), "complete 20-page")

    def test_rejects_private_tax_identifiers(self):
        self.assert_rejected(lambda document: document[0].insert_text((20, 20), "RSSMRA80A01F205X"), "private identifiers")


if __name__ == "__main__":
    unittest.main()
