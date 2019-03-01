import plannerApi from './planner-api';

const TodosApiService = {
    addTodo: (todo) => {
        return plannerApi.post('/todos/', todo)
            .then(res => res)
            .catch(err => err)
    },

    getTodos: () => {
        return plannerApi.get('/todos/')
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                throw err;
            })
    },
    
    // TODO add params
    editTodo: (todo) => {
        return plannerApi.put(`/todos/${todo.id}/`, todo)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                throw err;
            })
    },

    deleteTodo: (id) => {
        return plannerApi.delete(`/todos/${id}/`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                throw err;
            })
    }
}

export default TodosApiService;