function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    
    if (taskValue === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
        <input type="text" class="edit-input" style="display:none;">
        <button class="complete" onclick="toggleComplete(this)">Complete</button>
    `;
    
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('.task-text');
    const editInput = taskItem.querySelector('.edit-input');
    const editButton = button;
    
    if (editInput.style.display === 'none') {
        editInput.style.display = 'inline';
        editInput.value = taskText.textContent;
        editButton.textContent = 'Save';
        taskText.style.display = 'none';
    } else {
        taskText.textContent = editInput.value;
        editInput.style.display = 'none';
        editButton.textContent = 'Edit';
        taskText.style.display = 'inline';
    }
}

function toggleComplete(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}
