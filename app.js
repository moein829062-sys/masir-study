const icons = {
  home: '<path d="M3 11.5 12 4l9 7.5v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  map: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M7.5 16.5 16.5 7.5M8 6h4M6 8v4M12 18h6v-6"/>',
  repeat:
    '<path d="M20 7h-9a6 6 0 0 0-6 6v1M17 4l3 3-3 3M4 17h9a6 6 0 0 0 6-6v-1M7 20l-3-3 3-3"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  message: '<path d="M20 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A8 8 0 1 1 20 15z"/>',
  calendar:
    '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  arrow: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  play: '<path d="m8 5 11 7-11 7z"/>',
  book: '<path d="M4 5a3 3 0 0 1 3-2h13v16H7a3 3 0 0 0-3 2zM4 5v16M8 7h8"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  scale: '<path d="M12 3v18M5 6h14M7 6l-4 7h8L7 6ZM17 6l-4 7h8l-4-7ZM8 21h8"/>',
  file: '<path d="M6 2h8l4 4v16H6zM14 2v5h5M9 13h6M9 17h6"/>',
  quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3 2.3c-.8.3-.8 1-.8 1.7M12 17h.01"/>',
  video:
    '<rect x="3" y="5" width="14" height="14" rx="2"/><path d="m17 10 4-2v8l-4-2z"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  spark:
    '<path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z"/>',
  headset:
    '<path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a1 1 0 0 1-1-1zM20 14h-3v6h2a1 1 0 0 0 1-1zM17 20c0 1-2 2-4 2"/>',
  send: '<path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
};
icons.moon = '<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/>';
icons.sun =
  '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>';
document.querySelectorAll("[data-icon]").forEach((el) => {
  const n = el.dataset.icon;
  el.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[n] || icons.book}</svg>`;
});
const app = document.getElementById("app");
const subjects = [
  ["حقوق مدنی", "۸ فصل از ۱۲ فصل", "72", "#3478f6", "#eaf2ff"],
  ["حقوق تجارت", "۶ فصل از ۱۰ فصل", "58", "#7258ee", "#f0edff"],
  ["آیین دادرسی مدنی", "۵ فصل از ۹ فصل", "46", "#179b73", "#e8f8f2"],
  ["حقوق جزا", "۷ فصل از ۱۱ فصل", "64", "#e38624", "#fff3e4"],
  ["آیین دادرسی کیفری", "۴ فصل از ۸ فصل", "39", "#d8546e", "#ffedf1"],
  ["اصول فقه", "۶ فصل از ۸ فصل", "75", "#4378a8", "#eaf3fb"],
  ["متون فقه", "۳ فصل از ۷ فصل", "31", "#8e61a9", "#f5ecfa"],
  ["حقوق اساسی", "۸ فصل از ۸ فصل", "100", "#15947d", "#e5f7f2"],
];
const chapters = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: i === 5 ? "مرور نیمه‌جامع اول" : i === 11 ? "مرور نیمه‌جامع دوم" : `فصل ${toFa(i < 5 ? i + 1 : i)}`,
  sub: i === 5 ? "جمع‌بندی فصل‌های ۱ تا ۵" : i === 11 ? "جمع‌بندی فصل‌های ۶ تا ۱۰" : "",
}));
function chapterTitle(id) {
  return chapters[id - 1]?.title || `فصل ${toFa(id)}`;
}
const subjectTopics = [
  ["اشخاص و محجورین", "اموال و مالکیت", "قراردادها", "مسئولیت مدنی"],
  ["تاجر و اعمال تجاری", "شرکت‌های تجاری", "اسناد تجاری", "ورشکستگی"],
  ["صلاحیت دادگاه", "دادخواست", "دادرسی و رأی", "طرق شکایت"],
  ["عناصر جرم", "مجازات‌ها", "جرایم علیه اشخاص", "جرایم علیه اموال"],
  ["کشف و تعقیب", "تحقیقات مقدماتی", "دادگاه کیفری", "اعتراض به آرا"],
  ["الفاظ", "اوامر و نواهی", "عام و خاص", "اصول عملیه"],
  ["ترجمه فقهی", "قواعد استنباط", "عبارات منتخب", "تحلیل متن"],
  ["حقوق ملت", "ساختار حکومت", "قوای سه‌گانه", "نظارت قانون اساسی"],
];
const chapterThemes = [
  "#3478f6",
  "#7258ee",
  "#179b73",
  "#e38624",
  "#d8546e",
  "#2f6b9c",
  "#8e61a9",
  "#15947d",
  "#d06a3d",
  "#4b72cf",
  "#a05b84",
  "#47735f",
];
let state = {
  route: "home",
  chapter: null,
  subject: 0,
  part: 1,
  step: 3,
  reviewed: [],
};
function toFa(n) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
function course() {
  return JSON.parse(localStorage.getItem("masirCourse") || "null");
}
function studyProgress() {
  return JSON.parse(
    localStorage.getItem("masirProgress") || '{"unlocked":2,"completed":[1]}',
  );
}
function saveStudyProgress(data) {
  localStorage.setItem("masirProgress", JSON.stringify(data));
}
function setActive(route) {
  document
    .querySelectorAll("[data-route]")
    .forEach((b) => b.classList.toggle("is-active", b.dataset.route === route));
}
function header(title, subtitle) {
  const dark = document.body.dataset.theme === "dark";
  return `<header class="topbar"><div><h1>${title}</h1><p>${subtitle}</p></div><div class="header-actions">${pageNavigation()}<button class="icon-button theme-toggle" data-theme-toggle aria-label="${dark ? "فعال‌کردن حالت روشن" : "فعال‌کردن حالت تاریک"}">${svg(dark ? "sun" : "moon")}</button><button class="icon-button" aria-label="اعلان‌ها">${svg("bell")}</button></div></header>`;
}
function pageNavigation() {
  const routes = ["home", "roadmap", "reviews", "progress"];
  const labels = { home: "خانه", roadmap: "نقشه راه", reviews: "مرور روزانه", progress: "گزارش پیشرفت" };
  const route = state.route === "course" ? "roadmap" : state.route;
  const index = routes.indexOf(route);
  const previous = state.route === "course" ? "roadmap" : routes[index - 1];
  const next = state.route === "course" ? "reviews" : routes[index + 1];
  const previousButton = `<button data-route="${previous || route}" ${previous ? "" : "disabled"} aria-label="صفحه قبلی" title="${previous ? labels[previous] : "قبلی"}">${svg("arrow")}</button>`;
  const nextButton = `<button data-route="${next || route}" ${next ? "" : "disabled"} aria-label="صفحه بعدی" title="${next ? labels[next] : "بعدی"}">${svg("arrow").replace("<svg", '<svg class="next-arrow"')}</button>`;
  return `<nav class="top-page-navigation" aria-label="میانبر حرکت بین صفحه‌ها">${previousButton}${nextButton}</nav><nav class="bottom-page-navigation" aria-label="حرکت بین صفحه‌ها"><button data-route="${previous || route}" ${previous ? "" : "disabled"}>${svg("arrow")}<span>${previous ? labels[previous] : "قبلی"}</span></button><button data-route="${next || route}" ${next ? "" : "disabled"}><span>${next ? labels[next] : "بعدی"}</span>${svg("arrow").replace("<svg", '<svg class="next-arrow"')}</button></nav>`;
}
function svg(n) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[n]}</svg>`;
}
function countdown() {
  const c = course();
  let target = c?.date
    ? new Date(`${c.date}T${c.time || "09:00"}:00`)
    : new Date(Date.now() + 95 * 864e5);
  let diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 864e5);
  diff %= 864e5;
  const h = Math.floor(diff / 36e5);
  diff %= 36e5;
  const m = Math.floor(diff / 6e4);
  const s = Math.floor((diff % 6e4) / 1000);
  return [d, h, m, s].map(toFa);
}
function overallProgress() {
  return Math.round(subjects.reduce((sum, subject) => sum + Number(subject[2]), 0) / subjects.length);
}
function homeView() {
  const c = course();
  const t = countdown();
  const progress = overallProgress();
  return `<div class="page">${header("سلام معین، آماده‌ای؟", "امروز یک قدم کوچک، تو را به قبولی نزدیک‌تر می‌کند.")}
<section class="hero-grid is-progress-banner"><article class="countdown-card"><div class="countdown-main"><div class="countdown-content"><div class="countdown-head"><div><small>زمان باقی‌مانده تا</small><strong>${c?.name || "آزمون وکالت ۱۴۰۵"}</strong></div><button class="countdown-edit" data-edit-time>${svg("clock")} تنظیم زمان</button></div><div class="countdown-time" id="countdown"><div class="time-unit"><b>${t[0]}</b><small>روز</small></div><div class="time-unit"><b>${t[1]}</b><small>ساعت</small></div><div class="time-unit"><b>${t[2]}</b><small>دقیقه</small></div><div class="time-unit"><b>${t[3]}</b><small>ثانیه</small></div></div><div class="countdown-foot">${svg("calendar")} ${c?.date ? `موعد: ${toFa(new Intl.DateTimeFormat("fa-IR", { dateStyle: "long", timeStyle: "short" }).format(new Date(`${c.date}T${c.time || "09:00"}:00`)))}` : "برنامه براساس زمان باقی‌مانده به‌روز می‌شود"}</div></div><div class="overall-ring" style="--overall:${progress * 3.6}deg"><div><strong>${toFa(progress)}٪</strong><small>پیشرفت کل</small></div></div></div></article></section>
${dailyActivityLog()}
<section class="daily-review-callout"><span class="daily-review-icon">${svg("repeat")}</span><div><small>مرور روزانه</small><h2>مطالب روزهای قبل را مرور کن تا یادت نرود</h2><p>مباحثی که زمان مرورشان رسیده، اینجا آماده‌اند.</p></div><button data-route="reviews">شروع مرور روزانه ${svg("arrow")}</button></section><div class="section-head"><div><h2>آماده مرور</h2><p>سه مبحث از مطالعه‌های روزهای قبل</p></div><button class="text-link" data-route="reviews">مشاهده همه</button></div>${reviewSuggestionCards()}</div>`;
}

function dailyActivityLog() {
  const rows = [
    ["حقوق جزا", "فصل ۱ · عناصر جرم", "مطالعه و جزوه", "۴۲ دقیقه", "تکمیل شد"],
    ["حقوق جزا", "فصل ۱ · تست آموزشی", "۲۴ تست", "۱۸ درست", "۷۵٪"],
    ["حقوق مدنی", "اشخاص و محجورین", "مرور سریع", "۱۲ دقیقه", "مرور شد"],
  ];
  return `<section class="daily-log"><div class="daily-log-head"><div><span class="eyebrow">گزارش روزانه من</span><h2>دیروز چه کارهایی انجام دادی؟</h2><p>خلاصه فعالیت‌های ثبت‌شده در روز گذشته</p></div><div class="daily-log-date">${svg("calendar")} دیروز</div></div><div class="daily-log-stats"><div><strong>۵۴</strong><small>دقیقه مطالعه</small></div><div><strong>۲۴</strong><small>تست پاسخ‌داده‌شده</small></div><div><strong>۷۵٪</strong><small>پاسخ صحیح</small></div></div><div class="daily-table-wrap"><table class="daily-table"><thead><tr><th>درس</th><th>مبحث</th><th>فعالیت</th><th>نتیجه</th><th>وضعیت</th></tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, index) => `<td data-label="${["درس", "مبحث", "فعالیت", "نتیجه", "وضعیت"][index]}">${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
}

function reviewSuggestionCards() {
  const items = [
    ["repeat", "مرور اشخاص و محجورین", "حقوق مدنی", "۸ دقیقه", "اولویت بالا"],
    ["quiz", "۱۲ تست شرکت‌های تجاری", "حقوق تجارت", "۱۵ دقیقه", "برای امروز"],
    ["file", "خلاصه صلاحیت دادگاه", "آیین دادرسی مدنی", "۶ دقیقه", "مرور سریع"],
  ];
  return `<section class="review-suggestions">${items.map((item, index) => `<article class="suggestion-card"><div class="suggestion-icon">${svg(item[0])}</div><div class="suggestion-meta"><span>${item[4]}</span><small>${item[2]}</small></div><h3>${item[1]}</h3><p>${item[3]} · پیشنهاد شماره ${toFa(index + 1)}</p><button ${index === 0 ? "data-open-review" : ""}>شروع مرور</button></article>`).join("")}</section>`;
}
function roadmap() {
  const p = studyProgress();
  return `<section class="roadmap-shell"><div class="roadmap">${chapters
    .map((c) => {
      const done = p.completed.includes(c.id),
        current = c.id === p.unlocked,
        locked = c.id > p.unlocked,
        selected = c.id === state.chapter;
      return `<div class="chapter-node ${done ? "is-done" : current ? "is-current" : locked ? "is-locked" : ""} ${selected ? "is-selected" : ""}" style="--chapter:${chapterThemes[c.id - 1]}"><button class="node-button" data-chapter="${c.id}" aria-label="${c.title}">${locked ? svg("lock") : done ? svg("check") : toFa(c.id)}</button><div><strong>${c.title}</strong><small>${c.sub || (done ? "تکمیل شده" : current ? "مرحله فعلی" : locked ? "قفل" : "قابل مشاهده")}</small></div></div>`;
    })
    .join("")}</div></section>`;
}
function subjectCards() {
  return subjects
    .map(
      (s, i) =>
        `<article class="subject-card" style="--subject:${s[3]};--subject-soft:${s[4]};--progress:${s[2]}%"><div class="subject-top"><span class="subject-icon">${svg("scale")}</span><span class="percent">${toFa(s[2])}٪</span></div><h3>${s[0]}</h3><p>${s[1]}</p><div class="progress-bar"><i></i></div><div class="subject-actions"><button data-subject-info="${i}">${svg("info")} مباحث این درس</button><button data-subject="${i}">ورود به قدم‌ها</button></div></article>`,
    )
    .join("");
}
function roadmapView() {
  const p = studyProgress();
  const selectedChapter = state.chapter
    ? `<section class="chapter-reveal">${chapterEntryGuide()}<div class="section-head"><div><span class="eyebrow">ایستگاه انتخاب‌شده</span><h2>درس‌های ${chapterTitle(state.chapter)}</h2><p>یک درس را انتخاب کن تا مسیر مرور و قدم‌های آن باز شود</p></div></div><section class="subjects-grid">${subjectCards()}</section></section>`
    : `<section class="chapter-placeholder">${svg("map")}<div><strong>یک فصل را انتخاب کن</strong><p>تا زمانی که فصل را انتخاب نکنی، درس‌ها و قدم‌های آن نمایش داده نمی‌شوند.</p></div></section>`;
  return `<div class="page">${header("نقشه راه مطالعه", "۱۰ فصل و دو ایستگاه مرور؛ فقط مرحله اکنون را دنبال کن.")}<div class="section-head"><div><h2>مسیر آمادگی آزمون</h2><p>${chapterTitle(p.unlocked)} فعال است · دو مرور نیمه‌جامع میان و پایان مسیر قرار دارند</p></div></div>${roadmap()}${selectedChapter}</div>`;
}
function chapterEntryGuide() {
  const id = state.chapter;
  if ([1, 7].includes(id))
    return `<div class="chapter-entry-guide is-direct"><span>${svg("book")}</span><div><small>ورود مستقیم</small><strong>${chapterTitle(id)} آماده مطالعه است</strong><p>درس را انتخاب کن تا قدم‌های آن به‌ترتیب نمایش داده شوند.</p></div></div>`;
  if ([6, 12].includes(id))
    return `<div class="chapter-entry-guide is-review"><span>${svg("repeat")}</span><div><small>ایستگاه جمع‌بندی</small><strong>${chapterTitle(id)}</strong><p>${chapters[id - 1].sub} را در یک مسیر مرور و تست تثبیت می‌کنی.</p></div></div>`;
  return `<div class="chapter-entry-guide"><div class="entry-stage is-active"><span>۱</span><div><small>ابتدا</small><strong>مرور ${chapterTitle(id - 1)}</strong><p>نکات درس‌های فصل قبل را مرور و تأیید کن.</p></div></div><i>${svg("arrow")}</i><div class="entry-stage"><span>۲</span><div><small>سپس</small><strong>بازشدن کامل ${chapterTitle(id)}</strong><p>محتوای تازه و قدم‌ها به‌ترتیب در دسترس قرار می‌گیرند.</p></div></div></div>`;
}
function courseView() {
  const s = subjects[state.subject],
    p = studyProgress(),
    done = p.completed.includes(state.chapter),
    hasReviewGate = ![1, 7].includes(state.chapter),
    reviewDone = JSON.parse(
      localStorage.getItem("masirChapterReviews") || "[]",
    ).includes(state.chapter),
    showingReview = hasReviewGate && state.part === 1;
  const tabs = hasReviewGate
    ? `<div class="chapter-flow" aria-label="مسیر فصل"><button class="chapter-part ${state.part === 1 ? "is-active" : ""} ${reviewDone ? "is-done" : ""}" data-part="1"><span class="part-number">۱</span><span class="part-copy"><small>دروازه ورود</small><strong>مرور فصل ${toFa(state.chapter - 1)}</strong></span>${reviewDone ? svg("check") : svg("repeat")}</button><div class="part-connector ${reviewDone ? "is-ready" : ""}"><i></i><span>${reviewDone ? "باز شد" : "پس از مرور"}</span><i></i></div><button class="chapter-part ${state.part === 2 ? "is-active" : ""}" data-part="2" ${reviewDone ? "" : "disabled"}><span class="part-number">۲</span><span class="part-copy"><small>مقصد فصل</small><strong>محتوای فصل ${toFa(state.chapter)}</strong></span>${reviewDone ? svg("book") : svg("lock")}</button></div>`
    : `<div class="chapter-flow is-single"><button class="chapter-part is-active"><span class="part-number">۱</span><span class="part-copy"><small>مقصد فصل</small><strong>محتوای فصل ${toFa(state.chapter)}</strong></span>${svg("book")}</button></div>`;
  const body = showingReview
    ? chapterReview(reviewDone)
    : `<section class="lesson-layout"><nav class="lesson-nav">${subjects
        .slice(0, 6)
        .map(
          (x, i) =>
            `<button class="${i === state.subject ? "is-active" : ""}" data-subject="${i}"><span>${toFa(i + 1)}</span>${x[0]}</button>`,
        )
        .join(
          "",
        )}</nav><div class="steps-list">${steps()}<div class="unlock-card ${done ? "is-complete" : ""}"><span class="unlock-icon">${svg(done ? "check" : "lock")}</span><div><strong>${done ? "این فصل تکمیل شده است" : "آماده رفتن به فصل بعدی هستی؟"}</strong><p>${done ? `فصل ${toFa(Math.min(12, state.chapter + 1))} برای تو باز شده است.` : "پس از مرور و تست‌خوانی، پایان فصل را ثبت کن."}</p></div>${!done ? `<button class="primary-button" data-complete-chapter>ثبت پایان فصل و بازکردن فصل ${toFa(Math.min(12, state.chapter + 1))}</button>` : ""}</div></div></section>`;
  return `<div class="page"><div class="course-header"><button class="back-button" data-route="roadmap" aria-label="بازگشت">${svg("arrow")}</button><div><h1>${showingReview ? `مرور فصل ${toFa(state.chapter - 1)}` : s[0]}</h1><p>فصل ${toFa(state.chapter)} · ${showingReview ? "پیش‌نیاز ورود به فصل" : "محتوای تازه"}</p></div></div><section class="chapter-summary"><div><p class="eyebrow">${showingReview ? "ایستگاه مرور" : done ? "تکمیل شده" : "در حال مطالعه"}</p><h2>${showingReview ? `پیش از شروع فصل ${toFa(state.chapter)}، آموخته‌های فصل ${toFa(state.chapter - 1)} را تثبیت کن` : state.chapter === 6 ? "مرور جامع فصل‌های ۱ تا ۵" : "مبانی و مفاهیم کلیدی"}</h2><p>${showingReview ? "درس‌های زیر را یکی‌یکی مرور و تأیید کن؛ سپس محتوای تازه فصل باز می‌شود." : "قدم‌ها را به‌ترتیب کامل کن. مرور فردای هر قدم به شکل خودکار به برنامه روزانه اضافه می‌شود."}</p></div><div class="summary-progress"><strong>${showingReview ? `${toFa(state.reviewed.length)}/${toFa(6)}` : done ? "۱۰۰٪" : "۴۲٪"}</strong></div></section>${tabs}${body}</div>`;
}

function chapterReview(reviewDone) {
  const reviewList = subjects.slice(0, 6);
  const allDone = reviewDone || state.reviewed.length === reviewList.length;
  return `<section class="review-gate"><div class="review-gate-head"><div><span class="eyebrow">مرور فعال</span><h3>درس‌های فصل ${toFa(state.chapter - 1)}</h3><p>فقط نکات مهم این درس‌ها را مرور کن؛ این بخش محتوای جدید ندارد.</p></div><strong>${toFa(state.reviewed.length)} از ${toFa(reviewList.length)}</strong></div><div class="review-subjects">${reviewList
    .map((item, index) => {
      const checked = reviewDone || state.reviewed.includes(index);
      return `<button class="review-subject ${checked ? "is-reviewed" : ""}" data-review-subject="${index}" ${reviewDone ? "disabled" : ""}><span>${checked ? svg("check") : toFa(index + 1)}</span><div><strong>${item[0]}</strong><small>${checked ? "مرور شد" : "نیاز به مرور"}</small></div>${svg("repeat")}</button>`;
    })
    .join(
      "",
    )}</div><div class="review-confirm"><div><strong>${allDone ? "مرور فصل قبل کامل شد" : "ابتدا همه درس‌ها را تأیید کن"}</strong><p>پس از تأیید، بخش دوم و قدم‌های فصل ${toFa(state.chapter)} باز می‌شود.</p></div><button class="primary-button" data-complete-review ${allDone ? "" : "disabled"}>${reviewDone ? "رفتن به محتوای فصل" : "تأیید مرور و بازکردن بخش دوم"}</button></div></section>`;
}
function steps() {
  const titles = [
    "آشنایی و چارچوب مبحث",
    "تعاریف و ارکان اصلی",
    "تحلیل مواد قانونی",
    "نکات آزمونی و استثناها",
    "حل مثال‌های کاربردی",
    "ویدیوی تکمیلی",
    "PDF جمع‌بندی",
    "ارزیابی میان‌مرحله‌ای",
    "مرور نهایی",
    "تست‌خوانی",
  ];
  const current = state.chapter === 2 ? 3 : 1;
  return titles
    .map((t, i) => {
      const number = i + 1;
      const special = i > 7;
      const status =
        number < current
          ? "complete"
          : number === current
            ? "current"
            : number === current + 1
              ? "next"
              : "locked";
      const label =
        status === "complete"
          ? "انجام‌شده"
          : status === "current"
            ? "قدم فعلی"
            : status === "next"
              ? "قدم بعدی"
              : "قفل‌شده";
      const isOpen = state.step === number;
      return `<article class="step-card step-${status} ${special ? "checkpoint" : ""} ${isOpen ? "is-open is-selected" : ""}"><button class="step-head" data-step="${number}" ${status === "locked" ? "disabled" : ""}><span class="step-number">${status === "complete" ? svg("check") : toFa(number)}</span><span class="step-copy"><strong>${t}</strong><small>${special ? (i === 8 ? "تثبیت و بازیابی فعال" : "تحلیل تست‌های پرتکرار") : "ویدئو، جزوه و تمرین"}</small></span><span class="step-status">${label}</span>${svg(status === "locked" ? "lock" : "chevron").replace("<svg", '<svg class="step-chevron"')}</button><div class="step-content">${resources(i)}</div></article>`;
    })
    .join("");
}
function resources(i) {
  if (i === 9)
    return (
      resource("quiz", "مجموعه تست تحلیلی", "۲۴ تست · پاسخ تشریحی") +
      resource("video", "ویدیوی تست‌خوانی", "۱۸ دقیقه")
    );
  if (i === 8)
    return (
      resource("repeat", "مرور هوشمند این فصل", "براساس نقاط ضعف تو") +
      resource("file", "برگه خلاصه نهایی", "PDF · ۱۲ صفحه")
    );
  return (
    resource("video", "جلسه آموزشی اول", "۲۶ دقیقه") +
    resource("video", "جلسه آموزشی دوم", i % 2 ? "۱۸ دقیقه" : "۳۲ دقیقه") +
    resource("file", "جزوه این مبحث", "PDF · ۱۸ صفحه") +
    (i === 3
      ? `<div class="resource is-locked"><span class="resource-icon">${svg("lock")}</span><span><strong>آزمونک این قدم</strong><small>بعد از مشاهده ویدئو باز می‌شود</small></span></div>`
      : "")
  );
}
function resource(icon, title, meta) {
  return `<div class="resource"><span class="resource-icon">${svg(icon)}</span><span><strong>${title}</strong><small>${meta}</small></span><button>باز کردن</button></div>`;
}
function simpleView(type) {
  if (type === "reviews")
    return `<div class="page">${header("مرور روزانه", "مطالب روزهای قبل را پیش از فراموشی دوباره بازیابی کن.")}<div class="review-page-head"><div><strong>۳ مبحث از روزهای قبل</strong><span>مجموع زمان پیشنهادی: ۲۹ دقیقه</span></div><div class="review-score">${svg("spark")} تثبیت امروز: ۷۸٪</div></div>${reviewSuggestionCards()}</div>`;
  return `<div class="page">${header("گزارش پیشرفت", "وضعیت هر درس را مستقل و قابل مقایسه ببین.")}<section class="progress-overview"><div><span>پیشرفت کل دوره</span><strong>۶۱٪</strong><small>۱۷٪ رشد در ۳۰ روز گذشته</small></div><div><span>فصل فعال</span><strong>۲</strong><small>مرور فصل یک</small></div><div><span>زمان مطالعه</span><strong>۴۸ ساعت</strong><small>این دوره</small></div></section><div class="section-head"><div><h2>پیشرفت درس‌ها</h2><p>درصد، فصل تکمیل‌شده و فعالیت بعدی هر درس</p></div></div><section class="subject-progress-list">${subjects.map((s) => `<article class="subject-progress" style="--subject:${s[3]};--progress:${s[2]}%"><div class="progress-title"><span class="subject-icon">${svg("scale")}</span><div><strong>${s[0]}</strong><small>${s[1]}</small></div><b>${toFa(s[2])}٪</b></div><div class="progress-bar"><i></i></div><p>فعالیت بعدی: ${+s[2] === 100 ? "مرور دوره‌ای" : "ادامه قدم فعلی"}</p></article>`).join("")}</section></div>`;
}
function render() {
  setActive(state.route);
  document.documentElement.style.setProperty(
    "--chapter",
    chapterThemes[state.chapter - 1],
  );
  app.innerHTML =
    state.route === "home"
      ? homeView()
      : state.route === "roadmap"
        ? roadmapView()
        : state.route === "course"
          ? courseView()
          : simpleView(state.route);
  app.focus({ preventScroll: true });
  bindDynamic();
}
function bindDynamic() {
  document.querySelectorAll("[data-route]").forEach(
    (b) =>
      (b.onclick = () => {
        state.route = b.dataset.route;
        if (state.route === "roadmap") state.chapter = null;
        render();
      }),
  );
  document.querySelectorAll("[data-subject]").forEach(
    (b) =>
      (b.onclick = () => {
        state.subject = +b.dataset.subject;
        state.route = "course";
        const infoDialog = document.getElementById("subjectInfoDialog");
        if (infoDialog?.open) infoDialog.close();
        render();
      }),
  );
  document.querySelectorAll("[data-subject-info]").forEach(
    (b) =>
      (b.onclick = () => {
        const index = +b.dataset.subjectInfo;
        const dialog = document.getElementById("subjectInfoDialog");
        document.getElementById("subjectInfoTitle").textContent = subjects[index][0];
        document.getElementById("subjectInfoText").textContent = `در فصل ${toFa(state.chapter)} این چهار بخش را می‌خوانی:`;
        document.getElementById("subjectInfoTopics").innerHTML = subjectTopics[index]
          .map((topic, topicIndex) => `<li><span>${toFa(topicIndex + 1)}</span>${topic}</li>`)
          .join("");
        document.getElementById("subjectInfoStart").dataset.subject = index;
        dialog.showModal();
      }),
  );
  document.querySelectorAll("[data-chapter]").forEach(
    (b) =>
      (b.onclick = () => {
        const n = +b.dataset.chapter;
        if (n <= studyProgress().unlocked) {
          state.chapter = n;
          const completedReviews = JSON.parse(
            localStorage.getItem("masirChapterReviews") || "[]",
          );
          state.part = ![1, 7].includes(n) && completedReviews.includes(n) ? 2 : 1;
          state.reviewed = [];
          state.step = n === 2 ? 3 : 1;
          state.subject = 0;
          render();
        } else {
          showToast(`برای باز شدن «${chapterTitle(n)}»، ابتدا «${chapterTitle(n - 1)}» را تکمیل کن.`);
        }
      }),
  );
  document.querySelectorAll("[data-part]").forEach(
    (b) =>
      (b.onclick = () => {
        state.part = +b.dataset.part;
        render();
      }),
  );
  document.querySelectorAll("[data-review-subject]").forEach(
    (b) =>
      (b.onclick = () => {
        const id = +b.dataset.reviewSubject;
        const nextReviewed = state.reviewed.includes(id)
          ? state.reviewed.filter((item) => item !== id)
          : [...state.reviewed, id];
        state.reviewed = nextReviewed;
        if (nextReviewed.length === subjects.slice(0, 6).length) {
          const saved = JSON.parse(
            localStorage.getItem("masirChapterReviews") || "[]",
          );
          if (!saved.includes(state.chapter)) saved.push(state.chapter);
          localStorage.setItem("masirChapterReviews", JSON.stringify(saved));
          state.part = 2;
          state.step = state.chapter === 2 ? 3 : 1;
        }
        render();
      }),
  );
  document.querySelectorAll("[data-complete-review]").forEach(
    (b) =>
      (b.onclick = () => {
        const saved = JSON.parse(
          localStorage.getItem("masirChapterReviews") || "[]",
        );
        if (!saved.includes(state.chapter)) saved.push(state.chapter);
        localStorage.setItem("masirChapterReviews", JSON.stringify(saved));
        state.part = 2;
        state.step = state.chapter === 2 ? 3 : 1;
        render();
      }),
  );
  document.querySelectorAll("[data-step]").forEach(
    (b) =>
      (b.onclick = () => {
        state.step = +b.dataset.step;
        render();
      }),
  );
  document.querySelectorAll("[data-theme-toggle]").forEach(
    (b) =>
      (b.onclick = () => {
        const next = document.body.dataset.theme === "dark" ? "light" : "dark";
        document.body.dataset.theme = next;
        localStorage.setItem("masirTheme", next);
        render();
      }),
  );
  document.querySelectorAll("[data-edit-time]").forEach(
    (b) =>
      (b.onclick = () => {
        const saved = course();
        if (saved) {
          document.getElementById("courseInput").value = saved.name;
          document.getElementById("examDateInput").value = saved.date;
          document.getElementById("examTimeInput").value =
            saved.time || "09:00";
        }
        document.getElementById("setupDialog").showModal();
      }),
  );
  document
    .querySelectorAll("[data-open-review]")
    .forEach(
      (b) =>
        (b.onclick = () => document.getElementById("reviewDialog").showModal()),
    );
  document.querySelectorAll("[data-complete-chapter]").forEach(
    (b) =>
      (b.onclick = () => {
        const p = studyProgress();
        if (!p.completed.includes(state.chapter))
          p.completed.push(state.chapter);
        p.unlocked = Math.min(12, Math.max(p.unlocked, state.chapter + 1));
        saveStudyProgress(p);
        render();
      }),
  );
}
function showToast(message) {
  const toast = document.getElementById("roadmapToast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 3600);
}
document
  .querySelectorAll("[data-close]")
  .forEach(
    (b) => (b.onclick = () => document.getElementById(b.dataset.close).close()),
  );
document.getElementById("supportFab").onclick = () =>
  document.getElementById("supportDialog").showModal();
document.getElementById("supportForm").onsubmit = (e) => {
  e.preventDefault();
  const input = document.getElementById("supportInput");
  if (!input.value.trim()) return;
  document
    .getElementById("supportMessages")
    .insertAdjacentHTML(
      "beforeend",
      `<div class="user-message">${input.value.replace(/[<>]/g, "")}</div><div class="bot-message">پیامت ثبت شد. برای راهنمایی دقیق‌تر، نام درس یا قدم موردنظرت را هم بنویس.</div>`,
    );
  input.value = "";
};
const tourContent = {
  home: [
    [
      "مسیرهای اصلی",
      "از این نوار بین خانه، نقشه راه، مرور روزانه و گزارش پیشرفت جابه‌جا می‌شوی.",
      "nav",
    ],
    [
      "زمان تا آزمون",
      "تاریخ و ساعت آزمون را اینجا تنظیم کن؛ شمارش معکوس و پیشنهادهای روزانه براساس همین زمان به‌روز می‌شوند.",
      ".countdown-card",
    ],
    [
      "برنامه امروز",
      "کار اصلی امروز و زمان تقریبی هر فعالیت اینجا جمع شده تا بدون سردرگمی شروع کنی.",
      ".today-card",
    ],
    [
      "پیشنهادهای شخصی",
      "این کارت‌ها مرورهای کوتاهی هستند که براساس درس‌های قبلی و اولویت حافظه به تو پیشنهاد می‌شوند.",
      ".review-suggestions",
    ],
  ],
  roadmap: [
    [
      "نقشه راه فصل‌ها",
      "فصل فعال رنگی است، فصل‌های تمام‌شده علامت تأیید دارند و فصل‌های بعدی تا رسیدن نوبتشان قفل می‌مانند.",
      ".roadmap-shell",
    ],
    [
      "انتخاب فصل",
      "روی هر فصل بازشده بزن تا درس‌های همان فصل پایین صفحه نمایش داده شوند.",
      ".roadmap-shell",
    ],
    [
      "درس‌های فصل",
      "هر کارت درصد پیشرفت همان درس را نشان می‌دهد؛ با انتخاب درس وارد قدم‌های آن می‌شوی.",
      ".subjects-grid",
    ],
  ],
  course: [
    [
      "وضعیت فصل",
      "این بخش می‌گوید اکنون در مرور فصل قبلی هستی یا در محتوای تازه فصل جدید.",
      ".chapter-summary",
    ],
    [
      "مسیر دو‌بخشی فصل",
      "ابتدا مرور فصل قبل را کامل می‌کنی؛ سپس بخش دوم به‌طور خودکار باز می‌شود و قدم‌های فصل جدید را می‌بینی.",
      ".chapter-flow",
    ],
    [
      "مرور پیش‌نیاز",
      "هر درس را پس از مرور تأیید کن. با تأیید آخرین درس، مستقیم وارد محتوای فصل جدید می‌شوی.",
      ".review-gate",
    ],
    [
      "قدم‌های یادگیری",
      "قدم فعلی برجسته است، قدم بعدی آماده و بقیه قفل‌اند. هر قدم شامل ویدئو، جزوه یا تمرین است.",
      ".steps-list",
    ],
  ],
  reviews: [
    [
      "خلاصه مرور امروز",
      "اینجا تعداد مرورهای آماده، زمان کل و میزان تثبیت امروز را می‌بینی.",
      ".review-page-head",
    ],
    [
      "کارت‌های مرور",
      "هر کارت می‌گوید چه مبحثی، از کدام درس و با چه اولویتی باید مرور شود.",
      ".review-suggestions",
    ],
    [
      "چرا این پیشنهاد؟",
      "پیشنهادها از قدم‌هایی ساخته می‌شوند که قبلاً خوانده‌ای و امروز زمان مناسب بازیابی آن‌هاست.",
      ".review-suggestions",
    ],
  ],
  progress: [
    [
      "تصویر کلی دوره",
      "پیشرفت کل، فصل فعال و مجموع زمان مطالعه را در یک نگاه می‌بینی.",
      ".progress-overview",
    ],
    [
      "پیشرفت هر درس",
      "هر ردیف درصد، تعداد فصل‌های تکمیل‌شده و فعالیت بعدی همان درس را جدا نشان می‌دهد.",
      ".subject-progress-list",
    ],
    [
      "تشخیص اولویت",
      "درسی که درصد پایین‌تری دارد به توجه بیشتری نیاز دارد؛ فعالیت بعدی زیر همان کارت نوشته شده است.",
      ".subject-progress-list",
    ],
  ],
};
let tourIndex = 0;
let activeTour = [];
function tourTarget(selector) {
  if (selector === "nav")
    return document.querySelector(
      window.innerWidth <= 760 ? ".mobile-nav" : ".sidebar",
    );
  let target = document.querySelector(selector);
  if (!target && state.route === "course" && selector === ".review-gate")
    target = document.querySelector(".lesson-layout");
  return target;
}
function closeTour() {
  document.querySelector(".tour-target")?.classList.remove("tour-target");
  const dialog = document.getElementById("tourDialog");
  if (dialog.open) dialog.close();
}
function showTourStep() {
  document.querySelector(".tour-target")?.classList.remove("tour-target");
  const [title, text, selector] = activeTour[tourIndex];
  const target = tourTarget(selector);
  if (target) {
    target.classList.add("tour-target");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  document.getElementById("tourTitle").textContent = title;
  document.getElementById("tourText").textContent = text;
  document.getElementById("tourCounter").textContent =
    `${toFa(tourIndex + 1)} از ${toFa(activeTour.length)}`;
  document.getElementById("tourDots").innerHTML = activeTour
    .map(
      (_, index) => `<i class="${index === tourIndex ? "is-active" : ""}"></i>`,
    )
    .join("");
  document.getElementById("tourPrev").disabled = tourIndex === 0;
  document.getElementById("tourNext").textContent =
    tourIndex === activeTour.length - 1 ? "پایان" : "بعدی";
}
document.getElementById("explainPage").onclick = () => {
  document.getElementById("supportDialog").close();
  activeTour = tourContent[state.route] || tourContent.home;
  tourIndex = 0;
  const dialog = document.getElementById("tourDialog");
  dialog.show();
  showTourStep();
};
document.getElementById("tourPrev").onclick = () => {
  if (tourIndex > 0) {
    tourIndex -= 1;
    showTourStep();
  }
};
document.getElementById("tourNext").onclick = () => {
  if (tourIndex >= activeTour.length - 1) closeTour();
  else {
    tourIndex += 1;
    showTourStep();
  }
};
document.getElementById("tourClose").onclick = closeTour;
document.getElementById("setupForm").onsubmit = (e) => {
  e.preventDefault();
  localStorage.setItem(
    "masirCourse",
    JSON.stringify({
      name: document.getElementById("courseInput").value,
      date: document.getElementById("examDateInput").value,
      time: document.getElementById("examTimeInput").value,
    }),
  );
  document.getElementById("setupDialog").close();
  render();
};
document.querySelector('[data-action="start-review"]').onclick = () => {
  document.getElementById("reviewDialog").close();
  state.route = "reviews";
  render();
};
const defaultDate = new Date(Date.now() + 95 * 864e5);
document.getElementById("examDateInput").value = defaultDate
  .toISOString()
  .slice(0, 10);
document.getElementById("examDateInput").min = new Date()
  .toISOString()
  .slice(0, 10);
document
  .querySelectorAll(".mobile-nav [data-route],.sidebar [data-route]")
  .forEach(
    (b) =>
      (b.onclick = () => {
        state.route = b.dataset.route;
        if (state.route === "roadmap") state.chapter = null;
        render();
      }),
  );
document.body.dataset.theme =
  localStorage.getItem("masirTheme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
render();
if (!course())
  setTimeout(() => document.getElementById("setupDialog").showModal(), 500);
setInterval(() => {
  if (state.route === "home") {
    const el = document.getElementById("countdown");
    if (el) {
      const t = countdown();
      el.querySelectorAll("b").forEach((b, i) => (b.textContent = t[i]));
    }
  }
}, 1000);
