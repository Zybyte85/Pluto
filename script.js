let taskData;

taskData = JSON.parse(localStorage.getItem('taskData'));
if(taskData == null) {
  taskData = {
    'high': [
      {
        'name': 'Task 1',
        'dueDate': 'No due date'
      },
    ],
    'medium': [],
    'low': []
  }
}

init(taskData)
console.log(taskData);


var modal = document.getElementById('newModal')

function putInBrowserStorage() {
  console.log('Putting in browser storage');
  localStorage.setItem('taskData', JSON.stringify(taskData));
}

function init(taskData) {
  for(i in taskData) {
    for(j in taskData[i]) {
      console.log(taskData[i][j].name);
      createButton(taskData[i][j].name, i);
    }
  }
}

function createButton(name, priority) {
  if(name == '') {
    var name = 'New Task';
  }
  console.log('Running createButton: ' + name + ' ' + priority);

  var button = document.createElement('button');
  button.innerText = name;
  button.className = 'task-' + priority;
  button.onclick = () => onTaskClick(button);
  document.getElementsByClassName(priority)[0].appendChild(button);
}

function addTask(name, priority, dueDate) {
  console.log(taskData);

  taskData[priority].push({name: name, dueDate: dueDate});

  putInBrowserStorage();
  createButton(name, priority);
}

function openNewMenu() {
  modal.style.display = 'block';
}

function openEditMenu(task) { 
  modal.style.display = 'block';
  var button = document.createElement('button');
  if (task.classList.contains('task-done')) {
    button.innerText = 'Mark uncompleted';
  }
  else {
    button.innerText = 'Mark completed';
  }
  
  button.className = 'mark-button';
  button.onclick = () => toggleTaskDone(task);
  document.getElementsByClassName('modal-content')[0].appendChild(button);
}

function closeNewMenu() {
  var markButton = document.getElementsByClassName('mark-button')[0];
  if(markButton) {
    document.getElementsByClassName('modal-content')[0].removeChild(markButton);
  }
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeNewMenu();
  }
}

function toggleTaskDone(button) {
  closeNewMenu();
  button.classList.toggle('task-done');

  if(button.classList.contains('task-done')) {
    document.getElementsByClassName('done')[0].appendChild(button);
  }
  else {
/* Get the priortiy of the button and move it back to the div if it is already marked done */
    document.getElementsByClassName(button.classList[0].split('-')[1])[0].appendChild(button);
  }
}

function onTaskClick(button) {
  console.log('Task clicked', button);
  openEditMenu(button);
}