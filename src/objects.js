import createHome from "./home.js";

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
    let allProjects = [];

    function saveArray(array) {
        let userWarning = confirm("Are you sure? This will overwrite and stored data.");

        if (userWarning) {
            localStorage.setItem('todoLists', JSON.stringify(array));
            createHome();
        }
        return array;
    }

    function loadArray(array) {
        let userWarning = confirm("Are you sure? This will replace your current session.");

        if (userWarning) {
            array = JSON.parse(localStorage.getItem('todoLists'));
        }
        return array;
    }

    return {
        allProjects,
        saveArray,
        loadArray
    }

})();

export const createNew = (() => {
    function project(title, description, priority, dueDate) {
        dataChange.allProjects.push(new Project(title, description, priority, dueDate));
    }

    function todo(index, description, priority, dueDate) {
        dataChange.allProjects[index].tasks.push(new Todo(description, priority, dueDate));
    }

    return {
        project,
        todo
    };

})();

export const removeItem = (() => {
    function project(index) {
        if (dataChange.allProjects[index].tasks.length == 0) {
            dataChange.allProjects.splice(index, 1);
        } else {
            console.error('tasks are not empty');
        }
        
    }

    function todo(projIndex, todoIndex) {
        dataChange.allProjects[projIndex].tasks.splice(todoIndex, 1);
    }

    return {
        project,
        todo
    }
})();