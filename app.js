const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");

function updateEmptyState() {
  emptyState.hidden = taskList.children.length > 0;
}

function createTask(text) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed", checkbox.checked);
  });

  const span = document.createElement("span");
  span.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.addEventListener("click", () => {
    li.remove();
    updateEmptyState();
  });

  li.append(checkbox, span, deleteButton);
  return li;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (!text) return;

  taskList.appendChild(createTask(text));
  input.value = "";
  input.focus();
  updateEmptyState();
});

updateEmptyState();
