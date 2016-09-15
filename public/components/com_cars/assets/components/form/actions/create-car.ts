import { push } from 'react-router-redux'
import { Http } from 'utilities/http'
import { Resolver } from 'utilities/resolver'
import { Car } from 'models/car.d'

import { requestSavingCar } from './request-saving-car'

export function createCar(car: Car, resolver: Resolver) {
    return (dispatch) => {
        dispatch(requestSavingCar());
        return Http.post('/index.php/component/cars?task=cars.create', { brand: 'hej', model: 'asd', description: 'korv' }, resolver)
            .then(() => {
                dispatch(push('list'));
            });
    };
}