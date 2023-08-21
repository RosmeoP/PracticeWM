const DELETEBUTTON = "Delete Task";
const UPDATEBUTTON = "Update Task";
const COMPLETEDLABEL = "Task completed";

const tasks = {};

const taskInput = document.querySelector("#taskInput");
const tasksElements = document.querySelector("#tasksList");

let newTask = "";
let currentTask = null;

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

const addTask = () => {
  newTask = taskInput.value;
  const taskExist = TaskExist();
  if (taskExist) {
    tasks[taskExist.id] = BuildTask(
      newTask,
      FactoryTask({
        titleTask: newTask,
        id: taskExist.id,
        status: taskExist.status,
      }),
      taskExist.id,
      taskExist.status
    );
    renderTask();
    return;
  }
  const id = uuidv4();
  const node = FactoryTask({ titleTask: newTask, id, status: false });
  tasks[id] = BuildTask(newTask, node, id, false);

  renderTask();
};

const deleteTask = (key) => {
  delete tasks[key];
  renderTask();
};

const TaskExist = () => {
  let taskExist = null;
  if (currentTask) {
    taskExist = tasks[currentTask.id];
  }
  return taskExist;
};
const updateTask = (key) => {
  const task = tasks[key];
  currentTask = task;
  taskInput.value = task.value;
  taskInput.focus();
};
const updateTaskStatus = (key) => {
  const task = tasks[key];
  task.status = !task.status;
  renderTask();
};

const renderTask = () => {
  taskInput.value = "";
  tasksElements.innerHTML = "";
  Object.values(tasks)?.forEach((x) => tasksElements.appendChild(x.node));
};

const FactoryTask = (task) => {
  const fatherNode = document.createElement("div");
  fatherNode.style.width = "90%";
  fatherNode.style.display = "flex";
  fatherNode.style.justifyContent = "space-between";

  const titleNode = FactoryElement(task.titleTask, "h4");
  titleNode.classList.add("taskTitle");

  const removeButtonNode = FactoryElement(
    "",
    "input",
    {
      type: "button",
      onclick: `deleteTask('${task.id}')`,
    },
    {
      background: "url('./assets/delete.png')",
      width: "2.5rem",
      height: "2rem",
      "background-size": "cover",
      cursor: "pointer",
      padding: "0.5rem",
      margin: "0.5rem",
    }
  );
  const updateButtonNode = FactoryElement(
    "",
    "input",
    {
      type: "button",
      onclick: `updateTask('${task.id}')`,
    },
    {
      background: "url('./assets/editing.png')",
      width: "2.5rem",
      height: "2rem",
      "background-size": "cover",
      cursor: "pointer",
      padding: "0.5rem",
      margin: "0.5rem",
    }
  );
  const compleatedButtonNode = FactoryElement(
    "",
    "input",
    {
      type: "checkbox",
      onclick: `updateTaskStatus('${task.id}')`,
    },
    {
      width: "2.2rem",
      height: "2.2rem",
      cursor: "pointer",
      padding: "0.5rem",
      margin: "0.3rem",
    }
  );

  fatherNode.appendChild(titleNode);
  fatherNode.appendChild(compleatedButtonNode);
  fatherNode.appendChild(removeButtonNode);
  fatherNode.appendChild(updateButtonNode);
  return fatherNode;
};

const FactoryElement = (text, element, options = null, styles = null) => {
  const fatherNode = document.createElement(element);
  const textNode = document.createTextNode(text);
  fatherNode.appendChild(textNode);

  if (options != null) {
    for (const key in options) {
      fatherNode.setAttribute(key, options[key]);
    }
  }

  if (styles != null) {
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        fatherNode.style[key] = styles[key];
      }
    }
  }

  return fatherNode;
};

const BuildTask = (value, node, id, status) => ({
  value,
  node,
  id,
  status,
});

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;

    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
