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

var taskFormHandler = function(event) { 
  event.preventDefault(); 
  var taskNameInput = document.querySelector("input[name='task-name'").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // ** check if input values are empty strings \\
  if (taskNameInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }
  // ** When used in a condition, empty strings and the number 0 are evaluated as falsy values. 
  // When we use the syntax !taskNameInput, we're checking to see if the taskNameInput variable is empty by asking if it's a falsy value.
  // That's what the "not" operator ! is doing here. Because the default is to check for a true value, the ! is used to check for the opposite (false) value. **
  
  formEl.reset();

  // reset form fields for task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  // send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
};

  // ** Target the appropriate HTML elements in Dev Tools by using console.dir **
  // var taskNameInput = document.querySelector("input[name='task-name']");
  // console.dir(taskNameInput);

  var createTaskEl = function (taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li"); 
    listItemEl.className = "task-item"; 
  
    // Step 2. create div to hold task info and add to list item **
    var taskInfoEl = document.createElement("div");
  
    // Step 3. give it a class name
    taskInfoEl.className = "task-info";
  
    // Step 4. add HTML content to div **
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    // ** We didn't have to use the innerHTML property here. 
    //Instead, we could have created HTML elements for the title and type separately and then appended them to the container element. 
    //While both approaches work, innerHTML lets us create fewer variables, but with less readable code.
    //Remember, there's usually more than one way to complete a task. It's up to you to decide which way to go. **
    listItemEl.appendChild(taskInfoEl);

    console.dir(listItemEl);
       // add entire list item to list
    tasksToDoEl.appendChild(listItemEl); 
  };
     
  formEl.addEventListener("submit", taskFormHandler);