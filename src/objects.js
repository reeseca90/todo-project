import createHome from "./home.js";

let allProjects = [];
export default allProjects;

class Todo {
    constructor(description, priority, dueDate) {
        this.todoDesc = description;
        this.todoPriority = priority;
        this.dueDate = dueDate;
        this.isComplete = false;
    }
}

class Project {
    constructor(title, description, priority, dueDate) {
        this.projTitle = title;
        this.projDesc = description;
        this.projPriority = priority;
        this.dueDate = dueDate;
        this.tasks = [];
    }
}

export const dataChange = (() => {
    function saveArray() {
        let userWarning = confirm("Are you sure? This will overwrite and stored data.");

        if (userWarning) {
            localStorage.setItem('todoLists', JSON.stringify(allProjects));
            alert("Data saved.");
            createHome();
        } else {
            alert("Save data cancelled");
        }
    }

    function loadArray() {
        let userWarning = confirm("Are you sure? This will replace your current session.");

        if (userWarning) {
            allProjects = JSON.parse(localStorage.getItem('todoLists'));
            console.table(allProjects);
            alert("Data loaded.");
        } else {
            alert("Load data cancelled.");
        }

        console.table(allProjects);
    }

    return {
        saveArray,
        loadArray
    }

})();

export const createNew = (() => {
    function project(title, description, priority, dueDate) {
        allProjects.push(new Project(title, description, priority, dueDate));
    }

    function todo(index, description, priority, dueDate) {
        allProjects[index].tasks.push(new Todo(description, priority, dueDate));
    }

    return {
        project,
        todo
    };

})();

export const removeItem = (() => {
    function project(index) {
        if (allProjects[index].tasks.length == 0) {
            allProjects.splice(index, 1);
        } else {
            console.error('tasks are not empty');
        }
        
    }

    function todo(projIndex, todoIndex) {
        allProjects[projIndex].tasks.splice(todoIndex, 1);
    }

    return {
        project,
        todo
    }
})();