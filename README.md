# FART — Fancy Academic Reference Thingy

A multidisciplinary author–date citation style and companion tooling project.

## Current status

**Draft 0.3 — validation repair in progress.** The first installation attempt exposed a CSL schema error. Draft 0.2 incorrectly declared the root style version as `1.0.2`; CSL 1.0.2 styles must still use `version="1.0"` in the XML root. The locale also used an invalid plural-term declaration for editors and pages.

Those two issues have now been corrected in `fart.csl`. This is a repair draft, **not yet certified by the official validator or tested in Zotero**.

## Try it in Zotero

Please wait for the next validation pass before installing this repair draft. Once the official CSL validator accepts it, the instructions will be:

1. Download [fart.csl](fart.csl).
2. In Zotero, open **Settings/Preferences → Cite → Styles**.
3. Drag the downloaded `.csl` file into the Styles list (or use the add-style control).
4. Select **FART — Fancy Academic Reference Thingy** in your word processor's citation style selector.

## Project documents

- [Specification](SPECIFICATION.md)
- [Implementation plan and limitations](IMPLEMENTATION.md)
- [Test coverage plan](tests/README.md)
