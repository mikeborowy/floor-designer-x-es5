import * as React from 'react';
import $ from 'jquery';

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


        this.getCurrentId = this.getCurrentId.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));

    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
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


    getCurrentId() {

        var _a = 0;

        $.each($('.item-box'), function (i, val) {

            _a = $($('.item-box')[i]).data('box-id');
        });

        return _a;
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