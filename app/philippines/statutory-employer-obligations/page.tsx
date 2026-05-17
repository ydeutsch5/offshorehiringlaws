import type { Metadata } from "next";
import { generateArticleSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Statutory Employer Obligations Under Philippine Law",
  description:
    "A reference to SSS, PhilHealth, Pag-IBIG, 13th month pay, and separation pay obligations under Philippine law — governing statutes, rates, wage bases, and employer remittance requirements.",
  openGraph: {
    title: "Statutory Employer Obligations Under Philippine Law | Offshore Hiring Laws",
    description:
      "SSS, PhilHealth, Pag-IBIG, 13th month pay, and separation pay — statutory rates and employer obligations under Philippine law.",
  },
};

const schema = generateArticleSchema({
  title:
    "Statutory employer obligations under Philippine law: SSS, PhilHealth, Pag-IBIG, 13th month, and separation pay",
  description:
    "A reference to the rates, wage bases, and procedural rules governing employer obligations under Philippine law.",
  url: "https://offshorehiringlaws.com/philippines/statutory-employer-obligations",
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  jurisdiction: "Philippines",
  verifiedAgainst:
    "RA 11199, RA 11223, RA 9679, PD 851, Labor Code Articles 298-299",
  verifiedAsOf: "May 2026",
});

export default function PhilippinesStatutoryObligations() {
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
            Verified against RA 11199, RA 11223, RA 9679, Presidential Decree
            No. 851, and Labor Code Articles 298–299 as of May 2026.
          </div>

          {/* H1 */}
          <h1 style={{ marginBottom: "0.5rem", marginTop: "1rem" }}>
            Statutory employer obligations under Philippine law: SSS, PhilHealth,
            Pag-IBIG, 13th month, and separation pay.
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
            employer remittances under Philippine law.
          </p>

          <hr className="rule-section" />

          {/* Intro */}
          <p className="drop-cap">
            Under Philippine law, employers bear several mandatory contribution
            and benefit obligations in addition to paying the statutory minimum
            wage. These include contributions to the Social Security System
            (SSS), contributions to PhilHealth (the national health insurance
            fund), contributions to the Home Development Mutual Fund (Pag-IBIG),
            and the annual 13th month pay mandated by Presidential Decree No.
            851. Termination for authorized causes triggers statutory separation
            pay under the Labor Code. This page identifies the governing statute
            for each obligation and states the rates and wage bases as of May
            2026.
          </p>

          <hr className="rule-section" />

          {/* SSS */}
          <h2>Social Security System (SSS)</h2>

          <p>
            The mandatory social security contribution system for private-sector
            employees in the Philippines is established by the{" "}
            <em>Social Security Act of 2018</em> (Republic Act No. 11199).
            Contributions are remitted to the Social Security System (SSS) and
            fund retirement, disability, death, maternity, and sickness benefits
            for covered members. Source:{" "}
            <a
              href="https://www.sss.gov.ph/sss-contribution-table/"
              target="_blank"
              rel="noopener"
            >
              sss.gov.ph/sss-contribution-table
            </a>
            .
            <sup className="fn-ref">
              <a href="#fn1">[1]</a>
            </sup>
          </p>

          <h3>
            Contribution rate and schedule — effective January 2025
          </h3>
          <p>
            Under <em>Republic Act No. 11199</em>, the SSS contribution rate
            increased to 15 percent of the Monthly Salary Credit (MSC) effective
            January 2025 — the final scheduled increase under the Social Security
            Act of 2018's phased rate schedule. Of the total 15 percent: the
            employer contributes 10 percent and the employee contributes 5
            percent.
            <sup className="fn-ref">
              <a href="#fn1">[1]</a>
            </sup>
          </p>

          <p>
            The MSC range applicable from January 2025 is ₱5,000 minimum to
            ₱35,000 maximum. Employers also remit Employees' Compensation (EC)
            contributions separately at rates prescribed by the Employees'
            Compensation Commission.
          </p>

          <hr className="rule-section" />

          {/* PhilHealth */}
          <h2>PhilHealth — National Health Insurance</h2>

          <p>
            The mandatory health insurance contribution for employed members in
            the Philippines is governed by the{" "}
            <em>Universal Health Care Act</em> (Republic Act No. 11223),
            administered by the Philippine Health Insurance Corporation
            (PhilHealth). Source:{" "}
            <a
              href="https://www.philhealth.gov.ph"
              target="_blank"
              rel="noopener"
            >
              philhealth.gov.ph
            </a>
            .
            <sup className="fn-ref">
              <a href="#fn2">[2]</a>
            </sup>
          </p>

          <h3>
            <code>§ 10</code> — Contribution rate and wage base
          </h3>
          <p>
            Under <code>§ 10</code> of <em>Republic Act No. 11223</em>, the
            premium contribution rate for employed members is 5 percent of
            monthly basic salary, representing the final rate under the UHC Law's
            phased schedule. The employer contributes 2.5 percent and the
            employee contributes 2.5 percent. The monthly salary floor is ₱10,000
            and the ceiling is ₱100,000, resulting in a minimum monthly
            contribution of ₱500 and a maximum of ₱5,000. PhilHealth confirmed
            that the 5 percent rate applies for 2025 and 2026, with no further
            increase scheduled.
            <sup className="fn-ref">
              <a href="#fn2">[2]</a>
            </sup>
          </p>

          <hr className="rule-section" />

          {/* Pag-IBIG */}
          <h2>Pag-IBIG — Home Development Mutual Fund</h2>

          <p>
            Mandatory contributions to the Home Development Mutual Fund
            (Pag-IBIG) are governed by the{" "}
            <em>Home Development Mutual Fund Law of 2009</em> (Republic Act No.
            9679), as implemented by HDMF Circular No. 460 (issued 15 January
            2024, effective February 2024). Source:{" "}
            <a
              href="https://www.pagibigfund.gov.ph"
              target="_blank"
              rel="noopener"
            >
              pagibigfund.gov.ph
            </a>
            .
            <sup className="fn-ref">
              <a href="#fn3">[3]</a>
            </sup>
          </p>

          <h3>
            <code>§ 7</code> — Contribution rates and cap
          </h3>
          <p>
            Under <code>§ 7</code> of <em>Republic Act No. 9679</em>, both
            employer and employee contribute 2 percent of the employee's monthly
            compensation to the Fund. The Maximum Fund Salary (MFS) used for
            contribution computation was raised from ₱5,000 to ₱10,000 by HDMF
            Circular No. 460, effective February 2024. The maximum monthly
            contribution per party is accordingly ₱200 (2 percent of ₱10,000),
            for a combined maximum of ₱400 per month.
            <sup className="fn-ref">
              <a href="#fn3">[3]</a>
            </sup>
          </p>

          <p>
            For members with monthly compensation of ₱1,500 or below, the
            employee contribution rate is 1 percent and the employer rate is 2
            percent, per the contribution schedule under RA 9679.
          </p>

          <hr className="rule-section" />

          {/* 13th Month */}
          <h2>13th Month Pay</h2>

          <p>
            Mandatory 13th month pay for rank-and-file employees is governed by
            Presidential Decree No. 851 (1975), as modified by Memorandum Order
            No. 28 (1986). Source: Official Gazette of the Republic of the
            Philippines.
            <sup className="fn-ref">
              <a href="#fn4">[4]</a>
            </sup>
          </p>

          <h3>
            <code>§ 1</code> — Mandatory payment obligation
          </h3>
          <p>
            Section 1 of Presidential Decree No. 851, as modified by Memorandum
            Order No. 28 (1986), requires all employers to pay all their
            rank-and-file employees a 13th month pay not later than December 24
            of every year. The 13th month pay is equivalent to one-twelfth
            (1/12) of the total basic salary earned by an employee within a
            calendar year.
            <sup className="fn-ref">
              <a href="#fn4">[4]</a>
            </sup>
          </p>

          <div className="callout-ohl">
            <strong>Statutory limitation:</strong> The 13th month pay benefit
            under Presidential Decree No. 851 applies to rank-and-file employees
            only. Managerial employees are excluded under <code>§ 2</code> of the
            Decree, as interpreted by DOLE Implementing Rules and confirmed by
            Supreme Court jurisprudence. Only basic salary earned during the
            calendar year is included in the computation; overtime pay, allowances,
            profit-sharing payments, and other monetary benefits are excluded.
          </div>

          <hr className="rule-section" />

          {/* Separation Pay */}
          <h2>Separation Pay</h2>

          <p>
            Under the <em>Labor Code of the Philippines</em> (Presidential Decree
            No. 442, as amended), separation pay is due to an employee terminated
            for authorized causes under Articles 298-299 of the Code.
          </p>

          <h3>
            <code>Art. 298 [283]</code> — Authorized causes and separation pay
            schedule
          </h3>
          <p>
            Under Article 298 [formerly Article 283] of the{" "}
            <em>Labor Code of the Philippines</em>, in cases of termination for
            authorized causes (installation of labor-saving devices, redundancy,
            retrenchment to prevent losses, or closure of business not due to
            serious business losses), the affected employee is entitled to
            separation pay as follows:
          </p>

          <ul>
            <li>
              Installation of labor-saving devices or redundancy: one month pay,
              or one month pay per year of service, whichever is higher;
            </li>
            <li>
              Retrenchment to prevent losses, or closure not due to serious
              losses: one-half month pay per year of service, or one month pay,
              whichever is higher.
            </li>
          </ul>

          <p>
            No separation pay is required where the closure or cessation of
            operations is due to serious business losses or financial reverses.
          </p>

          <p>
            A fraction of at least six months of a year of service is considered
            as one whole year for computation purposes.
          </p>

          <hr className="rule-section" />
        </div>

        {/* Summary Table — wider container */}
        <div className="tables-ohl" style={{ marginTop: "0" }}>
          <h2>Summary table — statutory employer obligations under Philippine law</h2>

          <table>
            <caption>
              Statutory employer obligations under Philippine law as of May 2026.
              Rates reflect current law; see footnotes for primary sources.
            </caption>
            <thead>
              <tr>
                <th>Obligation</th>
                <th>Governing Statute</th>
                <th>§ / Art.</th>
                <th>Employer Rate</th>
                <th>Wage Base / Cap (PHP)</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SSS</td>
                <td className="statute-name">Social Security Act of 2018</td>
                <td className="section-ref">RA 11199, § 18</td>
                <td>10% of MSC</td>
                <td>MSC: ₱5,000 min / ₱35,000 max</td>
                <td>Employee: 5%. Total: 15%. Effective January 2025 (final rate under RA 11199). Employer also pays EC contribution separately.</td>
              </tr>
              <tr>
                <td>PhilHealth</td>
                <td className="statute-name">Universal Health Care Act</td>
                <td className="section-ref">RA 11223, § 10</td>
                <td>2.5% of monthly basic salary</td>
                <td>Salary floor ₱10,000; ceiling ₱100,000. Max contribution: ₱5,000/month total.</td>
                <td>Employee: 2.5%. Total: 5%. Final rate under UHC Law. No increase for 2026.</td>
              </tr>
              <tr>
                <td>Pag-IBIG / HDMF</td>
                <td className="statute-name">Home Development Mutual Fund Law of 2009</td>
                <td className="section-ref">RA 9679, § 7</td>
                <td>2% of monthly compensation</td>
                <td>Max Fund Salary: ₱10,000/month. Max contribution per party: ₱200/month.</td>
                <td>Employee: 2%. MFS raised from ₱5,000 to ₱10,000 by HDMF Circular No. 460, eff. Feb 2024.</td>
              </tr>
              <tr>
                <td>13th Month Pay</td>
                <td className="statute-name">Presidential Decree No. 851 (as modified by Memo Order 28, 1986)</td>
                <td className="section-ref">PD 851, § 1</td>
                <td>1/12 of annual basic salary</td>
                <td>All rank-and-file employees</td>
                <td>Due by December 24. Managerial employees excluded under § 2. Only basic salary included — not OT or allowances.</td>
              </tr>
              <tr>
                <td>Separation Pay (Authorized Causes)</td>
                <td className="statute-name">Labor Code of the Philippines</td>
                <td className="section-ref">Art. 298 [283]</td>
                <td>
                  1 month/year (redundancy / labor-saving devices); 0.5
                  month/year (retrenchment / closure)
                </td>
                <td>All regular employees terminated for authorized causes</td>
                <td>Not required for closure due to serious financial losses. Fraction of ≥ 6 months counts as full year.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footnotes */}
        <div className="prose-ohl">
          <div className="footnotes" style={{ marginTop: "2rem" }}>
            <ol>
              <li id="fn1">
                <em>Social Security Act of 2018</em>, Republic Act No. 11199
                (Philippines). SSS Contribution Table.{" "}
                <a
                  href="https://www.sss.gov.ph/sss-contribution-table/"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.sss.gov.ph/sss-contribution-table/
                </a>
                . SSS Circular 2024-06 mandating 15% rate from January 2025.
                Accessed May 2026.
              </li>
              <li id="fn2">
                <em>Universal Health Care Act</em>, Republic Act No. 11223,{" "}
                <code>§ 10</code> (Philippines). PhilHealth Advisory PA2025-0002.{" "}
                <a
                  href="https://www.philhealth.gov.ph/advisories/2025/PA2025-0002.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.philhealth.gov.ph
                </a>
                . Philippine Information Agency confirmation of 5% rate for 2026:{" "}
                <a
                  href="https://pia.gov.ph/news/philhealth-sets-5-premium-contribution-rate-for-2026/"
                  target="_blank"
                  rel="noopener"
                >
                  pia.gov.ph
                </a>
                . Accessed May 2026.
              </li>
              <li id="fn3">
                <em>Home Development Mutual Fund Law of 2009</em>, Republic Act
                No. 9679, <code>§ 7</code> (Philippines). HDMF Circular No. 460
                (15 January 2024), effective February 2024. Pag-IBIG Fund.{" "}
                <a
                  href="https://www.pagibigfund.gov.ph"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.pagibigfund.gov.ph
                </a>
                . Accessed May 2026.
              </li>
              <li id="fn4">
                Presidential Decree No. 851, <code>§ 1</code> (Philippines),
                as modified by Memorandum Order No. 28 (1986). Official Gazette
                of the Republic of the Philippines.{" "}
                <a
                  href="https://www.officialgazette.gov.ph/1975/12/16/presidential-decree-no-851-s-1975/"
                  target="_blank"
                  rel="noopener"
                >
                  https://www.officialgazette.gov.ph
                </a>
                . Supreme Court E-Library.{" "}
                <a
                  href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/26/17290"
                  target="_blank"
                  rel="noopener"
                >
                  elibrary.judiciary.gov.ph
                </a>
                . Accessed May 2026.
              </li>
              <li id="fn5">
                <em>Labor Code of the Philippines</em>, Art. 298 [283]
                (Presidential Decree No. 442, as amended). Library of Labor Law
                Philippines.{" "}
                <a
                  href="https://library.laborlaw.ph/p-d-442-labor-code-book-6/"
                  target="_blank"
                  rel="noopener"
                >
                  https://library.laborlaw.ph
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
