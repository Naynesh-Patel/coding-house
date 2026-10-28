import { Container, Section } from '@/components/ui/Layout';
import { PageHero } from '@/components/ui/PageHero';
import { SEO } from '@/components/seo/SEO';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Review the terms and conditions governing your use of Coding House website and engineering services."
      />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms governing your use of the Coding House website and services."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Terms' }]}
      />

      <Section className="pt-4 sm:pt-8">
        <Container>
          <div className="mx-auto max-w-2xl space-y-10 text-ink-600 leading-[1.75]">
            <TermsSection title="1. Website use">
              <p>
                This website is provided for informational purposes. By accessing and using this website, you agree to these terms. If you disagree with any part of these terms, you should not use this website.
              </p>
            </TermsSection>

            <TermsSection title="2. Intellectual property">
              <p>
                All content on this website — including text, design, graphics, and code — is the property of Coding House and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without written permission.
              </p>
            </TermsSection>

            <TermsSection title="3. No warranty">
              <p>
                This website is provided "as is" without warranties of any kind. Coding House does not warrant that the website will be uninterrupted, error-free, or free of harmful components. We reserve the right to modify or discontinue any part of the website at any time without notice.
              </p>
            </TermsSection>

            <TermsSection title="4. Limitation of liability">
              <p>
                To the extent permitted by law, Coding House shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or the information it contains.
              </p>
            </TermsSection>

            <TermsSection title="5. Third-party links">
              <p>
                This website may contain links to third-party websites. These links are provided for convenience only. Coding House does not endorse or control those sites and is not responsible for their content or practices.
              </p>
            </TermsSection>

            <TermsSection title="6. Engagement terms">
              <p>
                The terms governing any software development engagement with Coding House are set out in a separate engagement agreement, master services agreement, or statement of work signed by both parties. These website terms do not constitute a contract for services.
              </p>
            </TermsSection>

            <TermsSection title="7. Governing law">
              <p>
                These terms are governed by the laws of India. Any disputes arising from these terms or your use of this website shall be subject to the jurisdiction of the courts of Surat, Gujarat, India.
              </p>
            </TermsSection>

            <TermsSection title="8. Changes to these terms">
              <p>
                We may update these terms at any time. The current version is always available at this URL. Continued use of the website following any changes constitutes acceptance of the updated terms.
              </p>
            </TermsSection>

            <TermsSection title="9. Contact">
              <p>
                For questions about these terms, contact{' '}
                <a href="mailto:support@codinghouse.in" className="font-medium text-volt-700 hover:underline underline-offset-4">
                  support@codinghouse.in
                </a>.
              </p>
              <p className="mt-3 text-sm text-ink-400">
                Last updated: October 2025. These terms are not a substitute for qualified legal advice.
              </p>
            </TermsSection>
          </div>
        </Container>
      </Section>
    </>
  );
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-ink-900/8 pt-8 first:border-0 first:pt-0">
      <h2 className="font-display text-lg font-semibold text-ink-950">{title}</h2>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}
