import * as React from 'react';
import { Star, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Layout';

export function TrustBadges() {
  return (
    <div className="border-b border-slate-200/80 bg-white py-6">
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 items-center justify-between">
          {/* Clutch Rating */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-[#00A3FF]/30 transition-colors">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0A192F] text-white font-bold text-xs tracking-wider">
              CLUTCH
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-extrabold text-[#0A192F] ml-1">4.9/5</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500">120+ Verified Client Reviews</p>
            </div>
          </div>

          {/* GoodFirms Top Rated */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-[#FF6400]/30 transition-colors">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6400] text-white font-bold text-xs">
              GF
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-[#0A192F]">Top Software Agency</span>
                <span className="rounded bg-[#FF6400]/10 px-1.5 py-0.2 text-[10px] font-bold text-[#FF6400]">2026</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500">Recognized on GoodFirms</p>
            </div>
          </div>

          {/* ISO 27001 Certified Security */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-[#00A3FF]/30 transition-colors">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00A3FF]/15 text-[#00A3FF]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-[#0A192F]">ISO 27001 & 9001</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500">Bank-Grade Data Security</p>
            </div>
          </div>

          {/* AWS & Cloud Certified Partner */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-[#FF6400]/30 transition-colors">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0A192F] text-amber-400">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-[#0A192F]">AWS Select Tier</span>
              </div>
              <p className="text-[11px] font-medium text-slate-500">Certified Cloud Engineers</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
