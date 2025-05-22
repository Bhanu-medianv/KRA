export const createTaskElement = (task, completeFn, deleteFn) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span style="text-decoration: ${task.completed ? 'line-through' : 'none'}">
      ${task.title} (${task.category})
    </span>
    <div>
      <button data-id="${task.id}" class="complete">✅</button>
      <button data-id="${task.id}" class="delete">🗑️</button>
    </div>
  `;

  li.querySelector(".complete").addEventListener("click", () => completeFn(task.id));
  li.querySelector(".delete").addEventListener("click", () => deleteFn(task.id));
  return li;
};
