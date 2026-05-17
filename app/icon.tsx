import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#1C1C1C",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontFamily: "serif",
          fontStyle: "italic",
          color: "#F8F5EE",
        }}
      >
        §
      </div>
    ),
    { ...size }
  );
}
