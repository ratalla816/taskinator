var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 


//Right now, the createTaskHandler() function does a lot. It reads the form elements on submission, 
//then creates quite a bit of HTML content and adds it to the page. 
//     var createTaskHandler = function(event) {    \\
//      event.preventDefault();                      \\
//This works for our needs at the moment, but leaving it like this may lead to a headache when we add more features to the application. 
//This may be a good time to separate createTaskHandler() into the following two different functions:
//*One function to handle the form submission, get the form values, and pass those values to another function as arguments
//*One function to accept the form values as arguments and use them to create the new task item's HTML

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
  // ** We didn't have to use the innerHTML property here. 
  //Instead, we could have created HTML elements for the title and type separately and then appended them to the container element. 
  //While both approaches work, innerHTML lets us create fewer variables, but with less readable code.
  //Remember, there's usually more than one way to complete a task. It's up to you to decide which way to go. **

  listItemEl.appendChild(taskInfoE1);


  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl); 
  }; 

  formEl.addEventListener("submit", createTaskHandler);