import { Http } from 'utilities/http'
import { Resolver } from 'utilities/resolver'

import { Car } from 'models/car.d'

export const REQUEST_CARS = 'REQUEST_CARS';
export const RECEIVE_CARS = 'RECEIVE_CARS';

export function requestCars() {
    return {
        type: REQUEST_CARS
    };
}

export function receiveCars(cars: Array<Car>) {
    return {
        type: RECEIVE_CARS,
        cars
    };
}

export function fetchCars(resolver: Resolver) {
    return (dispatch) => {
        dispatch(requestCars());
        return Http.get('/index.php/component/cars?task=cars.getAll', resolver)
            .then((response) => {
                dispatch(receiveCars(response.body));
            });
    };
}