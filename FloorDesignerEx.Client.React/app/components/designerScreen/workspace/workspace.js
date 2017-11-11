import * as React from 'react';

import Toolbar from '../toolbar/toolbar';
import ShapesPanel from '../shapesPanel/shapesPanel';
import Stage from '../stage/stage';

import RoomsCfg from '../common/roomsCfg';

class Workspace extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            zoom: 1
        }

        this.currentAction = '';
        this.gridCellWidth = RoomsCfg().CELL_WIDTH;
        this.gridCellHeight = RoomsCfg().CELL_HEIGHT;
        this.draggedObj = null;
    }


    updateDimensions() {

        let toolbarHeight = document.querySelector("#designer-toolbar").offsetHeight;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        document.querySelector("#shapes-panel").setAttribute('style', 'height:' + (windowHeight - toolbarHeight) + 'px')
    }

    /*we get zoom value from toolbar and set in current comp state*/
    updateZoom(zoom) {

    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));

    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        return (
            <div id="designer-workspace">
                <Toolbar
                    appCfg={this.props.appCfg}
                    onZoomUpdate={this.updateZoom.bind(this)}
                />
                <ShapesPanel
                    appCfg={this.props.appCfg}
                />
                <Stage
                    appCfg={this.props.appCfg}
                />
            </div>
        )
    }
}

Workspace.displayName = "Workspace";

export default Workspace;