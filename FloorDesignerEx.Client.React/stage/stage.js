﻿//react libs
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

    componentWillReceiveProps(nextProps) {

        if (nextProps.zoom != this.props.zoom)
        {
            this.stageScaleNum = nextProps.zoom;
            this.zoomStage();
        }

        return false;
    }

    componentDidUpdate() {
        /*every rerender slows down animation
         *so it's better to use event listeners
         */
        //this.onZoomStage(this.props.zoom);
    }

    componentDidMount() {

        this.stageInit();
        this.createGrid();
        this.initStageAsDraggable();
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