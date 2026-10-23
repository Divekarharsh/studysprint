function createTask(title, subject = "General", priority = "Normal", due = "") {
  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: title.trim(),
    subject,
    priority,
    due,
    completed: false,
    createdAt: new Date().toISOString()
  };
}


function formatDueDate(value) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
}


const isBrowser = typeof document !== "undefined";
if (isBrowser) {
const STORAGE_KEY = "studysprint-tasks-v1";

const taskForm = document.querySelector("#task-form");
const titleInput = document.querySelector("#task-title");
const subjectInput = document.querySelector("#task-subject");
const priorityInput = document.querySelector("#task-priority");
const dueInput = document.querySelector("#task-due");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const filterInput = document.querySelector("#task-filter");
const searchInput = document.querySelector("#task-search");
const clearCompletedButton = document.querySelector("#clear-completed");

let tasks = loadTasks();

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function updateSummary() {
  const completed = tasks.filter((task) => task.completed).length;
  const total = tasks.length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  document.querySelector("#total-count").textContent = total;
  document.querySelector("#completed-count").textContent = completed;
  document.querySelector("#remaining-count").textContent = total - completed;
  document.querySelector("#progress-text").textContent = `${percentage}%`;
  document.querySelector("#progress-bar").style.width = `${percentage}%`;
}

function makeTaskElement(task) {
  const item = document.createElement("li");
  item.className = `task-item${task.completed ? " is-completed" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-check";
  checkbox.checked = Boolean(task.completed);
  checkbox.setAttribute("aria-label", `Mark ${task.title} as completed`);
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
    renderTasks();
  });

  const main = document.createElement("div");
  main.className = "task-main";

  const title = document.createElement("p");
  title.className = "task-title";
  title.textContent = task.title;

  const meta = document.createElement("div");
  meta.className = "task-meta";

  const subject = document.createElement("span");
  subject.className = "badge";
  subject.textContent = task.subject;

  const priority = document.createElement("span");
  priority.className = `badge ${task.priority.toLowerCase()}`;
  priority.textContent = `${task.priority} priority`;

  meta.append(subject, priority);
  if (task.due) {
    const due = document.createElement("span");
    due.className = "due-date";
    due.textContent = `Due ${formatDueDate(task.due)}`;
    meta.append(due);
  }

  main.append(title, meta);

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-button";
  deleteButton.textContent = "×";
  deleteButton.setAttribute("aria-label", `Delete ${task.title}`);
  deleteButton.addEventListener("click", () => {
    tasks = tasks.filter((entry) => entry.id !== task.id);
    saveTasks();
    renderTasks();
  });

  item.append(checkbox, main, deleteButton);
  return item;
}

function renderTasks() {
  const filter = filterInput.value;
  const search = searchInput.value.trim().toLowerCase();

  const visibleTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "active" ? !task.completed :
      filter === "completed" ? task.completed : true;

    const matchesSearch =
      task.title.toLowerCase().includes(search) ||
      task.subject.toLowerCase().includes(search);

    return matchesFilter && matchesSearch;
  });

  taskList.replaceChildren(...visibleTasks.map(makeTaskElement));
  emptyState.hidden = visibleTasks.length !== 0;
  taskList.hidden = visibleTasks.length === 0;
  clearCompletedButton.hidden = !tasks.some((task) => task.completed);
  updateSummary();
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  if (!title) {
    titleInput.focus();
    return;
  }

  tasks.unshift(createTask(title, subjectInput.value, priorityInput.value, dueInput.value));
  saveTasks();
  taskForm.reset();
  titleInput.focus();
  renderTasks();
});

filterInput.addEventListener("change", renderTasks);
searchInput.addEventListener("input", renderTasks);

clearCompletedButton.addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
});

document.querySelector("#today-date").textContent = new Date().toLocaleDateString(undefined, {
  weekday: "short",
  month: "short",
  day: "numeric"
});

renderTasks();

}

if (typeof module !== "undefined") {
  module.exports = { createTask, formatDueDate };
}
