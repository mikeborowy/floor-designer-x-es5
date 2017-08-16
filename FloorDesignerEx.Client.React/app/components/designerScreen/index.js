import * as React from 'react';
import Toolbar from './toolbar/toolbar';
import Worspace from './workspace/workspace';

class DesignerScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="designer-screen">
                <Toolbar appCfg={this.props.appCfg} />
                <Worspace />
            </div>
        );
    }

}
export default DesignerScreen;