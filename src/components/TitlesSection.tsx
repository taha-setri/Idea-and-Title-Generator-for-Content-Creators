import React, { useState } from 'react';
import { Flame, Copy, Check, Bookmark, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';
import { TitleIdea } from '../types';

interface TitlesSectionProps {
  titles: TitleIdea[];
  onCopy: (text: string) => void;
  onSaveTitle: (title: TitleIdea) => void;
  savedTitleIds: Set<string>;
}

export const TitlesSection: React.FC<TitlesSectionProps> = ({
  titles,
  onCopy,
  onSaveTitle,
  savedTitleIds
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (t: TitleIdea) => {
    onCopy(t.title);
    setCopiedId(t.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <section id="titles-section" className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
              <span>عناوين الفيديوهات الجذابة</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold">
                {titles.length} عناوين مولدة
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              مصممة بمعادلات نفسية مجربة لزيادة نسبة النقر للظهور (CTR) وإيقاف التمرير.
            </p>
          </div>
        </div>

        <div className="text-xs text-cyan-400 font-mono bg-cyan-950/40 border border-cyan-500/30 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>متوسط CTR المتوقع: 13.8%</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {titles.map((item, idx) => {
          const isCopied = copiedId === item.id;
          const isSaved = savedTitleIds.has(item.id);

          return (
            <div
              key={item.id}
              className="group relative rounded-xl bg-gradient-to-b from-[#0c101c] to-[#070a12] border border-slate-800 hover:border-cyan-500/50 p-4 transition-all duration-300 hover:shadow-[0_4px_25px_-5px_rgba(6,182,212,0.2)] flex flex-col justify-between"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-2.5 flex-wrap">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>

                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/30 border border-amber-500/20 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>CTR {item.predictedCtr}%</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-100 group-hover:text-white leading-snug mb-2 transition-colors">
                  {item.title}
                </h3>

                {/* Formula details */}
                <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/80 mb-3 text-xs space-y-1">
                  <div className="font-semibold text-cyan-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{item.formulaName}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {item.psychologicalTrigger}
                  </p>
                </div>
              </div>

              {/* Actions: Copy & Save */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/60">
                <span className="text-[11px] text-slate-500 font-mono">
                  #{idx + 1}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(item)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isCopied
                        ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                    }`}
                    title="نسخ العنوان"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>تم النسخ!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>نسخ</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onSaveTitle(item)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isSaved
                        ? 'bg-purple-900/40 border border-purple-400 text-purple-300'
                        : 'bg-purple-950/20 hover:bg-purple-900/40 text-purple-300 border border-purple-500/30'
                    }`}
                    title={isSaved ? 'تم الحفظ في المفضلة' : 'حفظ في التخزين المحلي'}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-purple-400 text-purple-400' : ''}`} />
                    <span>{isSaved ? 'محفوظ' : 'حفظ'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
