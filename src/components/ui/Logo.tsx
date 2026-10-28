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
    <img
      src="/coding-house-logo.jpg"
      alt="Coding House"
      className={`${className} object-contain rounded-lg`}
    />
  );
}

export function Logo({
  dark = false,
  className = '',
  showTagline = false,
  size = 'md',
  markOnly = false,
  useImage = true,
}: LogoProps) {
  const imgSizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10 sm:h-11 sm:w-11',
    lg: 'h-14 w-14',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl',
  };

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      <span
        className={`inline-flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${
          dark
            ? 'rounded-xl bg-white p-1 shadow-md ring-1 ring-white/20'
            : 'rounded-xl bg-white p-1 shadow-sm border border-slate-200/90'
        }`}
      >
        <img
          src="/coding-house-logo.jpg"
          alt="Coding House"
          className={`${imgSizes[size]} object-contain rounded-lg`}
        />
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
            <span className="mt-1 flex items-center gap-1.5 text-[8.5px] font-bold tracking-[0.16em] uppercase text-slate-400">
              <span className="h-px w-3 bg-slate-500/50" />
              <span>BUILDING SOLUTIONS. GROWING BUSINESSES.</span>
              <span className="h-px w-3 bg-slate-500/50" />
            </span>
          )}
        </span>
      )}
    </span>
  );
}
