import type { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`container-page ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-12 sm:py-20 lg:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <span className="text-[#00A3FF]">&lt;</span>
          <span className="text-slate-400">/</span>
          <span className="text-[#FF6400]">&gt;</span>
          <span className={`ml-1 ${dark ? 'text-slate-300' : 'text-[#0A192F]'}`}>{eyebrow}</span>
        </p>
      )}
      <h2 className={`heading-lg mt-4 text-balance ${dark ? 'text-paper-50' : 'text-ink-950'}`}>{title}</h2>
      {description && (
        <p className={`lead mt-5 text-pretty ${dark ? 'text-ink-400' : ''}`}>{description}</p>
      )}
    </div>
  );
}

export function Divider({ className = '' }: { className?: string }) {
  return <hr className={`border-t hairline ${className}`} />;
}
