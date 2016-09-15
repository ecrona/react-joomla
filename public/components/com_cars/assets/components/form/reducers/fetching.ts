import { REQUEST_CAR } from '../actions/fetch-car'
import { SET_MODEL } from '../actions/set-model'
import { Car } from 'models/car.d'

export const fetching = function(state: boolean = false, action) {
    switch (action.type) {
        case REQUEST_CAR:
            return true;
        case SET_MODEL:
            return false;
        default:
            return state;
    }
}
