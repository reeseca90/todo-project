import newProjectForm from './newProjectForm.js';
import newTodoForm from './newTodoForm.js';

export default function createMainMenu() {
    const home = document.getElementById('home');

    const mainMenu = document.createElement('div');
    mainMenu.setAttribute('id', 'mainMenu');

    const newProjButton = document.createElement('button');
    newProjButton.className = 'mainMenuButton';
    newProjButton.textContent = 'Create New Project';
    newProjButton.addEventListener('click', newProjectForm);
    mainMenu.appendChild(newProjButton);

    const newTodoButton = document.createElement('button');
    newTodoButton.className = 'mainMenuButton';
    newTodoButton.textContent = 'Create New Todo';
    newTodoButton.addEventListener('click', newTodoForm);
    mainMenu.appendChild(newTodoButton);

    const loadDataButton = document.createElement('button');
    loadDataButton.className = 'mainMenuButton';
    loadDataButton.textContent = 'Load Data';
    mainMenu.appendChild(loadDataButton);

    const saveDataButton = document.createElement('button');
    saveDataButton.className = 'mainMenuButton';
    saveDataButton.textContent = 'Save Data';
    mainMenu.appendChild(saveDataButton);

    const viewTodosButton = document.createElement('button');
    viewTodosButton.className = 'mainMenuButton';
    viewTodosButton.textContent = 'View Todos';
    mainMenu.appendChild(viewTodosButton);

    const viewProjectsButton = document.createElement('button');
    viewProjectsButton.className = 'mainMenuButton';
    viewProjectsButton.textContent = 'View Projects';
    mainMenu.appendChild(viewProjectsButton);

    home.appendChild(mainMenu);
}
