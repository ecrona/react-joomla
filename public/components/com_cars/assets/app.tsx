import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Shell } from './components/shell'
import List from './components/list/list'
import Create from './components/form/create'

import { fetching as fetchingReducer } from './components/list/reducers/fetching'
import { cars as carsReducer } from './components/list/reducers/cars'
import { saving as savingReducer } from './components/form/reducers/saving'
import { model as modelReducer } from './components/form/reducers/model'

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
    form: combineReducers({
        saving: savingReducer,
        model: modelReducer
    }),
    routing: routerReducer
});

const initialState = {
    list: {
        fetching: false,
        cars: []
    },
    form: {
        saving: false,
        model: {}
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
    }, {
        component: Create,
        path: '/create'
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