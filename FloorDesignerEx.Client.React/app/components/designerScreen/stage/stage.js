import * as React from 'react';
import $ from 'jquery';
import roomsCfg from '../common/roomsCfg';
import BlueprintImg from '../../../assets/blueprints/bgnd_12x10.jpg';

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
                gridCellWidth: roomsCfg().CELL_WIDTH,
                gridCellHeight: roomsCfg().CELL_HEIGHT,
                shapeSizes: roomsCfg().SHAPES_SIZES,
                paddingLeft: roomsCfg().SHAPE_CFG,
                paddingTop: roomsCfg().SHAPE_CFG.PADDING_TOP,
                itemBorderSize: roomsCfg().SHAPE_CFG.BORDER_SIZE
            },
            loadedItems: {},
            imgPath: BlueprintImg,
            draggedObj: null
        }

        this.stageInit = this.stageInit.bind(this);
        this.createGrid = this.createGrid.bind(this);
        this.clearStage = this.clearStage.bind(this);

    }

    stageInit() {

        let { floorCfg, roomCfg } = this.state;

        $('#stage').width(floorCfg.width * roomCfg.gridCellWidth);
        $('#stage').height(floorCfg.height * roomCfg.gridCellHeight);

        $('#stage-items-container').width(floorCfg.width * roomCfg.gridCellWidth);
        $('#stage-items-container').height(floorCfg.height * roomCfg.gridCellHeight);

        const img = $('#stage').find('img');
        img.attr('src', floorCfg.image);
        img.width(floorCfg.width * roomCfg.gridCellWidth);
        img.height(floorCfg.height * roomCfg.gridCellHeight);

        this.createGrid(roomCfg.gridCellWidth, roomCfg.gridCellHeight, floorCfg.width, floorCfg.height);
    }

    createGrid(gridCellWidth, gridCellHeight, gridColumns, gridRows) {

        const _stage = $('#stage');
        const _stageGridBgnd = $('#stage-grid-bgnd');
        const _stageGridLive = $('#stage-grid-live');

        const w = 1;
        const h = 1;

        for (let i = 0; i < gridRows * gridColumns; i++) {

            let x = (i * gridCellWidth) % (gridColumns * gridCellWidth);
            let y = Math.floor(i / gridColumns) * gridCellHeight;

            $("<div/>").
                attr('id', i).
                attr('class', 'stage-board-field-highlight').
                css({
                    position: "absolute",
                    width: (gridCellWidth * w),
                    height: (gridCellHeight * h),
                    top: y, left: x
                }).
                prependTo(_stageGridLive);

            $("<div></div>").
                attr('id', i).
                attr('class', 'stage-board-field').
                css({
                    position: "absolute",
                    //boxShadow: 'inset 0px 0px 0px 10px #f00',
                    border: "1px dashed rgba(0,0,0,0.05)",
                    width: gridCellWidth,
                    height: gridCellHeight,
                    top: y, left: x
                })
                .prependTo(_stageGridBgnd);
        }

        console.log("done")
        //loadItems();
    }

    //function loadItems() {

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
    //}

    clearStage() {

        $('#stage-grid-bgnd').html('');
        $('#stage-grid-live').html('');
        $('#stage-items-container').html('');
    }

    findValueByKey(array, key) {

        for (let i = 0; i < array.length; i++) {

            if (array[i][key]) {

                return array[i][key];
            }
        }
        return null;
    }

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
            TweenLite.to($("#stage"), 0, { y: posY })
        }
        else {
            TweenLite.to($("#stage"), 0, { y: 0 })
        }

        if ($("#stage").width() <= $("#stage-container").width()) {
            let posX = (parentWidth / 2 - $("#stage").width() / 2)
            TweenLite.to($("#stage"), 0, { x: posX })
        }
        else {
            TweenLite.to($("#stage"), 0, { x: 0 })
        }
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        this.stageInit();
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    } 

    render() {
        return (
            <div id="stage-container">
                <div id="stage-top"></div>
                <div id="stage">
                    <img id="stage-bgnd" src={this.state.imgPath} />
                    <div id="stage-grid-bgnd"></div>
                    <div id="stage-grid-live"></div>
                    <div id="stage-items-container"></div>
                </div>
                <div id="stage-bottom"></div>
            </div>
        )
    }
}

export default Stage;