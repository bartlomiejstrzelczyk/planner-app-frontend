const defaultState = [
    {
        name: 'Category 1',
        id: 1,
    },
    {
		name: 'NSFW',
		id: 2,
    },
    {
		name: 'third',
		id: 3,
    }
];

export default function categoriesReducer (state = defaultState, action)  {
    switch(action.type) {
        case 'CATEGORY_ADD_SUCCESS': 
            console.log(action);
            return [...state, action.payload]
        case 'CATEGORY_DELETE_SUCCESS':
            return state.filter((category) => {
                return category.id !== action.payload;
            });
        case 'CATEGORY_EDIT_SUCCESS':
            return state.map((category) => {
                if (category.id === action.payload.id) {
                    return action.payload;
                } else {
                    return category;
                }
            })
        case 'CATEGORIES_FETCH_SUCCESS':
            return [...action.payload];
        default:
            return state;
    }
}