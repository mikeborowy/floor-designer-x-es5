import * as React from 'react';
import $ from 'jquery';

import Toolbar from '../toolbar/toolbar';
import ShapesPanel from '../shapesPanel/shapesPanel';
import Stage from '../stage/stage';

class Workspace extends React.Component {

    constructor(props) {
        super(props)

        this.zoomMouse = false;
        this.dragStage = false;
        this.stageScaleNum = 1;
        this.stageScaleNumMin = 0.2;
        this.stageScaleNumMax = 2;

        this.onZoomStage = this.onZoomStage.bind(this);
        this.zoomStage = this.zoomStage.bind(this);
        this.onMouseWheel = this.onMouseWheel.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    updateDimensions() {

        let toolbarHeight = $("#designer-toolbar").height();
        let windowWidth = $(window).width();
        let windowHeight = $(window).height();
        /*shapes panel*/
        $("#shapes-panel").height(
            windowHeight - toolbarHeight
        )

        $("#stage-container").height(
            windowHeight - toolbarHeight
        )
        /*stage*/
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

    onZoomStage(zoom) {
        this.stageScaleNum = zoom;
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

            //var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
            //window.dispatchEvent(event);
            this.zoomStage()

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

        ////drag stage with "X"
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

    /*we get zoom value from toolbar and set in current comp state*/
    //updateZoom(zoom) {
    //    this.setState({zoom})
    //}

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
        window.addEventListener('wheel', this.onMouseWheel);
        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keyup", this.onKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        window.removeEventListener('wheel', this.onMouseWheel);
        window.removeEventListener("keydown", this.onKeyDown);
        window.removeEventListener("keyup", this.onKeyUp);
    }

    render() {
        return (
            <div id="designer-workspace">
                <Toolbar
                    appCfg={this.props.appCfg}
                    zoom={this.stageScaleNum}
                    onZoomUpdate={this.onZoomStage}
                />
                <ShapesPanel
                    appCfg={this.props.appCfg}
                />
                <Stage
                    appCfg={this.props.appCfg}
                    zoom={this.stageScaleNum}
                    onZoomUpdate={this.onZoomStage}
                />
            </div>
        )
    }
}

Workspace.displayName = "Workspace";

export default Workspace;