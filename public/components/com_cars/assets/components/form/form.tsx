import * as React from 'react'

import { Car } from 'models/car.d'

interface Props {
    car: Car;
    setBrand: (brand: string) => void;
    setModel: (model: string) => void;
    setColor: (color: string) => void;
}

export class Form extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }

    public setBrand(e) {
        this.props.setBrand(e.target.value);
    }

    public setModel(e) {
        this.props.setModel(e.target.value);
    }

    public setColor(e) {
        this.props.setColor(e.target.value);
    }
    
    public render() {
        const { car } = this.props;

        return (
            <div>
                <div>
                    <label>Brand</label>
                    <input
                        type="text"
                        value={ car.brand }
                        onChange={ this.setBrand.bind(this) }
                        placeholder="e.g. Toyota" />
                </div>
                <div>
                    <label>Model</label>
                    <input
                        type="text"
                        value={ car.model }
                        onChange={ this.setModel.bind(this) }
                        placeholder="e.g. Prius" />
                </div>
                <div>
                    <label>Color</label>
                    <input
                        type="text"
                        value={ car.color }
                        onChange={ this.setColor.bind(this) }
                        placeholder="e.g. Green" />
                </div>
            </div>
        );
    }
}