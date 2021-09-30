import newProjectForm from './newProjectForm.js';
import newTodoForm from './newTodoForm.js';
import viewAllProjectsForm from './viewAllProjects.js';
import {dataChange} from './objects.js';

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

    const viewProjectsButton = document.createElement('button');
    viewProjectsButton.className = 'mainMenuButton';
    viewProjectsButton.textContent = 'View Projects';
    viewProjectsButton.addEventListener('click', function() {
        viewAllProjectsForm();
    });
    mainMenu.appendChild(viewProjectsButton);

    const loadDataButton = document.createElement('button');
    loadDataButton.className = 'mainMenuButton';
    loadDataButton.textContent = 'Load Data';
    loadDataButton.addEventListener('click', function() {
        console.table(localStorage.getItem('todoLists'));
        dataChange.allProjects = dataChange.loadArray(dataChange.allProjects);
        console.table(dataChange.allProjects);
    });
    mainMenu.appendChild(loadDataButton);

    const saveDataButton = document.createElement('button');
    saveDataButton.className = 'mainMenuButton';
    saveDataButton.textContent = 'Save Data';
    saveDataButton.addEventListener('click', function() {
        console.table(dataChange.allProjects);
        dataChange.saveArray(dataChange.allProjects);
    });
    mainMenu.appendChild(saveDataButton);

    home.appendChild(mainMenu);
}
