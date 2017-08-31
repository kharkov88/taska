import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux'
import {createLogger}from'redux-logger'
import {Provider} from 'react-redux'
import {Reducer} from './redux/reducer'
import thunk from'redux-thunk'

import {getUsers} from './redux/actions'
const loggerMiddleware = createLogger()
const store = createStore(Reducer, applyMiddleware(thunk,loggerMiddleware))
console.log(store.getState())

store.dispatch(getUsers())


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();
