const newTodoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTodo() {
    const newTodoText = newTodoInput.value; 
    newTodoInput.value = ''; 

    const listItem = document.createElement('li');
    const completeCheckBox = document.createElement('input');
    const todoText = document.createElement('span');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    completeCheckBox.type = 'checkbox';
    todoText.textContent = newTodoText;
    editBtn.textContent = 'Edit';
    editBtn.classList.add('editBtn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');

    listItem.appendChild(completeCheckBox);
    listItem.appendChild(todoText);
    listItem.appendChild(editBtn);
    listItem.appendChild(deleteBtn);

    todoList.appendChild(listItem);

    deleteBtn.addEventListener('click', function () {
        todoList.removeChild(listItem);
    });

    editBtn.addEventListener('click', function () {
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.classList.add('editInput');
        editInput.value = todoText.textContent;
        listItem.insertBefore(editInput, todoText);
        listItem.removeChild(todoText);
        editBtn.textContent = 'Save';

        editBtn.removeEventListener('click', arguments.callee);
        editBtn.addEventListener('click', function saveEdit() {
            todoText.textContent = editInput.value;
            listItem.insertBefore(todoText, editInput);
            listItem.removeChild(editInput);
            editBtn.textContent = 'Edit';

            editBtn.removeEventListener('click', saveEdit);
            editBtn.addEventListener('click', arguments.callee);
        });
    });
}

addBtn.addEventListener('click', addTodo);
