import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Shell } from './components/shell'
import List from './components/list'

import { fetching as fetchingReducer } from './components/reducers/fetching'
import { cars as carsReducer } from './components/reducers/cars'

import { Router, Route, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    list: combineReducers({
        fetching: fetchingReducer,
        cars: carsReducer
    }),
    routing: routerReducer
});

const initialState = {
    list: {
        cars: []
    }
};

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const historyMiddleware = routerMiddleware(history);
const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, historyMiddleware));

const routes = {
    path: '/',
    component: Shell,
    childRoutes: [{
        component: List,
        path: '/list'
    }]
};

setTimeout(() => {
    ReactDOM.render(
        <Provider store={ store }>
            <Router history={ history } routes={ routes } />
        </Provider>,
        document.getElementsByClassName('app')[0]
    );
}, 100);