webpackHotUpdate(0,{

/***/ 120:
/*!**************************************************!*\
  !*** ./app/components/designerScreen/toolbar.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 13), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 14), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	var _logo = __webpack_require__(/*! ../../assets/logo/logo.png */ 105);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _index = __webpack_require__(/*! ./searchPanel/index */ 197);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Toolbar = function Toolbar() {
	
	    return React.createElement(
	        'div',
	        { id: 'designer-toolbar' },
	        React.createElement(
	            'div',
	            { className: 'mdl-layout mdl-js-layout mdl-layout--fixed-header' },
	            React.createElement(
	                'header',
	                { className: 'mdl-layout__header' },
	                React.createElement(
	                    'div',
	                    { className: 'mdl-layout__header-row' },
	                    React.createElement(
	                        'div',
	                        { className: 'mdl-layout-title logo' },
	                        React.createElement('img', { src: _logo2.default, width: '100' })
	                    ),
	                    React.createElement('div', { className: 'mdl-layout-spacer' }),
	                    React.createElement(
	                        'nav',
	                        { className: 'mdl-navigation mdl-layout--large-screen-only' },
	                        React.createElement(
	                            'div',
	                            { id: 'zoom-floor-panel' },
	                            React.createElement(
	                                'button',
	                                { id: 'zoom-out-floor-btn', className: 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button' },
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
	                                    'zoom_out'
	                                )
	                            ),
	                            React.createElement('input', { id: 'zoom-slider',
	                                className: 'mdl-slider mdl-js-slider',
	                                type: 'range', min: '-10', max: '10', value: '',
	                                tabindex: '0',
	                                onchange: 'OnSliderChange(this.value)' }),
	                            React.createElement(
	                                'button',
	                                { id: 'zoom-in-floor-btn', className: 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button' },
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
	                                    'zoom_in'
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            'button',
	                            { id: 'zoom-reset-floor-btn', className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
	                                    'youtube_searched_for'
	                                )
	                            ),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Reset Zoom'
	                            )
	                        ),
	                        React.createElement(
	                            'button',
	                            { id: 'upload-floor-bgnd-btn', className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
	                                    'file_upload'
	                                )
	                            ),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Upload Photo'
	                            )
	                        ),
	                        React.createElement(
	                            'button',
	                            { id: 'save-floor-btn', className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
	                                    'cloud_upload'
	                                )
	                            ),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Save Floor Plan'
	                            )
	                        ),
	                        React.createElement(
	                            'button',
	                            { id: 'floor-finder-btn',
	                                className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button',
	                                'data-url': '' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
	                                    'visibility'
	                                )
	                            ),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Floor Finder'
	                            )
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { className: 'mdl-layout__drawer' },
	                React.createElement(
	                    'group',
	                    { className: 'designer-toolbar-group' },
	                    React.createElement(
	                        'span',
	                        { className: 'mdl-layout-title' },
	                        'Select Office'
	                    )
	                )
	            )
	        )
	    );
	};
	
	Toolbar.displayName = "Toolbar";
	
	exports.default = Toolbar;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 15); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "toolbar.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 18)(module)))

/***/ },

/***/ 194:
/*!***************************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/SearchPanelFloorList.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 13), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 14), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelFloorList = function SearchPanelFloorList(props) {
	
	    return React.createElement(
	        "ul",
	        { id: "floors-list", className: "demo-list-action mdl-list" },
	        React.createElement(
	            "li",
	            { id: "@floor.Id", className: "mdl-list__item mdl-list-item-fixed floor-list-item", "data-width": "@floor.Width", "data-height": "@floor.Height" },
	            React.createElement(
	                "div",
	                { className: "mdl-list__item-primary-content" },
	                React.createElement(
	                    "div",
	                    { "data-floor-id": "@floor.Id", className: "floor-edit-btn" },
	                    "@floor.Name"
	                )
	            ),
	            React.createElement(
	                "button",
	                { "data-floor-id": "@floor.Id", className: "mdl-button mdl-js-button mdl-button--icon mdl-button-color-blue floor-delete-btn" },
	                React.createElement(
	                    "i",
	                    { className: "material-icons" },
	                    "delete"
	                )
	            )
	        )
	    );
	};
	
	exports.default = SearchPanelFloorList;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 15); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SearchPanelFloorList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 18)(module)))

/***/ },

/***/ 195:
/*!**********************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/SearchPanelForm.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 13), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 14), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelForm = function SearchPanelForm() {
	
	    return React.createElement(
	        "group",
	        { className: "designer-toolbar-group" },
	        React.createElement(
	            "form",
	            null,
	            React.createElement(
	                "formgroup",
	                { className: "designer-toolbar-form-group" },
	                React.createElement(
	                    "div",
	                    { className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select " },
	                    React.createElement("input", { className: "mdl-textfield__input", type: "text", id: "search-country", value: "Poland", readonly: true, tabIndex: "-1" }),
	                    React.createElement(
	                        "label",
	                        { "for": "search-country", className: "mdl-textfield__label" },
	                        "Country"
	                    ),
	                    React.createElement(
	                        "ul",
	                        { "for": "search-country", className: "mdl-menu mdl-menu--bottom-left mdl-js-menu" },
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Poland"
	                        ),
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Sweden"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "formgroup",
	                { className: "designer-toolbar-form-group" },
	                React.createElement(
	                    "div",
	                    { className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select " },
	                    React.createElement("input", { className: "mdl-textfield__input", type: "text", id: "search-city", value: "Warsaw", readonly: true, tabIndex: "-1" }),
	                    React.createElement(
	                        "label",
	                        { "for": "search-city", className: "mdl-textfield__label" },
	                        "City"
	                    ),
	                    React.createElement(
	                        "ul",
	                        { "for": "search-city", className: "mdl-menu mdl-menu--bottom-left mdl-js-menu" },
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Warsaw"
	                        ),
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Stockholm"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "formgroup",
	                { className: "designer-toolbar-form-group" },
	                React.createElement(
	                    "div",
	                    { className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth" },
	                    React.createElement("input", { className: "mdl-textfield__input", type: "text", id: "sample1", value: "Office 1, Malborska St. 51", readonly: true, tabIndex: "-1" }),
	                    React.createElement(
	                        "label",
	                        { "for": "sample1", className: "mdl-textfield__label" },
	                        "Office"
	                    ),
	                    React.createElement(
	                        "ul",
	                        { "for": "sample1", className: "mdl-menu mdl-menu--bottom-left mdl-js-menu" },
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Office 1, Malborska St. 51"
	                        ),
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Office 2, Szwedzki Pl. 3"
	                        )
	                    )
	                )
	            ),
	            React.createElement("br", null),
	            React.createElement(
	                "button",
	                { className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-long-btn" },
	                React.createElement(
	                    "i",
	                    { className: "material-icons" },
	                    "search"
	                ),
	                "Submit Search"
	            )
	        )
	    );
	};
	
	exports.default = SearchPanelForm;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 15); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SearchPanelForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 18)(module)))

/***/ },

/***/ 197:
/*!************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/index.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 13), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 14), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	var _SearchPanelForm = __webpack_require__(/*! ./SearchPanelForm */ 195);
	
	var _SearchPanelForm2 = _interopRequireDefault(_SearchPanelForm);
	
	var _SearchPanelFloorList = __webpack_require__(/*! ./SearchPanelFloorList */ 194);
	
	var _SearchPanelFloorList2 = _interopRequireDefault(_SearchPanelFloorList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanel = function SearchPanel(props) {
	
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(_SearchPanelForm2.default, null),
	        React.createElement(_SearchPanelFloorList2.default, null)
	    );
	};
	
	exports.default = SearchPanel;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 15); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 18)(module)))

/***/ }

})
//# sourceMappingURL=0.2b4e58237b0333da5d7a.hot-update.js.map