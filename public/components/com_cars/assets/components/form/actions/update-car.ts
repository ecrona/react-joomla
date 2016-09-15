import { push } from 'react-router-redux'
import { Http } from 'utilities/http'
import { Resolver } from 'utilities/resolver'
import { Car } from 'models/car.d'

import { requestSavingCar } from './request-saving-car'
import { receiveSavingCar } from './receive-saving-car'

export function updateCar(id: number, car: Car, resolver: Resolver) {
    return (dispatch) => {
        dispatch(requestSavingCar());
        return Http.post('/index.php/component/cars?task=cars.update&id=' + id, car, resolver)
            .then(() => {
                dispatch(receiveSavingCar());
                dispatch(push('list'));
            });
    };
}