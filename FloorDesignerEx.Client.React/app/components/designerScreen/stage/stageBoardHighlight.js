import * as React from 'react';
import $ from 'jquery';

import RoomsCfg from '../common/roomsCfg';

class StageBoardHighlight extends React.Component {

    //{ id, width, height, top, left, onMouseOver }
    constructor(props) {
        super(props)

        this.style = {
            position: 'absolute',
            top: props.top,
            left: props.left,
            width: props.width,
            height: props.height,
            backgroundColor: 'rgba(123,123,123,0.5)'
        };

        this.currentAction = '';
        this.gridCellWidth = RoomsCfg().CELL_WIDTH;
        this.gridCellHeight = RoomsCfg().CELL_HEIGHT;

        this.draggedObj = {
            x: 0,
            y: 0,
        };
    }
   
    onDragOver(evt) {

        if (evt.preventDefault) {
            evt.preventDefault();
        }

        evt.dataTransfer.dropEffect = 'move';
    }

    onDragEnter(evt) {

        if (evt.preventDefault) {
            evt.preventDefault();
        }

        this.currentAction = 'drag';

        let currentField = $(evt.currentTarget);
        currentField.addClass('board-highlight-over');

        let gridPos = {
            x: currentField[0].offsetLeft,
            y: currentField[0].offsetTop
        };

        this.draggedObj.x = gridPos.x;
        this.draggedObj.y = gridPos.y;
    }

    onDragEnd(evt) {
        let currentField = $(evt.currentTarget);
        currentField.removeClass('board-highlight-over');

    }

    onDragLeave(evt) {
        let currentField = $(evt.currentTarget);
        currentField.removeClass('board-highlight-over');
    }

    onDrop(evt) {

        console.log('onDragDrop')
        if (evt.preventDefault) {
            evt.preventDefault(); // stops the browser from redirecting.
        }

        $('#stage-grid-live')
            .find('.stage-board-field-highlight')
            .css({
                width: this.gridCellWidth,
                height: this.gridCellHeight
            });

        let currentField = $(evt.currentTarget);
        currentField.removeClass('board-highlight-over');

        var evt = new CustomEvent('onDropObject', { detail: this.draggedObj });
        window.dispatchEvent(evt);

        //get freshly created item container
        //let currentItem = createStageItem(
        //    draggedObj.id,
        //    draggedObj.x,
        //    draggedObj.y,
        //    draggedObj.r,
        //    draggedObj.tox,
        //    draggedObj.toy,
        //    draggedObj.w,
        //    draggedObj.h,
        //    draggedObj.sh);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div
                id={this.props.id}
                className="stage-board-field-highlight"
                style={this.style}
                onDragOver={this.onDragOver.bind(this)}
                onDragEnter={this.onDragEnter.bind(this)}
                onDragLeave={this.onDragLeave.bind(this)}
                onDragEnd={this.onDragEnd.bind(this)}
                onDrop={this.onDrop.bind(this)}
            >
            </div>
        );
    }
}

export default StageBoardHighlight;