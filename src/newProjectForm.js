import {default as allProjects, createNew} from './objects.js';

export default function newProjectForm() {
    const contentContainer = document.getElementById('contentContainer');

    while (contentContainer.lastElementChild) {
        contentContainer.removeChild(contentContainer.lastElementChild);
    }

    const newProjForm = document.createElement('form');
    newProjForm.setAttribute('id', 'newProjForm');

    const projTitleInput = document.createElement('input');
    projTitleInput.setAttribute('type', 'text');
    projTitleInput.setAttribute('id', 'titleInput');
    const projTitleLabel = document.createElement('label');
    projTitleLabel.setAttribute('for', 'titleInput');
    projTitleLabel.setAttribute('class', 'formLabel');
    projTitleLabel.textContent = 'New Project Title:'
    newProjForm.appendChild(projTitleLabel);
    newProjForm.appendChild(projTitleInput);

    const projDescInput = document.createElement('input');
    projDescInput.setAttribute('type', 'text');
    projDescInput.setAttribute('id', 'descInput');
    const projDescLabel = document.createElement('label');
    projDescLabel.setAttribute('for', 'descInput');
    projDescLabel.setAttribute('class', 'formLabel');
    projDescLabel.textContent = 'Description:'
    newProjForm.appendChild(projDescLabel);
    newProjForm.appendChild(projDescInput);

    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('id', 'dueDate');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'dueDate');
    dueDateLabel.className = 'formLabel';
    dueDateLabel.textContent = 'Due Date:';
    newProjForm.appendChild(dueDateLabel);
    newProjForm.appendChild(dueDateInput); // return format YYYY-MM-DD

    const projPrioBox = document.createElement('div');
    projPrioBox.setAttribute('id', 'prioBox');
    projPrioBox.className = 'formLabel';
    projPrioBox.textContent = 'Priority:';
    newProjForm.appendChild(projPrioBox);

    const projPrioInputLow = document.createElement('input');
    projPrioInputLow.setAttribute('type', 'radio');
    projPrioInputLow.setAttribute('id', 'prioInputLow');
    projPrioInputLow.setAttribute('name', 'priority');
    projPrioInputLow.setAttribute('value', 'low');
    const projPrioLabelLow = document.createElement('label');
    projPrioLabelLow.setAttribute('for', 'prioInputLow');
    projPrioLabelLow.setAttribute('class', 'radioLabel');
    projPrioLabelLow.textContent = 'Low'
    projPrioBox.appendChild(projPrioInputLow);
    projPrioBox.appendChild(projPrioLabelLow);

    const projPrioInputMed = document.createElement('input');
    projPrioInputMed.setAttribute('type', 'radio');
    projPrioInputMed.setAttribute('id', 'prioInputMed');
    projPrioInputMed.setAttribute('name', 'priority');
    projPrioInputMed.setAttribute('value', 'med');
    const projPrioLabelMed = document.createElement('label');
    projPrioLabelMed.setAttribute('for', 'prioInputMed');
    projPrioLabelMed.setAttribute('class', 'radioLabel');
    projPrioLabelMed.textContent = 'Medium';
    projPrioBox.appendChild(projPrioInputMed);
    projPrioBox.appendChild(projPrioLabelMed);

    const projPrioInputHigh = document.createElement('input');
    projPrioInputHigh.setAttribute('type', 'radio');
    projPrioInputHigh.setAttribute('id', 'prioInputHigh');
    projPrioInputHigh.setAttribute('name', 'priority');
    projPrioInputHigh.setAttribute('value', 'high');
    const projPrioLabelHigh = document.createElement('label');
    projPrioLabelHigh.setAttribute('for', 'prioInputHigh');
    projPrioLabelHigh.setAttribute('class', 'radioLabel');
    projPrioLabelHigh.textContent = 'High'
    projPrioBox.appendChild(projPrioInputHigh);
    projPrioBox.appendChild(projPrioLabelHigh);

    const submit = document.createElement('button')
    submit.setAttribute('type', 'button');
    submit.className = 'submitButton';
    submit.textContent = 'Create New Project';
    submit.addEventListener('click', submitNew);
    function submitNew() {
        if (document.querySelector('input[name="priority"]:checked') == null) {
            alert("Select a priority level");
        } else {
            let title = projTitleInput.value;
            let description = projDescInput.value;
            let dueDate = dueDateInput.value;
            let priority = document.querySelector('input[name="priority"]:checked').value;

            createNew.project(title, description, priority, dueDate);
            console.table(allProjects);

            refreshForm();
        }
    }
    newProjForm.appendChild(submit);

    contentContainer.appendChild(newProjForm);
}

function refreshForm() {
    newProjectForm();
}