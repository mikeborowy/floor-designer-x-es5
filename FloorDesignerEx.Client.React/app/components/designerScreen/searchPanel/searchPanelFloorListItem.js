import * as React from 'react';

const SearchPanelFloorListItem = (props) => {

    const { floor } = props

    return (
        <li id={floor.id} className="mdl-list__item mdl-list-item-fixed floor-list-item" data-width={floor.width} data-height={floor.height}>
            <div className="mdl-list__item-primary-content">
                <div data-floor-id={floor.id} className="floor-edit-btn">{floor.name}</div>
            </div>
            <button data-floor-id={floor.id} className="mdl-button mdl-js-button mdl-button--icon mdl-button-color-blue floor-delete-btn">
                <i className="material-icons">delete</i>
            </button>
        </li>
    )
}

export default SearchPanelFloorListItem;