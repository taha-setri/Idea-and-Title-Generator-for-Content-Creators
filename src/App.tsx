import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { NetworkBar } from './components/NetworkBar';
import { Header } from './components/Header';
import { GeneratorForm } from './components/GeneratorForm';
import { TitlesSection } from './components/TitlesSection';
import { HooksSection } from './components/HooksSection';
import { StructureSection } from './components/StructureSection';
import { ThumbnailSection } from './components/ThumbnailSection';
import { SavedVaultModal } from './components/SavedVaultModal';
import { LegalAndPoliciesModal, PolicyTab } from './components/LegalAndPoliciesModal';
import { Footer } from './components/Footer';
import { generateContentPackage } from './data/generatorEngine';
import { GeneratedBundle, TitleIdea, HookIdea, SavedItem, NicheId, PlatformId, ToneId } from './types';
import { playFuturisticSound } from './utils/soundEffects';
import { Sparkles, Copy, Check, Share2, Layers, Flame, Video, ShieldCheck } from 'lucide-react';

const STORAGE_SAVED_KEY = 'creator_studio_saved_vault_v1';
const STORAGE_SOUND_KEY = 'creator_studio_sound_enabled';

export default function App() {
  // Input states
  const [topic, setTopic] = useState('الذكاء الاصطناعي وصناعة المحتوى');
  const [niche, setNiche] = useState<NicheId>('tech_ai');
  const [platform, setPlatform] = useState<PlatformId>('youtube_long');
  const [tone, setTone] = useState<ToneId>('shocking');
  const [isGenerating, setIsGenerating] = useState(false);

  // Output bundle state
  const [bundle, setBundle] = useState<GeneratedBundle>(() => 
    generateContentPackage('الذكاء الاصطناعي وصناعة المحتوى', 'tech_ai', 'youtube_long', 'shocking')
  );

  // Saved items state
  const [savedItems, setSavedItems] = useState<SavedItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_SAVED_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Sound settings
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_SOUND_KEY);
      return stored !== null ? JSON.parse(stored) : true;
    } catch {
      return true;
    }
  });

  // Modal states
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);
  const [policyTab, setPolicyTab] = useState<PolicyTab>('disclaimer');

  // Active section view tab
  const [activeTab, setActiveTab] = useState<'all' | 'titles' | 'hooks' | 'structure' | 'thumbnail'>('all');

  // Feedback Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCopyingAll, setIsCopyingAll] = useState(false);

  // Sync saved items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SAVED_KEY, JSON.stringify(savedItems));
    } catch (err) {
      console.error('Failed to persist saved items:', err);
    }
  }, [savedItems]);

  // Sync sound settings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_SOUND_KEY, JSON.stringify(soundEnabled));
    } catch (err) {
      console.error('Failed to persist sound settings:', err);
    }
  }, [soundEnabled]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) {
      playFuturisticSound('switch', true);
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#f59e0b']
      });
    } catch {
      // Fallback silently if canvas-confetti is not available
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    playFuturisticSound('generate', soundEnabled);

    // Short futuristic calculation delay for tactile satisfaction
    setTimeout(() => {
      const newBundle = generateContentPackage(topic, niche, platform, tone);
      setBundle(newBundle);
      setIsGenerating(false);
      showToast('⚡ تم توليد حزمة الأفكار والمعادلات النفسية فورياً!');
      
      // Auto-scroll slightly to results
      const resultsEl = document.getElementById('results-section');
      if (resultsEl) {
        resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 350);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    playFuturisticSound('copy', soundEnabled);
    showToast('📋 تم النسخ إلى الحافظة بنجاح!');
  };

  const handleSaveTitle = (item: TitleIdea) => {
    if (savedItems.some(s => s.id === item.id)) {
      showToast('هذا العنوان محفوظ بالفعل في خزينتك');
      return;
    }

    const newSaved: SavedItem = {
      id: item.id,
      type: 'title',
      savedAt: Date.now(),
      title: item.title,
      formulaName: item.formulaName,
      predictedCtr: item.predictedCtr
    };

    setSavedItems(prev => [newSaved, ...prev]);
    playFuturisticSound('save', soundEnabled);
    triggerConfetti();
    showToast('⭐ تم حفظ العنوان في التخزين المحلي!');
  };

  const handleSaveHook = (hook: HookIdea) => {
    if (savedItems.some(s => s.id === hook.id)) {
      showToast('هذا الخطاف محفوظ بالفعل في خزينتك');
      return;
    }

    const newSaved: SavedItem = {
      id: hook.id,
      type: 'hook',
      savedAt: Date.now(),
      hook
    };

    setSavedItems(prev => [newSaved, ...prev]);
    playFuturisticSound('save', soundEnabled);
    triggerConfetti();
    showToast('⭐ تم حفظ الخطاف في التخزين المحلي!');
  };

  const handleRemoveSavedItem = (id: string) => {
    setSavedItems(prev => prev.filter(i => i.id !== id));
    showToast('تم إزالة العنصر من المحفوظات');
  };

  const handleClearAllSaved = () => {
    if (window.confirm('هل أنت متأكد من رغبتك في إفراغ جميع الأفكار المحفوظة؟')) {
      setSavedItems([]);
      showToast('تم إفراغ الخزينة بنجاح');
    }
  };

  const handleCopyFullBundle = () => {
    setIsCopyingAll(true);
    const fullText = `=== حزمة المحتوى والفيديو: ${bundle.topic} ===\n` +
      `المنصة: ${bundle.platform} | النيتش: ${bundle.niche} | الطرح: ${bundle.tone}\n` +
      `درجة التأثير المتوقعة: ${bundle.viralityScore}%\n\n` +
      `--- أولاً: أفضل العناوين ذات CTR مرتفع ---\n` +
      bundle.titles.map((t, i) => `${i + 1}. ${t.title} (CTR: ${t.predictedCtr}%) [${t.formulaName}]`).join('\n') +
      `\n\n--- ثانياً: الخطافات الخاطفة (Hooks) ---\n` +
      bundle.hooks.map((h, i) => `[خطاف ${i + 1}: ${h.hookType}]\nنص: ${h.verbalScript}\nبصري: ${h.visualDirection}`).join('\n\n') +
      `\n\n--- ثالثاً: هيكل الفيديو والاحتفاظ بالمشاهد ---\n` +
      bundle.structure.stages.map(s => `[${s.timeRange}] ${s.stageName}: ${s.objective}`).join('\n') +
      `\n\n--- رابعاً: موجز الصورة المصغرة ---\n` +
      `النص: ${bundle.thumbnail.overlayText} | المشهد: ${bundle.thumbnail.mainVisual}\n` +
      `\nتم الإنتاج عبر: استوديو صناع المحتوى الذكي - إشراف المؤسس Taha setri`;

    navigator.clipboard.writeText(fullText);
    playFuturisticSound('copy', soundEnabled);
    triggerConfetti();
    showToast('🚀 تم نسخ حزمة الفيديو الكاملة بنجاح!');
    setTimeout(() => setIsCopyingAll(false), 2000);
  };

  const openPolicies = (tab: PolicyTab) => {
    setPolicyTab(tab);
    setIsPoliciesOpen(true);
  };

  // Set of saved title & hook IDs for fast lookup
  const savedTitleIds = new Set(savedItems.filter(i => i.type === 'title').map(i => i.id));
  const savedHookIds = new Set(savedItems.filter(i => i.type === 'hook').map(i => i.id));

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. Network Bar (Top) */}
      <NetworkBar onOpenPolicies={openPolicies} />

      {/* 2. Header & Branding */}
      <Header
        savedCount={savedItems.length}
        onOpenVault={() => setIsVaultOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onQuickGenerate={handleGenerate}
      />

      {/* 3. Main Studio Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Input Parameters Box */}
        <section aria-label="أداة التوليد">
          <GeneratorForm
            topic={topic}
            setTopic={setTopic}
            niche={niche}
            setNiche={setNiche}
            platform={platform}
            setPlatform={setPlatform}
            tone={tone}
            setTone={setTone}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
        </section>

        {/* Results Area */}
        <div id="results-section" className="space-y-8 pt-4">
          {/* Results Action Bar */}
          <div className="p-4 rounded-2xl bg-[#0a0e1b] border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-white">
                    حزمة محتوى: <span className="text-cyan-300 font-extrabold">"{bundle.topic}"</span>
                  </h2>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold border border-emerald-500/30">
                    مؤشر التأثير {bundle.viralityScore}% 🔥
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                  <span>{bundle.niche}</span>
                  <span>•</span>
                  <span>{bundle.platform}</span>
                  <span>•</span>
                  <span>{bundle.tone}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <button
                onClick={handleCopyFullBundle}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  isCopyingAll
                    ? 'bg-emerald-500/30 border border-emerald-400 text-emerald-200'
                    : 'bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                }`}
                title="نسخ العناوين والخطافات والمخطط الزمني في نص واحد جاهز"
              >
                {isCopyingAll ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                <span>{isCopyingAll ? 'تم نسخ الحزمة كاملة!' : 'نسخ حزمة الفيديو بالكامل'}</span>
              </button>
            </div>
          </div>

          {/* Section View Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              عرض الكل (Complete Blueprint)
            </button>
            <button
              onClick={() => setActiveTab('titles')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'titles'
                  ? 'bg-amber-500/20 border border-amber-400 text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.25)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>عناوين الفيديوهات ({bundle.titles.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('hooks')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'hooks'
                  ? 'bg-purple-500/20 border border-purple-400 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.25)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-purple-400" />
              <span>البدايات الخاطفة Hooks ({bundle.hooks.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('structure')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'structure'
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>الهيكل الزمني للمشاهدة</span>
            </button>
            <button
              onClick={() => setActiveTab('thumbnail')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'thumbnail'
                  ? 'bg-rose-500/20 border border-rose-400 text-rose-200 shadow-[0_0_12px_rgba(244,63,94,0.25)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>فكرة الصورة المصغرة</span>
            </button>
          </div>

          {/* Section 1: Titles */}
          {(activeTab === 'all' || activeTab === 'titles') && (
            <TitlesSection
              titles={bundle.titles}
              onCopy={handleCopy}
              onSaveTitle={handleSaveTitle}
              savedTitleIds={savedTitleIds}
            />
          )}

          {/* Section 2: Hooks */}
          {(activeTab === 'all' || activeTab === 'hooks') && (
            <HooksSection
              hooks={bundle.hooks}
              onCopy={handleCopy}
              onSaveHook={handleSaveHook}
              savedHookIds={savedHookIds}
            />
          )}

          {/* Section 3: Structure */}
          {(activeTab === 'all' || activeTab === 'structure') && (
            <StructureSection
              structure={bundle.structure}
              onCopy={handleCopy}
            />
          )}

          {/* Section 4: Thumbnail Concept */}
          {(activeTab === 'all' || activeTab === 'thumbnail') && (
            <ThumbnailSection
              thumbnail={bundle.thumbnail}
              onCopy={handleCopy}
            />
          )}
        </div>
      </main>

      {/* 4. Footer & Policies */}
      <Footer onOpenPolicies={openPolicies} />

      {/* 5. Modals */}
      <SavedVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
        savedItems={savedItems}
        onRemoveItem={handleRemoveSavedItem}
        onClearAll={handleClearAllSaved}
        onCopy={handleCopy}
      />

      <LegalAndPoliciesModal
        isOpen={isPoliciesOpen}
        onClose={() => setIsPoliciesOpen(false)}
        activeTab={policyTab}
        setActiveTab={setPolicyTab}
      />

      {/* 6. Floating Feedback Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-slate-900/95 border border-cyan-400/80 text-cyan-200 text-sm font-bold shadow-[0_10px_35px_rgba(6,182,212,0.4)] backdrop-blur-md flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
