import * as React from 'react';
import { MessageCircle, X } from 'lucide-react';

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = React.useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Live Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 rounded-2xl border border-slate-200/90 bg-white px-4 py-2.5 shadow-xl shadow-slate-900/10 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <div className="text-left">
            <p className="text-xs font-bold text-[#0A192F]">Have a question?</p>
            <p className="text-[11px] text-slate-500">Chat with an engineer on WhatsApp</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-1 text-slate-400 hover:text-slate-600 transition-colors p-1"
            aria-label="Close WhatsApp prompt"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/919723678848?text=Hi%20Coding%20House%20team,%20I'd%20like%20to%20discuss%20a%20project%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-emerald-500/40"
      >
        <MessageCircle className="h-7 w-7 fill-white/20 text-white transition-transform group-hover:scale-110" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-white ring-2 ring-[#25D366] flex items-center justify-center text-[9px] font-bold text-[#25D366]">
            1
          </span>
        </span>
      </a>
    </div>
  );
}
