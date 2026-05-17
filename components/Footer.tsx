import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #7A1F1F",
        backgroundColor: "#F8F5EE",
        paddingTop: "48px",
        paddingBottom: "48px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Three columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Column 1 — identity */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.75rem" }}>
              <Logo size={24} />
              <span
                style={{
                  fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "#1C1C1C",
                }}
              >
                Offshore Hiring Laws
              </span>
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#5C544A",
                lineHeight: 1.55,
                margin: 0,
                fontFamily: "var(--font-body), serif",
              }}
            >
              An independent legal-reference publication aggregating statutory
              and regulatory rules governing cross-border employment in India and
              the Philippines.
            </p>
          </div>

          {/* Column 2 — links */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#1C1C1C",
                marginBottom: "0.75rem",
              }}
            >
              Reference Pages
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[
                { href: "/india/employment-law-overview", label: "India: Employment Law Overview" },
                { href: "/india/statutory-employer-obligations", label: "India: Statutory Obligations" },
                { href: "/philippines/employment-law-overview", label: "Philippines: Employment Law Overview" },
                { href: "/philippines/statutory-employer-obligations", label: "Philippines: Statutory Obligations" },
                { href: "/methodology", label: "Methodology" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.85rem",
                    color: "#5C544A",
                    textDecoration: "none",
                    fontFamily: "var(--font-body), serif",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — verification + contact */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#1C1C1C",
                marginBottom: "0.75rem",
              }}
            >
              Publication Info
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono), 'IBM Plex Mono', monospace",
                fontSize: "0.78rem",
                color: "#5C544A",
                lineHeight: 1.6,
              }}
            >
              <div style={{ marginBottom: "0.5rem" }}>
                Last full verification: May 2026
              </div>
              <div>
                <a
                  href="mailto:editor@offshorehiringlaws.com"
                  style={{
                    color: "#7A1F1F",
                    textDecoration: "none",
                  }}
                >
                  editor@offshorehiringlaws.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(28, 28, 28, 0.08)",
            paddingTop: "24px",
          }}
        >
          {/* Legal disclaimer — line 1 */}
          <p
            style={{
              fontSize: "12.5px",
              color: "rgba(28, 28, 28, 0.7)",
              lineHeight: 1.55,
              marginBottom: "0.4rem",
              fontFamily: "var(--font-body), serif",
            }}
          >
            Offshore Hiring Laws is an independent publication. The content on this site is provided for
            informational purposes only and does not constitute legal advice. Readers should consult
            qualified legal counsel for guidance on their specific circumstances.
          </p>
          {/* Data disclaimer — line 2 */}
          <p
            style={{
              fontSize: "12.5px",
              color: "rgba(28, 28, 28, 0.7)",
              lineHeight: 1.55,
              marginBottom: "0.4rem",
              fontFamily: "var(--font-body), serif",
            }}
          >
            Statutory references reflect the law as of the date of last verification, indicated on each page.
          </p>
          {/* Copyright — line 3 */}
          <p
            style={{
              fontSize: "12.5px",
              color: "rgba(28, 28, 28, 0.7)",
              marginBottom: 0,
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            © Offshore Hiring Laws 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
