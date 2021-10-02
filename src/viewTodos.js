import { dataChange, removeItem } from './objects';

export default function viewTodosForm(projIndex) {
  const contentContainer = document.getElementById('contentContainer');

  while (contentContainer.lastElementChild) {
    contentContainer.removeChild(contentContainer.lastElementChild);
  }

  const allTodosContainer = document.createElement('div');
  allTodosContainer.setAttribute('id', 'allTodosContainer');
  contentContainer.appendChild(allTodosContainer);

  const todosProjectHeader = document.createElement('div');
  todosProjectHeader.setAttribute('id', 'todosProjectHeader');
  todosProjectHeader.classList.add('individualProject');
  todosProjectHeader.classList.add('formLabel');
  allTodosContainer.appendChild(todosProjectHeader);

  const headerDueDate = document.createElement('div');
  headerDueDate.setAttribute('id', 'headerDueDate');
  headerDueDate.classList.add('addDueDate');
  headerDueDate.classList.add('formLabel');
  headerDueDate.textContent = 'Due Date';
  todosProjectHeader.appendChild(headerDueDate);

  const headerPriority = document.createElement('div');
  headerPriority.setAttribute('id', 'headerPriority');
  headerPriority.classList.add('addPriority');
  headerPriority.classList.add('pushLeft');
  headerPriority.classList.add('formLabel');
  headerPriority.textContent = 'Priority';
  todosProjectHeader.appendChild(headerPriority);

  const headerTitle = document.createElement('div');
  headerTitle.setAttribute('id', 'headerTitle');
  headerTitle.classList.add('addTitle');
  headerTitle.classList.add('formLabel');
  headerTitle.textContent = 'Description';
  todosProjectHeader.appendChild(headerTitle);

  const todoCompleteSpacer = document.createElement('div');
  todoCompleteSpacer.classList.add('todoCompleteToggle');
  todoCompleteSpacer.style.visibility = 'hidden';
  todosProjectHeader.appendChild(todoCompleteSpacer);

  // needs to be passed in the project index
  dataChange.allProjects[projIndex].tasks.forEach((element) => {
    const newTodoHead = document.createElement('div');
    newTodoHead.setAttribute('id', `todoHead${element.todoDesc}`);
    newTodoHead.classList.add('individualProject');
    newTodoHead.classList.add('formLabel');
    allTodosContainer.appendChild(newTodoHead);

    const newTodoDueDate = document.createElement('div');
    newTodoDueDate.setAttribute('id', `todoDueDate${element.dueDate}`);
    newTodoDueDate.classList.add('formLabel');
    newTodoDueDate.classList.add('addDueDate');
    newTodoDueDate.textContent = `${element.dueDate}`;
    newTodoHead.appendChild(newTodoDueDate);

    const newTodoPriority = document.createElement('div');
    newTodoPriority.setAttribute('id', `todoPriority${element.todoPriority}`);
    newTodoPriority.classList.add('pushLeft');
    newTodoPriority.classList.add('addPriority');
    newTodoPriority.classList.add('formLabel');
    newTodoPriority.textContent = `${element.todoPriority}`;
    newTodoHead.appendChild(newTodoPriority);

    const newTodoDesc = document.createElement('div');
    newTodoDesc.setAttribute('id', `todoDesc${element.todoDesc}`);
    newTodoDesc.classList.add('addTitle');
    newTodoDesc.classList.add('formLabel');
    newTodoDesc.textContent = `${element.todoDesc}`;
    newTodoHead.appendChild(newTodoDesc);

    const newTodoComplete = document.createElement('button');
    newTodoComplete.setAttribute('id', `todoCompl${element.todoDesc}`);
    newTodoComplete.classList.add('todoCompleteToggle');
    newTodoComplete.textContent = `Done: ${element.isComplete}`;
    newTodoComplete.addEventListener('click', () => {
      element.isComplete = !element.isComplete;
      newTodoComplete.textContent = `Done: ${element.isComplete}`;
    });
    newTodoHead.appendChild(newTodoComplete);

    const newTodoDelete = document.createElement('button');
    newTodoDelete.setAttribute('id', `todoDel${element.todoDesc}`);
    newTodoDelete.classList.add('todoDelete');
    newTodoDelete.textContent = 'Delete';
    newTodoDelete.addEventListener('click', (e) => {
      removeItem.todo(projIndex, dataChange.allProjects[projIndex].tasks.indexOf(element));
      e.stopPropagation();
      refreshForm(projIndex);
    });
    newTodoHead.appendChild(newTodoDelete);
  });
}

function refreshForm(projIndex) {
  viewTodosForm(projIndex);
}
