const DELETEBUTTON = "Delete Task";
const UPDATEBUTTON = "Update Task";

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

  fatherNode.appendChild(titleNode);
  fatherNode.appendChild(removeButtonNode);
  fatherNode.appendChild(updateButtonNode);

  return fatherNode;
};

const FactoryElement = (text, element) => {
  const fatherNode = document.createElement(element);
  const textNode = document.createTextNode(text);
  fatherNode.appendChild(textNode);
  return fatherNode;
};
