import * as React from 'react';
import Toolbar from './toolbar/toolbar';
import Worspace from './workspace/workspace';

class DesignerScreen extends React.Component {

    constructor(props) {
        super(props)

        console.log('DesignerScreen', props.appCfg);
    }

    render() {
        return (
            <div id="designer-screen">
                <Toolbar />
                <Worspace />
            </div>
        );
    }

}
export default DesignerScreen;