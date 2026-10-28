import { useState, type FormEvent } from 'react';
import { ArrowRight, Mail, MapPin, Clock, Check, Phone, ShieldCheck, Calendar, MessageCircle, Globe2, AlertCircle } from 'lucide-react';
import { Container, Section } from '@/components/ui/Layout';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';
import { PageHero } from '@/components/ui/PageHero';
import { services, companyInfo } from '@/lib/site';
import { SEO } from '@/components/seo/SEO';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: (formData.get('company') as string) || 'N/A',
      service: (formData.get('service') as string) || 'General Inquiry',
      budget: (formData.get('budget') as string) || 'Not specified',
      timeline: (formData.get('timeline') as string) || 'Not specified',
      message: formData.get('message') as string,
      _subject: `New Project Inquiry: ${formData.get('name')} — Coding House Website`,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/support@codinghouse.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to deliver message.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMsg(
        'There was an issue sending your message automatically. Please contact us directly at support@codinghouse.in or WhatsApp +91 97236 78848.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Coding House Software Pvt. Ltd."
        description="Coding House Software Pvt. Ltd. 410 Exiito Commercial Hub, Jahangirpura, Surat, Gujarat 395005. Contact our engineering team for custom software scoping, architecture reviews, and project estimates."
        keywords={[
          'Contact Coding House',
          'Coding House Software Pvt Ltd address',
          'software company Surat contact',
          '410 Exiito Commercial Hub Jahangirpura',
          'hire developers Surat'
        ]}
      />
      <PageHero
        eyebrow="Contact & Scoping"
        title="Tell us what you're building."
        description="Share a few details about your project and we'll come back with thoughts on scope, architecture approach, and sprint timeline."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <Section className="pt-4 sm:pt-8">
        <Container>
          {/* 100% Strict NDA Protection Banner */}
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-emerald-500/25 bg-emerald-50/70 p-5 text-emerald-950">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-emerald-950">
                  100% Strict Non-Disclosure Agreement (NDA) Protected
                </p>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Your project specifications, proprietary IP, and product concepts remain strictly confidential under mutual legal protection.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-2xs font-mono font-bold uppercase text-emerald-800 border border-emerald-600/20 shrink-0">
              Mutual NDA on Day 1
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form column */}
            <div className="lg:col-span-7">
              <Reveal>
                {submitted ? (
                  <div className="flex flex-col items-center rounded-2xl border border-slate-200/90 bg-white p-10 text-center shadow-sm">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-600">
                      <Check className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <h2 className="heading-md mt-6 text-[#0A192F]">Thanks — we'll be in touch.</h2>
                    <p className="mx-auto mt-3 max-w-md text-slate-500 leading-relaxed text-sm">
                      Your project inquiry has been securely sent to{' '}
                      <span className="font-semibold text-slate-800">support@codinghouse.in</span>.
                      Our engineering lead will review your requirements and reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-medium text-[#00A3FF] hover:underline underline-offset-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-9 shadow-sm"
                  >
                    <h2 className="font-display text-2xl font-bold text-[#0A192F]">Project inquiry</h2>
                    <p className="mt-1.5 text-sm text-slate-500">All fields marked * are required.</p>

                    {errorMsg && (
                      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50/80 p-4 text-xs text-red-800">
                        <AlertCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-red-900">{errorMsg}</p>
                          <a
                            href="mailto:support@codinghouse.in"
                            className="mt-1 inline-block font-medium underline text-red-700"
                          >
                            Click here to email support@codinghouse.in directly
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <Field id="contact-name" label="Full name *" name="name" placeholder="Jane Doe" required />
                      <Field id="contact-email" label="Work email *" name="email" type="email" placeholder="jane@company.com" required />
                      <Field id="contact-company" label="Company" name="company" placeholder="Company name" />
                      <SelectField id="contact-service" label="Service interested in" name="service">
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.title}
                          </option>
                        ))}
                        <option value="other">Not sure / Something else</option>
                      </SelectField>
                    </div>

                    <div className="mt-5">
                      <SelectField id="contact-budget" label="Estimated budget (optional)" name="budget">
                        <option value="">Select a range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 – $50,000</option>
                        <option value="50k-150k">$50,000 – $150,000</option>
                        <option value="150k-plus">$150,000+</option>
                        <option value="not-sure">Not sure yet</option>
                      </SelectField>
                    </div>

                    <div className="mt-5">
                      <SelectField id="contact-timeline" label="Ideal start date (optional)" name="timeline">
                        <option value="">Select a timeframe</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="1-3-months">1–3 months</option>
                        <option value="3-plus">3+ months</option>
                        <option value="exploring">Just exploring</option>
                      </SelectField>
                    </div>

                    <div className="mt-5">
                      <label className="mb-1.5 block text-sm font-medium text-ink-800" htmlFor="contact-message">
                        Describe your project *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        placeholder="A few sentences about what you're building, what's not working, or where your business needs to go. The more context you share, the more useful our response will be."
                        className="input-base"
                      />
                    </div>

                    <div className="mt-5">
                      <label className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="contact-consent"
                          name="consent"
                          required
                          className="mt-0.5 h-4 w-4 rounded border-ink-300 text-volt-600 focus:ring-volt-500"
                        />
                        <span className="text-sm text-ink-500">
                          I agree to the{' '}
                          <a href="/privacy-policy" className="font-medium text-ink-700 hover:underline underline-offset-4">
                            privacy policy
                          </a>{' '}
                          and consent to Coding House storing and using my information to respond to this inquiry.
                        </span>
                      </label>
                    </div>

                    <div className="mt-7 flex items-center justify-between gap-4">
                      <p className="text-xs text-ink-400">
                        We typically reply within 2 business days.
                      </p>
                      <Button type="submit" variant="secondary" size="md" disabled={loading}>
                        {loading ? 'Sending…' : 'Send message'}
                        {!loading && <ArrowRight className="h-4 w-4" />}
                      </Button>
                    </div>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Info sidebar */}
            <aside className="lg:col-span-5 space-y-5">
              {/* Calendly Discovery Call Card */}
              <Reveal delay={0.08}>
                <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00A3FF]/15 text-[#00A3FF]">
                      <Calendar className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-[#0A192F]">
                        Book a 15-Min Strategy Session
                      </h4>
                      <p className="text-xs text-slate-500">Pick a direct slot with a Senior Tech Lead.</p>
                    </div>
                  </div>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A192F] px-4 py-3 text-xs font-semibold text-white hover:bg-[#112240] transition-colors"
                  >
                    <span>Open Calendar & Schedule</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm space-y-4">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6400]">
                    Direct Contacts
                  </p>
                  <InfoCard
                    icon={Mail}
                    label="Email us directly"
                    value={companyInfo.email}
                    href={`mailto:${companyInfo.email}`}
                  />
                  <InfoCard
                    icon={Phone}
                    label="Call / WhatsApp"
                    value={companyInfo.phone}
                    href={`https://wa.me/${companyInfo.whatsapp}`}
                  />
                </div>
              </Reveal>

              {/* Office Address */}
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3FF] mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>Office Address</span>
                  </div>

                  <div className="border-l-2 border-[#00A3FF] pl-3.5">
                    <p className="text-sm font-bold tracking-wide text-[#0A192F]">CODING HOUSE</p>
                    <div className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                      <p>410 Exiito Commercial Hub,</p>
                      <p>Jahangirpura</p>
                      <p>Surat, Gujarat 395005</p>
                      <p>IN</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="rounded-3xl border border-slate-200/90 bg-[#0A192F] p-7 text-white shadow-sm">
                  <p className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00A3FF]">
                    <span>//</span>
                    <span>Guaranteed Working Session</span>
                  </p>
                  <ul className="mt-4 space-y-3 text-xs text-slate-300">
                    {[
                      'Direct talk with a senior solution architect — no sales reps.',
                      'Transparent scoping with clear weekly sprint timelines.',
                      'Full mutual NDA signed before deep architecture review.',
                      'No lock-in contracts: scale up or down as your needs evolve.',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6400]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-800" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="input-base"
      />
    </div>
  );
}

function SelectField({
  id,
  label,
  name,
  children,
}: {
  id: string;
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-800" htmlFor={id}>
        {label}
      </label>
      <select id={id} name={name} className="input-base">
        {children}
      </select>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-ink-900/8 bg-paper-50 p-5 transition-colors duration-200 hover:border-volt-500/25">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-volt-400">
        <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
      </span>
      <div>
        <p className="text-2xs font-mono uppercase tracking-[0.18em] text-ink-400">{label}</p>
        <p className="mt-0.5 font-medium text-ink-950">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

void Phone;
