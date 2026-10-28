import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { services, industries, companyInfo } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-volt-500/20 to-transparent" />

      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-[1.7] text-ink-400">
              Coding House is an IT and software development company based in Surat, Gujarat, India. We design and engineer reliable software for ambitious teams.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <SocialLink href={companyInfo.social.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={companyInfo.social.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={companyInfo.social.twitter} label="Twitter">
                <Twitter className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={`https://wa.me/${companyInfo.whatsapp}`} label="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={`mailto:${companyInfo.email}`} label="Email us">
                <Mail className="h-4 w-4" />
              </SocialLink>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              WhatsApp / Call:{' '}
              <a
                href={`https://wa.me/${companyInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-[#25D366] transition-colors font-medium font-mono"
              >
                {companyInfo.phone}
              </a>
            </p>

            {/* Office Address */}
            <div className="mt-8 space-y-1.5 text-xs text-slate-400 border-t border-white/10 pt-6">
              <p className="font-mono text-2xs uppercase tracking-wider text-[#00A3FF] font-bold">Office Address</p>
              <p className="font-semibold text-slate-200">CODING HOUSE</p>
              <div className="leading-relaxed text-slate-400">
                <p>410 Exiito Commercial Hub,</p>
                <p>Jahangirpura</p>
                <p>Surat, Gujarat 395005</p>
                <p>IN</p>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Company */}
            <FooterCol title="Company">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/portfolio">Case Studies</FooterLink>
              <FooterLink to="/careers">Careers & Team</FooterLink>
              <FooterLink to="/contact">Contact & Scoping</FooterLink>
            </FooterCol>

            {/* Services */}
            <FooterCol title="Services">
              <FooterLink to="/services">Overview</FooterLink>
              {services.map((s) => (
                <FooterLink key={s.slug} to={`/services/${s.slug}`}>
                  {s.title}
                </FooterLink>
              ))}
            </FooterCol>

            {/* Industries */}
            <FooterCol title="Industries">
              <FooterLink to="/industries">Overview</FooterLink>
              {industries.map((ind) => (
                <FooterLink key={ind.slug} to={`/industries/${ind.slug}`}>
                  {ind.title}
                </FooterLink>
              ))}
            </FooterCol>
          </div>
        </div>

        {/* Accreditation Trust Strip */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#00A3FF]" />
              <strong>Clutch:</strong> 4.9/5 Rating (120+ Reviews)
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="h-2 w-2 rounded-full bg-[#FF6400]" />
              <strong>Security:</strong> ISO 27001 & ISO 9001 Certified
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <strong>Cloud:</strong> AWS Select Tier Partner
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-xs text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-slate-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 text-xs text-slate-500">
          © {year} Coding House. All rights reserved. Building Solutions. Growing Businesses.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-2xs font-mono uppercase tracking-[0.2em] text-ink-600">{title}</p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-sm text-ink-400 transition-colors hover:text-paper-200">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 text-ink-400 transition-all duration-200 hover:border-volt-500/40 hover:text-volt-400"
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  );
}

void ArrowUpRight;
