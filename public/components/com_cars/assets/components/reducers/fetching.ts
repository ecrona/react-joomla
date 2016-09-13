import { REQUEST_CARS, RECEIVE_CARS } from '../actions/fetch-cars'

export const fetching = function(state: boolean = false, action) {
    console.log(state, action)
    switch (action.type) {
        case REQUEST_CARS:
            return true;
        case RECEIVE_CARS:
            return false;
        default:
            return state;
    }
}