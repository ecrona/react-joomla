import { SET_MODEL } from '../actions/set-model'
import { Car } from 'models/car.d'

export const model = function(state: Car = {
    id: 0,
    brand: '',
    model: '',
    color: ''
}, action) {
    switch (action.type) {
        case SET_MODEL:
            return action.model;
        default:
            return state;
    }
}
