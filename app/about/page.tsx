import type { Metadata } from "next";
import { generatePersonSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the editor of Offshore Hiring Laws — Joel Deutsch — and the editorial independence disclosure, conflict-of-interest notice, and legal disclaimer governing this publication.",
  openGraph: {
    title: "About | Offshore Hiring Laws",
    description:
      "Editor biography, editorial independence disclosure, and legal disclaimer for Offshore Hiring Laws.",
  },
};

const schema = generatePersonSchema();

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />

      <article style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="prose-ohl">
          <h1 style={{ marginBottom: "2rem" }}>About.</h1>

          <hr className="rule-section" />

          <h2>The editor</h2>

          <p>
            Joel Deutsch is the editor of Offshore Hiring Laws. He is the
            founder of{" "}
            <a
              href="https://www.f5hiringsolutions.com"
              target="_blank"
              rel="noopener"
            >
              F5 Hiring Solutions
            </a>
            , a managed-workforce provider that places remote professionals from
            India and the Philippines into US-based client organizations. His
            direct engagement with the statutory frameworks described on this
            site — payroll contribution systems, mandatory benefit obligations,
            notice and termination procedures — is the motivation for the
            publication. The editorial standards governing source selection,
            citation policy, and verification cadence are described in full on
            the{" "}
            <a href="/methodology">Methodology page</a>. He is not a licensed
            attorney. He is not licensed to practice law in any jurisdiction.
          </p>

          <p>
            Correspondence regarding editorial matters may be directed to{" "}
            <a href="mailto:joel@f5hiringsolutions.com">
              joel@f5hiringsolutions.com
            </a>
            .
          </p>

          <hr className="rule-section" />

          <h2>Editorial independence and conflict-of-interest disclosure</h2>

          <p>
            Offshore Hiring Laws is edited by Joel Deutsch, who is also the
            founder of F5 Hiring Solutions. This relationship is disclosed
            because it constitutes a potential conflict of interest: F5 Hiring
            Solutions operates as a managed-workforce provider in the same
            regulatory environment that this publication describes, and may
            benefit commercially from readers' awareness of the statutory
            obligations that F5 bears on their behalf.
          </p>

          <p>
            The publication is operated independently of F5 Hiring Solutions.
            Statutory rates, contribution ceilings, section numbers, and
            compliance obligations are reported as they appear in the cited
            primary sources. No rate is inflated, minimized, or omitted to
            favor any commercial outcome. The citation policy — cite primary
            sources, omit rather than fabricate — is applied uniformly
            regardless of how the content might affect the commercial interests
            of F5 Hiring Solutions or any other entity.
          </p>

          <p>
            F5 Hiring Solutions is referenced on this site only where directly
            relevant as an example of the type of entity (employer-of-record or
            managed-workforce provider) that bears statutory obligations under
            the frameworks described. Such references are confined to the pages
            covering each jurisdiction's employment law overview, where the
            employer-of-record structure is explained, and to this About page.
          </p>

          <hr className="rule-section" />

          <h2>Legal disclaimer</h2>

          <p>
            Offshore Hiring Laws aggregates and explains statutory, regulatory,
            and case-law materials governing cross-border employment. The
            following limitations apply to all content published on this site:
          </p>

          <ul>
            <li>
              <strong>Not legal advice.</strong> Nothing on this site
              constitutes legal advice, legal opinion, or any form of
              professional legal service. The content is provided for
              informational and reference purposes only.
            </li>
            <li>
              <strong>No attorney-client relationship.</strong> Access to or
              use of this site does not create an attorney-client relationship
              between the reader and the editor or any other person or entity
              associated with this publication.
            </li>
            <li>
              <strong>Editor not licensed to practice law.</strong> Joel
              Deutsch is not a licensed attorney and is not licensed to practice
              law in India, the Philippines, the United States, or any other
              jurisdiction. This publication is not a law firm, and its editor
              does not hold himself out as one.
            </li>
            <li>
              <strong>Laws and regulations change.</strong> Statutes,
              regulations, contribution rates, and judicial interpretations
              change over time. Readers must verify the current state of the law
              before relying on any information published here. The verification
              stamps on cornerstone pages reflect the date on which the editor
              verified the page content against the cited primary sources; they
              do not guarantee that the law has not changed since that date.
            </li>
            <li>
              <strong>Jurisdiction-specific advice required.</strong>{" "}
              Compliance obligations vary by employer structure, worker
              classification, state or regional law, and individual
              circumstances. Readers should consult qualified legal counsel
              licensed in the relevant jurisdiction before taking or refraining
              from any action based on information published here.
            </li>
            <li>
              <strong>No warranty.</strong> The editor makes no warranty,
              express or implied, as to the accuracy, completeness, or currency
              of the information published on this site. The editor disclaims
              all liability for any loss or damage arising from reliance on the
              content of this publication.
            </li>
          </ul>

          <hr className="rule-section" />

          <h2>Publication information</h2>

          <ul
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.82rem",
              color: "var(--color-ink-muted)",
              lineHeight: 1.75,
            }}
          >
            <li>
              <strong>Publication:</strong> Offshore Hiring Laws
            </li>
            <li>
              <strong>Editor:</strong> Joel Deutsch
            </li>
            <li>
              <strong>Version 1 launch:</strong> May 2026
            </li>
            <li>
              <strong>Jurisdictions covered (v1):</strong> India, Philippines
            </li>
            <li>
              <strong>Primary source policy:</strong> Every statutory claim
              cites a government gazette, ministry portal, or official statutory
              database. See{" "}
              <a href="/methodology">Methodology</a>.
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
