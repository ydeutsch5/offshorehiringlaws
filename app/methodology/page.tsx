import type { Metadata } from "next";
import { generateArticleSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How Offshore Hiring Laws selects sources, verifies statutory citations, and maintains the currency of its legal-reference content.",
  openGraph: {
    title: "Methodology | Offshore Hiring Laws",
    description:
      "Source selection, citation policy, verification cadence, and editorial standards for Offshore Hiring Laws.",
  },
};

const schema = generateArticleSchema({
  title: "Methodology",
  description:
    "How Offshore Hiring Laws selects sources, verifies statutory citations, and maintains the currency of its legal-reference content.",
  url: "https://offshorehiringlaws.com/methodology",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  jurisdiction: "India and Philippines",
});

export default function Methodology() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />

      <article style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="prose-ohl">
          <h1 style={{ marginBottom: "2rem" }}>Methodology.</h1>

          <hr className="rule-section" />

          <h2>Scope and jurisdictions covered</h2>

          <p>
            Offshore Hiring Laws covers the statutory and regulatory framework
            governing employment relationships in India and the Philippines as
            applicable to foreign employers engaging remote workers domiciled in
            those jurisdictions. Version 1 (May 2026) covers:
          </p>

          <ul>
            <li>
              <strong>India</strong> — Central government legislation applicable
              across India, with select state-level references (principally
              Karnataka and Maharashtra) where state law materially affects the
              obligations of employers in major technology and professional-services
              hubs. State-level obligations such as Shops and Establishments Acts
              and Professional Tax are noted where directly relevant but are not
              exhaustively catalogued for all 28 states and 8 Union Territories.
            </li>
            <li>
              <strong>Philippines</strong> — National legislation including the
              Labor Code (Presidential Decree No. 442), statutory benefit laws
              (RA 11199, RA 11223, RA 9679), and implementing rules issued by
              DOLE. Regional wage orders are noted but not catalogued by region.
            </li>
          </ul>

          <p>
            Future expansion to additional jurisdictions — Mexico, Colombia,
            Vietnam, Poland — is planned for Q3–Q4 2026.
          </p>

          <hr className="rule-section" />

          <h2>Sources</h2>

          <h3>Primary sources</h3>

          <p>
            Every statutory or regulatory claim on this site cites a primary
            source — a government gazette, ministry portal, or official statutory
            database. Primary sources used include:
          </p>

          <ul>
            <li>
              <strong>India:</strong>{" "}
              <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener">
                indiacode.nic.in
              </a>{" "}
              (Ministry of Law and Justice statutory database);{" "}
              <a href="https://www.epfindia.gov.in" target="_blank" rel="noopener">
                epfindia.gov.in
              </a>{" "}
              (EPFO primary source for provident fund rules);{" "}
              <a href="https://esic.gov.in" target="_blank" rel="noopener">
                esic.gov.in
              </a>{" "}
              (ESIC primary source for ESI contribution rates);{" "}
              <a href="https://labour.gov.in" target="_blank" rel="noopener">
                labour.gov.in
              </a>{" "}
              (Ministry of Labour and Employment, Labour Codes);{" "}
              <a href="https://legislative.gov.in" target="_blank" rel="noopener">
                legislative.gov.in
              </a>{" "}
              (Constitution of India and central legislation).
            </li>
            <li>
              <strong>Philippines:</strong>{" "}
              <a href="https://www.officialgazette.gov.ph" target="_blank" rel="noopener">
                officialgazette.gov.ph
              </a>{" "}
              (Official Gazette of the Republic of the Philippines);{" "}
              <a href="https://dole.gov.ph" target="_blank" rel="noopener">
                dole.gov.ph
              </a>{" "}
              (DOLE department orders and advisories);{" "}
              <a href="https://www.sss.gov.ph" target="_blank" rel="noopener">
                sss.gov.ph
              </a>{" "}
              (SSS contribution schedules);{" "}
              <a href="https://www.philhealth.gov.ph" target="_blank" rel="noopener">
                philhealth.gov.ph
              </a>{" "}
              (PhilHealth premium rates);{" "}
              <a href="https://www.pagibigfund.gov.ph" target="_blank" rel="noopener">
                pagibigfund.gov.ph
              </a>{" "}
              (Pag-IBIG / HDMF contribution rules);{" "}
              <a href="https://elibrary.judiciary.gov.ph" target="_blank" rel="noopener">
                elibrary.judiciary.gov.ph
              </a>{" "}
              (Supreme Court E-Library for statutes and jurisprudence).
            </li>
          </ul>

          <h3>Secondary sources</h3>

          <p>
            Secondary sources are used for contextual explanation and as
            cross-references, but never in substitution for a primary statutory
            citation. Secondary sources used include Cornell Legal Information
            Institute (LII), Justia statutes, Bar Council of India publications,
            Big Four legal alerts (KPMG, PwC, Deloitte, EY), and peer-reviewed
            law review articles where available. Where a secondary source
            conflicts with a primary source, the primary source governs.
          </p>

          <hr className="rule-section" />

          <h2>Citation policy</h2>

          <p>
            Every statutory or regulatory claim on this site cites the underlying
            instrument. A complete citation includes: the full name of the statute
            or regulation on first reference; the section or article number; the
            year of enactment or most recent amendment; the jurisdiction; a link
            to the official source where publicly available; and the month and
            year of access.
          </p>

          <p>
            Example citation format:
          </p>

          <blockquote className="statute-excerpt">
            <em>
              Employees' Provident Funds and Miscellaneous Provisions Act, 1952,{" "}
              <code>§ 6</code> (India). Codified at IndiaCode.
            </em>{" "}
            https://www.indiacode.nic.in/handle/123456789/2152. Accessed May 2026.
            <cite>Standard citation format used throughout this publication.</cite>
          </blockquote>

          <p>
            Where a statutory claim cannot be verified against a primary source,
            the claim is omitted from the published page and flagged in the
            internal build record. No section number is invented or approximated.
          </p>

          <hr className="rule-section" />

          <h2>Verification cadence</h2>

          <p>
            Cornerstone pages — those covering statutory employer obligations —
            are re-verified against primary sources at least every six months and
            immediately when a material amendment to the relevant statute takes
            effect. Each cornerstone page carries both a "Last updated" stamp and
            a "Verified against [statute] as of [Month YYYY]" stamp reflecting
            the most recent verification date.
          </p>

          <p>
            The date appearing on the stamp reflects the date on which the editor
            verified the page content against the primary statutory sources listed
            in that page's footnotes. Readers should not rely on this publication
            as a substitute for verification against current law.
          </p>

          <hr className="rule-section" />

          <h2>Treatment of state-level and subordinate legislation</h2>

          <p>
            India's state-level Shops and Establishments Acts and professional tax
            legislation are state-specific and vary significantly across states.
            DOLE department orders and regional wage orders in the Philippines are
            similarly numerous. This publication notes state-level and subordinate
            instruments where they directly bear on the obligations of employers
            of remote workers, but does not exhaustively catalogue all state
            schedules, rates, or forms. Readers should verify state-specific
            obligations directly with the relevant state authority or through
            qualified local counsel.
          </p>

          <hr className="rule-section" />

          <h2>Legal disclaimer</h2>

          <p>
            Offshore Hiring Laws aggregates and explains statutory, regulatory,
            and case-law materials governing cross-border employment. The editor
            is not licensed to practice law in any jurisdiction. Nothing on this
            site constitutes legal advice, creates an attorney-client relationship,
            or substitutes for consultation with a qualified attorney or other
            professional. Statutes and regulations change; readers should verify
            current law before relying on any information published here.
          </p>

          <hr className="rule-section" />

          <h2>Editorial independence</h2>

          <p>
            Offshore Hiring Laws is edited by Joel Deutsch, founder of F5 Hiring
            Solutions, a managed-workforce provider that places remote
            professionals from India and the Philippines into US-based companies.
            This relationship is disclosed because it represents a potential
            conflict of interest: F5 Hiring Solutions operates in the same
            regulatory environment described by this publication.
          </p>

          <p>
            The publication is operated independently. Statutory rates and rules
            are reported as they appear in the primary sources; no rate is
            inflated, minimized, or omitted to favor any commercial outcome. The
            citation policy — cite primary sources, omit rather than fabricate —
            is applied uniformly regardless of how the content might affect the
            commercial interests of F5 Hiring Solutions or any other entity. Joel
            Deutsch is not licensed to practice law.
          </p>

          <hr className="rule-section" />

          <h2>Future updates</h2>

          <ul>
            <li>
              <strong>Q2 2026:</strong> Contractor vs. employee classification
              deep-dive — India and Philippines.
            </li>
            <li>
              <strong>Q2 2026:</strong> Permanent establishment risk for foreign
              employers with India and Philippines remote staff.
            </li>
            <li>
              <strong>Q3 2026:</strong> Data privacy obligations — India DPDP
              Act, 2023; Data Privacy Act of 2012 (Philippines RA 10173).
            </li>
            <li>
              <strong>Q3–Q4 2026:</strong> Additional jurisdictions: Mexico,
              Colombia, Vietnam, Poland.
            </li>
            <li>
              <strong>Q3 2026:</strong> Multi-byline contributors — qualified
              counsel in-jurisdiction.
            </li>
          </ul>

          <hr className="rule-section" />

          <h2>Change log</h2>

          <ul
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.82rem",
              color: "var(--color-ink-muted)",
            }}
          >
            <li>
              <strong>2026-05-17</strong> — v1 launch. Six cornerstone pages
              published: India employment law overview; India statutory employer
              obligations; Philippines employment law overview; Philippines
              statutory employer obligations; Methodology; About. Citations
              verified against primary sources as of May 2026.
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
