import React from 'react';
import { render } from 'react-dom'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import history from './history';
import store from './store'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss'

const target = document.querySelector('#root')

render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    target
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
