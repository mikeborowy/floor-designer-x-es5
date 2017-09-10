import * as React from 'react';
import $ from 'jquery';

import Toolbar from '../toolbar/toolbar';
import ShapesPanel from '../shapesPanel/shapesPanel';
import Stage from '../stage/stage';

class Workspace extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            zoom: 1
        }
    }

    updateDimensions() {

        let toolbarHeight = $("#designer-toolbar").height();
        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        $("#shapes-panel").height(
            windowHeight - toolbarHeight
        )
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
                    zoom={this.state.zoom}
                />
            </div>
        )
    }
}

Workspace.displayName = "Workspace";

export default Workspace;