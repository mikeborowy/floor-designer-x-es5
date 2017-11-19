import * as React from 'react';

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

        this.dummyObj = {
            id: -1,
            x: 0,
            y: 0,
            r: 0,
            tox: 0,
            toy: 0,
            w: 0,
            h: 0,
            sh: '',
            isSelected: false,
            dragBounds: null
        };

        this.currentDraggable = null;
        this.currentAction = itemActions.NONE;

        //BTNS HANDLERS
        this.onSelect = this.onSelect.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);

        //ITEM HELPERS
        this.createLShapeRoom = this.createLShapeRoom.bind(this);
        this.createRegularShapeRoom = this.createRegularShapeRoom.bind(this);

        //ANIMATIONS HANDLERS & HELPERS
        this.createDraggableStageItem = this.createDraggableStageItem.bind(this);
        this.killDraggable = this.killDraggable.bind(this);

        this.setInitPosition = this.setInitPosition.bind(this);
        this.updateButtonsAngle = this.updateButtonsAngle.bind(this);
        this.setupTransforamtionPoint = this.setupTransforamtionPoint.bind(this);
    }

    onSelect(evt) {

        let { isSelected } = this.props;

        let tempIsSelected = isSelected ? false : true;
        let selectedItem = Object.assign({}, this.props, { isSelected: tempIsSelected });

        if (tempIsSelected)
            this.props.onStageItemSelect(selectedItem);
        else
            this.props.onStageItemSelect(this.dummyObj);
    }

    onUpdate(newProps) {

        let tempNewProps = {};

        if (newProps.hasOwnProperty('x')) tempNewProps.x = newProps.x;
        if (newProps.hasOwnProperty('y')) tempNewProps.y = newProps.y;
        if (newProps.hasOwnProperty('r')) tempNewProps.r = newProps.r;
        //if (newProps.hasOwnProperty('tox')) tempNewProps.tox = newProps.tox;
        //if (newProps.hasOwnProperty('toy')) tempNewProps.toy = newProps.toy;
        let updatedItem = Object.assign({}, this.props, tempNewProps);

        this.props.onStageItemUpdate(updatedItem);
    }

    onDelete(item) {
        this.props.onStageItemDelete(item);
    }

    /**
    * BTNS HANDLERS START
    */

    onDragBtnDown(evt) {

        if (this.currentAction == itemActions.NONE && this.props.isSelected) {

            let invBtn = evt.currentTarget.childNodes[0];
            TweenLite.set(invBtn, { scaleX: 5, scaleY: 5 });

            this.currentAction = itemActions.DRAG;
            this.currentDraggable = this.createDraggableStageItem(this.stageItem, this.currentAction);
            //this.createDraggableStageItem(this.stageItem, this.currentAction);
        }
    }

    onRotateBtnDown(evt) {

        if (this.currentAction == itemActions.NONE && this.props.isSelected) {

            let invBtn = evt.currentTarget.childNodes[0];
            TweenLite.set(invBtn, { scaleX: 5, scaleY: 5 });

            this.setupTransforamtionPoint(this.props);
            this.currentAction = itemActions.ROTATE;
            this.currentDraggable = this.createDraggableStageItem(this.stageItem, this.currentAction);
            //this.createDraggableStageItem(this.stageItem, this.currentAction);
        }
    }

    onDeleteBtnDown(evt) {
        if (this.props.isSelected) {
            this.onDelete(this.props);
        }
    }

    onActionBtnUp(evt) {
        if (this.currentAction != itemActions.NONE && this.props.isSelected) {
            let invBtn = evt.currentTarget.childNodes[0];
            TweenLite.set(invBtn, { scaleX: 1, scaleY: 1 });
            this.currentAction = itemActions.NONE;
            //this.killDraggable();
        }
    }

    /**
    * BTNS HANDLERS END
    */

    /**
    * HELPERS START
    */

    createRegularShapeRoom() {

        let { paddingLeft, paddingTop, itemSelectedColor, itemColor } = this.cfg;
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

    /**
    * HELPERS END
    */

    /**
    * ANIMATIONS HANDLERS & HELPERS START
    */

    createDraggableStageItem(dragQueen, actionType) {

        const snap = true;
        const liveSnap = false;
        const throwProps = true;
        const rotationSnap = 90;

        let { gridCellWidth, gridCellHeight, itemActions } = this.cfg;
        let { dragBounds } = this.props;
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

        if (this.currentDraggable !== null) {
            //this.currentDraggable[0].disable();
            this.currentDraggable[0].kill();
        }

        // TweenLite.set(invBtn, { scaleX: 1, scaleY: 1 })
    }

    setInitPosition(props) {
        TweenLite.set(this.stageItem, { x: props.x, y: props.y, rotation: props.r });
        this.updateButtonsAngle(props.r)
    }

    updateButtonsAngle(rotation) {
        let r = rotation % 360;
        TweenLite.set(this.stageItem.querySelectorAll('.shape-button'), { rotation: - r });
    }

    setupTransforamtionPoint(props) {

        let tox;
        let toy;

        if (props.r > 0) {
        }

        if (props.w > props.h) {

            tox = (props.w * 1) - 0.5;
            toy = (props.h * 1) - 0.5;
        }
        else {

            tox = props.w * 0.5;
            toy = props.h * 0.5;
        }

        TweenLite.set(this.stageItem, {
            x: props.x,
            y: props.y,
            rotation: props.r,
            transformOrigin: "" + tox + "px " + toy + "px"
        });
    }

    /**
    * ANIMATIONS HANDLERS & HELPERS END
    */

    //componentWillEnter(callback) {
    //    TweenLite.set(this.stageItem, { x: this.props.x, y: this.props.y });
    //    TweenLite.from(this.stageItem, 0.5, { scale: 0, onComplete: callback });
    //}

    //componentWillLeave(callback) {
    //    TweenLite.to(this.stageItem, 0.5, { scale: 0, onComplete: callback });
    //    ////TweenLite.set(this.stageItem, { x: this.props.x, y: this.props.y });
    //}

    componentDidUpdate() {
        this.setInitPosition(this.props);
    }

    componentDidMount(prevProps, prevState) {

        this.setInitPosition(this.props);
        TweenLite.from(this.stageItem, 0.5, { scale: 0 });

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
        let { w, h, sh } = this.props;

        let style = {
            position: 'absolute',
            width: w,
            height: h,
            zIndex: (this.props.isSelected ? 11 : 1)
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
                id={'box-item-'+ this.props.id}
                style={style}>
                <div
                    className="shape-bgnd-container"
                    onClick={evt => { this.onSelect(evt) }}>
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
                    ref={(thisDiv) => { this.deleteBtn = thisDiv; }}
                    className='shape-delete-btn shape-button'>
                    <div className='shape-delete-inv-btn' />
                    <i className='material-icons shape-delete-inv-icon'>delete</i>
                </div>
                <div
                    ref={(thisDiv) => { this.resizeBtn = thisDiv; }}
                    className='shape-resize-btn shape-button hidden'>
                    <div className='shape-resize-inv-btn' />
                    <i className='material-icons shape-resize-inv-icon'>photo_size_select_small</i>
                </div>
            </div>
        )
    }
}

export default StageItem