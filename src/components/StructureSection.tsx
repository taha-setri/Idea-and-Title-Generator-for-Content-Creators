import React, { useState } from 'react';
import { Clock, ShieldCheck, Copy, Check, Sparkles, Layers } from 'lucide-react';
import { ContentStructure } from '../types';

interface StructureSectionProps {
  structure: ContentStructure;
  onCopy: (text: string) => void;
}

export const StructureSection: React.FC<StructureSectionProps> = ({ structure, onCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `[هيكل المحتوى ومخطط الاحتفاظ بالجمهور: ${structure.platformName}]\nالمدة المتوقعة: ${structure.estimatedDuration}\nالقاعدة الذهبية: ${structure.goldenRule}\n\nالمراحل:\n` +
      structure.stages.map((s, idx) => 
        `${idx + 1}. [${s.timeRange}] ${s.stageName}\n   - الهدف: ${s.objective}\n   - التوجيه: ${s.scriptPrompt}\n   - الدور النفسي: ${s.psychologicalRole}`
      ).join('\n\n');
    
    onCopy(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="structure-section" className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
              <span>هيكل المحتوى ومخطط المشاهدة (Retention Blueprint)</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold">
                {structure.estimatedDuration}
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              تسلسل زمني مصمم بدقة هندسية للحفاظ على منحنى المشاهدة ومنع هبوط وقت المشاهدة.
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
            copied
              ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
          }`}
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
          <span>{copied ? 'تم نسخ المخطط كاملاً!' : 'نسخ المخطط الزمني'}</span>
        </button>
      </div>

      {/* Golden retention rule banner */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/30 via-slate-900 to-amber-950/20 border border-amber-500/30 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="text-xs text-slate-200">
          <strong className="text-amber-400">القاعدة الذهبية للاحتفاظ:</strong> {structure.goldenRule}
        </div>
      </div>

      {/* Timeline stages */}
      <div className="relative border-r-2 border-slate-800 pr-6 mr-3 space-y-6">
        {structure.stages.map((stage, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline node */}
            <div className="absolute -right-[31px] top-1 w-4 h-4 rounded-full bg-[#07090e] border-2 border-cyan-400 shadow-[0_0_8px_#06b6d4] group-hover:scale-125 transition-transform" />

            <div className="rounded-xl bg-[#0b0f1a] border border-slate-800 group-hover:border-cyan-500/40 p-4 transition-all duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                    {stage.timeRange}
                  </span>
                  <h3 className="text-sm font-bold text-slate-100">
                    {stage.stageName}
                  </h3>
                </div>

                <span className="text-[11px] font-mono text-purple-300 bg-purple-950/40 border border-purple-500/30 px-2 py-0.5 rounded">
                  {stage.psychologicalRole}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-2.5 rounded-lg bg-[#070a12] border border-slate-800">
                  <div className="text-slate-400 font-semibold mb-1">الهدف الاستراتيجي في هذا المقطع:</div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {stage.objective}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-[#070a12] border border-slate-800">
                  <div className="text-amber-400 font-semibold mb-1">صيغة الطرح والتوجيه العملي:</div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {stage.scriptPrompt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
