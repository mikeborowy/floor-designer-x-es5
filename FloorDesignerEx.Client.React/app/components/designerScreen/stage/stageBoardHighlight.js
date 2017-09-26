import * as React from 'react';
import $ from 'jquery';

class StageBoardHighlight extends React.Component {

    //{ id, width, height, top, left, onMouseOver }
    constructor(props) {
        super(props)

        this.divStyle = {
            position: 'absolute',
            top: props.top,
            left: props.left,
            width: props.width,
            height: props.height
        };

        this.currentAction = '';
        this.draggedObj = {};
    }

   
    onDragOver(evt) {

        console.log('onDragOver')
        //if (evt.originalEvent.preventDefault) {
        //    evt.originalEvent.preventDefault();
        //}

        evt.dataTransfer.dropEffect = 'move';

        //return false;
    }

    onDragEnter(evt) {

        console.log('onDragEnter')

        //if (evt.originalEvent.preventDefault) {
        //    evt.originalEvent.preventDefault();
        //}

        this.currentAction = 'drag';

        let currentField = $(evt.currentTarget);
        currentField.addClass('board-highlight-over');

        let gridPos = {
            x: currentField[0].offsetLeft,
            y: currentField[0].offsetTop
        };

        this.draggedObj.x = gridPos.x;
        this.draggedObj.y = gridPos.y;
        this.draggedObj.r = 0;
        this.draggedObj.tox = 0;
        this.draggedObj.toy = 0;
    }


    onDragDrop(evt) {

        console.log('onDragDrop')

        let currentField = $(event.currentTarget);
        currentField.removeClass('board-highlight-over');

        if (evt.originalEvent.preventDefault) {
            evt.originalEvent.preventDefault(); // stops the browser from redirecting.
        }

        $('#stage-grid-live')
            .find('.stage-board-field-highlight')
            .css({
                width: gridCellWidth,
                height: gridCellHeight
            });

        console.log(draggedObj)

        //get freshly created item container
        let currentItem = createStageItem(
            draggedObj.id,
            draggedObj.x,
            draggedObj.y,
            draggedObj.r,
            draggedObj.tox,
            draggedObj.toy,
            draggedObj.w,
            draggedObj.h,
            draggedObj.sh);

        return currentItem;
    }

    onDragEnd(evt) {

        console.log('onDragEnd');

        let currentField = $(evt.currentTarget);
        currentField.removeClass('board-highlight-over');

    }

    onDragLeave(evt) {

        console.log('onDragLeave');

        let currentField = $(evt.currentTarget);
        currentField.removeClass('board-highlight-over');
    }

    componentDidMount() {
        let target = $(this);
        //$(this).unbind('mousedown', this);
        target.bind('dragover', this.onDragOver.bind(this));
        target.bind('dragenter', this.onDragEnter.bind(this));
        target.bind('dragleave', this.onDragLeave.bind(this));
        target.bind('drop', this.onDragDrop.bind(this));
        target.bind('dragend', this.onDragEnd.bind(this));

        console.log('tatata')
    }

    componentWillUnmount() {
        let target = $(this);
        //$(this).unbind('mousedown', this);
        target.unbind('dragover', this.onDragOver.bind(this));
        target.unbind('dragenter', this.onDragEnter.bind(this));
        target.unbind('dragleave', this.onDragLeave.bind(this));
        target.unbind('drop', this.onDragDrop.bind(this));
        target.unbind('dragend', this.onDragEnd.bind(this));
    }

    render() {
        return (
            <div
                id={this.props.id}
                className="stage-board-field-highlight"
                style={this.divStyle}
                onDragOver={this.onDragOver.bind(this)}
                onDragEnter={this.onDragEnter.bind(this)}
            >
            </div>
        );
    }
}

export default StageBoardHighlight;