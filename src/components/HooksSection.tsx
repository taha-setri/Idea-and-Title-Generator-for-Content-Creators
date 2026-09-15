import React, { useState } from 'react';
import { Zap, Video, Volume2, ShieldAlert, Copy, Check, Bookmark } from 'lucide-react';
import { HookIdea } from '../types';

interface HooksSectionProps {
  hooks: HookIdea[];
  onCopy: (text: string) => void;
  onSaveHook: (hook: HookIdea) => void;
  savedHookIds: Set<string>;
}

export const HooksSection: React.FC<HooksSectionProps> = ({
  hooks,
  onCopy,
  onSaveHook,
  savedHookIds
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (h: HookIdea) => {
    onCopy(h.verbalScript);
    setCopiedId(h.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleCopyFull = (h: HookIdea) => {
    const full = `[${h.hookType}]\nالنص: ${h.verbalScript}\nالتوجيه البصري: ${h.visualDirection}\nالمؤثر الصوتي: ${h.soundDesign}\nالسر النفسي: ${h.retentionImpact}`;
    onCopy(full);
    setCopiedId(`${h.id}-full`);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <section id="hooks-section" className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
              <span>البدايات الخاطفة لأول 3 إلى 5 ثوانٍ (Viral Hooks)</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono font-bold">
                Pattern Interrupts
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              توجيهات إخراجية متكاملة تمنع المشاهد من التمرير وتكسر نمط التصفح الروتيني.
            </p>
          </div>
        </div>

        <div className="text-xs text-purple-300 font-mono bg-purple-950/40 border border-purple-500/30 px-3 py-1.5 rounded-lg">
          معدل إيقاف التمرير: 87%+
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {hooks.map((item, idx) => {
          const isCopied = copiedId === item.id;
          const isFullCopied = copiedId === `${item.id}-full`;
          const isSaved = savedHookIds.has(item.id);

          return (
            <div
              key={item.id}
              className="rounded-xl bg-gradient-to-b from-[#0e1322] to-[#070a13] border border-slate-800 hover:border-purple-500/50 p-5 transition-all duration-300 hover:shadow-[0_4px_30px_-5px_rgba(168,85,247,0.2)] flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.hookTypeColor}`}>
                    {item.hookType}
                  </span>
                  <span className="text-xs text-slate-400 font-mono font-bold">
                    Hook #{idx + 1}
                  </span>
                </div>

                {/* Spoken Script */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>ما تنطقه أمام الكاميرا (Spoken Script):</span>
                  </div>
                  <blockquote className="text-sm font-semibold text-slate-100 leading-relaxed italic">
                    {item.verbalScript}
                  </blockquote>
                </div>

                {/* Visual & Sound Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#07090f] border border-slate-800/80">
                    <div className="text-cyan-400 font-semibold mb-1 flex items-center gap-1">
                      <Video className="w-3.5 h-3.5" />
                      <span>المشهد البصري الموصى به:</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {item.visualDirection}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#07090f] border border-slate-800/80">
                    <div className="text-purple-400 font-semibold mb-1 flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>المؤثر الصوتي المقترح:</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {item.soundDesign}
                    </p>
                  </div>
                </div>

                {/* Retention rationale */}
                <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-xs flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-[11px] text-emerald-300/90 leading-relaxed">
                    <strong className="text-emerald-300">سر بقاء المشاهد:</strong> {item.retentionImpact}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between gap-2 pt-4 mt-2 border-t border-slate-800/60 flex-wrap">
                <button
                  onClick={() => handleCopyFull(item)}
                  className="text-xs text-slate-400 hover:text-cyan-300 transition-colors font-medium flex items-center gap-1 cursor-pointer"
                  title="نسخ لوحة القصة والتوجيه الإخراجي بالكامل"
                >
                  {isFullCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{isFullCopied ? 'تم نسخ التوجيه بالكامل!' : 'نسخ لوحة الإخراج'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(item)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isCopied
                        ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>تم نسخ النص</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>نسخ النص</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onSaveHook(item)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isSaved
                        ? 'bg-purple-900/40 border border-purple-400 text-purple-300'
                        : 'bg-purple-950/20 hover:bg-purple-900/40 text-purple-300 border border-purple-500/30'
                    }`}
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
