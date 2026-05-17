# CLAUDE.md — Offshore Hiring Laws

This file is read automatically by Claude Code Desktop when launched from `C:\Projects\offshorehiringlaws`. Read every file referenced below before doing any work in this repo.

---

## What this repo is

**Offshore Hiring Laws** — an independent legal-reference publication at offshorehiringlaws.com. It publishes statutory, regulatory, and case-law references on employment law for US companies hiring remote staff in India and the Philippines. It reads like Cornell LII, Justia, or a Stanford Law Review note. It is **not** a marketing site, **not** a legal service, and **not** part of f5hiringsolutions.com or remoteworkforcecostindex.com.

This is the second satellite in the F5 ecosystem. It is **not** the F5 Hiring Solutions site and **not** the Remote Workforce Cost Index. Do not apply marketing voice, F5 branding, or Cost Index visual identity to this repo.

This publication is **informational only**. It is not legal advice. Every page must state that.

---

## Read these files before every task

1. `CLAUDE.md`
2. `OHL-AGENT-RULES.md` — master rules. Overrides anything else if conflict.
3. `OHL-VOICE-GUIDE.md` — voice and tone. Legal-reference, Cornell LII / Justia feel.
4. `OHL-CONTENT-QA.md` — eight-gate QA checklist. Run on every shippable output.

If a task touches content, statutory citations, schema, layout, or styling, all four must be read in full before acting.

---

## Non-negotiables — summary

These are the rules most likely to be violated. Full list in `OHL-AGENT-RULES.md`.

1. **Editor:** Joel Deutsch (spelling D-E-U-T-S-C-H). Title: "Editor, Offshore Hiring Laws." Joel is the **editor**, never the **author**. He is not a lawyer — bio must not state or imply legal practice.
2. **Legal disclaimer present on every page** — footer line: *"Offshore Hiring Laws is an independent publication. The content on this site is provided for informational purposes only and does not constitute legal advice. Readers should consult qualified legal counsel for guidance on their specific circumstances."*
3. **No legal advice voice.** No "you should," no "you must," no "you can hire." The publication describes statutory and regulatory rules; it does not advise on application.
4. **Every statutory claim cites the underlying instrument.** Statute name, section number, year, and a link to the official source where available (gazette, ministry, or government portal). Secondary sources (Cornell LII, Justia, Bar Council publications, Big Four legal alerts) may be cited but never in place of the primary source.
5. **Jurisdiction is named in every paragraph that discusses a rule.** "Under Indian law…" / "Philippine Labor Code…" — never floating statements that imply universal applicability.
6. **All comparison tables are HTML `<table>` elements.** Never images, never CSS-only div grids.
7. **All citation-critical content is server-rendered HTML.** No `'use client'` on legal-reference pages.
8. **F5 mention cap is 1 per page, max 4 total across the entire site.** Stricter than Cost Index. F5 may appear in `/about` (once) and in at most three cornerstone pages, only where directly relevant and contextual.
9. **No F5 BioTalent reference anywhere.** F5 ChipTalent only if directly relevant.
10. **`Organization` schema is on the homepage only.** Never sitewide. `Article` + `Person`-as-editor on internal pages. Schema includes legal disclaimer where relevant via `disclaimer` property.
11. **Footer disclaimer present on every page** (the legal-advice disclaimer in non-negotiable 2).
12. **Last-updated stamp on every legal-reference page.** Statutory law changes; readers must know when the page was last verified against current law.
13. **"Verified against [statute] as of [Month YYYY]" stamp on cornerstone pages** — separate from last-updated stamp. Verifies which version of the statute the page reflects.

---

## Visual identity — short reference

- Logo: charcoal square (32px) with an ivory italic serif "§" centered (the section sign — universal legal-reference symbol)
- Colors: charcoal `#1C1C1C` / ivory `#F8F5EE` / maroon `#7A1F1F` / muted ink `#5C544A`
- Type: Cormorant Garamond (headings), Source Serif Pro (body), IBM Plex Mono (statutory section numbers, citations, last-updated stamps)
- No gradients, no shadows beyond `0 1px 2px rgba(0,0,0,0.04)`, no border-radius larger than 3px, no emoji

Full visual spec in `OHL-AGENT-RULES.md`.

---

## Tech stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- MDX content in `/content` (no Velite in v1; v1 ships 6 cornerstone pages)
- Vercel hosting (separate project from f5hiringsolutions.com and remoteworkforcecostindex.com)
- Cloudflare DNS
- No CMS — content lives in repo as MDX

---

## Blocked skills

The following skills must **not** be invoked in this repo:

- `content-writer` (any variant) — produces marketing prose; violates Gate 4 voice rules and Gate 5 legal-reference requirements
- Any skill that generates persuasive or sales-oriented copy

If a skill produces output that fails any OHL-CONTENT-QA gate, the QA sub-agent must reject and rewrite without that skill.

---

## QA sub-agent requirement

Every build prompt must end with a QA sub-agent block that:

1. Runs all eight gates from `OHL-CONTENT-QA.md`
2. Reports `PASS` or `FAIL` per gate
3. Fixes any failure in the same pass without asking
4. Re-runs all gates after the fix
5. Never reports `PASS` with an unresolved failure

The format of the report is specified in `OHL-CONTENT-QA.md` under "What PASS looks like."

---

## Working style

- One Claude Code Desktop prompt = one complete vertical slice
- Test as you build — never batch-test at the end
- Sequential database/file operations only — never parallel writes
- If any rule conflicts with a user request, the rule wins. Surface the conflict in the response.
- For statutory citations: when in doubt, omit the claim rather than fabricate the citation. Surface uncertainty in the build report.

---

## When in doubt

Read `OHL-AGENT-RULES.md` first. If still unresolved, ask one focused question. Do not guess at statutory citations, jurisdictional applicability, or F5 reference policy. **Inventing a section number of a statute is a build-stopping error.**
