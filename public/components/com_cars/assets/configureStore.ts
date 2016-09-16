import { combineReducers, createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import { fetching as fetchingCarsReducer } from './components/list/reducers/fetching'
import { cars as carsReducer } from './components/list/reducers/cars'
import { saving as savingReducer } from './components/form/reducers/saving'
import { model as modelReducer } from './components/form/reducers/model'
import { fetching as fetchingCarReducer } from './components/form/reducers/fetching'

export default function configureStore(history) {
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

    const historyMiddleware = routerMiddleware(history);
    const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware, historyMiddleware));

    return store;
}