import { REQUEST_CAR } from '../actions/fetch-car'
import { Car } from 'models/car.d'

export const fetching = function(state: boolean = false, action) {
    switch (action.type) {
        case REQUEST_CAR:
            return true;
        default:
            return state;
    }
}
