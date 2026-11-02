import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const ArrowIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowDiagonalIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 19 19 5M7 5h12v12" />
  </svg>
);

export const ChevronIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m9 5 7 7-7 7" />
  </svg>
);

export const LeafIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M26 5C14 5 6 10 6 19c0 4 3 7 7 7 9 0 14-8 13-21ZM7 25c3-4 7-7 14-11" />
  </svg>
);

export const SunIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="16" cy="16" r="5" />
    <path d="M16 2v4m0 20v4M2 16h4m20 0h4M6 6l3 3m14 14 3 3M26 6l-3 3M9 23l-3 3" />
  </svg>
);

export const CupIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 13h17v5a8.5 8.5 0 0 1-17 0v-5Zm17 2h2a4 4 0 0 1 0 8h-3M6 28h19M10 8c-2-2 2-3 0-5m6 5c-2-2 2-3 0-5" />
  </svg>
);

export const PinIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m5 12 4 4L19 6" />
  </svg>
);
