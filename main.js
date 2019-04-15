var searchInput = document.querySelector('.search-input');
var searchButton = document.querySelector('.search-button')
var titleInput = document.querySelector('.title-input');
var itemInput = document.querySelector('.item-input');
var addItemButton = document.querySelector('.plus-button');
var populateCardButton = document.querySelector('#populate-card-button')
var clearCardsButton = document.querySelector('#clear-cards-button')
var filterUrgencyButton = document.querySelector('.filter-urgency-button')
var urgentButton = document.querySelector('.urgent-button');
var deleteCardButton = document.querySelector('.delete-card-button');
var taskField = document.querySelector('.task-field')
var storageArray = JSON.parse(localStorage.getItem('taskArray')) || [];


populateCardButton.addEventListener('click', handleMakeButton);
clearCardsButton.addEventListener('click', handleClearButton);
window.addEventListener('load', handleMakeButton);
titleInput.addEventListener('keyup', handleMakeButton);
itemInput.addEventListener('keyup', handleMakeButton);
titleInput.addEventListener('keyup', handleClearButton);
itemInput.addEventListener('keyup', handleClearButton);
// addItemButton.addEventListener('click' addTask); 


function hiddenMessage() {
  var displayMessage = document.getElementById('message');
  if (taskField === "") {
    displayMessage.style.visibility = 'visible';
  } else {
    displayMessage.style.visibility = 'hidden';
  }
}

var addItemButton = document.querySelector('.plus-button');
var addedTasks = document.querySelector('.added-tasks')

function addTask (e) {
  e.preventDefault()
  var text = this.querySelector('[tasks=item]').value
  var item = {
    text,
    done:false,
  }
  items.push(item)
  populateList(items,itemsList)
  this.reset()
}

addItems.addEventListener('submit', addItem)

function populateList(tasks = [], tasksList) {  
  tasksList.innerHTML = tasks
    .map((task, i) => {
      return `
      <li>
      <input type="checkbox" data-index=${i} id="item${i}"
      ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${task.text}</label>
      </li>
    `
    })
    .join('')
}











function handleMakeButton(e) {
  e.preventDefault()
  if (titleInput.value.length < 1 && itemInput.value.length < 1) {
    populateCardButton.disabled = true;
    populateCardButton.classList.add('disabled')
  } else {
    populateCardButton.disabled = false;
    populateCardButton.classList.remove('disabled')
  }
};

function handleClearButton(e) {
  e.preventDefault()
  if (titleInput.value.length < 1 && itemInput.value.length < 1) {
    clearCardsButton.disabled = true;
    clearCardsButton.classList.add('disabled')
  } else {
    clearCardsButton.disabled = false;
    clearCardsButton.classList.remove('disabled')
  }
};

function addTask() {

}

function createCard(newToDo) {
  var newToDo = `<article class="card data-id="${newToDo.id}">
<h2>Title</h2>
<section class="task-list">
</section>
<div class="task-buttons">
<footer>
  <a class= "urgent-toggle">
  <img src="images/urgent.svg" class= "urgent-button"><p class = "urgent-text">URGENT</p>
  </a>
  <a class="delete-x">
  <img src="images/delete.svg" class= "delete-card-button"><p class = "delete-text">DELETE</p>
</a>
</footer>
</article>
</main>
<script src="todo-list.js"></script>
<script src="main.js"></script>`
}

