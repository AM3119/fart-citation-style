# Implementation Plan

## Current status

The project is in the specification and prototype stage. The initial CSL scaffold is experimental and has not yet been validated against the official CSL schema or tested comprehensively in Zotero. Do not describe it as release-ready.

## Architecture

The intended deliverable is a small, reusable project with:

1. A Zotero-compatible CSL style for the subset of FART that CSL can express reliably.
2. A companion formatter or metadata-preparation tool for behavior CSL cannot reliably implement, especially alternating character case and conversational duplicate-year suffixes.
3. A documented mapping from the FART editorial specification to Zotero item types and CSL variables.
4. A fixture-based test suite with expected citations and bibliography entries.
5. Installation, usage, limitations, and contribution documentation.

The companion component must not silently alter source metadata. Any transformed output should be reproducible and traceable to the original Zotero fields.

## Technical constraints to investigate

- CSL has limited support for arbitrary character-by-character title transformations.
- CSL disambiguation is designed around conventional author/year disambiguation, not arbitrary conversational suffix text.
- Bibliography ordering by first citation appearance may depend on citation-number behavior and processor support.
- Zotero item types do not necessarily map one-to-one to every FART category.
- Labels for overlapping statuses (for example, preprint plus not peer reviewed) need deterministic precedence.

## Development sequence

1. Validate the existing CSL scaffold against the official CSL schema.
2. Test installation and rendering in Zotero with a minimal fixture library.
3. Build a mapping table for every supported Zotero item type.
4. Implement the CSL-expressible rules.
5. Implement and test companion transformations for rules outside CSL.
6. Add regression fixtures for citations, bibliography order, special labels, missing identifiers, and duplicate author–year groups.
7. Add continuous integration for schema validation and tests.
8. Publish versioned releases with a changelog and an open-source licence.

## Release acceptance criteria

A release candidate should not be called stable until:
- The CSL file validates against the current official CSL schema.
- Zotero installs and renders the style without errors.
- Every documented supported item type has at least one fixture.
- Citation and bibliography output matches checked-in expected output.
- Missing DOI/URL behavior is tested.
- Duplicate-year behavior is deterministic.
- Known CSL limitations and companion-tool requirements are clearly documented.
- The project has a licence, contribution guidance, and versioned release notes.

## Publication pathway

A software paper or metapaper may be considered for a software-focused journal once the package is genuinely reusable, documented, tested, openly licensed, and released. Publication suitability and acceptance are not guaranteed by the existence of a CSL file alone.
