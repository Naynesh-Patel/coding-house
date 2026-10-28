import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/Layout';
import { IconBadge } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
import { PageHero } from '@/components/ui/PageHero';
import { CTABand } from '@/components/ui/CTABand';
import { services } from '@/lib/site';
import { SEO } from '@/components/seo/SEO';

export default function ServicesIndexPage() {
  return (
    <>
      <SEO
        title="Software Engineering & Development Services"
        description="Explore Coding House's services: Custom Software Development, Web & Mobile Apps, CRM & ERP Solutions, Cloud & DevOps, UI/UX Design, and QA Automation."
        keywords={[
          'software development services',
          'custom software engineering',
          'web application development',
          'mobile app development Surat',
          'CRM ERP implementation',
          'cloud devops consulting'
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Engineering solutions across the full software lifecycle."
        description="Six disciplines, one accountable team. From early-stage product development to complex enterprise systems, we bring design, engineering, and delivery together."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      {/* Service cards */}
      <Section className="pt-0 sm:pt-4">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const badgeVariants = ['cyan', 'orange', 'navy', 'cyan', 'orange', 'gradient'] as const;
              return (
                <Reveal key={s.slug} delay={i * 0.05}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00A3FF]/40 hover:shadow-xl hover:shadow-cyan-500/5 overflow-hidden"
                  >
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
                    <h2 className="mt-5 font-display text-xl font-semibold text-[#0A192F] group-hover:text-[#00A3FF] transition-colors">{s.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-[1.7] text-slate-500">{s.summary}</p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-2xs font-mono font-bold uppercase tracking-[0.15em] text-[#00A3FF]">Core capabilities</p>
                      <ul className="mt-3 space-y-1.5">
                        {s.capabilities.slice(0, 4).map((c) => (
                          <li key={c} className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00A3FF] shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#00A3FF] transition-colors group-hover:text-[#FF6400]">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section className="bg-paper-100">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="How it works"
              title="All six disciplines, one team."
              description="Rather than managing separate vendors for design, engineering, QA, and infrastructure, you work with one accountable partner who covers the full stack."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { n: '01', title: 'Single point of contact', body: 'One team owns the whole engagement. No handoffs between vendors. No communication overhead.' },
              { n: '02', title: 'Weekly progress', body: 'You see working software every week — not a status update. Problems surface early, when they are still cheap to fix.' },
              { n: '03', title: 'Clean handoff', body: 'Every engagement ends with full source code, architecture documentation, and a system your team can operate.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="rounded-2xl border border-ink-900/8 bg-paper-50 p-7">
                  <span className="font-mono text-sm text-volt-600">{s.n}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink-950">{s.title}</h3>
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
