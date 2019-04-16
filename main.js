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
var taskDisplay = document.querySelector('.task-list');
sidebarTaskList = document.querySelector(".task-list")


window.addEventListener('load', disableButtons);
window.addEventListener('load', enableButtons);
titleInput.addEventListener('keyup', disableButtons)
titleInput.addEventListener('keyup', enableButtons)
itemInput.addEventListener('keyup', disableButtons)
itemInput.addEventListener('keyup', enableButtons)


function disableButtons(e) {
  if(titleInput.value ==="" && itemInput.value === ""){
  addItemButton.disabled = true;
  addItemButton.classList.add('disabled');
  populateCardButton.disabled = true;
  populateCardButton.classList.add('disabled');
  clearCardsButton.disabled = true;
  clearCardsButton.classList.add('disabled');
  }
};

function enableButtons(e){
  if(titleInput.value !=="" && itemInput.value !== ""){
    addItemButton.disabled = false;
    addItemButton.classList.remove('disabled');
    populateCardButton.disabled = false;
    populateCardButton.classList.remove('disabled');
    clearCardsButton.disabled = false;
    clearCardsButton.classList.remove('disabled');
  }
};

function clearTitleInput() {
  titleInput.value = "";
}

function clearTaskInput() {
  itemInput.value = "";
}


var addItems = document.querySelector(".nav-form");
var newTaskDisplay = document.querySelector(".task-display");
addItems.addEventListener("submit", addToList);
addItemButton.addEventListener("click", addToList);

function addToList(e) {
  e.preventDefault();
  newTaskDisplay.innerHTML += `<div>
    <img src="images/delete.svg" class="delete-item">
    <li class="new-task-item" data-id=${Date.now()}>${taskItemInput.value}</li></div>`
  localStorage.setItem("saveTasks", JSON.stringify(taskList));
}

