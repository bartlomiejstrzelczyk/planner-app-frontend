import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';
import { categoriesReducer, todosReducer } from './redux/reducers'
import rootSaga from './redux/sagas';

const initialState = {}
const enhancers = []
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  combineReducers({
    categories: categoriesReducer,
    todos: todosReducer,
    form: formReducer,
  }),
  initialState,
  composedEnhancers
)
sagaMiddleware.run(rootSaga);
