import { useParams } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Container, Section, SectionHeader } from '@/components/ui/Layout';
import { Button, IconBadge } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
import { PageHero } from '@/components/ui/PageHero';
import { CTABand } from '@/components/ui/CTABand';
import { getService, services } from '@/lib/site';
import { SEO } from '@/components/seo/SEO';
import NotFoundPage from '@/pages/NotFound';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getService(slug ?? '');

  if (!service) return <NotFoundPage />;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${service.title} Services`}
        description={service.summary}
        keywords={[service.title, ...service.capabilities.slice(0, 5), 'Coding House services']}
      />
      <PageHero
        eyebrow={`Services · ${service.title}`}
        title={service.title}
        description={service.summary}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />

      {/* Body content */}
      <Section className="pt-4 sm:pt-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main content */}
            <article className="lg:col-span-7">
              <Reveal>
                <div className="space-y-5 text-ink-500 leading-[1.75]">
                  {service.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </Reveal>

              {/* Outcomes */}
              <Reveal delay={0.1}>
                <div className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-ink-950">What you get</h2>
                  <ul className="mt-5 space-y-3">
                    {service.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-volt-600 text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-ink-700">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Use cases */}
              <Reveal delay={0.15}>
                <div className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-ink-950">Typical use cases</h2>
                  <ul className="mt-5 space-y-2.5">
                    {service.useCases.map((u) => (
                      <li key={u} className="flex items-start gap-3 text-ink-500">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-volt-500" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-5 space-y-6">
              {/* Capabilities card */}
              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-ink-900/8 bg-paper-100 p-7">
                  <p className="eyebrow">
                    <span className="h-px w-5 bg-current opacity-50" />
                    Capabilities
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {service.capabilities.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-sm text-ink-700">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-volt-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Technologies */}
              <Reveal delay={0.12}>
                <div className="rounded-2xl border border-ink-900/8 bg-paper-100 p-7">
                  <p className="eyebrow">
                    <span className="h-px w-5 bg-current opacity-50" />
                    Technologies
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.technologies.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* CTA card */}
              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-ink-900/8 bg-ink-950 p-7 text-paper-50">
                  <p className="eyebrow text-volt-400">
                    <span className="h-px w-5 bg-current opacity-50" />
                    Interested?
                  </p>
                  <h3 className="mt-4 font-display text-lg font-semibold text-paper-50">
                    Tell us about your project
                  </h3>
                  <p className="mt-2.5 text-sm leading-[1.7] text-ink-400">
                    Share a few details and we'll come back with thoughts on scope, approach, and fit.
                  </p>
                  <Button to="/contact" variant="secondary" size="md" className="mt-5 w-full">
                    Discuss your project
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-paper-100">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Process"
              title={`How we approach ${service.title.toLowerCase()}.`}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.07}>
                <div className="relative rounded-2xl border border-ink-900/8 bg-paper-50 p-6">
                  <span className="font-mono text-sm text-volt-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink-950">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-[1.7] text-ink-500">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <Section>
          <Container>
            <Reveal>
              <SectionHeader eyebrow="FAQ" title="Common questions." />
            </Reveal>
            <div className="mt-10 max-w-3xl divide-y divide-ink-900/8">
              {service.faq.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Related services */}
      <Section className="bg-paper-100">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Related" title="Other services." />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.07}>
                <a
                  href={`/services/${s.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-ink-900/8 bg-paper-50 p-6 transition-all duration-200 hover:border-volt-500/25 hover:shadow-soft"
                >
                  <IconBadge icon={s.icon} className="shrink-0" />
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink-950 group-hover:text-volt-700 transition-colors">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-500">{s.short}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button
        className="flex w-full items-start justify-between gap-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-display text-base font-medium text-ink-950">{q}</span>
        {open ? (
          <ChevronUp className="mt-0.5 h-5 w-5 shrink-0 text-ink-400" />
        ) : (
          <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-ink-400" />
        )}
      </button>
      {open && (
        <p className="mt-4 text-sm leading-[1.75] text-ink-500">{a}</p>
      )}
    </div>
  );
}
