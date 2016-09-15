import { Http } from 'utilities/http'
import { Resolver } from 'utilities/resolver'
import { Car } from 'models/car.d'

export const REQUEST_REMOVE_CAR = 'REQUEST_REMOVE_CAR';

export function requestRemoveCar() {
    return {
        type: REQUEST_REMOVE_CAR
    };
}
export const RECEIVE_REMOVE_CAR = 'RECEIVE_REMOVE_CAR';

export function receiveRemoveCar(id) {
    return {
        type: RECEIVE_REMOVE_CAR,
        id
    };
}

export function removeCar(id: number, resolver: Resolver) {
    return (dispatch) => {
        dispatch(requestRemoveCar());
        return Http.get('/index.php/component/cars?task=cars.delete&id=' + id, resolver)
            .then((response) => {
                dispatch(receiveRemoveCar(id));
            });
    };
}