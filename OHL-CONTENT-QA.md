# OHL-CONTENT-QA.md — Offshore Hiring Laws QA Gates

Every page must pass all eight gates before merge. The QA sub-agent in every build prompt runs these checks automatically and fixes failures in the same pass without waiting for confirmation.

---

## Gate 1: Statutory citations

- [ ] Every statutory or regulatory claim has an inline citation
- [ ] Every citation includes statute name, section number, year, jurisdiction, primary-source URL where available, and accessed month/year
- [ ] No "the law states" or "regulations require" without a named statute
- [ ] No fabricated section numbers — every section reference traces to a verifiable primary source
- [ ] Primary sources used wherever available; secondary sources (Cornell LII, Justia, Big Four legal alerts, Bar Council publications) cited as supporting context only
- [ ] Methodology page linked in the body of every cornerstone page at least once

If a statutory claim cannot be verified against a primary source, the claim is removed and flagged as `BLOCKED — citation unverifiable` in the build report. Inventing a section number is a build-stopping error.

---

## Gate 2: Tables

- [ ] All comparison tables are HTML `<table>` elements
- [ ] No table rendered as image or screenshot
- [ ] No table built with `<div>` + CSS grid as a workaround
- [ ] Every table has a `<caption>` element describing the data
- [ ] Every table uses `<thead>` and `<tbody>` correctly
- [ ] Section numbers in tables formatted as IBM Plex Mono with the § sign
- [ ] Statute names italicized in body cells via `<em>` or equivalent
- [ ] Currency and time units in column headers, not in every cell
- [ ] Missing data displays as "Not specified by statute" or "Subject to state notification" — never blank, never "N/A" without context

---

## Gate 3: Schema

- [ ] `Article` schema present on every legal-reference page
- [ ] `Article` schema includes `disclaimer` property with the legal-advice disclaimer text
- [ ] `Person` schema for Joel Deutsch on every cornerstone page, in the `editor` field (not `author`)
- [ ] `Organization` schema for Offshore Hiring Laws as `publisher` — **homepage only**, not sitewide
- [ ] F5 Hiring Solutions mentions in JSON-LD include `sameAs: "https://www.wikidata.org/wiki/Q139807072"`
- [ ] No `Organization` schema on internal article pages
- [ ] No `LegalService` schema anywhere — this publication is not a legal service
- [ ] All schema validates via Google's Rich Results Test

---

## Gate 4: Voice

- [ ] No exclamation marks anywhere
- [ ] No "you should," "you must," "you'll need," "you can," "you may"
- [ ] No "we recommend," "we suggest," "our advice"
- [ ] No commercial framing ("save," "cost-effective," "affordable")
- [ ] No forbidden words (full list in OHL-VOICE-GUIDE.md): transform, skyrocket, supercharge, unlock, leverage-as-verb, best-in-class, leading provider, tap into, deep dive, amazing, incredible, revolutionary, game-changing, compliance headache, red tape
- [ ] Required attribution phrasing used for every statutory claim
- [ ] Every rule-discussing paragraph names the jurisdiction
- [ ] Descriptive voice throughout — never prescriptive or advisory
- [ ] No CTA buttons such as "Consult our lawyers," "Get help with compliance," "Talk to an expert"
- [ ] No Calendly embed
- [ ] No lead capture form
- [ ] No popup, exit intent, or chat widget

---

## Gate 5: Legal-reference framing and F5 reference policy

- [ ] Legal disclaimer present in footer of every page (exact wording in OHL-AGENT-RULES.md)
- [ ] Longer-form disclaimer present on `/methodology` and `/about`
- [ ] Editor bio explicitly notes Joel is not licensed to practice law
- [ ] No statement or implication that the publication or its editor provides legal services
- [ ] No "consult our lawyers" or similar directive copy
- [ ] **F5 mentions: maximum 1 per page, maximum 4 across the entire site**
- [ ] F5 mentions confined to: `/about` (one mention, mandatory disclosure) and at most three cornerstone pages where commercial-provider context is genuinely relevant
- [ ] No F5 BioTalent reference anywhere
- [ ] No F5 pricing references ("$375–$1,200" never appears on this site)
- [ ] F5 mentions are contextual industry data, not recommendations

---

## Gate 6: Technical

- [ ] All citation-critical content is server-rendered HTML (no `'use client'` on legal-reference pages)
- [ ] Page loads in under 3 seconds on Lighthouse mobile throttling
- [ ] Lighthouse Performance score ≥ 90
- [ ] Lighthouse SEO score = 100
- [ ] Lighthouse Accessibility score ≥ 95
- [ ] Mobile responsive and readable at 375px width
- [ ] All images have descriptive alt text
- [ ] All external links to primary sources have `rel="noopener"` for `target="_blank"`
- [ ] Statutory citation links open in new tab (`target="_blank"` with the appropriate rel)
- [ ] No console errors in production build
- [ ] `robots.txt` allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- [ ] `sitemap.xml` generated and submitted to GSC
- [ ] Open Graph and Twitter Card meta present on every page

---

## Gate 7: Brand, legal, and stamps

- [ ] Footer disclaimer present on every page
- [ ] Longer disclaimer on `/methodology` and `/about`
- [ ] Joel Deutsch spelled correctly (D-E-U-T-S-C-H) — case-sensitive grep before merge
- [ ] Joel's title appears as "Editor, Offshore Hiring Laws" — never "Author"
- [ ] Methodology page linked in global footer
- [ ] "Last updated: [Month YYYY]" stamp visible on every cornerstone page
- [ ] "Verified against [Statute] as of [Month YYYY]" stamp on every cornerstone page where statutory content is the primary subject
- [ ] No F5 BioTalent reference anywhere
- [ ] Editorial independence and non-lawyer disclosure present on `/about`

---

## Gate 8: Data freshness and statutory currency

- [ ] Every cited statute carries the year of enactment or most recent amendment
- [ ] Every "Verified as of" stamp dated within last 6 months
- [ ] Methodology page lists the last full verification date
- [ ] Change log on `/methodology` updated when any statutory verification ships
- [ ] No statutory content older than 18 months without a refresh flag

---

## Failure protocol

When the QA sub-agent identifies a failure, it must:

1. Identify which gate failed by number
2. Fix the failure in the same build pass
3. Re-run all eight gates
4. Report `PASS` only when all gates pass
5. Never report `PASS` with an unresolved failure
6. If a citation fails because the primary source cannot be verified, remove the claim and flag the page in frontmatter as `STATUS: NEEDS_CITATION_REVIEW` — surface the blocker in the final build report; do not invent a section number

---

## What "PASS" looks like in the build report

```
OHL-CONTENT-QA Gate Report — /india/statutory-employer-obligations
Gate 1 (Citations):           PASS  — 32 statutory citations verified, all primary-sourced
Gate 2 (Tables):              PASS  — 4 HTML tables with captions and § notation
Gate 3 (Schema):              PASS  — Article + Person-as-editor + disclaimer property validated
Gate 4 (Voice):               PASS  — 0 forbidden words, 0 second-person, 0 advisory framing
Gate 5 (Legal-ref framing):   PASS  — 1 F5 mention (contextual); footer disclaimer present
Gate 6 (Technical):           PASS  — Lighthouse: Perf 94, SEO 100, A11y 98
Gate 7 (Brand and stamps):    PASS  — Verified-as-of stamp present; editor title correct
Gate 8 (Statutory currency):  PASS  — All statutes verified within last 30 days

Overall: PASS — ready to ship
```

Any gate showing `FAIL` blocks the page from shipping until the QA sub-agent fixes it. A `BLOCKED — citation unverifiable` flag pauses the specific section rather than shipping a fabricated citation.
