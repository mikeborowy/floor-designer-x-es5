import * as React from 'react';
import $ from 'jquery';

import RoomsCfg from '../common/roomsCfg';

class StageItem extends React.Component {

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
        }

        this.createLShapeRoom = this.createLShapeRoom.bind(this);
        this.createRegularShapeRoom = this.createRegularShapeRoom.bind(this);
    }

    createRegularShapeRoom() {

        let { paddingLeft, paddingTop } = this.cfg;
        let w = (this.props.w) - (paddingLeft * 2);
        let h = (this.props.h) - (paddingTop * 2);
        let style = {
            width: w,
            height: h
        };

        let itemBgnd = (
            <div className={`item-bgnd ${this.props.sh}`} style={style}></div>
        )

        return itemBgnd;
    };

    createLShapeRoom() {

        let { paddingLeft, paddingTop, itemBorderSize, gridCellWidth } = this.cfg;
        let w = (this.props.w) - (paddingLeft * 2);
        let h = (this.props.h) - (paddingTop * 2);

        let style = {
            width: w,
            height: h
        };

        let styleTop = {
            width: w / 3 + (itemBorderSize + 1),
            height: h / 3
        };

        let styleBottom = {
            width: w - gridCellWidth,
            height: h
        };

        let itemBgnd = (
            <div className={`item-bgnd ${this.props.sh}`} style={style}>
                <div className='l-shape-top' style={styleTop}></div>
                <div className='l-shape-bottom' style={styleBottom}></div>
            </div>
        );

        return itemBgnd;
    };

    //shouldComponentUpdate (nextState, nextProps) {
    //    const differentTitle = this.props.title !== nextProps.title;
    //    const differentDone = this.props.done !== nextProps.done
    //    return differentTitle || differentDone;
    //}

    comoponentDidMount() {


    }

    comoponentWillUnmount() { }

    render() {
        let { id, x, y, r, tox, toy, w, h, sh } = this.props;
        let { style } = this.cfg;
        let shapeBoxDiv;

        if (sh === "shape-room-l-3x2") {
            shapeBoxDiv = this.createLShapeRoom()
        }
        else {
            shapeBoxDiv = this.createRegularShapeRoom()
        }

        return (
            <div
                className='item-box'
                style={style}
                data-box-id={id}
                data-box-x={x}
                data-box-y={y}
                data-box-r={r}
                data-box-tox={tox}
                data-box-toy={toy}
                data-box-w={w}
                data-box-h={h}
                data-box-shape={sh}
                data-box-selected={false}
                data-parent='stage'
            >
                {shapeBoxDiv}
                <div className='shape-rotate-btn shape-button' data-btn-r={r * (-1)}>
                    <div className='shape-rotate-inv-btn' />
                    <i className='material-icons shape-rotate-inv-icon'>rotate_right</i>
                </div>
                <div className='shape-drag-btn shape-button' data-btn-r={r * (-1)} >
                    <div className='shape-drag-inv-btn' />
                    <i className='material-icons shape-drag-inv-icon'> drag_handle </i>
                </div>
                <div className='shape-delete-btn shape-button' data-btn-r={r * (-1)}>
                    <div className='shape-delete-inv-btn' />
                    <i className='material-icons shape-delete-inv-icon'>delete</i>
                </div>
                <div className='shape-resize-btn shape-button' data-btn-r={r * (-1)}>
                    <div className='shape-resize-inv-btn' />
                    <i className='material-icons shape-resize-inv-icon'>photo_size_select_small</i>
                </div>
            </div>
        )
    }
}

export default StageItem