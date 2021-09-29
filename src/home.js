import createMainMenu from './mainMenu.js';
import allProjects from './objects.js';

export default function createHome() {

    const contentContainer = document.getElementById('contentContainer');

    while (contentContainer.lastElementChild) {
        contentContainer.removeChild(contentContainer.lastElementChild);
    }

    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    contentContainer.appendChild(home);

    createMainMenu();
}