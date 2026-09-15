import React from 'react';
import { X, ShieldAlert, Lock, Cookie, UserCheck, CheckCircle2, Globe } from 'lucide-react';

export type PolicyTab = 'disclaimer' | 'privacy' | 'cookies' | 'founder';

interface LegalAndPoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: PolicyTab;
  setActiveTab: (tab: PolicyTab) => void;
}

export const LegalAndPoliciesModal: React.FC<LegalAndPoliciesModalProps> = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        id="legal-policies-modal"
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl bg-[#090d18] border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                مركز السياسات، الخصوصية، وبيانات المؤسس
              </h2>
              <p className="text-xs text-slate-400">
                الشفافية الكاملة وحماية بيانات المستخدم
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-[#070910] text-xs font-semibold px-4 pt-2 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('disclaimer')}
            className={`pb-3 px-3 border-b-2 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'disclaimer'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>إخلاء المسؤولية</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-3 px-3 border-b-2 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>سياسة الخصوصية</span>
          </button>

          <button
            onClick={() => setActiveTab('cookies')}
            className={`pb-3 px-3 border-b-2 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'cookies'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cookie className="w-4 h-4" />
            <span>ملفات تعريف الارتباط والكوكيز</span>
          </button>

          <button
            onClick={() => setActiveTab('founder')}
            className={`pb-3 px-3 border-b-2 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              activeTab === 'founder'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>المؤسس Taha setri</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 text-sm text-slate-300 leading-relaxed space-y-4">
          {activeTab === 'disclaimer' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>تنبيه قانوني وإرشادي:</strong> النتائج والعناوين المذكورة في هذا الاستوديو هي أدوات استشارية إبداعية مبنية على نماذج علم النفس المعرفي.
                </span>
              </div>

              <h3 className="text-base font-bold text-white">إخلاء المسؤولية العامة (General Disclaimer)</h3>
              <p>
                1. <strong>طبيعة النتائج:</strong> يُقدم موقع "مولد أفكار وعناوين صناع المحتوى" هذه الاقتراحات والصيغ النفسية لأغراض العصف الذهني والإلهام الإبداعي. لا تضمن المنصة تحقيق عدد مشاهدات معين أو نسب نقر محددة (CTR)، حيث ترتبط النتائج الفعلية بعدة عوامل مستقلة، من بينها: جودة المونتاج، المحتوى الحقيقي للفيديو، التوقيت، تفاعل الجمهور، وخوارزميات المنصات الخارجية المتغيرة باستمرار.
              </p>
              <p>
                2. <strong>الامتثال لإرشادات المنصات:</strong> يقع على عاتق صانع المحتوى التحقق من توافق العناوين والمحتوى النهائي مع إرشادات المنتدى وسياسات منصات النشر مثل YouTube وTikTok وMeta وX، وتجنب التضليل غير الأخلاقي (Clickbait المضر).
              </p>
              <p>
                3. <strong>حقوق الملكية الفكرية:</strong> جميع الأفكار والعناوين المولدة عبر الموقع تصبح متاحة ومجانية للاستخدام الحر من قبل صانع المحتوى دون أي مطالبات ملكية فكرية متبادلة.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-200 text-xs flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  <strong>الخصوصية أولاً (Privacy by Design):</strong> التطبيق يعمل بنمط مستقل ولا يرسل استفساراتك أو كلماتك المفتاحية إلى أي خوادم خارجية سرية.
                </span>
              </div>

              <h3 className="text-base font-bold text-white">سياسة الخصوصية وأمن البيانات</h3>
              <p>
                نحن نحترم خصوصيتك كصانع محتوى بشكل مطلق:
              </p>
              <ul className="list-disc pr-5 space-y-2 text-xs text-slate-300">
                <li><strong>عدم جمع البيانات الشخصية:</strong> لا نطلب منك تسجيل الدخول، ولا نجمع اسمك، بريدك الإلكتروني، أو أرقام هاتفك.</li>
                <li><strong>تخزين محلي بحت:</strong> جميع الأفكار التي تحفظها في "خزينة المحفوظات" تُخزن حصرياً داخل ذاكرة متصفحك (LocalStorage)، ولا نملك إمكانية الوصول إليها من جانبنا.</li>
                <li><strong>عدم بيع البيانات:</strong> لن يتم بيع أو تأجير أو مشاركة أي بيانات متعلقة بالمواضيع التي تبحث عنها مع أي أطراف إعلانية ثالثة.</li>
              </ul>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-purple-200 text-xs flex items-start gap-2.5">
                <Cookie className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  <strong>شفافية ملفات الارتباط:</strong> لا نستخدم ملفات كوكيز إعلانية متطفلة ولا متتبعات تابعة لجهات خارجية.
                </span>
              </div>

              <h3 className="text-base font-bold text-white">سياسة الكوكيز والتخزين المحلي (Cookies & Storage Policy)</h3>
              <p>
                يستخدم هذا الموقع تقنية <strong>Web LocalStorage</strong> بدلاً من ملفات الكوكيز التقليدية وذلك لتمكين الوظائف الأساسية التالية فقط:
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="font-bold text-cyan-300 mb-1">1. تفضيلات الواجهة والمؤثرات:</div>
                  <p className="text-slate-400">حفظ حالة تفعيل/كتم المؤثرات الصوتية المستقبلية لراحتك أثناء العمل.</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="font-bold text-purple-300 mb-1">2. قائمة الأفكار المحفوظة (Saved Vault):</div>
                  <p className="text-slate-400">الاحتفاظ بالعناوين والخطافات التي تختار حفظها للرجوع إليها في أي وقت وتصديرها.</p>
                </div>
              </div>
              <p className="text-xs text-slate-400">
                يمكنك مسح هذه البيانات في أي لحظة مباشرة من داخل التطبيق عبر زر "إفراغ الخزينة" أو عبر إعدادات متصفحك.
              </p>
            </div>
          )}

          {activeTab === 'founder' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-purple-950/40 border border-cyan-500/30">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-black text-2xl shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    TS
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Taha setri</h3>
                    <p className="text-xs text-cyan-300 font-mono">مؤسس ومطور أنظمة المحتوى الرقمي والأمان السيبراني</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  تم تصميم وتطوير منصة "مولد أفكار وعناوين صناع المحتوى" بواسطة <strong>Taha setri</strong> كجزء من منظومة الأدوات الرقمية المستقبلية التي تدمج بين هندسة الواجهات الخارقة، علم النفس المعرفي، وحماية خصوصية وأمان المستخدمين.
                </p>

                <div className="border-t border-slate-800 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="text-slate-400">المشروع الشقيق في الشبكة:</span>
                  <a
                    href="https://website-security-and-privacy-audit.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-all font-semibold"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>منصة فحص أمان وخصوصية المواقع ↗</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-900/80 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            إغلاق النافذة
          </button>
        </div>
      </div>
    </div>
  );
};
