//react libs
import * as React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
//import { assign } from 'babel-polyfill';
//3rd party libs
import $ from 'jquery';
import TweenMax from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollToPlugin from "gsap/src/uncompressed/plugins/ScrollToPlugin";
//cfg files
import RoomsCfg from '../common/roomsCfg';
import BlueprintImg from '../../../assets/blueprints/bgnd_12x10.jpg';
import { itemActions, actionsOfDraggable } from '../common/stageItemActions';

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
            itemActions: itemActions,
            style: {
                position: 'absolute',
                width: props.w,
                height: props.h,
                left: props.x,
                top: props.y
            }
        };

        //this.droppedItems = [];
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

        this.draggedObj = this.dummyObj;

        this.currentDraggable = null;

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
                width: 12,
                height: 10,
                xpos: 0,
                ypos: 0,
                image: null,
                rooms: []
            },
            stageBoardsList: [],
            selectedItem: this.dummyObj,
            itemsAtStage: []
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

        this.onListItemDrag = this.onListItemDrag.bind(this);
        this.onListItemDrop = this.onListItemDrop.bind(this);

        this.onStageItemAdd = this.onStageItemAdd.bind(this);
        this.onStageItemSelect = this.onStageItemSelect.bind(this);
        this.onStageItemUpdate = this.onStageItemUpdate.bind(this);
        this.onStageItemDelete = this.onStageItemDelete.bind(this);
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
   
    loadItems() {

    }

    initStageAsDraggable() {

        let draggableObj = Draggable.create($("#stage-container"), {
            type: "scroll",
            edgeResistance: 1,
            throwProps: true,
            lockAxis: false
        });

        Draggable.get("#stage-container").disable();
    }

    clearStage() {

        $('#stage-grid-bgnd').html('');
        $('#stage-grid-live').html('');
        $('#stage-items-container').html('');
    };

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

    /**
     * HELPERS START
     */
    findValueByKey(array, key) {

        for (let i = 0; i < array.length; i++) {

            if (array[i][key]) {

                return array[i][key];
            }
        }
        return null;
    };
    /**
     * EVENT HANDLERS START
     */
    onListItemDrag(evt) {
        //combine x,y to draggedObj
        this.draggedObj = Object.assign({}, this.draggedObj, evt.detail);
    }

    onListItemDrop(evt) {
        //combine id,w,h,sh to draggedObj
        let item = Object.assign({}, this.draggedObj, evt.detail, { isSelected: true });
        //pass extracted items
        this.onStageItemAdd(item);
    }

    /* Item Handlers START */

    onStageItemAdd(item) {
        //save all items to state 
        this.setState({
            selectedItem: item,
            itemsAtStage: [...this.state.itemsAtStage, item]
        })
    }

    onStageItemUpdate(updatedItem) {

        this.setState((prevState, props) => {

            let tempItemsAtStage = prevState.itemsAtStage;
            let findId = tempItemsAtStage.map(item => (item.id)).indexOf(updatedItem.id);

            let itemAtStage = Object.assign(tempItemsAtStage[findId], updatedItem);

            return { itemAtStage }
        });
    }

    onStageItemDelete(deletedItem) {
        let findId; 
        this.setState((prevState, props) => {

            findId = prevState.itemsAtStage.map(item => (item.id)).indexOf(deletedItem.id);
            prevState.itemsAtStage.splice(findId, 1);

            let tempItemsAtStage = Object.assign({}, prevState);

            console.log('onStageItemDelete', prevState.itemsAtStage.id, prevState.itemsAtStage.sh, findId)

            return {
                itemAtStage: tempItemsAtStage
            }
        });

    }

    onStageItemSelect(selectedItem) {

        //select if other item is selected
        this.setState((prevState, props) => {
            if (prevState.selectedItem.id !== selectedItem.id) {
                return { selectedItem }
            }
        })
    }

    /* Item Handlers END */

    onStageClick(evt) {

        this.onStageItemSelect(this.dummyObj)
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

    onZoomStage(evt) {
        this.stageScaleNum = evt.detail;
        this.zoomStage();
    }

    onUpdateDimensions() {

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

    /**
     * EVENT HANDLERS END
     */

    /**
    * REACT LIFECYCLES START
    */

    //shouldComponentUpdate(nextProps, nextState) {
    //    //if (nextState.selectedItem.id === -1)
    //    //    return false;
    //    if (this.state.itemsAtStage.length != nextState.itemsAtStage.length)
    //        return true;
    //    if (this.state.stageBoardsList.length != nextState.stageBoardsList.length)
    //        return true;

    //    return true;
    //}

    componentDidMount() {

        this.stageInit();
        this.createGrid();
        this.initStageAsDraggable();
        this.onUpdateDimensions();

        window.addEventListener("resize", this.onUpdateDimensions.bind(this));
        window.addEventListener('wheel', this.onMouseWheel);
        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keyup", this.onKeyUp);
        //custom events
        window.addEventListener('zoomOccured', this.onZoomStage);
        window.addEventListener('onDragObject', this.onListItemDrag);
        window.addEventListener('onDropObject', this.onListItemDrop);

        document.querySelector('#stage-grid-live').addEventListener("click", this.onStageClick.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onUpdateDimensions.bind(this));
        window.removeEventListener('wheel', this.onMouseWheel);
        window.removeEventListener("keydown", this.onKeyDown);
        window.removeEventListener("keyup", this.onKeyUp);
        //custom events
        window.removeEventListener('zoomOccured', this.onZoomStage);
        window.removeEventListener('onDragObject', this.onListItemDrag);
        window.removeEventListener('onDropObject', this.onListItemDrop);

        document.querySelector('#stage-grid-live').removeEventListener("click", this.onStageClick.bind(this));
    }

    render() {

        let selectedItem = this.state.selectedItem;
        let currentDraggable = this.currentDraggable;
        let onStageItemSelect = this.onStageItemSelect;
        let onStageItemUpdate = this.onStageItemUpdate;
        let onStageItemDelete = this.onStageItemDelete;
        //let onStageItemMouseDown = this.onStageItemMouseDown.bind(this);
        //let onStageItemMouseUp = this.onStageItemMouseUp.bind(this);

        let itemsAtStage = this.state.itemsAtStage.map(function (stageItem, i) {

            stageItem.isSelected = (selectedItem.id === stageItem.id) ? true : false;
            stageItem.dragBounds = document.querySelector('#stage');
            stageItem.onStageItemSelect = onStageItemSelect;
            stageItem.onStageItemUpdate = onStageItemUpdate;
            stageItem.onStageItemDelete = onStageItemDelete;

            console.log('render', i, stageItem.id, stageItem.sh);

            //stageItem.onMouseDown = onStageItemMouseDown;
            //stageItem.onMouseUp = onStageItemMouseUp;

            return <StageItem
                key={stageItem.id}
                {...stageItem}
            />
        })

        return (

            <div id="stage-container">
                <div id="stage-top"></div>
                <div id="stage">
                    <img id="stage-bgnd" src={this.state.imgPath} />
                    <div id="stage-grid-bgnd">
                        {
                            this.state.stageBoardsList.map(function (boardItem) {

                                return <StageBoard
                                    key={boardItem.id}
                                    {...boardItem}
                                />
                            })
                        }
                    </div>
                    <div id="stage-grid-live">
                        {
                            this.state.stageBoardsList.map(function (boardItem) {

                                return <StageBoardHighlight
                                    key={boardItem.id}
                                    {...boardItem}
                                />
                            })
                        }
                    </div>
                    <ReactTransitionGroup component="div" id="stage-items-container">
                    {
                        itemsAtStage
                    }
                    </ReactTransitionGroup>
                </div>
                <div id="stage-bottom"></div>
            </div>
        )
    }
}

export default Stage;