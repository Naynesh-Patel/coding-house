import { Container, Section } from '@/components/ui/Layout';
import { PageHero } from '@/components/ui/PageHero';
import { SEO } from '@/components/seo/SEO';

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Coding House collects, stores, and protects your information and project confidentiality under strict NDA."
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Coding House collects, uses, and protects information."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
      />

      <Section className="pt-4 sm:pt-8">
        <Container>
          <div className="mx-auto max-w-2xl space-y-10 text-ink-600 leading-[1.75]">
            <PolicySection title="1. Information we collect">
              <p>
                When you submit an inquiry through our contact form, we collect the information you provide: your name, email address, company name, and the details of your project. We do not collect any information passively unless you have provided it directly.
              </p>
            </PolicySection>

            <PolicySection title="2. How we use your information">
              <p>We use the information you share with us solely to:</p>
              <ul className="mt-3 space-y-1.5 pl-4">
                <li className="list-disc list-outside">Respond to your inquiry about a potential engagement</li>
                <li className="list-disc list-outside">Communicate with you during and after an engagement</li>
                <li className="list-disc list-outside">Improve how we serve future clients</li>
              </ul>
              <p className="mt-4">We do not sell, rent, or share your information with third parties for marketing purposes.</p>
            </PolicySection>

            <PolicySection title="3. Data storage and security">
              <p>
                Information submitted through our contact form is handled securely. We use industry-standard practices to protect data in transit and at rest. Access to client information is restricted to members of the Coding House team who require it for the purposes described above.
              </p>
            </PolicySection>

            <PolicySection title="4. Third-party services">
              <p>
                This website may use standard analytics tools to understand how visitors navigate the site. These tools may collect anonymized usage data. We do not use tools that build advertising profiles.
              </p>
            </PolicySection>

            <PolicySection title="5. Data retention">
              <p>
                We retain inquiry information for as long as is reasonably necessary to conduct follow-up communications and maintain business records. If you would like your information removed, contact us at{' '}
                <a href="mailto:support@codinghouse.in" className="font-medium text-volt-700 hover:underline underline-offset-4">
                  support@codinghouse.in
                </a>.
              </p>
            </PolicySection>

            <PolicySection title="6. Your rights">
              <p>
                You may request access to, correction of, or deletion of the information we hold about you at any time. To exercise these rights, contact us at{' '}
                <a href="mailto:support@codinghouse.in" className="font-medium text-volt-700 hover:underline underline-offset-4">
                  support@codinghouse.in
                </a>.
              </p>
            </PolicySection>

            <PolicySection title="7. Changes to this policy">
              <p>
                We may update this privacy policy from time to time. The current version is always available at this URL. Material changes will be communicated to active clients directly.
              </p>
            </PolicySection>

            <PolicySection title="8. Contact">
              <p>
                For any questions about this policy, contact us at{' '}
                <a href="mailto:support@codinghouse.in" className="font-medium text-volt-700 hover:underline underline-offset-4">
                  support@codinghouse.in
                </a>.
              </p>
              <p className="mt-3 text-sm text-ink-400">
                Last updated: October 2025. This policy was written by Coding House and is not legal advice.
              </p>
            </PolicySection>
          </div>
        </Container>
      </Section>
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-ink-900/8 pt-8 first:border-0 first:pt-0">
      <h2 className="font-display text-lg font-semibold text-ink-950">{title}</h2>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}
