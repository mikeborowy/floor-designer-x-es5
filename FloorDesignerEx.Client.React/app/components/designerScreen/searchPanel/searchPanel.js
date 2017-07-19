import * as React from 'react';
import SearchPanelForm from './searchPanelForm';
import SearchPanelFormResult from './searchPanelFormResult';
import SearchPanelCreateFloor from './searchPanelCreateFloor';
import SearchPanelFloorList from './searchPanelFloorList';

class SearchPanel extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            floorList: [
                {
                    id: 1,
                    name: "Floor-1",
                    width: 12,
                    height: 12
                }
            ]
        }
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
                    <SearchPanelFormResult/>
                    <SearchPanelCreateFloor/>
                    <SearchPanelFloorList floorList={this.state.floorList} />
                </group>
            </div>
        )
    }
}

export default SearchPanel;