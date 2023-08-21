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
    tasks[taskExist.id] = {
      value: newTask,
      node: FactoryTask(newTask, taskExist.id),
      id: taskExist.id,
    };
    taskInput.value = "";
    renderTask();
    return;
  }
  taskInput.value = "";
  const id = uuidv4();
  const node = FactoryTask(newTask, id);
  tasks[id] = {
    value: newTask,
    node: node,
    id,
  };

  renderTask();
};

const deleteTask = (key) => {
  delete tasks[key];
  renderTask();
};

const renderTask = () => {
  //   console.log(tasksElements.childNodes.map((x) => x));
  //   const keyTasks = new Set(
  //     ...tasksElements.childNodes?.map((x) => x?.childNodes[0])
  //   );
  tasksElements.innerHTML = "";
  Object.values(tasks)?.forEach((x) => tasksElements.appendChild(x.node));
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

const FactoryTask = (titleTask, id) => {
  const fatherNode = document.createElement("div");
  const titleNode = FactoryElement(titleTask, "h4");

  const removeButtonNode = FactoryElement(DELETEBUTTON, "input", {
    type: "button",
    value: DELETEBUTTON,
    onclick: `deleteTask('${id}')`,
  });
  const updateButtonNode = FactoryElement(UPDATEBUTTON, "input", {
    type: "button",
    value: UPDATEBUTTON,
    onclick: `updateTask('${id}')`,
  });
  const labelcompleatedNode = FactoryElement(COMPLETEDLABEL, "label");
  const compleatedButtonNode = FactoryElement("", "input", {
    type: "checkbox",
  });
  fatherNode.appendChild(titleNode);
  fatherNode.appendChild(removeButtonNode);
  fatherNode.appendChild(updateButtonNode);
  fatherNode.appendChild(labelcompleatedNode);
  fatherNode.appendChild(compleatedButtonNode);
  return fatherNode;
};

const FactoryElement = (text, element, options = null) => {
  const fatherNode = document.createElement(element);
  const textNode = document.createTextNode(text);
  fatherNode.appendChild(textNode);

  if (options != null) {
    for (const key in options) {
      fatherNode.setAttribute(key, options[key]);
    }
  }

  return fatherNode;
};

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
