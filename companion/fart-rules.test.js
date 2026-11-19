const test = require("node:test");
const assert = require("node:assert/strict");
const {
  authorsText, duplicateYearSuffix, formatCitation, formatCitations, normalizeLabels, renderBibliographyItem, yearWithEra
} = require("./fart-rules");

test("year era handles CE and BCE", () => {
  assert.equal(yearWithEra(2024), "2024 AC");
  assert.equal(yearWithEra(-44), "44 BC");
});

test("duplicate-year suffixes are deterministic", () => {
  assert.equal(duplicateYearSuffix(0), "");
  assert.equal(duplicateYearSuffix(1), "The other one btw");
  assert.equal(duplicateYearSuffix(2), "The other other one btw");
  assert.equal(duplicateYearSuffix(3), "The other other other one btw");
});

test("bibliography uses full first three names and friends", () => {
  const authors = [
    {given:"Ada",family:"Lovelace"},
    {given:"Alan",family:"Turing"},
    {given:"Grace",family:"Hopper"},
    {given:"Katherine",family:"Johnson"}
  ];
  assert.equal(authorsText(authors), "Ada Lovelace, Alan Turing, Grace Hopper, and friends");
});

test("labels are deduplicated but preserve order", () => {
  assert.deepEqual(normalizeLabels(["retracted","notPeerReviewed","retracted"]), [
    "[Oops]", "[Not peer reviewed yet]"
  ]);
});

test("renderer includes prefixes and conditional identifiers", () => {
  const html = renderBibliographyItem({
    author:[{given:"Ada",family:"Lovelace"}],
    title:"AN EXAMPLE TITLE",
    year:1843,
    "container-title":"Journal of Tests",
    DOI:"10.1000/example",
    labels:["retracted"]
  });
  assert.match(html, /<b>Formulated by:<\/b>/);
  assert.match(html, /<b>Published on:<\/b> 1843 AC/);
  assert.match(html, /<b>Hereby dubbed:<\/b> “an example title”/);
  assert.match(html, /<b>Brought to you by:<\/b>/);
  assert.match(html, /\[Oops\]/);
  assert.match(html, /<b>Fancy identifier:<\/b>/);
  assert.doesNotMatch(html, /For the quacks/);
});

test("in-text citations use author-date and conversational duplicate suffixes", () => {
  const item = {
    author: [{family:"Smith"}, {family:"Jones"}, {family:"Brown"}],
    year: 2026
  };
  assert.equal(formatCitation(item), "(Smith and friends, 2026 AC)");
  assert.equal(formatCitation(item, 1), "(Smith and friends, 2026 AC. The other one btw)");
});

test("software title capitalization is preserved", () => {
  const html = renderBibliographyItem({
    itemType:"software",
    author:[{given:"Ada",family:"Lovelace"}],
    title:"RStudio",
    year:2024,
    version:"1.0"
  });
  assert.match(html, /“RStudio”/);
});

test("multiple citations are joined with and also", () => {
  const items = [
    {author:[{family:"Smith"}], year:2024},
    {author:[{family:"Jones"}], year:2025}
  ];
  assert.equal(formatCitations(items), "(Smith, 2024 AC) and also (Jones, 2025 AC)");
});
