import * as React from 'react';
import DesignerScreen from './designerScreen/index';

export default class App extends React.Component{

    constructor(props) {
        super(props)

        this.appCfg = props.appCfg;
        console.log('App',props.appCfg);
    }

    render(){
        return (
            <div>
                <DesignerScreen appCfg={this.appCfg} />
            </div>
        );
    }
} 

