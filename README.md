# FART — Fancy Academic Reference Thingy

A multidisciplinary, author–date citation style implemented as a **standalone Zotero CSL style**.

## Project rule

FART will not require a companion package, plugin, external formatter, or post-processing step. Zotero's native CSL processor will generate both in-text citations and bibliographies. Features that CSL cannot express will be simplified or represented using ordinary Zotero metadata rather than delegated to separate software.

## Current status

**Experimental draft 0.12 — not yet complete or release-ready.** The current style has visually demonstrated its core author/title/source/DOI formatting in Google Docs. The CSL has been expanded to version 1.0.2 with native branches for additional source types and centralized Status-label overrides. XML well-formedness has been checked, but official CSL schema validation and complete Zotero/Google Docs rendering tests remain outstanding. The CE/BC formatting requirement also has a documented CSL limitation.

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
