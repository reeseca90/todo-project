// define storage as array and default project for todos
let allProjects = [{projTitle:'Todos', projDesc:'todos', projPriority:'low', dueDate:null, tasks:[]}];
export default allProjects;

class Todo {
    constructor(description, priority, dueDate) {
        this.todoDesc = description;
        this.todoPriority;
        this.dueDate;
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

export const createNew = (() => {
    function project(title, description, priority, dueDate) {
        allProjects.push(new Project(title, description, priority, dueDate));
    }

    // will require event listeners to pass in location of project in array
    function todo(description, priority, dueDate) {
        allProjects[0].tasks.push(new Todo(description, priority, dueDate));
    }

    return {
        project,
        todo
    };

})();

const remove = (() => {
    function project(input) {
        if (allProjects[input].tasks.length == 0) {
            allProjects.splice(input, 1);
        } else {
            console.error('tasks are not empty');
        }
        
    }

    function todo(input) {
        allProjects[0].tasks.splice(input, 1);
    }

    return {
        project,
        todo
    }
})();
