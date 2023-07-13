function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = input.value.trim();
  
    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      taskList.appendChild(listItem);
      input.value = '';
    }
  }