import { dataChange, removeItem } from './objects.js';
import viewTodosForm from './viewTodos.js';

function refreshForm() {
  viewAllProjectsForm();
}

export default function viewAllProjectsForm() {
  const contentContainer = document.getElementById('contentContainer');

  while (contentContainer.lastElementChild) {
    contentContainer.removeChild(contentContainer.lastElementChild);
  }

  const allProjectsContainer = document.createElement('div');
  allProjectsContainer.setAttribute('id', 'allProjectsContainer');
  contentContainer.appendChild(allProjectsContainer);

  const allProjectsHeader = document.createElement('div');
  allProjectsHeader.setAttribute('id', 'allProjectsHeader');
  allProjectsHeader.classList.add('individualProject');
  allProjectsHeader.classList.add('formLabel');
  allProjectsContainer.appendChild(allProjectsHeader);

  const headerDueDate = document.createElement('div');
  headerDueDate.setAttribute('id', 'headerDueDate');
  headerDueDate.classList.add('addDueDate');
  headerDueDate.classList.add('formLabel');
  headerDueDate.textContent = 'Project Due Date';
  allProjectsHeader.appendChild(headerDueDate);

  const headerPriority = document.createElement('div');
  headerPriority.setAttribute('id', 'headerPriority');
  headerPriority.classList.add('addPriority');
  headerPriority.classList.add('pushLeft');
  headerPriority.classList.add('formLabel');
  headerPriority.textContent = 'Project Priority';
  allProjectsHeader.appendChild(headerPriority);

  const headerTitle = document.createElement('div');
  headerTitle.setAttribute('id', 'headerTitle');
  headerTitle.classList.add('addTitle');
  headerTitle.classList.add('formLabel');
  headerTitle.textContent = 'Project';
  allProjectsHeader.appendChild(headerTitle);

  dataChange.allProjects.forEach((element) => {
    const newProjHead = document.createElement('div');
    newProjHead.setAttribute('id', `projHead${element.projTitle}`);
    newProjHead.classList.add('individualProject');
    newProjHead.classList.add('formLabel');
    allProjectsContainer.appendChild(newProjHead);

    const newProjDueDate = document.createElement('div');
    newProjDueDate.setAttribute('id', `projDueDate${element.dueDate}`);
    newProjDueDate.classList.add('formLabel');
    newProjDueDate.classList.add('addDueDate');
    newProjDueDate.textContent = `${element.dueDate}`;
    newProjHead.appendChild(newProjDueDate);

    const newProjPriority = document.createElement('div');
    newProjPriority.setAttribute('id', `projPriority${element.projPriority}`);
    newProjPriority.classList.add('pushLeft');
    newProjPriority.classList.add('addPriority');
    newProjPriority.classList.add('formLabel');
    newProjPriority.textContent = `${element.projPriority}`;
    newProjHead.appendChild(newProjPriority);

    const newProjTitle = document.createElement('div');
    newProjTitle.setAttribute('id', `projTitle${element.projTitle}`);
    newProjTitle.classList.add('addTitle');
    newProjTitle.classList.add('formLabel');
    newProjTitle.textContent = `${element.projTitle}`;
    newProjHead.appendChild(newProjTitle);

    const deleteProj = document.createElement('button');
    deleteProj.setAttribute('id', `projTitle${element.projTitle}`);
    deleteProj.classList.add('todoCompleteToggle');
    deleteProj.textContent = 'Delete project';
    deleteProj.addEventListener('click', (e) => {
      removeItem.project(dataChange.allProjects.indexOf(element));
      e.stopPropagation();
      refreshForm();
    });
    newProjHead.appendChild(deleteProj);

    // go to project event listener here
    const projIndex = dataChange.allProjects.indexOf(element);
    newProjHead.addEventListener('click', () => {
      viewTodosForm(projIndex);
    });
  });
}
