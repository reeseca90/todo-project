import './style.css';
import createHome from './home.js';

const createLayout = (() => {
  const content = document.querySelector('#mainContainer');

  const topBar = document.createElement('div');
  topBar.setAttribute('id', 'topBar');
  content.appendChild(topBar);

  const navButton = document.createElement('div');
  navButton.setAttribute('id', 'navButton');
  navButton.addEventListener('click', createHome);
  navButton.textContent = 'Main Menu';
  topBar.appendChild(navButton);

  const logo = document.createElement('div');
  logo.setAttribute('id', 'logo');
  logo.textContent = 'Craig\'s Project Tracker';
  topBar.appendChild(logo);

  const contentContainer = document.createElement('div');
  contentContainer.setAttribute('id', 'contentContainer');
  content.appendChild(contentContainer);

  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');
  content.appendChild(footer);
  const footerP = document.createElement('p');
  footerP.textContent = 'Project by Craig, 2021';
  footer.appendChild(footerP);
})();

createHome();
