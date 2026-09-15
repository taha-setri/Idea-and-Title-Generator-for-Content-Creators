import React from 'react';
import { ShieldCheck, ExternalLink, Globe, Sparkles } from 'lucide-react';

interface NetworkBarProps {
  onOpenPolicies?: (tab: 'disclaimer' | 'privacy' | 'cookies' | 'founder') => void;
}

export const NetworkBar: React.FC<NetworkBarProps> = ({ onOpenPolicies }) => {
  return (
    <aside aria-label="شريط الشبكة العلوية" id="network-bar" className="w-full bg-[#05070b]/95 backdrop-blur-md border-b border-cyan-500/20 text-slate-300 text-xs py-2 px-4 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left / Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Globe className="w-3.5 h-3.5" />
            <span>شبكة المنصات الرقمية الذكية</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <span>المؤسس:</span>
            <button
              onClick={() => onOpenPolicies?.('founder')}
              className="font-bold text-slate-200 hover:text-cyan-400 transition-colors cursor-pointer underline decoration-cyan-500/40 decoration-wavy underline-offset-4"
              title="عرض نبذة عن المؤسس"
            >
              Taha setri
            </button>
          </div>
        </div>

        {/* Right / Sister project link & policies shortcut */}
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <button
            onClick={() => onOpenPolicies?.('disclaimer')}
            className="text-slate-400 hover:text-cyan-300 transition-colors text-[11px] hidden md:inline-block cursor-pointer"
          >
            إخلاء المسؤولية
          </button>
          <button
            onClick={() => onOpenPolicies?.('privacy')}
            className="text-slate-400 hover:text-cyan-300 transition-colors text-[11px] hidden md:inline-block cursor-pointer"
          >
            الخصوصية والكوكيز
          </button>

          <span className="hidden md:inline-block text-slate-700">|</span>

          {/* User-requested Link */}
          <a
            id="sister-project-link"
            href="https://website-security-and-privacy-audit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 hover:border-cyan-400/60 text-cyan-300 hover:text-cyan-100 transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(6,182,212,0.3)]"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="font-medium text-xs">الانتقال لمنصة فحص أمان وخصوصية المواقع</span>
            <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </aside>
  );
};
