export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));'task'
};

export const loadTasks = () => {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
};