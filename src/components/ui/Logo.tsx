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
      src="/logo.png"
      alt="Coding House Logo"
      className={`${className} object-contain shrink-0 ${dark ? 'rounded-lg bg-white/95 p-0.5 shadow-sm' : ''}`}
    />
  );
}

export function Logo({
  dark = false,
  className = '',
  showTagline = false,
  size = 'md',
  markOnly = false,
}: LogoProps) {
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
        <img
          src="/logo.png"
          alt="Coding House Logo"
          className={`${iconSizes[size]} object-contain shrink-0 ${dark ? 'rounded-lg bg-white/95 p-0.5 shadow-sm' : ''}`}
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
