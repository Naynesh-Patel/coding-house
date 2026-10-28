import * as React from 'react';

interface LogoProps {
  dark?: boolean;
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  markOnly?: boolean;
  useImage?: boolean;
}

export function CodingHouseIcon({
  className = 'h-7 w-7',
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left Cyan Bracket */}
      <path
        d="M50 28L28 50C22.5 55.5 22.5 64.5 28 70L50 92"
        stroke="#00A3FF"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center Deep Navy / White Slash */}
      <path
        d="M67 22L53 98"
        stroke={dark ? '#F8FAFC' : '#0A192F'}
        strokeWidth="14"
        strokeLinecap="round"
      />
      {/* Right Vivid Orange Bracket */}
      <path
        d="M70 28L92 50C97.5 55.5 97.5 64.5 92 70L70 92"
        stroke="#FF6400"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  dark = false,
  className = '',
  showTagline = false,
  size = 'md',
  markOnly = false,
  useImage = false,
}: LogoProps) {
  if (useImage) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/coding-house-logo.jpg"
          alt="Coding House Logo"
          className={
            size === 'sm'
              ? 'h-8 w-auto object-contain'
              : size === 'lg'
              ? 'h-14 w-auto object-contain'
              : 'h-10 w-auto object-contain'
          }
        />
      </div>
    );
  }

  const iconSizes = {
    sm: 'h-7 w-7',
    md: 'h-8 w-8',
    lg: 'h-11 w-11',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
        <CodingHouseIcon className={iconSizes[size]} dark={dark} />
      </span>

      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display font-extrabold tracking-tight ${textSizes[size]}`}
          >
            <span className={dark ? 'text-white' : 'text-[#0A192F]'}>
              CODING
            </span>{' '}
            <span className="text-[#FF6400]">HOUSE</span>
          </span>

          {showTagline && (
            <span className="mt-1 flex items-center gap-1.5 text-[8.5px] font-bold tracking-[0.16em] uppercase text-slate-500">
              <span className="h-px w-3 bg-slate-300" />
              <span>BUILDING SOLUTIONS. GROWING BUSINESSES.</span>
              <span className="h-px w-3 bg-slate-300" />
            </span>
          )}
        </span>
      )}
    </span>
  );
}
