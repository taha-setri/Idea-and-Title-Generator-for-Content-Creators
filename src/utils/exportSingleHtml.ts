/**
 * Generates and downloads a complete, 100% self-contained single-file HTML version
 * of the Content Creator Studio with embedded styles, full generator engine,
 * local storage, and responsive futuristic cyber design.
 */

export function downloadStandaloneHtml() {
  const htmlContent = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>مولد أفكار وعناوين صناع المحتوى | استوديو الأفكار المستقل</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #07090e;
      --card: #0d121f;
      --card-border: #1e293b;
      --primary: #06b6d4;
      --primary-glow: rgba(6, 182, 212, 0.35);
      --accent: #8b5cf6;
      --text: #f8fafc;
      --text-muted: #94a3b8;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Cairo', system-ui, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding-bottom: 60px;
    }
    /* Network Bar */
    .network-bar {
      background: linear-gradient(90deg, #090d16, #0f172a, #090d16);
      border-bottom: 1px solid rgba(6, 182, 212, 0.25);
      padding: 10px 20px;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }
    .network-link {
      color: #38bdf8;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 9999px;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.25);
      transition: all 0.2s;
    }
    .network-link:hover {
      background: rgba(56, 189, 248, 0.2);
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 24px 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 36px;
      padding: 20px 0;
    }
    .badge-cyber {
      display: inline-block;
      font-size: 12px;
      padding: 4px 14px;
      border-radius: 9999px;
      background: rgba(6, 182, 212, 0.12);
      border: 1px solid rgba(6, 182, 212, 0.35);
      color: #22d3ee;
      font-weight: 700;
      margin-bottom: 12px;
      letter-spacing: 0.5px;
    }
    h1 {
      font-size: 2.2rem;
      font-weight: 900;
      color: #fff;
      margin-bottom: 8px;
    }
    .subtitle {
      color: var(--text-muted);
      font-size: 1rem;
      max-width: 650px;
      margin: 0 auto;
    }
    /* Studio Card */
    .card {
      background: var(--card);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
    }
    .input-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 700;
      font-size: 14px;
      color: #e2e8f0;
    }
    input[type="text"], select {
      width: 100%;
      background: #070a12;
      border: 1px solid #1e293b;
      color: #f8fafc;
      padding: 14px 16px;
      border-radius: 12px;
      font-size: 15px;
      font-family: inherit;
      outline: none;
      transition: all 0.25s ease;
    }
    input[type="text"]:focus, select:focus {
      border-color: #06b6d4;
      box-shadow: 0 0 20px var(--primary-glow);
    }
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
    }
    .btn-generate {
      width: 100%;
      background: linear-gradient(135deg, #06b6d4, #3b82f6);
      color: #fff;
      border: none;
      padding: 16px;
      border-radius: 12px;
      font-size: 17px;
      font-weight: 800;
      cursor: pointer;
      font-family: inherit;
      box-shadow: 0 4px 20px rgba(6, 182, 212, 0.4);
      transition: transform 0.15s, box-shadow 0.2s;
      margin-top: 10px;
    }
    .btn-generate:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 28px rgba(6, 182, 212, 0.6);
    }
    .section-title {
      font-size: 1.25rem;
      font-weight: 800;
      margin: 32px 0 16px;
      color: #38bdf8;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid #1e293b;
      padding-bottom: 8px;
    }
    .idea-card {
      background: #090e18;
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 18px;
      margin-bottom: 14px;
      transition: all 0.2s;
    }
    .idea-card:hover {
      border-color: #0ea5e9;
      background: #0d1524;
    }
    .idea-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .ctr-badge {
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid rgba(245, 158, 11, 0.3);
      color: #fbbf24;
      font-size: 12px;
      padding: 2px 10px;
      border-radius: 9999px;
      font-weight: 700;
    }
    .idea-title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 8px;
    }
    .idea-trigger {
      font-size: 13px;
      color: #94a3b8;
    }
    .idea-actions {
      display: flex;
      gap: 8px;
      margin-top: 12px;
    }
    .btn-sm {
      background: #1e293b;
      color: #e2e8f0;
      border: none;
      padding: 6px 14px;
      border-radius: 8px;
      font-size: 12px;
      cursor: pointer;
      font-family: inherit;
      font-weight: 600;
      transition: all 0.15s;
    }
    .btn-sm:hover {
      background: #0284c7;
      color: #fff;
    }
    .btn-save {
      background: rgba(139, 92, 246, 0.15);
      border: 1px solid rgba(139, 92, 246, 0.35);
      color: #c4b5fd;
    }
    .btn-save:hover {
      background: #8b5cf6;
      color: #fff;
    }
    .footer {
      margin-top: 60px;
      text-align: center;
      border-top: 1px solid #1e293b;
      padding-top: 30px;
      color: #64748b;
      font-size: 13px;
    }
    .founder-badge {
      display: inline-block;
      margin-top: 10px;
      padding: 6px 16px;
      background: rgba(14, 165, 233, 0.1);
      border: 1px solid rgba(14, 165, 233, 0.3);
      border-radius: 9999px;
      color: #38bdf8;
      font-weight: 700;
    }
    .toast {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: #0f172a;
      border: 1px solid #06b6d4;
      color: #22d3ee;
      padding: 10px 24px;
      border-radius: 9999px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.8);
      display: none;
      z-index: 1000;
      font-weight: 700;
    }
  </style>
</head>
<body>

  <!-- Network Bar -->
  <div class="network-bar">
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></span>
      <span>شبكة المشاريع الرقمية الذكية | Digital Ecosystem</span>
    </div>
    <a href="https://website-security-and-privacy-audit.vercel.app/" target="_blank" rel="noopener noreferrer" class="network-link">
      <span>🛡️ الانتقال إلى منصة فحص أمان وخصوصية المواقع</span>
      <span>↗</span>
    </a>
  </div>

  <div class="container">
    <div class="header">
      <span class="badge-cyber">⚡ CREATOR MATRIX STUDIO | استوديو الأفكار المستقبلي</span>
      <h1>مولد أفكار وعناوين صناع المحتوى</h1>
      <p class="subtitle">إنتاج فوري لعناوين فيروسية، خطافات خاطفة (Hooks)، وهياكل محتوى مبنية على أحدث معادلات علم النفس المعرفي لزيادة نسبة النقر والمشاهدة.</p>
    </div>

    <!-- Generator Form -->
    <div class="card">
      <div class="input-group">
        <label>🎯 موضوع الفيديو أو الكلمة المفتاحية (Topic):</label>
        <input type="text" id="topicInput" value="الذكاء الاصطناعي وصناعة المحتوى" placeholder="مثال: كيف أبدأ الاستثمار، خطأ يدمر إنتاجيتك، روتين الصباح...">
      </div>

      <div class="grid-2">
        <div class="input-group">
          <label>📂 النيتش والتخصص:</label>
          <select id="nicheSelect">
            <option value="tech">التقنية والذكاء الاصطناعي</option>
            <option value="business">ريادة الأعمال والأموال</option>
            <option value="productivity">تطوير الذات والإنتاجية</option>
            <option value="marketing">صناعة المحتوى والتسويق</option>
            <option value="health">الصحة والرياضة واللياقة</option>
            <option value="story">القصص والغموض والوثائقيات</option>
          </select>
        </div>
        <div class="input-group">
          <label>📱 المنصة المستهدفة:</label>
          <select id="platformSelect">
            <option value="youtube">يوتيوب طويل (8-15 دقيقة)</option>
            <option value="shorts">فيديوهات قصيرة (Shorts / Reels / TikTok)</option>
            <option value="linkedin">منشورات وثريد (X / LinkedIn)</option>
          </select>
        </div>
      </div>

      <button class="btn-generate" onclick="generateAll()">⚡ توليد فوري لحزمة الأفكار والمعادلات</button>
    </div>

    <!-- Output Section -->
    <div id="resultsArea">
      <div class="section-title">
        <span>🔥 عناوين مقترحة بأعلى نسبة نقر متوقعة (CTR Matrix)</span>
      </div>
      <div id="titlesList"></div>

      <div class="section-title">
        <span>⚡ البدايات الخاطفة لأول 3-5 ثوانٍ (Viral Hooks)</span>
      </div>
      <div id="hooksList"></div>

      <div class="section-title">
        <span>⏱️ هيكل المحتوى الزمني ومخطط المشاهدة (Retention Blueprint)</span>
      </div>
      <div id="structureCard" class="card"></div>
    </div>

    <!-- Saved Items Vault -->
    <div class="card" style="margin-top: 40px; border-color: rgba(139, 92, 246, 0.4);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h3 style="color: #c4b5fd; font-size: 1.1rem;">💎 خزينة الأفكار المحفوظة محلياً (Local Vault)</h3>
        <button class="btn-sm" onclick="clearSaved()">مسح المحفوظات</button>
      </div>
      <div id="savedList" style="font-size: 14px; color: #94a3b8;">لا توجد عناصر محفوظة حالياً. اضغط على زر "حفظ" لحفظ أي عنوان أو خطاف!</div>
    </div>

    <!-- Footer & Policies -->
    <div class="footer">
      <p style="margin-bottom: 8px;">تطوير وتصميم استوديو صناع المحتوى الذكي 2026</p>
      <div class="founder-badge">المؤسس: Taha setri</div>
      
      <div style="margin-top: 20px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; font-size: 12px; color: #94a3b8;">
        <span>🛡️ <strong>إخلاء المسؤولية:</strong> الأفكار والعناوين مبنية على خوارزميات نفسية، والنجاح الفعلي يعتمد على جودة المحتوى والتنفيذ.</span>
        <span>🔒 <strong>الخصوصية:</strong> تطبيق مستقل تماماً يعمل في متصفحك ويخزن بياناتك محلياً دون إرسالها لأي خادم.</span>
        <span>🍪 <strong>ملفات تعريف الارتباط:</strong> نستخدم التخزين المحلي (LocalStorage) لحفظ اختياراتك فقط.</span>
      </div>
    </div>
  </div>

  <div id="toast" class="toast">تم النسخ بنجاح!</div>

  <script>
    function showToast(msg) {
      const toast = document.getElementById('toast');
      toast.innerText = msg;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 2000);
    }

    function copyText(text) {
      navigator.clipboard.writeText(text);
      showToast('✅ تم النسخ إلى الحافظة!');
    }

    function saveTitle(text) {
      let saved = JSON.parse(localStorage.getItem('creator_saved_ideas') || '[]');
      saved.unshift({ text, date: new Date().toLocaleDateString('ar-EG') });
      localStorage.setItem('creator_saved_ideas', JSON.stringify(saved));
      renderSaved();
      showToast('⭐ تم الحفظ في التخزين المحلي!');
    }

    function clearSaved() {
      localStorage.removeItem('creator_saved_ideas');
      renderSaved();
      showToast('تم إفراغ الخزينة!');
    }

    function renderSaved() {
      const el = document.getElementById('savedList');
      const saved = JSON.parse(localStorage.getItem('creator_saved_ideas') || '[]');
      if (saved.length === 0) {
        el.innerHTML = 'لا توجد عناصر محفوظة حالياً. اضغط على زر "حفظ" لحفظ أي عنوان أو خطاف!';
        return;
      }
      el.innerHTML = saved.map((item, idx) => \`
        <div style="background: #07090e; padding: 12px; border-radius: 8px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #1e293b;">
          <div>
            <strong style="color: #fff;">\${item.text}</strong>
            <span style="font-size: 11px; color: #64748b; margin-right: 10px;">(\${item.date})</span>
          </div>
          <button class="btn-sm" onclick="copyText('\${item.text.replace(/'/g, "\\\\'")}')">نسخ</button>
        </div>
      \`).join('');
    }

    function generateAll() {
      const topic = document.getElementById('topicInput').value.trim() || 'صناعة المحتوى';
      
      const titles = [
        { title: \`الحقيقة الصادمة حول \${topic} التي يخفيها الجميع عنك!\`, ctr: '14.6%', formula: 'معادلة الفجوة المعرفية (Curiosity Gap)' },
        { title: \`توقف عن ارتكاب هذا الخطأ الكارثي في \${topic} قبل فوات الأوان!\`, ctr: '13.9%', formula: 'معادلة تجنب الخسارة (Loss Aversion)' },
        { title: \`جربت \${topic} لمدة 30 يوماً متواصلة.. وكانت النتيجة غير متوقعة!\`, ctr: '13.2%', formula: 'معادلة التحدي والتحول (30-Day Proof)' },
        { title: \`الدليل الشامل: كيف تتقن \${topic} في 3 خطوات بسيطة فقط (2026)\`, ctr: '12.1%', formula: 'معادلة التبسيط الخارق (Zero Friction)' },
        { title: \`لماذا يتحدث الجميع عن \${topic} بشكل خاطئ تماماً؟\`, ctr: '14.0%', formula: 'معادلة الرأي المعاكس (Contrarian Hot Take)' }
      ];

      const hooks = [
        { type: 'الخطاف الصدامي', script: \`"كل ما سمعته عن \${topic} حتى اليوم كان نصف الحقيقة فقط! وفي هذا الفيديو سأثبت لك بالأدلة لماذا تُهدر وقتك!"\`, action: 'زووم سريع للعدسة مع نظرة جادة' },
        { type: 'خطاف الرهان العالي', script: \`"لو طبقت هذه القاعدة الواحدة في \${topic}، أضمن لك توفير أشهر من المحاولات الفاشلة.. وإذا لم تنجح، ألغِ اشتراكك فوراً!"\`, action: 'إشارة باليد مع مؤقت عد تنازلي متوهج' },
        { type: 'خطاف القصة اللحظية', script: \`"قبل 6 أشهر كنت على وشك الاستسلام في \${topic}.. حتى اكتشفت هذا السر البسيط الذي قلب كل المقاييس."\`, action: 'لقطة شاشة لبيانات صادمة' }
      ];

      document.getElementById('titlesList').innerHTML = titles.map(t => \`
        <div class="idea-card">
          <div class="idea-header">
            <span class="ctr-badge">CTR المتوقع: \${t.ctr} 🔥</span>
            <span style="font-size: 12px; color: #38bdf8;">\${t.formula}</span>
          </div>
          <div class="idea-title">\${t.title}</div>
          <div class="idea-actions">
            <button class="btn-sm" onclick="copyText('\${t.title.replace(/'/g, "\\\\'")}')">📋 نسخ العنوان</button>
            <button class="btn-sm btn-save" onclick="saveTitle('\${t.title.replace(/'/g, "\\\\'")}')">⭐ حفظ</button>
          </div>
        </div>
      \`).join('');

      document.getElementById('hooksList').innerHTML = hooks.map(h => \`
        <div class="idea-card" style="border-right: 3px solid #06b6d4;">
          <div style="font-size: 12px; color: #22d3ee; font-weight: 700; margin-bottom: 6px;">\${h.type}</div>
          <div class="idea-title" style="font-size: 15px; color: #e2e8f0;">\${h.script}</div>
          <div class="idea-trigger"><strong>🎥 التوجيه البصري:</strong> \${h.action}</div>
          <div class="idea-actions">
            <button class="btn-sm" onclick="copyText('\${h.script.replace(/'/g, "\\\\'")}')">📋 نسخ الخطاف</button>
            <button class="btn-sm btn-save" onclick="saveTitle('\${h.script.replace(/'/g, "\\\\'")}')">⭐ حفظ</button>
          </div>
        </div>
      \`).join('');

      document.getElementById('structureCard').innerHTML = \`
        <h4 style="color: #38bdf8; margin-bottom: 12px;">مخطط الاحتفاظ بالجمهور (Viewer Retention Architecture)</h4>
        <div style="display: grid; gap: 10px;">
          <div style="background: #07090e; padding: 12px; border-radius: 8px;">
            <strong style="color: #f59e0b;">⏱️ 0:00 - 0:30 (الخطاف والوعد):</strong> تأكيد وعد العنوان، وإظهار مقتطف حاسم من النتيجة.
          </div>
          <div style="background: #07090e; padding: 12px; border-radius: 8px;">
            <strong style="color: #06b6d4;">⏱️ 0:30 - 3:00 (المشكلة وتفكيك الوهم):</strong> إيضاح لماذا تفشل الطرق التقليدية في \${topic}.
          </div>
          <div style="background: #07090e; padding: 12px; border-radius: 8px;">
            <strong style="color: #10b981;">⏱️ 3:00 - 7:00 (الحل العملي العميق):</strong> تقديم الخطوات التنفيذية بالأرقام والإثبات الحي.
          </div>
          <div style="background: #07090e; padding: 12px; border-radius: 8px;">
            <strong style="color: #8b5cf6;">⏱️ 7:00 - النهاية (الخاتمة الجسرية):</strong> توجيه المشاهد لفيديو ثانٍ لزيادة وقت الجلسة.
          </div>
        </div>
      \`;

      showToast('⚡ تم توليد الأفكار فورياً بنجاح!');
    }

    window.onload = function() {
      generateAll();
      renderSaved();
    };
  </script>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'مولد-أفكار-وعناوين-صناع-المحتوى-مستقل.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
