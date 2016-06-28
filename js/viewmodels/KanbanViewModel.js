var Board = function (name, tasks) {
    var self = this;
    self.name = ko.observable(name);
    self.tasks = ko.observableArray(tasks);
    self.numTasks = ko.computed(function () {
        return self.tasks().length;
    });
    self.addTask = function (task) {
        self.tasks.push(task);
    };
    self.removeTask = function (task) {
        self.tasks.remove(task);
    };
};

var KanbanViewModel = function (todoArray, inProgressArray, completeArray) {
    var todoBoard = new Board('To Do', todoArray);
    var inProgressBoard = new Board('In Progress', inProgressArray);
    var completeBoard = new Board('Complete', completeArray);
    var newTaskName = ko.observable('');
    var addNewTask = function () {
        if (newTaskName()) {
            todoBoard.addTask({ title: newTaskName() });
            newTaskName('');
        }
    };
    var totalTasks = ko.computed(function () {
        return todoBoard.numTasks() + inProgressBoard.numTasks() + completeBoard.numTasks();
    });
    var percentComplete = ko.computed(function () {
        return Math.floor(completeBoard.numTasks() / totalTasks() * 100);
    });
    return {
        todoBoard: todoBoard,
        inProgressBoard: inProgressBoard,
        completeBoard: completeBoard,
        newTaskName: newTaskName,
        addNewTask: addNewTask,
        totalTasks: totalTasks,
        percentComplete: percentComplete
    };
};