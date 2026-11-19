# FART implementation audit — standalone CSL

## Architectural decision

FART is a single CSL style. No companion JavaScript package, Zotero plugin, external formatter, or bibliography post-processing is part of the project. Zotero uses CSL styles with the citeproc-js processor to create citations and bibliographies; the CSL file is the complete deliverable.

## Confirmed in Google Docs

The user's earlier Google Docs test visually confirmed:
- Bold **Formulated by:**, **Hereby dubbed:**, **Brought to you by:**.
- First three bibliography authors in full; additional authors become "and friends".
- Lowercase titles, bold volume, AC year marker, and DOI label.

This is a limited visual confirmation, not a full compatibility test.

## Present in the current CSL draft

- Author–date citations and the "and also" citation-group delimiter.
- Bibliography sort key set to citation-number.
- First-three-author bibliography rendering.
- Lowercase title formatting.
- Bold labels and DOI formatting.
- PMID/PMCID output when metadata is present.
- URL fallback and "I guess." fallback.
- Native CSL branches for software, datasets, personal communications, conference papers, interviews, blog posts, podcasts, films, books, chapters, legal sources, theses, preprints, and common article/web types.
- Zotero Status metadata is printed verbatim, allowing exact labels such as [Oops], [Corrected], [AI slop], [Only a poster tho], [Only the abstract tho], [Some dissertation of a sort], [It came to me in a dream], [I thunk this], [We thunk this], and [Not peer reviewed yet].

## Remaining gaps and validation work

1. Zotero's podcast mapping to CSL song is documented, but the podcast branch still needs a real Zotero fixture to confirm the output and mapped episode/show fields.
2. Zotero maps films and general video recordings to the same CSL motion_picture type. FART cannot distinguish those labels from type alone; use the explicit Status field for [Someone made a video] when appropriate.
3. Abstract, poster, dissertation, AI-generated content, dreams, thoughts, social posts, and correction/retraction labels require the exact label in Zotero's Status field where no unique CSL type is supplied. This is supported metadata, not automatic detection.
4. Retraction and correction status cannot be independently verified by CSL.
5. Custom conversational duplicate-year suffixes are outside normal CSL year-suffix formatting. Use standard a, b, c suffixes consistently in citations and bibliography.
6. The current hard-coded AC suffix is not a complete BC implementation. Era-aware output must be tested with negative-year CSL dates; do not claim BC support until it passes.
7. Bibliography order by first citation appearance must be verified in the target Zotero/Google Docs workflow.
8. All branches need rendered fixtures; XML/schema validity alone is insufficient.

## Metadata policy

Where CSL cannot infer a fact, it may format metadata the user has actually supplied. Status may contain exact labels such as [Oops], [Corrected], [AI slop], [It came to me in a dream], [I thunk this], [We thunk this], or [Somebody who definitely exists]. This is an explicit metadata convention, not automatic detection. Never invent status information.

## Validation status

The current 0.9 CSL has not yet been rerun through the official CSL validator after the latest changes. It is not release-ready. Required next work is to correct the CSL branches, validate the file, and test representative Zotero items in Zotero's Style Editor and Google Docs. Zotero provides a Style Editor/preview for rendering selected library items against a style.
