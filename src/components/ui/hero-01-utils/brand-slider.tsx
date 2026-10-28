import * as React from "react";

export interface BrandList {
  image: string;
  lightimg?: string;
  name: string;
}

interface BrandSliderProps {
  brandList: BrandList[];
}

export default function BrandSlider({ brandList }: BrandSliderProps) {
  return (
    <section className="relative w-full border-y border-ink-900/8 bg-paper-100/60 py-10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-ink-400">
          POWERING DIGITAL INFRASTRUCTURE FOR MODERN ENTERPRISES & SCALE-UPS
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Infinite Marquee Track 1 */}
        <div className="flex shrink-0 items-center justify-around gap-12 sm:gap-16 py-2 animate-marquee whitespace-nowrap min-w-full">
          {brandList.concat(brandList).map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-2.5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-7 w-auto object-contain max-w-[120px]"
                onError={(e) => {
                  // Fallback to text badge if SVG fails to load
                  const target = e.target as HTMLElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "inline-flex";
                }}
              />
              <span
                style={{ display: "none" }}
                className="text-sm font-semibold tracking-wide text-ink-700 uppercase"
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Infinite Marquee Track 2 (seamless repeat) */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center justify-around gap-12 sm:gap-16 py-2 animate-marquee whitespace-nowrap min-w-full"
        >
          {brandList.concat(brandList).map((brand, index) => (
            <div
              key={`repeat-${brand.name}-${index}`}
              className="flex items-center gap-2.5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-7 w-auto object-contain max-w-[120px]"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "inline-flex";
                }}
              />
              <span
                style={{ display: "none" }}
                className="text-sm font-semibold tracking-wide text-ink-700 uppercase"
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Side fade masks for seamless carousel appearance */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper-50 to-transparent" />
      </div>
    </section>
  );
}
