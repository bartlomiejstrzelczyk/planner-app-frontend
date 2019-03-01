export function addCategory(category) {
    return {
        type: 'CATEGORY_ADD',
        payload: category
    }
}

export function deleteCategory(categoryId) {
    return {
        type: 'CATEGORY_DELETE',
        payload: categoryId,
    }
}


export function editCategory(newData) {
    return {
        type: 'CATEGORY_EDIT',
        payload: newData
    }
}

export function fetchCategories() {
    return {
        type: 'CATEGORIES_FETCH'
    }
}

export function fetchCategoriesSuccess(categories) {
    return {
        type: 'FETCH_CATEGORIES_SUCCESS',
        payload: categories
    }
}

export function fetchCategoriesError(error) {
    return {
        type: 'FETCH_CATEGORIES_ERROR',
        payload: error
    }
}