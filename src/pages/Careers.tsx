import { useState } from 'react';
import { ArrowRight, MapPin, Briefcase, Clock, Users, Heart, BookOpen, Coffee } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/Layout';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
import { PageHero } from '@/components/ui/PageHero';
import { CTABand } from '@/components/ui/CTABand';
import { companyInfo } from '@/lib/site';
import { SEO } from '@/components/seo/SEO';
import { ApplyModal } from '@/components/ui/ApplyModal';

const openings = [
  { role: 'Full-Stack Engineer', team: 'Engineering', location: 'Remote · India', type: 'Intern', description: 'Build and maintain modern web applications, design clean APIs, and contribute across the full development stack.' },
  { role: 'Frontend Engineer (React)', team: 'Engineering', location: 'Remote · India', type: 'Intern', description: 'Build fast, accessible, and maintainable user interfaces. You care about performance, component design, and the details that make products feel great.' },
  { role: 'DevOps Engineer', team: 'Platform', location: 'Remote · India', type: 'Intern', description: 'Design and maintain CI/CD pipelines, cloud infrastructure, and observability systems for client projects.' },
  { role: 'UI/UX Designer', team: 'Design', location: 'Remote · India', type: 'Intern', description: 'Lead product design across client engagements — from research and flows through high-fidelity interfaces and coded design systems.' },
  { role: 'QA Automation Engineer', team: 'Quality', location: 'Remote · India', type: 'Intern', description: 'Design and implement test automation frameworks, ensure coverage on critical paths, and integrate quality into CI pipelines.' },
  { role: 'Digital Marketing', team: 'Marketing', location: 'Remote · India', type: 'Intern', description: 'Plan and execute digital campaigns, manage SEO, social media strategies, and content outreach to drive brand engagement.' },
];

const values = [
  { icon: BookOpen, title: 'Write it down', body: 'Decisions, trade-offs, and context live in documents — not in someone\'s head. We document as we work, not after.' },
  { icon: Heart, title: 'Own the outcome', body: 'We care about whether the software works in production, not just whether it shipped on the original schedule.' },
  { icon: Users, title: 'Review everything', body: 'No code reaches main without a thoughtful review from a teammate. Reviews are where we learn from each other.' },
  { icon: Coffee, title: 'Stay curious', body: 'We make time to learn new tools, revisit old assumptions, and explore better approaches to problems we\'ve solved before.' },
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string>('Full-Stack Engineer');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenApply = (role: string) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  return (
    <>
      <SEO
        title="Careers & Internship Opportunities"
        description="Join Coding House as an intern in software engineering, UI/UX design, DevOps, QA, or digital marketing. Work on high-impact projects with senior engineers in a craft-first culture."
        keywords={['Coding House careers', 'internship openings India', 'software engineering intern Surat', 'digital marketing intern', 'frontend backend developer openings']}
      />
      <PageHero
        eyebrow="Careers"
        title="Build software you're proud to put your name on."
        description="We're a remote-first engineering studio looking for talented and ambitious people who care about craft, clarity, and shipping things that work."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
      />

      {/* Working here */}
      <Section className="pt-4 sm:pt-8">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="The work" title="What it's like here." />
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MapPin, label: 'Location', value: 'Remote-first', sub: 'India-based team' },
              { icon: Clock, label: 'Schedule', value: 'Flexible hours', sub: 'Overlap with clients required' },
              { icon: Users, label: 'Team', value: 'Small, senior', sub: 'No layers of management' },
              { icon: Briefcase, label: 'Engagement', value: 'Direct', sub: 'You talk to clients' },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="rounded-2xl border border-ink-900/8 bg-paper-50 p-6">
                  <s.icon className="h-5 w-5 text-volt-600" strokeWidth={1.75} />
                  <p className="mt-4 text-2xs font-mono uppercase tracking-[0.18em] text-ink-400">{s.label}</p>
                  <p className="mt-1 font-display text-lg font-semibold text-ink-950">{s.value}</p>
                  <p className="mt-1 text-sm text-ink-400">{s.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-paper-100">
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Values" title="What we look for." description="Beyond technical skills, we hire for the way people think and work." />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="flex gap-5 rounded-2xl border border-ink-900/8 bg-paper-50 p-7">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-volt-400">
                    <v.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.0625rem] font-semibold text-ink-950">{v.title}</h3>
                    <p className="mt-2 text-sm leading-[1.7] text-ink-500">{v.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open roles */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeader eyebrow="Open roles" title="Current openings." description="All roles are remote-first. We are based in India and work with clients across India and internationally." />
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-2xl border border-ink-900/8 bg-paper-50">
            {openings.map((o, i) => (
              <Reveal key={o.role} delay={i * 0.04}>
                <div className="border-t border-ink-900/6 p-6 first:border-t-0 transition-colors hover:bg-paper-100 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink-950 text-volt-400 shrink-0">
                        <Briefcase className="h-4.5 w-4.5" strokeWidth={1.75} />
                      </span>
                      <div>
                        <h3 className="font-medium text-ink-950">{o.role}</h3>
                        <p className="mt-0.5 text-sm text-ink-400">
                          {o.team} · {o.location} · {o.type}
                        </p>
                        <p className="mt-2 text-sm text-ink-500 leading-relaxed">{o.description}</p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      onClick={() => handleOpenApply(o.role)}
                      variant="outline"
                      size="sm"
                      className="shrink-0 self-start"
                    >
                      Apply
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8 rounded-2xl border border-dashed border-ink-900/12 bg-paper-100 p-6 sm:p-8">
              <p className="font-display text-base font-medium text-ink-950">Don't see a fit?</p>
              <p className="mt-1.5 text-sm text-ink-500">
                We're always glad to meet exceptional talent. If you do excellent work and want to intern with us,{' '}
                <button
                  type="button"
                  onClick={() => handleOpenApply('Other / General Internship')}
                  className="font-medium text-volt-700 hover:underline underline-offset-4 cursor-pointer"
                >
                  click here to submit your resume
                </button>
                {' '}or email{' '}
                <a href={`mailto:${companyInfo.careersEmail}`} className="font-medium text-volt-700 hover:underline underline-offset-4">
                  {companyInfo.careersEmail}
                </a>.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTABand />

      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialRole={selectedRole}
        rolesList={openings.map((o) => o.role).concat('Other / General Internship')}
      />
    </>
  );
}
