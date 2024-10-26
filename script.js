var modal = document.getElementById("newModal")

function createButton(name, priority) {
  console.log("Running createButton: " + name + " " + priority);
    
  var button = document.createElement("button");
  button.innerText = name;
  button.className = "task-" + priority;
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