class ToDoList {
  constructor(id, title, tasks) {
  this.id= id;
  this.title= title;
  this.urgent = false;
  this.tasks= tasks ||[];
  }
}

// saveToStorage() ;{ 
//   var stringifiedNewTask = JSON.stringify(ideaArray);
//   localStorage.setItem('taskArray', stringifiedNewTask);
//   };

//   deleteFromStorage(targetId) ;{
//   var parsedItems = JSON.parse(localStorage.getItem('taskArray'));
//   var itemIndex = parsedItems.findIndex(function(tasks) {
//     return idea.id === targetId;
//   });

//   parsedItems.splice(itemIndex, 1);
//   localStorage.setItem('taskArray', JSON.stringify(parsedItems));
//   };