# FART implementation audit — redesign 0.7

This audit distinguishes tested output from code that merely exists. A rule is not implemented until a representative Zotero item has been rendered and checked.

## Confirmed by the user's Google Docs screenshot

- Bold Formulated by:, Hereby dubbed:, and Brought to you by:.
- Full given names for the first three bibliography authors, then and friends.
- Lowercase titles.
- Bold volume numbers.
- AC after the year.
- Bold Fancy identifier: before DOI.
- In-text and friends for three or more authors.

## Fixes in redesign 0.7

- For the quacks: is now conditional on PMID or PMCID being present.
- Fancy identifier: now appears before DOI only. A URL-only reference prints its URL without the DOI-specific label.
- Blog/webpage references and forum/social posts have separate branches: webpage gets [oh a blogger!]; post gets [Someone's an influencer]; newspaper and magazine articles no longer receive the blogger label by default.

These are code-level corrections; the new branches still require Zotero rendering tests against real Blog Post, Webpage, Forum Post, Magazine Article, and Newspaper Article items.

## Known features not yet implemented

- [Oops] / [Corrected]: not implemented. CSL can test whether status exists, but cannot compare its value to retracted or corrected. A generic status check would mislabel items marked in press or forthcoming. Requires companion integration or an explicit structured metadata mechanism.
- [Not peer reviewed yet] and [Only a preprint tho]: not implemented. Need a deterministic metadata convention and duplicate-label ordering.
- Abstract, conference presentation, poster, thesis, and dissertation labels: not implemented.
- Podcast, film, and video labels: not implemented safely. Zotero's item-type-to-CSL mapping must be tested before applying labels; generic fallback types can collapse distinct Zotero item types.
- AI-generated content, dreams, individual/collective thoughts, and anonymous personal communications: not implemented.
- Software-specific formatting: not implemented.
- Custom duplicate-year phrases: not implemented; ordinary CSL year suffixes remain.
- BC dates: not implemented; current CSL hardcodes AC.
- Bold date prefix: pending the user's exact wording.
- PMID/PMCID display, ISBN, book/chapter formats, citation-order bibliography, and and also: require dedicated output fixtures beyond the user's current screenshot.

## Retraction metadata

Zotero documents Status as a CSL variable that can be entered in Extra, with examples including in press. CSL conditional tests can test variable presence, not equality to a particular string. Therefore do not use an if-variable-status condition to emit [Oops]: it would falsely label non-retracted statuses.

Official references:
- https://www.zotero.org/support/kb/item_types_and_fields
- https://citationstyles.org/downloads/specification.html

## Release gate

No release is complete until the CSL passes the official validator, each Zotero item type has a representative rendered fixture, every special label has a positive and negative test, Google Docs output matches golden expected output, and companion-dependent behavior is tested through its actual integration.