import * as React from 'react';
import { TweenMax } from 'gsap';

import LogoImg from '../../../assets/logo/logo.png';
import SearchPanel from '../searchPanel/searchPanel';

class Toolbar extends React.Component {

    constructor(props) {
        super(props)

        this.debugMode = false;//this.props.appCfg.debugMode;
        this.floorNameStyle = {
            paddingLeft: 20,
            fontSize: 15,
            display: "inline-block"
        }
        this.stageScaleNum = 1;
        this.stageScaleNumMin = 0.2;
        this.stageScaleNumMax = 2;

        this.state = {
            floorData: {}
        }

        this.onSelectFloor = this.onSelectFloor.bind(this);
        this.onZoomStage = this.onZoomStage.bind(this);
        this.onZoomSliderChange = this.onZoomSliderChange.bind(this);
        this.onZoomInClick = this.onZoomInClick.bind(this);
        this.onZoomOutClick = this.onZoomOutClick.bind(this);
        this.onZoomResetClick = this.onZoomResetClick.bind(this);
        this.onUploadPhotoClick = this.onUploadPhotoClick.bind(this);
        this.onSaveFloorClick = this.onSaveFloorClick.bind(this);
        this.onFloorFinderClick = this.onFloorFinderClick.bind(this);
    }

    /*ZOOM START*/
    onZoomStage(evt) {

        this.stageScaleNum = evt.detail;
        document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);

    }
    /*ZOOM END*/


    onSelectFloor(evt) {
        let floorData = evt.detail;
        this.setState({ floorData })
    }

    /**
    * Btns Actions START
    */

    /*SLIDER*/
    onZoomSliderChange(evt) {
        if (this.debugMode) console.log("onZoomSliderChange", evt)

        this.stageScaleNum = (evt.target.value * 0.1) + 1
        this.props.onZoomUpdate(this.stageScaleNum);

        var evt = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
        window.dispatchEvent(evt);

        document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
    }

    /*ZOOM IN BTN*/
    onZoomInClick(evt) {
        if (this.debugMode) console.log("onZoomIn", evt)

        if (this.stageScaleNum < this.stageScaleNumMax)
            this.stageScaleNum += 0.1;

        this.props.onZoomUpdate(this.stageScaleNum);

        var evt = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
        window.dispatchEvent(evt);

        document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
    }

    /*ZOOM OUT BTN*/
    //$('#zoom-out-floor-btn').click(function () { })
    onZoomOutClick(evt) {
        if (this.debugMode) console.log("onZoomOutClick", evt)

        if (this.stageScaleNum > this.stageScaleNumMin)
            this.stageScaleNum -= 0.1;

        this.props.onZoomUpdate(this.stageScaleNum);

        var evt = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
        window.dispatchEvent(evt);

        document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
    }

    /*ZOOM RESET BTN*/
    onZoomResetClick(evt) {

        if (this.debugMode) console.log("onZoomResetClick", evt)

        this.stageScaleNum = 1;
        this.props.onZoomUpdate(this.stageScaleNum);

        var evt = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
        window.dispatchEvent(evt);

        document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
    };

    /*UPLOAD START*/
    onUploadPhotoClick(evt) {

        if (this.debugMode) console.log("onUploadPhotoClick", evt);
    }

    /*SAVE START*/
    onSaveFloorClick(evt) {

        if (this.debugMode) console.log("onSaveFloorClick", evt)
    }
    /*SAVE END*/

    onFloorFinderClick(evt) {

        if (this.debugMode) console.log("onFloorFinderClick", evt);
        //let url = $(this).data('url');

        //window.location.href = url;
    }

    /**
     * Btns Actions END
     */

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentDidMount() {
        window.addEventListener('zoomOccured', this.onZoomStage);
        window.addEventListener('onSelectFloor', this.onSelectFloor);

    }

    componentWillUnmount() {
        window.removeEventListener('zoomOccured', this.onZoomStage);
        window.removeEventListener('onSelectFloor', this.onSelectFloor);
    }

    render() {
        return (
            <div id="designer-toolbar">
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <header className="mdl-layout__header">
                        <div className="mdl-layout__header-row">
                            <div className="mdl-layout-title logo">
                                <img src={LogoImg} width="100" />
                                <div style={this.floorNameStyle}>{this.state.floorData.name}</div>
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
                                        tabIndex="0"
                                        //onchange="function(evt){OnSliderChange(evt.target.value)}"
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