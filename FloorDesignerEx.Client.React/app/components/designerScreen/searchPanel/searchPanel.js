import * as React from 'react';
import SearchPanelForm from './searchPanelForm';
import SearchPanelFormResult from './searchPanelFormResult';
import SearchPanelCreateFloor from './searchPanelCreateFloor';
import SearchPanelFloorList from './searchPanelFloorList';

class SearchPanel extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            floorList: []
        }

        this.onEditFloor = this.onEditFloor.bind(this);
        this.onDeleteFloor = this.onDeleteFloor.bind(this);

        this.floorItemActions = {
            onEditFloor: this.onEditFloor,
            onDeleteFloor: this.onDeleteFloor,
        }
    }

    onAddFloor(evt) {

    }

    onEditFloor(evt) {

        let floorId = evt.currentTarget.id * 1;
        let findId = this.state.floorList.map(floor => (floor.id)).indexOf(floorId);
        let selectedFloor = this.state.floorList[findId];
        let event = new CustomEvent('onSelectFloor', { detail: selectedFloor });
        window.dispatchEvent(event);

        //let selectedFloor = evt.currentTarget;
        //let action = "http://localhost:52191/api/floors";
        //let data = { id: evt.currentTarget.id };

        //$.ajax({
        //    type: "GET",
        //    url: action,
        //    data: data,
        //    cache: false,
        //    success: function (response) {
        //        console.log('response', response)
        //    },
        //    error: function (xhr, ajaxOptions, thrownError) {
        //        if (debugMode) {
        //            console.log(xhr, ajaxOptions, thrownError);
        //        }
        //    }
        //});
    }

    onDeleteFloor(evt) {
    }

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

    componentDidMount() {
        this.getFloorList();
    }

    render() {
        return (
            <div className="mdl-layout__drawer">
                <group className="designer-toolbar-group">
                    <span className="mdl-layout-title">Select Office</span>
                </group>
                <group className="designer-toolbar-group">
                    <SearchPanelForm />
                </group>
                <group className="designer-toolbar-group">
                    <SearchPanelFormResult />
                    <SearchPanelCreateFloor />
                    <SearchPanelFloorList floorList={this.state.floorList} floorItemActions={this.floorItemActions} />
                </group>
            </div>
        )
    }
}

export default SearchPanel;