export function addTodo(todo) {
    return {
        type: 'TODO_ADD',
        payload: todo
    }
}

export function deleteTodo(todoId) {
    return {
        type: 'TODO_DELETE',
        payload: todoId,
    }
}

export function editTodo(newData) {
    return {
        type: 'TODO_EDIT',
        payload: newData
    }
}

export function fetchTodos() {
    return {
        type: 'TODOS_FETCH'
    }
}

export function fetchTodosSuccess(todos) {
    return {
        type: 'TODOS_FETCH_SUCCESS',
        payload: todos
    }
}

export function fetchTodosError(error) {
    return {
        type: 'TODOS_FETCH_ERROR',
        payload: error
    }
}