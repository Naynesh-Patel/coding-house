import * as React from 'react';
import { Star, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Layout';

export function TrustBadges() {
  return (
    <div className="border-b border-slate-200/80 bg-white py-6">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 items-stretch">
          {/* Clutch Rating */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-[#00A3FF]/30 transition-colors">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#0A192F] text-white font-bold text-[10px] sm:text-xs tracking-wider">
              CLUTCH
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-2xs sm:text-xs font-extrabold text-[#0A192F] ml-0.5 sm:ml-1">4.9/5</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight mt-0.5">120+ Client Reviews</p>
            </div>
          </div>

          {/* GoodFirms Top Rated */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-[#FF6400]/30 transition-colors">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF6400] text-white font-bold text-[10px] sm:text-xs">
              GF
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1">
                <span className="text-[11px] sm:text-xs font-bold text-[#0A192F]">Top Agency</span>
                <span className="rounded bg-[#FF6400]/10 px-1 py-0.2 text-[9px] sm:text-[10px] font-bold text-[#FF6400]">2026</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight mt-0.5">GoodFirms Verified</p>
            </div>
          </div>

          {/* ISO 27001 Certified Security */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-[#00A3FF]/30 transition-colors">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#00A3FF]/15 text-[#00A3FF]">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[11px] sm:text-xs font-bold text-[#0A192F] truncate">ISO 27001 & 9001</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight mt-0.5">Bank-Grade Security</p>
            </div>
          </div>

          {/* AWS & Cloud Certified Partner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-[#FF6400]/30 transition-colors">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[#0A192F] text-amber-400">
              <Award className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[11px] sm:text-xs font-bold text-[#0A192F] truncate">AWS Select Tier</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight mt-0.5">Certified Engineers</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
