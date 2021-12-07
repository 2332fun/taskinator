var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
  var listItemEl = document.createElement("li"); //create new task item
  listItemEl.className = "task-item"; //style new task item
  listItemEl.textContent = "This is a new task."; //add text
  tasksToDoEl.appendChild(listItemEl); //append to task list
};

buttonEl.addEventListener("click", createTaskHandler);
