export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Fino"
    >
      {/* Icon: rounded square with mini chart */}
      <rect x="0" y="2" width="40" height="40" rx="10" fill="#0F2B46" />

      {/* Chart bars inside icon */}
      <rect x="9" y="26" width="5" height="10" rx="1.5" fill="#00C853" />
      <rect x="17.5" y="18" width="5" height="18" rx="1.5" fill="#00C853" opacity="0.7" />
      <rect x="26" y="12" width="5" height="24" rx="1.5" fill="#00C853" />

      {/* Trend line */}
      <path
        d="M11.5 24 L20 16 L28.5 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dot at end of trend line */}
      <circle cx="28.5" cy="10" r="2.5" fill="white" />

      {/* Text: Fino */}
      <text
        x="50"
        y="32"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="30"
        fill="#0F2B46"
        letterSpacing="-1"
      >
        Fino
      </text>

      {/* Green dot on the i */}
      <circle cx="68.5" cy="9" r="3.5" fill="#00C853" />
    </svg>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Fino"
    >
      <rect width="40" height="40" rx="10" fill="#0F2B46" />
      <rect x="7" y="24" width="5" height="10" rx="1.5" fill="#00C853" />
      <rect x="15.5" y="16" width="5" height="18" rx="1.5" fill="#00C853" opacity="0.7" />
      <rect x="24" y="10" width="5" height="24" rx="1.5" fill="#00C853" />
      <path
        d="M9.5 22 L18 14 L26.5 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="26.5" cy="8" r="2.5" fill="white" />
    </svg>
  );
}
