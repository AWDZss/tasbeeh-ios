const dhikrList = [
  {
    id: "subhan-allah-wa-bihamdih",
    title: "سبحان الله وبحمده",
    subtitle: "من قالها 100 مرة في يوم حُطّت خطاياه ولو كانت مثل زبد البحر. صحيح البخاري 6405 ومسلم 2691.",
  },
  {
    id: "alhamdulillah",
    title: "الحمد لله",
    subtitle: "قال النبي ﷺ: الحمد لله تملأ الميزان. صحيح مسلم 223.",
  },
  {
    id: "allahu-akbar",
    title: "الله أكبر",
    subtitle: "من أذكار دبر الصلاة: التكبير 33 مع التسبيح والتحميد، وتمام المئة سبب لمغفرة الخطايا. صحيح مسلم 597.",
  },
  {
    id: "la-ilaha-illa-allah-wahdah",
    title: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    subtitle: "من قالها 100 مرة في يوم كانت له عدل عشر رقاب، وكتبت له 100 حسنة، ومحيت عنه 100 سيئة. صحيح البخاري 3293 ومسلم 2691.",
  },
  {
    id: "astaghfirullah",
    title: "أستغفر الله وأتوب إليه",
    subtitle: "كان النبي ﷺ يستغفر الله ويتوب إليه في اليوم أكثر من 70 مرة. صحيح البخاري 6307.",
  },
];

const learningCategories = {
  morningEvening: {
    title: "الصباح والمساء",
    items: [
      {
        text: "اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور",
        target: 1,
        benefit: "فيه إقرار بأن حياة العبد وموته ومصيره كله بيد الله، فيبدأ يومه متوكلًا على الله.",
        source: "حكم الألباني: صحيح. المصدر: صحيح الأدب المفرد 911.",
        url: "https://dorar.net/hadith/search?q=%D8%A7%D9%84%D9%84%D9%87%D9%85+%D8%A8%D9%83+%D8%A7%D8%B5%D8%A8%D8%AD%D9%86%D8%A7+%D9%88+%D8%A8%D9%83+%D8%A7%D9%85%D8%B3%D9%8A%D9%86%D8%A7",
      },
      {
        text: "اللهم بك أمسينا، وبك أصبحنا، وبك نحيا، وبك نموت، وإليك المصير",
        target: 1,
        benefit: "فيه تسليم أمر الليل والحياة والموت والمصير إلى الله، فيدخل العبد مساءه متوكلًا عليه.",
        source: "حكم الألباني: صحيح. المصدر: صحيح الأدب المفرد 911.",
        url: "https://dorar.net/hadith/search?q=%D8%A7%D9%84%D9%84%D9%87%D9%85+%D8%A8%D9%83+%D8%A7%D8%B5%D8%A8%D8%AD%D9%86%D8%A7+%D9%88+%D8%A8%D9%83+%D8%A7%D9%85%D8%B3%D9%8A%D9%86%D8%A7",
      },
      {
        text: "سيد الاستغفار: اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك، وأبوء لك بذنبي، فاغفر لي؛ فإنه لا يغفر الذنوب إلا أنت",
        target: 1,
        benefit: "من قاله موقنًا به في يومه أو ليلته ثم مات فهو من أهل الجنة.",
        source: "حكم الألباني: صحيح. التخريج: أخرجه البخاري 6306.",
        url: "https://dorar.net/hadith-category/cat/d4e27c960bd6fab75f2f855583c78384?all=&page=2",
      },
      {
        text: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم",
        target: 3,
        benefit: "من قاله ثلاث مرات في الصباح أو المساء كان سببًا للسلامة من الضرر بإذن الله.",
        source: "حكم الألباني: صحيح أو حسن صحيح. صحيح أبي داود 5088 وصحيح الترمذي 3388.",
        url: "https://dorar.net/hadith/sharh/36007",
      },
      {
        text: "أعوذ بكلمات الله التامات من شر ما خلق",
        target: 3,
        benefit: "من قاله ثلاث مرات في المساء لم تضره حمة تلك الليلة بإذن الله.",
        source: "حكم أحمد شاكر: إسناده صحيح. وأصله في صحيح مسلم 2709.",
        url: "https://dorar.net/h/45FEikQb?osoul=1",
      },
      {
        text: "اللهم فاطر السماوات والأرض، عالم الغيب والشهادة، رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي ومن شر الشيطان وشركه",
        target: 1,
        benefit: "فيه حماية من شر النفس ووسوسة الشيطان وشركه، ولذلك أوصى به النبي ﷺ في الصباح والمساء وعند النوم.",
        source: "حكم الألباني: صحيح. المصدر: صحيح الأدب المفرد 913.",
        url: "https://dorar.net/h/5ERhPgdG",
      },
      {
        text: "يا حي يا قيوم برحمتك أستغيث، أصلح لي شأني كله، ولا تكلني إلى نفسي طرفة عين",
        target: 1,
        benefit: "فيه طلب إصلاح الشأن كله، والنجاة من ضعف النفس والاعتماد عليها ولو لحظة.",
        source: "حكم الألباني: حسن. المصدر: صحيح الجامع 5820.",
        url: "https://dorar.net/h/YsQbIip8",
      },
      {
        text: "اللهم صل وسلم على نبينا محمد",
        target: 10,
        benefit: "ورد في فضل الصلاة على النبي ﷺ صباحًا ومساءً إدراك الشفاعة يوم القيامة.",
        source: "حكم صديق خان: إسناده جيد.",
        url: "https://dorar.net/h/Y60270ea?osoul=1",
      },
    ],
  },
  once: {
    title: "مرة واحدة",
    items: [
      {
        text: "يا حي يا قيوم برحمتك أستغيث، أصلح لي شأني كله، ولا تكلني إلى نفسي طرفة عين",
        target: 1,
        benefit: "فيه طلب إصلاح الشأن كله، والنجاة من ضعف النفس والاعتماد عليها ولو لحظة.",
        source: "حكم الألباني: حسن. المصدر: صحيح الجامع 5820.",
        url: "https://dorar.net/h/YsQbIip8",
      },
      {
        text: "اللهم فاطر السماوات والأرض، عالم الغيب والشهادة، رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي ومن شر الشيطان وشركه",
        target: 1,
        benefit: "فيه حماية من شر النفس ووسوسة الشيطان وشركه، ولذلك أوصى به النبي ﷺ في الصباح والمساء وعند النوم.",
        source: "حكم الألباني: صحيح. المصدر: صحيح الأدب المفرد 913.",
        url: "https://dorar.net/h/5ERhPgdG",
      },
      {
        text: "سبحان الله وبحمده",
        target: 100,
        benefit: "من قالها في يوم مئة مرة حطت خطاياه ولو كانت مثل زبد البحر.",
        source: "حكم شعيب الأرناؤوط: إسناده صحيح. التخريج: البخاري 6405.",
        url: "https://dorar.net/h/QaSuVdPY?osoul=1",
      },
    ],
  },
  protection: {
    title: "التحصين",
    items: [
      {
        text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير",
        target: 100,
        benefit: "من قالها مئة مرة كانت له حرزًا من الشيطان يومه ذلك حتى يمسي.",
        source: "حكم مسلم: صحيح. التخريج: أخرجه البخاري 3293 ومسلم 2691.",
        url: "https://dorar.net/hadith-category/cat/d3918cf40b073d49fac95bda7febf8e8",
      },
      {
        text: "بسم الله",
        target: 1,
        benefit: "ذكر الله عند دخول البيت وعند الطعام يمنع الشيطان من المبيت والعشاء مع أهل البيت.",
        source: "حكم الألباني: صحيح. التخريج: أخرجه مسلم 2018.",
        url: "https://dorar.net/hadith-category/cat/1eebb5f4fb",
      },
      {
        text: "أعوذ بالله من الشيطان الرجيم",
        target: 1,
        benefit: "عند سماع نهيق الحمير يشرع التعوذ بالله من الشيطان؛ لأنها رأت شيطانًا.",
        source: "حكم الألباني: صحيح. المصدر: صحيح الجامع 611.",
        url: "https://dorar.net/hadith-category/cat/b4d834ade002177de1ff092f753606d0",
      },
      {
        text: "أعوذ بكلمات الله التامات من شر ما خلق",
        target: 1,
        benefit: "من قالها عند نزول منزل لم يضره شيء حتى يرتحل من منزله ذلك.",
        source: "حكم مسلم: صحيح. التخريج: صحيح مسلم 2708.",
        url: "https://dorar.net/hadith/sharh/20531",
      },
      {
        text: "اللهم فاطر السماوات والأرض، عالم الغيب والشهادة، رب كل شيء ومليكه، أشهد أن لا إله إلا أنت، أعوذ بك من شر نفسي ومن شر الشيطان وشركه",
        target: 1,
        benefit: "فيه استعاذة من شر النفس ووسوسة الشيطان وشركه.",
        source: "حكم الألباني: صحيح. المصدر: صحيح الأدب المفرد 913.",
        url: "https://dorar.net/h/5ERhPgdG",
      },
    ],
  },
};

const learningCategoryKeys = [...Object.keys(learningCategories), "custom"];
const defaultCustomLearningItems = [
  {
    id: "custom-subhan-allah-wa-bihamdih",
    text: "سبحان الله وبحمده",
    target: 100,
    benefit: "تغفر الذنوب ولو كانت مثل زبد البحر.",
    source: "حديث صحيح في فضل سبحان الله وبحمده.",
    url: "",
  },
  {
    id: "custom-la-ilaha-illa-allah",
    text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
    target: 100,
    benefit: "كأنه عتق 10 رقاب، وتكتب له 100 حسنة، وتمحى عنه 100 سيئة، وتكون حرزًا من الشيطان في يومه.",
    source: "حديث صحيح في الصحيحين.",
    url: "",
  },
  {
    id: "custom-ayat-al-kursi",
    text: "آية الكرسي بعد كل صلاة",
    target: 1,
    benefit: "لا يمنعه من دخول الجنة إلا الموت.",
    source: "ورد في فضل قراءتها دبر الصلاة.",
    url: "",
  },
  {
    id: "custom-la-hawla",
    text: "لا حول ولا قوة إلا بالله",
    target: 1,
    benefit: "كنز من كنوز الجنة، وفيها تفويض الأمر لله وطلب العون منه.",
    source: "حديث صحيح: كنز من كنوز الجنة.",
    url: "",
  },
];

const storageKey = "tasbeeh-app-state";
const todayKey = new Date().toISOString().slice(0, 10);

const elements = {
  count: document.querySelector("#count"),
  targetLabel: document.querySelector("#targetLabel"),
  ringFill: document.querySelector("#ringFill"),
  tapButton: document.querySelector("#tapButton"),
  openProgressPage: document.querySelector("#openProgressPage"),
  openLearningPage: document.querySelector("#openLearningPage"),
  lapTargetForm: document.querySelector("#lapTargetForm"),
  lapTargetInput: document.querySelector("#lapTargetInput"),
  lapTargetCompact: document.querySelector("#lapTargetCompact"),
  lapTargetCompactValue: document.querySelector("#lapTargetCompactValue"),
  dhikrPanel: document.querySelector("#dhikrPanel"),
  dhikrTitle: document.querySelector("#dhikrTitle"),
  dhikrSubtitle: document.querySelector("#dhikrSubtitle"),
  prevDhikr: document.querySelector("#prevDhikr"),
  nextDhikr: document.querySelector("#nextDhikr"),
  addDhikrToggle: document.querySelector("#addDhikrToggle"),
  deleteDhikrButton: document.querySelector("#deleteDhikrButton"),
  customDhikrModal: document.querySelector("#customDhikrModal"),
  customDhikrForm: document.querySelector("#customDhikrForm"),
  customDhikrInput: document.querySelector("#customDhikrInput"),
  customDhikrBenefitInput: document.querySelector("#customDhikrBenefitInput"),
  closeDhikrModal: document.querySelector("#closeDhikrModal"),
  dhikrListPage: document.querySelector("#dhikrListPage"),
  dhikrListBody: document.querySelector("#dhikrListBody"),
  addDhikrFromList: document.querySelector("#addDhikrFromList"),
  closeDhikrList: document.querySelector("#closeDhikrList"),
  progressPage: document.querySelector("#progressPage"),
  closeProgressPage: document.querySelector("#closeProgressPage"),
  weeklyTotal: document.querySelector("#weeklyTotal"),
  weeklyAverage: document.querySelector("#weeklyAverage"),
  weeklyCircleChart: document.querySelector("#weeklyCircleChart"),
  dailyProgressList: document.querySelector("#dailyProgressList"),
  learningPage: document.querySelector("#learningPage"),
  closeLearningPage: document.querySelector("#closeLearningPage"),
  learningTabs: document.querySelectorAll(".learning-tab"),
  learningStepLabel: document.querySelector("#learningStepLabel"),
  learningDhikrText: document.querySelector("#learningDhikrText"),
  learningBenefitText: document.querySelector("#learningBenefitText"),
  learningSourceText: document.querySelector("#learningSourceText"),
  learningCountText: document.querySelector("#learningCountText"),
  learningTargetStat: document.querySelector("#learningTargetStat"),
  learningTargetText: document.querySelector("#learningTargetText"),
  learningProgressFill: document.querySelector("#learningProgressFill"),
  learningMessageText: document.querySelector("#learningMessageText"),
  learningSayButton: document.querySelector("#learningSayButton"),
  learningPrevButton: document.querySelector("#learningPrevButton"),
  learningResetButton: document.querySelector("#learningResetButton"),
  learningCustomForm: document.querySelector("#learningCustomForm"),
  learningCustomFields: document.querySelector("#learningCustomFields"),
  learningCustomText: document.querySelector("#learningCustomText"),
  learningCustomBenefit: document.querySelector("#learningCustomBenefit"),
  learningCustomTarget: document.querySelector("#learningCustomTarget"),
  learningCurrentTargetRow: document.querySelector("#learningCurrentTargetRow"),
  learningCurrentTarget: document.querySelector("#learningCurrentTarget"),
  learningSaveTargetButton: document.querySelector("#learningSaveTargetButton"),
  learningAddButton: document.querySelector("#learningAddButton"),
  learningDeleteButton: document.querySelector("#learningDeleteButton"),
  appToast: document.querySelector("#appToast"),
  sessionsToday: document.querySelector("#sessionsToday"),
  totalCount: document.querySelector("#totalCount"),
};

const defaultState = {
  count: 0,
  target: 33,
  total: 0,
  sessionsDate: todayKey,
  sessions: 0,
  dailyStats: {},
  notificationsSent: {},
  progressByDhikr: {},
  learning: {
    category: "morningEvening",
    indexes: {},
    counts: {},
    customItems: [],
  },
  dhikrIndex: 0,
  deletedDhikrIds: [],
  customDhikr: [],
  feedback: true,
};

let state = loadState();
let isAddingDhikr = false;
let isDhikrListOpen = false;
let isProgressOpen = false;
let isLearningOpen = false;
let isLapTargetVisible = false;
let isLearningCustomFieldsOpen = false;
let isLearningTargetEditorOpen = false;
let learningMoveTimer = null;
let voiceController = null;

function getNativePreferences() {
  return window.Capacitor?.Plugins?.Preferences;
}

function parseSavedState(value) {
  if (!value) return null;

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function getDateKey(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
}

function getLastSevenDays() {
  return Array.from({ length: 7 }, (_, index) => getDateKey(index - 6));
}

function getLearningCategoryItems(key, sourceState = state) {
  if (key === "custom") {
    return Array.isArray(sourceState.learning?.customItems) ? sourceState.learning.customItems : defaultCustomLearningItems;
  }
  return learningCategories[key].items;
}

function getLearningCategoryTitle(key) {
  return key === "custom" ? "تخصيص" : learningCategories[key].title;
}

function createLearningCounts(sourceState = defaultState) {
  return Object.fromEntries(learningCategoryKeys.map((key) => [key, getLearningCategoryItems(key, sourceState).map(() => 0)]));
}

function createLearningIndexes() {
  return Object.fromEntries(learningCategoryKeys.map((key) => [key, 0]));
}

function getArabicDayName(dateKey) {
  return new Intl.DateTimeFormat("ar-SA", { weekday: "short" }).format(new Date(`${dateKey}T12:00:00`));
}

function normalizeState(saved) {
  const merged = { ...defaultState, ...saved };
  merged.deletedDhikrIds = Array.isArray(merged.deletedDhikrIds) ? merged.deletedDhikrIds : [];
  merged.customDhikr = Array.isArray(merged.customDhikr) ? merged.customDhikr : [];
  merged.customDhikr = merged.customDhikr.map((dhikr, index) => ({
    id: dhikr.id || `saved-custom-${index}-${dhikr.title || "dhikr"}`,
    title: dhikr.title || "ذكر مخصص",
    subtitle: dhikr.subtitle || "",
  }));

  merged.target = Math.max(1, Number(merged.target) || defaultState.target);
  merged.count = Math.min(Math.max(0, Number(merged.count) || 0), merged.target);
  merged.total = Math.max(0, Number(merged.total) || 0);
  merged.sessions = Math.max(0, Number(merged.sessions) || 0);
  merged.dailyStats =
    merged.dailyStats && typeof merged.dailyStats === "object" && !Array.isArray(merged.dailyStats)
      ? merged.dailyStats
      : {};
  Object.values(merged.dailyStats).forEach((day) => {
    day.total = Math.max(0, Number(day.total) || 0);
  });
  if (!merged.dailyStats[todayKey]) {
    merged.dailyStats[todayKey] = { total: 0 };
  }
  merged.notificationsSent =
    merged.notificationsSent && typeof merged.notificationsSent === "object" && !Array.isArray(merged.notificationsSent)
      ? merged.notificationsSent
      : {};
  merged.learning =
    merged.learning && typeof merged.learning === "object" && !Array.isArray(merged.learning)
      ? merged.learning
      : {};
  merged.learning.customItems =
    Array.isArray(merged.learning.customItems) && merged.learning.customItems.length > 0
      ? merged.learning.customItems
      : defaultCustomLearningItems;
  merged.learning.customItems = merged.learning.customItems.map((item, index) => ({
    id: item.id || `custom-learning-${Date.now()}-${index}`,
    text: item.text || "ذكر مخصص",
    target: Math.max(1, Math.min(Number(item.target) || 1, 99999)),
    benefit: item.benefit || "فائدة الذكر",
    source: item.source || "ذكر مخصص",
    url: item.url || "",
  }));
  merged.learning.category = learningCategoryKeys.includes(merged.learning.category) ? merged.learning.category : "morningEvening";
  merged.learning.indexes = { ...createLearningIndexes(), ...(merged.learning.indexes || {}) };
  merged.learning.counts = { ...createLearningCounts(merged), ...(merged.learning.counts || {}) };
  learningCategoryKeys.forEach((key) => {
    const items = getLearningCategoryItems(key, merged);
    merged.learning.indexes[key] = Math.min(Math.max(Number(merged.learning.indexes[key]) || 0, 0), items.length - 1);
    merged.learning.counts[key] = Array.isArray(merged.learning.counts[key]) ? merged.learning.counts[key] : [];
    merged.learning.counts[key] = items.map((item, index) =>
      Math.min(Math.max(Number(merged.learning.counts[key][index]) || 0, 0), item.target)
    );
  });
  merged.progressByDhikr =
    merged.progressByDhikr && typeof merged.progressByDhikr === "object" && !Array.isArray(merged.progressByDhikr)
      ? merged.progressByDhikr
      : {};

  Object.values(merged.progressByDhikr).forEach((progress) => {
    progress.target = Math.max(1, Math.min(Number(progress.target || merged.target) || defaultState.target, 99999));
    progress.lapGoal = Math.max(1, Math.min(Number(progress.lapGoal) || 1, 9999));
    progress.count = Math.min(Math.max(0, Number(progress.count) || 0), progress.target);
    progress.laps = Math.max(0, Number(progress.laps) || 0);
    progress.total = Math.max(0, Number(progress.total) || 0);
  });

  if (merged.sessionsDate !== todayKey) {
    merged.sessionsDate = todayKey;
    merged.count = 0;
    merged.total = 0;
    merged.sessions = 0;
    Object.values(merged.progressByDhikr).forEach((progress) => {
      progress.count = 0;
      progress.laps = 0;
      progress.total = 0;
    });
  }

  const currentDhikr = getDhikrList(merged)[merged.dhikrIndex];
  if (currentDhikr && !merged.progressByDhikr[currentDhikr.id] && (merged.count > 0 || merged.sessions > 0)) {
    merged.progressByDhikr[currentDhikr.id] = {
      count: merged.count,
      target: merged.target,
      lapGoal: 1,
      laps: merged.sessions,
      total: merged.total,
    };
  }

  if (merged.dhikrIndex >= getDhikrList(merged).length) {
    merged.dhikrIndex = 0;
  }

  return merged;
}

function getDhikrList(sourceState = state) {
  const deletedIds = new Set(sourceState.deletedDhikrIds);
  return [...dhikrList.filter((dhikr) => !deletedIds.has(dhikr.id)), ...sourceState.customDhikr];
}

function getCurrentDhikr() {
  const currentDhikrList = getDhikrList();
  return currentDhikrList[state.dhikrIndex] || currentDhikrList[0];
}

function getCurrentProgress() {
  const dhikr = getCurrentDhikr();

  if (!dhikr) {
    return { count: 0, target: defaultState.target, lapGoal: 1, laps: 0, total: 0 };
  }

  if (!state.progressByDhikr[dhikr.id]) {
    state.progressByDhikr[dhikr.id] = { count: 0, target: defaultState.target, lapGoal: 1, laps: 0, total: 0 };
  }

  const progress = state.progressByDhikr[dhikr.id];
  progress.target = Math.max(1, Math.min(Number(progress.target) || defaultState.target, 99999));
  progress.lapGoal = Math.max(1, Math.min(Number(progress.lapGoal) || 1, 9999));
  progress.count = Math.min(Math.max(0, Number(progress.count) || 0), progress.target);
  progress.laps = Math.max(0, Number(progress.laps) || 0);
  progress.total = Math.max(0, Number(progress.total) || 0);
  return progress;
}

function loadState() {
  return normalizeState(parseSavedState(localStorage.getItem(storageKey)));
}

async function hydrateNativeState() {
  const preferences = getNativePreferences();
  if (!preferences?.get) return;

  try {
    const { value } = await preferences.get({ key: storageKey });
    const saved = parseSavedState(value);

    if (saved) {
      state = normalizeState(saved);
      localStorage.setItem(storageKey, JSON.stringify(state));
      render();
    }
  } catch {}
}

function saveState() {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(storageKey, serializedState);

  const preferences = getNativePreferences();
  if (preferences?.set) {
    preferences.set({ key: storageKey, value: serializedState }).catch(() => {});
  }
}

function render() {
  const currentProgress = getCurrentProgress();
  const progress = Math.min(currentProgress.count / currentProgress.target, 1);
  const circumference = 2 * Math.PI * 98;

  elements.count.textContent = currentProgress.count.toLocaleString("ar-SA");
  elements.targetLabel.textContent = `من ${currentProgress.target.toLocaleString("ar-SA")}`;
  if (document.activeElement !== elements.lapTargetInput) {
    elements.lapTargetInput.value = currentProgress.target;
  }
  elements.lapTargetCompactValue.textContent = currentProgress.target.toLocaleString("ar-SA");
  elements.lapTargetForm.classList.toggle("is-collapsed", !isLapTargetVisible);
  elements.lapTargetCompact.classList.toggle("is-hidden", isLapTargetVisible);
  elements.ringFill.style.strokeDasharray = `${circumference}`;
  elements.ringFill.style.strokeDashoffset = `${circumference * (1 - progress)}`;
  elements.sessionsToday.textContent = currentProgress.laps.toLocaleString("ar-SA");
  elements.totalCount.textContent = currentProgress.total.toLocaleString("ar-SA");

  const currentDhikrList = getDhikrList();
  const dhikr = getCurrentDhikr();
  elements.dhikrTitle.textContent = dhikr?.title || "لا توجد أذكار";
  elements.dhikrSubtitle.textContent = dhikr ? dhikr.subtitle : "";
  elements.customDhikrModal.classList.toggle("is-hidden", !isAddingDhikr);
  elements.customDhikrModal.setAttribute("aria-hidden", String(!isAddingDhikr));
  elements.dhikrListPage.classList.toggle("is-hidden", !isDhikrListOpen);
  elements.dhikrListPage.setAttribute("aria-hidden", String(!isDhikrListOpen));
  elements.dhikrListPage.inert = isAddingDhikr;
  elements.progressPage.classList.toggle("is-hidden", !isProgressOpen);
  elements.progressPage.setAttribute("aria-hidden", String(!isProgressOpen));
  elements.learningPage.classList.toggle("is-hidden", !isLearningOpen);
  elements.learningPage.setAttribute("aria-hidden", String(!isLearningOpen));
  document.body.classList.toggle("has-fixed-page", isDhikrListOpen || isAddingDhikr || isProgressOpen || isLearningOpen);
  elements.deleteDhikrButton.disabled = currentDhikrList.length === 0;

  if (isDhikrListOpen) {
    renderDhikrList();
  }

  if (isProgressOpen) {
    renderProgressPage();
  }

  if (isLearningOpen) {
    renderLearningPage();
  }
  voiceController?.syncContext();
}

function getLearningList() {
  return getLearningCategoryItems(state.learning.category);
}

function getLearningIndex() {
  const list = getLearningList();
  const index = Math.min(Math.max(Number(state.learning.indexes[state.learning.category]) || 0, 0), list.length - 1);
  state.learning.indexes[state.learning.category] = index;
  return index;
}

function getLearningCount(index = getLearningIndex()) {
  const list = getLearningList();
  if (!Array.isArray(state.learning.counts[state.learning.category])) {
    state.learning.counts[state.learning.category] = list.map(() => 0);
  }
  return Math.min(Number(state.learning.counts[state.learning.category][index]) || 0, list[index].target);
}

function renderLearningPage() {
  const list = getLearningList();
  const index = getLearningIndex();
  const current = list[index];
  const count = getLearningCount(index);
  const progress = Math.round((count / current.target) * 100);
  const isCustom = state.learning.category === "custom";

  elements.learningTabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.category === state.learning.category);
  });
  elements.learningStepLabel.textContent = `${getLearningCategoryTitle(state.learning.category)}: ${Number(index + 1).toLocaleString("ar-SA")} من ${Number(list.length).toLocaleString("ar-SA")}`;
  elements.learningDhikrText.textContent = current.text;
  elements.learningBenefitText.textContent = current.benefit;
  elements.learningSourceText.innerHTML = current.url
    ? `${current.source} <a href="${current.url}" target="_blank" rel="noopener">الموسوعة الحديثية — الدرر السنية</a>`
    : current.source;
  elements.learningCountText.textContent = count.toLocaleString("ar-SA");
  elements.learningTargetText.textContent = current.target.toLocaleString("ar-SA");
  elements.learningProgressFill.style.setProperty("--value", `${progress}%`);
  elements.learningSayButton.textContent = count >= current.target ? "انتظر الذكر التالي" : "قلت الذكر";
  elements.learningSayButton.disabled = count >= current.target;
  elements.learningCustomForm.classList.toggle("is-hidden", !isCustom);
  if (!isCustom) {
    isLearningCustomFieldsOpen = false;
    isLearningTargetEditorOpen = false;
  }
  elements.learningCustomFields.classList.toggle("is-hidden", !isLearningCustomFieldsOpen);
  elements.learningCurrentTargetRow.classList.toggle("is-hidden", !isLearningTargetEditorOpen);
  elements.learningAddButton.textContent = isLearningCustomFieldsOpen ? "حفظ" : "إضافة";
  if (isCustom && document.activeElement !== elements.learningCurrentTarget) {
    elements.learningCurrentTarget.value = current.target;
  }
  elements.learningDeleteButton.disabled = !isCustom || list.length === 0;
}

function renderProgressPage() {
  const days = getLastSevenDays();
  const totals = days.map((dateKey) => state.dailyStats[dateKey]?.total || 0);
  const weeklyTotal = totals.reduce((sum, total) => sum + total, 0);
  const weeklyAverage = Math.round(weeklyTotal / 7);
  const maxTotal = Math.max(...totals, 1);

  elements.weeklyTotal.textContent = weeklyTotal.toLocaleString("ar-SA");
  elements.weeklyAverage.textContent = weeklyAverage.toLocaleString("ar-SA");
  elements.weeklyCircleChart.replaceChildren();
  elements.dailyProgressList.replaceChildren();

  days.forEach((dateKey, index) => {
    const total = totals[index];
    const percent = Math.max(8, Math.round((total / maxTotal) * 100));
    const circle = document.createElement("div");
    circle.className = "progress-circle";
    circle.style.setProperty("--progress", `${percent}%`);
    circle.innerHTML = `<strong>${total.toLocaleString("ar-SA")}</strong><span>${getArabicDayName(dateKey)}</span>`;
    elements.weeklyCircleChart.append(circle);

    const row = document.createElement("div");
    row.className = "daily-progress-row";
    row.innerHTML = `<span>${getArabicDayName(dateKey)}</span><strong>${total.toLocaleString("ar-SA")} تسبيحة</strong>`;
    elements.dailyProgressList.append(row);
  });
}

function getRangeTotal(startOffset, length) {
  return Array.from({ length }, (_, index) => state.dailyStats[getDateKey(startOffset + index)]?.total || 0).reduce(
    (sum, total) => sum + total,
    0
  );
}

function showInAppNotification(message) {
  elements.appToast.textContent = message;
  elements.appToast.classList.remove("is-hidden");
  window.clearTimeout(showInAppNotification.timeoutId);
  showInAppNotification.timeoutId = window.setTimeout(() => {
    elements.appToast.classList.add("is-hidden");
  }, 4200);
}

async function sendLocalNotification(title, body) {
  showInAppNotification(`${title} - ${body}`);

  const localNotifications = window.Capacitor?.Plugins?.LocalNotifications;
  if (localNotifications?.schedule) {
    try {
      await localNotifications.requestPermissions?.();
      await localNotifications.schedule({
        notifications: [
          {
            id: Date.now() % 2147483647,
            title,
            body,
            schedule: { at: new Date(Date.now() + 250) },
          },
        ],
      });
      return;
    } catch {}
  }

  if ("Notification" in window) {
    try {
      const permission = Notification.permission === "default" ? await Notification.requestPermission() : Notification.permission;
      if (permission === "granted") {
        new Notification(title, { body });
      }
    } catch {}
  }
}

function notifyOnce(key, title, body) {
  const notificationKey = `${todayKey}:${key}`;
  if (state.notificationsSent[notificationKey]) return;
  state.notificationsSent[notificationKey] = true;
  sendLocalNotification(title, body);
}

function getWeeklyProgressMessage() {
  const thisWeekTotal = getRangeTotal(-6, 7);
  const lastWeekTotal = getRangeTotal(-13, 7);
  const difference = thisWeekTotal - lastWeekTotal;

  if (difference > 0) {
    return `تقدمك أكثر من الأسبوع الماضي بفارق ${difference.toLocaleString("ar-SA")} تسبيحة.`;
  }

  if (difference < 0) {
    return `تقدمك أقل من الأسبوع الماضي بفارق ${Math.abs(difference).toLocaleString("ar-SA")} تسبيحة.`;
  }

  return "تقدمك مثل الأسبوع الماضي تمامًا.";
}

function maybeNotifyWeeklyProgress() {
  const totalToday = state.dailyStats[todayKey]?.total || 0;
  if (totalToday === 0) return;
  notifyOnce("weekly-progress", "تقرير تقدمك", getWeeklyProgressMessage());
}

function maybeNotifyAllDhikrCompleted() {
  const currentDhikrList = getDhikrList();
  if (currentDhikrList.length === 0) return;

  const completedAllDhikr = currentDhikrList.every((dhikr) => {
    const progress = state.progressByDhikr[dhikr.id];
    const lapGoal = Math.max(1, Number(progress?.lapGoal) || 1);
    return Number(progress?.laps || 0) >= lapGoal;
  });

  if (completedAllDhikr) {
    notifyOnce("all-dhikr-completed", "إنجاز جميل", "أكملت جميع لفاتك في كل أذكارك اليوم.");
  }
}

function renderDhikrList() {
  const currentDhikrList = getDhikrList();
  const scrollTop = elements.dhikrListBody.scrollTop;
  elements.dhikrListBody.replaceChildren();
  if (!currentDhikrList.length) {
    const empty = document.createElement("p");
    empty.className = "dhikr-list-empty";
    empty.textContent = "لا توجد أذكار";
    elements.dhikrListBody.append(empty);
    return;
  }

  currentDhikrList.forEach((dhikr, index) => {
    const progress = state.progressByDhikr[dhikr.id] || { count: 0, target: defaultState.target, lapGoal: 1, laps: 0, total: 0 };
    const targetValue = Math.max(1, Number(progress.target) || defaultState.target);
    const item = document.createElement("article");
    item.className = `dhikr-list-item${index === state.dhikrIndex ? " is-current" : ""}`;
    const header = document.createElement("div");
    header.className = "dhikr-list-item-header";
    const title = document.createElement("button");
    title.type = "button";
    title.className = "dhikr-list-title";
    title.textContent = dhikr.title;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "dhikr-tool-button delete-tool-button";
    remove.textContent = "حذف";
    remove.setAttribute("aria-label", `حذف ${dhikr.title}`);
    remove.addEventListener("click", (event) => {
      event.stopPropagation();
      if (deleteDhikr(dhikr.id)) {
        const titles = elements.dhikrListBody.querySelectorAll(".dhikr-list-title");
        (titles[Math.min(index, titles.length - 1)] || elements.addDhikrFromList).focus({ preventScroll: true });
      }
    });
    header.append(title, remove);

    const benefit = document.createElement("span");
    benefit.className = "dhikr-list-benefit";
    benefit.textContent = dhikr.subtitle;

    const meta = document.createElement("span");
    meta.className = "dhikr-list-meta";

    const count = document.createElement("span");
    count.textContent = `العداد ${Number(progress.count || 0).toLocaleString("ar-SA")}`;

    const target = document.createElement("span");
    target.textContent = `عدد التسبيحات ${targetValue.toLocaleString("ar-SA")}`;

    const laps = document.createElement("span");
    laps.textContent = `لفات ${Number(progress.laps || 0).toLocaleString("ar-SA")}`;

    const total = document.createElement("span");
    total.textContent = `الإجمالي ${Number(progress.total || 0).toLocaleString("ar-SA")}`;

    meta.append(count, target, laps, total);

    const settings = document.createElement("form");
    settings.className = "dhikr-list-settings";
    settings.innerHTML = `
      <label>
        <span>عدد التسبيحات</span>
        <input name="target" type="number" min="1" max="99999" inputmode="numeric" value="${targetValue}" />
      </label>
      <button type="submit">حفظ</button>
    `;
    settings.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(settings);
      setDhikrGoals(dhikr.id, formData.get("target"));
    });

    item.append(header);
    if (dhikr.subtitle) item.append(benefit);
    item.append(meta, settings);
    item.addEventListener("click", (event) => {
      if (event.target.closest(".dhikr-list-settings")) return;
      event.stopPropagation();
      state.dhikrIndex = index;
      isDhikrListOpen = false;
      saveState();
      render();
      elements.dhikrPanel.focus({ preventScroll: true });
    });
    elements.dhikrListBody.append(item);
  });
  elements.dhikrListBody.scrollTop = scrollTop;
}

function giveFeedback() {
  if (!state.feedback) return;

  const haptics = window.Capacitor?.Plugins?.Haptics;
  if (haptics?.impact) {
    haptics.impact({ style: "LIGHT" }).catch(() => {});
    return;
  }

  if ("vibrate" in navigator) {
    navigator.vibrate(12);
  }
}

function addCount(amount = 1) {
  if (!getCurrentDhikr()) return;
  const increment = typeof amount === "number" ? Math.max(1, Math.floor(amount)) : 1;
  const currentProgress = getCurrentProgress();
  const next = currentProgress.count + increment;
  const completedLaps = Math.floor(next / currentProgress.target);
  currentProgress.count = next % currentProgress.target;
  currentProgress.total += increment;
  if (!state.dailyStats[todayKey]) {
    state.dailyStats[todayKey] = { total: 0 };
  }
  state.dailyStats[todayKey].total += increment;

  if (completedLaps > 0) {
    currentProgress.laps += completedLaps;
    const currentDhikr = getCurrentDhikr();
    notifyOnce(
      `lap-completed:${currentDhikr?.id || "dhikr"}:${currentProgress.laps}`,
      "أكملت لفة",
      `أكملت ${currentProgress.laps.toLocaleString("ar-SA")} لفة في ${currentDhikr?.title || "الذكر الحالي"}.`
    );
    maybeNotifyAllDhikrCompleted();
  }

  giveFeedback();
  maybeNotifyWeeklyProgress();
  saveState();
  render();
}

function changeDhikr(step) {
  const currentDhikrList = getDhikrList();
  if (currentDhikrList.length === 0) return;
  state.dhikrIndex = (state.dhikrIndex + step + currentDhikrList.length) % currentDhikrList.length;
  saveState();
  render();
}

function setTarget(target) {
  const currentProgress = getCurrentProgress();
  currentProgress.target = Math.max(1, Math.min(Number(target) || defaultState.target, 99999));
  currentProgress.count = Math.min(currentProgress.count, currentProgress.target);
  saveState();
  render();
}

function setDhikrGoals(dhikrId, target) {
  if (!state.progressByDhikr[dhikrId]) {
    state.progressByDhikr[dhikrId] = { count: 0, target: defaultState.target, lapGoal: 1, laps: 0, total: 0 };
  }

  const progress = state.progressByDhikr[dhikrId];
  progress.target = Math.max(1, Math.min(Number(target) || defaultState.target, 99999));
  progress.lapGoal = 1;
  progress.count = Math.min(Number(progress.count) || 0, progress.target);
  saveState();
  showInAppNotification("تم حفظ عدد التسبيحات لهذا الذكر.");
  render();
}

function toggleAddDhikrForm() {
  isAddingDhikr = true;
  render();
  elements.customDhikrInput.focus();
}

function openDhikrList() {
  isDhikrListOpen = true;
  render();
  elements.addDhikrFromList.focus({ preventScroll: true });
}

function closeDhikrList() {
  isDhikrListOpen = false;
  render();
  elements.dhikrPanel.focus({ preventScroll: true });
}

function openProgressPage() {
  isProgressOpen = true;
  render();
}

function closeProgressPage() {
  isProgressOpen = false;
  render();
}

function openLearningPage() {
  isLearningOpen = true;
  render();
}

function closeLearningPage() {
  window.clearTimeout(learningMoveTimer);
  isLearningOpen = false;
  elements.learningMessageText.textContent = "";
  render();
}

function goToNextLearningDhikr() {
  window.clearTimeout(learningMoveTimer);
  const list = getLearningList();
  state.learning.indexes[state.learning.category] = (getLearningIndex() + 1) % list.length;
  elements.learningMessageText.textContent = "";
  saveState();
  render();
}

function completeLearningDhikr() {
  elements.learningMessageText.textContent = "أحسنت، ننتقل للذكر التالي...";
  saveState();
  learningMoveTimer = window.setTimeout(goToNextLearningDhikr, 1100);
}

function addLearningCount(amount = 1) {
  const increment = typeof amount === "number" ? Math.max(1, Math.floor(amount)) : 1;
  const index = getLearningIndex();
  const current = getLearningList()[index];
  if (getLearningCount(index) >= current.target) return;
  const nextCount = Math.min(getLearningCount(index) + increment, current.target);
  state.learning.counts[state.learning.category][index] = nextCount;
  saveState();
  render();

  if (nextCount >= current.target) {
    completeLearningDhikr();
  }
}

function changeLearningCategory(category) {
  if (!learningCategoryKeys.includes(category)) return;
  window.clearTimeout(learningMoveTimer);
  state.learning.category = category;
  elements.learningMessageText.textContent = "";
  saveState();
  render();
}

function previousLearningDhikr() {
  window.clearTimeout(learningMoveTimer);
  const list = getLearningList();
  state.learning.indexes[state.learning.category] = (getLearningIndex() - 1 + list.length) % list.length;
  elements.learningMessageText.textContent = "";
  saveState();
  render();
}

function resetLearningDhikr() {
  window.clearTimeout(learningMoveTimer);
  state.learning.counts[state.learning.category][getLearningIndex()] = 0;
  elements.learningMessageText.textContent = "";
  saveState();
  render();
}

function shouldCountLearningTap(event) {
  return !event.target.closest(
    "#closeLearningPage, #learningTargetStat, .learning-tab, .learning-actions, .learning-custom-form, [data-voice-controls], a, input, button"
  );
}

function addCustomLearningDhikr(text, benefit, target) {
  const trimmedText = text.trim();
  const trimmedBenefit = benefit.trim();
  if (!trimmedText || !trimmedBenefit) {
    showInAppNotification("اكتب الذكر والفائدة أولًا.");
    return;
  }

  const item = {
    id: `custom-learning-${Date.now()}`,
    text: trimmedText,
    target: Math.max(1, Math.min(Number(target) || 1, 99999)),
    benefit: trimmedBenefit,
    source: "ذكر مخصص",
    url: "",
  };
  state.learning.customItems.push(item);
  state.learning.counts.custom.push(0);
  state.learning.indexes.custom = state.learning.customItems.length - 1;
  state.learning.category = "custom";
  elements.learningCustomForm.reset();
  isLearningCustomFieldsOpen = false;
  showInAppNotification("تمت إضافة الذكر في التخصيص.");
  saveState();
  render();
}

function handleLearningAddButton() {
  if (!isLearningCustomFieldsOpen) {
    isLearningCustomFieldsOpen = true;
    render();
    elements.learningCustomText.focus();
    return;
  }

  addCustomLearningDhikr(elements.learningCustomText.value, elements.learningCustomBenefit.value, elements.learningCustomTarget.value);
}

function deleteCustomLearningDhikr() {
  if (state.learning.category !== "custom") return;
  if (state.learning.customItems.length <= 1) {
    showInAppNotification("لا يمكن حذف آخر ذكر في التخصيص.");
    return;
  }

  const index = getLearningIndex();
  state.learning.customItems.splice(index, 1);
  state.learning.counts.custom.splice(index, 1);
  state.learning.indexes.custom = Math.min(index, state.learning.customItems.length - 1);
  showInAppNotification("تم حذف الذكر من التخصيص.");
  saveState();
  render();
}

function updateCurrentCustomLearningTarget(target) {
  if (state.learning.category !== "custom") return;
  const index = getLearningIndex();
  const item = state.learning.customItems[index];
  if (!item) return;

  item.target = Math.max(1, Math.min(Number(target) || item.target || 1, 99999));
  state.learning.counts.custom[index] = Math.min(Number(state.learning.counts.custom[index]) || 0, item.target);
  isLearningTargetEditorOpen = false;
  showInAppNotification("تم حفظ عدد الذكر الحالي.");
  saveState();
  render();
}

function openLearningTargetEditor() {
  if (state.learning.category !== "custom") return;
  isLearningTargetEditorOpen = true;
  render();
  elements.learningCurrentTarget.focus();
}

function shouldOpenDhikrListFromPanel(event) {
  return !event.target.closest(".chip-nav, .dhikr-tool-button");
}

function shouldCountGlobalTap(event) {
  if (isAddingDhikr || isDhikrListOpen || isProgressOpen || isLearningOpen) return false;
  return !event.target.closest("#dhikrPanel, button, input, label, [data-voice-controls], .modal-overlay, .dhikr-list-page, .progress-page, .learning-page");
}

function closeAddDhikrForm() {
  isAddingDhikr = false;
  elements.customDhikrForm.reset();
  render();
  (isDhikrListOpen ? elements.addDhikrFromList : elements.addDhikrToggle).focus();
}

function addCustomDhikr(title, benefit) {
  const trimmedTitle = title.trim();
  const trimmedBenefit = benefit.trim();

  if (!trimmedTitle) return;

  const currentDhikrList = getDhikrList();
  const existingIndex = currentDhikrList.findIndex((dhikr) => dhikr.title === trimmedTitle);

  if (existingIndex >= 0) {
    state.dhikrIndex = existingIndex;
    const custom = state.customDhikr.find((dhikr) => dhikr.id === currentDhikrList[existingIndex].id);
    if (custom && trimmedBenefit) custom.subtitle = trimmedBenefit;
  } else {
    state.customDhikr.push({
      id: `custom-${Date.now()}`,
      title: trimmedTitle,
      subtitle: trimmedBenefit,
    });
    state.dhikrIndex = getDhikrList().length - 1;
  }

  elements.customDhikrInput.value = "";
  elements.customDhikrBenefitInput.value = "";
  isAddingDhikr = false;
  saveState();
  render();
  if (isDhikrListOpen) {
    elements.dhikrListBody.querySelector(".is-current")?.scrollIntoView({ block: "nearest" });
    elements.addDhikrFromList.focus({ preventScroll: true });
  }
}

function deleteDhikr(id) {
  const currentDhikrList = getDhikrList();
  const dhikr = currentDhikrList.find((item) => item.id === id);
  if (!dhikr || !window.confirm(`حذف «${dhikr.title}»؟ سيُحذف عداده الخاص أيضًا.`)) return false;
  const selectedId = getCurrentDhikr()?.id;

  if (dhikrList.some((defaultDhikr) => defaultDhikr.id === dhikr.id)) {
    state.deletedDhikrIds.push(dhikr.id);
  } else {
    const customIndex = state.customDhikr.findIndex((customDhikr) => customDhikr.id === dhikr.id);
    if (customIndex >= 0) {
      state.customDhikr.splice(customIndex, 1);
    }
  }
  delete state.progressByDhikr[dhikr.id];

  const remainingDhikr = getDhikrList();
  const selectedIndex = remainingDhikr.findIndex((item) => item.id === selectedId);
  state.dhikrIndex = selectedIndex >= 0 ? selectedIndex : Math.max(0, Math.min(state.dhikrIndex, remainingDhikr.length - 1));
  saveState();
  render();
  return true;
}

elements.tapButton.addEventListener("click", addCount);
elements.openProgressPage.addEventListener("click", openProgressPage);
elements.openLearningPage.addEventListener("click", openLearningPage);
document.addEventListener("click", (event) => {
  if (shouldCountGlobalTap(event)) {
    addCount();
  }
});
elements.dhikrPanel.addEventListener("click", (event) => {
  if (shouldOpenDhikrListFromPanel(event)) {
    openDhikrList();
  }
});
elements.prevDhikr.addEventListener("click", (event) => {
  event.stopPropagation();
  changeDhikr(-1);
});
elements.nextDhikr.addEventListener("click", (event) => {
  event.stopPropagation();
  changeDhikr(1);
});
elements.addDhikrToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleAddDhikrForm();
});
elements.addDhikrFromList.addEventListener("click", toggleAddDhikrForm);
elements.deleteDhikrButton.addEventListener("click", (event) => {
  event.stopPropagation();
  deleteDhikr(getCurrentDhikr()?.id);
});
elements.closeDhikrModal.addEventListener("click", closeAddDhikrForm);
elements.closeDhikrList.addEventListener("click", closeDhikrList);
elements.closeProgressPage.addEventListener("click", closeProgressPage);
elements.closeLearningPage.addEventListener("click", closeLearningPage);
elements.progressPage.addEventListener("click", (event) => {
  if (event.target === elements.progressPage) {
    closeProgressPage();
  }
});
elements.learningPage.addEventListener("click", (event) => {
  if (event.target.closest("#closeLearningPage")) {
    return;
  }

  if (shouldCountLearningTap(event)) {
    addLearningCount();
  }
});
elements.learningTabs.forEach((tab) => {
  tab.addEventListener("click", () => changeLearningCategory(tab.dataset.category));
});
elements.learningSayButton.addEventListener("click", addLearningCount);
elements.learningPrevButton.addEventListener("click", previousLearningDhikr);
elements.learningResetButton.addEventListener("click", resetLearningDhikr);
elements.learningSaveTargetButton.addEventListener("click", () => updateCurrentCustomLearningTarget(elements.learningCurrentTarget.value));
elements.learningTargetStat.addEventListener("click", openLearningTargetEditor);
elements.learningTargetStat.addEventListener("keydown", (event) => {
  if (event.code !== "Space" && event.code !== "Enter") return;
  event.preventDefault();
  openLearningTargetEditor();
});
elements.learningAddButton.addEventListener("click", handleLearningAddButton);
elements.learningDeleteButton.addEventListener("click", deleteCustomLearningDhikr);
elements.learningCustomForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (isLearningCustomFieldsOpen) {
    handleLearningAddButton();
  }
});
elements.dhikrListPage.addEventListener("click", (event) => {
  if (event.target === elements.dhikrListPage) {
    closeDhikrList();
  }
});
elements.customDhikrModal.addEventListener("click", (event) => {
  if (event.target === elements.customDhikrModal) {
    closeAddDhikrForm();
  }
});
elements.lapTargetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  isLapTargetVisible = false;
  setTarget(elements.lapTargetInput.value);
  elements.lapTargetInput.blur();
});
elements.lapTargetCompact.addEventListener("dblclick", (event) => {
  event.preventDefault();
  isLapTargetVisible = true;
  render();
  elements.lapTargetInput.focus();
});

elements.customDhikrForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addCustomDhikr(elements.customDhikrInput.value, elements.customDhikrBenefitInput.value);
});

document.addEventListener("keydown", (event) => {
  if (event.target.closest("[data-voice-controls]")) return;
  if ((event.code === "Space" || event.code === "Enter") && event.target === elements.dhikrPanel) {
    event.preventDefault();
    openDhikrList();
    return;
  }

  if (event.code === "Escape" && isAddingDhikr) {
    closeAddDhikrForm();
    return;
  }

  if (event.code === "Escape" && isDhikrListOpen) {
    closeDhikrList();
    return;
  }

  if (event.code === "Escape" && isProgressOpen) {
    closeProgressPage();
    return;
  }

  if (event.code === "Escape" && isLearningOpen) {
    closeLearningPage();
    return;
  }

  if (isLearningOpen || isDhikrListOpen || isAddingDhikr) {
    return;
  }

  if (event.code === "Space" || event.code === "Enter") {
    if (
      event.target === elements.customDhikrInput ||
      event.target === elements.customDhikrBenefitInput ||
      event.target === elements.lapTargetInput
    ) {
      return;
    }
    event.preventDefault();
    addCount();
  }
});

document.addEventListener(
  "dblclick",
  (event) => {
    if (event.target.closest("#lapTargetCompact")) return;
    event.preventDefault();
  },
  { passive: false }
);

function isLocalPreview() {
  return ["localhost", "127.0.0.1"].includes(window.location.hostname);
}

async function clearPreviewCache() {
  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));
  }

  if ("caches" in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
  }
}

if (isLocalPreview()) {
  clearPreviewCache().catch(() => {});
} else if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

function voiceContext() {
  if (isAddingDhikr || isDhikrListOpen || isProgressOpen || document.hidden) return null;
  if (isLearningOpen) {
    if (isLearningCustomFieldsOpen || isLearningTargetEditorOpen) return null;
    const index = getLearningIndex();
    const item = getLearningList()[index];
    if (!item) return null;
    return { key: `learning:${state.learning.category}:${index}`, phrase: item.text.replace(/^سيد الاستغفار:\s*/, "") };
  }
  const item = getCurrentDhikr();
  return item ? { key: `main:${item.id}`, phrase: item.title } : null;
}

voiceController = DhikrVoice.createController({
  context: voiceContext,
  onCount(amount, key) {
    if (voiceContext()?.key !== key) return;
    if (isLearningOpen) addLearningCount(amount);
    else addCount(amount);
  },
  onState({ active, pending, message }) {
    document.querySelectorAll("[data-voice-toggle]").forEach((input) => {
      input.checked = active;
      input.disabled = pending;
      input.setAttribute("aria-checked", String(active));
      input.setAttribute("aria-busy", String(pending));
    });
    document.querySelectorAll("[data-voice-status]").forEach((status) => { status.textContent = message; });
    document.querySelectorAll("[data-voice-controls]").forEach((row) => row.classList.toggle("is-listening", active));
  },
});
document.querySelectorAll("[data-voice-toggle]").forEach((input) => {
  input.addEventListener("change", () => input.checked ? voiceController.start() : voiceController.stop());
});
document.addEventListener("visibilitychange", () => { if (document.hidden) voiceController.stop(); });
window.addEventListener("pagehide", () => voiceController.stop());

render();
hydrateNativeState();
