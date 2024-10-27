const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Task Add Function
function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  const task = document.createElement('li');
  task.className = "flex justify-between items-center bg-gray-200 p-2 rounded";

  // Task Content
  const taskContent = document.createElement('span');
  taskContent.className = "flex-1";
  taskContent.innerText = taskText;

  // Edit Button
  const editButton = document.createElement('button');
  editButton.className = "text-blue-500 mr-2";
  editButton.innerText = "Edit";
  editButton.onclick = () => editTask(taskContent, editButton);

  // Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.className = "text-red-500";
  deleteButton.innerText = "Delete";
  deleteButton.onclick = () => deleteTask(task);

  // Append Elements
  task.appendChild(taskContent);
  task.appendChild(editButton);
  task.appendChild(deleteButton);
  todoList.appendChild(task);

  // Clear input field after adding task
  todoInput.value = '';
}

// Edit Task Function
function editTask(taskContent, editButton) {
  if (editButton.innerText === "Edit") {
    const input = document.createElement('input');
    input.type = "text";
    input.value = taskContent.innerText;
    input.className = "flex-1 border border-gray-300 rounded px-2 py-1";
    taskContent.replaceWith(input);
    editButton.innerText = "Save";

    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        saveEdit(input, taskContent, editButton);
      }
    });
  } else {
    saveEdit(taskContent.previousSibling, taskContent, editButton);
  }
}

// Save Edited Task
function saveEdit(input, taskContent, editButton) {
  const updatedText = input.value.trim();
  if (updatedText) {
    taskContent.innerText = updatedText;
    input.replaceWith(taskContent);
    editButton.innerText = "Edit";
  }
}

// Delete Task Function
function deleteTask(task) {
  task.remove();
}
