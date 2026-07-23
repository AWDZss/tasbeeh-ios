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

const storageKey = "tasbeeh-app-state";
const todayKey = new Date().toISOString().slice(0, 10);

const elements = {
  count: document.querySelector("#count"),
  targetLabel: document.querySelector("#targetLabel"),
  ringFill: document.querySelector("#ringFill"),
  tapButton: document.querySelector("#tapButton"),
  lapTargetForm: document.querySelector("#lapTargetForm"),
  lapTargetInput: document.querySelector("#lapTargetInput"),
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
  sessionsToday: document.querySelector("#sessionsToday"),
  totalCount: document.querySelector("#totalCount"),
};

const defaultState = {
  count: 0,
  target: 33,
  total: 0,
  sessionsDate: todayKey,
  sessions: 0,
  progressByDhikr: {},
  dhikrIndex: 0,
  deletedDhikrIds: [],
  customDhikr: [],
  feedback: true,
};

let state = loadState();
let isAddingDhikr = false;

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

function normalizeState(saved) {
  const merged = { ...defaultState, ...saved };
  merged.deletedDhikrIds = Array.isArray(merged.deletedDhikrIds) ? merged.deletedDhikrIds : [];
  merged.customDhikr = Array.isArray(merged.customDhikr) ? merged.customDhikr : [];
  merged.customDhikr = merged.customDhikr.map((dhikr, index) => ({
    id: dhikr.id || `saved-custom-${index}-${dhikr.title || "dhikr"}`,
    title: dhikr.title || "ذكر مخصص",
    subtitle: dhikr.subtitle || "فائدة الذكر",
  }));

  if (merged.sessionsDate !== todayKey) {
    merged.sessionsDate = todayKey;
    merged.sessions = 0;
  }

  merged.target = Math.max(1, Number(merged.target) || defaultState.target);
  merged.count = Math.min(Math.max(0, Number(merged.count) || 0), merged.target);
  merged.total = Math.max(0, Number(merged.total) || 0);
  merged.sessions = Math.max(0, Number(merged.sessions) || 0);
  merged.progressByDhikr =
    merged.progressByDhikr && typeof merged.progressByDhikr === "object" && !Array.isArray(merged.progressByDhikr)
      ? merged.progressByDhikr
      : {};

  Object.values(merged.progressByDhikr).forEach((progress) => {
    progress.target = Math.max(1, Math.min(Number(progress.target || merged.target) || defaultState.target, 99999));
    progress.count = Math.min(Math.max(0, Number(progress.count) || 0), progress.target);
    progress.laps = Math.max(0, Number(progress.laps) || 0);
    progress.total = Math.max(0, Number(progress.total) || 0);
  });

  const currentDhikr = getDhikrList(merged)[merged.dhikrIndex];
  if (currentDhikr && !merged.progressByDhikr[currentDhikr.id] && (merged.count > 0 || merged.sessions > 0)) {
    merged.progressByDhikr[currentDhikr.id] = {
      count: merged.count,
      target: merged.target,
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
    return { count: 0, laps: 0 };
  }

  if (!state.progressByDhikr[dhikr.id]) {
    state.progressByDhikr[dhikr.id] = { count: 0, target: defaultState.target, laps: 0, total: 0 };
  }

  const progress = state.progressByDhikr[dhikr.id];
  progress.target = Math.max(1, Math.min(Number(progress.target) || defaultState.target, 99999));
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
  elements.ringFill.style.strokeDasharray = `${circumference}`;
  elements.ringFill.style.strokeDashoffset = `${circumference * (1 - progress)}`;
  elements.sessionsToday.textContent = currentProgress.laps.toLocaleString("ar-SA");
  elements.totalCount.textContent = currentProgress.total.toLocaleString("ar-SA");

  const currentDhikrList = getDhikrList();
  const dhikr = getCurrentDhikr();
  elements.dhikrTitle.textContent = dhikr?.title || "لا توجد أذكار";
  elements.dhikrSubtitle.textContent = dhikr?.subtitle || "اضغط إضافة لإضافة ذكر جديد.";
  elements.customDhikrModal.classList.toggle("is-hidden", !isAddingDhikr);
  elements.customDhikrModal.setAttribute("aria-hidden", String(!isAddingDhikr));
  elements.deleteDhikrButton.disabled = currentDhikrList.length === 0;
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

function addCount() {
  const currentProgress = getCurrentProgress();
  currentProgress.count += 1;
  currentProgress.total += 1;

  if (currentProgress.count === currentProgress.target) {
    currentProgress.laps += 1;
    setTimeout(() => {
      currentProgress.count = 0;
      saveState();
      render();
    }, 450);
  }

  giveFeedback();
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

function toggleAddDhikrForm() {
  isAddingDhikr = true;
  render();
  elements.customDhikrInput.focus();
}

function closeAddDhikrForm() {
  isAddingDhikr = false;
  elements.customDhikrForm.reset();
  render();
}

function addCustomDhikr(title, benefit) {
  const trimmedTitle = title.trim();
  const trimmedBenefit = benefit.trim();

  if (!trimmedTitle || !trimmedBenefit) return;

  const currentDhikrList = getDhikrList();
  const existingIndex = currentDhikrList.findIndex((dhikr) => dhikr.title === trimmedTitle);

  if (existingIndex >= 0) {
    state.dhikrIndex = existingIndex;
    const customIndex = existingIndex - dhikrList.length;
    if (customIndex >= 0) {
      state.customDhikr[customIndex].subtitle = trimmedBenefit;
    }
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
}

function deleteCurrentDhikr() {
  const currentDhikrList = getDhikrList();
  const dhikr = currentDhikrList[state.dhikrIndex];

  if (!dhikr) return;

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
  state.dhikrIndex = remainingDhikr.length > 0 ? Math.min(state.dhikrIndex, remainingDhikr.length - 1) : 0;
  saveState();
  render();
}

elements.tapButton.addEventListener("click", addCount);
elements.prevDhikr.addEventListener("click", () => changeDhikr(-1));
elements.nextDhikr.addEventListener("click", () => changeDhikr(1));
elements.addDhikrToggle.addEventListener("click", toggleAddDhikrForm);
elements.deleteDhikrButton.addEventListener("click", deleteCurrentDhikr);
elements.closeDhikrModal.addEventListener("click", closeAddDhikrForm);
elements.customDhikrModal.addEventListener("click", (event) => {
  if (event.target === elements.customDhikrModal) {
    closeAddDhikrForm();
  }
});
elements.lapTargetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setTarget(elements.lapTargetInput.value);
  elements.lapTargetInput.blur();
});

elements.customDhikrForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addCustomDhikr(elements.customDhikrInput.value, elements.customDhikrBenefitInput.value);
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape" && isAddingDhikr) {
    closeAddDhikrForm();
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
    event.preventDefault();
  },
  { passive: false }
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

render();
hydrateNativeState();
