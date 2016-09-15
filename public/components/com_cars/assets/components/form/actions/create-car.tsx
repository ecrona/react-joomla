import { Http } from 'utilities/http'
import { Resolver } from 'utilities/resolver'

import { replace } from 'react-router-redux'

import { Car } from 'models/car.d'

export const REQUEST_CREATE_CAR = 'REQUEST_CREATE_CAR';

export function requestCreateCar() {
    return {
        type: REQUEST_CREATE_CAR
    };
}

export function createCar(car: Car, resolver: Resolver) {
    return (dispatch) => {
        dispatch(requestCreateCar());
        return Http.post('/index.php/component/cars?task=cars.create', { brand: 'hej', model: 'asd', description: 'korv' }, resolver)
            .then(() => {
                dispatch(replace('list'));
            });
    };
}