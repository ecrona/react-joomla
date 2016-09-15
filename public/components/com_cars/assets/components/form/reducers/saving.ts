import { REQUEST_CREATE_CAR } from '../actions/create-car'
import { Car } from 'models/car.d'

export const saving = function(state: boolean = false, action) {
    switch (action.type) {
        case REQUEST_CREATE_CAR:
            return true;
        default:
            return state;
    }
}
