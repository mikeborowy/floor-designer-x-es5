﻿import * as React from 'react';
import $ from 'jquery';
import TweenMax from 'gsap';
import TweenLite from 'gsap';
import Draggable from 'gsap/Draggable';
import ThrowPropsPlugin from 'gsap/src/uncompressed/plugins/ThrowPropsPlugin';

import RoomsCfg from '../common/roomsCfg';
import { itemActions, actionsOfDraggable } from '../common/stageItemActions';

class StageItem extends React.Component {

    constructor(props) {
        super(props)

        this.debugMode = true;
        const roomsCfg = RoomsCfg();

        this.cfg = {
            gridCellWidth: roomsCfg.CELL_WIDTH,
            gridCellHeight: roomsCfg.CELL_HEIGHT,
            paddingLeft: roomsCfg.SHAPE_CFG.PADDING_LEFT,
            paddingTop: roomsCfg.SHAPE_CFG.PADDING_TOP,
            itemBorderSize: roomsCfg.SHAPE_CFG.BORDER_SIZE,
            itemColor: roomsCfg.COLOR_WHITE_01,
            itemSelectedColor: roomsCfg.COLOR_BLUE_01,
            itemActions: itemActions
        }

        let { itemSelectedColor, itemColor } = this.cfg;

        this.state = {
            id: -1, x: 0, y: 0, r: 0, tox: 0, toy: 0, w: 0, h: 0, sh: '', iterator: -1, isSelected: false, dragBounds: null
        };

        this.currentDraggable = null;
        this.currentAction = itemActions.NONE;

        this.createLShapeRoom = this.createLShapeRoom.bind(this);
        this.createRegularShapeRoom = this.createRegularShapeRoom.bind(this);

        this.onUpdate = this.onUpdate.bind(this);

        this.createDraggableStageItem = this.createDraggableStageItem.bind(this);
        this.killDraggable = this.killDraggable.bind(this);

        this.updateButtonsAngle = this.updateButtonsAngle.bind(this);
    }

    createRegularShapeRoom() {

        let { paddingLeft, paddingTop, itemSelectedColor, itemColor } = this.cfg;
        let { w, h, sh, isSelected } = this.state;

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
        let { w, h, sh, isSelected } = this.state;

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

    /**
    * CREATE DRAGGABLE STAGE ITEM START
    */

    createDraggableStageItem(dragQueen, actionType) {

        const snap = true;
        const liveSnap = false;
        const throwProps = true;
        const rotationSnap = 90;

        let { gridCellWidth, gridCellHeight, itemActions } = this.cfg;
        let { dragBounds } = this.state;
        let x, y, r, w, h, resizeW, resizeH;
        let currentDraggable = this.currentDraggable;

        let onUpdate = this.onUpdate;
        let updateButtonsAngle = this.updateButtonsAngle;
        let killDraggable = this.killDraggable;

        switch (actionType) {
            //Resize Me
            case itemActions.RESIZE:

                currentDraggable = Draggable.create(dragQueen, {
                    type: "x,y",
                    throwProps: throwProps,
                    onPress: function (e) {
                        e.stopPropagation(); // cancel drag
                    },
                    onDrag: function (e) {

                        var item = dragQueen.parent();
                        deslectItems();
                        selectItem(item);

                        resizeW = (item.attr('data-box-w') * 1) + this.x;
                        resizeH = (item.attr('data-box-h') * 1) + this.y;

                        TweenLite.set(dragQueen, { x: 0, y: 0 });
                        TweenLite.set(item, { width: resizeW, height: resizeH });
                        TweenLite.set(item.find('.item-bgnd '), { width: resizeW, height: resizeH });
                    },
                    onDragEnd: function (evt) {

                        var item = dragQueen.parent();
                        item.attr('data-box-w', resizeW);
                        item.attr('data-box-h', resizeH);

                    },
                    onThrowComplete: function () {

                        var item = dragQueen.parent();
                        item.attr('data-box-w', resizeW);
                        item.attr('data-box-h', resizeH);

                        killDraggable();
                    }
                });

                break;
            //Drag Me
            case itemActions.DRAG:

                currentDraggable = Draggable.create(dragQueen, {
                    type: actionType,
                    bounds: dragBounds,
                    autoScroll: 1,
                    edgeResistance: 0.65,
                    throwProps: throwProps,
                    //throwResistance: 0,
                    maxDuration: 0.3,
                    liveSnap: liveSnap,
                    snap: {
                        x: function (endValue) {
                            return (snap || liveSnap) ? (Math.round(endValue / gridCellWidth) * gridCellWidth) : endValue;
                        },
                        y: function (endValue) {
                            return (snap || liveSnap) ? (Math.round(endValue / gridCellHeight) * gridCellHeight) : endValue;
                        }
                    },
                    //onPress: function (evt) {
                    //    evt.stopPropagation(); // cancel drag
                    //},
                    onDrag: function () {

                    },
                    //onDragEnd: function () {
                    //    x = Math.ceil(this.x) / gridCellWidth;
                    //    y = Math.ceil(this.y) / gridCellHeight;
                    //},
                    onThrowComplete: function (data) {

                        x = Math.ceil(this.x);
                        y = Math.ceil(this.y);
                        
                        killDraggable();
                        onUpdate({ x, y });
                    }
                });

                break;
            //Rotate me
            case itemActions.ROTATE:

                currentDraggable = Draggable.create(dragQueen, {
                    type: "rotation",
                    throwProps: throwProps,
                    snap: function (endValue) {
                        return Math.round(endValue / rotationSnap) * rotationSnap;
                    },
                    //onPress: function (evt) {
                    //    evt.stopPropagation(); // cancel drag
                    //},
                    onDrag: function (evt) {
                        updateButtonsAngle(this.rotation);
                    },
                    onThrowUpdate: function (evt) {
                        updateButtonsAngle(this.rotation);
                    },
                    onThrowComplete: function (evt) {

                        r = this.rotation % 360;

                        killDraggable(); 
                        onUpdate({ r });
                    }
                });
                break;
        }

        return currentDraggable;
    }

    killDraggable() {

        console.log(this.currentDraggable)

        if (this.currentDraggable !== null)
        {
            //this.currentDraggable[0].disable();
            this.currentDraggable[0].kill();
        }

        // TweenLite.set(invBtn, { scaleX: 1, scaleY: 1 })
    }

    updateButtonsAngle(rotation) {

        let r = rotation % 360;
        TweenLite.set(this.stageItem.querySelectorAll('.shape-button'), { rotation: - r });

        //var item = $(this.target);
        //$(item).attr('data-box-r', (this.rotation % 360));
    }

    /**
    * CREATE DRAGGABLE STAGE ITEM END
    */
    onSelect(evt) {

        let { isSelected } = this.state;
        //this.isSelected = isSelected ? false : true;
        //this.setState({ isSelected: this.isSelected });
        let tempIsSelected = isSelected ? false : true;
        this.setState({ isSelected: tempIsSelected });
        //let selectedItem = { id, x, y, r, tox, toy, w, h, sh, isSelected: this.isSelected };
        this.props.onStageItemSelect(this.state);
    }

    onUpdate(newProps) {

        let tempNewProps = {};

        if (newProps.hasOwnProperty('x')) tempNewProps.x = newProps.x;
        if (newProps.hasOwnProperty('y')) tempNewProps.y = newProps.y;
        if (newProps.hasOwnProperty('r')) tempNewProps.r = this.state.r + newProps.r;

        let updatedItem = Object.assign({}, this.state, tempNewProps);

        this.props.onStageItemUpdate(updatedItem);
    }

    onDelete(item) {
        this.props.onStageItemDelete(item);
    }

    onDragBtnDown(evt) {

        if (this.currentAction == itemActions.NONE && this.state.isSelected) {

            let invBtn = evt.currentTarget.childNodes[0];
            TweenLite.set(invBtn, { scaleX: 5, scaleY: 5 });

            this.currentAction = itemActions.DRAG;
            this.currentDraggable = this.createDraggableStageItem(this.stageItem, this.currentAction);
            //this.createDraggableStageItem(this.stageItem, this.currentAction);
        }
    }

    onRotateBtnDown(evt) {

        if (this.currentAction == itemActions.NONE && this.state.isSelected) {

            let invBtn = evt.currentTarget.childNodes[0];
            TweenLite.set(invBtn, { scaleX: 5, scaleY: 5 });

            if (this.state.w > this.state.h) {

                let newOriginX = this.state.w - 0.5;
                let newOriginY = this.state.h - 0.5;

                TweenLite.set(this.stageItem, { transformOrigin: "" + newOriginX + "px " + newOriginY + "px" });
            }

            this.currentAction = itemActions.ROTATE;
            this.currentDraggable = this.createDraggableStageItem(this.stageItem, this.currentAction);
            //this.createDraggableStageItem(this.stageItem, this.currentAction);
        }
    }

    onActionBtnUp(evt) {

        if (this.currentAction != itemActions.NONE && this.state.isSelected) {

            let invBtn = evt.currentTarget.childNodes[0];
            TweenLite.set(invBtn, { scaleX: 1, scaleY: 1 });

            this.currentAction = itemActions.NONE;
            //this.killDraggable();
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState(newProps)
        //console.log('componentWillReceiveProps state', this.state);
    }

    componentDidMount(prevProps, prevState) {

        this.setState(this.props);

        TweenLite.set(this.stageItem, { x: this.props.x, y:this.props.y });
        TweenLite.from(this.stageItem, 0.5, { scale: 0});

        this.dragBtn.addEventListener('mousedown', this.onDragBtnDown.bind(this));
        this.dragBtn.addEventListener('mouseup', this.onActionBtnUp.bind(this));
        this.dragBtn.addEventListener('mouseleave', this.onActionBtnUp.bind(this));

        this.rotateBtn.addEventListener('mousedown', this.onRotateBtnDown.bind(this));
        this.rotateBtn.addEventListener('mouseup', this.onActionBtnUp.bind(this));
        this.rotateBtn.addEventListener('mouseleave', this.onActionBtnUp.bind(this));

        this.deleteBtn.addEventListener('click', this.onDeleteBtnDown.bind(this));
    }

    componentWillUnmount() {
        this.dragBtn.removeEventListener('mousedown', this.onDragBtnDown.bind(this));
        this.dragBtn.removeEventListener('mouseup', this.onActionBtnUp.bind(this));
        this.dragBtn.removeEventListener('mouseleave', this.onActionBtnUp.bind(this));

        this.rotateBtn.removeEventListener('mousedown', this.onRotateBtnDown.bind(this));
        this.rotateBtn.removeEventListener('mouseup', this.onActionBtnUp.bind(this));
        this.rotateBtn.removeEventListener('mouseleave', this.onActionBtnUp.bind(this));

        this.deleteBtn.removeEventListener('click', this.onDeleteBtnDown.bind(this));
    }

    render() {
        let { w, h, sh } = this.state;

        let style = {
            position: 'absolute',
            width: w,
            height: h
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
                ref={(thisDiv) => { this.stageItem = thisDiv; }}
                className='item-box'
                style={style}>
                <div
                    className="shape-bgnd-container"
                    onClick={this.onSelect.bind(this)}>
                    {shapeBoxDiv}
                </div>
                <div
                    ref={(thisDiv) => { this.rotateBtn = thisDiv; }}
                    className='shape-rotate-btn shape-button'>
                    <div className='shape-rotate-inv-btn' />
                    <i className='material-icons shape-rotate-inv-icon'>rotate_right</i>
                </div>
                <div
                    ref={(thisDiv) => { this.dragBtn = thisDiv; }}
                    className='shape-drag-btn shape-button'>
                    <div className='shape-drag-inv-btn' />
                    <i className='material-icons shape-drag-inv-icon'> drag_handle </i>
                </div>
                <div
                    ref={(thisDiv) => { this.delBtn = thisDiv; }}
                    className='shape-delete-btn shape-button'>
                    <div className='shape-delete-inv-btn' />
                    <i className='material-icons shape-delete-inv-icon'>delete</i>
                </div>
                <div
                    ref={(thisDiv) => { this.resizeBtn = thisDiv; }}
                    className='shape-resize-btn shape-button'>
                    <div className='shape-resize-inv-btn' />
                    <i className='material-icons shape-resize-inv-icon'>photo_size_select_small</i>
                </div>
            </div>
        )
    }
}

export default StageItem