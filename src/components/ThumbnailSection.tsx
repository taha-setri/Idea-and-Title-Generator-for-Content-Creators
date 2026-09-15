import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, Copy, Check, Eye, AlertCircle, Lock, Unlock, Play, Radio, Flame } from 'lucide-react';
import { ThumbnailConcept } from '../types';

interface ThumbnailSectionProps {
  thumbnail: ThumbnailConcept;
  onCopy: (text: string) => void;
}

export const ThumbnailSection: React.FC<ThumbnailSectionProps> = ({ thumbnail, onCopy }) => {
  const [copied, setCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    const brief = `[فكرة الصورة المصغرة Thumbnail Strategy]\n- المشهد البصري: ${thumbnail.mainVisual}\n- النص المكتوب على الصورة: ${thumbnail.overlayText}\n- تباين الألوان: ${thumbnail.colorContrast}\n- تعبير الوجه: ${thumbnail.facialExpression}\n- الخدعة النفسية: ${thumbnail.psychologicalTrick}`;
    onCopy(brief);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="thumbnail-section" className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
              <span>استراتيجية الصورة المصغرة (Thumbnail Concept)</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono font-bold">
                High CTR Visual
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              توجيه بصري متكامل للمصمم أو المولد البصري لضمان أقصى جاذبية بصرية بين المقاطع المنافسة.
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
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'تم نسخ التوجيه!' : 'نسخ موجز التصميم (Brief)'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Mockup Preview Box with Dynamic Motion & Effects */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative aspect-video rounded-2xl overflow-hidden border-2 border-cyan-500/50 bg-gradient-to-br from-slate-950 via-[#0a0d18] to-indigo-950 shadow-[0_0_35px_rgba(6,182,212,0.25)] p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_45px_rgba(6,182,212,0.4)] hover:border-cyan-400"
          >
            {/* Dynamic Animated Cyber Grid & Moving Radar Sweep */}
            <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-20 pointer-events-none" />
            
            {/* Animated Radar Sweep Cone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] pointer-events-none opacity-25">
              <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(6,182,212,0.4)_360deg)] animate-radar" />
            </div>

            {/* Futuristic Animated Scanline Ray passing across */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none animate-scanline" />

            {/* Glowing ambient energy spheres */}
            <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-cyan-500/20 blur-2xl animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-purple-500/20 blur-2xl animate-pulse delay-1000" />

            {/* Floating cyber particles */}
            <div className="absolute top-4 right-1/4 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <div className="absolute bottom-6 left-1/3 w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping delay-700" />
            <div className="absolute top-1/2 left-6 w-1 h-1 rounded-full bg-purple-400 animate-ping delay-500" />

            {/* Top tag bar */}
            <div className="flex justify-between items-center relative z-10">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-cyan-500/40 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>16:9 DYNAMIC PREVIEW</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-rose-600 text-[10px] font-bold text-white tracking-wider uppercase shadow-[0_0_10px_rgba(225,29,72,0.5)]">
                  <Flame className="w-3 h-3 animate-bounce" />
                  <span>HIGH CTR</span>
                </span>
              </div>
            </div>

            {/* Visual simulation center: Text with Floating motion, pulsing neon, and interactive toggle */}
            <div className="relative z-10 text-center my-auto px-4 py-3">
              <div 
                className="inline-flex flex-col items-center gap-1.5 cursor-pointer select-none animate-float-slow transition-transform duration-300"
                onClick={() => setIsRevealed(!isRevealed)}
                title="اضغط للتفاعل وإظهار/إخفاء السر"
              >
                <div className="px-5 py-2.5 rounded-2xl bg-black/85 border-2 border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] animate-secret-pulse transform -rotate-1 hover:scale-105 transition-all duration-200">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
                    <span className="text-xl sm:text-2xl md:text-3xl font-black text-yellow-300 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                      {isRevealed ? thumbnail.overlayText : '🔒 انقر لكشف السر'}
                    </span>
                    <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
                  </div>
                </div>

                {/* Sub-badge showing click hint */}
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-yellow-500/30 text-[10px] text-yellow-200/90 shadow-md">
                  {isRevealed ? <Unlock className="w-3 h-3 text-emerald-400" /> : <Lock className="w-3 h-3 text-yellow-400" />}
                  <span>{isRevealed ? 'عنصر السر نشط ومتوهج • اضغط لإعادة القفل' : 'تم تفعيل وضع التشويق'}</span>
                </div>
              </div>
            </div>

            {/* Bottom info bar */}
            <div className="relative z-10 flex justify-between items-center text-[10px] text-slate-300 bg-black/70 px-3 py-1.5 rounded-lg border border-slate-800 backdrop-blur-sm">
              <span className="flex items-center gap-1.5 font-mono text-cyan-300">
                <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>محاكاة خوارزمية اليوتيوب</span>
              </span>
              <span className="text-amber-300 font-mono font-bold flex items-center gap-1">
                <span>CTR Boost +38%</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Concept Points */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-[#0b0f1a] border border-slate-800">
            <div className="text-cyan-300 font-bold mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>المشهد البصري المقترح:</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {thumbnail.mainVisual}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#0b0f1a] border border-slate-800">
            <div className="text-yellow-300 font-bold mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span>النص المقترح على الصورة (Overlay):</span>
            </div>
            <p className="text-slate-200 text-sm font-bold bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-700 text-center">
              "{thumbnail.overlayText}"
            </p>
            <span className="text-[10px] text-slate-400 block mt-1">
              قاعدة ذهبية: 3 كلمات كحد أقصى لتكون مقروءة على شاشة الهاتف.
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#0b0f1a] border border-slate-800">
            <div className="text-emerald-300 font-bold mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>تعبير الوجه ولغة الجسد:</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {thumbnail.facialExpression}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#0b0f1a] border border-slate-800">
            <div className="text-purple-300 font-bold mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>الحيلة النفسية الموصى بها:</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {thumbnail.psychologicalTrick}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
