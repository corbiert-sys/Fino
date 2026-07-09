export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PawlyDog"
    >
      {/* Shield / badge background */}
      <rect x="1" y="2" width="48" height="48" rx="14" fill="#1B4965" />

      {/* Paw print */}
      <ellipse cx="16.5" cy="16" rx="4.2" ry="5" fill="#FF6B35" transform="rotate(-10 16.5 16)" />
      <ellipse cx="33.5" cy="16" rx="4.2" ry="5" fill="#FF6B35" transform="rotate(10 33.5 16)" />
      <ellipse cx="12" cy="26" rx="3.8" ry="4.5" fill="#FF6B35" transform="rotate(-25 12 26)" />
      <ellipse cx="38" cy="26" rx="3.8" ry="4.5" fill="#FF6B35" transform="rotate(25 38 26)" />
      <ellipse cx="25" cy="31" rx="8" ry="6" fill="#FF6B35" />

      {/* Wave under paw */}
      <path
        d="M10 42 Q17.5 37 25 42 Q32.5 47 40 42"
        stroke="#5FA8D3"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Brand name */}
      <text
        x="58"
        y="36"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="#1B4965"
        letterSpacing="-1"
      >
        Pawly
      </text>
      <text
        x="175"
        y="36"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="#FF6B35"
        letterSpacing="-1"
      >
        Dog
      </text>
    </svg>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 50 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PawlyDog"
    >
      <rect x="1" y="2" width="48" height="48" rx="14" fill="#1B4965" />
      <ellipse cx="16.5" cy="16" rx="4.2" ry="5" fill="#FF6B35" transform="rotate(-10 16.5 16)" />
      <ellipse cx="33.5" cy="16" rx="4.2" ry="5" fill="#FF6B35" transform="rotate(10 33.5 16)" />
      <ellipse cx="12" cy="26" rx="3.8" ry="4.5" fill="#FF6B35" transform="rotate(-25 12 26)" />
      <ellipse cx="38" cy="26" rx="3.8" ry="4.5" fill="#FF6B35" transform="rotate(25 38 26)" />
      <ellipse cx="25" cy="31" rx="8" ry="6" fill="#FF6B35" />
      <path
        d="M10 42 Q17.5 37 25 42 Q32.5 47 40 42"
        stroke="#5FA8D3"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

export function LogoWhite({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PawlyDog"
    >
      <rect x="1" y="2" width="48" height="48" rx="14" fill="white" fillOpacity="0.15" />
      <ellipse cx="16.5" cy="16" rx="4.2" ry="5" fill="#FF6B35" transform="rotate(-10 16.5 16)" />
      <ellipse cx="33.5" cy="16" rx="4.2" ry="5" fill="#FF6B35" transform="rotate(10 33.5 16)" />
      <ellipse cx="12" cy="26" rx="3.8" ry="4.5" fill="#FF6B35" transform="rotate(-25 12 26)" />
      <ellipse cx="38" cy="26" rx="3.8" ry="4.5" fill="#FF6B35" transform="rotate(25 38 26)" />
      <ellipse cx="25" cy="31" rx="8" ry="6" fill="#FF6B35" />
      <path
        d="M10 42 Q17.5 37 25 42 Q32.5 47 40 42"
        stroke="#5FA8D3"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <text
        x="58"
        y="36"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="white"
        letterSpacing="-1"
      >
        Pawly
      </text>
      <text
        x="175"
        y="36"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontWeight="800"
        fontSize="32"
        fill="#FF6B35"
        letterSpacing="-1"
      >
        Dog
      </text>
    </svg>
  );
}
