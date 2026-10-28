import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Layout';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/ui/PageHero';

export default function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page not found."
        description="The page you're looking for doesn't exist or has been moved."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: '404' }]}
      />

      <section className="py-12">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/" variant="secondary" size="md">
              Back to home
            </Button>
            <Button to="/contact" variant="ghost" size="md">
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
