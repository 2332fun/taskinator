var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li"); //created task item
    listItemEl.className = "task-item"; //styled task item
    listItemEl.textContent = "This is a new task."; //added text display
    tasksToDoEl.appendChild(listItemEl); //appended to task list
  }

  buttonEl.addEventListener("click", createTaskHandler); //on button click, create a task