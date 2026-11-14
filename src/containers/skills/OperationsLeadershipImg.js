import React from "react";

export default function OperationsLeadershipImg({ theme }) {
  return (
    <svg
      role="img"
      aria-label="Illustration of a team coordinating plans and operations"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 620 390"
    >
      <ellipse cx="310" cy="350" rx="260" ry="18" fill={theme.compImgHighlight} />
      <circle cx="310" cy="185" r="150" fill={theme.imageHighlight} opacity="0.1" />

      <rect x="195" y="45" width="300" height="207" rx="16" fill="#fff" stroke={theme.compImgHighlight} strokeWidth="4" />
      <path d="M195 62a17 17 0 0 1 17-17h266a17 17 0 0 1 17 17v22H195z" fill={theme.compImgHighlight} />
      <circle cx="219" cy="66" r="5" fill={theme.imageHighlight} />
      <circle cx="237" cy="66" r="5" fill={theme.imageHighlight} />
      <circle cx="255" cy="66" r="5" fill={theme.imageHighlight} />

      <rect x="222" y="112" width="245" height="38" rx="9" fill={theme.compImgHighlight} opacity="0.8" />
      <circle cx="244" cy="131" r="9" fill={theme.imageHighlight} />
      <rect x="262" y="126" width="112" height="7" rx="3.5" fill={theme.text} opacity="0.76" />
      <path d="m433 128 7 7 14-16" fill="none" stroke={theme.imageHighlight} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="222" y="163" width="245" height="58" rx="9" fill={theme.compImgHighlight} opacity="0.45" />
      <rect x="240" y="177" width="11" height="29" rx="4" fill={theme.imageHighlight} opacity="0.55" />
      <rect x="260" y="188" width="11" height="18" rx="4" fill={theme.imageHighlight} />
      <rect x="280" y="171" width="11" height="35" rx="4" fill={theme.imageHighlight} opacity="0.78" />
      <path d="M309 202h125" stroke={theme.text} strokeWidth="6" strokeLinecap="round" opacity="0.65" />
      <path d="M309 185h88" stroke={theme.text} strokeWidth="5" strokeLinecap="round" opacity="0.24" />

      <path d="M146 261c34-50 79-69 127-68m201 69c-34-50-79-69-127-68" fill="none" stroke={theme.imageHighlight} strokeWidth="5" strokeDasharray="8 10" opacity="0.75" />
      <circle cx="177" cy="220" r="25" fill={theme.imageHighlight} opacity="0.2" />
      <circle cx="443" cy="220" r="25" fill={theme.imageHighlight} opacity="0.2" />
      <circle cx="310" cy="205" r="28" fill={theme.text} />
      <circle cx="310" cy="196" r="10" fill="#f3b2a5" />
      <path d="M291 225c3-14 12-21 19-21s16 7 19 21" fill={theme.imageHighlight} />

      <path d="M62 330c2-29 20-49 46-49s44 20 46 49" fill={theme.text} />
      <circle cx="108" cy="260" r="22" fill="#f3b2a5" />
      <path d="M86 257c-1-18 9-30 23-30 17 0 26 11 25 26-12-2-21-9-27-16-3 9-10 16-21 20z" fill={theme.text} />
      <path d="m82 294-23 23m94-23 23 23" stroke={theme.text} strokeWidth="13" strokeLinecap="round" />

      <path d="M464 330c2-29 20-49 46-49s44 20 46 49" fill={theme.text} />
      <circle cx="510" cy="260" r="22" fill="#f3b2a5" />
      <path d="M488 257c-1-18 9-30 23-30 17 0 26 11 25 26-12-2-21-9-27-16-3 9-10 16-21 20z" fill={theme.text} />
      <path d="m484 294-23 23m94-23 23 23" stroke={theme.text} strokeWidth="13" strokeLinecap="round" />
    </svg>
  );
}
