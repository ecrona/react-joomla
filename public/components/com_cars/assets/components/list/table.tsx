import * as React from 'react'

import { Car } from 'models/car.d'

interface Props {
    cars: Array<Car>;
    modify: (car: Car) => void;
    remove: (car: Car) => void;
}

export class Table extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    
    public render() {
        const { cars, modify, remove } = this.props;

        return (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Color</th>
                            <th style={{ width: '10px' }}></th>
                            <th style={{ width: '10px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cars.map((car, index) => (
                            <tr key={ index }>
                                <td>{ car.brand }</td>
                                <td>{ car.model }</td>
                                <td>{ car.color }</td>
                                <td>
                                    <a className="btn btn-primary" onClick={ () => modify(car) }>
                                        Modify
                                    </a>
                                </td>
                                <td>
                                    <a className="btn btn-danger" onClick={ () => remove(car) }>
                                        Remove
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
        );
    }
}