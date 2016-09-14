import { RECEIVE_CARS } from '../actions/fetch-cars'
import { Car } from 'models/car.d'

export const cars = function(state: Array<Car> = [], action) {
    switch (action.type) {
        case RECEIVE_CARS:
            return action.cars;
        default:
            return state;
    }
}
