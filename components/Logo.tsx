interface LogoProps {
  size?: number;
}

export default function Logo({ size = 32 }: LogoProps) {
  const fontSize = Math.round(size * 0.6875); // ~22px at size=32
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Offshore Hiring Laws"
      role="img"
    >
      <rect
        width="32"
        height="32"
        fill="#1C1C1C"
        stroke="#1C1C1C"
        strokeWidth="1.5"
      />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fill="#F8F5EE"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize={fontSize}
        fontStyle="italic"
        fontWeight="600"
      >
        §
      </text>
    </svg>
  );
}
