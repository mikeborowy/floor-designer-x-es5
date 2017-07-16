import * as React from 'react';
import SearchPanelFloorListItem from './searchPanelFloorListItem';

const SearchPanelFloorList = (props) => {

    const { floorList } = props; 

    return (
        <ul id="floors-list" className="demo-list-action mdl-list">
            {
                floorList.map((floorItem) => {
                    return <SearchPanelFloorListItem key={floorItem.id} floor={floorItem}/>
                })
            }
        </ul>
    )
}

export default SearchPanelFloorList;