const defaultState = [
    // {
    //     title: 'Todo 1',
    //     description: 'Do first TODO',
    //     done: true,
    //     categories: [1],
    // },
];

export default function todosReducer (state = defaultState, action)  {
    switch(action.type) {
        case 'TODO_ADD_SUCCESS': 
            console.log(action);
            return [...state, action.payload];
        case 'TODO_DELETE_SUCCESS':
            return state.filter((todo) => {
                return todo.id !== action.payload;
            });
        case 'TODO_EDIT_SUCCESS':
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                } else {
                    return todo;
                }
            })
        case 'TODOS_FETCH_SUCCESS':
            return [...action.payload];
        default:
            return state;
    }
}