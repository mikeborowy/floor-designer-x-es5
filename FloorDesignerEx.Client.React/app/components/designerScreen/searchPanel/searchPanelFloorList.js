import * as React from 'react';
import SearchPanelFloorListItem from './searchPanelFloorListItem';

const SearchPanelFloorList = (props) => {

    const { floorList } = props; 

    function renderFloors() {

        if (floorList.length > 0)
        {
            return floorList.map((floorItem) => {
                return <SearchPanelFloorListItem key={floorItem.id} id={floorItem.id} floor={floorItem} />
            })
        }
    }

    return (
        <ul id="floors-list" className="demo-list-action mdl-list">
        {
            renderFloors()
        }
        </ul>
    )
}

export default SearchPanelFloorList;