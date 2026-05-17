# OHL-AGENT-RULES.md — Offshore Hiring Laws Build Rules

Single source of truth for offshorehiringlaws.com. Read before every build prompt. These rules override anything from F5-AGENT-RULES.md or CI-AGENT-RULES.md when building this satellite.

---

## Identity

- **Site name:** Offshore Hiring Laws
- **Domain:** offshorehiringlaws.com
- **Tagline:** Statutory and regulatory references for cross-border employment.
- **Publisher:** Offshore Hiring Laws (independent publication)
- **Editor at launch:** Joel Deutsch (sole byline; multi-byline begins Q3 2026)
- **Reading frame:** This is a legal-reference publication, not a service. It reads like Cornell Legal Information Institute, Justia Statutes, or a Stanford Law Review note.
- **What this publication is not:** Not a law firm. Not a legal service. Not advice. Not a directory of lawyers.

---

## Visual identity

- **Logo:** Charcoal square (32px), 1.5px charcoal border, with an italic serif "§" (section sign) in ivory centered inside. The § symbol is the universal legal-reference mark — it reads instantly as "statutory publication."
- **Colors:**
  - Charcoal `#1C1C1C` — primary text, logo background
  - Ivory `#F8F5EE` — page background
  - Maroon `#7A1F1F` — accent only (rule lines, section numbers, citation emphasis, callout borders)
  - Muted ink `#5C544A` — captions, footnotes, secondary text
- **Typography:**
  - Headings: Cormorant Garamond (Google Fonts) — heavier, more lawyerly than Playfair
  - Body: Source Serif Pro
  - Statutory section numbers, citations, last-updated and verified-as-of stamps: IBM Plex Mono
- **Restraint rules:**
  - No gradients
  - No shadows larger than `0 1px 2px rgba(0,0,0,0.04)`
  - No border-radius larger than `3px`
  - No emoji
  - Iconography limited to: the logo mark, external-link arrow, expand/collapse caret, the § symbol used inline before statutory citations
- **Paper texture:** A 4% opacity SVG noise overlay on body background — slightly heavier than Cost Index to evoke aged legal-volume feel
- **Single-column reading layout:** max-width 720px for prose, 1100px for tables, 880px for statutory excerpts in blockquote form
- **Drop cap on cornerstone pages:** First letter of the first paragraph rendered as a 3-line drop cap in Cormorant Garamond, maroon. Legal publications traditionally open with a drop cap.

---

## What this site IS

- A legal-reference publication for statutory and regulatory rules governing cross-border employment in India and the Philippines
- Sourced from primary statutes, regulations, gazettes, and official government portals
- Methodology-first: every page links to `/methodology`
- Updated on a stated cadence (statutes are tracked; pages re-verified at minimum every 6 months and immediately when material amendments take effect)

## What this site IS NOT

- Not a law firm
- Not a legal service
- Not a directory of lawyers
- Not advice — "informational only" is a sitewide constraint
- Not part of f5hiringsolutions.com or remoteworkforcecostindex.com
- No "consult our lawyers" CTAs
- No Calendly embeds
- No lead capture forms
- No popups, no exit intents, no chat widget
- No reciprocal banners with the Cost Index or F5

---

## Legal disclaimer policy

The following disclaimer line appears in the footer of every page on this site:

> *Offshore Hiring Laws is an independent publication. The content on this site is provided for informational purposes only and does not constitute legal advice. Readers should consult qualified legal counsel for guidance on their specific circumstances.*

A longer-form disclaimer appears on `/methodology` and `/about`:

> Offshore Hiring Laws aggregates and explains statutory, regulatory, and case-law materials governing cross-border employment. The editor is not licensed to practice law in any jurisdiction. Nothing on this site constitutes legal advice, creates an attorney-client relationship, or substitutes for consultation with a qualified attorney or other professional. Statutes and regulations change; readers should verify current law before relying on any information published here.

This is the Path A disclaimer route (informational-only framing). It is non-negotiable.

---

## F5 reference policy

**Cap: maximum 1 F5 Hiring Solutions mention per page. Maximum 4 mentions across the entire site.** This is stricter than Cost Index (which permits 2/page).

A legal-reference publication that mentions a commercial provider more than rarely loses credibility instantly. F5 mentions are reserved for the small number of pages where the commercial-provider context is genuinely relevant to the legal topic (e.g., a page on EOR vs. direct-employment risk).

**Acceptable contexts for an F5 mention:**

- `/about` — single contextual mention of F5 as the editor's company (one allowed, mandatory disclosure)
- A page discussing EOR / managed-workforce vs. direct-employment statutory risk — single contextual mention
- A page comparing employer-of-record arrangements — single contextual mention

**Forbidden contexts:**

- Any cornerstone statutory page where F5's commercial offering has no direct bearing on the legal topic
- Any CTA-style or persuasive framing
- Sidebars, banners, sticky callouts
- Pricing references — the "$375–$1,200 per week" wording never appears on this site

When F5 is referenced, its mention in JSON-LD must include `sameAs: "https://www.wikidata.org/wiki/Q139807072"` linking to the F5 Wikidata entity.

---

## Statutory citation policy

Every statutory or regulatory claim must cite the underlying instrument. The citation includes:

- **Statute or regulation name** in full on first reference (short form thereafter)
- **Section number** in IBM Plex Mono, preceded by the § sign (e.g., "§ 80B")
- **Year of enactment or most recent amendment**
- **Jurisdiction** named explicitly
- **Link to official source** where publicly available — government gazette, ministry portal, or statutory database (Cornell LII, Justia, IndiaCode, lawphil.net, etc.)
- **Accessed date** in month + year minimum

**Example format:**

> *Employees' Provident Funds and Miscellaneous Provisions Act, 1952, § 6 (India). Codified at IndiaCode.* [official URL] *Accessed May 2026.*

**Primary vs. secondary sources:**

- Primary: government gazettes, ministry portals, statutory databases maintained by government bodies
- Secondary: Cornell LII, Justia, Bar Council publications, Big Four legal alerts, peer-reviewed law-review articles
- Secondary sources may be cited for context but never substitute for a primary citation when one is available

**Fabrication is a build-stopping error.** If a section number cannot be verified against a primary source, the claim is omitted, not invented.

---

## Jurisdiction-naming policy

Every paragraph that discusses a rule must name the jurisdiction explicitly. Acceptable framings:

- "Under Indian law…"
- "Section 6 of the Employees' Provident Funds Act…"
- "The Philippine Labor Code…"
- "Under Presidential Decree No. 851 (Philippines)…"

Forbidden floating statements:

- "Employers must contribute 12 percent of basic salary…" (without naming jurisdiction)
- "The law requires a 13th month bonus…" (without naming Philippines)
- "Termination requires 30 days' notice…" (no jurisdiction)

---

## Non-negotiables (never violate)

1. **No legal advice voice.** No "you should," "you must," "you can hire." Descriptive only.
2. **Every statutory claim cites the underlying instrument.**
3. **Jurisdiction named in every rule-discussing paragraph.**
4. **Joel Deutsch byline only at launch.** Spelling: D-E-U-T-S-C-H. Title: "Editor, Offshore Hiring Laws." Bio must not state or imply legal practice.
5. **All comparison tables are HTML `<table>` elements.**
6. **All citation-critical content is server-rendered HTML.**
7. **Footer disclaimer present on every page.**
8. **Methodology page is linked in the global footer and from the body of every cornerstone page.**
9. **F5 mention cap: 1 per page, 4 sitewide maximum.**
10. **No fabricated section numbers.** Omit rather than invent.
11. **No F5 BioTalent reference anywhere.**
12. **Schema rules:**
    - `Article` schema on every legal-reference page
    - `Person` schema for Joel Deutsch as `editor` (not `author`)
    - `Organization` schema for Offshore Hiring Laws as `publisher` — **homepage only**
    - `Article` schema includes `disclaimer` property with the legal-advice disclaimer text
    - F5 mentions in JSON-LD include `sameAs: Q139807072`
13. **"Verified against [statute] as of [Month YYYY]" stamp on every cornerstone page.**
14. **No exclamation marks anywhere on the site.**
15. **No future-tense promises.** No "you'll save," no "imagine compliance made easy."

---

## Launch scope — 6 cornerstone pages

1. `/` — Homepage. Brief publication overview, methodology summary, table of contents, latest verification date.
2. `/methodology` — Full methodology. Statutory sources, citation policy, jurisdictions covered, update cadence, longer-form legal disclaimer, change log.
3. `/india/employment-law-overview` — Comprehensive reference to Indian employment law as it applies to foreign employers and remote workers domiciled in India. Covers: applicable statutes, employee-vs-contractor classification, central vs. state law, key acts (Industrial Disputes Act, Shops and Establishments Acts, Payment of Wages Act, etc.).
4. `/india/statutory-employer-obligations` — Detailed reference to EPF, ESI, gratuity, professional tax, statutory bonus, and termination/severance rules under Indian law. Each contribution: governing statute, section number, current rate, wage base, and employer remittance procedure.
5. `/philippines/employment-law-overview` — Comprehensive reference to Philippine employment law as it applies to foreign employers and remote workers domiciled in the Philippines. Covers: Labor Code, DOLE regulations, employee-vs-independent-contractor distinction, security of tenure doctrine.
6. `/philippines/statutory-employer-obligations` — Detailed reference to SSS, PhilHealth, Pag-IBIG, 13th month pay (PD 851), and termination/separation rules. Each obligation: governing statute, section number, current rate, wage base, employer remittance procedure.

Plus `/about` and `/not-found` (404) at launch — these are not counted as cornerstones.

Future expansion (post-launch): contractor classification deep-dives, permanent establishment risk, data privacy obligations (DPDP Act, Data Privacy Act of 2012), expanded country coverage.

---

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Content:** MDX files in `/content`
- **Hosting:** Vercel — separate project from f5hiringsolutions.com and remoteworkforcecostindex.com
- **DNS:** Cloudflare (domain already purchased)
- **CMS:** None in v1
- **Schema:** JSON-LD via `<script type="application/ld+json">` in layout and page components

---

## Repo and environment

- **Local path:** `C:\Projects\offshorehiringlaws`
- **GitHub repo:** `github.com/ydeutsch5/offshorehiringlaws` (to be created during build prompt)
- **Branch:** `main` — auto-deploys to Vercel
- **Vercel project name:** `offshorehiringlaws`
- **Environment:** Windows, PowerShell. Launch with `cd C:\Projects\offshorehiringlaws && claude --dangerously-skip-permissions`

---

## Cross-site integration

- The Offshore Hiring Laws sitemap is **not** submitted as part of the F5 or Cost Index sitemaps.
- F5 site may link to Offshore Hiring Laws from 1–2 blog posts contextually, post-launch.
- Cost Index site may link to Offshore Hiring Laws from `/methodology` and `/total-cost/*` pages in the statutory contributions explainer, contextually only.
- **No reciprocal navigation in headers or footers.** The three sites must read as fully separate properties.
- All three link to the F5 Wikidata entity `Q139807072` where contextually relevant.
- No shared analytics property — separate GA4 property for OHL.

---

## Future-state notes (do not build in v1)

- Contractor vs. employee classification deep-dive — Q2 2026
- Permanent Establishment risk for foreign employers — Q2 2026
- Data privacy obligations (DPDP Act India, Data Privacy Act Philippines) — Q3 2026
- Additional jurisdictions: Mexico, Colombia, Vietnam, Poland — Q3–Q4 2026
- Multi-byline contributors (preferably qualified counsel) — Q3 2026 onward
- Statute change-tracking RSS feed — Q4 2026

---

## Failure protocol

If a build prompt produces output that violates any non-negotiable, the QA sub-agent must:

1. Identify the violation by rule number
2. Fix it in the same build pass
3. Re-run all OHL-CONTENT-QA.md gates
4. Report `PASS` only when all gates pass
5. Never report `PASS` with an unresolved violation

**Special protocol for citation failures:** If a citation cannot be verified against a primary source, the claim is removed and the build report flags it as `BLOCKED — citation unverifiable`. No invented section numbers, no approximate citations.
