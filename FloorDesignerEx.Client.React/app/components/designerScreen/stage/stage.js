import * as React from 'react';
import $ from 'jquery';
import roomsCfg from '../common/roomsCfg';

const Stage = (props) => {

    const floorCfg = {
        id: 4,
        officeId: 1,
        name: "Floor 1",
        width: 15,
        height: 10,
        xpos: 0,
        ypos: 0,
        image: null,
        rooms: []
    }

    let loadedItems = {};
    const imgPath = "../Images/blueprints/bgnd_12x10.jpg";

    console.log(roomsCfg())

    //const gridCellWidth = roomsCfg.CELL_WIDTH;
    //const gridCellHeight = roomsCfg.CELL_HEIGHT;
    //const shapeSizes = roomsCfg.SHAPES_SIZES;
    //const paddingLeft = roomsCfg.SHAPE_CFG;


    //const paddingTop = roomsCfg.SHAPE_CFG.PADDING_TOP;
    //const itemBorderSize = roomsCfg.SHAPE_CFG.BORDER_SIZE;

    let draggedObj;

    //function stageInit() {

    //    $('#stage').width(floorCfg.width * gridCellWidth);
    //    $('#stage').height(floorCfg.height * gridCellHeight);

    //    $('#stage-items-container').width(floorCfg.width * gridCellWidth);
    //    $('#stage-items-container').height(floorCfg.height * gridCellHeight);

    //    const img = $('#stage').find('img');
    //    img.attr('src', floorCfg.image);
    //    img.width(floorCfg.width * gridCellWidth);
    //    img.height(floorCfg.height * gridCellHeight);

    //    createGrid(gridCellWidth, gridCellHeight, floorCfg.width, floorCfg.height);
    //}

    //function createGrid(gridCellWidth, gridCellHeight, gridColumns, gridRows) {

    //    const _stage = $('#stage');
    //    const _stageGridBgnd = $('#stage-grid-bgnd');
    //    const _stageGridLive = $('#stage-grid-live');

    //    const w = 1;
    //    const h = 1;

    //    for (let i = 0; i < gridRows * gridColumns; i++) {

    //        x = (i * gridCellWidth) % (gridColumns * gridCellWidth);
    //        y = Math.floor(i / gridColumns) * gridCellHeight;

    //        $("<div/>").
    //            attr('id', i).
    //            attr('class', 'stage-board-field-highlight').
    //            css({
    //                position: "absolute",
    //                width: (gridCellWidth * w),
    //                height: (gridCellHeight * h),
    //                top: y, left: x
    //            }).
    //            prependTo(_stageGridLive);

    //        $("<div></div>").
    //            attr('id', i).
    //            attr('class', 'stage-board-field').
    //            css({
    //                position: "absolute",
    //                //boxShadow: 'inset 0px 0px 0px 10px #f00',
    //                border: "1px dashed rgba(0,0,0,0.05)",
    //                width: gridCellWidth,
    //                height: gridCellHeight,
    //                top: y, left: x
    //            })
    //            .prependTo(_stageGridBgnd);
    //    }

    //    loadItems();
    //}

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

    function clearStage() {

        $('#stage-grid-bgnd').html('');
        $('#stage-grid-live').html('');
        $('#stage-items-container').html('');
    }

    function findValueByKey(array, key) {

        for (let i = 0; i < array.length; i++) {

            if (array[i][key]) {

                return array[i][key];
            }
        }
        return null;
    }

    return (
        <div id="stage-container">
            <div id="stage-top"></div>
            <div id="stage">
                <img id="stage-bgnd" src={imgPath} />
                <div id="stage-grid-bgnd"></div>
                <div id="stage-grid-live"></div>
                <div id="stage-items-container"></div>
            </div>
            <div id="stage-bottom"></div>
        </div>
    )

}

export default Stage;