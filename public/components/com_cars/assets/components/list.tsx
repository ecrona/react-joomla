import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Car } from 'models/car.d'

interface Props {
    cars: Array<Car>;
}

export class List extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        console.log(props)
    }
    
    public render() {
        const { cars } = this.props;

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