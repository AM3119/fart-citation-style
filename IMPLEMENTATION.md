# Implementation Plan

## Current status

Draft 0.2 of `fart.csl` is now committed. It is an initial CSL implementation, not a release candidate. Local checks performed so far include XML parsing and basic macro-reference/structure checks. It has **not** yet been validated against the official CSL 1.0.2 schema or tested inside Zotero/citeproc-js.

## Implemented in the CSL draft

- Author–date citations, with multiple cited items separated by semicolons.
- Bibliography ordered by citation number (first-citation order).
- Surname plus initials in the bibliography, with no periods after initials.
- “and friends” for three or more authors in citations and bibliography.
- Year-only issued dates.
- Conventional CSL year suffixes (a/b/c) as a temporary compatibility behavior.
- Full `container-title` for journal names, italicized; volume bold; issue and page/number fields.
- Book publisher/place, edition, ISBN; chapter editors and page range.
- Software version; patent and legal-document branches.
- DOI first, otherwise URL, otherwise exact fallback `I guess.`
- PMID and PMCID; website access-date wording `Last time I checked:`.

## Known gaps

CSL 1.0.2 does not provide a general-purpose character transformation, so alternating character case is not implemented in this stylesheet. The requested conversational duplicate-year suffixes cannot be emitted as arbitrary dynamic strings by ordinary CSL; the draft currently uses conventional year suffixes. Zotero/CSL item types also merge several distinctions FART wants to make: for example, broadcasts include podcasts, video recordings overlap with films, and speech can represent presentations or posters. Labels that depend on these distinctions are therefore deferred to companion tooling rather than guessed in the CSL file.

Other deferred behavior includes abstract/preprint/review-status labels, corrected/retracted labels, social-media-versus-forum classification, anonymous-personal-communication attribution, AI model metadata, dreams, and individual/collective thoughts. The style should not apply a label when the Zotero item type cannot identify the category unambiguously.

## Next engineering steps

1. Validate `fart.csl` against the official CSL 1.0.2 schema.
2. Install and render it in Zotero; fix all processor/schema errors.
3. Create representative Zotero test records and golden output fixtures.
4. Build a deterministic companion formatter for alternating case, custom duplicate-year suffixes, and FART-only labels.
5. Preserve source metadata and make all transformations reproducible.
6. Add automated tests, CI, contribution guidance, and release notes.

## Release acceptance criteria

Do not call a release stable until the CSL validates against the official schema, installs and renders in Zotero, has fixtures for each supported item type, matches checked-in golden output, has deterministic duplicate-year handling, and documents its limitations and companion-tool requirements.

## Publication pathway

A software paper or metapaper may be considered once the package is genuinely reusable, documented, tested, openly licensed, and released. Publication suitability and acceptance are not guaranteed by the existence of a CSL file alone.
