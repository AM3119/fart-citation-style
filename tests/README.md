# Test fixtures

This directory will contain small, synthetic Zotero-compatible reference records and golden expected outputs.

## Minimum fixture coverage

- One-author, two-author, and three-or-more-author citations.
- Bibliography order by first citation appearance.
- Multiple citations separated by semicolons.
- Same-author-group, same-year disambiguation (at least three works).
- Article, book, edited book, and book chapter.
- Abstract, conference presentation, poster, thesis, dissertation, and preprint.
- Retracted and corrected publications.
- Software with and without a version.
- Patent and legal document.
- Film, standalone video, podcast episode, social media post, forum thread, and news article.
- AI-generated content.
- Personal communication, anonymous personal communication, dream, individual thought, and collective thought.
- DOI present; URL-only; neither DOI nor URL.
- PMID, PMCID, and ISBN presence.
- Missing optional metadata and non-Latin titles/names.

## Golden-output policy

Each fixture should include:
1. The input item metadata.
2. The cited-in-text form.
3. The bibliography form.
4. Any expected warnings or documented limitations.

Tests should be deterministic and should not rely on live network lookups.
