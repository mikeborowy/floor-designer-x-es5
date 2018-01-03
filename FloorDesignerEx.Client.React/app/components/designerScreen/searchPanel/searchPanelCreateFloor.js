import * as React from 'react';
import _ from 'lodash';

const SearchPanelCreateFloor = () => {

    function onCreateFloor(evt) {

        let form = validateFloorForm();

        if (form.isValid) {

            _.forEach(form.errors, function (key, val) {

                if (document.getElementById('floor-' + val).parentNode.className.indexOf('is-invalid') === -1) {
                    document.getElementById('floor-' + val).parentNode.className += ' is-invalid';
                }
            })

            let event = new CustomEvent('onCreateFloor', {
                detail: {
                    floorNum: document.getElementById('floor-num').value,
                    width: document.getElementById('floor-width').value,
                    height: document.getElementById('floor-height').value
                }
            });

            window.dispatchEvent(event);
        }
        else {
            _.forEach(form.errors, function (key, val) {

                if (document.getElementById('floor-' + val).parentNode.className.indexOf('is-invalid') === -1) {
                    document.getElementById('floor-' + val).parentNode.className += ' is-invalid';
                }

            })
        }
    }

    function validateFloorForm() {

        var data = {
            num: document.getElementById('floor-num').value,
            width: document.getElementById('floor-width').value,
            height: document.getElementById('floor-height').value
        };

        let errors = {};
        //floor number
        if (data.num === '' || data.num === null) {
            errors.num = 'This field is required';
        }

        if (isNaN(data.num)) {
            errors.num = 'This is not a number';
        }
        //floor width
        if (data.width === '' || data.width === null) {
            errors.width = 'This field is required';
        }

        if (isNaN(data.width)) {
            errors.width = 'This is not a number';
        }

        //floor height
        if (data.height === '' || data.height === null) {
            errors.height = 'This field is required';
        }

        if (isNaN(data.height)) {
            errors.height = 'This is not a number';
        }

        return { errors, isValid: _.isEmpty(errors) };
    }

    return (
        <div id="floor-create" className="mdl-list__item mdl-list__item--two-line">
            <div className="mdl-list__item-primary-content">
                <form id="floor-create-form">
                    <span>Floor:</span>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input floor-textfield" type="text" id="floor-num" pattern="^[0-9]*" />
                        <label className="mdl-textfield__label floor-textfield" htmlFor="floor-num">Number</label>
                    </div>
                    <span>Width:</span>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input floor-textfield" type="text" id="floor-width" pattern="^[0-9]*" />
                        <label className="mdl-textfield__label floor-textfield" htmlFor="floor-width">Meters</label>
                    </div>
                    <span>Height:</span>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input floor-textfield" type="text" id="floor-height" pattern="^[0-9]*" />
                        <label className="mdl-textfield__label floor-textfield" htmlFor="floor-height">Meters</label>
                    </div>
                </form>
            </div>
            <span className="mdl-list__item-secondary-content">
                <button
                    id="add-floor-btn"
                    type="submit"
                    onClick={onCreateFloor}
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-toolbar-button">
                    <i className="material-icons">add</i>
                    Floor
            </button>
            </span>
        </div>
    )
}

export default SearchPanelCreateFloor;