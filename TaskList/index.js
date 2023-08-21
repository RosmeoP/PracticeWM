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
      FactoryTask(newTask, taskExist.id),
      taskExist.id
    );
    console.log(tasks);
    renderTask();
    return;
  }
  const id = uuidv4();
  const node = FactoryTask(newTask, id);
  tasks[id] = BuildTask(newTask, node, id);

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

  taskInput.value = "";
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

  const removeButtonNode = FactoryElement(
    "",
    "input",
    {
      type: "button",
      onclick: `deleteTask('${id}')`,
    },
    {
      margin: "auto",
      background: "url('./assets/delete.png')",
      width: "2rem",
      height: "2rem",
      "background-size": "cover",
      cursor: "pointer",
    }
  );
  const updateButtonNode = FactoryElement(
    "",
    "input",
    {
      type: "button",
      onclick: `updateTask('${id}')`,
    },
    {
      margin: "auto",
      background: "url('./assets/editing.png')",
      width: "2rem",
      height: "2rem",
      "background-size": "cover",
      cursor: "pointer",
    }
  );
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

const BuildTask = (value, node, id) => ({
  value,
  node,
  id,
});

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
