import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import objectAssign = require('object-assign')

import { Resolver } from 'utilities/resolver'
import { setModel } from './actions/set-model'
import { createCar } from './actions/create-car'

import { Form } from './form'

import { Car } from 'models/car.d'

interface Props {
    dispatch: any;
    model: Car;
}

class Create extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    public componentDidMount() {
        this.props.dispatch(setModel({
            id: 0,
            brand: '',
            model: 'Prius',
            color: ''
        }));
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
        const { dispatch, model } = this.props;

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
                    onClick={ () => dispatch(createCar(model, new Resolver)) } />
            </form>
        );
    }
}


const mapStateToProps = state => ({
    model: state.form.model
});

export default connect(mapStateToProps)(Create);