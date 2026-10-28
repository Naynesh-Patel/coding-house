import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/Layout';
import { IconBadge } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
import { PageHero } from '@/components/ui/PageHero';
import { CTABand } from '@/components/ui/CTABand';
import { industries } from '@/lib/site';
import { SEO } from '@/components/seo/SEO';

export default function IndustriesIndexPage() {
  return (
    <>
      <SEO
        title="Industries We Serve — FinTech, Ecommerce, SaaS, Enterprise"
        description="Coding House builds industry-specific software solutions for FinTech, E-Commerce, B2B SaaS, Enterprise Modernization, and Health & Fitness."
        keywords={['fintech software development', 'ecommerce engineering', 'b2b saas platform development', 'enterprise digital modernization', 'fitness app development']}
      />
      <PageHero
        eyebrow="Industries"
        title="Built for the realities of your industry."
        description="We've shipped software across regulated and high-growth sectors. Knowing the domain — not just the technology — is what makes the difference between software that works in a demo and software that works in production."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
      />

      {/* Industry cards */}
      <Section className="pt-0 sm:pt-4">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const badgeVariants = ['cyan', 'orange', 'navy', 'cyan', 'orange'] as const;
              return (
                <Reveal key={ind.slug} delay={i * 0.05}>
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6400]/40 hover:shadow-xl hover:shadow-orange-500/5 overflow-hidden"
                  >
                    <span
                      className="absolute inset-x-0 top-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          i % 2 === 0
                            ? 'linear-gradient(to right, #FF6400, #FB923C)'
                            : 'linear-gradient(to right, #00A3FF, #38BDF8)',
                      }}
                    />
                    <div className="flex items-start justify-between">
                      <IconBadge
                        icon={ind.icon}
                        variant={badgeVariants[i % badgeVariants.length]}
                      />
                      <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF6400]" />
                    </div>

                    <h2 className="mt-5 font-display text-xl font-semibold text-[#0A192F] group-hover:text-[#FF6400] transition-colors">{ind.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-[1.7] text-slate-500">{ind.summary}</p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-2xs font-mono font-bold uppercase tracking-[0.15em] text-[#FF6400]">Key challenges</p>
                      <ul className="mt-3 space-y-1.5">
                        {ind.challenges.slice(0, 3).map((c) => (
                          <li key={c} className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6400] shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Domain expertise note */}
      <Section className="bg-paper-100">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Domain expertise"
              title="Why industry knowledge matters."
              description="Generic engineering talent is not hard to find. What's harder is a team that understands the regulatory constraints of fintech, the traffic patterns of ecommerce, or the engagement dynamics of wellness software — and builds with those constraints in mind from the start."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Right architecture from the start', body: 'Industry-specific requirements shape architectural decisions. Getting those right early is far cheaper than refactoring under production load.' },
              { title: 'Fewer surprises in QA', body: 'When we understand the domain, we test the edge cases that matter — not just the happy path. The security constraints in fintech are different from the scheduling complexity in wellness.' },
              { title: 'Faster domain alignment', body: 'We spend less time explaining the business context and more time solving technical problems. That accelerates every phase of the engagement.' },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="rounded-2xl border border-ink-900/8 bg-paper-50 p-7">
                  <h3 className="font-display text-lg font-semibold text-ink-950">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-[1.7] text-ink-500">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}

void ArrowRight;
