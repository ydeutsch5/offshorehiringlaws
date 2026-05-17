import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Offshore Hiring Laws — Statutory Reference for Cross-Border Employment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#F8F5EE",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Top rule */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 80,
            right: 80,
            height: 2,
            background: "#7A1F1F",
          }}
        />

        {/* § mark */}
        <div
          style={{
            fontSize: 72,
            color: "#7A1F1F",
            fontStyle: "italic",
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          §
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#1C1C1C",
            lineHeight: 1.15,
            marginBottom: 20,
            letterSpacing: "-0.5px",
          }}
        >
          Offshore Hiring Laws
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#5C544A",
            lineHeight: 1.4,
            fontStyle: "italic",
          }}
        >
          Statutory reference for cross-border employment
        </div>

        {/* Bottom rule */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 80,
            right: 80,
            height: 1,
            background: "#E2DCC9",
          }}
        />

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            fontSize: 18,
            color: "#5C544A",
            fontFamily: "monospace",
          }}
        >
          offshorehiringlaws.com
        </div>
      </div>
    ),
    { ...size }
  );
}
