var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
  event.preventDefault(); 

  // ** Target the appropriate HTML elements in Dev Tools by using console.dir **
  // var taskNameInput = document.querySelector("input[name='task-name']");
  // console.dir(taskNameInput);
  
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  console.log(taskTypeInput);
  
 // CREATING NEW LIST ITEMS AND STORING CONTENT TO BROWSER MEMORY //
 
 // step 1. create list item
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 

  // Step 2. create div to hold task info and add to list item **
  var taskInfoE1 = document.createElement("div");

  // Step 3. give it a class name
  taskInfoE1.className = "task-info";

  // Step 4. add HTML content to div **
  taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

  listItemEl.appendChild(taskInfoE1);


  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl); 
  }; 

  formEl.addEventListener("submit", createTaskHandler);