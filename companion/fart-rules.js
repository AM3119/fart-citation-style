// FART companion rules — deterministic helpers for features CSL cannot express.
// Input is normalized CSL-JSON-like metadata. This module does not modify Zotero data.

const LABELS = Object.freeze({
  abstract: "[Only the abstract tho]",
  presentation: "[Only a conference presentation tho]",
  poster: "[Only a poster tho]",
  thesis: "[Some thesis of a sort]",
  dissertation: "[Some dissertation of a sort]",
  preprint: "[Only a preprint tho]",
  retracted: "[Oops]",
  corrected: "[Corrected]",
  film: "[Someone made a movie]",
  video: "[Someone made a video]",
  podcast: "[Yap]",
  social: "[Someone's an influencer]",
  ai: "[AI slop]",
  dream: "[It came to me in a dream]",
  thought: "[I thunk this]",
  collectiveThought: "[We thunk this]",
  anonymousCommunication: "[Somebody who definitely exists]",
  notPeerReviewed: "[Not peer reviewed yet]"
});

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"]/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;"
  })[ch]);
}

function yearWithEra(value) {
  if (value === null || value === undefined || value === "") return "";
  const year = Number(value);
  if (!Number.isFinite(year)) return escapeHTML(value);
  return year < 0 ? `${Math.abs(year)} BC` : `${year} AC`;
}

function duplicateYearSuffix(index) {
  if (!Number.isInteger(index) || index < 0) throw new TypeError("index must be a non-negative integer");
  if (index === 0) return "";
  if (index === 1) return "The other one btw";
  return `The ${"other ".repeat(index)}one btw`.replace(/\s+/g, " ").trim();
}

function authorsText(authors = []) {
  const names = authors.slice(0, 3).map(person => {
    const given = person.given || person.literal || "";
    const family = person.family || "";
    return [given, family].filter(Boolean).join(" ").trim();
  }).filter(Boolean);
  if (authors.length > 3) {
    return names.length ? `${names.join(", ")}, and friends` : "and friends";
  }
  if (names.length === 2) return names.join(" and ");
  if (names.length > 2) return `${names.slice(0, -1).join(", ")}, and ${names.at(-1)}`;
  return names[0] || "Somebody";
}

function normalizeLabels(labels = []) {
  const seen = new Set();
  return labels.filter(label => {
    const value = LABELS[label] || label;
    if (!value || seen.has(value)) return false;
    seen.add(value);
    return true;
  }).map(label => LABELS[label] || label);
}

function renderBibliographyItem(item, options = {}) {
  const author = authorsText(item.author || []);
  const title = String(item.title || "untitled").toLowerCase();
  const year = yearWithEra(item.year);
  const labels = normalizeLabels(item.labels || []);
  const duplicate = duplicateYearSuffix(options.sameAuthorYearIndex || 0);
  const venue = item["container-title"] || item.publisher || "";
  const doi = item.DOI ? `<b>Fancy identifier:</b> https://doi.org/${escapeHTML(String(item.DOI).replace(/^https?:\/\/doi\.org\//, ""))}` : "";
  const pmid = item.PMID ? `<b>For the quacks:</b> PMID ${escapeHTML(item.PMID)}` : "";
  const p = [];
  p.push(`<b>Formulated by:</b> ${escapeHTML(author)}`);
  if (year) p.push(`<b>Published on:</b> ${escapeHTML(year)}${duplicate ? ` (${escapeHTML(duplicate)})` : ""}`);
  p.push(`<b>Hereby dubbed:</b> “${escapeHTML(title)}”`);
  if (venue) p.push(`<b>Brought to you by:</b> <i>${escapeHTML(venue)}</i>`);
  if (item.volume) p.push(`<b>${escapeHTML(item.volume)}</b>${item.issue ? `(${escapeHTML(item.issue)})` : ""}${item.page ? `: ${escapeHTML(item.page)}` : ""}`);
  if (labels.length) p.push(labels.map(escapeHTML).join(" "));
  if (pmid) p.push(pmid);
  if (doi) p.push(doi);
  else if (item.URL) p.push(escapeHTML(item.URL));
  else p.push("I guess.");
  return p.join(" ");
}

module.exports = {
  LABELS,
  authorsText,
  duplicateYearSuffix,
  normalizeLabels,
  renderBibliographyItem,
  yearWithEra
};
