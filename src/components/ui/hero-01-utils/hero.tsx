import * as React from "react";
import { ArrowRight, Star, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface AvatarList {
  image: string;
  name?: string;
}

interface HeroSectionProps {
  avatarList: AvatarList[];
}

export default function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32">
      {/* Background dual radial glow with brand cyan & orange */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[860px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 35% 45%, rgba(0, 163, 255, 0.25), transparent 55%), radial-gradient(circle at 65% 45%, rgba(255, 100, 0, 0.22), transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00A3FF]/25 bg-white px-4 py-1.5 text-xs font-semibold text-[#0A192F] mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#00A3FF] animate-pulse" />
            <span className="tracking-wide">BUILDING SOLUTIONS · GROWING BUSINESSES</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6400]" />
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-[#0A192F]">
            We build software that scales{" "}
            <span className="text-[#FF6400]">
              your ambition
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
            Coding House partners with enterprise leaders and high-growth startups
            to design, engineer, and deploy resilient web apps, cloud systems, and bespoke digital platforms.
          </p>

          {/* CTA Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#FF6400] hover:bg-[#e55a00] text-white shadow-lg shadow-orange-500/25 px-8 h-12 text-base font-semibold group rounded-xl"
              asChild
            >
              <a href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-slate-200 hover:bg-slate-50 text-[#0A192F] px-8 h-12 text-base rounded-xl"
              asChild
            >
              <a href="/portfolio">Explore Our Work</a>
            </Button>
          </div>

          {/* Social Proof Avatars & Rating */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-ink-900/8">
            <div className="flex -space-x-3 overflow-hidden">
              {avatarList.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar.image}
                  alt={avatar.name || `Client avatar ${idx + 1}`}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-paper-50 object-cover"
                  onError={(e) => {
                    // Fallback to high quality Unsplash avatar if image fails
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${1534528741775 + idx * 1000}?w=100&auto=format&fit=crop&q=80`;
                  }}
                />
              ))}
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1 text-sm font-bold text-ink-900">4.9/5</span>
              </div>
              <p className="text-xs text-ink-500 mt-0.5">
                Trusted by 100+ high-growth companies worldwide
              </p>
            </div>
          </div>

          {/* Key capability bullets */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-ink-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#00A3FF]" />
              <span>Full-Stack & Cloud Architecture</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#00A3FF]" />
              <span>Agile Weekly Sprints</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#00A3FF]" />
              <span>Direct Engineer Communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
