import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ConnectApp} from './containers';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from 'redux'
import {createLogger}from'redux-logger'
import {Provider} from 'react-redux'
import reducer from './redux/reducer'
import thunk from'redux-thunk'

const loggerMiddleware = createLogger()
const store = createStore(reducer, applyMiddleware(thunk,loggerMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <ConnectApp/>
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();
