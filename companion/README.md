# FART companion rules

This package contains deterministic helpers for FART rules that CSL cannot reliably express by itself.

## Scope

- AC/BC year rendering from a signed numeric year.
- Conversational duplicate-year suffix generation.
- Full first-three-author rendering.
- Special-label normalization.
- A basic HTML bibliography renderer with FART prefixes and conditional DOI/PubMed output.

## Run tests

Requires Node.js 18 or later:

```sh
node --test
```

## Important integration limitation

This is a companion library, not yet a Zotero plugin and not automatically invoked by Zotero's Google Docs integration. The CSL handles the core format and explicit Status labels; this module supplies BC-era year rendering and conversational duplicate-year suffixes for a future integration. It can be used by a future Zotero plugin or export workflow. The current CSL remains the live style for Zotero citations. Do not replace Zotero-generated bibliographies with this renderer in an active manuscript until a tested integration preserves citation-field links and update behavior.

## Input shape

The renderer accepts normalized CSL-JSON-like objects. `author` is an array of `{given, family}` objects; `year` is a signed integer; optional fields include `title`, `container-title`, `publisher`, `volume`, `issue`, `page`, `DOI`, `PMID`, `URL`, and `labels`.

Labels may be supplied using the keys in `LABELS` exported by the module, e.g. `["retracted", "notPeerReviewed"]`.
