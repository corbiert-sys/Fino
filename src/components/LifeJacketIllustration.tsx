export function LifeJacketIllustration({
  color = "#FF6B35",
  variant = "jacket",
  className = "",
}: {
  color?: string;
  variant?: "jacket" | "pack";
  className?: string;
}) {
  if (variant === "pack") {
    return (
      <svg viewBox="0 0 200 200" fill="none" className={className}>
        {/* Life jacket */}
        <g transform="translate(-15, 10)">
          <path
            d="M80 45 C80 35, 95 25, 115 25 C135 25, 150 35, 150 45 L155 120 C155 135, 140 145, 115 145 C90 145, 75 135, 75 120 Z"
            fill={color}
            opacity="0.9"
          />
          <path
            d="M90 50 C90 42, 100 35, 115 35 C130 35, 140 42, 140 50 L142 110 C142 120, 132 128, 115 128 C98 128, 88 120, 88 110 Z"
            fill={color}
            opacity="0.6"
          />
          <rect x="105" y="60" width="20" height="5" rx="2.5" fill="white" opacity="0.7" />
          <rect x="105" y="75" width="20" height="5" rx="2.5" fill="white" opacity="0.7" />
          <rect x="105" y="90" width="20" height="5" rx="2.5" fill="white" opacity="0.7" />
          <path d="M95 42 L115 32 L135 42" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
          <ellipse cx="115" cy="140" rx="6" ry="3" fill={color} opacity="0.5" />
        </g>

        {/* Leash */}
        <g transform="translate(140, 100)">
          <rect x="0" y="0" width="35" height="8" rx="4" fill="#5FA8D3" />
          <rect x="5" y="12" width="25" height="45" rx="4" fill="#5FA8D3" opacity="0.8" />
          <circle cx="17" cy="8" r="5" fill="#5FA8D3" stroke="white" strokeWidth="2" />
          <rect x="10" y="20" width="15" height="3" rx="1.5" fill="white" opacity="0.5" />
          <rect x="10" y="30" width="15" height="3" rx="1.5" fill="white" opacity="0.5" />
        </g>

        {/* Bowl */}
        <g transform="translate(30, 140)">
          <ellipse cx="30" cy="30" rx="30" ry="12" fill="#1B4965" opacity="0.2" />
          <path d="M5 18 Q5 30, 30 32 Q55 30, 55 18" fill="#1B4965" opacity="0.7" />
          <ellipse cx="30" cy="18" rx="25" ry="10" fill="#1B4965" />
          <ellipse cx="30" cy="18" rx="18" ry="7" fill="#5FA8D3" opacity="0.4" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      {/* Shadow */}
      <ellipse cx="100" cy="175" rx="50" ry="8" fill="#1B4965" opacity="0.08" />

      {/* Life jacket body */}
      <path
        d="M65 55 C65 40, 80 28, 100 28 C120 28, 135 40, 135 55 L140 135 C140 155, 125 165, 100 165 C75 165, 60 155, 60 135 Z"
        fill={color}
      />

      {/* Inner panel */}
      <path
        d="M78 60 C78 50, 88 42, 100 42 C112 42, 122 50, 122 60 L124 125 C124 138, 115 145, 100 145 C85 145, 76 138, 76 125 Z"
        fill={color}
        opacity="0.65"
      />

      {/* Straps */}
      <rect x="88" y="72" width="24" height="6" rx="3" fill="white" opacity="0.7" />
      <rect x="88" y="92" width="24" height="6" rx="3" fill="white" opacity="0.7" />
      <rect x="88" y="112" width="24" height="6" rx="3" fill="white" opacity="0.7" />

      {/* Buckles */}
      <rect x="114" y="71" width="8" height="8" rx="2" fill="#1B4965" opacity="0.4" />
      <rect x="114" y="91" width="8" height="8" rx="2" fill="#1B4965" opacity="0.4" />
      <rect x="114" y="111" width="8" height="8" rx="2" fill="#1B4965" opacity="0.4" />

      {/* Handle */}
      <path
        d="M88 40 Q88 30, 100 28 Q112 30, 112 40"
        stroke={color}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M88 40 Q88 30, 100 28 Q112 30, 112 40"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Reflective strips */}
      <rect x="63" y="85" width="3" height="30" rx="1.5" fill="white" opacity="0.5" />
      <rect x="134" y="85" width="3" height="30" rx="1.5" fill="white" opacity="0.5" />

      {/* Collar/chin area */}
      <path
        d="M75 55 Q100 45, 125 55"
        stroke="white"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
