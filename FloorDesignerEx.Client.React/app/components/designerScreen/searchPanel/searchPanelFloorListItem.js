import * as React from 'react';
import $ from 'jquery';

const SearchPanelFloorListItem = (props) => {

    const { floor } = props;

    function onEditFloor(evt) {
        let event = new CustomEvent('onEditFloor', { detail: { floorId: evt.currentTarget.id * 1} });
        window.dispatchEvent(event);
    }

    function onDeleteFloor(evt) {
        let event = new CustomEvent('onDeleteFloor', { detail: { floorId: evt.currentTarget.id * 1 } });
        window.dispatchEvent(event);
    }

    return (
        <li
            id={floor.id}
            className="mdl-list__item mdl-list-item-fixed floor-list-item">
            <div className="mdl-list__item-primary-content">
                <div
                    id={floor.id}
                    onClick={onEditFloor}
                    className="floor-edit-btn">
                    {floor.name}
                </div>
            </div>
            <button
                id={floor.id}
                onClick={onDeleteFloor}
                className="mdl-button mdl-js-button mdl-button--icon mdl-button-color-blue floor-delete-btn">
                <i className="material-icons">delete</i>
            </button>
        </li>
    )
}

export default SearchPanelFloorListItem;