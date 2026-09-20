'use client';

/** Xperience Post mark — the Xperience Levels bracket-X with the upper arm launching as a paper plane. */
export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 120 120"
      fill="none"
      className="mt-[8px] min-w-[60px] min-h-[60px]"
    >
      <defs>
    <linearGradient id="xp-g" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stopColor="#6A45B0"/>
      <stop offset="0.5" stopColor="#3F8FCB"/>
      <stop offset="1" stopColor="#0E8F6E"/>
    </linearGradient>
    <linearGradient id="xp-t" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stopColor="#4A8BC8"/>
      <stop offset="1" stopColor="#0E8F6E"/>
    </linearGradient>
  </defs>
    <path d="M8 40 V8 H52" fill="none" stroke="url(#xp-g)" strokeWidth="6" strokeLinecap="square"/>
    <path d="M8 80 V112 H96" fill="none" stroke="url(#xp-g)" strokeWidth="6" strokeLinecap="square"/>
    <path d="M24 28 L88 92" fill="none" stroke="url(#xp-g)" strokeWidth="10" strokeLinecap="square"/>
    <path d="M24 92 L54 62" fill="none" stroke="url(#xp-g)" strokeWidth="10" strokeLinecap="square"/>
    <path d="M110 12 L56 46 L74 56 L82 76 Z" fill="url(#xp-g)"/>
    <path d="M74 56 L110 12" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.9"/>
    </svg>
  );
};
