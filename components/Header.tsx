"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const indiaLinks = [
  { href: "/india/employment-law-overview", label: "Employment Law Overview" },
  { href: "/india/statutory-employer-obligations", label: "Statutory Employer Obligations" },
];

const philippinesLinks = [
  { href: "/philippines/employment-law-overview", label: "Employment Law Overview" },
  { href: "/philippines/statutory-employer-obligations", label: "Statutory Employer Obligations" },
];

export default function Header() {
  const [indiaOpen, setIndiaOpen] = useState(false);
  const [philippinesOpen, setPhilippinesOpen] = useState(false);

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
            <div style={{ position: "relative" }}>
              <button
                onClick={() => { setIndiaOpen(!indiaOpen); setPhilippinesOpen(false); }}
                onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setIndiaOpen(false); }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#1C1C1C",
                  padding: "4px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                India
                <span style={{ fontSize: "0.6rem", opacity: 0.6 }}>▾</span>
              </button>
              {indiaOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    right: 0,
                    backgroundColor: "#F8F5EE",
                    border: "1px solid #E2DCC9",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                    minWidth: "240px",
                    zIndex: 100,
                  }}
                >
                  {indiaLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIndiaOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.6rem 1rem",
                        fontSize: "0.875rem",
                        color: "#1C1C1C",
                        textDecoration: "none",
                        borderBottom: "1px solid #E2DCC9",
                        fontFamily: "var(--font-body), serif",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Philippines dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => { setPhilippinesOpen(!philippinesOpen); setIndiaOpen(false); }}
                onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setPhilippinesOpen(false); }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-heading), 'Cormorant Garamond', serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#1C1C1C",
                  padding: "4px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                Philippines
                <span style={{ fontSize: "0.6rem", opacity: 0.6 }}>▾</span>
              </button>
              {philippinesOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    right: 0,
                    backgroundColor: "#F8F5EE",
                    border: "1px solid #E2DCC9",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                    minWidth: "270px",
                    zIndex: 100,
                  }}
                >
                  {philippinesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setPhilippinesOpen(false)}
                      style={{
                        display: "block",
                        padding: "0.6rem 1rem",
                        fontSize: "0.875rem",
                        color: "#1C1C1C",
                        textDecoration: "none",
                        borderBottom: "1px solid #E2DCC9",
                        fontFamily: "var(--font-body), serif",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
    </header>
  );
}
