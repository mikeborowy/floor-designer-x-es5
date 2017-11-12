import * as React from 'react';
import SearchPanelFloorListItem from './searchPanelFloorListItem';

const SearchPanelFloorList = (props) => {

    const { floorList, floorItemActions } = props; 

    return (
        <ul id="floors-list" className="demo-list-action mdl-list">
            {
                floorList.map((floorItem) => {
                    return <SearchPanelFloorListItem key={floorItem.id} id={floorItem.id} floor={floorItem} floorItemActions={floorItemActions}/>
                })
            }
        </ul>
    )
}

export default SearchPanelFloorList;