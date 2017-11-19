//react libs
import * as React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
//import { assign } from 'babel-polyfill';
//3rd party libs
import TweenLite from 'gsap';
import TweenMax from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollToPlugin from "gsap/src/uncompressed/plugins/ScrollToPlugin";
import _ from 'lodash';
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
            animationOfStageItem: {
                showAnimationTime: 0.5,
                leaveAnimationTime: 0.3,
                delayAnimationTime: 0
            },
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

        this.floorDummy = {
            id: -1,
            officeId: -1,
            name: "",
            width: 0,
            height: 0,
            xpos: 0,
            ypos: 0,
            image: '',
            rooms: []
        }

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
        //this.stageBoardsList = [];

        this.state = {
            floor: {},
            stageBoardsList: [],
            gridColumns:0,
            gridRows: 0,
            selectedItem: this.dummyObj,
            itemsAtStage: [],
            uniqId: (new Date().valueOf())
        }

        //bind functions to this class
        this.initStageAsDraggable = this.initStageAsDraggable.bind(this);
        this.createStage = this.createStage.bind(this);
        this.zoomStage = this.zoomStage.bind(this);

        this.onZoomStage = this.onZoomStage.bind(this);
        this.onMouseWheel = this.onMouseWheel.bind(this);

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);

        this.onListItemDrag = this.onListItemDrag.bind(this);
        this.onListItemDrop = this.onListItemDrop.bind(this);

        this.onStageItemAdd = this.onStageItemAdd.bind(this);
        this.onStageItemSelect = this.onStageItemSelect.bind(this);
        this.onStageItemUpdate = this.onStageItemUpdate.bind(this);
        this.onStageItemDelete = this.onStageItemDelete.bind(this);

        this.onUpdateDimensions = this.onUpdateDimensions.bind(this);

        //setters
        this.setGrid = this.setGrid.bind(this);
        this.setItemsAtStage = this.setItemsAtStage.bind(this);

        //helpers
    }

    createStage(floor) {

        TweenLite.set(this.stage, {
            width: floor.width * this.cfg.gridCellWidth,
            height: floor.height * this.cfg.gridCellHeight,
            backgroundColor: 'white'
        })

        //TweenLite.set(this.stageItemsContainer, {
        //    width: floor.width * this.cfg.gridCellWidth,
        //    height: floor.height * this.cfg.gridCellHeight
        //})

        //this.stage.style.width = floor.width * this.cfg.gridCellWidth;
        //this.stage.style.height = floor.height * this.cfg.gridCellHeight;
    }

    initStageAsDraggable() {

        let draggableObj = Draggable.create(this.stageContainer, {
            type: "scroll",
            edgeResistance: 1,
            throwProps: true,
            lockAxis: false
        });

        Draggable.get("#stage-container").disable();
    }

    zoomStage() {

        let stage = this.stage;
        let stageContainer = this.stageContainer;
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

        var posX = stageContainer.offsetWidth / 2 - stage.offsetWidth / 2;
        var stageWidthAfterScale = stage.offsetWidth * this.stageScaleNum;

        var posY = (stageContainer.offsetHeight / 2 - stage.offsetHeight / 2)
        var stageHeightAfterScale = stage.offsetHeight * this.stageScaleNum;

        //First for horizontal scale scroll issue
        //check if scaled room width is bigger than room conatiner
        //if true align to left
        if (stageWidthAfterScale >= stageContainer.offsetWidth) {
            TweenMax.set(stage, {
                transformOrigin: "0 50%",
                x: 0,
                y: posY
            });

            //then check if scaled room height is bigger than room conatiner 
            //and align to top
            if (stageHeightAfterScale >= stageContainer.offsetHeight) {
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
        else if (stageHeightAfterScale >= stageContainer.offsetHeight) {
            TweenMax.set(stage, {
                transformOrigin: "50% 0%",
                x: posX,
                y: 0
            });

            //then check if scaled room width is bigger than room conatiner 
            //and align to left
            if (stageWidthAfterScale >= stageContainer.offsetWidth) {
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
     * STATE SETTERS START
     */

    setGrid(floor) {

        let { gridCellWidth, gridCellHeight } = this.cfg;

        let gridColumns = floor.width;
        let gridRows = floor.height;

        let stageBoardsList = [];

        let w = 1;
        let h = 1;

        for (let i = 0; i < gridRows * gridColumns; i++) {

            let x = (i * gridCellWidth) % (gridColumns * gridCellWidth);
            let y = Math.floor(i / gridColumns) * gridCellHeight;

            const bolardTile = {
                width: (gridCellWidth * w),
                height: (gridCellHeight * h),
                top: y,
                left: x
            }

            stageBoardsList.push(bolardTile)
        }

        this.setState({ stageBoardsList});
    };

    setItemsAtStage(array) {

        let itemsAtStage = array.map(item => {
            return {
                id: item.id,
                x: item.xpos,
                y: item.ypos,
                r: item.rotation,
                tox: 0,
                toy: 0,
                w: item.width,
                h: item.height,
                sh: item.shape,
                isSelected: false,
                dragBounds: null
            }
        });

        this.setState({ itemsAtStage });
    }

    //-- Item Start
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
    //-- Item End

    /**
     * STATE SETTERS END
     */

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

        //combine id,w,h,sh to draggedObj, add animation speed
        let item = Object.assign({}, this.draggedObj, evt.detail, {
            isSelected: true,
            showAnimationTime: this.cfg.animationOfStageItem.showAnimationTime,
            leaveAnimationTime: this.cfg.animationOfStageItem.leaveAnimationTime,
            delayAnimationTime: this.cfg.animationOfStageItem.delayAnimationTime
        });
        //pass extracted items
        this.onStageItemAdd(item);
    }

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
                let stageContainer = document.querySelector("#stage-container");
                stageContainer.style.overflowX = 'hidden';
                stageContainer.style.overflowY = 'hidden';
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
                let stageContainer = document.querySelector("#stage-container");
                stageContainer.style.overflowX = 'auto';
                stageContainer.style.overflowY = 'auto';
            }
        }

        //drag stage with "X"
        if (evt.keyCode === 88) {

            if (this.dragStage === true) {
                this.dragStage = false;
                //if ($('#stage-blocker').length > 0)
                //    $('#stage-blocker').remove();
                Draggable.get("#stage-container").disable();
            }
        }
    }

    onZoomStage(evt) {
        this.stageScaleNum = evt.detail;
        this.zoomStage();
    }

    onUpdateDimensions() {

        let toolbarHeight = document.querySelector("#designer-toolbar").offsetHeight;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        this.stageContainer.setAttribute('style', 'height:' + (windowHeight - toolbarHeight) + 'px');

        let parentWidth = this.stageContainer.offsetWidth;
        let parentHeight = this.stageContainer.offsetHeight;

        if (this.stage.offsetHeight <= parentHeight) {
            let posY = (parentHeight / 2 - this.stage.offsetHeight / 2);
            TweenLite.set(this.stage, { y: posY });
        }
        else {
            TweenLite.set(this.stage, { y: 0 });
        }

        if (this.stage.offsetWidth <= parentWidth) {
            let posX = (parentWidth / 2 - this.stage.offsetWidth / 2)
            TweenLite.set(this.stage, { x: posX })
        }
        else {
            TweenLite.set(this.stage, { x: 0 })
        }
    }

    /**
     * EVENT HANDLERS END
     */

    /**
    * REACT LIFECYCLES START
    */
    componentWillReceiveProps(newProps) {

        this.setGrid(newProps.floor);
        this.setItemsAtStage(newProps.floor.rooms);
    }

    componentDidUpdate(prevProps, prevState) {

        this.createStage(this.props.floor);
        this.initStageAsDraggable();
        this.onUpdateDimensions();

        if (prevProps.floor.id != this.props.floor.id)
        {
            const tiles = document.querySelectorAll('.stage-board-field');

            //tiles.forEach((item, i)=> {
            //    TweenMax.from(item, 0.5, {
            //        alpha: 0,
            //        delay: (i * 0.01),
            //        onComplete: function () {
            //            if (i === tiles.length - 1)
            //            {
            //            }
            //        }
            //    })
            //})

            //const itemsAtStage = document.querySelectorAll('.item-box');

            //itemsAtStage.forEach((item, i) => {

            //    TweenMax.from(item, 1, {
            //        scale: 0
            //    })
            //})
        }
    }

    componentDidMount() {

        //this.createStage(this.props.floor);
        //this.initStageAsDraggable();

        //this.setGrid(this.props.floor);
        //this.setItemsAtStage(this.props.floor.rooms);

        //this.onUpdateDimensions();

        window.addEventListener("resize", this.onUpdateDimensions);
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
        window.removeEventListener("resize", this.onUpdateDimensions);
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
            //stageItem.onMouseDown = onStageItemMouseDown;
            //stageItem.onMouseUp = onStageItemMouseUp;

            return <StageItem
                key={stageItem.id}
                {...stageItem}
            />
        })
        let stageBoardList = this.state.stageBoardsList.map(function (boardItem) {

            console.log()

            return <StageBoard
                key={_.uniqueId('b')}
                {...boardItem}
            />
        })
        let stageBoardHighlight = this.state.stageBoardsList.map(function (boardItem) {

            return <StageBoardHighlight
                key={_.uniqueId('bh')}
                {...boardItem}
            />
        })

        return (
            <div
                id="stage-container"
                ref={div => { this.stageContainer = div }}>
                <div id="stage-top"></div>
                <div
                    id="stage"
                    ref={div => { this.stage = div }} >
                    <img id="stage-bgnd" src={this.props.floor.image} />
                    <div id="stage-grid-bgnd" >
                        {
                            stageBoardList
                        }
                    </div>
                    <div id="stage-grid-live">
                        {
                           stageBoardHighlight
                        }
                    </div>
                    <ReactTransitionGroup
                        component="div"
                        id="stage-items-container"
                        ref={div => { this.stageItemsContainer = div }}>
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