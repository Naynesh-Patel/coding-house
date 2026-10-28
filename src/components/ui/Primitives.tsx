import type { ReactNode } from 'react';

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`eyebrow ${dark ? 'text-volt-400' : ''}`}>
      <span className="h-px w-6 bg-current opacity-60" />
      {children}
    </p>
  );
}

export function Tag({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-ink-900/10 bg-paper-100 px-3 py-1 text-2xs font-mono uppercase tracking-[0.15em] text-ink-500 ${className}`}
    >
      {children}
    </span>
  );
}

export function Divider({ className = '' }: { className?: string }) {
  return <hr className={`border-0 border-t hairline ${className}`} />;
}
