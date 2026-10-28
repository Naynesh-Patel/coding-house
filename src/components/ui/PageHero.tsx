import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Layout';
import { Reveal } from '@/components/ui/Motion';

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  dark = false,
  align = 'left',
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb?: { label: string; to?: string }[];
  children?: ReactNode;
  dark?: boolean;
  align?: 'left' | 'center';
}) {
  return (
    <section
      className={`relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 ${
        dark ? 'bg-ink-950 text-paper-50' : 'bg-paper-50'
      }`}
    >
      {/* Grid overlay */}
      {dark ? (
        <div className="absolute inset-0 grid-overlay-dark opacity-50" />
      ) : (
        <div className="absolute inset-0 grid-overlay opacity-70" />
      )}
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-volt-500/30 to-transparent" />

      <Container className="relative">
        {breadcrumb && (
          <nav
            className={`mb-7 flex items-center gap-1.5 text-xs ${dark ? 'text-ink-500' : 'text-ink-400'}`}
            aria-label="Breadcrumb"
          >
            {breadcrumb.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {c.to ? (
                  <Link
                    to={c.to}
                    className={`transition-colors ${dark ? 'hover:text-paper-200' : 'hover:text-ink-700'}`}
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className={dark ? 'text-ink-300' : 'text-ink-600'}>{c.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight className="h-3 w-3 opacity-50" />}
              </span>
            ))}
          </nav>
        )}

        <Reveal>
          <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
            {eyebrow && (
              <p className={`eyebrow ${dark ? 'text-volt-400' : ''}`}>
                <span className="h-px w-5 bg-current opacity-50" />
                {eyebrow}
              </p>
            )}
            <h1
              className={`heading-xl mt-5 text-balance ${dark ? 'text-paper-50' : 'text-ink-950'}`}
            >
              {title}
            </h1>
            {description && (
              <p
                className={`lead mt-6 max-w-2xl text-pretty ${
                  dark ? 'text-ink-400' : ''
                } ${align === 'center' ? 'mx-auto' : ''}`}
              >
                {description}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
