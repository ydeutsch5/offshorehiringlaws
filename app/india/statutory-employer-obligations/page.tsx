import type { Metadata } from "next";
import { generateArticleSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Statutory Employer Obligations Under Indian Law",
  description:
    "A reference to the rates, wage bases, and procedural rules governing employer remittances under Indian central statutes — EPF, ESI, gratuity, bonus, professional tax, and termination.",
  openGraph: {
    title: "Statutory Employer Obligations Under Indian Law | Offshore Hiring Laws",
    description:
      "Rates, wage bases, and procedural rules governing EPF, ESI, gratuity, bonus, professional tax, and termination under Indian central law.",
  },
};

const schema = generateArticleSchema({
  title:
    "Statutory employer obligations under Indian law: contributions, gratuity, bonus, and termination",
  description:
    "A reference to the rates, wage bases, and procedural rules governing employer remittances under Indian central statutes.",
  url: "https://offshorehiringlaws.com/india/statutory-employer-obligations",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  jurisdiction: "India",
  verifiedAgainst:
    "EPF Act 1952, ESI Act 1948, Payment of Gratuity Act 1972, Payment of Bonus Act 1965, Industrial Disputes Act 1947",
  verifiedAsOf: "May 2026",
});

export default function IndiaStatutoryObligations() {
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
            Verified against EPF Act 1952, ESI Act 1948, Payment of Gratuity
            Act 1972, Payment of Bonus Act 1965, and Industrial Disputes Act
            1947 as of May 2026.
          </div>

          {/* H1 */}
          <h1 style={{ marginBottom: "0.5rem", marginTop: "1rem" }}>
            Statutory employer obligations under Indian law: contributions,
            gratuity, bonus, and termination.
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
            A reference to the rates, wage bases, and procedural rules governing
            employer remittances under Indian central statutes.
          </p>

          <hr className="rule-section" />

          {/* Intro */}
          <p className="drop-cap">
            Under Indian central law, employers bear several mandatory financial
            obligations in addition to paying wages. These include contributions
            to the Employees' Provident Fund, contributions to the Employees'
            State Insurance scheme, a gratuity reserve accruing at a statutory
            rate, an annual bonus payment, and compliance with the procedural
            requirements governing retrenchment and termination. State
            governments additionally levy Professional Tax, which is administered
            separately by each state under Article 276 of the Constitution of
            India. This page references the central statutory schedule as of May
            2026.
          </p>

          <p>
            The rates and thresholds set out below reflect Indian central law.
            The four Labour Codes (Code on Wages, 2019; Industrial Relations
            Code, 2020; Code on Social Security, 2020; Code on Occupational
            Safety, Health and Working Conditions, 2020) came into force on 21
            November 2025. During the transition period, existing contribution
            rates and statutory thresholds continue to apply. State-specific
            obligations such as the Labour Welfare Fund are noted but not
            exhaustively catalogued.
          </p>

          <hr className="rule-section" />

          {/* EPF */}
          <h2>
            Employees' Provident Fund (EPF)
          </h2>

          <p>
            The <em>Employees' Provident Funds and Miscellaneous Provisions Act,
            1952</em> (India) establishes a mandatory retirement savings scheme
            administered by the Employees' Provident Fund Organisation (EPFO).
            The Act applies to establishments employing 20 or more employees.
            Codified at{" "}
            <a
              href="https://www.indiacode.nic.in/handle/123456789/2152"
              target="_blank"
              rel="noopener"
            >
              IndiaCode
            </a>
            . Primary source: EPFO.
            <sup className="fn-ref">
              <a href="#fn1">[1]</a>
            </sup>
          </p>

          <h3>
            <code>§ 6</code> — Employer contribution rate
          </h3>
          <p>
            Under <code>§ 6</code> of the <em>Employees' Provident Funds and
            Miscellaneous Provisions Act, 1952</em> (India), the employer is
            required to contribute an amount equal to 12 percent of an
            employee's basic wages, dearness allowance, and retaining allowance
            (if any) to the Employees' Provident Fund. The employee contributes
            an equal 12 percent. The statutory wage ceiling for mandatory EPF
            coverage is ₹15,000 per month in basic salary; contributions on
            wages above this ceiling are voluntary.
            <sup className="fn-ref">
              <a href="#fn1">[1]</a>
            </sup>
          </p>

          <p>
            Of the employer's 12 percent contribution, 8.33 percent is diverted
            to the Employees' Pension Scheme, 1995 (EPS) — also capped on a
            wage ceiling of ₹15,000 per month — and the remaining 3.67 percent
            goes to the EPF account. Employers also contribute 0.50 percent
            of wages to the Employees' Deposit Linked Insurance Scheme (EDLI)
            under <code>§ 6C</code> of the Act.
          </p>

          <p>
            Employers must remit contributions by the 15th day of the month
            following the month for which wages are paid. Registration is
            effected through Form 5A submitted to the regional EPFO office.
          </p>

          <hr className="rule-section" />

          {/* ESI */}
          <h2>
            Employees' State Insurance (ESI)
          </h2>

          <p>
            The <em>Employees' State Insurance Act, 1948</em> (India) establishes
            a social insurance scheme providing health and social security
            benefits to covered employees. The Act is administered by the
            Employees' State Insurance Corporation (ESIC). Source:{" "}
            <a
              href="https://esic.gov.in/contribution"
              target="_blank"
              rel="noopener"
            >
              esic.gov.in/contribution
            </a>
            .
            <sup className="fn-ref">
              <a href="#fn2">[2]</a>
            </sup>
          </p>

          <h3>
            Contribution rates and wage ceiling
          </h3>
          <p>
            Under the <em>Employees' State Insurance Act, 1948</em> (India), the
            current employer contribution rate is 3.25 percent of an employee's
            gross wages, and the employee contribution rate is 0.75 percent.
            These rates came into effect on 1 July 2019. Coverage applies to
            employees whose gross monthly wages do not exceed ₹21,000. Employees
            receiving daily average wages of up to ₹176 are exempt from employee
            contributions, but the employer's share remains due in respect of
            such employees.
            <sup className="fn-ref">
              <a href="#fn2">[2]</a>
            </sup>
          </p>

          <p>
            Contributions must be remitted within 15 days of the last day of the
            calendar month in which contributions fall due.
          </p>

          <hr className="rule-section" />

          {/* Gratuity */}
          <h2>
            Gratuity
          </h2>

          <p>
            The <em>Payment of Gratuity Act, 1972</em> (India) mandates payment
            of gratuity to employees on cessation of employment after at least
            five years of continuous service. Codified at{" "}
            <a
              href="https://www.indiacode.nic.in/handle/123456789/1703"
              target="_blank"
              rel="noopener"
            >
              IndiaCode
            </a>
            .
            <sup className="fn-ref">
              <a href="#fn3">[3]</a>
            </sup>
          </p>

          <h3>
            <code>§ 4</code> — Entitlement and calculation
          </h3>
          <p>
            Under <code>§ 4(1)</code> of the <em>Payment of Gratuity Act, 1972</em>{" "}
            (India), an employee who has rendered not less than five years of
            continuous service is entitled to gratuity on termination, retirement,
            resignation, or death or disablement due to accident or disease. The
            five-year threshold does not apply in cases of death or disablement.
          </p>

          <p>
            Under <code>§ 4(2)</code>, gratuity is calculated at the rate of
            fifteen days' wages based on the rate of wages last drawn, for each
            completed year of service or part thereof in excess of six months.
            The operative formula is: (monthly basic salary ÷ 26) × 15 ×
            completed years of service. The divisor of 26 represents the number
            of working days in a month as prescribed by the Act. The effective
            annual reserve rate is approximately 4.81 percent of annual basic
            salary (derived as 15/26 × 1/12).
          </p>

          <p>
            Under <code>§ 4(3)</code>, as amended by the Payment of Gratuity
            (Amendment) Act, 2018, the maximum amount of gratuity payable is
            ₹20 lakh. This ceiling was raised from ₹10 lakh effective 29 March
            2018.
            <sup className="fn-ref">
              <a href="#fn3">[3]</a>
            </sup>
          </p>

          <hr className="rule-section" />

          {/* Bonus */}
          <h2>
            Statutory Bonus
          </h2>

          <p>
            The <em>Payment of Bonus Act, 1965</em> (India) requires employers
            to pay an annual statutory bonus to eligible employees. Codified at{" "}
            <a
              href="https://www.indiacode.nic.in/handle/123456789/1548"
              target="_blank"
              rel="noopener"
            >
              IndiaCode
            </a>
            .
            <sup className="fn-ref">
              <a href="#fn4">[4]</a>
            </sup>
          </p>

          <h3>
            <code>§ 8</code> — Eligibility
          </h3>
          <p>
            Under <code>§ 8</code> of the <em>Payment of Bonus Act, 1965</em>{" "}
            (India), every employee who receives salary or wages up to ₹21,000
            per month and who has worked for at least 30 working days in the
            accounting year is eligible to receive statutory bonus. The salary
            ceiling was raised from ₹10,000 to ₹21,000 per month by the Payment
            of Bonus (Amendment) Act, 2015.
            <sup className="fn-ref">
              <a href="#fn4">[4]</a>
            </sup>
          </p>

          <h3>
            <code>§ 10</code> and <code>§ 11</code> — Minimum and maximum bonus
          </h3>
          <p>
            Under <code>§ 10</code> of the <em>Payment of Bonus Act, 1965</em>{" "}
            (India), every employer is required to pay a minimum bonus of 8.33
            percent of the salary or wages earned by an employee during the
            accounting year, irrespective of whether the employer has allocated a
            surplus or made a profit. Under <code>§ 11</code>, the maximum bonus
            payable, where the allocable surplus permits, is 20 percent of wages.
          </p>

          <hr className="rule-section" />

          {/* Professional Tax */}
          <h2>
            Professional Tax (state-administered)
          </h2>

          <p>
            Professional Tax is levied by individual state governments under the
            authority of Article 276(2) of the Constitution of India, which
            grants states the power to impose taxes on professions, trades,
            callings, and employment. The Constitution caps Professional Tax at
            ₹2,500 per person per year — a ceiling raised from ₹250 to ₹2,500
            by the Constitution (Sixtieth Amendment) Act, 1988.
          </p>

          <p>
            Not all states levy Professional Tax. Among the principal
            technology-services states, Karnataka and Maharashtra maintain active
            Professional Tax regimes. Under the Maharashtra Professional Tax
            schedule, the current maximum is ₹2,500 per year, calculated as
            ₹200 per month for eleven months and ₹300 for the month of February,
            applicable to employees earning above the relevant income threshold.
            Karnataka applies a similar slab structure up to the ₹2,500 annual
            constitutional maximum. The Delhi National Capital Territory does not
            levy Professional Tax.
          </p>

          <div className="callout-ohl">
            <strong>Methodology note:</strong> Professional Tax rates and
            income thresholds are set by state legislation and vary by state. The
            above describes Karnataka and Maharashtra as exemplars. Employers
            should verify the applicable state Act and current slab schedule in
            the state where the employee is domiciled.
          </div>

          <hr className="rule-section" />

          {/* Notice and Severance */}
          <h2>
            Notice and severance under the Industrial Disputes Act, 1947
          </h2>

          <p>
            The <em>Industrial Disputes Act, 1947</em> (India) prescribes
            procedural requirements that apply to the termination of employees
            who qualify as "workmen" within the meaning of <code>§ 2(s)</code>
            of the Act. The definition of "workman" and its significance is
            addressed in the India Employment Law Overview reference.
          </p>

          <h3>
            <code>§ 25F</code> — Conditions precedent to retrenchment
          </h3>
          <p>
            Under <code>§ 25F</code> of the <em>Industrial Disputes Act, 1947</em>{" "}
            (India), no workman who has been in continuous service for not less
            than one year under an employer may be retrenched unless the employer:
          </p>
          <ol>
            <li>
              Gives the workman one month's written notice indicating the reasons
              for retrenchment, or pays wages for the notice period in lieu of
              notice; and
            </li>
            <li>
              Pays the workman retrenchment compensation equivalent to fifteen
              days' average pay for every completed year of continuous service or
              any part thereof in excess of six months; and
            </li>
            <li>
              Gives notice of the retrenchment to the appropriate government
              authority in the prescribed manner.
            </li>
          </ol>

          <p>
            Under <code>§ 25G</code>, the employer is required to follow the
            last-in-first-out principle for retrenchment unless there is a valid
            reason to deviate. Under <code>§ 25H</code>, retrenched workmen must
            be given preference for re-employment when the employer proposes to
            take on new employees in the relevant category.
          </p>

          <p>
            Establishments employing 100 or more workmen are subject to
            additional requirements under <code>§ 25N</code> of the Act, which
            requires prior permission from the appropriate government before
            retrenchment. The <em>Industrial Relations Code, 2020</em> raises
            this threshold to 300 workmen, but full implementation awaits state
            rule notifications.
          </p>

          <hr className="rule-section" />

          {/* Summary Table */}
        </div>

        {/* Tables container — wider than prose */}
        <div className="tables-ohl" style={{ marginTop: "2rem" }}>
          <h2>Summary table — statutory employer obligations under Indian central law</h2>

          <table>
            <caption>
              Statutory employer obligations under Indian central law as of May
              2026. Rates and ceilings reflect law in force as of verification
              date. State-specific obligations (Professional Tax, Labour Welfare
              Fund) are noted separately.
            </caption>
            <thead>
              <tr>
                <th>Obligation</th>
                <th>Governing Statute</th>
                <th>Section</th>
                <th>Employer Rate</th>
                <th>Wage Base / Cap</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Provident Fund (EPF)</td>
                <td className="statute-name">Employees' Provident Funds and Miscellaneous Provisions Act, 1952</td>
                <td className="section-ref">§ 6</td>
                <td>12% of basic wages + DA</td>
                <td>₹15,000/month basic salary (mandatory ceiling)</td>
                <td>8.33% diverted to EPS; 3.67% to EPF; 0.50% to EDLI under § 6C. Voluntary contributions permitted above ceiling.</td>
              </tr>
              <tr>
                <td>State Insurance (ESI)</td>
                <td className="statute-name">Employees' State Insurance Act, 1948</td>
                <td className="section-ref">§ 40</td>
                <td>3.25% of gross wages</td>
                <td>₹21,000/month gross salary</td>
                <td>Employee contributes 0.75%. Total: 4%. Effective from 1 July 2019. Remittance within 15 days of month-end.</td>
              </tr>
              <tr>
                <td>Gratuity</td>
                <td className="statute-name">Payment of Gratuity Act, 1972</td>
                <td className="section-ref">§ 4(2)</td>
                <td>15 days' wages per completed year of service</td>
                <td>Maximum ₹20 lakh (raised by 2018 amendment)</td>
                <td>Formula: (monthly basic ÷ 26) × 15 × years. Effective reserve: ~4.81% of annual basic. Payable after 5 years' continuous service.</td>
              </tr>
              <tr>
                <td>Statutory Bonus</td>
                <td className="statute-name">Payment of Bonus Act, 1965</td>
                <td className="section-ref">§ 10 / § 11</td>
                <td>Min 8.33%; Max 20% of wages</td>
                <td>Employees earning ≤ ₹21,000/month (§ 8 eligibility ceiling)</td>
                <td>Minimum bonus mandatory regardless of profit. Salary ceiling raised from ₹10,000 by 2015 amendment.</td>
              </tr>
              <tr>
                <td>Maternity Benefit</td>
                <td className="statute-name">Maternity Benefit Act, 1961 (as amended 2017)</td>
                <td className="section-ref">§ 5</td>
                <td>26 weeks paid leave (employer-funded)</td>
                <td>All women employees; establishments with 10+ employees</td>
                <td>Amended from 12 weeks to 26 weeks by Act 6 of 2017. 12 weeks for employees with 2+ surviving children.</td>
              </tr>
              <tr>
                <td>Professional Tax</td>
                <td className="statute-name">State legislation (Article 276(2) of Constitution of India)</td>
                <td className="section-ref">Art. 276(2)</td>
                <td>Up to ₹2,500/year (constitutional cap)</td>
                <td>State-specific slabs; varies by income bracket</td>
                <td>Not levied by all states. Maharashtra and Karnataka: up to ₹2,500/year. Delhi: no Professional Tax.</td>
              </tr>
              <tr>
                <td>Retrenchment Compensation</td>
                <td className="statute-name">Industrial Disputes Act, 1947</td>
                <td className="section-ref">§ 25F</td>
                <td>15 days average pay per completed year of continuous service</td>
                <td>Applies to "workmen" with ≥ 1 year continuous service</td>
                <td>One month's notice also required. Establishments with 100+ workmen require prior govt permission under § 25N.</td>
              </tr>
            </tbody>
          </table>

          <div className="callout-ohl" style={{ marginTop: "1.5rem" }}>
            <strong>Methodology note:</strong> The contributions listed reflect
            the central statutory schedule. State governments in India may impose
            additional obligations (Professional Tax, Labour Welfare Fund) which
            vary by state. This page references central law only; state-specific
            obligations are noted where applicable but not exhaustively
            catalogued.
          </div>
        </div>

        {/* Footnotes back in prose width */}
        <div className="prose-ohl">
          <div className="footnotes" style={{ marginTop: "2rem" }}>
            <ol>
              <li id="fn1">
                <em>Employees' Provident Funds and Miscellaneous Provisions Act,
                1952</em>, <code>§ 6</code> (India). IndiaCode.{" "}
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2152"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.indiacode.nic.in/handle/123456789/2152
                </a>
                . EPFO primary source:{" "}
                <a
                  href="https://www.epfindia.gov.in/site_docs/PDFs/Downloads_PDFs/EPFAct1952.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  epfindia.gov.in
                </a>
                . Accessed May 2026.
              </li>
              <li id="fn2">
                <em>Employees' State Insurance Act, 1948</em> (India). ESIC
                contribution rates.{" "}
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
                <em>Payment of Gratuity Act, 1972</em>, <code>§ 4</code>{" "}
                (India), as amended by Payment of Gratuity (Amendment) Act,
                2018. IndiaCode.{" "}
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1703"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.indiacode.nic.in/handle/123456789/1703
                </a>
                . Maximum ₹20 lakh notified 29 March 2018 per PIB press release.
                Accessed May 2026.
              </li>
              <li id="fn4">
                <em>Payment of Bonus Act, 1965</em>, <code>§§ 8, 10, 11</code>{" "}
                (India). IndiaCode.{" "}
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1548"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.indiacode.nic.in/handle/123456789/1548
                </a>
                . Salary ceiling amended to ₹21,000 by Payment of Bonus
                (Amendment) Act, 2015. Accessed May 2026.
              </li>
              <li id="fn5">
                <em>Industrial Disputes Act, 1947</em>, <code>§ 25F</code>{" "}
                (India). IndiaCode.{" "}
                <a
                  href="https://www.indiacode.nic.in/bitstream/123456789/20352/1/the_industrial_disputes_act.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.indiacode.nic.in
                </a>
                . Accessed May 2026.
              </li>
            </ol>
          </div>

          <p
            style={{
              marginTop: "2rem",
              fontSize: "0.875rem",
              color: "var(--color-ink-muted)",
            }}
          >
            For information on how citations are verified and what sources are
            used, see the <a href="/methodology">Methodology page</a>.
          </p>
        </div>
      </article>
    </>
  );
}
