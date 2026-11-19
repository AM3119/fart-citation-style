# FART Citation Style Specification

**FART** means **Fancy Academic Reference Thingy**. This is a multidisciplinary author–date citation style.

## 1. Implementation constraint

- FART must be a **standalone CSL style**.
- No companion package, Zotero plugin, external formatter, post-processing, or manual bibliography editing is permitted or required.
- Use CSL capabilities and ordinary Zotero item metadata only.
- If CSL cannot implement a requested behavior, simplify that behavior transparently rather than introducing a companion.
- A metadata value may supply information CSL cannot infer; it must not be described as automatic detection.

## 2. Core citation system

- Use author–date citations only; numeric citations are not part of the style.
- In-text citations use parentheses: (Smith, 2026).
- Two authors: (Smith and Jones, 2026).
- Three or more authors: (Smith and friends, 2026).
- Separate multiple citations in one parenthesis with the exact phrase "and also".
- Bibliography order follows the order in which references first appear in the text, not alphabetical order.
- Publication dates are represented by year only for ordinary publications. Append AC after Common Era years and BC after Before Common Era years, if this can be rendered reliably by Zotero CSL.
- Page numbers for direct quotations are optional.
- Retain complete author metadata in the underlying reference record even when the rendered citation abbreviates the author group.

## 3. Author names

- In the bibliography, prepend **Formulated by:** to the author list.
- Render the first three bibliography authors using their full given name(s) and surname, not initials; if there are more than three authors, follow the first three with "and friends".
- In-text citations: one author, surname; two authors, surnames joined by "and"; three or more, first surname followed by "and friends".
- Preserve all authors in stored metadata.

## 4. Titles and publication details

- Render titles in lowercase, including article, book, podcast episode, and video titles.
- Prepend **Hereby dubbed:** to every applicable title.
- Prepend **Brought to you by:** to journal names and equivalent source/venue names where applicable.
- Article and book titles appear in quotation marks.
- Journal names use their full official titles, are italicized, and are never abbreviated.
- Blog posts and non-academic articles carry the exact label [oh a blogger!] when the item metadata identifies them as such.
- Volume numbers are bold.
- Include issue numbers when available.
- Software names retain their official capitalization.

## 5. Identifiers and links

- Include DOI whenever available, in canonical https://doi.org/... form, preceded by the bold prefix **Fancy identifier:**.
- If no DOI exists but a URL does, include the URL.
- If neither DOI nor URL exists, append exactly: "I guess."
- Include PMID and PMCID whenever available. Precede them with the bold prefix **For the quacks:**.
- Include ISBN for books whenever available.
- Do not include ORCID.
- Website references include an access date with the exact wording **Last time I checked:**.

## 6. Books and chapters

- Book references include publisher and publication location.
- Include edition when applicable.
- Identify editors explicitly as editor(s), using ed. or eds.
- Book chapters include the chapter page range.

## 7. Special reference types and exact labels

Use these exact labels when the Zotero item type or supplied metadata identifies the category:

| Reference type | Label |
|---|---|
| Abstract | [Only the abstract tho] |
| Conference presentation | [Only a conference presentation tho] |
| Poster | [Only a poster tho] |
| Thesis | [Some thesis of a sort] |
| Dissertation | [Some dissertation of a sort] |
| Preprint | [Only a preprint tho] |
| Retracted publication | [Oops] |
| Corrected publication | [Corrected] |
| Film/documentary | [Someone made a movie] |
| Standalone online video or livestream | [Someone made a video] |
| Podcast episode | [Yap] |
| Social media post, reply, comment, quote-post, or meme | [Someone's an influencer] |
| AI-generated content | [AI slop] |
| Dream | [It came to me in a dream] |
| Individual thought | [I thunk this] |
| Collective thought | [We thunk this] |
| Anonymous personal communication | [Somebody who definitely exists] |
| Not peer reviewed | [Not peer reviewed yet] |

- A publication not yet peer reviewed may use [Not peer reviewed yet]; this may apply to preprints and accepted-but-not-formally-published work.
- Retracted items should retain actual retraction information when known. CSL cannot independently verify retraction or correction status.
- If an item type cannot distinguish a special category, an explicit Zotero Status metadata value may supply the exact label. This is metadata entry, not automatic classification.
- If both preprint and not-peer-reviewed labels apply, retain both labels in that order.
- Open-access publications receive no special label.
- News articles follow the ordinary format appropriate to their venue.
- Forum threads use the ordinary website format.
- Datasets use the closest applicable existing format; there is no separate dataset format.
- Patents have their own reference format.
- Legislation, regulations, and court judgments have their own legal-document formats.

## 8. Software

Software has its own reference format. Include official software name and capitalization, version whenever available, developer, and DOI or URL. Use the general "I guess." fallback only if neither DOI nor URL is available.

## 9. Podcasts, media, and online content

- Cite individual podcast episodes, not the podcast series as a whole.
- Podcast references use exact label [Yap].
- Podcast episode titles are lowercase and introduced by **Hereby dubbed:**; the show/source is introduced by **Brought to you by:** where applicable.
- Include show, host, episode information, and date where available.
- Video titles are lowercase and introduced by **Hereby dubbed:**.
- Social media references include display name and username/handle.
- Deleted or inaccessible social posts may be cited when an archived copy exists; include original and archive URLs where available.
- AI-generated references identify the tool/model when known and human author/publisher when provided. ChatGPT conversations are included; record provider, model, date, title, and URL where available.

## 10. Personal communications and informal knowledge

- Personal communications include conversations, private messages, emails, and other unpublished communications.
- A name or anonymized identifier may be used.
- Anonymous personal communications use exactly [Somebody who definitely exists].
- Include date and medium where available.
- Dreams record the dreamer, date recorded, and title or brief description where available.
- Individual and collective thoughts use the labels above; date the record when the thought was recorded.
- There is no special "reconstructed from memory" label.

## 11. Duplicate author–year works

- Use CSL's standard year suffixes (a, b, c, etc.) for works with the same author group and year.
- The same suffix must appear consistently in in-text citations and bibliography.
- The custom conversational suffixes (e.g. ". The other one btw") are not supported by a normal CSL style and are intentionally dropped to preserve the standalone requirement.

## 12. Bibliography order and metadata integrity

- Sort bibliography entries by first citation appearance, not alphabetically.
- Preserve all source metadata, including full author lists and identifiers, even where the rendered style abbreviates or omits fields.
- Do not invent missing bibliographic data.
- Where a field is unavailable, follow the explicit fallback rules above.

## 13. Quality goals

FART must be a useful, reusable, multidisciplinary citation style. The CSL file must be schema-validated and tested against representative Zotero item types and Google Docs refresh/edit workflows before it is described as complete.
