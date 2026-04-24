function addTask() {
  const taskText = document.getElementById("taskInput").value;
  const time = document.getElementById("timeInput").value;

  if (taskText === "") {
    alert("Enter a task!");
    return;
  }

  const li = document.createElement("li");

  let text = taskText;
  if (time !== "") {
    text += " (deletes in " + time + "s)";
  }

  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  if (time !== "") {
    setTimeout(() => {
      li.remove();
    }, time * 1000);
  }

  document.getElementById("taskInput").value = "";
  document.getElementById("timeInput").value = "";
}
