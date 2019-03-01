import { put, call, takeEvery, fork } from 'redux-saga/effects';
import history from '../../history';
import TodosApiService from '../../api/todos-service';

function* watchAddTodo() {
    yield takeEvery('TODO_ADD', onAddTodo);
}

function* watchFetchTodos() {
    yield takeEvery('TODOS_FETCH', fetchTodos);
}

function* watchEditTodo() {
    yield takeEvery('TODO_EDIT', onEditTodo);
}

function* watchDeleteTodo() {
    yield takeEvery('TODO_DELETE', onDeleteTodo);
}

function* onAddTodo(action) {
    try {
        const response = yield call(TodosApiService.addTodo, action.payload);
        yield put({ type: 'TODO_ADD_SUCCESS', payload: response.data });
        history.push('/');

    } catch(error) {
        yield put({ type: 'TODO_ADD_FAIL', payload: error })
    }
}

function* fetchTodos() {
    try {
        const categories = yield call(TodosApiService.getTodos);
        yield put({ type: 'TODOS_FETCH_SUCCESS', payload: categories })
    } catch(error) {
        yield put({ type: 'TODOS_FETCH_FAIL', payload: error })
    }
}

 function* onEditTodo(action) {
    try {
        yield call(TodosApiService.editTodo, action.payload)
        yield put({ type: 'TODO_EDIT_SUCCESS', payload: action.payload })
    } catch(error) {
        yield put({ type: 'TODO_EDIT_FAIL', payload: error })
    }
}

function* onDeleteTodo(action) {
    try {
        yield call(TodosApiService.deleteTodo, action.payload)
        yield put({ type: 'TODO_DELETE_SUCCESS', payload: action.payload })
    } catch(error) {
        yield put({ type: 'TODO_DELETE_FAIL', payload: error })
    }
}

export default function* todosSaga() {
    yield fork(watchAddTodo);
    yield fork(watchFetchTodos);
    yield fork(watchEditTodo);
    yield fork(watchDeleteTodo);
}