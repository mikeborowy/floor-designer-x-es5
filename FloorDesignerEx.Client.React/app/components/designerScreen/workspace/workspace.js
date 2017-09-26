import * as React from 'react';
import $ from 'jquery';

import Toolbar from '../toolbar/toolbar';
import ShapesPanel from '../shapesPanel/shapesPanel';
import Stage from '../stage/stage';

import RoomsCfg from '../common/roomsCfg';

class Workspace extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            zoom: 1
        }

        this.currentAction = '';
        this.gridCellWidth = RoomsCfg().CELL_WIDTH;
        this.gridCellHeight = RoomsCfg().CELL_HEIGHT;
        this.draggedObj = null;


        this.getCurrentId = this.getCurrentId.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));

    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions() {

        let toolbarHeight = $("#designer-toolbar").height();
        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        $("#shapes-panel").height(
            windowHeight - toolbarHeight
        )
    }

    /*we get zoom value from toolbar and set in current comp state*/
    updateZoom(zoom) {

    }

    onDragStart(evt) {

        //this.dragged = e.currentTarget;
        evt.dataTransfer.effectAllowed = 'move';
        evt.dataTransfer.setData('text/html', this.dragged);

        this.currentAction = 'addItem';

        var target = $(evt.target);
        var w = target.data('shape-w');
        var h = target.data('shape-h');
        var sh = target.attr('name');
        var parent = target.attr('data-parent');

        $('#stage-grid-live')
            .find('.stage-board-field-highlight')
            .css({
                width: (this.gridCellWidth * w),
                height: (this.gridCellHeight * h)
            });

        var newId = this.getCurrentId() + 1;

        this.draggedObj = null;
        this.draggedObj = {
            id: newId,
            x: 0,
            y: 0,
            w: (this.gridCellWidth * w),
            h: (this.gridCellHeight * h),
            sh: sh
        };

        console.log('OnDragStart', this.draggedObj)
    }


    onDrop(evt) {
        console.log('onDrop')
    }


    onDragEnd(evt) {
        console.log('onDragEnd')
    }


    onDragDrop(evt) {

        console.log('onDragDrop', evt.dataTransfer)
        evt.preventDefault();
    }


    getCurrentId() {

        var _a = 0;

        $.each($('.item-box'), function (i, val) {

            _a = $($('.item-box')[i]).data('box-id');
        });

        return _a;
    }

    render() {
        return (
            <div id="designer-workspace">
                <Toolbar
                    appCfg={this.props.appCfg}
                    onZoomUpdate={this.updateZoom.bind(this)}
                />
                <ShapesPanel
                    appCfg={this.props.appCfg}
                    onDragStart={this.onDragStart.bind(this)}
                    onDragEnd={this.onDragEnd.bind(this)}
                    onDrop={this.onDrop.bind(this)}
                />
                <Stage
                    appCfg={this.props.appCfg}
                   
                />
            </div>
        )
    }
}

Workspace.displayName = "Workspace";

export default Workspace;