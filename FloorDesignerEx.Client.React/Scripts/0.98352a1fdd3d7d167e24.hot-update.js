webpackHotUpdate(0,{

/***/ 117:
/*!***********************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/form.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 12), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 13), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 14); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "form.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 16)(module)))

/***/ },

/***/ 118:
/*!******************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/searchPanel.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 12), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 13), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	var _form = __webpack_require__(/*! ./form */ 117);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _floorList = __webpack_require__(/*! ./floorList */ 192);
	
	var _floorList2 = _interopRequireDefault(_floorList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SearchPanel = function (_React$Component) {
	    _inherits(SearchPanel, _React$Component);
	
	    function SearchPanel(props) {
	        _classCallCheck(this, SearchPanel);
	
	        var _this = _possibleConstructorReturn(this, (SearchPanel.__proto__ || Object.getPrototypeOf(SearchPanel)).call(this, props));
	
	        _this.state = { floorList: [{ id: 1, name: "Floor-1", width: 12, height: 12 }] };
	        return _this;
	    }
	
	    _createClass(SearchPanel, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(_form2.default, null),
	                React.createElement(_floorList2.default, null)
	            );
	        }
	    }]);
	
	    return SearchPanel;
	}(React.Component);
	
	exports.default = SearchPanel;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 14); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "searchPanel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 16)(module)))

/***/ },

/***/ 121:
/*!**************************************************!*\
  !*** ./app/components/designerScreen/toolbar.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 12), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 13), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	var _logo = __webpack_require__(/*! ../../assets/logo/logo.png */ 105);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _searchPanel = __webpack_require__(/*! ./searchPanel/searchPanel */ 118);
	
	var _searchPanel2 = _interopRequireDefault(_searchPanel);
	
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
	                ),
	                React.createElement(_searchPanel2.default, null)
	            )
	        )
	    );
	};
	
	Toolbar.displayName = "Toolbar";
	
	exports.default = Toolbar;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 14); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "toolbar.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 16)(module)))

/***/ },

/***/ 192:
/*!****************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/floorList.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 12), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 13), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	var _florListItem = __webpack_require__(/*! ./florListItem */ 193);
	
	var _florListItem2 = _interopRequireDefault(_florListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelFloorList = function SearchPanelFloorList(props) {
	
	    var floorList = [{ id: 1, name: "Floor-1", width: 12, height: 12 }];
	
	    return React.createElement(
	        'ul',
	        { id: 'floors-list', className: 'demo-list-action mdl-list' },
	        floorList.map(function (floorItem) {
	            return React.createElement(_florListItem2.default, { key: floorItem.id, floor: floorItem });
	        })
	    );
	};
	
	exports.default = SearchPanelFloorList;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 14); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "floorList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 16)(module)))

/***/ },

/***/ 193:
/*!*******************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/florListItem.js ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 12), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 13), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelFloorListItem = function SearchPanelFloorListItem(props) {
	
	    console.log(props);
	    var floor = props.floor;
	
	
	    return React.createElement(
	        "li",
	        { id: floor.id, className: "mdl-list__item mdl-list-item-fixed floor-list-item", "data-width": floor.width, "data-height": floor.height },
	        React.createElement(
	            "div",
	            { className: "mdl-list__item-primary-content" },
	            React.createElement(
	                "div",
	                { "data-floor-id": floor.id, className: "floor-edit-btn" },
	                floor.name
	            )
	        ),
	        React.createElement(
	            "button",
	            { "data-floor-id": floor.id, className: "mdl-button mdl-js-button mdl-button--icon mdl-button-color-blue floor-delete-btn" },
	            React.createElement(
	                "i",
	                { className: "material-icons" },
	                "delete"
	            )
	        )
	    );
	};
	
	exports.default = SearchPanelFloorListItem;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 14); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "florListItem.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 16)(module)))

/***/ }

})
//# sourceMappingURL=0.98352a1fdd3d7d167e24.hot-update.js.map