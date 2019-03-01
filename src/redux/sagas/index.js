import { fork } from 'redux-saga/effects';
import categoriesSaga from './categories-saga';
import todosSaga from './todos-saga';

export default function* rootSaga() {
    yield fork(categoriesSaga);
    yield fork(todosSaga);
}