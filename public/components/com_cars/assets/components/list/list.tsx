import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'

import { fetchCars } from './actions/fetch-cars'
import { removeCar } from './actions/remove-car'
import { Resolver } from 'utilities/resolver'

import { Car } from 'models/car.d'
import { Table } from './table'
import { Loader } from 'components/loader'

interface Props {
    dispatch: any;
    fetching: boolean;
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

    public modifyCar(car: Car) {
        this.props.dispatch(push('update/' + car.id));
    }

    public removeCar(car: Car) {
        this.props.dispatch(removeCar(car.id, new Resolver));
    }
    
    public render() {
        const { dispatch, fetching, cars } = this.props;

        return (
            <div>
                <div
                    onClick={ () => dispatch(push('create')) }
                    className="btn btn-success"
                    style={{ float: 'right' }}>
                    Create
                </div>

                { fetching ?
                    <Loader />
                :
                    <Table
                        cars={ cars }
                        modify={ this.modifyCar.bind(this) }
                        remove={ this.removeCar.bind(this) } />
                }
            </div>
        );
    }
}


const mapStateToProps = state => ({
    cars: state.list.cars,
    fetching: state.list.fetching
});

export default connect(mapStateToProps)(List);