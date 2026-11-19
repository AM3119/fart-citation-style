# FART implementation audit — redesign 0.9

## Confirmed in Google Docs
- Bold **Formulated by:**, **Published on:**, **Hereby dubbed:**, **Brought to you by:**.
- First three bibliography authors in full; additional authors become `and friends`.
- Lowercase titles, bold volume, AC year marker, DOI label.
- In-text 3+ author abbreviation.

## CSL behavior in the current file
- Multiple in-text citations use `and also`.
- Bibliography sorting uses citation-number (first-citation order).
- `Status` is rendered verbatim from Zotero Extra. This supports explicit FART labels but does not automatically verify a source's status.
- PMID/PMCID prefix is conditional on at least one identifier being present.
- DOI receives **Fancy identifier:**; URL-only references print the URL; no DOI/URL prints `I guess.`.
- Blog/webpage, forum/social post, preprint/manuscript, thesis, podcast/song, presentation/speech, and film/motion-picture branches exist. Zotero's mappings are not one-to-one for several types, so ambiguous cases should use explicit `Status` labels rather than inferred labels.

## Explicit Zotero metadata conventions
Use a separate line in Extra:
- Retracted: `Status: [Oops]`
- Corrected: `Status: [Corrected]`
- Not peer reviewed: `Status: [Not peer reviewed yet]`
- Preprint: `Status: [Only a preprint tho]`
- Both: `Status: [Only a preprint tho] [Not peer reviewed yet]`
- AI-generated: `Status: [AI slop]`
- Dream: `Status: [It came to me in a dream]`
- Individual thought: `Status: [I thunk this]`
- Collective thought: `Status: [We thunk this]`
- Anonymous personal communication: `Status: [Somebody who definitely exists]`
- Video when Zotero maps it to the same CSL type as film: `Status: [Someone made a video]`
- Poster when mapped as a presentation: `Status: [Only a poster tho]`
- Dissertation when Zotero's generic Thesis type is used: `Status: [Some dissertation of a sort]`
- Abstract: `Status: [Only the abstract tho]`
- Social media when it is not mapped to CSL `post`: `Status: [Someone's an influencer]`
- Conference presentation: `Status: [Only a conference presentation tho]`

Zotero's Extra field supports CSL variables such as Status, PMID, and PMCID. The style prints the literal Status value. This is user-supplied classification, not automatic verification.

## Companion module
- Provides deterministic AC/BC year rendering from signed years.
- Provides the conversational duplicate-year suffix algorithm.
- Provides helper functions for full bibliography author names, in-text citations, special labels, and an HTML bibliography entry.
- Includes Node test cases and a GitHub Actions workflow.

## Not yet integrated end-to-end
The companion module is not a Zotero plugin and is not called by Zotero's Google Docs integration. Its BC-year and custom duplicate-suffix behavior therefore does not automatically replace CSL output in Google Docs. A Zotero plugin or supported word-processor integration is required to connect those transformations while preserving citation field codes. Zotero's plugin documentation describes the client plugin APIs and word-processor integration as separate extension points: https://www.zotero.org/support/dev/client_coding/plugin_development.

## Validation
The current 0.9 CSL has not yet been rerun through the official validator after the latest changes. Passing schema validation also does not prove every Zotero item-type branch renders correctly. Rendered fixtures are required for that.