import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import objectAssign = require('object-assign')

import { Resolver } from 'utilities/resolver'
import { setModel } from './actions/set-model'
import { createCar } from './actions/create-car'

import { Form } from './form'
import { Loader } from 'components/loader'

import { Car } from 'models/car.d'

interface Props {
    dispatch: any;
    model: Car;
    saving: boolean;
}

class Create extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    public componentDidMount() {
        this.props.dispatch(setModel({
            id: 0,
            brand: '',
            model: '',
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
        const { dispatch, saving, model } = this.props;

        console.log(this.props)

        return (
            <form>
                { saving ?
                    <Loader />
                :
                    <div>
                        <Form
                            car={ model }
                            setBrand={ this.setBrand.bind(this) }
                            setModel={ this.setModel.bind(this) }
                            setColor={ this.setColor.bind(this) } />
                        <input
                            type="submit"
                            value="Create"
                            onClick={ () => dispatch(createCar(model, new Resolver)) }
                            className="btn btn-primary" />
                    </div>
                }
            </form>
        );
    }
}

const mapStateToProps = state => ({
    model: state.form.model,
    saving: state.form.saving
});

export default connect(mapStateToProps)(Create);