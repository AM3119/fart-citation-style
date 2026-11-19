# FART — Fancy Academic Reference Thingy

A multidisciplinary, author–date citation style implemented as a **standalone Zotero CSL style**.

## Project rule

FART will not require a companion package, plugin, external formatter, or post-processing step. Zotero's native CSL processor will generate both in-text citations and bibliographies. Features that CSL cannot express will be simplified or represented using ordinary Zotero metadata rather than delegated to separate software.

## Current status

**Experimental draft 0.10 — not yet complete or release-ready.** The current style has visually demonstrated its core author/title/source/DOI formatting in Google Docs. Additional native CSL branches have been added for software, datasets, personal communications, conference papers, interviews, and blog posts. Era handling, sorting, special labels, schema validation, and rendered output still require systematic validation. Some requirements in the specification are not currently implemented correctly.

## Install for testing

1. Download [fart.csl](fart.csl).
2. In Zotero, open **Settings/Preferences → Cite → Styles**.
3. Add the downloaded CSL file.
4. Select **FART — Fancy Academic Reference Thingy** in the document's citation-style preferences.

Do not use this experimental draft for a submitted manuscript until the test matrix is complete.

## Project documents

- [Specification](SPECIFICATION.md)
- [Implementation audit](IMPLEMENTATION.md)
- [Test plan](tests/README.md)
