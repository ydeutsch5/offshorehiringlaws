import type { Metadata } from "next";
import { generateArticleSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Employment Law in India for Foreign Employers",
  description:
    "A reference to the statutory framework governing remote employees domiciled in India and employed by foreign organizations — applicable statutes, classification, and jurisdiction.",
  openGraph: {
    title: "Employment Law in India for Foreign Employers | Offshore Hiring Laws",
    description:
      "Statutory framework governing remote employees domiciled in India and employed by foreign organizations.",
  },
};

const schema = generateArticleSchema({
  title: "Employment law in India for foreign employers: applicable statutes, classification, and jurisdiction",
  description:
    "A reference to the statutory framework governing remote employees domiciled in India and employed by foreign organizations.",
  url: "https://offshorehiringlaws.com/india/employment-law-overview",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  jurisdiction: "India",
  verifiedAgainst: "Indian central statutes",
  verifiedAsOf: "May 2026",
});

export default function IndiaEmploymentLawOverview() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />

      <article style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="prose-ohl">

          {/* Stamps */}
          <span className="stamp-updated">Last updated: May 2026</span>
          <div className="stamp-verified">
            Verified against Indian central statutes as of May 2026.
          </div>

          {/* H1 */}
          <h1 style={{ marginBottom: "0.5rem", marginTop: "1rem" }}>
            Employment law in India for foreign employers: applicable statutes,
            classification, and jurisdiction.
          </h1>

          {/* Subhead */}
          <p
            style={{
              fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
              fontSize: "1.15rem",
              fontWeight: 500,
              fontStyle: "italic",
              color: "var(--color-ink-muted)",
              marginBottom: "2rem",
              lineHeight: 1.4,
            }}
          >
            A reference to the statutory framework governing remote employees
            domiciled in India and employed by foreign organizations.
          </p>

          <hr className="rule-section" />

          {/* Intro */}
          <p className="drop-cap">
            Indian employment law is a multi-layered framework drawn from the
            Constitution of India, central statutes enacted by Parliament, state
            legislation enacted by individual state legislatures, subordinate
            legislation in the form of rules and regulations, and judicial
            precedent established by the Supreme Court and High Courts. For
            foreign organizations that engage remote workers domiciled in India,
            this framework applies regardless of the employer's place of
            incorporation. This page describes the statutory rules that govern
            the employment relationship; it does not constitute legal advice, and
            foreign employers should consult qualified counsel regarding
            jurisdiction-specific obligations.
          </p>

          <p>
            The publication covers central law as of May 2026, incorporating the
            status of the four new Labour Codes that came into force on 21
            November 2025. State-specific obligations — including Shops and
            Establishments Acts and Professional Tax — are noted where relevant
            but are not exhaustively catalogued. Each section below identifies
            the governing statute by name and section number.
          </p>

          <hr className="rule-section" />

          {/* Section A */}
          <h2>A. Sources of Indian employment law</h2>

          <p>
            The Constitution of India allocates legislative competence between
            Parliament and state legislatures through three Lists in the Seventh
            Schedule. Labour is a concurrent subject under List III (the
            Concurrent List), meaning both Parliament and state legislatures may
            enact legislation. Where central and state laws conflict, the central
            law prevails unless the state law received Presidential assent before
            the conflict arose.
          </p>

          <p>
            The principal sources of employment law in India are as follows:
          </p>

          <ul>
            <li>
              <strong>Central statutes</strong> — enacted by Parliament and
              applicable across India. Examples include the{" "}
              <em>Employees' Provident Funds and Miscellaneous Provisions Act,
              1952</em>, the <em>Industrial Disputes Act, 1947</em>, and the
              four Labour Codes (2019–2020) that came into force on 21 November
              2025.
            </li>
            <li>
              <strong>State statutes</strong> — enacted by state legislatures and
              applicable within the relevant state only. The most significant for
              foreign employers are the Shops and Establishments Acts, which
              regulate working hours, leave, and conditions of service for
              establishments not covered by the Factories Act.
            </li>
            <li>
              <strong>Subordinate legislation</strong> — rules, regulations, and
              notifications issued under the authority of central or state
              statutes. Examples include the Employees' Provident Funds Scheme,
              1952 (issued under <code>§ 5</code> of the EPF Act) and the
              Maternity Benefit Rules.
            </li>
            <li>
              <strong>Judicial precedent</strong> — decisions of the Supreme
              Court of India are binding on all courts and tribunals. High Court
              decisions are binding within their respective jurisdictions.
              Judicial interpretation of statutory terms — such as "workman"
              under the <em>Industrial Disputes Act, 1947</em> — materially
              shapes the application of statutory provisions.
            </li>
          </ul>

          <hr className="rule-section" />

          {/* Section B */}
          <h2>B. Central statutes governing the employer-employee relationship</h2>

          <p>
            The central statutes most directly relevant to foreign employers
            engaging remote workers domiciled in India are listed below. Each
            statute is identified by its short title and year of enactment.
            Primary-source URLs are cited in the footnotes.
          </p>

          <ul>
            <li>
              <em>Employees' Provident Funds and Miscellaneous Provisions Act,
              1952</em> — governs mandatory provident fund contributions by
              employers and employees. Codified at{" "}
              <a
                href="https://www.indiacode.nic.in/handle/123456789/2152"
                target="_blank"
                rel="noopener"
              >
                IndiaCode
              </a>
              .
            </li>
            <li>
              <em>Employees' State Insurance Act, 1948</em> — establishes the
              Employees' State Insurance scheme providing health and social
              insurance coverage. Administered by the ESI Corporation (ESIC).
              Codified at IndiaCode.
              <sup className="fn-ref">
                <a href="#fn2">[2]</a>
              </sup>
            </li>
            <li>
              <em>Payment of Gratuity Act, 1972</em> — mandates payment of
              gratuity to employees upon separation after five years of
              continuous service.
              <sup className="fn-ref">
                <a href="#fn3">[3]</a>
              </sup>
            </li>
            <li>
              <em>Payment of Bonus Act, 1965</em> — requires payment of an
              annual bonus to eligible employees. Now partially subsumed under
              the <em>Code on Wages, 2019</em>.
            </li>
            <li>
              <em>Maternity Benefit Act, 1961</em> (as amended 2017) — provides
              26 weeks of paid maternity leave under <code>§ 5</code> (as
              amended by Act 6 of 2017).
            </li>
            <li>
              <em>Industrial Disputes Act, 1947</em> — governs the resolution of
              industrial disputes and prescribes procedural requirements for
              retrenchment, layoff, and closure. Codified at IndiaCode.
              <sup className="fn-ref">
                <a href="#fn5">[5]</a>
              </sup>
            </li>
            <li>
              <em>Payment of Wages Act, 1936</em> — prescribes timely payment of
              wages to employees. Subsumed under the <em>Code on Wages, 2019</em>{" "}
              (in force from 21 November 2025).
            </li>
            <li>
              <em>Minimum Wages Act, 1948</em> — requires payment of minimum
              wages for scheduled employments as notified by the appropriate
              government. Subsumed under the <em>Code on Wages, 2019</em>.
            </li>
            <li>
              <em>Industrial Employment (Standing Orders) Act, 1946</em> —
              requires establishments with 100 or more employees to define and
              certify conditions of service (standing orders). Partially subsumed
              under the <em>Industrial Relations Code, 2020</em>.
            </li>
          </ul>

          <hr className="rule-section" />

          {/* Section C */}
          <h2>C. State statutes — Shops and Establishments Acts</h2>

          <p>
            Under Indian law, each state maintains its own Shops and
            Establishments Act governing establishments (including offices and
            IT/ITES companies) that are not factories within the meaning of the
            Factories Act, 1948. These state Acts regulate working hours,
            overtime, weekly rest, annual leave, and conditions of service. A
            foreign employer with remote employees in India is generally required
            to register its Indian place of business (or the employee's work
            location) under the applicable state Act.
          </p>

          <p>
            Two states — Karnataka and Maharashtra — host significant
            concentrations of India's technology and professional-services
            workforce and are referenced here as exemplars.
          </p>

          <ul>
            <li>
              <strong>Karnataka</strong> — governed by the{" "}
              <em>Karnataka Shops and Commercial Establishments Act, 1961</em>,
              as amended. Establishes rules on working hours (generally 48 hours
              per week), rest intervals, leave entitlements, and employer
              registration obligations.
            </li>
            <li>
              <strong>Maharashtra</strong> — governed by the{" "}
              <em>Maharashtra Shops and Establishments (Regulation of Employment
              and Conditions of Service) Act, 2017</em>, which modernized the
              earlier 1948 Act. The 2017 Act introduced electronic registration
              and expanded coverage.
            </li>
          </ul>

          <p>
            Foreign employers whose remote employees work from home may be
            subject to the state Act applicable in the state where the employee
            is domiciled. This is a contested area of interpretation; qualified
            counsel should be engaged to confirm registration and compliance
            obligations in each state.
          </p>

          <hr className="rule-section" />

          {/* Section D */}
          <h2>D. Employee vs. independent contractor classification</h2>

          <p>
            Indian courts and tribunals apply a multi-factor test to determine
            whether a person engaged for services is an employee (subject to the
            protections of Indian labour law) or an independent contractor (not
            so protected). The applicable tests are derived primarily from
            judicial decisions interpreting the <em>Industrial Disputes Act,
            1947</em> and related statutes. No single statute codifies a
            definitive "employee vs. contractor" test; the analysis is
            fact-specific.
          </p>

          <p>
            The principal judicial markers applied by Indian courts include:
          </p>

          <ul>
            <li>
              <strong>Control test</strong> — whether the engaging party
              controls not only the result of the work but also the manner in
              which it is performed. A high degree of control over daily work
              activities is indicative of an employment relationship.
            </li>
            <li>
              <strong>Integration test</strong> — whether the person is
              integrated into the organization of the engaging party, or whether
              the person performs work that is peripheral or accessory to the
              engaging party's business.
            </li>
            <li>
              <strong>Economic-reality test</strong> — whether the person is
              economically dependent on the engaging party as a primary source of
              income, or operates independently as a business.
            </li>
          </ul>

          <p>
            In <em>Hussainbhai v. Alath Factory Tezhilali Union and Others</em>{" "}
            (1978) 4 SCC 257, the Supreme Court of India held that the
            relationship of employer and employee depends on the totality of
            facts, including the control of the alleged employer over the
            alleged employee. The Court emphasized that the right to control the
            method of work — not merely the outcome — is a strong indicator of
            employment.
          </p>

          <p>
            The classification as "workman" under <code>§ 2(s)</code> of the{" "}
            <em>Industrial Disputes Act, 1947</em> is separately important and
            is addressed in Section E below. A person may be an "employee" for
            purposes of provident fund or ESI coverage while not qualifying as a
            "workman" under the ID Act.
          </p>

          <hr className="rule-section" />

          {/* Section E */}
          <h2>
            E. The Industrial Disputes Act, 1947 — "workmen" classification
          </h2>

          <p>
            The <em>Industrial Disputes Act, 1947</em> (India) is the central
            statute governing the resolution of industrial disputes and the
            procedural rights of employees upon termination. Its protections
            apply specifically to persons who qualify as "workmen" within the
            meaning of <code>§ 2(s)</code> of the Act.
          </p>

          <p>
            Under <code>§ 2(s)</code> of the <em>Industrial Disputes Act,
            1947</em>, a "workman" is any person (including an apprentice)
            employed in any industry to do manual, skilled, unskilled, technical,
            operational, clerical, or supervisory work for hire or reward. The
            definition expressly excludes persons employed primarily in a
            managerial or administrative capacity, persons employed in a
            supervisory capacity who draw wages exceeding the ceiling notified by
            the appropriate government from time to time, and persons subject to
            the Air Force Act, Army Act, or Navy Act.
          </p>

          <p>
            The significance of "workman" status is procedural: a person who
            qualifies as a workman may not be retrenched (i.e., terminated for
            operational reasons other than misconduct or incapacity) without
            satisfying the conditions prescribed in <code>§ 25F</code> of the{" "}
            <em>Industrial Disputes Act, 1947</em>. Those conditions — a month's
            notice, retrenchment compensation, and notification to the appropriate
            government — are described in the statutory employer obligations
            reference for India.
          </p>

          <p>
            Employees in managerial, administrative, or senior supervisory roles
            typically do not qualify as "workmen." However, software developers,
            analysts, and technical staff in similar positions have been held to
            qualify as "workmen" in several judicial decisions, because such roles
            involve skilled or technical work within the meaning of the statutory
            definition. Whether a specific role qualifies requires a
            fact-specific analysis.
          </p>

          <hr className="rule-section" />

          {/* Section F */}
          <h2>F. Labour Codes (2019–2020)</h2>

          <p>
            Between 2019 and 2020, Parliament enacted four Labour Codes to
            consolidate and rationalize India's pre-existing stock of 29 central
            labour statutes. The four Codes are:
          </p>

          <ul>
            <li>
              <em>Code on Wages, 2019</em> — consolidates the{" "}
              <em>Payment of Wages Act, 1936</em>, the{" "}
              <em>Minimum Wages Act, 1948</em>, the{" "}
              <em>Payment of Bonus Act, 1965</em>, and the{" "}
              <em>Equal Remuneration Act, 1976</em>. Codified at{" "}
              <a
                href="https://labour.gov.in/sites/default/files/TheCodeonWages2019.pdf"
                target="_blank"
                rel="noopener"
              >
                Ministry of Labour
              </a>
              .
            </li>
            <li>
              <em>Industrial Relations Code, 2020</em> — consolidates the{" "}
              <em>Industrial Disputes Act, 1947</em>, the{" "}
              <em>Trade Unions Act, 1926</em>, and the{" "}
              <em>Industrial Employment (Standing Orders) Act, 1946</em>.
            </li>
            <li>
              <em>Code on Social Security, 2020</em> — consolidates the{" "}
              <em>Employees' Provident Funds Act, 1952</em>, the{" "}
              <em>Employees' State Insurance Act, 1948</em>, and seven other
              social security statutes. Extends coverage to gig workers and
              platform workers.
            </li>
            <li>
              <em>Code on Occupational Safety, Health and Working Conditions,
              2020</em> — consolidates 13 statutes including the{" "}
              <em>Factories Act, 1948</em>, the <em>Mines Act, 1952</em>, and
              the <em>Contract Labour (Regulation and Abolition) Act, 1970</em>.
            </li>
          </ul>

          <p>
            All four Labour Codes came into force on 21 November 2025, pursuant
            to a notification issued by the Government of India on that date.
            However, the Codes require both Central Rules and State Rules to be
            notified before they can be implemented in full. As of May 2026,
            the Central Government has notified the Code on Wages (Central)
            Rules, 2026 and the Code on Social Security (Central) Rules for
            select provisions. State governments continue to finalize their
            respective rules. During this transition period, existing
            regulations — including EPF and ESI contribution requirements —
            continue to apply.
          </p>

          <div className="callout-ohl">
            <strong>Statutory note:</strong> The Codes consolidate existing laws
            but do not generally reduce established employee rights. Contribution
            rates for EPF and ESI, gratuity entitlements, and retrenchment
            compensation remain governed by the existing statutory rates pending
            state rule notifications. Foreign employers should monitor state-level
            notifications for the states in which their remote employees are
            domiciled.
          </div>

          <hr className="rule-section" />

          {/* Section G */}
          <h2>
            G. Foreign employers and remote employees — applicability of Indian
            law
          </h2>

          <p>
            A common question for foreign organizations is whether Indian
            employment law applies when the employer is incorporated outside
            India and the employee works remotely from India. Under Indian
            conflict-of-laws principles, courts consider the place of performance
            of the contract as a significant connecting factor. Where an employee
            performs work from India, Indian labour statutes — particularly those
            administered by government bodies such as the Employees' Provident
            Fund Organisation (EPFO) and the Employees' State Insurance
            Corporation (ESIC) — generally apply to the employment relationship
            regardless of the employer's domicile.
          </p>

          <p>
            The <em>Employees' Provident Funds and Miscellaneous Provisions Act,
            1952</em> (India) applies to any establishment employing 20 or more
            employees in India, including establishments of foreign employers.
            Similarly, the <em>Employees' State Insurance Act, 1948</em> applies
            to specified factories and establishments in India meeting the
            coverage criteria, irrespective of whether the employing entity is
            Indian or foreign.
          </p>

          <p>
            Foreign employers typically manage this exposure through one of two
            approaches: direct employment with a registered Indian entity (a
            subsidiary, liaison office, or branch) that assumes employer-of-record
            status under Indian law; or engagement of a third-party
            employer-of-record (EOR) or managed-workforce provider that employs
            the worker in India and bears direct statutory obligations under
            Indian labour law. F5 Hiring Solutions is one example of a
            managed-workforce provider that employs remote professionals in India
            and bears the statutory employer obligations described on this site.
            The choice between these arrangements involves legal, tax, and
            permanent-establishment considerations that fall outside the scope of
            this reference publication.
          </p>

          <p>
            Where a foreign employer directly employs a worker in India — without
            a registered Indian entity — the employer-employee relationship is
            still subject to the applicable Indian central statutes for purposes
            of EPFO and ESIC coverage. The appropriate government authority may
            assert jurisdiction, and penalties for non-compliance accrue under
            the applicable statutes.
          </p>

          <hr className="rule-section" />

          {/* Footnotes */}
          <div className="footnotes">
            <ol id="footnotes">
              <li id="fn1">
                <em>Employees' Provident Funds and Miscellaneous Provisions Act,
                1952</em> (India). Codified at IndiaCode.{" "}
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2152"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.indiacode.nic.in/handle/123456789/2152
                </a>
                . Accessed May 2026.
              </li>
              <li id="fn2">
                <em>Employees' State Insurance Act, 1948</em> (India). ESI
                Corporation contribution page.{" "}
                <a
                  href="https://esic.gov.in/contribution"
                  target="_blank"
                  rel="noopener"
                >
                  https://esic.gov.in/contribution
                </a>
                . Accessed May 2026.
              </li>
              <li id="fn3">
                <em>Payment of Gratuity Act, 1972</em> (India). Codified at
                IndiaCode.{" "}
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1703"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.indiacode.nic.in/handle/123456789/1703
                </a>
                . Accessed May 2026.
              </li>
              <li id="fn4">
                <em>Maternity Benefit Act, 1961</em> (India), as amended by Act
                6 of 2017. Codified at IndiaCode.{" "}
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1681"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.indiacode.nic.in/handle/123456789/1681
                </a>
                . Accessed May 2026.
              </li>
              <li id="fn5">
                <em>Industrial Disputes Act, 1947</em> (India). Codified at
                IndiaCode.{" "}
                <a
                  href="https://www.indiacode.nic.in/bitstream/123456789/20352/1/the_industrial_disputes_act.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.indiacode.nic.in (PDF)
                </a>
                . Accessed May 2026.
              </li>
              <li id="fn6">
                <em>Code on Wages, 2019</em> (India). Ministry of Labour and
                Employment.{" "}
                <a
                  href="https://labour.gov.in/sites/default/files/TheCodeonWages2019.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  https://labour.gov.in
                </a>
                . All four Labour Codes came into force 21 November 2025.
                Accessed May 2026.
              </li>
              <li id="fn7">
                <em>Hussainbhai v. Alath Factory Tezhilali Union and Others</em>{" "}
                (1978) 4 SCC 257. Supreme Court of India.
              </li>
            </ol>
          </div>

          {/* Methodology link */}
          <p
            style={{
              marginTop: "2rem",
              fontSize: "0.875rem",
              color: "var(--color-ink-muted)",
            }}
          >
            For information on how citations are verified and what sources are
            used, see the{" "}
            <a href="/methodology">Methodology page</a>.
          </p>
        </div>
      </article>
    </>
  );
}
