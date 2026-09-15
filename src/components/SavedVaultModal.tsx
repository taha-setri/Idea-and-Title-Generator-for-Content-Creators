import React, { useState } from 'react';
import { X, Bookmark, Trash2, Copy, Check, Download, Search, Sparkles } from 'lucide-react';
import { SavedItem } from '../types';

interface SavedVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: SavedItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onCopy: (text: string) => void;
}

export const SavedVaultModal: React.FC<SavedVaultModalProps> = ({
  isOpen,
  onClose,
  savedItems,
  onRemoveItem,
  onClearAll,
  onCopy
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'title' | 'hook'>('all');

  if (!isOpen) return null;

  const filteredItems = savedItems.filter((item) => {
    const matchesFilter = filterType === 'all' || item.type === filterType;
    const content = item.title || item.hook?.verbalScript || '';
    const matchesSearch = content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCopyText = (id: string, text: string) => {
    onCopy(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(savedItems, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `أفكار-صناع-المحتوى-المحفوظة-${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleExportTxt = () => {
    const textContent = savedItems.map((item, idx) => {
      if (item.type === 'title') {
        return `[عنوان #${idx + 1}]\n${item.title}\nالمعادلة: ${item.formulaName || ''}\nCTR: ${item.predictedCtr || ''}%\nتاريخ الحفظ: ${new Date(item.savedAt).toLocaleDateString('ar-EG')}\n----------------------------------`;
      } else if (item.type === 'hook' && item.hook) {
        return `[خطاف #${idx + 1} - ${item.hook.hookType}]\nالنص: ${item.hook.verbalScript}\nالمشهد البصري: ${item.hook.visualDirection}\nالمؤثر الصوتي: ${item.hook.soundDesign}\nالسر النفسي: ${item.hook.retentionImpact}\n----------------------------------`;
      }
      return '';
    }).join('\n\n');

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `أفكار-صناع-المحتوى-المحفوظة-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        id="saved-vault-modal"
        className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl bg-[#0a0e1a] border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.25)] overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>خزينة الأفكار والعناوين المحفوظة</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono font-bold">
                  {savedItems.length} عنصر
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                مخزنة بأمان في التخزين المحلي لمتصفحك (LocalStorage)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls: Search, Filter, Export */}
        <div className="p-3.5 bg-[#080b14] border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          {/* Search box */}
          <div className="relative flex-1 min-w-[200px]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث في أفكارك المحفوظة..."
              className="w-full bg-[#05070d] text-slate-200 placeholder-slate-500 px-3 py-2 pl-9 rounded-xl border border-slate-800 focus:border-purple-400 text-xs outline-none"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-purple-950/50 border-purple-400 text-purple-200'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              الكل ({savedItems.length})
            </button>
            <button
              onClick={() => setFilterType('title')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filterType === 'title'
                  ? 'bg-purple-950/50 border-purple-400 text-purple-200'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              عناوين
            </button>
            <button
              onClick={() => setFilterType('hook')}
              className={`px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                filterType === 'hook'
                  ? 'bg-purple-950/50 border-purple-400 text-purple-200'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              خطافات
            </button>
          </div>

          {/* Export / Clear buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportTxt}
              disabled={savedItems.length === 0}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-all disabled:opacity-50 cursor-pointer"
              title="تصدير كملف نصي TXT"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>تصدير TXT</span>
            </button>

            <button
              onClick={handleExportJson}
              disabled={savedItems.length === 0}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-all disabled:opacity-50 cursor-pointer"
              title="تصدير بصيغة JSON"
            >
              <Download className="w-3.5 h-3.5 text-purple-400" />
              <span>JSON</span>
            </button>

            {savedItems.length > 0 && (
              <button
                onClick={onClearAll}
                className="px-2.5 py-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                title="مسح جميع المحفوظات"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>إفراغ</span>
              </button>
            )}
          </div>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500 flex items-center justify-center mx-auto mb-3">
                <Bookmark className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-300 mb-1">
                {searchTerm ? 'لا توجد نتائج تطابق بحثك' : 'خزينتك فارغة حالياً'}
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                اضغط على زر "حفظ" بجانب أي عنوان أو خطاف لتخزينه هنا والرجوع إليه في أي وقت دون اتصال بالإنترنت.
              </p>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isCopied = copiedId === item.id;
              const dateStr = new Date(item.savedAt).toLocaleDateString('ar-EG', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              });

              if (item.type === 'title') {
                return (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">
                          عنوان فيديو
                        </span>
                        {item.predictedCtr && (
                          <span className="text-[10px] font-mono font-bold text-amber-400">
                            CTR: {item.predictedCtr}%
                          </span>
                        )}
                        <span className="text-[10px] text-slate-500 font-mono">
                          {dateStr}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-100">
                        {item.title}
                      </p>
                      {item.formulaName && (
                        <p className="text-[11px] text-slate-400">
                          {item.formulaName}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => handleCopyText(item.id, item.title || '')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        }`}
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'تم!' : 'نسخ'}</span>
                      </button>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                        title="حذف من المحفوظات"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              }

              if (item.type === 'hook' && item.hook) {
                return (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-300">
                          {item.hook.hookType}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">
                          {dateStr}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-100 italic">
                        {item.hook.verbalScript}
                      </p>
                      <div className="text-[11px] text-slate-400">
                        <strong>بصرياً:</strong> {item.hook.visualDirection}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => handleCopyText(item.id, item.hook!.verbalScript)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300'
                            : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                        }`}
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'تم!' : 'نسخ'}</span>
                      </button>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
                        title="حذف من المحفوظات"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              }

              return null;
            })
          )}
        </div>
      </div>
    </div>
  );
};
