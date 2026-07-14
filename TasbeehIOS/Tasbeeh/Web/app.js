const dhikrList = [
  {
    title: "سبحان الله",
    subtitle: "تنزيه لله في كل لحظة.",
  },
  {
    title: "الحمد لله",
    subtitle: "شكر يفتح القلب للنعم.",
  },
  {
    title: "الله أكبر",
    subtitle: "تذكير بأن الله أكبر من كل هم.",
  },
  {
    title: "لا إله إلا الله",
    subtitle: "كلمة التوحيد وأعظم الذكر.",
  },
  {
    title: "أستغفر الله",
    subtitle: "رجوع هادئ وبداية أنقى.",
  },
];

const storageKey = "tasbeeh-app-state";
const todayKey = new Date().toISOString().slice(0, 10);

const elements = {
  count: document.querySelector("#count"),
  targetLabel: document.querySelector("#targetLabel"),
  ringFill: document.querySelector("#ringFill"),
  tapButton: document.querySelector("#tapButton"),
  resetButton: document.querySelector("#resetButton"),
  undoButton: document.querySelector("#undoButton"),
  soundToggle: document.querySelector("#soundToggle"),
  dhikrTitle: document.querySelector("#dhikrTitle"),
  dhikrSubtitle: document.querySelector("#dhikrSubtitle"),
  prevDhikr: document.querySelector("#prevDhikr"),
  nextDhikr: document.querySelector("#nextDhikr"),
  targetPills: document.querySelectorAll(".target-pill"),
  sessionsToday: document.querySelector("#sessionsToday"),
  totalCount: document.querySelector("#totalCount"),
};

const defaultState = {
  count: 0,
  target: 33,
  total: 0,
  sessionsDate: todayKey,
  sessions: 0,
  dhikrIndex: 0,
  feedback: true,
};

let state = loadState();

function loadState() {
  const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
  const merged = { ...defaultState, ...saved };

  if (merged.sessionsDate !== todayKey) {
    merged.sessionsDate = todayKey;
    merged.sessions = 0;
  }

  return merged;
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function render() {
  const progress = Math.min(state.count / state.target, 1);
  const circumference = 2 * Math.PI * 98;

  elements.count.textContent = state.count.toLocaleString("ar-SA");
  elements.targetLabel.textContent = `من ${state.target.toLocaleString("ar-SA")}`;
  elements.ringFill.style.strokeDasharray = `${circumference}`;
  elements.ringFill.style.strokeDashoffset = `${circumference * (1 - progress)}`;
  elements.sessionsToday.textContent = state.sessions.toLocaleString("ar-SA");
  elements.totalCount.textContent = state.total.toLocaleString("ar-SA");

  const dhikr = dhikrList[state.dhikrIndex];
  elements.dhikrTitle.textContent = dhikr.title;
  elements.dhikrSubtitle.textContent = dhikr.subtitle;
  elements.soundToggle.classList.toggle("is-on", state.feedback);

  elements.targetPills.forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.target) === state.target);
  });
}

function giveFeedback() {
  if (!state.feedback) return;

  if ("vibrate" in navigator) {
    navigator.vibrate(12);
  }
}

function addCount() {
  state.count += 1;
  state.total += 1;

  if (state.count === state.target) {
    state.sessions += 1;
    setTimeout(() => {
      state.count = 0;
      saveState();
      render();
    }, 450);
  }

  giveFeedback();
  saveState();
  render();
}

function resetCount() {
  state.count = 0;
  saveState();
  render();
}

function undoCount() {
  if (state.count === 0) return;
  state.count -= 1;
  state.total = Math.max(0, state.total - 1);
  saveState();
  render();
}

function changeDhikr(step) {
  state.dhikrIndex = (state.dhikrIndex + step + dhikrList.length) % dhikrList.length;
  saveState();
  render();
}

function setTarget(target) {
  state.target = target;
  state.count = Math.min(state.count, target);
  saveState();
  render();
}

elements.tapButton.addEventListener("click", addCount);
elements.resetButton.addEventListener("click", resetCount);
elements.undoButton.addEventListener("click", undoCount);
elements.prevDhikr.addEventListener("click", () => changeDhikr(-1));
elements.nextDhikr.addEventListener("click", () => changeDhikr(1));
elements.soundToggle.addEventListener("click", () => {
  state.feedback = !state.feedback;
  saveState();
  render();
});

elements.targetPills.forEach((button) => {
  button.addEventListener("click", () => setTarget(Number(button.dataset.target)));
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    event.preventDefault();
    addCount();
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

render();
