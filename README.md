# FART — Fancy Academic Reference Thingy

A multidisciplinary author–date citation style and companion tooling project.

## Current status

**Redesign draft 0.9.** The style includes lowercase titles, bold declaration-style prefixes (including **Published on:**), `and also` between multiple citations, full names for the first three bibliography authors, `AC` year markers, and labeled DOI/PubMed identifiers. Special labels can be supplied through Zotero's CSL `Status` variable. The Google Docs screenshot confirms the core author/title/source/DOI formatting; the remaining item-type branches require rendered fixtures. For retraction/correction labels, use the explicit Status convention documented in SPECIFICATION.md.

## Try it in Zotero

This is an experimental redesign. The core author/title/source/DOI format has been visually confirmed in Google Docs. The companion rules include deterministic helpers for BC dates, duplicate-year suffixes, author rendering, and HTML bibliography output. They are not yet wired into Zotero's Google Docs citation integration. Revalidate and test each Zotero item type before using it in a live manuscript. Installation instructions:

1. Download [fart.csl](fart.csl).
2. In Zotero, open **Settings/Preferences → Cite → Styles**.
3. Drag the downloaded `.csl` file into the Styles list (or use the add-style control).
4. Select **FART — Fancy Academic Reference Thingy** in your word processor's citation style selector.

## Project documents

- [Specification](SPECIFICATION.md)
- [Implementation plan and limitations](IMPLEMENTATION.md)
- [Test coverage plan](tests/README.md)
