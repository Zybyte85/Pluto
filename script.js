var modal = document.getElementById("newModal")

function createButton(name, priority) {
  if(name == "") {
    var name = "New Task";
  }
  console.log("Running createButton: " + name + " " + priority);

  var button = document.createElement("button");
  button.innerText = name;
  button.className = "task-" + priority;
  button.onclick = () => onTaskClick(button);
  document.getElementsByClassName(priority)[0].appendChild(button);
}

function openNewMenu() {
  modal.style.display = "block";
}

function closeNewMenu() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeNewMenu();
  }
}

function onTaskClick(button) {
  console.log("Task clicked", button);
  button.classList.toggle('task-done');
  document.getElementsByClassName("done")[0].appendChild(button);
}
