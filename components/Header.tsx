import Link from "next/link";
import Script from "next/script";
import Logo from "./Logo";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "rgba(248, 245, 238, 0.96)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        {/* Main row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 0 10px",
            gap: "1rem",
          }}
        >
          {/* Wordmark block */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}
          >
            <Logo size={32} />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading), 'Cormorant Garamond', Georgia, serif",
                  fontWeight: 600,
                  fontSize: "clamp(19px, 2.5vw, 25px)",
                  color: "#1C1C1C",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                }}
              >
                Offshore Hiring Laws
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono), 'IBM Plex Mono', monospace",
                  fontSize: "10px",
                  color: "rgba(28, 28, 28, 0.6)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  lineHeight: 1.3,
                  marginTop: "2px",
                }}
              >
                VOL. I · MMXXVI · EDITED BY JOEL DEUTSCH
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {/* India dropdown */}
            <details className="nav-dropdown">
              <summary className="nav-dropdown-trigger">
                India
                <svg className="nav-dropdown-caret" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" fill="none" />
                </svg>
              </summary>
              <div className="nav-dropdown-menu">
                <Link href="/india/employment-law-overview" className="nav-dropdown-link">
                  Employment Law Overview
                </Link>
                <Link href="/india/statutory-employer-obligations" className="nav-dropdown-link">
                  Statutory Employer Obligations
                </Link>
              </div>
            </details>

            {/* Philippines dropdown */}
            <details className="nav-dropdown">
              <summary className="nav-dropdown-trigger">
                Philippines
                <svg className="nav-dropdown-caret" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" fill="none" />
                </svg>
              </summary>
              <div className="nav-dropdown-menu">
                <Link href="/philippines/employment-law-overview" className="nav-dropdown-link">
                  Employment Law Overview
                </Link>
                <Link href="/philippines/statutory-employer-obligations" className="nav-dropdown-link">
                  Statutory Employer Obligations
                </Link>
              </div>
            </details>

            <Link
              href="/methodology"
              style={{
                fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                fontSize: "1rem",
                fontWeight: 500,
                color: "#1C1C1C",
                textDecoration: "none",
              }}
            >
              Methodology
            </Link>
            <Link
              href="/about"
              style={{
                fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                fontSize: "1rem",
                fontWeight: 500,
                color: "#1C1C1C",
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </nav>
        </div>
      </div>

      {/* Double rule */}
      <div style={{ height: "2px", backgroundColor: "#7A1F1F" }} />
      <div style={{ height: "12px" }} />
      <div style={{ height: "1px", backgroundColor: "rgba(28, 28, 28, 0.12)" }} />

      <Script id="nav-dropdown-close" strategy="afterInteractive">
        {`
          document.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-dropdown[open]').forEach((d) => {
              if (!d.contains(e.target)) d.open = false;
            });
          });
        `}
      </Script>
    </header>
  );
}
