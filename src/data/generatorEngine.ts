import { GeneratedBundle, TitleIdea, HookIdea, ContentStructure, ThumbnailConcept, NicheId, PlatformId, ToneId } from '../types';

export interface NicheInfo {
  id: NicheId;
  label: string;
  icon: string;
  description: string;
  keywords: string[];
}

export const NICHES: NicheInfo[] = [
  {
    id: 'tech_ai',
    label: 'التقنية والذكاء الاصطناعي',
    icon: 'Cpu',
    description: 'أدوات الذكاء الاصطناعي، البرمجة، والتقنيات المستقبلية',
    keywords: ['الذكاء الاصطناعي', 'شات جي بي تي', 'أتمتة العمل', 'أدوات المستقبل', 'برمجة دون كود', 'هواتف وأجهزة']
  },
  {
    id: 'business_money',
    label: 'ريادة الأعمال والمال',
    icon: 'TrendingUp',
    description: 'صناعة الثروة، التجارة الإلكترونية، والاستثمار',
    keywords: ['بزنس بدون رأس مال', 'التجارة الإلكترونية', 'الاستثمار الذكي', 'مصادر دخل سلبي', 'أسرار الأثرياء']
  },
  {
    id: 'productivity_mindset',
    label: 'الإنتاجية وتطوير الذات',
    icon: 'Zap',
    description: 'إدارة الوقت، التركيز العميق، وعادات النجاح',
    keywords: ['روتين الصباح الخارق', 'التخلص من التسويف', 'التركيز الفائق', 'بناء العادات الذرية', 'تنظيم اليوم']
  },
  {
    id: 'marketing_creator',
    label: 'صناعة المحتوى والتسويق',
    icon: 'Video',
    description: 'خوارزميات المنصات، نمو المتابعين، وزيادة المشاهدات',
    keywords: ['خوارزمية اليوتيوب', 'زيادة المشاهدات', 'تصدر التريند', 'صناعة ريلز فيروسي', 'أسرار المونتاج']
  },
  {
    id: 'fitness_health',
    label: 'الصحة والرياضة واللياقة',
    icon: 'Activity',
    description: 'خسارة الوزن، بناء العضلات، وصحة الدماغ',
    keywords: ['خسارة الدهون العنيدة', 'بناء العضلات للمبتدئين', 'نظام الصيام المتقطع', 'طاقة اليوم كامل', 'تغذية صحية']
  },
  {
    id: 'storytelling_drama',
    label: 'القصص والغموض والوثائقيات',
    icon: 'Film',
    description: 'أغرب الحوادث، التحقيقات، والسرد القصصي المشوق',
    keywords: ['قصة اللغز الذي حير العالم', 'أخطر تجربة في التاريخ', 'سر الاختفاء الغامض', 'ما حدث خلف الكواليس']
  },
  {
    id: 'gaming',
    label: 'الألعاب والجيمنج',
    icon: 'Gamepad2',
    description: 'تحديات الألعاب، أسرار الاحتراف، وتجارب أسطورية',
    keywords: ['تحدي مستحيل 24 ساعة', 'أسرار سرية لا يعرفها أحد', 'تغلبت على أقوى زعيم', 'من الصفر إلى الدايموند']
  },
  {
    id: 'education_facts',
    label: 'العلوم والحقائق المبسطة',
    icon: 'BookOpen',
    description: 'تفسير الظواهر، حقائق مذهلة، وتبسيط المعرفة',
    keywords: ['لماذا يتصرف عقلك هكذا؟', 'حقيقة الكون الصادمة', 'تجارب علمية مجنونة', 'معلومات ستغير نظرتك']
  }
];

export const PLATFORMS = [
  { id: 'youtube_long' as PlatformId, label: 'فيديو يوتيوب طويل (8-15 دقيقة)', sub: 'تركيز على وقت المشاهدة ونسبة النقر CTR' },
  { id: 'shorts_tiktok' as PlatformId, label: 'فيديوهات قصيرة (Reels / Shorts / TikTok)', sub: 'أول 3 ثوانٍ سريعة وخطاف بصري عالي' },
  { id: 'linkedin_x' as PlatformId, label: 'ثريد ومنشورات (X / LinkedIn)', sub: 'خطاف نصي محترف وفائدة مركّزة' },
  { id: 'podcast' as PlatformId, label: 'بودكاست وحوارات عميقة', sub: 'سؤال افتتاحي فلسفي وتعمق استقصائي' }
];

export const TONES = [
  { id: 'shocking' as ToneId, label: 'صادمة وغير متوقعة ⚡', desc: 'تكسر المألوف وتثير الجدل الإيجابي' },
  { id: 'urgent' as ToneId, label: 'تحذير عاجل وحاسم ⚠️', desc: 'تعتمد على الخوف من الخطأ والفوات' },
  { id: 'inspiring' as ToneId, label: 'ملهمة ومحفزة للعمل 🚀', desc: 'تحول إيجابي وقصة نجاح واقعية' },
  { id: 'analytical' as ToneId, label: 'تحليلية وعلمية دقيقة 🧠', desc: 'بيانات، تجارب، ومخططات ممنهجة' },
  { id: 'intriguing' as ToneId, label: 'غامضة ومثيرة للفضول 🕵️', desc: 'سر محجوب وحقيقة مخفية خلف الستار' },
  { id: 'practical' as ToneId, label: 'خطوات عملية سريعة 🛠️', desc: 'دليل تنفيذي مباشر بدون حشو' }
];

export const QUICK_PROMPTS = [
  'الذكاء الاصطناعي بديل الموظفين',
  'كيف تكسب أول 1000$ أونلاين',
  'العادة التي دمرت إنتاجيتي لسنوات',
  'لماذا تفشل 90% من قنوات اليوتيوب',
  'سر التركيز 4 ساعات بدون تشتت',
  'أكبر وهم يبيعه مشاهير السوشيال ميديا'
];

export function generateContentPackage(
  topic: string,
  nicheId: NicheId,
  platformId: PlatformId,
  toneId: ToneId
): GeneratedBundle {
  const cleanTopic = topic.trim() || 'صناعة المحتوى الذكي';
  const niche = NICHES.find(n => n.id === nicheId) || NICHES[0];

  // 1. Generate Title Ideas with real psychological formulas
  const titles: TitleIdea[] = [
    {
      id: `title-1-${Date.now()}`,
      title: `الحقيقة الصادمة حول ${cleanTopic} التي يخفيها الجميع عنك!`,
      formulaName: 'معادلة الفجوة المعرفية والسر المحجوب (Curiosity Gap)',
      psychologicalTrigger: 'يخلق عجزاً معرفياً لا يمكن للدماغ تحمله دون الضغط والمشاهدة لمعرفة الحقيقة.',
      predictedCtr: 14.6,
      badge: 'أعلى نسبة نقر CTR 🔥',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
    },
    {
      id: `title-2-${Date.now()}`,
      title: `توقف عن ارتكاب هذا الخطأ الكارثي في ${cleanTopic} قبل فوات الأوان!`,
      formulaName: 'معادلة الرعب من الخسارة (Loss Aversion Formula)',
      psychologicalTrigger: 'وفقاً لعلم النفس المعرفي، يتجنب البشر الخسارة بضعف رغبتهم في تحقيق المكاسب.',
      predictedCtr: 13.9,
      badge: 'محفز فوري للفوات ⚠️',
      badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30'
    },
    {
      id: `title-3-${Date.now()}`,
      title: `جربت ${cleanTopic} لمدة 30 يوماً متواصلة.. وكانت النتيجة غير متوقعة!`,
      formulaName: 'معادلة التحدي والتحول الواقعي (30-Day Experiment)',
      psychologicalTrigger: 'يمنح المشاهد إثباتاً اجتماعياً ومغامرة حقيقية دون أن يخاطر هو بوقته أو ماله.',
      predictedCtr: 12.8,
      badge: 'تجربة شخصية موثوقة 🧪',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
    },
    {
      id: `title-4-${Date.now()}`,
      title: `الدليل الشامل: كيف تتقن ${cleanTopic} في 3 خطوات بسيطة فقط (2026)`,
      formulaName: 'معادلة التبسيط الخارق (Zero-Friction Blueprint)',
      psychologicalTrigger: 'يعد المشاهد بحل سريع وواضح يخفض الجهد العقلي المتوقع إلى الحد الأدنى.',
      predictedCtr: 11.7,
      badge: 'مرجع دائم وحفظ عالي 📌',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    },
    {
      id: `title-5-${Date.now()}`,
      title: `لماذا يتحدث الجميع عن ${cleanTopic} بشكل خاطئ تماماً؟`,
      formulaName: 'معادلة الرأي المعاكس وكسر الصنم (The Contrarian Hot Take)',
      psychologicalTrigger: 'يتحدى المعتقدات السائدة، فيشعل الرغبة في الدفاع أو اكتشاف زاوية نظر ثورية.',
      predictedCtr: 13.4,
      badge: 'إثارة جدل إيجابي 💥',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
    },
    {
      id: `title-6-${Date.now()}`,
      title: `لو كنت سأبدأ في ${cleanTopic} من الصفر اليوم.. فهذا ما سأفعله بالضبط!`,
      formulaName: 'معادلة البدء من الصفر (The Time Travel Blueprint)',
      psychologicalTrigger: 'يختصر سنوات من المعاناة ويخاطب المبتدئين والخبراء الباحثين عن إعادة التوجيه.',
      predictedCtr: 14.1,
      badge: 'قيمة مضافة هائلة 💎',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
    },
    {
      id: `title-7-${Date.now()}`,
      title: `السر غير المعلن الذي جعل كبار المحترفين يتفوقون في ${cleanTopic}`,
      formulaName: 'معادلة التميز الحصري (Insider Privilege Formula)',
      psychologicalTrigger: 'يشعر المشاهد بأنه على وشك الانضمام لنادي نخبوي يعرف أسراراً خفية.',
      predictedCtr: 12.3,
      badge: 'حصري وجذاب 🗝️',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30'
    },
    {
      id: `title-8-${Date.now()}`,
      title: `قارنت بين الطريقة التقليدية وأحدث طريقة لـ ${cleanTopic}.. الفارق صادم!`,
      formulaName: 'معادلة المقارنة القاطعة (A/B High Stakes Battle)',
      psychologicalTrigger: 'تغذية حب المقارنات والوضوح البصري المباشر لتقرير الفائز فوراً.',
      predictedCtr: 13.2,
      badge: 'مقارنة قاطعة ⚖️',
      badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30'
    }
  ];

  // 2. Generate Viral Hooks (first 3-5 seconds)
  const hooks: HookIdea[] = [
    {
      id: `hook-1-${Date.now()}`,
      hookType: 'الخطاف الصدامي الحاسم (Contrarian Shock)',
      hookTypeColor: 'border-rose-500/40 bg-rose-950/20 text-rose-300',
      verbalScript: `"كل ما سمعته عن ${cleanTopic} حتى اليوم.. كان نصف الحقيقة فقط! وفي هذا الفيديو سأثبت لك بالأدلة لماذا تُهدر وقتك!"`,
      visualDirection: `نظرة مباشرة وحادة في العدسة، حركة زووم سريعة (Fast Zoom-in) خلال أول ثانيتين، مع إظهار رسم بياني أو شاشة محذوفة فجأة.`,
      soundDesign: `صوت قطع شريط أو انقطاع مفاجئ للموسيقى (Record Scratch / Bass Drop) لحظة قول "نصف الحقيقة".`,
      retentionImpact: 'يمنع التمرير السريع (Scroll Stop) بنسبة 89% لأن المشاهد يشعر أن قناعاته مهددة.'
    },
    {
      id: `hook-2-${Date.now()}`,
      hookType: 'خطاف الرهان العالي والتحدي (High-Stakes Challenge)',
      hookTypeColor: 'border-amber-500/40 bg-amber-950/20 text-amber-300',
      verbalScript: `"لو طبقت هذه القاعدة الواحدة في ${cleanTopic}، أضمن لك توفير أشهر من المحاولات الفاشلة.. وإذا لم تنجح معك، ألغِ اشتراكك فوراً!"`,
      visualDirection: `تحريك الكاميرا بأسلوب وثائقي ديناميكي، إشارة باليد مع ظهور مؤقت عد تنازلي متوهج في زاوية الشاشة.`,
      soundDesign: `تكة ساعة عالية السرعة تتوقف عند كلمة "ألغِ اشتراكك" مع ضربة طبل سينمائي (Cinematic Boom).`,
      retentionImpact: 'الرهان الجريء يبني مصداقية فورية ويغري المشاهد بانتظار إثبات صحة الوعد.'
    },
    {
      id: `hook-3-${Date.now()}`,
      hookType: 'خطاف القصة اللحظية (In Media Res Story Hook)',
      hookTypeColor: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300',
      verbalScript: `"قبل 6 أشهر كنت على وشك الاستسلام تماماً في ${cleanTopic}.. حتى اكتشفت هذه الثغرة البسيطة التي قلبت كل المقاييس."`,
      visualDirection: `لقطة مشهد سينمائي واقعي (B-roll مظلم أو محبط في البداية) ثم انتقال فجائي للوحة تحكم مضيئة أو نتيجة خارقة.`,
      soundDesign: `لحن بيانو هادئ يتحول سريعاً إلى إيقاع صاعد حماسي مع مؤثر Whoosh خاطف.`,
      retentionImpact: 'الدماغ البشري مجبر بيولوجياً على البقاء لمعرفة نهاية القصة (Open Loop Closure).'
    },
    {
      id: `hook-4-${Date.now()}`,
      hookType: 'خطاف التناقض البصري والمادي (Visual Paradox)',
      hookTypeColor: 'border-purple-500/40 bg-purple-950/20 text-purple-300',
      verbalScript: `"انظر إلى هذه النتيجة.. الغريب أنها لم تتطلب مني سوى 15 دقيقة يومياً باستخدام أسلوب غير مألوف في ${cleanTopic}!"`,
      visualDirection: `إمساك شيء ملموس أمام الكاميرا أو عرض لقطة شاشة لإحصائيات حقيقية بالغة الارتفاع مع تظليل أحمر حول الرقم الأكبر.`,
      soundDesign: `مؤثر نغمة رقمية دقيقة أو كاميرا Shutter Click عند ظهور الدليل.`,
      retentionImpact: 'الدليل البصري الحاسم في الثانية الأولى يلغي الشكوك ويفرض الانتباه الكامل.'
    }
  ];

  // 3. Generate Video Retention Structure
  const isShorts = platformId === 'shorts_tiktok';
  const structure: ContentStructure = isShorts
    ? {
        platformName: 'فيديو قصير (Shorts / Reels / TikTok - 45-60 ثانية)',
        estimatedDuration: '50 ثانية',
        goldenRule: 'كل 3 ثوانٍ يجب أن يتغير العنصر البصري أو زاوية الكاميرا لضمان معدل إكمال 120%+',
        stages: [
          {
            timeRange: '0:00 - 0:03',
            stageName: 'الخطاف الحارق (Pattern Interrupt)',
            objective: 'إيقاف حركة الإصبع قبل التمرير للأعلى.',
            scriptPrompt: `جملة صادمة ومفاجئة مباشرة عن ${cleanTopic} بدون أي مقدمة أو سلام.`,
            psychologicalRole: 'كسر الروتين البصري (Dopamine Trigger)'
          },
          {
            timeRange: '0:03 - 0:15',
            stageName: 'تضخيم الألم والعقبة (The Pain Point)',
            objective: 'توضيح المشكلة التي يعاني منها 99% من المشاهدين.',
            scriptPrompt: `اشرح كيف أن الطريقة السائدة تجعلك تفشل أو تضيع مجهودك.`,
            psychologicalRole: 'بناء التماهي العاطفي (Empathy & Relatability)'
          },
          {
            timeRange: '0:15 - 0:35',
            stageName: 'الحل السري والخطوة التنفيذية (The Golden Insight)',
            objective: 'تقديم الفائدة الذهبية بشكل مكثف وقابل للتطبيق فوراً.',
            scriptPrompt: `اعرض الحل العملي في خطوتين محددتين مع كتابة النص البصري على الشاشة.`,
            psychologicalRole: 'مكافأة الانتباه (Instant Value Delivery)'
          },
          {
            timeRange: '0:35 - 0:45',
            stageName: 'الخاتمة الحلقية والدعوة للتفاعل (Loop + Micro-CTA)',
            objective: 'إغلاق الفيديو بجملة ترتبط بالثانية الأولى ليعيد المشاهدة تلقائياً.',
            scriptPrompt: `اربط نهاية الجملة ببداية الفيديو، مع طلب الحفظ: "احفظ الفيديو لترجع له وقت التطبيق!".`,
            psychologicalRole: 'مضاعفة المشاهدات عبر التكرار اللانهائي (Seamless Loop)'
          }
        ]
      }
    : {
        platformName: 'يوتيوب طويل (YouTube Long-form - 8 إلى 12 دقيقة)',
        estimatedDuration: '10 دقائق و30 ثانية',
        goldenRule: 'لا تطلب الاشتراك قبل الدقيقة الخامسة! قدم قيمة صادمة أولاً ثم اطلب التفاعل بعد إبهار المشاهد.',
        stages: [
          {
            timeRange: '0:00 - 0:45',
            stageName: 'الخطاف والوعد القاطع (The Hook & Micro-Payoff)',
            objective: 'تأكيد وعد العنوان، وإظهار مقتطف من النتيجة النهائية لتثبيت الفضول.',
            scriptPrompt: `ابدأ بالخطاف الصدامي، ثم اعرض 5 ثوانٍ من الذروة مع جملة: "لكن للوصول لهذه النتيجة، كان عليّ تجنب 3 أخطاء مدمرة".`,
            psychologicalRole: 'تأكيد الثقة واستبعاد مغادرة الفيديو فوراً (Anti-Bounce)'
          },
          {
            timeRange: '0:45 - 3:00',
            stageName: 'المشكلة الخفية وسبب فشل الآخرين (The Hidden Conflict)',
            objective: 'تفكيك الخرافة الشائعة حول موضوع الفيديو.',
            scriptPrompt: `استعرض بالأدلة لماذا تفشل الحلول السطحية في ${cleanTopic} وما هو السبب الحقيقي غير المرئي.`,
            psychologicalRole: 'بناء التوتر وتوسيع الفجوة الإدراكية (Tension Building)'
          },
          {
            timeRange: '3:00 - 6:30',
            stageName: 'المخطط الاستراتيجي والتطبيق العملي (The Framework Deep Dive)',
            objective: 'شرح الخطوات الجوهرية خطوة بخطوة مع لقطات شاشة وأمثلة حية.',
            scriptPrompt: `قسّم الحل إلى 3 مستويات: المستوى السريع، المستوى المتعمق، والخدعة التي يطبقها كبار المحترفين.`,
            psychologicalRole: 'تثبيت قيمة المحتوى وبناء السلطة المعرفية (Authority Building)'
          },
          {
            timeRange: '6:30 - 9:00',
            stageName: 'الذروة والنتيجة الصادمة (The Turning Point & Proof)',
            objective: 'الكشف عن القطعة المفقودة من اللغز والنتائج الملموسة.',
            scriptPrompt: `اعرض النتيجة النهائية أو التحول الشامل بالأرقام والحقائق مع الإجابة على أكبر اعتراض يدور في ذهن المشاهد.`,
            psychologicalRole: 'إشباع الفضول وإطلاق الإندورفين (Cognitive Satisfaction)'
          },
          {
            timeRange: '9:00 - 10:30',
            stageName: 'الختام الموجه ومسار المشاهدة المستمر (The Bridge Outro)',
            objective: 'توجيه المشاهد لمشاهدة فيديو ثانٍ بدلاً من إنهاء جلسته على يوتيوب.',
            scriptPrompt: `لا تقل "وفي الختام"! قل: "والآن بعد أن عرفت هذا السر، الشيء الوحيد الذي قد يفسده عليك هو ما شرحته في هذا الفيديو الظاهر أمامك الآن!".`,
            psychologicalRole: 'رفع وقت الجلسة العام لقناتك (Binge Session Multiplier)'
          }
        ]
      };

  // 4. Generate High-CTR Thumbnail Strategy
  const thumbnail: ThumbnailConcept = {
    mainVisual: `صورة وجهك من زاوية قريبة بتعبير صدمة وتركيز، مع عنصر بصري متوهج في يدك يرمز لـ "${cleanTopic}" وخلفية داكنة متباينة باللون السيان والأزرق العميق.`,
    overlayText: 'سر لم يخبروك به!',
    colorContrast: 'أصفر نيون (#FACC15) أو أحمر مرجاني على خلفية كحلية مشبعة بنسبة تباين تتجاوز 7:1.',
    facialExpression: 'عيون متسعة قليلاً مع حاجب مرفوع وزاوية رأس مائلة بنسبة 15 درجة (Micro-Expression of Intrigue).',
    psychologicalTrick: 'استخدم سهماً أحمر متعرجاً يشير إلى نقطة غير متوقعة في الشاشة بدون كشف التفاصيل الكاملة لفرض النقر.'
  };

  const emotions = ['الفضول المتقد', 'الرغبة في التفوق', 'الخوف من ارتكاب الأخطاء', 'اليقين بالحل'];

  return {
    id: `bundle-${Date.now()}`,
    timestamp: Date.now(),
    topic: cleanTopic,
    niche: niche.label,
    platform: PLATFORMS.find(p => p.id === platformId)?.label || PLATFORMS[0].label,
    tone: TONES.find(t => t.id === toneId)?.label || TONES[0].label,
    titles,
    hooks,
    structure,
    thumbnail,
    viralityScore: Math.floor(Math.random() * 8) + 91, // 91 - 98%
    targetEmotions: emotions
  };
}
