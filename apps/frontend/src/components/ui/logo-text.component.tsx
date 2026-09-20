import React from 'react';

/** Xperience Post lockup for the auth screens (white ground text, gradient mark). */
export const LogoTextComponent = () => {
  return (
    <svg
      width="187"
      height="40"
      viewBox="0 0 560 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
    <linearGradient id="xpl-g" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stopColor="#6A45B0"/>
      <stop offset="0.5" stopColor="#3F8FCB"/>
      <stop offset="1" stopColor="#0E8F6E"/>
    </linearGradient>
    <linearGradient id="xpl-t" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor="#4A8BC8"/>
      <stop offset="1" stopColor="#0E8F6E"/>
    </linearGradient>
  </defs>

  
  <g>
    <!-- bracket frame, open where the plane exits (top-right) -->
    <path d="M8 40 V8 H52" fill="none" stroke="url(#xpl-g)" strokeWidth="6" strokeLinecap="square"/>
    <path d="M8 80 V112 H96" fill="none" stroke="url(#xpl-g)" strokeWidth="6" strokeLinecap="square"/>
    <!-- the X: full backslash arm + lower-left half of the slash arm -->
    <path d="M24 28 L88 92" fill="none" stroke="url(#xpl-g)" strokeWidth="10" strokeLinecap="square"/>
    <path d="M24 92 L54 62" fill="none" stroke="url(#xpl-g)" strokeWidth="10" strokeLinecap="square"/>
    <!-- upper-right arm becomes the paper plane leaving the frame -->
    <path d="M110 12 L56 46 L74 56 L82 76 Z" fill="url(#xpl-g)"/>
    <path d="M74 56 L110 12" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.9"/>
</g>
  <text x="140" y="52" fontFamily="Inter Tight, Inter, Helvetica, Arial, sans-serif" fontWeight="800" fontSize="34" letterSpacing="4" fill="#ffffff">XPERIENCE</text>
  <text x="140" y="104" fontFamily="Inter Tight, Inter, Helvetica, Arial, sans-serif" fontWeight="800" fontSize="56" letterSpacing="6" fill="url(#xpl-t)">POST</text>

    </svg>
  );
};
