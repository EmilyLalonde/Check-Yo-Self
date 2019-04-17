class ToDoList {
  constructor(title, id, tasks, urgent=false) {
    this.title = title;
    this.id = id;
    this.tasks = tasks || [];
    this.urgent = urgent || false;
    this.urgentImg;
    this.urgent ? this.urgentImg = 'images/urgent-active.svg' : this.urgentImg = 'images/urgent.svg'
  }

  saveToStorage(newTask) {
    var stringifiedNewTask = JSON.stringify(newTask);
    localStorage.setItem('storageArray', stringifiedNewTask);
  };

  deleteFromStorage(targetId) {
    var parsedItems = JSON.parse(localStorage.getItem('storageArray'));
    var itemIndex = parsedItems.findIndex(function (tasks) {
      return tasks.id === targetId;
    });

    parsedItems.splice(itemIndex, 1);
    localStorage.setItem('storageArray', JSON.stringify(parsedItems));
  };
}