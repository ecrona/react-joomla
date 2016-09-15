import * as React from 'react'

export class Loader extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    
    public render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <img src="/components/com_cars/assets/img/loader.gif" />
            </div>
        );
    }
}