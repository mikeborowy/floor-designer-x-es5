import * as React from 'react';

import Toolbar from '../toolbar/toolbar';
import ShapesPanel from '../shapesPanel/shapesPanel';
import Stage from '../stage/stage';

import RoomsCfg from '../common/roomsCfg';

class Workspace extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            zoom: 1,
            floorList: [],
            selectedFloor: {}
        }

        this.currentAction = '';
        this.gridCellWidth = RoomsCfg().CELL_WIDTH;
        this.gridCellHeight = RoomsCfg().CELL_HEIGHT;
        this.draggedObj = null;

        this.onUpdateZoom = this.onUpdateZoom.bind(this);

        this.onEditFloor = this.onEditFloor.bind(this);
        this.onDeleteFloor = this.onDeleteFloor.bind(this);
    }

    /* HELPERS START */
    updateDimensions() {

        let toolbarHeight = document.querySelector("#designer-toolbar").offsetHeight;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        document.querySelector("#shapes-panel").setAttribute('style', 'height:' + (windowHeight - toolbarHeight) + 'px')
    }
    /* HELPERS END */

    /* WORKSPACE EVENT HANDLERS START */
    onUpdateZoom(zoom) {

    }
    /* WORKSPACE EVENT HANDLERS END */


    /* FLOOR DATA EVENT HANDLERS START */
    /*we get zoom value from toolbar and set in current comp state*/
    onEditFloor(evt) {

        let floorId = evt.detail.floorId * 1;
        let findId = this.state.floorList.map(floor => (floor.id)).indexOf(floorId);
        let selectedFloor = this.state.floorList[findId];

        this.setState({ selectedFloor });
    }

    onDeleteFloor(evt) {
        console.log('onDeleteFloor', evt.detail)

    }
    /* FLOOR DATA EVENT HANDLERS END */

    /* HTTP CALL REQUESTS START */
    getFloorList() {

        let customId = new Date().valueOf();

        let floorList = [
            {
                "id": 1,
                "officeId": 1,
                "name": "Floor 1",
                "width": 12,
                "height": 10,
                "xpos": 0,
                "ypos": 0,
                "image": "../Images/bgnd_12x10.jpg",
                "rooms": []
            },
            {
                "id": 3,
                "officeId": 1,
                "name": "Floor-2",
                "width": 8,
                "height": 8,
                "xpos": 0,
                "ypos": 0,
                "image": "../Images/bgnd_12x10.jpg",
                "rooms": [
                    {
                        "id": 27, "shape": "shape-room-sqr-3x3", "width": 180, "height": 180, "xpos": 0, "ypos": 0, "rotation": 0, "floorId": 3
                    },
                    {
                        "id": 28, "shape": "shape-room-l-3x2", "width": 300, "height": 180, "xpos": 0, "ypos": 180, "rotation": 0, "floorId": 3
                    }
                ]
            }
        ]

        this.setState({ floorList })

        //let action = "http://localhost:52191/api/floors";
        //$.ajax({
        //    type: "GET",
        //    url: action,
        //    cache: false,
        //    success: function (response) {
        //        console.log('getFloorList', response)
        //    },
        //    error: function (xhr, ajaxOptions, thrownError) {
        //        if (debugMode) {
        //            console.log(xhr, ajaxOptions, thrownError);
        //        }
        //    }
        //});
    }
    /* HTTP CALL REQUESTS END */

    componentDidMount() {
        this.updateDimensions();
        this.getFloorList();

        window.addEventListener("resize", this.updateDimensions.bind(this));
        window.addEventListener('onEditFloor', this.onEditFloor);
        window.addEventListener('onDeleteFloor', this.onDeleteFloor);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));

        window.removeEventListener('onEditFloor', this.onEditFloor);
        window.removeEventListener('onDeleteFloor', this.onDeleteFloor);
    }

    render() {

        return (
            <div id="designer-workspace">
                <Toolbar
                    appCfg={this.props.appCfg}
                    onZoomUpdate={this.onUpdateZoom}
                    floorList={this.state.floorList}
                />
                <ShapesPanel
                    appCfg={this.props.appCfg}
                />
                <Stage
                    appCfg={this.props.appCfg}
                    floor={this.state.selectedFloor}
                />
            </div>
        )
    }
}

Workspace.displayName = "Workspace";

export default Workspace;