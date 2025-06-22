document.addEventListener("DOMContentLoaded", function(){
    // 2. Select DOM Elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // 3. Create the addTask Function
    function addTask(){
         const taskText = taskInput.value.trim();
         // 4. Check if task is not empty
         if (taskText === ""){
            alert("enter a task");
            return;
         } 
        
    // 5. Task Creation
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
    // 6. Create Remove Button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "remove-btn";
    // 7. Assign onclick event to Remove Button
            removeButton.addEventListener('click', function(){
                 taskList.removeChild(taskItem);
            });
     // 8. Append button to li, and li to ul
            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
       
    // 9. Clear input field
         taskInput.value = '';
    };
    // Add task when button is clicked
    addButton.addEventListener("click", addTask);
    // Add task when Enter key is pressed
    taskInput.addEventListener("keypress", function(event){
        if (event.key === "Enter"){
            addTask();
        }
    });
 
    addTask();
});