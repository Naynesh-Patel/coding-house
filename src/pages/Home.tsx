import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Terminal,
  GitBranch,
  Cpu,
  Workflow,
  Check,
  ArrowUpRight,
  Shield,
  Layers,
  Search,
  Zap,
} from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/Layout';
import { Button, LinkArrow, IconBadge } from '@/components/ui/Button';
import { Reveal, RevealChildren, revealItem } from '@/components/ui/Motion';
import { CTABand } from '@/components/ui/CTABand';
import { services, industries, techStack, process, portfolioProjects } from '@/lib/site';
import HeroSection, { type AvatarList } from '@/components/ui/hero-01-utils/hero';
import BrandSlider, { type BrandList } from '@/components/ui/hero-01-utils/brand-slider';
import { TrustBadges } from '@/components/ui/TrustBadges';
import { EngagementModels } from '@/components/ui/EngagementModels';
import { TestimonialsSection } from '@/components/ui/Testimonials';

const heroAvatars: AvatarList[] = [
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    name: "CTO, FinTech Scale-Up",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    name: "VP Eng, HealthTech",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    name: "Founder, SaaS Platform",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    name: "Head of Product",
  },
];

const heroBrands: BrandList[] = [
  {
    image:
      "https://cdn.21st.dev/assets/localized/d824c259df6b2b2962fbDcJHrrHSgvFpsYxqb6g97uaQTd2kE31rPUeDZTeDsjVq.svg",
    name: "Global Logistics",
  },
  {
    image:
      "https://cdn.21st.dev/assets/localized/266083df0c7d0633f145889af4700d18e62b8f2c068fd8ab73d5a94b87a5a5cb.svg",
    name: "FinFlow Analytics",
  },
  {
    image:
      "https://cdn.21st.dev/assets/localized/91d1c562d12ba69aa7525d3782c6c6223b90e302073d59769dfce665ab9a83b7.svg",
    name: "OmniHealth",
  },
  {
    image:
      "https://cdn.21st.dev/assets/localized/f50b06ae2b7bf86d199b0ac986a47442f4a198d2f6dd81a9fe83c43022608498.svg",
    name: "CloudVantage",
  },
  {
    image:
      "https://cdn.21st.dev/assets/localized/3ad67ddda671655df765a507c9bcc7b67e4138a1ffe903ace17cef99c5c972a3.svg",
    name: "Nexus Supply",
  },
];

import { SEO } from '@/components/seo/SEO';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Coding House — Building Solutions. Growing Businesses."
        description="Coding House builds and maintains custom software, CRM/ERP systems, and cloud infrastructure for fintech, e-commerce, SaaS, and fitness businesses."
        keywords={[
          'Coding House',
          'Coding House Software Pvt. Ltd.',
          'software development company Surat',
          'custom software engineering',
          'CRM ERP systems',
          'web and mobile apps',
          'cloud devops'
        ]}
      />
      <HeroSection avatarList={heroAvatars} />
      <TrustBadges />
      <BrandSlider brandList={heroBrands} />
      <CapabilitiesStrip />
      <ServicesSection />
      <EngagementModels />
      <PortfolioSection />
      <TestimonialsSection />
      <IndustriesSection />
      <WhyCodingHouseSection />
      <ProcessSection />
      <TechSection />
      <CTABand />
    </>
  );
}



/* ─── CAPABILITIES STRIP ─── */
function CapabilitiesStrip() {
  const items = [
    { icon: Terminal, label: 'Production-grade code' },
    { icon: GitBranch, label: 'Versioned, reviewable changes' },
    { icon: Cpu, label: 'Built to scale' },
    { icon: Workflow, label: 'Iterative delivery' },
    { icon: Shield, label: 'Security by default' },
  ];
  return (
    <div className="border-y border-slate-200/80 bg-slate-50/80">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-5 sm:justify-between">
          {items.map((item, idx) => (
            <li key={item.label} className="flex items-center gap-2.5 text-sm font-medium text-slate-600">
              <item.icon
                className={`h-4 w-4 shrink-0 ${idx % 2 === 0 ? 'text-[#00A3FF]' : 'text-[#FF6400]'}`}
                strokeWidth={1.8}
              />
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

/* ─── SERVICES ─── */
function ServicesSection() {
  const badgeVariants = ['cyan', 'orange', 'navy', 'cyan', 'orange', 'gradient'] as const;

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="What We Build"
            title="Engineering solutions for real business challenges."
            description="From first whiteboard to production observability, we cover the full engineering lifecycle."
          />
          <LinkArrow to="/services" className="shrink-0">
            All services
          </LinkArrow>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                to={`/services/${s.slug}`}
                className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A3FF]/40 hover:shadow-xl hover:shadow-cyan-500/5 overflow-hidden"
              >
                {/* Subtle top indicator in brand gradient on hover */}
                <span
                  className="absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      i % 2 === 0
                        ? 'linear-gradient(to right, #00A3FF, #38BDF8)'
                        : 'linear-gradient(to right, #FF6400, #FB923C)',
                  }}
                />

                <IconBadge
                  icon={s.icon}
                  variant={badgeVariants[i % badgeVariants.length]}
                />
                <h3 className="heading-sm mt-5 text-[#0A192F] transition-colors group-hover:text-[#00A3FF]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-slate-500 flex-1">
                  {s.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00A3FF] transition-colors group-hover:text-[#FF6400]">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── PORTFOLIO ─── */
function PortfolioSection() {
  const featured = portfolioProjects.slice(0, 3);
  return (
    <Section className="bg-paper-100">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Selected work"
            title="Real problems. Thoughtful engineering."
            description="A representative sample of the engagements we take on. Full case studies available on request."
          />
          <LinkArrow to="/portfolio" className="shrink-0">
            All work
          </LinkArrow>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => {
            const service = services.find((s) => s.slug === p.serviceSlug);
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A3FF]/40 hover:shadow-xl hover:shadow-cyan-500/5 overflow-hidden">
                  <span
                    className="absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        i % 2 === 0
                          ? 'linear-gradient(to right, #00A3FF, #38BDF8)'
                          : 'linear-gradient(to right, #FF6400, #FB923C)',
                    }}
                  />
                  {/* Category */}
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#00A3FF]/10 border border-[#00A3FF]/20 px-3 py-1 text-2xs font-mono font-semibold uppercase tracking-[0.15em] text-[#00A3FF]">
                    {service && <service.icon className="h-3.5 w-3.5" />}
                    {p.category}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-[#0A192F] group-hover:text-[#00A3FF] transition-colors">{p.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-[1.7] text-slate-500">{p.description}</p>
                  {/* Outcome */}
                  <div className="mt-5 rounded-xl bg-slate-50 border border-slate-100 p-4">
                    <p className="text-2xs font-mono uppercase tracking-wider text-[#FF6400] font-bold">Outcome</p>
                    <p className="mt-1.5 text-sm font-medium text-slate-700">{p.outcome}</p>
                  </div>
                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center">
            <Button to="/portfolio" variant="outline" size="md">
              View all work
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ─── INDUSTRIES ─── */
function IndustriesSection() {
  const badgeVariants = ['cyan', 'orange', 'navy', 'cyan', 'orange'] as const;

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Sector Expertise"
            title="Built for the realities of your industry."
            description="We've shipped software across regulated and high-growth sectors — so we understand the constraints that shape your product."
          />
          <LinkArrow to="/industries" className="shrink-0">
            All industries
          </LinkArrow>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.05}>
              <Link
                to={`/industries/${ind.slug}`}
                className="group relative flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6400]/40 hover:shadow-xl hover:shadow-orange-500/5 overflow-hidden"
              >
                {/* Subtle top indicator on hover */}
                <span
                  className="absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      i % 2 === 0
                        ? 'linear-gradient(to right, #FF6400, #FB923C)'
                        : 'linear-gradient(to right, #00A3FF, #38BDF8)',
                  }}
                />

                <IconBadge
                  icon={ind.icon}
                  variant={badgeVariants[i % badgeVariants.length]}
                  className="shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-[1.0625rem] font-semibold text-[#0A192F] transition-colors group-hover:text-[#FF6400]">
                    {ind.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                    {ind.short}
                  </p>
                </div>
                <ArrowUpRight className="ml-auto mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF6400]" />
              </Link>
            </Reveal>
          ))}

          <Reveal delay={industries.length * 0.05}>
            <Link
              to="/industries"
              className="group flex h-full items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 p-6 text-sm font-semibold text-slate-600 transition-all duration-200 hover:border-[#00A3FF] hover:bg-[#00A3FF]/5 hover:text-[#00A3FF]"
            >
              All industries
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ─── WHY CODING HOUSE ─── */
function WhyCodingHouseSection() {
  const principles = [
    {
      icon: Search,
      title: 'Understand before building',
      body: 'We spend real time with your team mapping the problem, the constraints, and the context before we touch code. Better questions lead to better software.',
    },
    {
      icon: Layers,
      title: 'Design for maintainability',
      body: 'Software that cannot be understood, changed, or extended is a liability. We design for the team that will maintain it — often yours.',
    },
    {
      icon: Shield,
      title: 'Quality, security, reliability',
      body: 'Tests, code review, observability, and security are part of the build — not an afterthought before launch. We hand over receipts, not promises.',
    },
    {
      icon: Zap,
      title: 'Long-term partnerships',
      body: 'We work best with teams that want a technical partner, not just a vendor. Transparent communication and predictable process make the relationship work.',
    },
  ];

  return (
    <Section className="bg-[#0A192F] text-white">
      <div className="absolute inset-0 grid-overlay-dark opacity-30" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeader
              dark
              eyebrow="Why Coding House"
              title="Good software is built to keep working."
              description="We have a simple engineering philosophy: understand the problem well before solving it, build it so it lasts, and stay accountable for what we ship."
            />
            <div className="mt-10">
              <Button to="/about" variant="primary" size="lg">
                How we work
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <RevealChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" stagger={0.07}>
            {principles.map((p, idx) => (
              <motion.div
                key={p.title}
                variants={revealItem}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-[#00A3FF]/40 hover:bg-white/[0.07]"
              >
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                  idx % 2 === 0 ? 'bg-[#00A3FF]/15 text-[#00A3FF]' : 'bg-[#FF6400]/15 text-[#FF6400]'
                }`}>
                  <p.icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-display text-[1.0625rem] font-semibold text-white">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-[1.7] text-slate-300">{p.body}</p>
              </motion.div>
            ))}
          </RevealChildren>
        </div>
      </Container>
    </Section>
  );
}

/* ─── PROCESS ─── */
function ProcessSection() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Our Process"
          title="From the first conversation to production."
          description="A process designed to keep you informed, reduce risk, and deliver software that actually works in the real world."
          align="center"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <div className="relative group">
                {/* Connector line */}
                {i < process.length - 1 && (
                  <span className="absolute right-0 top-5 hidden h-px w-8 bg-slate-200 lg:block -translate-y-1/2 translate-x-full" />
                )}
                {/* Step number */}
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF6400] bg-[#FF6400]/10 px-2.5 py-0.5 rounded-full">
                  {step.n}
                </span>
                {/* Step indicator */}
                <div className="mt-3 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00A3FF] ring-4 ring-[#00A3FF]/20" />
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-[#0A192F] group-hover:text-[#00A3FF] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.7] text-slate-500">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ─── TECHNOLOGY ─── */
function TechSection() {
  return (
    <Section className="bg-slate-50/80">
      <Container>
        <SectionHeader
          eyebrow="Technology Stack"
          title="Choosing the right technology for the job."
          description="We work with established, well-supported technologies. The right choice depends on your project's requirements, your team's capabilities, and long-term maintainability."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {techStack.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.04}>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:border-[#00A3FF]/40 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-0.5">
                <p className="text-2xs font-mono font-bold uppercase tracking-[0.18em] text-[#00A3FF]">{group.category}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md bg-slate-50 border border-slate-100 px-2.5 py-1 font-mono text-xs text-slate-700 transition-colors hover:border-[#00A3FF]/30 hover:bg-[#00A3FF]/5 hover:text-[#00A3FF]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#FF6400]" />
              <p className="text-sm text-slate-600 leading-relaxed">
                Technology selection always depends on your project's requirements, performance needs, your team's existing skills, and long-term maintainability goals. We recommend the right tool for the job — not the most fashionable one.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

void Check;
