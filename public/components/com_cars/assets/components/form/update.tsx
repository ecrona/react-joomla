import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import objectAssign = require('object-assign')

import { Resolver } from 'utilities/resolver'
import { setModel } from './actions/set-model'
import { fetchCar } from './actions/fetch-car'
import { updateCar } from './actions/update-car'

import { Form } from './form'

import { Car } from 'models/car.d'

interface Props {
    dispatch: any;
    routing: any;
    model: Car;
    saving: boolean;
    params: { id: number };
}

class Update extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    public componentDidMount() {
        this.props.dispatch(fetchCar(this.props.params.id, new Resolver));
    }

    public setBrand(brand: string) {
        this.props.dispatch(setModel(objectAssign({}, this.props.model, { brand })));
    }
    
    public setModel(model: string) {
        this.props.dispatch(setModel(objectAssign({}, this.props.model, { model })));
    }

    public setColor(color: string) {
        this.props.dispatch(setModel(objectAssign({}, this.props.model, { color })));
    }
    
    public render() {
        const { dispatch, model, params} = this.props;

        return (
            <form>
                <Form
                    car={ model }
                    setBrand={ this.setBrand.bind(this) }
                    setModel={ this.setModel.bind(this) }
                    setColor={ this.setColor.bind(this) } />

                <input
                    type="button"
                    value="Create"
                    onClick={ () => dispatch(updateCar(params.id, model, new Resolver)) } />
            </form>
        );
    }
}

const mapStateToProps = state => ({
    model: state.form.model,
    saving: state.form.saving
});

export default connect(mapStateToProps)(Update);