# Implementation Audit — FART redesign 0.6

## Why this document exists

The CSL file has been iterated without a complete feature-by-feature verification pass. This document supersedes the older draft notes and records what the current `fart.csl` actually does, what it does not do, and what requires companion tooling. A rule appearing in `SPECIFICATION.md` does not mean it is implemented.

## Confirmed working in the user's Google Docs test

The user supplied a rendered bibliography screenshot showing:
- **Formulated by:** appears in bold.
- The first three authors appear with full given names and surnames; additional authors become `and friends`.
- **Hereby dubbed:** appears in bold.
- Titles render in lowercase.
- **Brought to you by:** appears in bold before the journal/proceedings source.
- Volume is bold.
- `AC` appears after the year.
- **Fancy identifier:** appears in bold before the DOI.
- In-text citations use `and friends` for 3+ authors.

The screenshot did not test all item types or all metadata conditions.

## Current CSL feature audit

| Requirement | Current state | Notes |
|---|---|---|
| Author–date citations | Implemented | Rendered in Google Docs. |
| Multiple citations joined by `and also` | Implemented in CSL | Needs a multi-citation visual fixture. |
| One author / two authors / 3+ author in-text rules | Partially tested | Screenshot confirms 3+ form, not every case. |
| First three bibliography authors as full names | Confirmed in screenshot | Fourth+ replaced by `and friends`. |
| **Formulated by:** | Confirmed in screenshot | Bold prefix. |
| **Hereby dubbed:** | Confirmed in screenshot | Bold prefix. |
| Lowercase titles | Confirmed in screenshot | Software proper names are an exception in the specification, but the current generic title macro lowercases them too. |
| **Brought to you by:** before journals/proceedings | Confirmed in screenshot | Not all branches use the correct source field/prefix yet. |
| Bold volume | Confirmed in screenshot | Issue and page formatting need more fixtures. |
| `AC` after years | Confirmed in screenshot | Current CSL hardcodes AC for every date; BC dates are therefore wrong/not supported. |
| Bold date prefix | Not implemented | Wording has not been finalized by the user. |
| **Fancy identifier:** before DOI | Confirmed in screenshot | Current style also adds it before URL-only links, although the stated rule specifically names DOI; this should be corrected. |
| **For the quacks:** before PMID | Not verified; implementation defective | Current macro contains an unconditional literal label and does not correctly gate it on PMID/PMCID presence. |
| PMCID | Partially implemented | Current output/conditional behavior not verified. |
| ISBN | Partially implemented | Included in book branch; no rendered test. |
| Bibliography in first-citation order | Intended, unverified | Needs multi-entry fixture in Zotero/Google Docs. |
| DOI/URL/fallback | Partially implemented | DOI and URL branches exist; fallback needs test. |
| Publisher and publication place for books | Partially implemented | Output order/prefix needs review. |
| Chapter editor labels and page range | Partially implemented | Chapter author/editor formatting not tested. |
| Software-specific format | Not implemented | A previous invalid branch was removed to pass CSL validation. |
| Patents and legal references | Partial | Branches exist, but several source fields and formats need testing. |
| `[oh a blogger!]` | Over-broad/partial | Current branch labels several generic webpage/news/magazine types, not a reliably classified blog/non-academic item. Zotero has a dedicated Blog Post item type; the mapping should use it explicitly. |
| `[Oops]` retracted | Not implemented | There is no retraction branch or label anywhere in the current CSL. |
| `[Corrected]` | Not implemented | No correction branch or label. |
| `[Not peer reviewed yet]` | Not implemented | No review-status implementation. |
| `[Only a preprint tho]` | Not implemented | No dedicated preprint branch. |
| Abstract / presentation / poster labels | Not implemented | Current type branches do not provide these exact labels. |
| Thesis / dissertation labels | Not implemented | Current thesis branch omits the agreed label and does not distinguish thesis from dissertation. |
| Podcast `[Yap]` | Not implemented correctly | Current broadcast branch does not cover Zotero's dedicated Podcast item type. |
| Film / video labels | Not implemented correctly | Current branches use generic motion-picture/speech types rather than the complete Zotero item-type mapping. |
| Social media `[Someone's an influencer]` | Not implemented | Forum/social items are not distinguished. |
| AI `[AI slop]` | Not implemented | No model/provider metadata handling. |
| Dreams / individual / collective thoughts | Not implemented | No dedicated Zotero item metadata convention or companion behavior. |
| Anonymous personal communications | Not implemented | No attribution rule in current CSL. |
| Duplicate author-year conversational suffixes | Not implemented | CSL currently uses conventional year-suffix behavior; requested custom phrases require companion logic. |
| BC date support | Not implemented | Current year macro always appends AC. |
| Full official journal names | Partially implemented | Uses container-title, but Zotero may substitute abbreviations depending on data/settings. Needs tests. |
| ORCID exclusion | No explicit output | No ORCID macro is present. |
| Full metadata preservation | Depends on Zotero records | CSL does not delete source metadata. |

## Retraction and correction: important technical distinction

CSL 1.0.2 has a `status` variable for publication status, and Zotero allows CSL variables such as `Status: ...` to be supplied through the Extra field. However, CSL conditional logic can test whether a variable is present, not compare its text value to the literal word `retracted`. A naive `if variable="status"` would incorrectly label other statuses (such as `in press`) as retracted. Therefore the current CSL cannot safely infer `[Oops]` from arbitrary status values.

A robust implementation needs one of:
1. A dedicated Zotero plugin/companion that reads structured retraction/correction status and adds the correct label at render time; or
2. A documented, explicit FART metadata convention with a dedicated supported CSL field/value that can be safely distinguished by the processor.

Do not claim automatic retraction detection until this is implemented and tested. Zotero's own retraction-related metadata/plugin behavior must also be investigated before choosing the integration route.

## Zotero item-type mapping audit required

Zotero has dedicated item types including Blog Post, Podcast, Preprint, Presentation, Film, Video Recording, Software, Thesis, and Journal Article. The current CSL does not correctly cover several of these. The next pass must map actual Zotero item types to CSL types using Zotero's current mapping, rather than guessing CSL type names. The Zotero documentation explains that item types are broad categories and provides the official item-type and Extra-field conventions.

## Next steps — required before another user test

1. Rebuild the CSL branches using the current Zotero-to-CSL item-type mapping.
2. Add a tested metadata convention or companion implementation for retraction/correction and review-status labels.
3. Fix the PMID/PMCID conditional so **For the quacks:** only appears when an identifier exists.
4. Apply **Fancy identifier:** only to DOI; keep URL-only fallback separate unless the user changes the rule.
5. Implement correct Blog Post, Podcast, Preprint, Presentation, Film, Video Recording, Software, and thesis/dissertation handling.
6. Add a bold date prefix after the user chooses its exact wording.
7. Add test records and expected outputs for every special label and every item type.
8. Validate the CSL schema, then render fixtures in Zotero's Style Preview and Google Docs.
9. Do not call the style complete until the feature matrix is tested end-to-end.

## Release rule

A CSL validator passing only establishes schema validity. It does not establish that the requested citation behavior is implemented. FART releases must include both schema validation and rendered golden-output tests.
