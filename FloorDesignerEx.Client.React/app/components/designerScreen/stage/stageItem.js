import * as React from 'react';
import $ from 'jquery';
import { TweenMax } from 'gsap';

import RoomsCfg from '../common/roomsCfg';

class StageItem extends React.Component {

    constructor(props) {
        super(props)

        const roomsCfg = RoomsCfg();
        this.cfg = {
            gridCellWidth: roomsCfg.CELL_WIDTH,
            gridCellHeight: roomsCfg.CELL_HEIGHT,
            paddingLeft: roomsCfg.SHAPE_CFG.PADDING_LEFT,
            paddingTop: roomsCfg.SHAPE_CFG.PADDING_TOP,
            itemBorderSize: roomsCfg.SHAPE_CFG.BORDER_SIZE,
            itemColor: roomsCfg.COLOR_WHITE_01,
            itemSelectedColor: roomsCfg.COLOR_BLUE_01
        }

        let { itemSelectedColor, itemColor } = this.cfg;

        this.state = {
            id:-1, x:0, y:0, r:0, tox:0, toy:0, w:0, h:0, sh:'', iterator:-1, isSelected: false
        };

        //let { id, x, y, r, tox, toy, w, h, sh, iterator, isSelected } = this.props;
        //this.state = { id, x, y, r, tox, toy, w, h, sh, iterator, isSelected }

        this.createLShapeRoom = this.createLShapeRoom.bind(this);
        this.createRegularShapeRoom = this.createRegularShapeRoom.bind(this);
    }

    createRegularShapeRoom() {

        let { paddingLeft, paddingTop, itemSelectedColor, itemColor} = this.cfg;
        let { w, h, sh, isSelected } = this.props;

        let width = w - (paddingLeft * 2);
        let height = h - (paddingTop * 2);
        let backgroundColor = (isSelected ? itemSelectedColor : itemColor);

        let style = {
            width,
            height,
            backgroundColor
        };

        let itemBgnd = (
            <div className={`item-bgnd ${sh}`} style={style}></div>
        )

        return itemBgnd;
    };

    createLShapeRoom() {

        let { paddingLeft, paddingTop, itemBorderSize, gridCellWidth, itemSelectedColor, itemColor } = this.cfg;
        let { w, h, sh, isSelected } = this.props;

        let width = w - (paddingLeft * 2);
        let height = h - (paddingTop * 2);
        let backgroundColor = (isSelected ? itemSelectedColor : itemColor);

        let style = {
            width,
            height
        };

        let styleTop = {
            width: width / 3 + (itemBorderSize + 1),
            height: height / 3,
            backgroundColor
        };

        let styleBottom = {
            width: width - gridCellWidth,
            height: height,
            backgroundColor
        };

        let itemBgnd = (
            <div className={`item-bgnd ${sh}`} style={style}>
                <div className='l-shape-top' style={styleTop}></div>
                <div className='l-shape-bottom' style={styleBottom}></div>
            </div>
        );

        return itemBgnd;
    };

    onSelect(evt) {

        //if (!this.state.isSelected)
        //    this.setState({ isSelected: true });
        //else
        //    this.setState({ isSelected: false });

        //console.log(this.state);

        let { id, x, y, r, tox, toy, w, h, sh } = this.props;
        this.props.onSelect({ id, x, y, r, tox, toy, w, h, sh, isSelected: this.state.isSelected });

        //console.log('onSelect ' + this.props.sh, this.state.isSelected);
    }

    onDragBtnDown(evt) {

        if (!this.state.dragIsOn) {

            this.setState({ dragIsOn : true });

            //var btn = $(evt.target);
            //var invBtn = btn.parent().find('.shape-drag-inv-btn');
            //var icon = btn.find('.shape-drag-inv-icon')

            //TweenLite.set(invBtn, { scaleX: 5, scaleY: 5 })

            //var draggedItem = btn.parent().parent();
            //createDraggableStageItem(draggedItem, actionsOfDraggable.drag);

            //deslectItems();
            //selectItem(draggedItem);
        }
    }

    onDragBtnUp(evt) {

        if (this.state.dragIsOn) {

            this.setState({ dragIsOn: false });

            //var btn = $(evt.target);
            //var invBtn = btn.parent().find('.shape-drag-inv-btn');
            //var icon = btn.find('.shape-drag-inv-icon')

            //TweenLite.set(invBtn, { scaleX: 1, scaleY: 1 })

            //var draggedItem = btn.parent().parent();

            //if (currentDraggable != null) {
            //    draggedItem.attr('data-box-x', Math.ceil(currentDraggable[0].x));
            //    draggedItem.attr('data-box-y', Math.ceil(currentDraggable[0].y));

            //    //currentDraggable[0].kill();
            //    //currentDraggable[0].disable();
            //    //keepBounds(draggedItem);

            //    //TweenMax.to(draggedItem, 0.2, {
            //    //    x: draggedItem.attr('data-box-x'),
            //    //    y: draggedItem.attr('data-box-y')
            //    //});
            //}

            //if (debugMode) {
            //    console.log('dragIsOn:' + dragIsOn);
            //    console.log(currentDraggable);
            //};
        }
    }

    render() {
        let { id, x, y, r, tox, toy, w, h, sh } = this.props;

        let style = {
            position: 'absolute',
            width: w,
            height: h,
            left: x,
            top: y
        }

        let shapeBoxDiv;

        if (sh === "shape-room-l-3x2") {
            shapeBoxDiv = this.createLShapeRoom()
        }
        else {
            shapeBoxDiv = this.createRegularShapeRoom()
        }

        return (
            <div
                className='item-box'
                style={style}
                data-box-id={id}
                data-box-x={x}
                data-box-y={y}
                data-box-r={r}
                data-box-tox={tox}
                data-box-toy={toy}
                data-box-w={w}
                data-box-h={h}
                data-box-shape={sh}
                data-box-selected={false}
                data-parent='stage'
                onClick={this.onSelect.bind(this)}
            >
                {shapeBoxDiv}
                <div className='shape-rotate-btn shape-button' data-btn-r={r * (-1)}>
                    <div className='shape-rotate-inv-btn' />
                    <i className='material-icons shape-rotate-inv-icon'>rotate_right</i>
                </div>
                <div className='shape-drag-btn shape-button' data-btn-r={r * (-1)} >
                    <div className='shape-drag-inv-btn' />
                    <i className='material-icons shape-drag-inv-icon'> drag_handle </i>
                </div>
                <div className='shape-delete-btn shape-button' data-btn-r={r * (-1)}>
                    <div className='shape-delete-inv-btn' />
                    <i className='material-icons shape-delete-inv-icon'>delete</i>
                </div>
                <div className='shape-resize-btn shape-button' data-btn-r={r * (-1)}>
                    <div className='shape-resize-inv-btn' />
                    <i className='material-icons shape-resize-inv-icon'>photo_size_select_small</i>
                </div>
            </div>
        )
    }
}

export default StageItem