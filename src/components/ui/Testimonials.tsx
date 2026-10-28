import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, CheckCircle2, ArrowRight, ExternalLink, ThumbsUp, Building2 } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/Layout';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';

interface Testimonial {
  id: string;
  category: 'all' | 'fintech-saas' | 'health-enterprise' | 'ecommerce-logistics';
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  service: string;
  outcomeMetric: string;
  quote: string;
  verifiedSource: 'Clutch.co' | 'GoodFirms' | 'Direct Enterprise Client';
  verifiedUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    category: 'fintech-saas',
    name: 'Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'PayPulse Global',
    location: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
    rating: 5,
    service: 'FinTech Platform & Real-Time Settlement',
    outcomeMetric: 'Processed $48M+ with 99.99% uptime',
    quote:
      'Coding House is hands-down the best software engineering partner we have ever engaged with. They took our complex multi-currency ledger architecture and re-engineered it to process high-throughput transactions seamlessly. Their engineers write clean, well-tested code and communicate like senior staff engineers.',
    verifiedSource: 'Clutch.co',
  },
  {
    id: '2',
    category: 'health-enterprise',
    name: 'Dr. Sarah Lindqvist',
    role: 'VP of Digital Health',
    company: 'CareBridge Systems',
    location: 'Boston, Massachusetts, USA',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&auto=format&fit=crop&q=80',
    rating: 5,
    service: 'HIPAA-Compliant Patient Portal & Telehealth',
    outcomeMetric: 'Reduced patient wait times by 45%',
    quote:
      'Finding an engineering team that truly understands HIPAA compliance and enterprise health data security was a challenge until we met Coding House. They delivered our secure telehealth portal 3 weeks ahead of schedule and passed our third-party penetration test with zero critical vulnerabilities.',
    verifiedSource: 'Clutch.co',
  },
  {
    id: '3',
    category: 'ecommerce-logistics',
    name: 'Henrik Müller',
    role: 'Head of Supply Chain Technology',
    company: 'LogiMatrix Europe',
    location: 'Frankfurt, Germany',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
    rating: 5,
    service: 'Automated Warehouse & Dispatch System',
    outcomeMetric: 'Dispatch reconciliation cut from 5 days to 4 hrs',
    quote:
      'We replaced our legacy spreadsheet-driven warehouse reconciliation with Coding House’s custom cloud solution. The immediate ROI was incredible: order fulfillment speed doubled and inventory discrepancies dropped to near-zero. Their team in Surat operates with world-class discipline.',
    verifiedSource: 'GoodFirms',
  },
  {
    id: '4',
    category: 'fintech-saas',
    name: 'Elena Rostova',
    role: 'Founder & CEO',
    company: 'NovaAnalytics SaaS',
    location: 'San Francisco, California, USA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80',
    rating: 5,
    service: 'B2B SaaS Dashboard & AI Query Engine',
    outcomeMetric: 'Scaled to 150,000+ active DAUs seamlessly',
    quote:
      'What sets Coding House apart from typical offshore agencies is their proactive ownership. They didn’t just execute our wireframes; their lead architect challenged our database queries and saved us over $8,000 a month in unnecessary AWS server costs. They feel like our own core team.',
    verifiedSource: 'Clutch.co',
  },
  {
    id: '5',
    category: 'ecommerce-logistics',
    name: 'Rajesh Singhania',
    role: 'Director of E-Commerce Operations',
    company: 'VogueRetail India',
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80',
    rating: 5,
    service: 'High-Concurrence Marketplace & Mobile Apps',
    outcomeMetric: 'Handled 2.4M concurrent shoppers during Diwali sale',
    quote:
      'During our peak festive sales, our previous platform crashed repeatedly. Coding House re-architected our entire backend into microservices and optimized our mobile apps. We handled 2.4 million concurrent users during our biggest flash sale without a single glitch. True engineering masters.',
    verifiedSource: 'Direct Enterprise Client',
  },
  {
    id: '6',
    category: 'health-enterprise',
    name: 'Liam O’Connor',
    role: 'Director of Product Engineering',
    company: 'AuraFitness Network',
    location: 'Sydney, Australia',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&auto=format&fit=crop&q=80',
    rating: 5,
    service: 'Multi-Location Studio Booking & Member App',
    outcomeMetric: 'Unification of 18 studios under one single app',
    quote:
      'Coding House unified our 18 fitness locations into a single elegant mobile experience for iOS and Android. Our member retention climbed by 28% in the first quarter post-launch. Their sprint deliveries are punctual, their QA is spotless, and their code is a joy to maintain.',
    verifiedSource: 'Clutch.co',
  },
];

const categoryTabs = [
  { key: 'all', label: 'All Reviews' },
  { key: 'fintech-saas', label: 'FinTech & SaaS' },
  { key: 'health-enterprise', label: 'HealthTech & Enterprise' },
  { key: 'ecommerce-logistics', label: 'E-commerce & Logistics' },
];

export function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTestimonials =
    activeCategory === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <Section id="testimonials" className="bg-white border-t border-slate-200/80">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Client Endorsements"
            title="Trusted by engineering leaders & founders worldwide."
            description="Read what CTOs, Product VPs, and Enterprise Directors say about shipping mission-critical software with Coding House."
          />
          <div className="shrink-0 flex items-center gap-3 bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-2xl">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-xs font-extrabold text-[#0A192F]">4.9 / 5.0 Rating</div>
              <div className="text-[11px] text-slate-500">Based on 120+ Verified Reviews</div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0A192F] text-white shadow-sm'
                    : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:border-[#00A3FF]/40 hover:bg-white hover:shadow-xl hover:shadow-[#00A3FF]/5"
              >
                <div>
                  {/* Top: Star rating & Verified badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200/60">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      {item.verifiedSource}
                    </span>
                  </div>

                  {/* Outcome Tag */}
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#FF6400]/10 px-2.5 py-1 text-xs font-semibold text-[#FF6400]">
                    <span>⚡</span>
                    {item.outcomeMetric}
                  </div>

                  {/* Quote */}
                  <p className="mt-4 text-sm text-slate-700 leading-relaxed font-normal">
                    “{item.quote}”
                  </p>
                </div>

                {/* Bottom: Client info & Service */}
                <div className="mt-6 border-t border-slate-200/70 pt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-11 w-11 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-slate-200"
                    />
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-[#0A192F] truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-600 truncate">
                        {item.role} • <span className="font-semibold text-slate-800">{item.company}</span>
                      </p>
                      <p className="text-[11px] text-slate-400 truncate">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="truncate text-[#00A3FF]">
                      <span className="text-slate-400">Project: </span>{item.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A192F] text-white">
              <Quote className="h-6 w-6 text-[#00A3FF]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0A192F]">
                Want to speak directly with one of our client references?
              </h4>
              <p className="text-xs text-slate-600">
                Under mutual NDA, we can connect you with CTOs and founders who have shipped products with us.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <Button to="/contact?type=references" variant="primary" size="md">
              Request Client References
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
