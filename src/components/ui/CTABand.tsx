import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Layout';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Motion';

export function CTABand() {
  return (
    <section className="bg-paper-50 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-8 py-16 sm:px-14 sm:py-20">
            {/* Background dual glow in logo cyan and orange */}
            <div className="absolute inset-0 grid-overlay-dark opacity-30" />
            <div className="absolute right-0 top-0 h-80 w-80 -translate-y-1/3 translate-x-1/3 rounded-full bg-[#FF6400]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 translate-y-1/3 -translate-x-1/3 rounded-full bg-[#00A3FF]/20 blur-3xl" />
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00A3FF]/60 to-[#FF6400]/60" />

            <div className="relative mx-auto max-w-xl text-center">
              <p className="eyebrow justify-center text-[#00A3FF]">
                <span className="h-px w-5 bg-current opacity-50" />
                Let's build
                <span className="h-px w-5 bg-current opacity-50" />
              </p>
              <h2 className="heading-lg mt-5 text-white text-balance">
                Have a complex software challenge?
              </h2>
              <p className="mt-5 text-lg leading-[1.7] text-slate-300 text-pretty">
                Tell us what you're building, what's not working, or where your business needs to go next. We'll come back with a clear plan.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button to="/contact" variant="primary" size="lg">
                  Discuss your project
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/services" variant="light" size="lg">
                  Explore services
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
