import { TaskManager } from "./taskmanager.js";
import { saveTasks, loadTasks } from "./storage.js";
import { createTaskElement } from "./utils.js";

const manager = new TaskManager();
const taskList = document.getElementById("task-list");
const titleInput = document.getElementById("task-title");
const categoryInput = document.getElementById("task-category");
const addButton = document.getElementById("add-task");

const render = () => {
  taskList.innerHTML = "";
  manager.getTasks().forEach(task => {
    taskList.appendChild(
      createTaskElement(task, (id) => {
        manager.completeTask(id);
        saveTasks(manager.getTasks());
        render();
      }, (id) => {
        manager.deleteTask(id);
        saveTasks(manager.getTasks());
        render();
      })
    );
  });
};

addButton.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const category = categoryInput.value.trim();
  if (!title) return alert("Task title is required");

  const task = manager.addTask({ title, category });
  saveTasks(manager.getTasks());
  render();
  titleInput.value = "";
  categoryInput.value = "";
});
manager.tasks = loadTasks();
render();
  
