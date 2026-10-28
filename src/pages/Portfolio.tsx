import { useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/Layout';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
import { PageHero } from '@/components/ui/PageHero';
import { CTABand } from '@/components/ui/CTABand';
import { portfolioProjects, services } from '@/lib/site';
import { SEO } from '@/components/seo/SEO';

const categories = ['All', 'Custom Software', 'Web & Mobile', 'CRM & ERP', 'Cloud & DevOps', 'UI/UX Design', 'QA & Automation'];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <>
      <SEO
        title="Case Studies & Representative Work"
        description="Explore representative software engineering projects, enterprise platforms, and mobile apps built by Coding House."
        keywords={['Coding House portfolio', 'custom software case studies', 'software development projects', 'web mobile apps case studies']}
      />
      <PageHero
        eyebrow="Work"
        title="Representative engagements."
        description="A sample of the kind of work we take on. Specific client names, project details, and full case studies are shared under NDA."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Work' }]}
      />

      <Section className="pt-0 sm:pt-4">
        <Container>
          {/* Filters */}
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-ink-950 text-paper-50 shadow-soft'
                      : 'border border-ink-900/10 bg-paper-100 text-ink-600 hover:border-ink-900/20 hover:text-ink-950'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {filtered.map((p, i) => {
              const service = services.find((s) => s.slug === p.serviceSlug);
              return (
                <Reveal key={p.title} delay={i * 0.05}>
                  <article className="group flex h-full flex-col rounded-2xl border border-ink-900/8 bg-paper-50 p-7 transition-all duration-200 hover:border-ink-900/15 hover:shadow-soft sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full bg-paper-200 px-3 py-1 text-2xs font-mono uppercase tracking-[0.15em] text-ink-500">
                        {service && <service.icon className="h-3.5 w-3.5" />}
                        {p.category}
                      </span>
                      <Lock className="h-4 w-4 text-ink-300" aria-label="Details under NDA" />
                    </div>

                    <h3 className="mt-5 font-display text-xl font-semibold text-ink-950">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-[1.7] text-ink-500">{p.description}</p>

                    {/* Outcome block */}
                    <div className="mt-5 rounded-xl bg-paper-200 p-4">
                      <p className="text-2xs font-mono uppercase tracking-wider text-ink-400">Outcome</p>
                      <p className="mt-1.5 text-sm text-ink-700">{p.outcome}</p>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>

                    {service && (
                      <a
                        href={`/services/${service.slug}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-volt-700 transition-colors group-hover:text-volt-600"
                      >
                        Related service
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-ink-400">No projects in this category yet.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* NDA section */}
      <Section className="bg-paper-100 py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-900/8 bg-paper-50 p-8 sm:flex-row sm:items-center">
              <div>
                <h3 className="heading-sm text-ink-950">Want detailed case studies?</h3>
                <p className="mt-2 text-ink-500">
                  We share specific outcomes, architecture diagrams, and client references under mutual NDA.
                </p>
              </div>
              <Button to="/contact" variant="primary" size="lg" className="shrink-0">
                Request access
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}

void SectionHeader;
