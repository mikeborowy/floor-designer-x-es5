import * as React from 'react';
import $ from 'jquery';
import { TweenMax, Draggable } from 'gsap';

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

        console.log(this.props)

        this.state = {
            id: -1, x: 0, y: 0, r: 0, tox: 0, toy: 0, w: 0, h: 0, sh: '', iterator: -1, isSelected: false, bounds: null
        };

        this.currentDraggable = null;
        this.currentAction = itemActions.NONE;

        this.createLShapeRoom = this.createLShapeRoom.bind(this);
        this.createRegularShapeRoom = this.createRegularShapeRoom.bind(this);

        this.createDraggableStageItem = this.createDraggableStageItem.bind(this);
        this.killDraggable = this.killDraggable.bind(this);

        this.setNumberRotation = this.setNumberRotation.bind(this);
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

    onSelect(evt) {

        let { id, x, y, r, tox, toy, w, h, sh, isSelected } = this.state;
        this.isSelected = isSelected ? false : true;
        //let isSelectedTemp = isSelected ? false : true;
        this.setState({ isSelected: this.isSelected });
        //let selectedItem = { id, x, y, r, tox, toy, w, h, sh, isSelected: this.isSelected }
        this.props.onSelect(this.state)
    }


    /**
    * CREATE DRAGGABLE STAGE ITEM START
    */

    createDraggableStageItem(dragQueen, actionType) {

        const snap = true;
        const liveSnap = false;
        const throwProp = true;
        const rotationSnap = 90;

        let { gridCellWidth, gridCellHeight, itemActions } = this.cfg;
        let bounds = this.state.bounds;

        let resizeW,resizeH;

        let currentDraggable;

        switch (actionType) {
            //Resize Me
            case itemActions.RESIZE:

                currentDraggable = Draggable.create(dragQueen, {
                    type: "x,y",
                    throwProps: throwProp,
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
                        //this.disable();
                        if (Draggable[0] != null)
                            Draggable[0].kill();
                    }
                });

                break;
            //Drag Me
            case itemActions.DRAG:

                currentDraggable = Draggable.create(dragQueen, {
                    type: actionType,
                    bounds: bounds,
                    autoScroll: 1,
                    edgeResistance: 0.65,
                    throwProps: throwProp,
                    //throwResistance: 0,
                    maxDuration: 0.3,
                    liveSnap: liveSnap,
                    snap: {

                        x: function (endValue) {
                            return (snap || liveSnap) ? Math.round(endValue / gridCellWidth) * gridCellWidth : endValue;
                        },
                        y: function (endValue) {
                            return (snap || liveSnap) ? Math.round(endValue / gridCellHeight) * gridCellHeight : endValue;
                        }
                    },
                    //onPress: function (evt) {
                    //    evt.stopPropagation(); // cancel drag
                    //},
                    onDrag: function () {

                    },
                    onDragEnd: function () {

                        console.log('this',this)
                        console.log('Math.ceil(this.x)', Math.ceil(this.x))
                        console.log('Math.ceil(this.y)', Math.ceil(this.y))

                        //this.setState({ x: Math.ceil(this.x), y: Math.ceil(this.y) })

                    }
                    //onThrowComplete: function (data) {
                    //    let item = $(dragQueen);
                    //    item.attr('data-box-x', Math.ceil(this.x));
                    //    item.attr('data-box-y', Math.ceil(this.y));
                    //    this.disable();
                    //    if (Draggable[0] != null)
                    //        Draggable[0].kill();
                    //}
                });

                break;
            //Rotate me
            case itemActions.ROTATE:

                currentDraggable = Draggable.create(dragQueen, {
                    type: "rotation",
                    throwProps: throwProp,
                    snap: function (endValue) {
                        return Math.round(endValue / rotationSnap) * rotationSnap;
                    },
                    //onPress: function (evt) {
                    //    evt.stopPropagation(); // cancel drag
                    //},
                    onDrag: this.setNumberRotation,
                    onThrowUpdate: this.setNumberRotation,
                    onThrowComplete: function (evt) {

                        this.stageItem.setAttribute('data-box-r', (this.rotation % 360));
                        //this.disable();

                        if (Draggable[0] != null)
                            Draggable[0].kill();
                    }
                });
                break;
        }

        return currentDraggable;
    }

    setNumberRotation(evt) {

        var item = $(this.target);
        $(item).attr('data-box-r', (this.rotation % 360));

        var _angle = this.rotation;
        TweenLite.set(item.find('.shape-button'), { rotation: -(_angle % 360) });
    }

    /**
    * CREATE DRAGGABLE STAGE ITEM END
    */

    onDragBtnDown(evt) {

        if (this.currentAction == itemActions.NONE && this.state.isSelected) {

            var invBtn = this.dragBtn.childNodes[0];
            TweenLite.set(invBtn, { scaleX: 5, scaleY: 5 });

            this.currentAction = itemActions.DRAG;
            this.currentDraggable = this.createDraggableStageItem(this.stageItem, this.currentAction);

            //deslectItems();
            //selectItem(draggedItem);
        }
    }

    onDragBtnUp(evt) {

        this.currentAction = itemActions.NONE;
        this.killDraggable(this.dragBtn.childNodes[0]);
    }

    onRotateBtnDown(evt) {

        if (this.currentAction == itemActions.NONE && this.state.isSelected) {

            let invBtn = this.rotateBtn.childNodes[0];
            TweenLite.set(invBtn, { scaleX: 5, scaleY: 5 })

            let newOriginX;
            let newOriginY;

            if (this.stageItem.getAttribute('data-box-w') > this.stageItem.getAttribute('data-box-h')) {

                newOriginX = (this.stageItem.getAttribute('data-box-w')) - (0.5);
                newOriginY = (this.stageItem.getAttribute('data-box-h')) - (0.5);

                TweenLite.set(this.stageItem, { transformOrigin: "" + newOriginX + "px " + newOriginY + "px" });

                this.stageItem.setAttribute('data-box-tox', newOriginX);
                this.stageItem.setAttribute('data-box-toy', newOriginY);
            }

            this.currentAction = itemActions.ROTATE;
            this.currentDraggable = this.createDraggableStageItem(this.stageItem, this.currentAction);

            //deslectItems();
            //selectItem(draggedItem);
        }
    }

    onRotateBtnUp(evt) {

        this.currentAction = itemActions.NONE;
        this.killDraggable(this.rotateBtn.childNodes[0]);
    }

    killDraggable(invBtn) {

        if (this.currentDraggable !== null)
            this.currentDraggable[0].kill();

        TweenLite.set(invBtn, { scaleX: 1, scaleY: 1 })
    }

    componentWillReceiveProps(newProps) {

        let { id, x, y, r, tox, toy, w, h, sh, isSelected, dragIsOn } = newProps;
        this.setState({ id, x, y, r, tox, toy, w, h, sh, isSelected, dragIsOn })

        console.log('componentWillReceiveProps', this.state);
    }

    componentDidMount(prevProps, prevState) {

        let { id, x, y, r, tox, toy, w, h, sh, isSelected, dragIsOn } = this.props;
        this.setState({ id, x, y, r, tox, toy, w, h, sh, isSelected, dragIsOn });

        this.dragBtn.addEventListener('mousedown', this.onDragBtnDown.bind(this));
        this.dragBtn.addEventListener('mouseup', this.onDragBtnUp.bind(this));
        this.dragBtn.addEventListener('mouseleave', this.onDragBtnUp.bind(this));

        this.rotateBtn.addEventListener('mousedown', this.onRotateBtnDown.bind(this));
        this.rotateBtn.addEventListener('mouseup', this.onRotateBtnUp.bind(this));
        this.rotateBtn.addEventListener('mouseleave', this.onRotateBtnUp.bind(this));
    }

    componentWillUnmount() {
        this.dragBtn.removeEventListener('mousedown', this.onDragBtnDown.bind(this));
        this.dragBtn.removeEventListener('mouseup', this.onDragBtnUp.bind(this));
        this.dragBtn.removeEventListener('mouseleave', this.onDragBtnUp.bind(this));

        this.rotateBtn.removeEventListener('mousedown', this.onRotateBtnDown.bind(this));
        this.rotateBtn.removeEventListener('mouseup', this.onRotateBtnUp.bind(this));
        this.rotateBtn.removeEventListener('mouseleave', this.onRotateBtnUp.bind(this));
    }

    render() {
        let { id, x, y, r, tox, toy, w, h, sh, isSelected } = this.state;

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