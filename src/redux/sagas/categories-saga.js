import { put, call, takeEvery, fork } from 'redux-saga/effects';
import history from '../../history';
import CategoriesService from '../../api/categories-service';

function* watchAddCategory() {
    yield takeEvery('CATEGORY_ADD', onAddCategory);
}

function* watchFetchCategories() {
    yield takeEvery('CATEGORIES_FETCH', fetchCategories);
}

function* watchDeleteCategory() {
    yield takeEvery('CATEGORY_DELETE', onDeleteCategory);
}

function* watchEditCategory() {
    yield takeEvery('CATEGORY_EDIT', onEditCategory);
}

function* fetchCategories() {
    try {
        const response = yield call(CategoriesService.getCategories);
        yield put({ type: 'CATEGORIES_FETCH_SUCCESS', payload: response })
    } catch(error) {
        yield put({ type: 'CATEGORIES_FETCH_FAIL', payload: error })
    }
}

function* onAddCategory(action) {
    try {
        const response = yield call(CategoriesService.addCategory, action.payload);
        yield put({ type: 'CATEGORY_ADD_SUCCESS', payload: response });
        history.push('/categories');
    } catch(error) {
        yield put({ type: 'CATEGORY_ADD_FAIL', payload: error })
    }
}

function* onEditCategory(action) {
    try {
        yield call(CategoriesService.editCategory, action.payload)
        yield put({ type: 'CATEGORY_EDIT_SUCCESS', payload: action.payload })
    } catch(error) {
        yield put({ type: 'CATEGORY_EDIT_FAIL', payload: error })
    }
}

function* onDeleteCategory(action) {
    try {
        yield call(CategoriesService.deleteCategory, action.payload)
        yield put({ type: 'CATEGORY_DELETE_SUCCESS', payload: action.payload })
    } catch(error) {
        yield put({ type: 'CATEGORY_DELETE_FAIL', payload: error })
    }
}

export default function* categoriesSaga() {
    yield fork(watchAddCategory);
    yield fork(watchDeleteCategory);
    yield fork(watchEditCategory);
    yield fork(watchFetchCategories);
}