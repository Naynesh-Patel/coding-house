import * as React from 'react';
import { Users, Clock, FileCheck, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/Layout';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';

export function EngagementModels() {
  const models = [
    {
      name: 'Dedicated Development Team',
      badge: 'Most Popular for Scale-ups',
      badgeColor: 'bg-[#FF6400]/10 text-[#FF6400] border-[#FF6400]/25',
      icon: Users,
      iconColor: 'text-[#FF6400] bg-[#FF6400]/10',
      description:
        'Hire vetted senior software engineers, tech leads, and QA specialists who integrate seamlessly as an extension of your internal team.',
      bestFor: 'High-growth startups, expanding product engineering capacity, long-term roadmaps.',
      highlights: [
        'Dedicated 160 hrs/month per developer',
        'Direct Slack & GitHub integration',
        'Sprint-ready in 48 hours',
        'Complete IP & source code ownership',
        '7-day risk-free trial guarantee',
      ],
      ctaText: 'Hire Dedicated Developers',
      ctaVariant: 'primary' as const,
    },
    {
      name: 'Fixed-Price Project Delivery',
      badge: 'Zero Budget Surprises',
      badgeColor: 'bg-[#00A3FF]/10 text-[#00A3FF] border-[#00A3FF]/25',
      icon: FileCheck,
      iconColor: 'text-[#00A3FF] bg-[#00A3FF]/10',
      description:
        'We scope the product architecture, set milestone deadlines, and deliver production-ready software against guaranteed timelines and fixed budgets.',
      bestFor: 'MVPs, greenfield applications, enterprise portal builds, well-defined scopes.',
      highlights: [
        'Milestone-based release schedule',
        'Comprehensive specification & architecture document',
        'Guaranteed delivery timeline',
        'Post-launch 30-day warranty & bug support',
        '100% strict NDA protection',
      ],
      ctaText: 'Scope a Fixed Project',
      ctaVariant: 'secondary' as const,
    },
    {
      name: 'Time & Material (Agile Sprints)',
      badge: 'Maximum Flexibility',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      icon: Clock,
      iconColor: 'text-[#0A192F] bg-slate-100',
      description:
        'Pay-as-you-go agile engagement for evolving products. Pivot priorities, add or remove capabilities, and only pay for hours actively invested.',
      bestFor: 'Legacy modernization, ongoing product iterations, dynamic feature validation.',
      highlights: [
        'Bi-weekly agile sprint cadence',
        'Transparent timesheet & burndown reports',
        'Scale team size up or down with 2-week notice',
        'Direct code commits into your repository',
        'Daily standup participation',
      ],
      ctaText: 'Start Agile Sprints',
      ctaVariant: 'outline' as const,
    },
  ];

  const hireRoles = [
    'Hire React.js Developers',
    'Hire Node.js Engineers',
    'Hire Flutter & Mobile Leads',
    'Hire Python / AI Engineers',
    'Hire Cloud & DevOps Specialists',
    'Hire UI/UX Product Designers',
    'Hire QA Automation Engineers',
    'Hire Full-Stack Architects',
  ];

  return (
    <Section id="engagement" className="bg-slate-50/70 border-t border-slate-200/80">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Flexible Partnership"
            title="Engagement models built for your business stage."
            description="Whether you need a dedicated pod of engineers or end-to-end turnkey delivery, choose the model that fits your budget and timeline."
          />
        </div>

        {/* 3 Model Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {models.map((model, idx) => (
            <Reveal key={model.name} delay={idx * 0.08}>
              <div className="relative flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00A3FF]/40 hover:shadow-xl hover:shadow-slate-900/5">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-2xs font-mono font-bold uppercase tracking-wider ${model.badgeColor}`}
                  >
                    {model.badge}
                  </span>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${model.iconColor}`}>
                    <model.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold text-[#0A192F]">
                  {model.name}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-slate-500">
                  {model.description}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <p className="text-2xs font-mono font-bold uppercase tracking-wider text-[#0A192F]">
                    Best Suited For:
                  </p>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {model.bestFor}
                  </p>
                </div>

                <div className="mt-6 flex-1 border-t border-slate-100 pt-6">
                  <p className="text-2xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    What's Included:
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {model.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="h-4 w-4 shrink-0 text-[#00A3FF] mt-0.5" strokeWidth={2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Button
                    to="/contact"
                    variant={model.ctaVariant}
                    className="w-full justify-center h-12 text-sm rounded-xl"
                  >
                    {model.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quick Hire Developer Tags & Guarantees */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#FF6400] mb-2">
                <Zap className="h-4 w-4" />
                <span>On-Demand Developer Staffing</span>
              </div>
              <h4 className="font-display text-xl font-bold text-[#0A192F]">
                Hire Vetted Remote Developers in Surat (Ready in 48 Hours)
              </h4>
              <p className="text-sm text-slate-500 mt-1">
                Skip lengthy hiring cycles. Get senior talent trained in modern tech stacks with overlapping time zones.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <ShieldCheck className="h-4 w-4 text-[#00A3FF]" />
                100% Strict NDA
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock className="h-4 w-4 text-[#FF6400]" />
                Zero Hiring Fees
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {hireRoles.map((role) => (
              <a
                key={role}
                href="/contact"
                className="group flex items-center gap-2 rounded-xl border border-slate-200/90 bg-slate-50/70 px-4 py-2.5 text-xs font-medium text-slate-700 transition-all hover:border-[#00A3FF] hover:bg-[#00A3FF]/5 hover:text-[#00A3FF]"
              >
                <span>{role}</span>
                <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
