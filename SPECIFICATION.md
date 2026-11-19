# FART Citation Style Specification

**FART** means **Fancy Academic Reference Thingy**. This document records the current editorial specification. It is intentionally multidisciplinary and uses an author–date system.

This is a living specification. Items marked **Open implementation issue** are editorial decisions that still need a deterministic technical rule or validation against Zotero/CSL behavior.

## 1. Core citation system

- Use author–date citations only; numeric citations are not part of the style.
- In-text citations use parentheses: `(Smith, 2026)`.
- Two authors: `(Smith and Jones, 2026)`.
- Three or more authors: `(Smith and friends, 2026)`.
- Separate multiple citations in one parenthesis with the exact phrase `and also`.
- Bibliography order follows the order in which references first appear in the text, not alphabetical order.
- Publication dates are represented by year only for ordinary publications.
- Page numbers for direct quotations are optional.
- Retain complete author metadata in the underlying reference record even when the rendered citation abbreviates the author group.

## 2. Author names

- In the bibliography, prepend **Formulated by:** to the author list.
- Render the first three authors using their full names (given name(s) and surname); if there are more than three authors, follow the first three with `and friends`.
- Retain compact author–date names in in-text citations; the full-name rule applies to bibliography author lists unless a later decision explicitly changes this.
- Preserve all authors in stored metadata.

## 3. Titles and publication details

- Remove capitalization from titles: render titles in lowercase throughout, including article, book, podcast episode, and video titles.
- Prepend **Hereby dubbed:** to every applicable title.
- Prepend **Brought to you by:** to journal names and equivalent source/venue names where applicable.
- Article and book titles appear in quotation marks.
- Journal names use their full official titles, are italicized, and are never abbreviated.
- Cited blog posts and non-academic articles carry the exact label `[oh a blogger!]`.
- Volume numbers are bold.
- Include issue numbers when available.
- Software names retain their official capitalization.

**Implementation note:** CSL supports lowercase title casing for many fields. Special source classification (particularly distinguishing blogs/non-academic articles from scholarly web publications) may require explicit Zotero item metadata or companion tooling.

## 4. Identifiers and links

- Include DOI whenever available, in canonical `https://doi.org/...` form.
- If no DOI exists but a URL does, include the URL.
- If neither DOI nor URL exists, append exactly: `I guess.`
- Include PMID and PMCID whenever available.
- Include ISBN for books whenever available.
- Do not include ORCID.
- Website references include an access date with the exact wording `Last time I checked:`.

## 5. Books and chapters

- Book references include publisher and publication location.
- Include edition when applicable.
- Identify editors explicitly as editor(s), using `ed.` or `eds.`.
- Book chapters include the chapter page range.

## 6. Special reference types and exact labels

Use the following exact labels where the corresponding item type applies:

| Reference type | Label |
|---|---|
| Abstract | `[Only the abstract tho]` |
| Conference presentation | `[Only a conference presentation tho]` |
| Poster | `[Only a poster tho]` |
| Thesis | `[Some thesis of a sort]` |
| Dissertation | `[Some dissertation of a sort]` |
| Preprint | `[Only a preprint tho]` |
| Retracted publication | `[Oops]` |
| Corrected publication | `[Corrected]` |
| Film/documentary | `[Someone made a movie]` |
| Standalone online video or livestream | `[Someone made a video]` |
| Podcast episode | `[Yap]` |
| Social media post, reply, comment, quote-post, or meme | `[Someone's an influencer]` |
| AI-generated content, including text, image, audio, or video | `[AI slop]` |
| Dream | `[It came to me in a dream]` |
| Individual thought | `[I thunk this]` |
| Collective thought | `[We thunk this]` |
| Anonymous personal communication | `[Somebody who definitely exists]` |

- A publication not yet peer reviewed uses `[Not peer reviewed yet]`. This may apply to preprints and accepted-but-not-formally-published work.
- Retracted items must still record the actual retraction status/date when known.
- Corrected items should retain the correction information where available.
- Open-access publications receive no special label.
- News articles follow the ordinary format appropriate to their venue.
- Forum threads use the ordinary website format.
- Datasets use the closest applicable existing format; there is no separate dataset format.
- Patents have their own reference format.
- Legislation, regulations, and court judgments have their own legal-document formats.

**Open implementation issue:** The interaction between `[Only a preprint tho]` and `[Not peer reviewed yet]` needs a fixed ordering and duplicate-label rule.

## 7. Software

Software has its own reference format. Include:
- Official software name and capitalization.
- Version whenever available.
- Developer.
- DOI where available; otherwise URL where available.
- Apply the general `I guess.` fallback only if neither DOI nor URL is available.

## 8. Podcasts, media, and online content

- Cite individual podcast episodes, not the podcast series as a whole.
- Podcast references use the exact label `[Yap]`.
- Podcast episode titles are lowercase and introduced by **Hereby dubbed:**; the show/source is introduced by **Brought to you by:** where applicable.
- Include show, host, episode information, and date where available.
- Video titles are lowercase and introduced by **Hereby dubbed:**.
- Social media references include display name and username/handle.
- Deleted or inaccessible social posts may be cited when an archived copy exists; include original and archive URLs where available.
- AI-generated references identify the tool/model when known and the human author/publisher when provided. ChatGPT conversations are included; record provider, model, date, title, and URL where available.

## 9. Personal communications and informal knowledge

- Personal communications include conversations, private messages, emails, and other unpublished communications.
- A name or anonymized identifier may be used.
- Anonymous personal communications use exactly `[Somebody who definitely exists]`.
- Include date and medium where available.
- Dreams record the dreamer, date recorded, and title or brief description where available.
- Individual and collective thoughts use the labels above; date the record when the thought was recorded.
- There is no special “reconstructed from memory” label.

## 10. Duplicate author–year works

For multiple works by the same author group in the same year, use conversational suffixes:
- First: `(Smith and friends, 2026)`
- Second: `(Smith and friends, 2026. The other one btw)`
- Third: `(Smith and friends, 2026. The other other one btw)`

The word `btw` is always lowercase.

**Open implementation issue:** A deterministic suffix-generation algorithm, including sorting and bibliography matching, must be specified and tested. The same disambiguator must appear consistently in citations and bibliography.

## 11. Bibliography order and metadata integrity

- Sort bibliography entries by first citation appearance.
- Preserve all source metadata, including full author lists and identifiers, even where the rendered style abbreviates or omits fields.
- Do not invent missing bibliographic data.
- Where a field is unavailable, follow the explicit fallback rules above.

## 12. Rendering language

- In bibliography entries, use the exact bold prefix **Formulated by:** before authors.
- Use the exact bold prefix **Hereby dubbed:** before titles.
- Use the exact bold prefix **Brought to you by:** before journal or equivalent source names.
- Multiple in-text citations are joined by `and also`.

## 13. Scope and quality goals

FART is intended to be a useful, reusable, multidisciplinary citation style, not merely a joke stylesheet. The implementation must document unsupported cases, test against representative Zotero item types, and distinguish style rules from features requiring companion software.
