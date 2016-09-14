import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchCars } from './actions/fetch-cars'
import { Resolver } from 'utilities/resolver'

import { Car } from 'models/car.d'

interface Props {
    dispatch: any;
    cars: Array<Car>;
}

class List extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        console.log(props)
    }

    public componentDidMount() {
        this.props.dispatch(fetchCars(new Resolver()));
    }
    
    public render() {
        const { cars } = this.props;
        console.log(cars)

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        cars.map((car, index) => (
                            <tr key={ index }>
                                <td>{ car.brand }</td>
                                <td>{ car.model }</td>
                                <td>{ car.color }</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    cars: state.list.cars
});

export default connect(mapStateToProps)(List);