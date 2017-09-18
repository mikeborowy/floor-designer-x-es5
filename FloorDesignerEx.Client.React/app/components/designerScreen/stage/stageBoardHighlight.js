import * as React from 'react';
import $ from 'jquery';

const StageBoardHighlight = ({ id, width, height, top, left, onMouseOver }) => {

    let divStyle = {
        position: 'absolute',
        top: top,
        left: left,
        width: width,
        height: height
    };

    let draggedObj = {};
   
    function onDragOver(evt) {

        //if (evt.originalEvent.preventDefault) {
        //    evt.originalEvent.preventDefault();
        //}

        //evt.originalEvent.dataTransfer.dropEffect = 'move';

        return false;
    }

    function onDragEnter(evt) {

        //if (evt.originalEvent.preventDefault) {
        //    evt.originalEvent.preventDefault();
        //}

        //currentAction = 'drag';

        let currentField = $(evt.currentTarget);
        currentField.addClass('board-highlight-over');

        let _gridPos = {
            x: currentField[0].offsetLeft,
            y: currentField[0].offsetTop
        };

        draggedObj.x = _gridPos.x;
        draggedObj.y = _gridPos.y;
        draggedObj.r = 0;
        draggedObj.tox = 0;
        draggedObj.toy = 0;
    }

    function onDragLeave(evt) {

        var _currentField = $(evt.currentTarget);
        _currentField.removeClass('board-highlight-over');
    }

    function onDragDrop(evt) {

        //detachGridCellEvents();

        var currentField = $(event.currentTarget);
        currentField.removeClass('board-highlight-over');

        //if (evt.originalEvent.preventDefault) {
        //    evt.originalEvent.preventDefault(); // stops the browser from redirecting.
        //}

        $('#stage-grid-live')
            .find('.stage-board-field-highlight')
            .css({
                width: gridCellWidth,
                height: gridCellHeight
            });

        console.log(draggedObj)

        //get freshly created item container
        //var currentItem = createStageItem(
        //    draggedObj.id,
        //    draggedObj.x,
        //    draggedObj.y,
        //    draggedObj.r,
        //    draggedObj.tox,
        //    draggedObj.toy,
        //    draggedObj.w,
        //    draggedObj.h,
        //    draggedObj.sh);

        //return currentItem;
    }

    function onDragEnd(evt) {

        //detachGridCellEvents();

        var _currentField = $(evt.currentTarget);
        _currentField.removeClass('board-highlight-over');

    }

    return (
        <div
            id={id}
            className="stage-board-field-highlight"
            style={divStyle}
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragDrop={onDragDrop}
        >
        </div>
    );
}

export default StageBoardHighlight;