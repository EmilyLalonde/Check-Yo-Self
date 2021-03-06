var searchInput = document.querySelector('.search-input');
var searchButton = document.querySelector('.search-button')
var sideBar = document.querySelector('.side-bar')
var titleInput = document.querySelector('.title-input');
var itemInput = document.querySelector('.item-input');
var addItemButton = document.querySelector('.plus-button');
var populateCardButton = document.querySelector('#populate-card-button')
var clearCardsButton = document.querySelector('#clear-cards-button')
var filterUrgencyButton = document.querySelector('#filter-urgency-button')
var urgentButton = document.querySelector('.urgent-button');
var deleteCardButton = document.querySelector('.delete-card-button');
var taskField = document.querySelector('.task-field')
var taskManager = document.querySelector('.task-manager');
var storageArray = JSON.parse(localStorage.getItem('taskArray')) || [];
var taskList = document.querySelector('.task-list');
var tasks = document.querySelector('.tasks');
var deleteListItem = document.querySelector('.delete-button');

window.addEventListener('load', restoreIdeas);
window.addEventListener('load', disableButtons);
window.addEventListener('load', enableButtons);
titleInput.addEventListener('keyup', disableButtons)
titleInput.addEventListener('keyup', enableButtons)
itemInput.addEventListener('keyup', disableButtons)
itemInput.addEventListener('keyup', enableButtons)
populateCardButton.addEventListener('click', createTask)
addItemButton.addEventListener('click', createNewListItems);
taskList.addEventListener('click', function (e) {
  if (e.target.className === 'delete-button') {
    e.target.parentElement.remove();
    var removedTask = new ToDoList();

    var targetId = parseInt(e.target.parentElement.parentElement.dataset.id);
    removedTask.deleteFromStorage(targetId);
  }
});
taskField.addEventListener('click', function (e) {
  if (e.target.className === 'delete-card-button') {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});


function disableButtons(e) {
  if (titleInput.value === "" && itemInput.value === "") {
    addItemButton.disabled = true;
    addItemButton.classList.add('disabled');
    populateCardButton.disabled = true;
    populateCardButton.classList.add('disabled');
    clearCardsButton.disabled = true;
    clearCardsButton.classList.add('disabled');
  }
};

function enableButtons(e) {
  if (titleInput.value !== "" && itemInput.value !== "") {
    addItemButton.disabled = false;
    addItemButton.classList.remove('disabled');
    populateCardButton.disabled = false;
    populateCardButton.classList.remove('disabled');
    clearCardsButton.disabled = false;
    clearCardsButton.classList.remove('disabled');
  }
};

function clearTitleInput() {
  titleInput.value = '';
}

function clearItemInput() {
  itemInput.value = '';
}

function clearSideBar() {
  taskField.innerHTML = '';
}

function createNewListItems() {
  taskList.innerHTML +=
    `<div class="sidebar-list-item">
			<img src="images/delete.svg" class="delete-button">
			<li class="tasks" data-id="${Date.now()}">${itemInput.value}</li>
    </div>`
  clearItemInput();
}


//map over newTasks to create 
function populateCard(newTasks) {
  var newCard =
    `<article class = "card" data-id="${newTasks.id}">
      <h2 class="editable-title">${newTasks.title}</h2>
      <section class = "task-list-card">
      </section>
      <footer>
        <a class= "urgent-button">
          <img src="images/urgent.svg" class="urgent-button" alt="Lightning urgent Button"><span class="urgent-text">URGENT</span>
        </a>
        <a class="delete">
          <img src="images/delete.svg" class="delete-card-button" alt="Delete Card X Button"><span class="delete-text">DELETE</span>
        </a>
      </footer>
    </article>`
  taskField.insertAdjacentHTML('afterbegin', newCard);
};

function findListItems(tasks){
  var gotListItems ='';
  for(var i = 0; i < tasks.items.length; i++) {
    gotListItems +=
    `<li class="list-item">
    <input type="checkbox" class="done-icon" data-id=${tasks.items[i].id} id=index${i}>
    <label for="id=index${i}" class="card-todo-item">${tasks.items[i].content}</label>
    </li>`
  }
 return gotListItems;
};

function instantiateTask(newTask) {
  var newTask = new ToDoList (titleInput.value, Date.now(), itemInput.value);
  storageArray.push(newTask);
  newTask.saveToStorage(storageArray);
  return newTask;
};

function createTask () {
var task = instantiateTask();
populateCard(task);
}



function restoreIdeas() {
  storageArray = storageArray.map(function(oldTask) {
    var restoredTask = new Task(oldTask.title, oldTask.id, oldTasks.task);
    populateCard(restoredIdea);
    return restoredTask;
  });
};
