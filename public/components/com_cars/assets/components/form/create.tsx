import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Resolver } from 'utilities/resolver'
import { setModel } from './actions/set-model'

import { Car } from 'models/car.d'

interface Props {
    dispatch: any;
    model: Car;
}

class Create extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        console.log(props)
    }

    public componentDidMount() {
        this.props.dispatch(setModel({
            id: 0,
            brand: '',
            model: 'Prius',
            color: ''
        }));
    }
    
    public render() {
        const { model } = this.props;
        console.log(model)

        return (
            <form>
                <div>
                    <label>Brand</label>
                    <input type="text" value={ model.brand } placeholder="e.g. Toyota" />
                </div>
                <div>
                    <label>Model</label>
                    <input type="text" value={ model.model } placeholder="e.g. Prius" />
                </div>
                <div>
                    <label>Color</label>
                    <input type="text" value={ model.color } placeholder="e.g. Green" />
                </div>
                <input type="button" value="Create" />
            </form>
        );
    }
}


const mapStateToProps = state => ({
    model: state.form.model
});

export default connect(mapStateToProps)(Create);