import { dataChange, createNew } from './objects';

function refreshForm() {
  newTodoForm();
}

export default function newTodoForm() {
  const contentContainer = document.getElementById('contentContainer');

  while (contentContainer.lastElementChild) {
    contentContainer.removeChild(contentContainer.lastElementChild);
  }

  const newTodoForm = document.createElement('form');
  newTodoForm.setAttribute('id', 'newTodoForm');

  const todoForProj = document.createElement('select');
  todoForProj.setAttribute('id', 'todoForProj');

  dataChange.allProjects.forEach((element) => {
    todoForProj.innerHTML += `<option value="${element.projTitle}">${element.projTitle}</option>`;
  });

  const todoForProjLabel = document.createElement('label');
  todoForProjLabel.setAttribute('for', 'todoForProj');
  todoForProjLabel.className = 'formLabel';
  todoForProjLabel.textContent = 'Project:';
  newTodoForm.appendChild(todoForProjLabel);
  newTodoForm.appendChild(todoForProj);

  const todoDescInput = document.createElement('input');
  todoDescInput.setAttribute('type', 'text');
  todoDescInput.setAttribute('id', 'descInput');
  const todoDescLabel = document.createElement('label');
  todoDescLabel.setAttribute('for', 'descInput');
  todoDescLabel.setAttribute('class', 'formLabel');
  todoDescLabel.textContent = 'Description:';
  newTodoForm.appendChild(todoDescLabel);
  newTodoForm.appendChild(todoDescInput);

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('id', 'dueDate');
  const dueDateLabel = document.createElement('label');
  dueDateLabel.setAttribute('for', 'dueDate');
  dueDateLabel.className = 'formLabel';
  dueDateLabel.textContent = 'Due Date:';
  newTodoForm.appendChild(dueDateLabel);
  newTodoForm.appendChild(dueDateInput); // return format YYYY-MM-DD

  const todoPrioBox = document.createElement('div');
  todoPrioBox.setAttribute('id', 'prioBox');
  todoPrioBox.className = 'formLabel';
  todoPrioBox.textContent = 'Priority:';
  newTodoForm.appendChild(todoPrioBox);

  const todoPrioInputLow = document.createElement('input');
  todoPrioInputLow.setAttribute('type', 'radio');
  todoPrioInputLow.setAttribute('id', 'prioInputLow');
  todoPrioInputLow.setAttribute('name', 'priority');
  todoPrioInputLow.setAttribute('value', 'low');
  const todoPrioLabelLow = document.createElement('label');
  todoPrioLabelLow.setAttribute('for', 'prioInputLow');
  todoPrioLabelLow.setAttribute('class', 'radioLabel');
  todoPrioLabelLow.textContent = 'Low';
  todoPrioBox.appendChild(todoPrioInputLow);
  todoPrioBox.appendChild(todoPrioLabelLow);

  const todoPrioInputMed = document.createElement('input');
  todoPrioInputMed.setAttribute('type', 'radio');
  todoPrioInputMed.setAttribute('id', 'prioInputMed');
  todoPrioInputMed.setAttribute('name', 'priority');
  todoPrioInputMed.setAttribute('value', 'med');
  const todoPrioLabelMed = document.createElement('label');
  todoPrioLabelMed.setAttribute('for', 'prioInputMed');
  todoPrioLabelMed.setAttribute('class', 'radioLabel');
  todoPrioLabelMed.textContent = 'Medium';
  todoPrioBox.appendChild(todoPrioInputMed);
  todoPrioBox.appendChild(todoPrioLabelMed);

  const todoPrioInputHigh = document.createElement('input');
  todoPrioInputHigh.setAttribute('type', 'radio');
  todoPrioInputHigh.setAttribute('id', 'prioInputHigh');
  todoPrioInputHigh.setAttribute('name', 'priority');
  todoPrioInputHigh.setAttribute('value', 'high');
  const todoPrioLabelHigh = document.createElement('label');
  todoPrioLabelHigh.setAttribute('for', 'prioInputHigh');
  todoPrioLabelHigh.setAttribute('class', 'radioLabel');
  todoPrioLabelHigh.textContent = 'High';
  todoPrioBox.appendChild(todoPrioInputHigh);
  todoPrioBox.appendChild(todoPrioLabelHigh);

  const submit = document.createElement('button');
  submit.setAttribute('type', 'button');
  submit.className = 'submitButton';
  submit.textContent = 'Create New Todo';
  submit.addEventListener('click', submitNew);
  function submitNew() {
    function projIndex(element) {
      return (`${element.projTitle}` == todoForProj.value);
    }

    if (document.querySelector('input[name="priority"]:checked') == null) {
      alert('Select a priority level');
    } else {
      const index = dataChange.allProjects.findIndex(projIndex);
      projIndex();
      const description = todoDescInput.value;
      const dueDate = dueDateInput.value;
      const priority = document.querySelector('input[name="priority"]:checked').value;

      createNew.todo(index, description, priority, dueDate);
      console.table(dataChange.allProjects[index].tasks);

      refreshForm();
    }
  }
  newTodoForm.appendChild(submit);

  contentContainer.appendChild(newTodoForm);
}
