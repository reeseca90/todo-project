import allProjects from './objects.js';

export default function newTodoForm() {
    const contentContainer = document.getElementById('contentContainer');

    while (contentContainer.lastElementChild) {
        contentContainer.removeChild(contentContainer.lastElementChild);
    }

    const newTodoForm = document.createElement('form');
    newTodoForm.setAttribute('id', 'newTodoForm');

    const todoForProj = document.createElement('select');
    todoForProj.setAttribute('id', 'todoForProj');

    allProjects.forEach(element => {
        todoForProj.innerHTML += `<option value="${element.projTitle}">${element.projTitle}</option>`;
    });

    const todoForProjLabel = document.createElement('label');
    todoForProjLabel.setAttribute('for','todoForProj');
    todoForProjLabel.className = 'formLabel';
    todoForProjLabel.textContent = 'Project:';
    newTodoForm.appendChild(todoForProjLabel);
    newTodoForm.appendChild(todoForProj);

    const TodoDescInput = document.createElement('input');
    TodoDescInput.setAttribute('type', 'text');
    TodoDescInput.setAttribute('id', 'descInput');
    const TodoDescLabel = document.createElement('label');
    TodoDescLabel.setAttribute('for', 'descInput');
    TodoDescLabel.setAttribute('class', 'formLabel');
    TodoDescLabel.textContent = 'Description:'
    newTodoForm.appendChild(TodoDescLabel);
    newTodoForm.appendChild(TodoDescInput);

    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('id', 'dueDate');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'dueDate');
    dueDateLabel.className = 'formLabel';
    dueDateLabel.textContent = 'Due Date:';
    newTodoForm.appendChild(dueDateLabel);
    newTodoForm.appendChild(dueDate); // return format YYYY-MM-DD

    const TodoPrioBox = document.createElement('div');
    TodoPrioBox.setAttribute('id', 'prioBox');
    TodoPrioBox.className = 'formLabel';
    TodoPrioBox.textContent = 'Priority:';
    newTodoForm.appendChild(TodoPrioBox);

    const TodoPrioInputLow = document.createElement('input');
    TodoPrioInputLow.setAttribute('type', 'radio');
    TodoPrioInputLow.setAttribute('id', 'prioInputLow');
    TodoPrioInputLow.setAttribute('name', 'priority');
    TodoPrioInputLow.setAttribute('value', 'low');
    const TodoPrioLabelLow = document.createElement('label');
    TodoPrioLabelLow.setAttribute('for', 'prioInputLow');
    TodoPrioLabelLow.setAttribute('class', 'radioLabel');
    TodoPrioLabelLow.textContent = 'Low'
    TodoPrioBox.appendChild(TodoPrioInputLow);
    TodoPrioBox.appendChild(TodoPrioLabelLow);

    const TodoPrioInputMed = document.createElement('input');
    TodoPrioInputMed.setAttribute('type', 'radio');
    TodoPrioInputMed.setAttribute('id', 'prioInputMed');
    TodoPrioInputMed.setAttribute('name', 'priority');
    TodoPrioInputMed.setAttribute('value', 'med');
    const TodoPrioLabelMed = document.createElement('label');
    TodoPrioLabelMed.setAttribute('for', 'prioInputMed');
    TodoPrioLabelMed.setAttribute('class', 'radioLabel');
    TodoPrioLabelMed.textContent = 'Medium';
    TodoPrioBox.appendChild(TodoPrioInputMed);
    TodoPrioBox.appendChild(TodoPrioLabelMed);

    const TodoPrioInputHigh = document.createElement('input');
    TodoPrioInputHigh.setAttribute('type', 'radio');
    TodoPrioInputHigh.setAttribute('id', 'prioInputHigh');
    TodoPrioInputHigh.setAttribute('name', 'priority');
    TodoPrioInputHigh.setAttribute('value', 'high');
    const TodoPrioLabelHigh = document.createElement('label');
    TodoPrioLabelHigh.setAttribute('for', 'prioInputHigh');
    TodoPrioLabelHigh.setAttribute('class', 'radioLabel');
    TodoPrioLabelHigh.textContent = 'High'
    TodoPrioBox.appendChild(TodoPrioInputHigh);
    TodoPrioBox.appendChild(TodoPrioLabelHigh);

    const submit = document.createElement('button')
    submit.setAttribute('type', 'button');
    submit.className = 'submitButton';
    submit.textContent = 'Create New Todo';
    newTodoForm.appendChild(submit);

    contentContainer.appendChild(newTodoForm);
}