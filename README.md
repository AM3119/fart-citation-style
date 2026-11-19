# FART — Fancy Academic Reference Thingy

A multidisciplinary author–date citation style and companion tooling project.

## Current release state

**Draft 0.2 — experimental.** The repository now includes an initial Zotero CSL style. It implements the core author–date structure, semicolon-separated citation groups, citation-order bibliography, author initials, “and friends”, year-only dates, journal formatting, book/chapter/software/legal/patent branches, DOI/URL fallback, PMID/PMCID/ISBN output, and website access-date wording.

It is **not yet a validated or stable release**. Some editorial rules need companion software because CSL cannot reliably distinguish overlapping Zotero item categories or generate the requested transformations. See [IMPLEMENTATION.md](IMPLEMENTATION.md).

## Try it in Zotero

1. Download [fart.csl](fart.csl) from this repository.
2. In Zotero, open **Settings/Preferences → Cite → Styles**.
3. Drag the downloaded `.csl` file into the Styles list (or use the add-style control).
4. Select **FART — Fancy Academic Reference Thingy** in your word processor's citation style selector.

Use a test document first. Do not use this draft for a submission until it has been validated and its output checked.

## Project documents

- [Specification](SPECIFICATION.md)
- [Implementation plan and limitations](IMPLEMENTATION.md)
- [Test coverage plan](tests/README.md)

## Contributing

Please report incorrect output with a minimal Zotero item example and the expected FART rendering. Do not include private library data.
