import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { services, industries } from '@/lib/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-900/8 bg-paper-50/90 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between lg:h-[4.25rem]">
        {/* Logo */}
        <Link to="/" aria-label="Coding House home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden items-center gap-0.5 lg:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          <NavItem to="/about">About</NavItem>

          <DropdownItem
            label="Services"
            open={openMenu === 'services'}
            onEnter={() => setOpenMenu('services')}
          >
            <div className="grid grid-cols-2 gap-1">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group flex flex-col gap-0.5 rounded-xl px-3.5 py-3 transition-colors hover:bg-ink-100/50"
                >
                  <span className="text-sm font-medium text-ink-900 group-hover:text-volt-700 transition-colors">
                    {s.title}
                  </span>
                  <span className="text-xs text-ink-400 leading-relaxed">{s.short}</span>
                </Link>
              ))}
            </div>
            <div className="mt-2 border-t border-ink-900/8 pt-2">
              <Link
                to="/services"
                className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-volt-700 transition-colors hover:bg-volt-50"
              >
                View all services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </DropdownItem>

          <DropdownItem
            label="Industries"
            open={openMenu === 'industries'}
            onEnter={() => setOpenMenu('industries')}
          >
            <div className="grid grid-cols-1 gap-1">
              {industries.map((ind) => (
                <Link
                  key={ind.slug}
                  to={`/industries/${ind.slug}`}
                  className="group flex flex-col gap-0.5 rounded-xl px-3.5 py-3 transition-colors hover:bg-ink-100/50"
                >
                  <span className="text-sm font-medium text-ink-900 group-hover:text-volt-700 transition-colors">
                    {ind.title}
                  </span>
                  <span className="text-xs text-ink-400">{ind.short}</span>
                </Link>
              ))}
            </div>
            <div className="mt-2 border-t border-ink-900/8 pt-2">
              <Link
                to="/industries"
                className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-volt-700 transition-colors hover:bg-volt-50"
              >
                View all industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </DropdownItem>

          <NavItem to="/#engagement">Hire Developers</NavItem>
          <NavItem to="/portfolio">Work</NavItem>
          <NavItem to="/careers">Careers</NavItem>
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="text-sm font-medium text-ink-500 hover:text-ink-950 transition-colors"
          >
            Contact
          </Link>
          <Button to="/contact" size="sm" variant="primary">
            Discuss your project
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 transition-colors hover:bg-ink-900/5 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink-900/8 bg-paper-50 lg:hidden"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="container-page max-h-[calc(100dvh-4.25rem)] overflow-y-auto py-6">
              <MobileSection title="Company">
                <MobileLink to="/about">About</MobileLink>
                <MobileLink to="/#engagement">Hire Developers</MobileLink>
                <MobileLink to="/portfolio">Work</MobileLink>
                <MobileLink to="/careers">Careers</MobileLink>
                <MobileLink to="/contact">Contact</MobileLink>
              </MobileSection>
              <MobileSection title="Services">
                {services.map((s) => (
                  <MobileLink key={s.slug} to={`/services/${s.slug}`}>
                    {s.title}
                  </MobileLink>
                ))}
                <MobileLink to="/services">All services →</MobileLink>
              </MobileSection>
              <MobileSection title="Industries">
                {industries.map((ind) => (
                  <MobileLink key={ind.slug} to={`/industries/${ind.slug}`}>
                    {ind.title}
                  </MobileLink>
                ))}
                <MobileLink to="/industries">All industries →</MobileLink>
              </MobileSection>
              <div className="mt-6 flex flex-col gap-3">
                <Button to="/contact" variant="secondary" size="lg" className="w-full">
                  Discuss your project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
          isActive ? 'text-ink-950' : 'text-ink-500 hover:text-ink-950'
        }`
      }
    >
      {children}
    </NavLink>
  );
}

function DropdownItem({
  label,
  open,
  onEnter,
  children,
}: {
  label: string;
  open: boolean;
  onEnter: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onEnter}>
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
          open ? 'text-ink-950' : 'text-ink-500 hover:text-ink-950'
        }`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 w-[36rem] -translate-x-1/2 pt-3"
          >
            <div className="rounded-2xl border border-ink-900/8 bg-paper-50 p-3 shadow-lift">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-ink-900/8 py-4 first:border-t-0">
      <p className="mb-2 text-2xs font-mono uppercase tracking-[0.2em] text-ink-400">{title}</p>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

function MobileLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="py-2.5 text-[0.9375rem] font-medium text-ink-700 hover:text-volt-700 transition-colors"
    >
      {children}
    </Link>
  );
}
