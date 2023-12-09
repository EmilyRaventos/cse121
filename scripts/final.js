document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    const taskElement = document.createElement("span");
    const completeButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    taskElement.textContent = taskText;
    taskElement.classList.add("task");

    //   completeButton.textContent = "Complete";
    //   completeButton.classList.add("complete-button");

    deleteButton.textContent = "Complete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    //   completeButton.addEventListener("click", () => {
    //     taskElement.classList.toggle("complete");
    //   });

    li.appendChild(taskElement);
    //   li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
  }

  addTaskButton.addEventListener("click", addTask);

  taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
