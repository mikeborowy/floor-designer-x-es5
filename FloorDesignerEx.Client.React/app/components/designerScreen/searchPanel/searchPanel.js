import * as React from 'react';
import SearchPanelForm from './searchPanelForm';
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
                <SearchPanelForm />
                <SearchPanelFloorList floorList={this.state.floorList} />
            </div>
        )
    }
}

export default SearchPanel;