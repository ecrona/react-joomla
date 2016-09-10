import * as React from 'react'

export class Shell extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(props)
    }
    
    public render() {
        return (
            <div>
                <h1>App</h1>
                { this.props.children }
            </div>
        );
    }
}