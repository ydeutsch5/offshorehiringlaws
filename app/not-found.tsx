import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "This reference is not in the index.",
};

export default function NotFound() {
  return (
    <div style={{ paddingTop: "5rem", paddingBottom: "6rem" }}>
      <div className="prose-ohl">
        <p
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "0.78rem",
            color: "var(--color-maroon)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          404
        </p>

        <h1
          style={{
            fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
            fontSize: "2.25rem",
            fontWeight: 600,
            color: "var(--color-charcoal)",
            marginBottom: "1.5rem",
            lineHeight: 1.2,
          }}
        >
          This reference is not in the index.
        </h1>

        <hr className="rule-section" />

        <p style={{ color: "var(--color-ink-muted)", marginBottom: "1.5rem" }}>
          The page you requested could not be located in this publication.
          Version 1 (May 2026) covers statutory employer obligations for India
          and the Philippines. Additional jurisdictions are planned for Q3–Q4
          2026.
        </p>

        <p>
          <a
            href="/"
            style={{
              color: "var(--color-charcoal)",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.85rem",
            }}
          >
            ← Return to the index
          </a>
        </p>
      </div>
    </div>
  );
}
