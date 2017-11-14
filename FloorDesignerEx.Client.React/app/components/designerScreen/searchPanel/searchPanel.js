import * as React from 'react';
import SearchPanelForm from './searchPanelForm';
import SearchPanelFormResult from './searchPanelFormResult';
import SearchPanelCreateFloor from './searchPanelCreateFloor';
import SearchPanelFloorList from './searchPanelFloorList';

const SearchPanel = (props) => {

    const { floorList } = props;

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
                <SearchPanelFloorList floorList={floorList} />
            </group>
        </div>
    )
}

export default SearchPanel;