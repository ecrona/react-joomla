import { REQUEST_CARS, RECEIVE_CARS } from '../actions/fetch-cars'
import { REQUEST_REMOVE_CAR, RECEIVE_REMOVE_CAR } from '../actions/remove-car'

export const fetching = function(state: boolean = false, action) {
    switch (action.type) {
        case REQUEST_CARS:
        case REQUEST_REMOVE_CAR:
            return true;
        case RECEIVE_CARS:
        case RECEIVE_REMOVE_CAR:
            return false;
        default:
            return state;
    }
}