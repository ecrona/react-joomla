import { REQUEST_SAVING_CAR } from '../actions/request-saving-car'
import { RECEIVE_SAVING_CAR } from '../actions/receive-saving-car'
import { Car } from 'models/car.d'

export const saving = function(state: boolean = false, action) {
    switch (action.type) {
        case REQUEST_SAVING_CAR:
            return true;
        case RECEIVE_SAVING_CAR:
            return false;
        default:
            return state;
    }
}
