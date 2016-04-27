var KanbanViewModel = function (todoArray, inProgressArray, completeArray) {
    var todo = ko.observableArray(todoArray);
    var inProgress = ko.observableArray(inProgressArray);
    var complete = ko.observableArray(completeArray);

    var moveToTodo = function (task) {
        todo.push(task);
    };
    var moveToInProgress = function (task) {
        inProgress.push(task);
    };
    var moveToComplete = function (task) {
        complete.push(task);
    };
    var removeFromTodo = function (task) {
        todo.remove(task);
    };
    var removeFromInProgress = function (task) {
        inProgress.remove(task);
    };
    var removeFromComplete = function (task) {
        complete.remove(task);
    };
    return {
        todo: todo,
        inProgress: inProgress,
        complete: complete,
        moveToTodo: moveToTodo,
        removeFromTodo: removeFromTodo,
        moveToInProgress: moveToInProgress,
        removeFromInProgress: removeFromInProgress,
        moveToComplete: moveToComplete,
        removeFromComplete: removeFromComplete,
    };
};