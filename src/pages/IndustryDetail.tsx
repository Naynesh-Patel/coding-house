import { useParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/Layout';
import { Button, IconBadge } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
import { PageHero } from '@/components/ui/PageHero';
import { CTABand } from '@/components/ui/CTABand';
import { getIndustry, industries, services } from '@/lib/site';
import { SEO } from '@/components/seo/SEO';
import NotFoundPage from '@/pages/NotFound';

export default function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustry(slug ?? '');

  if (!industry) return <NotFoundPage />;

  const related = industries.filter((i) => i.slug !== industry.slug).slice(0, 3);
  const relevantServices = services.filter((s) =>
    industry.relevantServices.includes(s.slug)
  );

  return (
    <>
      <SEO
        title={`${industry.title} Software Solutions`}
        description={industry.summary}
        keywords={[industry.title, `${industry.title} software development`, ...industry.capabilities.slice(0, 4)]}
      />
      <PageHero
        eyebrow={`Industries · ${industry.title}`}
        title={industry.title}
        description={industry.summary}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Industries', to: '/industries' },
          { label: industry.title },
        ]}
      />

      {/* Body content */}
      <Section className="pt-4 sm:pt-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main */}
            <article className="lg:col-span-7">
              <Reveal>
                <div className="space-y-5 text-ink-500 leading-[1.75]">
                  {industry.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </Reveal>

              {/* Solutions */}
              <Reveal delay={0.1}>
                <div className="mt-10">
                  <h2 className="font-display text-xl font-semibold text-ink-950">How we help</h2>
                  <ul className="mt-5 space-y-3">
                    {industry.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-volt-600 text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-ink-700">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-5 space-y-6">
              {/* Challenges card */}
              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-ink-900/8 bg-paper-100 p-7">
                  <p className="eyebrow">
                    <span className="h-px w-5 bg-current opacity-50" />
                    Industry challenges
                  </p>
                  <ul className="mt-5 space-y-3">
                    {industry.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-sm text-ink-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-volt-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Capabilities */}
              <Reveal delay={0.12}>
                <div className="rounded-2xl border border-ink-900/8 bg-paper-100 p-7">
                  <p className="eyebrow">
                    <span className="h-px w-5 bg-current opacity-50" />
                    Capabilities
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {industry.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-sm text-ink-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-volt-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* CTA */}
              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-ink-900/8 bg-ink-950 p-7 text-paper-50">
                  <p className="eyebrow text-volt-400">
                    <span className="h-px w-5 bg-current opacity-50" />
                    Work with us
                  </p>
                  <h3 className="mt-4 font-display text-lg font-semibold text-paper-50">
                    Building in {industry.title}?
                  </h3>
                  <p className="mt-2.5 text-sm leading-[1.7] text-ink-400">
                    Tell us about the problem you're trying to solve. We'll share how we'd approach it.
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

      {/* Relevant services */}
      {relevantServices.length > 0 && (
        <Section className="bg-paper-100">
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Related services"
                title={`Services relevant to ${industry.title}.`}
              />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {relevantServices.map((s, i) => (
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
      )}

      {/* Other industries */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Other industries" title="More sectors we work in." />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {related.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 0.07}>
                <a
                  href={`/industries/${ind.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-paper-50 p-5 transition-all duration-200 hover:border-volt-500/25 hover:shadow-soft"
                >
                  <IconBadge icon={ind.icon} className="shrink-0" />
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink-950 group-hover:text-volt-700 transition-colors">{ind.title}</h3>
                    <p className="mt-0.5 text-sm text-ink-500">{ind.short}</p>
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
