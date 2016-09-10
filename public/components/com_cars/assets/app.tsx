import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Shell } from './components/shell'
import List from 'components/list/list'

import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    //viewState: viewStateReducer,
    routing: routerReducer
});

const initialState = {
    //viewState: 1,
};

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const historyMiddleware = routerMiddleware(history);
const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, historyMiddleware));

const routes = {
    path: '/',
    component: Shell,
    childRoutes: []
};

setTimeout(() => {
    ReactDOM.render(
        <Provider store={ store }>
            <Router history={ history } routes={ routes } />
        </Provider>,
        document.getElementsByClassName('app')[0]
    );
}, 100);