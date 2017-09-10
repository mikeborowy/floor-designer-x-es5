//react libs
import * as React from 'react';
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

class Stage extends React.Component {

    constructor(props) {
        super(props)

        this.zoomMouse = false;
        this.dragStage = false;
        this.stageScaleNum = 1;
        this.stageScaleNumMin = 0.2;
        this.stageScaleNumMax = 2;

        this.state = {
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
            roomCfg: {
                gridCellWidth: RoomsCfg().CELL_WIDTH,
                gridCellHeight: RoomsCfg().CELL_HEIGHT,
                shapeSizes: RoomsCfg().SHAPES_SIZES,
                paddingLeft: RoomsCfg().SHAPE_CFG,
                paddingTop: RoomsCfg().SHAPE_CFG.PADDING_TOP,
                itemBorderSize: RoomsCfg().SHAPE_CFG.BORDER_SIZE
            },
            stageCfg: {
                stageBoardsList: []
            },
            loadedItems: [],
            imgPath: BlueprintImg,
            draggedObj: null
        }

        //bind functions to this class
        this.stageInit = this.stageInit.bind(this);
        this.initStageAsDraggable = this.initStageAsDraggable.bind(this);
        this.createGrid = this.createGrid.bind(this);
        this.clearStage = this.clearStage.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.onZoomStage = this.onZoomStage.bind(this);
        this.zoomStage = this.zoomStage.bind(this);
        this.onMouseWheel = this.onMouseWheel.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    stageInit() {

        let { floorCfg, roomCfg } = this.state;

        $('#stage').width(floorCfg.width * roomCfg.gridCellWidth);
        $('#stage').height(floorCfg.height * roomCfg.gridCellHeight);

        $('#stage-items-container').width(floorCfg.width * roomCfg.gridCellWidth);
        $('#stage-items-container').height(floorCfg.height * roomCfg.gridCellHeight);

        //const img = $('#stage').find('img');
        //img.attr('src', floorCfg.image);
        //img.width(floorCfg.width * roomCfg.gridCellWidth);
        //img.height(floorCfg.height * roomCfg.gridCellHeight);
    }

    createGrid() {

        let { stageBoardsList } = this.state;
        let { gridCellWidth, gridCellHeight } = this.state.roomCfg;

        let gridColumns = this.state.floorCfg.width;
        let gridRows = this.state.floorCfg.height;
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

            this.setState({
                stageCfg: {
                    stageBoardsList: list
                }
            });
        }
    };

    initStageAsDraggable() {

        let draggableObj = Draggable.create($("#stage-container"), {
            type: "scroll",
            edgeResistance: 1,
            throwProps: true,
            lockAxis: true
        });

        Draggable.get("#stage-container").disable();
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

            var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
            window.dispatchEvent(event);
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

    componentWillUpdate() {
    }

    componentDidUpdate() {
        console.log("zoom from update comp", this.props.zoom);
        /*every rerender slows down animation
         *so it's better to use event listeners
         */
        //this.onZoomStage(this.props.zoom);
    }

    componentWillMount() {
    }

    componentDidMount() {

        this.stageInit();
        this.createGrid();
        this.initStageAsDraggable();
        this.updateDimensions();

        window.addEventListener("resize", this.updateDimensions);
        window.addEventListener('zoomOccured', this.onZoomStage);
        window.addEventListener('wheel', this.onMouseWheel);
        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keyup", this.onKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        window.removeEventListener('zoomOccured', this.onZoomStage);
        window.removeEventListener('wheel', this.onMouseWheel);
        window.removeEventListener("keydown", this.onKeyDown);
        window.removeEventListener("keyup", this.onKeyUp);
    }

    render() {

        let { stageBoardsList } = this.state.stageCfg;

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
                                    id={boardItem.id}
                                    width={boardItem.width}
                                    height={boardItem.height}
                                    top={boardItem.top}
                                    left={boardItem.left}
                                />
                            })
                        }
                    </div>
                    <div id="stage-grid-live">
                        {
                            stageBoardsList.map(function (boardItem) {

                                return <StageBoardHighlight
                                    key={boardItem.id}
                                    id={boardItem.id}
                                    width={boardItem.width}
                                    height={boardItem.height}
                                    top={boardItem.top}
                                    left={boardItem.left}
                                />
                            })
                        }
                    </div>
                    <div id="stage-items-container">
                    </div>
                </div>
                <div id="stage-bottom"></div>
            </div>
        )
    }
}

export default Stage;