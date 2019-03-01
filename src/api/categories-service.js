import plannerApi from './planner-api';

const categoriesService = {
    getCategories: () => {
        return plannerApi.get('/categories/')
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                throw err;
            })
    },

    addCategory: (category) => {
        return plannerApi.post('/categories/', category)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err
            })
    },

    editCategory: (category) => {
        return plannerApi.put(`/categories/${category.id}/`, category)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                throw err;
            })
    },

    deleteCategory: (id) => {
        return plannerApi.delete(`/categories/${id}/`)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                throw err;
            })
    }
}

export default categoriesService;