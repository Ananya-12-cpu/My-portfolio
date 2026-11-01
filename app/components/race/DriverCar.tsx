/** Rear view of an open-top racer with a girl driver (helmet, swinging ponytail). */
export default function DriverCar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 150"
      className={className}
      role="img"
      aria-label="Girl driving a pink racing car"
    >
      <defs>
        <linearGradient id="dc-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff5cae" />
          <stop offset="1" stopColor="#c4106b" />
        </linearGradient>
        <linearGradient id="dc-suit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22e4ff" />
          <stop offset="1" stopColor="#0a8fb0" />
        </linearGradient>
        <radialGradient id="dc-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ff2e4d" stopOpacity="0.8" />
          <stop offset="1" stopColor="#ff2e4d" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="120" cy="141" rx="104" ry="8" fill="#000" opacity="0.5" />

      {/* rear wheels */}
      <rect x="14" y="86" width="34" height="52" rx="9" fill="#0b0814" />
      <rect x="192" y="86" width="34" height="52" rx="9" fill="#0b0814" />
      <rect x="20" y="92" width="6" height="40" rx="3" fill="#2a2240" />
      <rect x="214" y="92" width="6" height="40" rx="3" fill="#2a2240" />

      {/* rear wing */}
      <rect x="40" y="38" width="160" height="8" rx="3" fill="#0b0814" />
      <rect x="34" y="30" width="10" height="26" rx="3" fill="#ff2e93" />
      <rect x="196" y="30" width="10" height="26" rx="3" fill="#ff2e93" />
      <rect x="62" y="46" width="6" height="22" fill="#0b0814" />
      <rect x="172" y="46" width="6" height="22" fill="#0b0814" />

      {/* body */}
      <path
        d="M30 118 Q30 74 64 68 L176 68 Q210 74 210 118 L206 134 Q120 142 34 134 Z"
        fill="url(#dc-body)"
      />
      <path d="M64 68 L176 68 Q196 70 204 84 L36 84 Q44 70 64 68Z" fill="#ff8cc8" opacity="0.55" />
      {/* racing stripe */}
      <rect x="112" y="68" width="16" height="68" fill="#fff" opacity="0.9" />
      <rect x="117" y="68" width="6" height="68" fill="#ffd23f" />

      {/* cockpit */}
      <ellipse cx="120" cy="82" rx="46" ry="14" fill="#1a1030" />

      {/* driver: shoulders */}
      <path d="M84 96 Q86 74 120 72 Q154 74 156 96 Z" fill="url(#dc-suit)" />
      <path d="M100 96 L104 78 M140 96 L136 78" stroke="#fff" strokeWidth="3" opacity="0.7" />
      {/* arms to wheel */}
      <path d="M88 94 Q82 80 96 70" stroke="#0a8fb0" strokeWidth="9" strokeLinecap="round" fill="none" />
      <path d="M152 94 Q158 80 144 70" stroke="#0a8fb0" strokeWidth="9" strokeLinecap="round" fill="none" />

      {/* ponytail (swings) */}
      <g className="origin-[120px_44px] animate-[tail_1.4s_ease-in-out_infinite]">
        <path d="M120 40 C146 40 152 70 138 88 C136 70 130 56 120 52Z" fill="#1b1226" />
        <circle cx="132" cy="44" r="5" fill="#ff2e93" />
      </g>

      {/* helmet */}
      <circle cx="120" cy="46" r="24" fill="#ff2e93" />
      <path d="M96 46 A24 24 0 0 1 144 46 Z" fill="#ff7ab8" opacity="0.8" />
      <rect x="116" y="22" width="8" height="26" fill="#fff" opacity="0.9" />
      <path d="M100 52 Q120 62 140 52 L140 60 Q120 70 100 60Z" fill="#1b1226" opacity="0.85" />

      {/* tail lights */}
      <circle cx="58" cy="122" r="22" fill="url(#dc-glow)" />
      <circle cx="182" cy="122" r="22" fill="url(#dc-glow)" />
      <rect x="44" y="116" width="28" height="9" rx="4" fill="#ff2e4d" />
      <rect x="168" y="116" width="28" height="9" rx="4" fill="#ff2e4d" />

      {/* plate */}
      <rect x="96" y="112" width="48" height="16" rx="3" fill="#f5efff" />
      <text x="120" y="124" textAnchor="middle" fontSize="11" fontWeight="900" fill="#14101f" fontFamily="monospace">
        ANANYA
      </text>

      {/* exhausts */}
      <rect x="76" y="132" width="12" height="6" rx="3" fill="#2a2240" />
      <rect x="152" y="132" width="12" height="6" rx="3" fill="#2a2240" />
    </svg>
  );
}
