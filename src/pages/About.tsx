import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Users, Code2, ShieldCheck, Lightbulb, Target } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/Layout';
import { Button } from '@/components/ui/Button';
import { Reveal, RevealChildren, revealItem } from '@/components/ui/Motion';
import { PageHero } from '@/components/ui/PageHero';
import { CTABand } from '@/components/ui/CTABand';
import { motion } from 'framer-motion';

const principles = [
  {
    icon: Compass,
    title: 'Clarity over ceremony',
    body: 'We write down decisions, trade-offs, and context so the whole team can follow along — including people who join the project six months later.',
  },
  {
    icon: Code2,
    title: 'You own the code',
    body: 'Full source, documentation, and access from the first commit. No proprietary frameworks, no lock-in, no black boxes.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality is built in',
    body: 'Tests, code review, and observability are part of the build — not an afterthought before launch or a phase that gets cut when time runs short.',
  },
  {
    icon: Users,
    title: 'Senior people, every week',
    body: 'You work with experienced engineers and designers who show up regularly, know the context, and take accountability for outcomes.',
  },
  {
    icon: Lightbulb,
    title: 'Honest recommendations',
    body: 'We tell you when a simpler approach will serve you better. The right tool for the job, not the most fashionable one.',
  },
  {
    icon: Target,
    title: 'Outcomes over output',
    body: 'We measure success by whether the software works in production and serves the people using it — not by whether it shipped on schedule.',
  },
];

const engagementModels = [
  {
    title: 'Project',
    body: 'A fixed-scope engagement with defined milestones, a timeline, and a documented handoff at the end.',
    points: ['Clear scope & milestones', 'Weekly demos', 'Full source handoff', 'Arch documentation'],
  },
  {
    title: 'Dedicated team',
    body: 'A pod of engineers embedded with your team for an ongoing engagement, executing on your roadmap.',
    points: ['Your roadmap, our execution', 'Monthly planning cadence', 'Scale up or down', 'Direct communication'],
  },
  {
    title: 'Advisory',
    body: 'Architecture review, technical due diligence, and mentoring for internal teams building new capabilities.',
    points: ['Architecture audits', 'Technical due diligence', 'Hiring support', 'Team mentoring'],
  },
];

import { SEO } from '@/components/seo/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us — Software Development Company in Surat"
        description="Coding House is a software development company in Surat, Gujarat. We design and engineer reliable custom software, web apps, and enterprise systems for ambitious teams worldwide."
        keywords={[
          'About Coding House',
          'software development company in Surat',
          'IT company Surat Gujarat',
          'Coding House team',
          'custom software studio India'
        ]}
      />
      <PageHero
        eyebrow="About"
        title="A studio that ships like a bigger team."
        description="Coding House is an IT and software development company based in Surat, Gujarat, India. We pair senior engineers with clear process so projects move fast without breaking what matters."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Story section */}
      <Section className="pt-16 sm:pt-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">
                  <span className="h-px w-5 bg-current opacity-50" />
                  Our story
                </p>
                <h2 className="heading-md mt-4 text-ink-950">
                  We started Coding House because software projects shouldn't be painful.
                </h2>
                <div className="mt-6 space-y-5 text-ink-500 leading-[1.75]">
                  <p>
                    Too many teams have been burned by vendors who overpromise, disappear, or hand over a codebase nobody can maintain. We built Coding House to be the opposite: a team that communicates, documents, and stands behind what it ships.
                  </p>
                  <p>
                    We work as an embedded engineering partner: senior people on your calls, weekly demos showing real progress, and code your team owns from the first commit. No black boxes, no proprietary lock-in, no surprises.
                  </p>
                  <p>
                    Today we help companies across fintech, ecommerce, SaaS, enterprise, and wellness build software that holds up in production — not just in a demo. We are based in Surat, Gujarat, and work with clients across India and internationally.
                  </p>
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-ink-900/8 bg-paper-100 p-8">
                  <p className="eyebrow">
                    <span className="h-px w-5 bg-current opacity-50" />
                    By the numbers
                  </p>
                  <dl className="mt-6 space-y-6">
                    {[
                      { label: 'Engineering disciplines', value: '6' },
                      { label: 'Industries served', value: '5' },
                      { label: 'Engagement models', value: '3' },
                      { label: 'Location', value: 'Surat, India' },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center justify-between border-b border-ink-900/6 pb-4 last:border-0 last:pb-0">
                        <dt className="text-sm text-ink-500">{s.label}</dt>
                        <dd className="font-display text-lg font-semibold text-ink-950 tabular-nums">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section className="bg-paper-100">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Principles"
              title="How we think about building software."
              description="These are not aspirational values. They are the practices that shape how we work on every engagement."
            />
          </Reveal>

          <RevealChildren className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {principles.map((p) => (
              <motion.div
                key={p.title}
                variants={revealItem}
                className="rounded-2xl border border-ink-900/8 bg-paper-50 p-7"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink-950 text-volt-400">
                  <p.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-[1.0625rem] font-semibold text-ink-950">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-[1.7] text-ink-500">{p.body}</p>
              </motion.div>
            ))}
          </RevealChildren>
        </Container>
      </Section>

      {/* Engagement models */}
      <Section className="bg-ink-950 text-paper-50">
        <div className="absolute inset-0 grid-overlay-dark opacity-40" />
        <Container className="relative">
          <Reveal>
            <SectionHeader
              dark
              eyebrow="How we engage"
              title="Three ways to work with us."
              description="Every engagement is structured for clear communication, weekly progress, and a clean handoff."
            />
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/5 sm:grid-cols-3">
            {engagementModels.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08}>
                <div className="flex h-full flex-col bg-ink-950 p-7">
                  <h3 className="font-display text-xl font-semibold text-paper-50">{m.title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-ink-400">{m.body}</p>
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {m.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-ink-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-volt-500" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button to="/contact" variant="secondary" size="lg">
                Discuss your project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Transparency note */}
      <Section>
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-ink-900/8 bg-paper-100 p-8 sm:p-10">
              <p className="eyebrow">
                <span className="h-px w-5 bg-current opacity-50" />
                A note on our track record
              </p>
              <p className="mt-4 max-w-3xl text-ink-600 leading-[1.75]">
                Every review and project outcome published on our site represents verified client engagements across global scale-ups and enterprises. For sensitive projects, architecture blueprints and direct CTO reference calls are readily shared under mutual NDA. If you'd like to explore representative work,{' '}
                <Link to="/portfolio" className="font-medium text-volt-700 underline-offset-4 hover:underline">
                  visit our portfolio
                </Link>{' '}
                or reach out directly.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
