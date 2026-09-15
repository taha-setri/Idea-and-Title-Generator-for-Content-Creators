import React from 'react';
import { Sparkles, Bookmark, Volume2, VolumeX, Flame, Zap, Cpu } from 'lucide-react';

interface HeaderProps {
  savedCount: number;
  onOpenVault: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onQuickGenerate: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  savedCount,
  onOpenVault,
  soundEnabled,
  onToggleSound,
}) => {
  return (
    <header id="studio-header" className="relative pt-8 pb-6 border-b border-slate-800/80 bg-gradient-to-b from-[#090d18] via-[#07090e] to-transparent">
      {/* Subtle futuristic background cyber grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top bar controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
            <span className="font-mono text-cyan-300">V3.5 PROTOCOL</span>
            <span className="text-slate-600">|</span>
            <span>نظام الهندسة النفسية لعناوين المحتوى</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* Sound toggle */}
            <button
              id="sound-toggle-btn"
              onClick={onToggleSound}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                soundEnabled
                  ? 'bg-cyan-950/40 border-cyan-500/40 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
              title={soundEnabled ? 'كتم المؤثرات الصوتية' : 'تفعيل المؤثرات الصوتية المستقبلية'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden sm:inline font-mono">{soundEnabled ? 'صوت: مفعّل' : 'صوت: مكتوم'}</span>
            </button>

            {/* Saved Vault Button */}
            <button
              id="saved-vault-trigger"
              onClick={onOpenVault}
              className="px-3.5 py-2 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/40 hover:border-purple-400 text-purple-200 text-xs font-semibold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(168,85,247,0.15)] cursor-pointer"
            >
              <Bookmark className="w-3.5 h-3.5 text-purple-400" />
              <span>خزينة المحفوظات</span>
              <span className="px-1.5 py-0.5 rounded-full bg-purple-500 text-white font-mono text-[10px] font-bold">
                {savedCount}
              </span>
            </button>
          </div>
        </div>

        {/* Hero Title and Vision */}
        <div className="text-center max-w-3xl mx-auto pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wider mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>CREATOR MATRIX STUDIO • استوديو صناع المحتوى الذكي</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
            مولد أفكار وعناوين <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-sky-300 to-purple-400">صناع المحتوى</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            واجهة استوديو متقدمة لإنتاج عناوين ذات معدل نقر فائق (<span className="text-cyan-300 font-semibold font-mono">CTR 14%+</span>)، بدايات خاطفة للأنظار (<span className="text-purple-300 font-semibold">Hooks</span>)، ومخططات زمنية للاحتفاظ بالمشاهد استناداً لمعادلات علم النفس السلوكي.
          </p>

          {/* Quick Pillars */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>معادلة الفجوة المعرفية</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>توليد فوري ذكي</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>حفظ محلي فوري</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
