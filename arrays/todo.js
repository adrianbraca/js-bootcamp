// Create an array with five todos
// You have x todos
// Print the first and second to last items -? Todo: walk the dog

const toDoList = [{
    text: 'Work Out',
    completed: false
}, {
    text: 'Shower',
    completed: false
}, {
    text: 'Make Breakfast',
    completed: true
},{
    text: 'Get Coffee',
    completed: false
}, {
    text: 'Start Coding',
    completed: true
}]

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed === false) {
            return -1
        } else if (b.completed === false) {
            return 1
        } else {
            return 0
        }
    })
}

const deleteTodo = function (toDoList, todoText) {
    const index = toDoList.findIndex(function (index) {
        return index.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        toDoList.splice(index, 1)
    }
}

const getThingsToDo = function (toDoList) {
    return toDoList.filter(function (todo) {
        return todo.completed === false
    })
}

sortTodos(toDoList)
console.log(toDoList)

//console.log(getThingsToDo(toDoList))


