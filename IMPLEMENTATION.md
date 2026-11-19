# FART implementation audit — standalone CSL

## Architectural decision

FART is one standalone CSL 1.0.2 style. No companion package, Zotero plugin, external formatter, or bibliography post-processing is part of the project.

## Implemented in the CSL draft

- Author–date citations, two-author conjunction, three-plus author abbreviation, and the exact "and also" citation-group delimiter.
- Bibliography ordering by citation-number (first citation appearance).
- First three bibliography authors in full, followed by "and friends" for larger author groups.
- Lowercase quoted titles, bold labels, full journal names, bold volume numbers, and issue/page output.
- DOI, URL, PMID, PMCID, and ISBN rendering plus the specified no-identifier fallback.
- Native branches for journal articles/reviews, books, chapters, software, datasets, personal communications, conference papers/presentations, interviews, blog posts, standards, regulations, reports, documents, book reviews, patents, legal cases, legislation, theses, webpages, magazine/newspaper articles, broadcasts, podcasts, and generic sources.
- Podcast item mapping uses CSL `song`, as Zotero maps its Podcast item type to that CSL type.
- Anonymous personal communications receive the exact attribution [Somebody who definitely exists] in citations and the bibliography when no author is supplied.
- Zotero's `Status` metadata overrides the default type label, allowing the exact labels for abstracts, posters, dissertations, preprints, retractions, corrections, AI-generated material, dreams, thoughts, social media, videos, and other user-classified material.
- Default labels are limited to unambiguous Zotero/CSL types: thesis, podcast, blog post, and presentation. Generic manuscripts, forum posts, and video recordings are not automatically mislabeled.

## CSL constraints and metadata conventions

- Enter special labels in Zotero's Extra field as `Status: [Exact label]`. If two labels apply, enter both in the same Status value in the required order.
- For social posts, place the display name and @handle together in the creator name when Zotero does not expose a separate CSL variable for the handle.
- For AI-generated material, record the tool/model in the publisher or other suitable source metadata and use Status: [AI slop].
- Film and general video recording map to the same CSL `motion_picture` type in Zotero. Use Status: [Someone made a movie] or Status: [Someone made a video] to distinguish them.
- A retraction or correction cannot be discovered by CSL; the relevant Status label must be supplied by the user.
- CSL automatically renders BC for negative years and supports a localized AD term. FART overrides AD to CE. CSL does not provide a conditional test for positive years >=1000, so the current CSL cannot append CE to every modern four-digit year while avoiding an erroneous CE on BC dates. The year-era requirement is therefore only partially expressible in standalone CSL.
- CSL standard year suffixes a, b, c are used for duplicate author/year works. Custom conversational suffixes are not available.
- Zotero's CSL processor handles citation-number sorting; the exact Google Docs integration still needs a rendered fixture.

## Validation still required

The file has been updated to declare CSL 1.0.2 and has had an XML well-formedness check. It has not yet passed the official RELAX NG CSL schema validator or a complete citeproc-js rendering matrix. It is not yet release-ready. The next validation pass must cover all native branches, Status overrides, anonymous communications, duplicate-year suffixes, negative-year dates, and first-citation bibliography order.
