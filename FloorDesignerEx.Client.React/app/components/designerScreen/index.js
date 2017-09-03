import * as React from 'react';
import Worspace from './workspace/workspace';

class DesignerScreen extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="designer-screen">
                <Worspace />
            </div>
        );
    }

}
export default DesignerScreen;