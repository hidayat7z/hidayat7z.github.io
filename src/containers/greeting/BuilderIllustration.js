import React from "react";

export default function BuilderIllustration() {
  return (
    <svg
      className="builder-illustration"
      viewBox="0 0 620 520"
      role="img"
      aria-labelledby="builder-art-title builder-art-description"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="builder-art-title">Ideas becoming useful products</title>
      <desc id="builder-art-description">
        A product workspace connecting people, ideas, and opportunities.
      </desc>
      <defs>
        <linearGradient id="builder-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#35d7bd" />
          <stop offset="1" stopColor="#1748d3" />
        </linearGradient>
        <filter id="builder-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="20" stdDeviation="18" floodColor="#202b27" floodOpacity=".11" />
        </filter>
      </defs>

      <path
        d="M83 106c56-66 139-84 222-63 91 23 121 65 177 90 72 33 100 77 73 150-28 74-79 86-137 123-70 44-151 74-244 49C81 430 35 371 35 289c0-72 4-131 48-183Z"
        fill="#eee6dd"
      />
      <circle cx="518" cy="88" r="35" fill="#dff4ed" />
      <circle cx="92" cy="383" r="21" fill="#f3ddd2" />

      <g filter="url(#builder-shadow)">
        <rect x="82" y="65" width="450" height="340" rx="24" fill="#fff" />
        <path d="M82 89a24 24 0 0 1 24-24h402a24 24 0 0 1 24 24v30H82V89Z" fill="#202b27" />
        <circle cx="108" cy="94" r="6" fill="#e85d5d" />
        <circle cx="129" cy="94" r="6" fill="#e6b94c" />
        <circle cx="150" cy="94" r="6" fill="#67b66a" />
        <rect x="116" y="145" width="77" height="8" rx="4" fill="#a45d38" opacity=".7" />
        <text x="116" y="190" fill="#202b27" fontFamily="Arial, sans-serif" fontSize="29" fontWeight="700" letterSpacing="-1.2">Ideas, connected.</text>
        <text x="116" y="217" fill="#66736c" fontFamily="Arial, sans-serif" fontSize="14">Build something useful. Help it find its people.</text>

        <g fontFamily="Arial, sans-serif">
          <rect x="116" y="250" width="184" height="57" rx="12" fill="#f5f7f2" />
          <circle cx="143" cy="278" r="13" fill="#dcf3eb" />
          <path d="M138 278h10m-5-5v10" stroke="#159f95" strokeWidth="2" strokeLinecap="round" />
          <text x="166" y="276" fill="#202b27" fontSize="13" fontWeight="700">Products</text>
          <text x="166" y="293" fill="#66736c" fontSize="10">Made by the community</text>

          <rect x="314" y="250" width="184" height="57" rx="12" fill="#f5f7f2" />
          <circle cx="341" cy="278" r="13" fill="#e8eafe" />
          <path d="M335 281h12m-10-6h8" stroke="#345bd4" strokeWidth="2" strokeLinecap="round" />
          <text x="364" y="276" fill="#202b27" fontSize="13" fontWeight="700">Opportunities</text>
          <text x="364" y="293" fill="#66736c" fontSize="10">Work with shared values</text>

          <rect x="116" y="318" width="184" height="57" rx="12" fill="#f5f7f2" />
          <circle cx="143" cy="346" r="13" fill="#f6e7dd" />
          <circle cx="139" cy="344" r="3" fill="#a45d38" />
          <circle cx="147" cy="344" r="3" fill="#a45d38" />
          <path d="M137 351c2-4 10-4 12 0" stroke="#a45d38" strokeWidth="1.5" fill="none" />
          <text x="166" y="344" fill="#202b27" fontSize="13" fontWeight="700">People</text>
          <text x="166" y="361" fill="#66736c" fontSize="10">Ideas grow together</text>

          <rect x="314" y="318" width="184" height="57" rx="12" fill="#f5f7f2" />
          <circle cx="341" cy="346" r="13" fill="#fff0d8" />
          <path d="M335 349h12v-8h-12v8Zm2-11v-3m8 3v-3" stroke="#b77825" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <text x="364" y="344" fill="#202b27" fontSize="13" fontWeight="700">Community</text>
          <text x="364" y="361" fill="#66736c" fontSize="10">Discover what’s happening</text>
        </g>
      </g>

      <g filter="url(#builder-shadow)">
        <rect x="365" y="27" width="181" height="54" rx="16" fill="#fff" />
        <circle cx="391" cy="54" r="12" fill="url(#builder-gradient)" />
        <path d="m387 54 3 3 6-7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="414" y="51" fill="#202b27" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" letterSpacing="1">FROM IDEA</text>
        <text x="414" y="66" fill="#66736c" fontFamily="Arial, sans-serif" fontSize="10">to something real</text>
      </g>

      <g filter="url(#builder-shadow)">
        <rect x="33" y="399" width="221" height="68" rx="18" fill="#202b27" />
        <text x="57" y="427" fill="#76dec8" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" letterSpacing="1.7">THOUGHTFUL BUILDING</text>
        <text x="57" y="449" fill="#fff" fontFamily="Arial, sans-serif" fontSize="14">People · products · progress</text>
      </g>
      <path d="M529 420c22-5 38-18 47-37" stroke="#159f95" strokeWidth="2" strokeDasharray="4 7" fill="none" />
      <circle cx="577" cy="377" r="6" fill="#159f95" />
    </svg>
  );
}
