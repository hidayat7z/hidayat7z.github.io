import React from "react";

export default function StartupBuildingImg({ theme }) {
  return (
    <svg
      role="img"
      aria-label="Illustration of an idea moving through planning into a product"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 620 390"
    >
      <ellipse cx="308" cy="350" rx="258" ry="18" fill={theme.compImgHighlight} />
      <circle cx="180" cy="190" r="145" fill={theme.imageHighlight} opacity="0.1" />

      <rect x="172" y="55" width="365" height="258" rx="16" fill="#fff" stroke={theme.compImgHighlight} strokeWidth="4" />
      <path d="M172 72a17 17 0 0 1 17-17h331a17 17 0 0 1 17 17v25H172z" fill={theme.compImgHighlight} />
      <circle cx="195" cy="76" r="5" fill={theme.imageHighlight} />
      <circle cx="213" cy="76" r="5" fill={theme.imageHighlight} />
      <circle cx="231" cy="76" r="5" fill={theme.imageHighlight} />

      <rect x="205" y="127" width="105" height="142" rx="12" fill={theme.compImgHighlight} opacity="0.72" />
      <circle cx="257" cy="158" r="22" fill={theme.imageHighlight} opacity="0.22" />
      <path d="M257 143v30m-15-15h30" stroke={theme.imageHighlight} strokeWidth="5" strokeLinecap="round" />
      <rect x="222" y="194" width="70" height="7" rx="3.5" fill={theme.text} opacity="0.8" />
      <rect x="222" y="211" width="55" height="6" rx="3" fill={theme.text} opacity="0.24" />
      <rect x="222" y="227" width="63" height="6" rx="3" fill={theme.text} opacity="0.24" />
      <rect x="222" y="247" width="39" height="12" rx="6" fill={theme.imageHighlight} />

      <path d="M325 198h35" stroke={theme.imageHighlight} strokeWidth="5" strokeLinecap="round" />
      <path d="m351 188 12 10-12 10" fill="none" stroke={theme.imageHighlight} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="385" y="127" width="122" height="142" rx="12" fill={theme.text} />
      <rect x="398" y="142" width="96" height="66" rx="5" fill="#fff" />
      <path d="M410 191v-20h14v20m9 0v-34h14v34m9 0v-45h14v45" fill={theme.imageHighlight} />
      <rect x="408" y="224" width="76" height="6" rx="3" fill="#fff" opacity="0.9" />
      <rect x="408" y="239" width="55" height="6" rx="3" fill="#fff" opacity="0.55" />
      <circle cx="446" cy="285" r="4" fill={theme.compImgHighlight} />

      <path d="M111 291c-16-24-22-57-16-82 4-17 15-28 30-30 18-3 35 9 41 29 9 29 1 61-11 83" fill={theme.text} />
      <circle cx="123" cy="154" r="22" fill="#f3b2a5" />
      <path d="M101 151c-2-19 10-32 27-32 16 0 26 11 25 27-9-7-14-14-16-19-6 11-19 18-36 24z" fill={theme.text} />
      <path d="m108 205-22 42m67-42 24 35" stroke={theme.text} strokeWidth="15" strokeLinecap="round" />
      <path d="m115 285-9 46m39-47 8 46" stroke={theme.text} strokeWidth="17" strokeLinecap="round" />
      <path d="M99 335h22m28 0h23" stroke={theme.text} strokeWidth="11" strokeLinecap="round" />
      <path d="m143 210 11 48-22 23-17-27 4-43z" fill={theme.imageHighlight} />

      <path d="M77 103c-10-20-5-43 14-54 20-11 43-2 51 17" fill="none" stroke={theme.imageHighlight} strokeWidth="5" strokeLinecap="round" />
      <path d="m132 58 11 8-13 4" fill="none" stroke={theme.imageHighlight} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
