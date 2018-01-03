import * as React from 'react';

import axios from 'axios';

import Toolbar from '../toolbar/toolbar';
import ShapesPanel from '../shapesPanel/shapesPanel';
import Stage from '../stage/stage';

import RoomsCfg from '../../common/roomsCfg';
import InitialState from '../../common/initialState';

class Workspace extends React.Component {

    constructor(props) {
        super(props)

        this.floorDummy = {
            id: -1,
            officeId: -1,
            name: "",
            width: 0,
            height: 0,
            xpos: 0,
            ypos: 0,
            image: '',
            rooms: []
        }

        this.state = {
            zoom: 1,
            floorList: [],
            selectedFloor: this.floorDummy,
            prevSelectedFloor: this.floorDummy
        }

        this.itemsAtStage = [];

        this.currentAction = '';
        this.gridCellWidth = RoomsCfg().CELL_WIDTH;
        this.gridCellHeight = RoomsCfg().CELL_HEIGHT;
        this.draggedObj = null;

        this.onUpdateZoom = this.onUpdateZoom.bind(this);

        this.onCreateFloor = this.onCreateFloor.bind(this);
        this.onEditFloor = this.onEditFloor.bind(this);
        this.onDeleteFloor = this.onDeleteFloor.bind(this);
        this.onSaveFloor = this.onSaveFloor.bind(this);
        this.onStageItemsChanged = this.onStageItemsChanged.bind(this);
    }

    /* HELPERS START */
    updateDimensions() {

        let toolbarHeight = document.querySelector("#designer-toolbar").offsetHeight;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        document.querySelector("#shapes-panel").setAttribute('style', 'height:' + (windowHeight - toolbarHeight) + 'px');
    }
    /* HELPERS END */

    /* WORKSPACE EVENT HANDLERS START */
    onUpdateZoom(zoom) {

    }
    /* WORKSPACE EVENT HANDLERS END */


    /* FLOOR DATA EVENT HANDLERS START */
    /*we get zoom value from toolbar and set in current comp state*/
    onCreateFloor(evt) {

        let floor = evt.detail;
        let floorList = this.state.floorList;

        const that = this;

        axios({
            method: 'post',
            url: "http://localhost:52191/api/floors",
            data: {
                "officeId": 1,
                "name": "Floor-" + floor.floorNum,
                "width": floor.width,
                "height": floor.height,
                "xpos": 0,
                "ypos": 0,
                "image": null,
                "rooms": []
            }
        })
            .then(response => {
                that.setState({ floorList: Object.assign(floorList, response.data) });
            })
            .catch(error => {

            });
    }

    onEditFloor(evt) {

        let prevSelectedFloor = this.state.selectedFloor;
        let floorId = evt.detail.floorId * 1;
        let findId = this.state.floorList.map(floor => (floor.id)).indexOf(floorId);
        let selectedFloor = this.state.floorList[findId];

        if (prevSelectedFloor.id != selectedFloor.id)
            this.setState({ selectedFloor });
    }

    onDeleteFloor(evt) {
        let floorList = this.state.floorList;
        let findId = floorList.map((item) => { return item.id }).indexOf(evt.detail.floorId);
        const that = this;

        axios({
            method: 'delete',
            url: "http://localhost:52191/api/floors/" + evt.detail.floorId
        })
            .then(response => {
                floorList.splice(findId, 1);
                this.setState({ floorList });
            })
            .catch(error => {
                console.log(error)
            });
    }

    onSaveFloor(evt) {

        console.log(this)

        //let id = this.state.selectedFloor.id;
        //let floor = {
        //    "id": this.state.selectedFloor.id,
        //    "officeId": this.state.selectedFloor.officeId,
        //    "name": this.state.selectedFloor.floorNum,
        //    "width": this.state.selectedFloor.width,
        //    "height": this.state.selectedFloor.height,
        //    "xpos": 0,
        //    "ypos": 0,
        //    "image": null,
        //    "rooms": this.itemsAtStage
        //}

        //const that = this;

        //axios({
        //    method: 'put',
        //    url: "http://localhost:52191/api/floors/" + id,
        //    data: floor
        //})
        //    .then(response => {
        //        console.log(response)
        //    })
        //    .catch(error => {

        //    });
    }

    onStageItemsChanged(evt) {
        let rooms = evt.detail.itemsAtStage;
        let selectedFloor = this.state.selectedFloor;
        let tempSelectedFloor = Object.assign({}, selectedFloor, {rooms})

        console.log(tempSelectedFloor)

        //setState(selectedFloor)
        //console.log(this.itemsAtStage)
    }
    /* FLOOR DATA EVENT HANDLERS END */

    /* HTTP CALL REQUESTS START */
    onGetFloorList() {

        const that = this;

        axios({
            method: 'get',
            url: "http://localhost:52191/api/floors"
        })
            .then(response => {
                let floorList = response.data;
                that.setState({ floorList });
            })
            .catch(error => {
                that.setState({ floorList: InitialState.floorList });
            });
    }
    /* HTTP CALL REQUESTS END */

    componentDidMount() {
        this.updateDimensions();
        this.onGetFloorList();

        window.addEventListener("resize", this.updateDimensions.bind(this));

        window.addEventListener('onCreateFloor', this.onCreateFloor);
        window.addEventListener('onEditFloor', this.onEditFloor);
        window.addEventListener('onDeleteFloor', this.onDeleteFloor);
        window.addEventListener('onSaveFloor', this.onSaveFloor);

        window.addEventListener('onStageItemsChanged', this.onStageItemsChanged);
    }

    componentWillUnmount() {

        window.removeEventListener("resize", this.updateDimensions.bind(this));

        window.removeEventListener('onCreateFloor', this.onCreateFloor);
        window.removeEventListener('onEditFloor', this.onEditFloor);
        window.removeEventListener('onDeleteFloor', this.onDeleteFloor);
        window.removeEventListener('onSaveFloor', this.onSaveFloor);

        window.removeEventListener('onStageItemsChanged', this.onStageItemsChanged);
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