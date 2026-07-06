export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Fino"
    >
      {/* Icon - bracket shape */}
      <rect x="2" y="4" width="38" height="40" rx="4" fill="#0F2B46" />
      <rect x="14" y="4" width="26" height="14" rx="2" fill="white" />
      <rect x="14" y="30" width="26" height="14" rx="2" fill="white" />

      {/* Green pill inside bracket */}
      <rect x="12" y="19" width="16" height="10" rx="5" fill="#00C853" />

      {/* Text: Fino */}
      <text
        x="52"
        y="36"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="#0F2B46"
        letterSpacing="-0.5"
      >
        F
      </text>
      {/* i without dot */}
      <text
        x="72"
        y="36"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="#0F2B46"
        letterSpacing="-0.5"
      >
        ı
      </text>
      {/* Green dot on i */}
      <circle cx="77" cy="10" r="4" fill="#00C853" />
      <text
        x="84"
        y="36"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="#0F2B46"
        letterSpacing="-0.5"
      >
        no
      </text>
    </svg>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Fino"
    >
      <rect x="2" y="4" width="38" height="40" rx="4" fill="#0F2B46" />
      <rect x="14" y="4" width="26" height="14" rx="2" fill="white" />
      <rect x="14" y="30" width="26" height="14" rx="2" fill="white" />
      <rect x="12" y="19" width="16" height="10" rx="5" fill="#00C853" />
    </svg>
  );
}
