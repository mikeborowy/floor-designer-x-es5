import * as React from 'react';

const SearchPanelCreateFloor = () => {

    return (
        <div id="floor-create" className="mdl-list__item mdl-list__item--two-line">
            <div className="mdl-list__item-primary-content">
                <form id="floor-create-form">
                    <span>Floor:</span>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input floor-textfield" type="text" id="floor-num" pattern="^[0-9]*" />
                        <label className="mdl-textfield__label floor-textfield" for="floor-num">Number</label>
                    </div>
                    <span>Width:</span>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input floor-textfield" type="text" id="floor-width" pattern="^[0-9]*" />
                        <label className="mdl-textfield__label floor-textfield" for="floor-width">Meters</label>
                    </div>
                    <span>Height:</span>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input floor-textfield" type="text" id="floor-height" pattern="^[0-9]*" />
                        <label className="mdl-textfield__label floor-textfield" for="floor-height">Meters</label>
                    </div>
                </form>
            </div>
            <span className="mdl-list__item-secondary-content">
                <button id="add-floor-btn" type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-toolbar-button">
                    <i className="material-icons">add</i>
                    Floor
            </button>
            </span>
        </div>
    )
}

export default SearchPanelCreateFloor;