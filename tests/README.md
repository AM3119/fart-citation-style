# FART rendered test plan

Each test needs a Zotero item, expected in-text citation, expected bibliography entry, and observed output from Zotero Style Preview or Google Docs.

## Core
- One, two, three, and four-plus authors.
- Full first three author names in bibliography.
- Multiple citations separated by "and also".
- Bibliography ordered by first citation appearance.
- Duplicate author/year pairs, at least three; expect standard a, b, c suffixes.
- BCE date rendering via CSL's native BC term; short AD dates should use the native AD term. Four-digit AD years currently lack an AD suffix because CSL cannot conditionally append it without also affecting BC dates.
- Bold date prefix and all required typography.

## Bibliographic fields
- DOI, URL-only, neither.
- PMID only, PMCID only, both, neither.
- ISBN.
- Journal with volume, issue, page range, article number.
- Book, edited book, chapter, publisher/place, edition.
- Full official journal title versus abbreviation.

## Item-type labels
- Blog Post versus Webpage.
- Magazine Article and Newspaper Article (must not automatically be called blogs).
- Forum Post versus social media post; social posts use explicit `Status: [Someone's an influencer]` and include display name plus @handle in the creator name.
- Preprint versus unpublished manuscript; preprints use explicit `Status: [Only a preprint tho]` so ordinary unpublished manuscripts are not mislabeled.
- Abstract and Poster using explicit `Status: [Only the abstract tho]` / `Status: [Only a poster tho]` metadata; Presentation uses the native speech branch.
- Thesis versus dissertation; dissertations use explicit `Status: [Some dissertation of a sort]`.
- Podcast versus radio broadcast and audio recording.
- Film versus Video Recording; use explicit Status labels because both map to the same CSL type.
- Software with and without version.
- Retracted versus corrected versus in-press journal article (positive and negative tests).
- AI content, dream, individual thought, collective thought, retraction, correction, and other manually classified content via exact Status values; personal communication including anonymous and named cases.

## Rule
For manually classified items, enter the exact label in Zotero's Extra field as `Status: [Exact label]`. For multiple applicable labels, use one Status value containing both labels in the required order. A special label must have at least one positive and one negative test. Do not infer a label from an ambiguous generic item type.

Validate the style against the official CSL 1.0.2 schema before rendering tests. All tests are performed against the standalone CSL file in Zotero's Style Editor/preview and then confirmed in Google Docs.