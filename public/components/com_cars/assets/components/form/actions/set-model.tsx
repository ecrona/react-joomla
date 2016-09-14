import { Http } from 'utilities/http'
import { Resolver } from 'utilities/resolver'

import { Car } from 'models/car.d'

export const SET_MODEL = 'SET_MODEL';

export function setModel(model: Car) {
    return {
        type: SET_MODEL,
        model
    };
}