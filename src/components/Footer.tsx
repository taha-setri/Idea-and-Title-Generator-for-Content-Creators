import React from 'react';
import { ShieldCheck, ExternalLink, Heart } from 'lucide-react';
import { PolicyTab } from './LegalAndPoliciesModal';

interface FooterProps {
  onOpenPolicies: (tab: PolicyTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicies }) => {
  return (
    <footer id="app-footer" className="mt-20 border-t border-slate-800 bg-[#05070c] py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="text-center md:text-right space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
              <h3 className="text-base font-extrabold text-white">
                مولد أفكار وعناوين صناع المحتوى
              </h3>
            </div>
            <p className="text-slate-500 max-w-md text-xs">
              استوديو مستقبلي فوري لتطوير عناوين ذات CTR مرتفع وبدايات فيديو استثنائية مبنية على سيكولوجيا المشاهد.
            </p>
          </div>

          {/* Founder highlight badge */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-[11px] text-slate-500">فكرة، تصميم وتطوير:</div>
            <button
              onClick={() => onOpenPolicies('founder')}
              className="group px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-950/40 to-purple-950/40 border border-cyan-500/30 hover:border-cyan-400 text-slate-200 hover:text-white transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
            >
              <span className="text-xs text-cyan-400 font-mono">المؤسس:</span>
              <span className="text-sm font-extrabold text-white group-hover:text-cyan-200 transition-colors">Taha setri</span>
            </button>
          </div>
        </div>

        {/* Middle row: Policies and links */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onOpenPolicies('disclaimer')}
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              إخلاء المسؤولية
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenPolicies('privacy')}
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              سياسة الخصوصية
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenPolicies('cookies')}
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              ملفات تعريف الارتباط والكوكيز
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenPolicies('founder')}
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              عن المؤسس Taha setri
            </button>
          </div>
        </div>

        {/* Sister Project Banner */}
        <div className="p-4 rounded-xl bg-[#080c16] border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-right">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-slate-200 font-bold text-xs">
                منصة فحص أمان وخصوصية المواقع | Website Security & Privacy Audit
              </div>
              <div className="text-slate-400 text-[11px]">
                مشروع شبكة متكامل طوره Taha setri لفحص حماية وثغرات مواقع الويب.
              </div>
            </div>
          </div>

          <a
            href="https://website-security-and-privacy-audit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:text-white transition-all text-xs font-bold whitespace-nowrap shadow-sm"
          >
            <span>زيارة المنصة السابقة</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bottom copyright */}
        <div className="text-center pt-4 text-[11px] text-slate-500 border-t border-slate-900">
          جميع الحقوق محفوظة © {new Date().getFullYear()} • استوديو صناع المحتوى الذكي • تطوير وإشراف المؤسس Taha setri.
        </div>
      </div>
    </footer>
  );
};
