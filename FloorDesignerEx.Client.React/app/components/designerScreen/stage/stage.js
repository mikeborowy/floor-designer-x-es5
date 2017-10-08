//react libs
import * as React from 'react';
//import { assign } from 'babel-polyfill';
//3rd party libs
import $ from 'jquery';
import { TweenMax } from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollToPlugin from "gsap/ScrollToPlugin";
//cfg files
import RoomsCfg from '../common/roomsCfg';
import BlueprintImg from '../../../assets/blueprints/bgnd_12x10.jpg';
//components
import StageBoard from './stageBoard';
import StageBoardHighlight from './stageBoardHighlight';
import Toolbar from '../toolbar/toolbar';
import StageItem from './stageItem';

class Stage extends React.Component {

    constructor(props) {
        super(props)

        const roomsCfg = RoomsCfg();

        this.cfg = {
            gridCellWidth: roomsCfg.CELL_WIDTH,
            gridCellHeight: roomsCfg.CELL_HEIGHT,
            paddingLeft: roomsCfg.SHAPE_CFG.PADDING_LEFT,
            paddingTop: roomsCfg.SHAPE_CFG.PADDING_TOP,
            itemBorderSize: roomsCfg.SHAPE_CFG.BORDER_SIZE,
            style: {
                position: 'absolute',
                width: props.w,
                height: props.h,
                left: props.x,
                top: props.y
            }
        };

        //this.droppedItems = [];
        this.draggedObj = {
            id: -1,
            iteration: -1,
            x: 0,
            y: 0,
            r: 0,
            tox: 0,
            toy: 0,
            w: 0,
            h: 0,
            sh: ''
        };

        this.zoomMouse = false;
        this.dragStage = false;
        this.stageScaleNum = 1;
        this.stageScaleNumMin = 0.2;
        this.stageScaleNumMax = 2;

        this.state = {
            imgPath: BlueprintImg,
            floorCfg: {
                id: 4,
                officeId: 1,
                name: "Floor 1",
                width: 15,
                height: 10,
                xpos: 0,
                ypos: 0,
                image: null,
                rooms: []
            },
            stageBoardsList: [],
            selectedItem: null,
            stageItems: []
        }

        //bind functions to this class
        this.stageInit = this.stageInit.bind(this);
        this.initStageAsDraggable = this.initStageAsDraggable.bind(this);
        this.createGrid = this.createGrid.bind(this);
        this.clearStage = this.clearStage.bind(this);
        this.onZoomStage = this.onZoomStage.bind(this);
        this.zoomStage = this.zoomStage.bind(this);

        this.onMouseWheel = this.onMouseWheel.bind(this);

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);

        this.onDraggedItemStart = this.onDraggedItemStart.bind(this);
        this.onDraggedItemDrop = this.onDraggedItemDrop.bind(this);

        this.createStageItem = this.createStageItem.bind(this);

        this.onTest = this.onTest.bind(this);
    }

    onTest(param) {
        console.log(`This is param ${param}`)
    }

    stageInit() {

        let { gridCellWidth, gridCellHeight } = this.cfg;
        let { floorCfg } = this.state;

        $('#stage').width(floorCfg.width * gridCellWidth);
        $('#stage').height(floorCfg.height * gridCellHeight);

        $('#stage-items-container').width(floorCfg.width * gridCellWidth);
        $('#stage-items-container').height(floorCfg.height * gridCellHeight);

        //const img = $('#stage').find('img');
        //img.attr('src', floorCfg.image);
        //img.width(floorCfg.width * roomCfg.gridCellWidth);
        //img.height(floorCfg.height * roomCfg.gridCellHeight);
    }

    createGrid() {

        let { gridCellWidth, gridCellHeight } = this.cfg;
        let { stageBoardsList, floorCfg } = this.state;

        let gridColumns = floorCfg.width;
        let gridRows = floorCfg.height;
        let list = [];

        const w = 1;
        const h = 1;

        for (let i = 0; i < gridRows * gridColumns; i++) {

            let x = (i * gridCellWidth) % (gridColumns * gridCellWidth);
            let y = Math.floor(i / gridColumns) * gridCellHeight;

            list.push({
                id: i,
                width: (gridCellWidth * w),
                height: (gridCellHeight * h),
                top: y,
                left: x
            })

            this.setState({ stageBoardsList: list });
        }
    };

    onDraggedItemStart(evt) {
        //combine x,y to draggedObj
        let draggedObj = Object.assign(this.draggedObj, evt.detail);
    }

    onDraggedItemDrop(evt) {
        //combine id,w,h,sh to draggedObj
        let draggedObj = Object.assign(this.draggedObj, evt.detail);
        //extract items
        let { id, x, y, r, tox, toy, w, h, sh } = draggedObj;
        //pass extracted items
        this.createStageItem(id, x, y, r, tox, toy, w, h, sh);
    }

    createStageItem(id, x, y, r, tox, toy, w, h, sh) {

        //save all items to state 
        this.setState({
            stageItems: [...this.state.stageItems, { id, x, y, r, tox, toy, w, h, sh }]
        })

        //this.droppedItems.push({ id, x, y, r, tox, toy, w, h, sh });

        //let stageItemsContainer = $('#stage-items-container');

        //var item = $(
        //    "<div>" +
        //    "<div class='shape-rotate-btn shape-button' data-btn-r='" + (r * (-1)) + "'>" +
        //    "<div class='shape-rotate-inv-btn'/>" +
        //    "<i class='material-icons shape-rotate-inv-icon'>rotate_right</i>" +
        //    "</div>" +
        //    "<div class='shape-drag-btn shape-button' data-btn-r='" + (r * (-1)) + "'>" +
        //    "<div class='shape-drag-inv-btn'/>" +
        //    "<i class='material-icons shape-drag-inv-icon'>drag_handle</i>" +
        //    "</div>" +
        //    "<div class='shape-delete-btn shape-button' data-btn-r='" + (r * (-1)) + "'>" +
        //    "<div class='shape-delete-inv-btn'/>" +
        //    "<i class='material-icons shape-delete-inv-icon'>delete</i>" +
        //    "</div>" +
        //    "<div class='shape-resize-btn shape-button' data-btn-r='" + (r * (-1)) + "'>" +
        //    "<div class='shape-resize-inv-btn'/>" +
        //    "<i class='material-icons shape-resize-inv-icon'>photo_size_select_small</i>" +
        //    "</div>" +
        //    "</div>"
        //).
        //    attr('class', 'item-box').
        //    attr('data-box-id', id).
        //    attr('data-box-x', x).
        //    attr('data-box-y', y).
        //    attr('data-box-r', r).
        //    attr('data-box-tox', tox).
        //    attr('data-box-toy', toy).
        //    attr('data-box-w', w).
        //    attr('data-box-h', h).
        //    attr('data-box-shape', sh).
        //    attr('data-box-selected', false).
        //    attr('data-parent', 'stage').
        //    css({
        //        position: 'absolute',
        //        width: w,
        //        height: h
        //    }).
        //    appendTo(stageItemsContainer);

        ////if (item.data('box-shape') === "shape-room-l-3x2") {
        ////    this.createLShapeRoom()
        ////        .appendTo(item);
        ////}
        ////else {
        ////    this.createRegularShapeRoom()
        ////        .appendTo(item);
        ////}

        //var newOriginX = (item.data('box-w')) * 0.5;
        //var newOriginY = (item.data('box-h')) * 0.5;

        //if (item.width() > item.height()) {
        //    newOriginX = (item.data('box-w')) - (0.5);
        //    newOriginY = (item.data('box-h')) - (0.5);
        //}

        //TweenLite.set(item, { transformOrigin: "" + newOriginX + "px " + newOriginY + "px" });
        //TweenLite.set(item, { rotation: r });
        //TweenLite.set(item.find('.shape-button'), { rotation: (360 - r) });

        //item.attr('data-box-tox', newOriginX);
        //item.attr('data-box-toy', newOriginY);

        ////removeDuplicate('.item-box');

        ////setup item container on stage
        //TweenLite.from(item, 0.3, {
        //    scaleX: 0,
        //    scaleY: 0
        //    //onComplete: initItem,
        //    //onCompleteParams: [item]
        //});

        //TweenLite.to(item, 0, { x: x, y: y });

    }

    loadItems() {

        //    if (loadedItems.length > 0) {
        //        $.each(loadedItems, function (i, val) {

        //            TweenLite.delayedCall(0.1 * i, function () {

        //                let id = loadedItems[i].id;
        //                let shape = loadedItems[i].shape;
        //                let w = loadedItems[i].width;
        //                let h = loadedItems[i].height;
        //                let x = loadedItems[i].xpos;
        //                let y = loadedItems[i].ypos;
        //                let r = loadedItems[i].rotation;

        //                let shapeSizeTableObj = findValueByKey(shapeSizes, shape);

        //                console.log(shapeSizeTableObj);

        //                draggedObj = {};
        //                draggedObj.id = id;
        //                draggedObj.sh = shape;
        //                draggedObj.x = x;
        //                draggedObj.y = y;
        //                draggedObj.r = r;
        //                draggedObj.w = w;
        //                draggedObj.h = h;
        //                draggedObj.tox = shapeSizeTableObj.t.x;
        //                draggedObj.toy = shapeSizeTableObj.t.y;

        //                let currentItem = createStageItem(
        //                    draggedObj.id,
        //                    draggedObj.x,
        //                    draggedObj.y,
        //                    draggedObj.r,
        //                    draggedObj.tox,
        //                    draggedObj.toy,
        //                    draggedObj.w,
        //                    draggedObj.h,
        //                    draggedObj.sh);
        //            })
        //        });
        //    }
    }

    initStageAsDraggable() {

        let draggableObj = Draggable.create($("#stage-container"), {
            type: "scroll",
            edgeResistance: 1,
            throwProps: true,
            lockAxis: true
        });

        Draggable.get("#stage-container").disable();
    }

    clearStage() {

        $('#stage-grid-bgnd').html('');
        $('#stage-grid-live').html('');
        $('#stage-items-container').html('');
    };

    findValueByKey(array, key) {

        for (let i = 0; i < array.length; i++) {

            if (array[i][key]) {

                return array[i][key];
            }
        }
        return null;
    };


    /*ZOOM START*/
    onZoomStage(evt) {
        this.stageScaleNum = evt.detail;
        this.zoomStage();
    }

    zoomStage() {

        var stage = $('#stage');
        var stageContainer = $('#stage-container');

        //TweenMax.killTweensOf(room);
        //TweenMax.killTweensOf(roomContainer);
        //let stageScaleNum = this.stageScaleNum;
        //let { stageScaleNumMin, stageScaleNumMax } = this.state

        if (this.stageScaleNum < this.stageScaleNumMin) {
            this.stageScaleNum = this.stageScaleNumMin;
        }
        if (this.stageScaleNum > this.stageScaleNumMax) {
            this.stageScaleNum = this.stageScaleNumMax;
        }

        TweenMax.to(stage, 0.3, {
            scaleX: this.stageScaleNum,
            scaleY: this.stageScaleNum,
        });

        var posX = (stageContainer.width() / 2 - stage.width() / 2)
        var stageWidthAfterScale = stage.width() * this.stageScaleNum;

        var posY = (stageContainer.height() / 2 - stage.height() / 2)
        var stageHeightAfterScale = stage.height() * this.stageScaleNum;

        //First for horizontal scale scroll issue
        //check if scaled room width is bigger than room conatiner
        //if true align to left
        if (stageWidthAfterScale >= stageContainer.width()) {
            TweenMax.set(stage, {
                transformOrigin: "0 50%",
                x: 0,
                y: posY
            });

            //then check if scaled room height is bigger than room conatiner 
            //and align to top
            if (stageHeightAfterScale >= stageContainer.height()) {
                TweenMax.set(stage, {
                    transformOrigin: "0% 0%",
                    x: 0,
                    y: 0
                });
            }

        }
        //for vertical scale scroll issue
        //check if scaled room height is bigger than room conatiner 
        //if true align to top
        else if (stageHeightAfterScale >= stageContainer.height()) {
            TweenMax.set(stage, {
                transformOrigin: "50% 0%",
                x: posX,
                y: 0
            });

            //then check if scaled room width is bigger than room conatiner 
            //and align to left
            if (stageWidthAfterScale >= stageContainer.width()) {
                TweenMax.set(stage, {
                    transformOrigin: "0 0",
                    x: 0,
                    y: 0
                });
            }

        }
        //otherwise appply regular scale with centerd point
        else {
            TweenMax.set(stage, {
                transformOrigin: "50% 50%",
                x: posX,
                y: posY
            });
        }
    }

    onMouseWheel(evt) {

        if (this.zoomMouse) {
            let delta;

            if (evt.wheelDelta !== undefined)
                delta = evt.wheelDelta;
            else
                delta = evt.deltaY * -1;

            if (delta > 0) {
                this.stageScaleNum += 0.1;
            }
            else {
                this.stageScaleNum -= 0.1;
            }

            var evt = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
            window.dispatchEvent(evt);

            this.zoomStage();

            document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
            //$("#zoom-slider").get(0).MaterialTextfield.change((stageScaleNum - 1) * 10);
        }
    }
    /*ZOOM END*/

    /*ON KEY UP/DOWN START*/
    onKeyDown(evt) {

        //zoom with "Z"
        if (evt.keyCode === 90) {

            if (this.zoomMouse === false) {

                this.zoomMouse = true;
                let stageContainer = $("#stage-container")
                stageContainer.css({ "overflow-x": "hidden" });
                stageContainer.css({ "overflow-y": "hidden" });
            }
        }

        //drag stage with "X"
        if (evt.keyCode === 88) {

            if (this.dragStage === false) {
                this.dragStage = true;
                Draggable.get("#stage-container").enable();
            }
        }
    }

    onKeyUp(evt) {

        //zoom with "Z"
        if (evt.keyCode === 90) {

            if (this.zoomMouse === true) {

                this.zoomMouse = false;
                let stageContainer = $("#stage-container")
                $("#stage-container").css({ "overflow-x": "auto" });
                $("#stage-container").css({ "overflow-y": "auto" });
            }
        }

        //drag stage with "X"
        if (evt.keyCode === 88) {

            if (this.dragStage === true) {
                this.dragStage = false;
                if ($('#stage-blocker').length > 0)
                    $('#stage-blocker').remove();
                Draggable.get("#stage-container").disable();
            }
        }
    }
    /*ON KEY UP/DOWN END*/

    updateDimensions() {

        let toolbarHeight = $("#designer-toolbar").height();
        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        $("#stage-container").height(
            windowHeight - toolbarHeight
        )

        let parentHeight = $("#stage-container").height();
        let parentWidth = $("#stage-container").width();

        if ($("#stage").height() <= $("#stage-container").height()) {

            let posY = (parentHeight / 2 - $("#stage").height() / 2);
            TweenMax.to($("#stage"), 0, { y: posY })
        }
        else {
            TweenMax.to($("#stage"), 0, { y: 0 })
        }

        if ($("#stage").width() <= $("#stage-container").width()) {
            let posX = (parentWidth / 2 - $("#stage").width() / 2)
            TweenMax.to($("#stage"), 0, { x: posX })
        }
        else {
            TweenMax.to($("#stage"), 0, { x: 0 })
        }
    }

    componentDidUpdate() {
        /*every rerender slows down animation
         *so it's better to use event listeners
         */
        //this.onZoomStage(this.props.zoom);
    }

    componentWillReceiveProps(nextProps) {

        //if (nextProps.myProp !== this.props.draggedObj) {
        //}
        //console.log("zoom from update comp", this.props.zoom);
        //return false;
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (this.state.stageItems.length != nextState.stageItems)
            return true;

        if (this.state.stageBoardsList.length != nextState.stageBoardsList.length)
            return true;
    }

    componentDidMount() {

        this.stageInit();
        this.createGrid();
        this.initStageAsDraggable();
        this.updateDimensions();

        window.addEventListener("resize", this.updateDimensions.bind(this));
        window.addEventListener('wheel', this.onMouseWheel);
        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keyup", this.onKeyUp);
        //custom events
        window.addEventListener('zoomOccured', this.onZoomStage);
        window.addEventListener('onDragObject', this.onDraggedItemStart);
        window.addEventListener('onDropObject', this.onDraggedItemDrop);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
        window.removeEventListener('wheel', this.onMouseWheel);
        window.removeEventListener("keydown", this.onKeyDown);
        window.removeEventListener("keyup", this.onKeyUp);
        //custom events
        window.removeEventListener('zoomOccured', this.onZoomStage);
        window.removeEventListener('onDragObject', this.onDraggedItemStart);
        window.removeEventListener('onDropObject', this.onDraggedItemDrop);
    }

    render() {

        let onTest = this.onTest;

        let { stageBoardsList, stageItems } = this.state;
        let draggedObjId = this.draggedObj.id;
        let i = 0;

        return (

            <div id="stage-container">
                <div id="stage-top"></div>
                <div id="stage">
                    <img id="stage-bgnd" src={this.state.imgPath} />
                    <div id="stage-grid-bgnd">
                        {
                            stageBoardsList.map(function (boardItem) {

                                return <StageBoard
                                    key={boardItem.id}
                                    {...boardItem}
                                />
                            })
                        }
                    </div>
                    <div id="stage-grid-live">
                        {
                            stageBoardsList.map(function (boardItem) {

                                return <StageBoardHighlight
                                    key={boardItem.id}
                                    {...boardItem}
                                    onMouseOver={onTest}
                                />
                            })
                        }
                    </div>
                    <div id="stage-items-container">
                        {
                            stageItems.map(function (stageItem) {

                                stageItem.iterator = i++;
                                stageItem.isSelected = (draggedObjId === stageItem.id) ? true : false;

                                return <StageItem
                                    key={stageItem.id}
                                    {...stageItem}
                                />
                            })
                        }
                    </div>
                </div>
                <div id="stage-bottom"></div>
            </div>
        )
    }
}

export default Stage;