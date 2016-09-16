import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Shell } from './components/shell'
import List from './components/list/list'
import Create from './components/form/create'
import Update from './components/form/update'

import { fetching as fetchingCarsReducer } from './components/list/reducers/fetching'
import { cars as carsReducer } from './components/list/reducers/cars'
import { saving as savingReducer } from './components/form/reducers/saving'
import { model as modelReducer } from './components/form/reducers/model'
import { fetching as fetchingCarReducer } from './components/form/reducers/fetching'

import { Router, Route, useRouterHistory, IndexRoute } from 'react-router'
import { createHashHistory } from 'history'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    list: combineReducers({
        fetching: fetchingCarsReducer,
        cars: carsReducer
    }),
    form: combineReducers({
        saving: savingReducer,
        fetching: fetchingCarReducer,
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
        fetching: false,
        saving: false,
        model: {
            id: 0,
            brand: '',
            model: '',
            color: ''
        }
    }
};

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const historyMiddleware = routerMiddleware(history);
const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, historyMiddleware));

const routes = {
    path: '/',
    component: Shell,
    indexRoute: { component: List },
    childRoutes: [{
        component: List,
        path: '/list'
    }, {
        component: Create,
        path: '/create'
    }, {
        component: Update,
        path: '/update/:id'
    }]
};

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history } routes={ routes } />
    </Provider>,
    document.getElementsByClassName('app')[0]
);