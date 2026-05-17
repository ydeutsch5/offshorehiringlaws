import type { Metadata } from "next";
import { generateOrganizationSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Offshore Hiring Laws — Statutory Reference for Cross-Border Employment",
  description:
    "An independent statutory reference for U.S. organizations engaging remote workers in India and the Philippines. Employer obligations, verified against primary government sources.",
  openGraph: {
    title: "Offshore Hiring Laws",
    description:
      "Statutory employer obligations for hiring remote workers in India and the Philippines — payroll contributions, mandatory benefits, termination requirements.",
  },
};

const schema = generateOrganizationSchema();

const REFERENCES = [
  {
    href: "/india/employment-law-overview",
    jurisdiction: "India",
    title: "Employment Law Overview",
    description:
      "Central labour statutes, the four Labour Codes, employee vs. contractor classification, and the applicability of Indian law to foreign employers.",
  },
  {
    href: "/india/statutory-employer-obligations",
    jurisdiction: "India",
    title: "Statutory Employer Obligations",
    description:
      "EPF, ESI, gratuity, bonus, professional tax, and retrenchment — statutory rates and section citations verified against primary government sources.",
  },
  {
    href: "/philippines/employment-law-overview",
    jurisdiction: "Philippines",
    title: "Employment Law Overview",
    description:
      "The Labor Code, DOLE regulations, security of tenure doctrine, the four-fold test, and the applicability of Philippine law to foreign employers.",
  },
  {
    href: "/philippines/statutory-employer-obligations",
    jurisdiction: "Philippines",
    title: "Statutory Employer Obligations",
    description:
      "SSS, PhilHealth, Pag-IBIG, 13th month pay, and authorized-cause separation — contribution rates and statutory citations verified against primary sources.",
  },
  {
    href: "/methodology",
    jurisdiction: null,
    title: "Methodology",
    description:
      "Source selection, citation policy, verification cadence, and editorial standards governing this publication.",
  },
  {
    href: "/about",
    jurisdiction: null,
    title: "About",
    description:
      "About the editor, editorial independence disclosure, and the longer-form legal disclaimer.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
      />

      <div style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>

        {/* Hero */}
        <section
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
              fontSize: "1.2rem",
              fontWeight: 500,
              fontStyle: "italic",
              color: "var(--color-ink-muted)",
              lineHeight: 1.55,
              marginBottom: "1.5rem",
            }}
          >
            Offshore Hiring Laws is an independent statutory reference for
            organizations based in the United States that engage remote workers
            domiciled in India or the Philippines. The publication aggregates the
            employer obligations — payroll contributions, mandatory benefits,
            notice and termination requirements — that govern those employment
            relationships under Indian and Philippine labour law, drawing
            exclusively from primary government sources and official gazettes.
            Content is verified on a fixed cadence. Nothing on this site
            constitutes legal advice.
          </p>

          <div
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.78rem",
              color: "var(--color-ink-muted)",
              background: "var(--color-stamp-bg)",
              borderLeft: "3px solid var(--color-maroon)",
              padding: "0.35rem 0.75rem",
              marginBottom: "0.5rem",
            }}
          >
            Cornerstone pages last verified against primary sources: May 2026
          </div>
        </section>

        <hr
          className="rule-section"
          style={{ maxWidth: "720px", margin: "2rem auto" }}
        />

        {/* Browse the references */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
              fontSize: "1.35rem",
              fontWeight: 600,
              color: "var(--color-charcoal)",
              marginBottom: "1.5rem",
              letterSpacing: "0.01em",
            }}
          >
            Browse the references
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1px",
              background: "var(--color-rule)",
              border: "1px solid var(--color-rule)",
            }}
          >
            {REFERENCES.map((ref) => (
              <a
                key={ref.href}
                href={ref.href}
                className="ref-card"
              >
                {ref.jurisdiction && (
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "0.72rem",
                      color: "var(--color-maroon)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {ref.jurisdiction}
                  </span>
                )}
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "var(--color-charcoal)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {ref.title}
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    color: "var(--color-ink-muted)",
                    lineHeight: 1.55,
                  }}
                >
                  {ref.description}
                </span>
              </a>
            ))}
          </div>
        </section>

        <hr
          className="rule-section"
          style={{ maxWidth: "720px", margin: "2.5rem auto" }}
        />

        {/* About the editor */}
        <section
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
              fontSize: "1.35rem",
              fontWeight: 600,
              color: "var(--color-charcoal)",
              marginBottom: "1rem",
              letterSpacing: "0.01em",
            }}
          >
            About the editor
          </h2>

          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--color-ink-muted)",
              lineHeight: 1.65,
              marginBottom: "0",
            }}
          >
            Offshore Hiring Laws is edited by Joel Deutsch, whose professional
            work in cross-border workforce management involves direct engagement
            with the statutory frameworks described on this site. He is not
            licensed to practice law in any jurisdiction. Further detail on
            editorial standards, source selection, and the conflict-of-interest
            disclosure is on the{" "}
            <a href="/about" style={{ color: "var(--color-charcoal)" }}>
              About
            </a>{" "}
            and{" "}
            <a href="/methodology" style={{ color: "var(--color-charcoal)" }}>
              Methodology
            </a>{" "}
            pages.
          </p>
        </section>
      </div>
    </>
  );
}
