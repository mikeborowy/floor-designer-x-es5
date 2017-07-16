import * as React from 'react';
import LogoImg from '../../assets/logo/logo.png';
import SearchPanel from './searchPanel';

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
                        <nav class="mdl-navigation mdl-layout--large-screen-only">
                            <div id="zoom-floor-panel">
                                <button id="zoom-out-floor-btn" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button">
                                    <i class="material-icons">zoom_out</i>
                                </button>
                                <input id="zoom-slider"
                                    class="mdl-slider mdl-js-slider"
                                    type="range" min="-10" max="10" value=""
                                    tabindex="0"
                                    onchange="OnSliderChange(this.value)" />
                                <button id="zoom-in-floor-btn" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button">
                                    <i class="material-icons">zoom_in</i>
                                </button>
                            </div>
                            <button id="zoom-reset-floor-btn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button">
                                <span><i class="material-icons">youtube_searched_for</i></span>
                                <span>
                                    Reset Zoom
                                </span>
                            </button>
                            <button id="upload-floor-bgnd-btn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button">
                                <span><i class="material-icons">file_upload</i></span>
                                <span>
                                    Upload Photo
                                </span>
                            </button>
                            <button id="save-floor-btn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button">
                                <span>
                                    <i class="material-icons">cloud_upload</i>
                                </span>
                                <span>Save Floor Plan</span>
                            </button>
                            <button id="floor-finder-btn"
                                class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button"
                                data-url="">
                                <span>
                                    <i class="material-icons">visibility</i>
                                </span>
                                <span>Floor Finder</span>
                            </button>
                        </nav>
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <group class="designer-toolbar-group">
                        <span class="mdl-layout-title">Select Office</span>
                    </group>
                    <group class="designer-toolbar-group">
                        <form>
                            <formgroup class="designer-toolbar-form-group">
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select ">
                                    <input class="mdl-textfield__input" type="text" id="search-country" value="Poland" readonly tabIndex="-1" />
                                    <label for="search-country" class="mdl-textfield__label">Country</label>
                                    <ul for="search-country" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                                        <li class="mdl-menu__item">Poland</li>
                                        <li class="mdl-menu__item">Sweden</li>
                                    </ul>
                                </div>
                            </formgroup>
                            <formgroup class="designer-toolbar-form-group">
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select ">
                                    <input class="mdl-textfield__input" type="text" id="search-city" value="Warsaw" readonly tabIndex="-1" />
                                    <label for="search-city" class="mdl-textfield__label">City</label>
                                    <ul for="search-city" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                                        <li class="mdl-menu__item">Warsaw</li>
                                        <li class="mdl-menu__item">Stockholm</li>
                                    </ul>
                                </div>
                            </formgroup>
                            <formgroup class="designer-toolbar-form-group">
                                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth">
                                    <input class="mdl-textfield__input" type="text" id="sample1" value="Office 1, Malborska St. 51" readonly tabIndex="-1" />
                                    <label for="sample1" class="mdl-textfield__label">Office</label>
                                    <ul for="sample1" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                                        <li class="mdl-menu__item">Office 1, Malborska St. 51</li>
                                        <li class="mdl-menu__item">Office 2, Szwedzki Pl. 3</li>
                                    </ul>
                                </div>
                            </formgroup>
                            <br />
                            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-long-btn">
                                <i class="material-icons">search</i>
                                Submit Search
                            </button>
                        </form>
                    </group>
                    <SearchPanel />
                </div>
            </div>
        </div>
    )
}

Toolbar.displayName = "Toolbar";

export default Toolbar;