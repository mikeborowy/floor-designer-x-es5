﻿import * as React from 'react';
import $ from 'jquery';
import { TweenMax } from 'gsap';

import LogoImg from '../../../assets/logo/logo.png';
import SearchPanel from '../searchPanel/searchPanel';

class Toolbar extends React.Component {

    constructor(props) {
        super(props)

        this.debugMode = false;//this.props.appCfg.debugMode;
        this.stageScaleNum = 1;
        this.stageScaleNumMin = 0.2;
        this.stageScaleNumMax = 2;

        this.state = {
            floorData: {}
        }

        //this.onZoomStage = this.onZoomStage.bind(this);
        this.onZoomSliderChange = this.onZoomSliderChange.bind(this);
        this.onZoomInClick = this.onZoomInClick.bind(this);
        this.onZoomOutClick = this.onZoomOutClick.bind(this);
        this.onZoomResetClick = this.onZoomResetClick.bind(this);
        this.onUploadPhotoClick = this.onUploadPhotoClick.bind(this);
        this.onSaveFloorClick = this.onSaveFloorClick.bind(this);
        this.onFloorFinderClick = this.onFloorFinderClick.bind(this);
    }

    /*ZOOM START*/
    //onZoomStage(evt) {
    //    this.stageScaleNum = evt.detail;
    //    document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
    //}
    /*ZOOM END*/

    /**
    * Btns Actions START
    */

    /*SLIDER*/
    onZoomSliderChange(evt) {
        if (this.debugMode) console.log("onZoomSliderChange", evt)

        this.stageScaleNum = (evt.target.value * 0.1) + 1
        this.props.onZoomUpdate(this.stageScaleNum);

        //var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
        //window.dispatchEvent(event);

        //document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
    }

    /*ZOOM IN BTN*/
    onZoomInClick(evt) {
        if (this.debugMode) console.log("onZoomIn", evt)

        if (this.stageScaleNum < this.stageScaleNumMax)
            this.stageScaleNum += 0.1;

        this.props.onZoomUpdate(this.stageScaleNum);

        //var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
        //window.dispatchEvent(event);

        document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
    }

    /*ZOOM OUT BTN*/
    //$('#zoom-out-floor-btn').click(function () { })
    onZoomOutClick(evt) {
        if (this.debugMode) console.log("onZoomOutClick", evt)

        if (this.stageScaleNum > this.stageScaleNumMin)
            this.stageScaleNum -= 0.1;

        this.props.onZoomUpdate(this.stageScaleNum);

        //var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
        //window.dispatchEvent(event);

        document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
    }

    /*ZOOM RESET BTN*/
    onZoomResetClick(evt) {

        if (this.debugMode) console.log("onZoomResetClick", evt)

        this.stageScaleNum = 1;
        this.props.onZoomUpdate(this.stageScaleNum);

        //var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
        //window.dispatchEvent(event);

        document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
    };

    /*UPLOAD START*/
    onUploadPhotoClick(evt) {

        if (this.debugMode) console.log("onUploadPhotoClick", evt);
    }

    /*SAVE START*/
    onSaveFloorClick(evt) {

        if (this.debugMode) console.log("onSaveFloorClick", evt)

        //let rooms = [];
        //$('.item-box').each(function (i, val) {

        //    let itemBox = $(val)

        //    let room = {
        //        shape: itemBox.attr('data-box-shape'),
        //        width: itemBox.attr('data-box-w'),
        //        height: itemBox.attr('data-box-h'),
        //        xpos: itemBox.attr('data-box-x'),
        //        ypos: itemBox.attr('data-box-y'),
        //        rotation: itemBox.attr('data-box-r'),
        //        floorId: floorCfg.id
        //    };

        //    rooms.push(room);
        //});

        //let floor = {
        //    id: floorCfg.id,
        //    officeId: floorCfg.officeId,
        //    name: floorCfg.name,
        //    width: floorCfg.width,
        //    height: floorCfg.height,
        //    xpos: floorCfg.xpos,
        //    ypos: floorCfg.ypos,
        //    image: imgPath,
        //    rooms: rooms
        //}

        //let action = "/api/floors/" + floorCfg.id;
        //let data = JSON.stringify(floor);

        //$.ajax({
        //    contentType: "application/json",
        //    dataType: 'json',
        //    type: "PUT",
        //    url: action,
        //    data: data,
        //    cache: false,
        //    success: function (response) {

        //        if (debugMode) {
        //            console.log(response);
        //        }

        //    },
        //    error: function (xhr, ajaxOptions, thrownError) {
        //        if (debugMode) {
        //            console.log(xhr, ajaxOptions, thrownError);
        //        }
        //    }
        //});
    }
    /*SAVE END*/

    onFloorFinderClick(evt) {

        if (this.debugMode) console.log("onFloorFinderClick", evt);
        let url = $(this).data('url');

        //window.location.href = url;
    }

    /**
     * Btns Actions END
     */

    componentWillMount() {
    }

    componentDidMount() {
        //window.addEventListener("resize", this.updateDimensions);
        //$('#zoom-slider').on('input', function () {

        //    this.stageScaleNum = (this.value * 0.1) + 1;
        //    //this.onZoomStage.bind(this);
        //});

        window.addEventListener('zoomOccured', this.onZoomStage);
    }

    componentWillUnmount() {
        //window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <div id="designer-toolbar">
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <header className="mdl-layout__header">
                        <div className="mdl-layout__header-row">
                            <div className="mdl-layout-title logo">
                                <img src={LogoImg} width="100" />
                            </div>
                            <div className="mdl-layout-spacer"></div>
                            <nav className="mdl-navigation mdl-layout--large-screen-only">
                                <div id="zoom-floor-panel">
                                    <button
                                        id="zoom-out-floor-btn"
                                        onClick={this.onZoomOutClick}
                                        className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button">
                                        <i className="material-icons">zoom_out</i>
                                    </button>
                                    <input id="zoom-slider"
                                        className="mdl-slider mdl-js-slider"
                                        type="range" min="-10" max="10" value=""
                                        tabindex="0"
                                        onchange="function(evt){OnSliderChange(evt.target.value)}"
                                        onChange={this.onZoomSliderChange}
                                    />
                                    <button
                                        id="zoom-in-floor-btn"
                                        onClick={this.onZoomInClick}
                                        className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button">
                                        <i className="material-icons">zoom_in</i>
                                    </button>
                                </div>
                                <button
                                    id="zoom-reset-floor-btn"
                                    onClick={this.onZoomResetClick}
                                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button">
                                    <span><i className="material-icons">youtube_searched_for</i></span>
                                    <span>
                                        Reset Zoom
                                </span>
                                </button>
                                <button
                                    id="upload-floor-bgnd-btn"
                                    onClick={this.onUploadPhotoClick}
                                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button">
                                    <span><i className="material-icons">file_upload</i></span>
                                    <span>
                                        Upload Photo
                                </span>
                                </button>
                                <button
                                    id="save-floor-btn"
                                    onClick={this.onSaveFloorClick}
                                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button">
                                    <span>
                                        <i className="material-icons">cloud_upload</i>
                                    </span>
                                    <span>Save Floor Plan</span>
                                </button>
                                <button
                                    id="floor-finder-btn"
                                    onClick={this.onFloorFinderClick}
                                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button"
                                    data-url="">
                                    <span>
                                        <i className="material-icons">visibility</i>
                                    </span>
                                    <span>Floor Finder</span>
                                </button>
                            </nav>
                        </div>
                    </header>
                    <SearchPanel />
                </div>
            </div>
        )
    }
}

Toolbar.displayName = "Toolbar";

export default Toolbar;