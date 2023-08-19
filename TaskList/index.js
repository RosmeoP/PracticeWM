const DELETEBUTTON = "Delete Task";
const UPDATEBUTTON = "Update Task";
const COMPLETEDLABEL = "Task completed";

const tasks = {};

const taskInput = document.querySelector("#taskInput");
const tasksElements = document.querySelector("#tasksList");
let newTask = "";
let currentTask = null;

const addTask = () => {
  newTask = taskInput.value;
  const taskExist = TaskExist(newTask);
  if (taskExist) {
    alert(`The task ${newTask} exist.`);
    return;
  }

  const node = FactoryTask(newTask);
  tasks[newTask] = {
    value: newTask,
    node: node,
    id: uuidv4(),
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
  console.log(tasks);
};

const TaskExist = (key) => {
  const taskExist = tasks[key]?.value;
  taskExist;
};

const FactoryTask = (titleTask) => {
  const fatherNode = document.createElement("div");
  const titleNode = FactoryElement(titleTask, "h4");

  const removeButtonNode = FactoryElement(DELETEBUTTON, "button");
  const updateButtonNode = FactoryElement(UPDATEBUTTON, "button");
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
  if (options != null) {
    for (const key in options) {
      fatherNode.setAttribute(key, options[key]);
    }
  }

  fatherNode.appendChild(textNode);
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
