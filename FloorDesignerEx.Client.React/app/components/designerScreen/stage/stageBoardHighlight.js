import * as React from 'react';
import $ from 'jquery';

import RoomsCfg from '../../common/roomsCfg';

const StageBoardHighlight = (props) => {

    let style = {
        position: 'absolute',
        top: props.top,
        left: props.left,
        width: props.width,
        height: props.height
    };

    let draggedObj = {};
    let currentAction = '';
    let gridCellWidth = RoomsCfg().CELL_WIDTH;
    let gridCellHeight = RoomsCfg().CELL_HEIGHT;

    function onDragOver(evt) {

        if (evt.preventDefault) {
            evt.preventDefault();
        }

        evt.dataTransfer.dropEffect = 'move';
    }

    function onDragEnter(evt) {

        if (evt.preventDefault) {
            evt.preventDefault();
        }

        let currentField = evt.currentTarget;
        currentField.classList.add('board-highlight-over' );

        let gridPos = {
            x: currentField.offsetLeft,
            y: currentField.offsetTop
        };

        draggedObj.x = gridPos.x;
        draggedObj.y = gridPos.y;
    }

    function onDragEnd(evt) {
        let currentField = evt.currentTarget;
        currentField.classList.remove('board-highlight-over');
    }

    function onDragLeave(evt) {
        let currentField = evt.currentTarget;
        currentField.classList.remove('board-highlight-over');
    }

    function onDrop(evt) {

        if (evt.preventDefault) {
            evt.preventDefault(); // stops the browser from redirecting.
        }

        document.querySelectorAll('.stage-board-field-highlight').forEach(function (item) {

            item.style.width = gridCellWidth;
            item.style.height = gridCellHeight;
        })

        let currentField = evt.currentTarget;
        currentField.classList.remove('board-highlight-over');

        var evt = new CustomEvent('onDropObject', { detail: draggedObj });
        window.dispatchEvent(evt);

    }

    return (
        <div
            id={props.id}
            className="stage-board-field-highlight"
            style={style}
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragEnd={onDragEnd}
            onDrop={onDrop}
        >
        </div>
    );
}

export default StageBoardHighlight;