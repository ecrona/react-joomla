import { Http } from 'utilities/http'
import { Resolver } from 'utilities/resolver'
import { Car } from 'models/car.d'
import { setModel } from './set-model'

export const REQUEST_CAR = 'REQUEST_CAR';

export function requestCar() {
    return {
        type: REQUEST_CAR
    };
}

export function fetchCar(id: number, resolver: Resolver) {
    return (dispatch) => {
        dispatch(requestCar());
        return Http.get('/index.php/component/cars?task=cars.getSingle&id=' + id, resolver)
            .then((response) => {
                dispatch(setModel(response.body));
            });
    };
}