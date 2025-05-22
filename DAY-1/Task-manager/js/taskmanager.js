export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  generateId = () => `task-${Date.now()}`;

  addTask = ({ title = "Untitled", category = "General" }) => {
    const task = {
      id: this.generateId(),
      title,
      category,
      completed: false
    };
    this.tasks.push(task);
    return task;
  };

  completeTask = (id) => {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    );
  };

  deleteTask = (id) => {
    this.tasks = this.tasks.filter(task => task.id !== id);
  };

  getTasks = () => this.tasks;
}
