document.addEventListener("DOMContentLoaded", function () {
    // 1. Select DOM Elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    // 2. Load existing tasks from Local Storage on page load
    loadTasks();
  
    // 3. Function to add a task
    function addTask(taskText = null, save = true) {
      if (taskText === null) {
        taskText = taskInput.value.trim(); // get value from input if not passed
      }
  
      if (taskText === "") {
        alert("enter a task");
        return;
      }
  
      // 4. Create <li> and remove button
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
  
      // 5. Remove from DOM and storage
      removeButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
        removeFromLocalStorage(taskText);
      });
  
      // 6. Append button to task, and task to list
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
  
      // 7. Clear input
      taskInput.value = '';
  
      // 8. Save to Local Storage (unless we're loading)
      if (save) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.push(taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
      }
    }
  
    // 4. Load tasks from Local Storage
    function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.forEach(task => addTask(task, false)); // false: don't re-save
    }
  
    // 5. Remove task from Local Storage
    function removeFromLocalStorage(taskText) {
      let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  
    // 6. Add task on button click
    addButton.addEventListener("click", function () {
      addTask();
    });
  
    // 7. Add task on Enter key
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });
  