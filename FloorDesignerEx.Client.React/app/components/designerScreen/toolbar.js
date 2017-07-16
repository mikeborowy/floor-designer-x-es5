import * as React from 'react';
import LogoImg from '../../assets/logo/logo.png';
import SearchPanel from './searchPanel/searchPanel';

const Toolbar = () => {

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
                                <button id="zoom-out-floor-btn" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button">
                                    <i className="material-icons">zoom_out</i>
                                </button>
                                <input id="zoom-slider"
                                    className="mdl-slider mdl-js-slider"
                                    type="range" min="-10" max="10" value=""
                                    tabindex="0"
                                    onchange="OnSliderChange(this.value)" />
                                <button id="zoom-in-floor-btn" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button">
                                    <i className="material-icons">zoom_in</i>
                                </button>
                            </div>
                            <button id="zoom-reset-floor-btn" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button">
                                <span><i className="material-icons">youtube_searched_for</i></span>
                                <span>
                                    Reset Zoom
                                </span>
                            </button>
                            <button id="upload-floor-bgnd-btn" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button">
                                <span><i className="material-icons">file_upload</i></span>
                                <span>
                                    Upload Photo
                                </span>
                            </button>
                            <button id="save-floor-btn" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button">
                                <span>
                                    <i className="material-icons">cloud_upload</i>
                                </span>
                                <span>Save Floor Plan</span>
                            </button>
                            <button id="floor-finder-btn"
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
                <SearchPanel/>
            </div>
        </div>
    )
}

Toolbar.displayName = "Toolbar";

export default Toolbar;