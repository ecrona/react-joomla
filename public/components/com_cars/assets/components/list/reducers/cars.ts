import { RECEIVE_CARS } from '../actions/fetch-cars'
import { RECEIVE_REMOVE_CAR } from '../actions/remove-car'
import { Car } from 'models/car.d'

export const cars = function(state: Array<Car> = [], action) {
    switch (action.type) {
        case RECEIVE_CARS:
            return action.cars;
        case RECEIVE_REMOVE_CAR:
            return state.filter((car) => car.id !== action.id);
        default:
            return state;
    }
}
