import React from 'react';
import { Sparkles, Search, Compass, Tv, MessageSquare, Flame, Check, RefreshCw } from 'lucide-react';
import { NICHES, PLATFORMS, TONES, QUICK_PROMPTS } from '../data/generatorEngine';
import { NicheId, PlatformId, ToneId } from '../types';

interface GeneratorFormProps {
  topic: string;
  setTopic: (topic: string) => void;
  niche: NicheId;
  setNiche: (niche: NicheId) => void;
  platform: PlatformId;
  setPlatform: (platform: PlatformId) => void;
  tone: ToneId;
  setTone: (tone: ToneId) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export const GeneratorForm: React.FC<GeneratorFormProps> = ({
  topic,
  setTopic,
  niche,
  setNiche,
  platform,
  setPlatform,
  tone,
  setTone,
  onGenerate,
  isGenerating
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate();
  };

  return (
    <div id="generator-form-card" className="relative rounded-2xl bg-gradient-to-b from-[#0d121f] to-[#090d16] border border-cyan-500/20 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)] p-5 sm:p-7 backdrop-blur-xl">
      {/* Decorative cyber corner accents */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-2xl pointer-events-none" />

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 1. Main Topic Input with glowing cyberpunk aura */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="topic-input" className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>موضوع الفيديو أو الكلمة المفتاحية (Topic Keyword):</span>
            </label>
            <span className="text-[11px] text-slate-400 font-mono">نظام التوليد المعرفي الفوري</span>
          </div>

          <div className="relative group">
            <input
              id="topic-input"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="مثال: الذكاء الاصطناعي، كيف تبدأ الاستثمار، روتين الصباح، أسرار خوارزمية يوتيوب..."
              className="w-full bg-[#05070d] text-slate-100 placeholder-slate-500 px-5 py-4 pl-12 rounded-xl border border-slate-700/80 group-hover:border-cyan-500/40 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:shadow-[0_0_25px_rgba(6,182,212,0.35)] text-base font-medium transition-all duration-300"
            />
            <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-cyan-400 transition-colors" />
          </div>

          {/* Quick topic suggestion chips */}
          <div className="flex items-center gap-2 flex-wrap pt-1">
            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-400" /> أفكار شائعة سريعة:
            </span>
            {QUICK_PROMPTS.map((promptText, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setTopic(promptText)}
                className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  topic === promptText
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                    : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {promptText}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Niche Picker */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Compass className="w-4 h-4 text-purple-400" />
            <span>المجال والنيتش (Niche Focus):</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {NICHES.map((item) => {
              const isSelected = niche === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setNiche(item.id)}
                  className={`text-right p-3 rounded-xl border text-xs transition-all relative overflow-hidden cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-950/70 to-slate-900 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      : 'bg-[#080c14] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-200 text-xs sm:text-sm">{item.label}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                  </div>
                  <p className="text-[10px] text-slate-400 line-clamp-1">{item.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Platform & Tone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Platform */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <Tv className="w-4 h-4 text-emerald-400" />
              <span>المنصة المستهدفة (Target Platform):</span>
            </label>
            <div className="grid grid-cols-1 gap-2">
              {PLATFORMS.map((p) => {
                const isSelected = platform === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlatform(p.id)}
                    className={`text-right px-3 py-2.5 rounded-xl border text-xs flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-950/40 border-emerald-400 text-white shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                        : 'bg-[#080c14] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-slate-200">{p.label}</div>
                      <div className="text-[10px] text-slate-400">{p.sub}</div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tone */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>النبرة النفسية والطرح (Psychological Tone):</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {TONES.map((t) => {
                const isSelected = tone === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    className={`text-right p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-950/40 border-amber-400 text-white shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                        : 'bg-[#080c14] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-slate-200">{t.label}</div>
                    <div className="text-[10px] text-slate-400 line-clamp-1">{t.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. Instant Action Generate Button */}
        <div className="pt-2">
          <button
            id="generate-button"
            type="submit"
            disabled={isGenerating}
            className="w-full relative overflow-hidden group py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:via-sky-400 hover:to-purple-500 text-white font-extrabold text-base sm:text-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300 transform active:scale-[0.99] cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
          >
            {/* Cyber shimmer sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

            <span className="relative flex items-center justify-center gap-2">
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin text-white" />
                  <span>جاري حساب المعادلات النفسية وتوليد الأفكار...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
                  <span>توليد فوري لحزمة الأفكار والمعادلات النفسية ⚡</span>
                </>
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
