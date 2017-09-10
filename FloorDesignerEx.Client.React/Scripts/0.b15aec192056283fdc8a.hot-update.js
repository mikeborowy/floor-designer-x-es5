webpackHotUpdate(0,{

/***/ 68:
/*!**********************************************************!*\
  !*** ./app/components/designerScreen/toolbar/toolbar.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 7), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 8), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _jquery = __webpack_require__(/*! jquery */ 31);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _gsap = __webpack_require__(/*! gsap */ 40);
	
	var _logo = __webpack_require__(/*! ../../../assets/logo/logo.png */ 112);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _searchPanel = __webpack_require__(/*! ../searchPanel/searchPanel */ 131);
	
	var _searchPanel2 = _interopRequireDefault(_searchPanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Toolbar = function (_React$Component) {
	    _inherits(Toolbar, _React$Component);
	
	    function Toolbar(props) {
	        _classCallCheck(this, Toolbar);
	
	        var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));
	
	        _this.debugMode = false; //this.props.appCfg.debugMode;
	        _this.stageScaleNum = 1;
	        _this.stageScaleNumMin = 0.2;
	        _this.stageScaleNumMax = 2;
	
	        _this.state = {
	            floorData: {}
	        };
	
	        _this.onZoomStage = _this.onZoomStage.bind(_this);
	        _this.onZoomSliderChange = _this.onZoomSliderChange.bind(_this);
	        _this.onZoomInClick = _this.onZoomInClick.bind(_this);
	        _this.onZoomOutClick = _this.onZoomOutClick.bind(_this);
	        _this.onZoomResetClick = _this.onZoomResetClick.bind(_this);
	        _this.onUploadPhotoClick = _this.onUploadPhotoClick.bind(_this);
	        _this.onSaveFloorClick = _this.onSaveFloorClick.bind(_this);
	        _this.onFloorFinderClick = _this.onFloorFinderClick.bind(_this);
	        return _this;
	    }
	
	    /*ZOOM START*/
	
	
	    _createClass(Toolbar, [{
	        key: 'onZoomStage',
	        value: function onZoomStage(evt) {
	
	            this.stageScaleNum = evt.detail;
	            document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	        }
	        /*ZOOM END*/
	
	        /**
	        * Btns Actions START
	        */
	
	        /*SLIDER*/
	
	    }, {
	        key: 'onZoomSliderChange',
	        value: function onZoomSliderChange(evt) {
	            if (this.debugMode) console.log("onZoomSliderChange", evt);
	
	            this.stageScaleNum = evt.target.value * 0.1 + 1;
	            this.props.onZoomUpdate(this.stageScaleNum);
	
	            var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
	            window.dispatchEvent(event);
	            document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	        }
	
	        /*ZOOM IN BTN*/
	
	    }, {
	        key: 'onZoomInClick',
	        value: function onZoomInClick(evt) {
	            if (this.debugMode) console.log("onZoomIn", evt);
	
	            if (this.stageScaleNum < this.stageScaleNumMax) this.stageScaleNum += 0.1;
	
	            this.props.onZoomUpdate(this.stageScaleNum);
	
	            var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
	            window.dispatchEvent(event);
	            document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	        }
	
	        /*ZOOM OUT BTN*/
	        //$('#zoom-out-floor-btn').click(function () { })
	
	    }, {
	        key: 'onZoomOutClick',
	        value: function onZoomOutClick(evt) {
	            if (this.debugMode) console.log("onZoomOutClick", evt);
	
	            if (this.stageScaleNum > this.stageScaleNumMin) this.stageScaleNum -= 0.1;
	
	            this.props.onZoomUpdate(this.stageScaleNum);
	
	            var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
	            window.dispatchEvent(event);
	            document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	        }
	
	        /*ZOOM RESET BTN*/
	
	    }, {
	        key: 'onZoomResetClick',
	        value: function onZoomResetClick(evt) {
	
	            if (this.debugMode) console.log("onZoomResetClick", evt);
	
	            this.stageScaleNum = 1;
	            this.props.onZoomUpdate(this.stageScaleNum);
	
	            var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
	            window.dispatchEvent(event);
	            document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	        }
	    }, {
	        key: 'onUploadPhotoClick',
	
	
	        /*UPLOAD START*/
	        value: function onUploadPhotoClick(evt) {
	
	            if (this.debugMode) console.log("onUploadPhotoClick", evt);
	        }
	
	        /*SAVE START*/
	
	    }, {
	        key: 'onSaveFloorClick',
	        value: function onSaveFloorClick(evt) {
	
	            if (this.debugMode) console.log("onSaveFloorClick", evt);
	
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
	
	    }, {
	        key: 'onFloorFinderClick',
	        value: function onFloorFinderClick(evt) {
	
	            if (this.debugMode) console.log("onFloorFinderClick", evt);
	            var url = (0, _jquery2.default)(this).data('url');
	
	            //window.location.href = url;
	        }
	
	        /**
	         * Btns Actions END
	         */
	
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            //window.addEventListener("resize", this.updateDimensions);
	            //$('#zoom-slider').on('input', function () {
	
	            //    this.stageScaleNum = (this.value * 0.1) + 1;
	            //    //this.onZoomStage.bind(this);
	            //});
	
	            window.addEventListener('zoomOccured', this.onZoomStage);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            //window.removeEventListener("resize", this.updateDimensions);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
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
	                                        {
	                                            id: 'zoom-out-floor-btn',
	                                            onClick: this.onZoomOutClick,
	                                            className: 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button' },
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
	                                        onchange: 'function(evt){OnSliderChange(evt.target.value)}',
	                                        onChange: this.onZoomSliderChange
	                                    }),
	                                    React.createElement(
	                                        'button',
	                                        {
	                                            id: 'zoom-in-floor-btn',
	                                            onClick: this.onZoomInClick,
	                                            className: 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button' },
	                                        React.createElement(
	                                            'i',
	                                            { className: 'material-icons' },
	                                            'zoom_in'
	                                        )
	                                    )
	                                ),
	                                React.createElement(
	                                    'button',
	                                    {
	                                        id: 'zoom-reset-floor-btn',
	                                        onClick: this.onZoomResetClick,
	                                        className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
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
	                                    {
	                                        id: 'upload-floor-bgnd-btn',
	                                        onClick: this.onUploadPhotoClick,
	                                        className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
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
	                                    {
	                                        id: 'save-floor-btn',
	                                        onClick: this.onSaveFloorClick,
	                                        className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
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
	                                    {
	                                        id: 'floor-finder-btn',
	                                        onClick: this.onFloorFinderClick,
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
	                    React.createElement(_searchPanel2.default, null)
	                )
	            );
	        }
	    }]);
	
	    return Toolbar;
	}(React.Component);
	
	Toolbar.displayName = "Toolbar";
	
	exports.default = Toolbar;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 9); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "toolbar.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 10)(module)))

/***/ },

/***/ 112:
/*!**********************************!*\
  !*** ./app/assets/logo/logo.png ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../Images/logo.png";

/***/ },

/***/ 131:
/*!******************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/searchPanel.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 7), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 8), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _searchPanelForm = __webpack_require__(/*! ./searchPanelForm */ 135);
	
	var _searchPanelForm2 = _interopRequireDefault(_searchPanelForm);
	
	var _searchPanelFormResult = __webpack_require__(/*! ./searchPanelFormResult */ 136);
	
	var _searchPanelFormResult2 = _interopRequireDefault(_searchPanelFormResult);
	
	var _searchPanelCreateFloor = __webpack_require__(/*! ./searchPanelCreateFloor */ 132);
	
	var _searchPanelCreateFloor2 = _interopRequireDefault(_searchPanelCreateFloor);
	
	var _searchPanelFloorList = __webpack_require__(/*! ./searchPanelFloorList */ 133);
	
	var _searchPanelFloorList2 = _interopRequireDefault(_searchPanelFloorList);
	
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
	
	        _this.state = {
	            floorList: [{
	                id: 1,
	                name: "Floor-1",
	                width: 12,
	                height: 12
	            }]
	        };
	        return _this;
	    }
	
	    _createClass(SearchPanel, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
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
	                React.createElement(
	                    'group',
	                    { className: 'designer-toolbar-group' },
	                    React.createElement(_searchPanelForm2.default, null)
	                ),
	                React.createElement(
	                    'group',
	                    { className: 'designer-toolbar-group' },
	                    React.createElement(_searchPanelFormResult2.default, null),
	                    React.createElement(_searchPanelCreateFloor2.default, null),
	                    React.createElement(_searchPanelFloorList2.default, { floorList: this.state.floorList })
	                )
	            );
	        }
	    }]);
	
	    return SearchPanel;
	}(React.Component);
	
	exports.default = SearchPanel;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 9); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "searchPanel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 10)(module)))

/***/ },

/***/ 132:
/*!*****************************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/searchPanelCreateFloor.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 7), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 8), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelCreateFloor = function SearchPanelCreateFloor() {
	
	    return React.createElement(
	        "div",
	        { id: "floor-create", className: "mdl-list__item mdl-list__item--two-line" },
	        React.createElement(
	            "div",
	            { className: "mdl-list__item-primary-content" },
	            React.createElement(
	                "form",
	                { id: "floor-create-form" },
	                React.createElement(
	                    "span",
	                    null,
	                    "Floor:"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label" },
	                    React.createElement("input", { className: "mdl-textfield__input floor-textfield", type: "text", id: "floor-num", pattern: "^[0-9]*" }),
	                    React.createElement(
	                        "label",
	                        { className: "mdl-textfield__label floor-textfield", "for": "floor-num" },
	                        "Number"
	                    )
	                ),
	                React.createElement(
	                    "span",
	                    null,
	                    "Width:"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label" },
	                    React.createElement("input", { className: "mdl-textfield__input floor-textfield", type: "text", id: "floor-width", pattern: "^[0-9]*" }),
	                    React.createElement(
	                        "label",
	                        { className: "mdl-textfield__label floor-textfield", "for": "floor-width" },
	                        "Meters"
	                    )
	                ),
	                React.createElement(
	                    "span",
	                    null,
	                    "Height:"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label" },
	                    React.createElement("input", { className: "mdl-textfield__input floor-textfield", type: "text", id: "floor-height", pattern: "^[0-9]*" }),
	                    React.createElement(
	                        "label",
	                        { className: "mdl-textfield__label floor-textfield", "for": "floor-height" },
	                        "Meters"
	                    )
	                )
	            )
	        ),
	        React.createElement(
	            "span",
	            { className: "mdl-list__item-secondary-content" },
	            React.createElement(
	                "button",
	                { id: "add-floor-btn", type: "submit", className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-toolbar-button" },
	                React.createElement(
	                    "i",
	                    { className: "material-icons" },
	                    "add"
	                ),
	                "Floor"
	            )
	        )
	    );
	};
	
	exports.default = SearchPanelCreateFloor;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 9); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "searchPanelCreateFloor.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 10)(module)))

/***/ },

/***/ 133:
/*!***************************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/searchPanelFloorList.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 7), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 8), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _searchPanelFloorListItem = __webpack_require__(/*! ./searchPanelFloorListItem */ 134);
	
	var _searchPanelFloorListItem2 = _interopRequireDefault(_searchPanelFloorListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelFloorList = function SearchPanelFloorList(props) {
	    var floorList = props.floorList;
	
	
	    return React.createElement(
	        'ul',
	        { id: 'floors-list', className: 'demo-list-action mdl-list' },
	        floorList.map(function (floorItem) {
	            return React.createElement(_searchPanelFloorListItem2.default, { key: floorItem.id, floor: floorItem });
	        })
	    );
	};
	
	exports.default = SearchPanelFloorList;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 9); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "searchPanelFloorList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 10)(module)))

/***/ },

/***/ 134:
/*!*******************************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/searchPanelFloorListItem.js ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 7), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 8), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelFloorListItem = function SearchPanelFloorListItem(props) {
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 9); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "searchPanelFloorListItem.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 10)(module)))

/***/ },

/***/ 135:
/*!**********************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/searchPanelForm.js ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 7), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 8), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelForm = function SearchPanelForm() {
	
	    return React.createElement(
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
	    );
	};
	
	exports.default = SearchPanelForm;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 9); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "searchPanelForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 10)(module)))

/***/ },

/***/ 136:
/*!****************************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/searchPanelFormResult.js ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 7), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 8), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelFormResult = function SearchPanelFormResult() {
	
	    return React.createElement(
	        "div",
	        { id: "search-panel-form-result", className: "mdl-list__item mdl-list__item--two-line" },
	        React.createElement(
	            "span",
	            { className: "mdl-list__item-primary-content" },
	            React.createElement(
	                "i",
	                { className: "material-icons mdl-list__item-avatar" },
	                "business"
	            ),
	            React.createElement(
	                "span",
	                null,
	                "Office 1"
	            ),
	            React.createElement(
	                "span",
	                { className: "mdl-list__item-sub-title" },
	                "Malborska St. 51, Warsaw 03-234"
	            )
	        )
	    );
	};
	
	exports.default = SearchPanelFormResult;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 9); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "searchPanelFormResult.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 10)(module)))

/***/ },

/***/ 140:
/*!******************************************************!*\
  !*** ./app/components/designerScreen/stage/stage.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 7), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 8), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _jquery = __webpack_require__(/*! jquery */ 31);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _gsap = __webpack_require__(/*! gsap */ 40);
	
	var _Draggable = __webpack_require__(/*! gsap/Draggable */ 117);
	
	var _Draggable2 = _interopRequireDefault(_Draggable);
	
	var _ScrollToPlugin = __webpack_require__(/*! gsap/ScrollToPlugin */ 118);
	
	var _ScrollToPlugin2 = _interopRequireDefault(_ScrollToPlugin);
	
	var _roomsCfg = __webpack_require__(/*! ../common/roomsCfg */ 129);
	
	var _roomsCfg2 = _interopRequireDefault(_roomsCfg);
	
	var _bgnd_12x = __webpack_require__(/*! ../../../assets/blueprints/bgnd_12x10.jpg */ 111);
	
	var _bgnd_12x2 = _interopRequireDefault(_bgnd_12x);
	
	var _stageBoard = __webpack_require__(/*! ./stageBoard */ 141);
	
	var _stageBoard2 = _interopRequireDefault(_stageBoard);
	
	var _stageBoardHighlight = __webpack_require__(/*! ./stageBoardHighlight */ 142);
	
	var _stageBoardHighlight2 = _interopRequireDefault(_stageBoardHighlight);
	
	var _toolbar = __webpack_require__(/*! ../toolbar/toolbar */ 68);
	
	var _toolbar2 = _interopRequireDefault(_toolbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //react libs
	
	//3rd party libs
	
	//cfg files
	
	//components
	
	
	var Stage = function (_React$Component) {
	    _inherits(Stage, _React$Component);
	
	    function Stage(props) {
	        _classCallCheck(this, Stage);
	
	        var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this, props));
	
	        _this.zoomMouse = false;
	        _this.dragStage = false;
	        _this.stageScaleNum = 1;
	        _this.stageScaleNumMin = 0.2;
	        _this.stageScaleNumMax = 2;
	
	        _this.state = {
	            floorCfg: {
	                id: 4,
	                officeId: 1,
	                name: "Floor 1",
	                width: 15,
	                height: 10,
	                xpos: 0,
	                ypos: 0,
	                image: null,
	                rooms: []
	            },
	            roomCfg: {
	                gridCellWidth: (0, _roomsCfg2.default)().CELL_WIDTH,
	                gridCellHeight: (0, _roomsCfg2.default)().CELL_HEIGHT,
	                shapeSizes: (0, _roomsCfg2.default)().SHAPES_SIZES,
	                paddingLeft: (0, _roomsCfg2.default)().SHAPE_CFG,
	                paddingTop: (0, _roomsCfg2.default)().SHAPE_CFG.PADDING_TOP,
	                itemBorderSize: (0, _roomsCfg2.default)().SHAPE_CFG.BORDER_SIZE
	            },
	            stageCfg: {
	                stageBoardsList: []
	            },
	            loadedItems: [],
	            imgPath: _bgnd_12x2.default,
	            draggedObj: null
	
	            //bind functions to this class
	        };_this.stageInit = _this.stageInit.bind(_this);
	        _this.initStageAsDraggable = _this.initStageAsDraggable.bind(_this);
	        _this.createGrid = _this.createGrid.bind(_this);
	        _this.clearStage = _this.clearStage.bind(_this);
	        _this.updateDimensions = _this.updateDimensions.bind(_this);
	        _this.onZoomStage = _this.onZoomStage.bind(_this);
	        _this.zoomStage = _this.zoomStage.bind(_this);
	        _this.onMouseWheel = _this.onMouseWheel.bind(_this);
	        _this.onKeyDown = _this.onKeyDown.bind(_this);
	        _this.onKeyUp = _this.onKeyUp.bind(_this);
	        return _this;
	    }
	
	    _createClass(Stage, [{
	        key: 'stageInit',
	        value: function stageInit() {
	            var _state = this.state,
	                floorCfg = _state.floorCfg,
	                roomCfg = _state.roomCfg;
	
	
	            (0, _jquery2.default)('#stage').width(floorCfg.width * roomCfg.gridCellWidth);
	            (0, _jquery2.default)('#stage').height(floorCfg.height * roomCfg.gridCellHeight);
	
	            (0, _jquery2.default)('#stage-items-container').width(floorCfg.width * roomCfg.gridCellWidth);
	            (0, _jquery2.default)('#stage-items-container').height(floorCfg.height * roomCfg.gridCellHeight);
	
	            //const img = $('#stage').find('img');
	            //img.attr('src', floorCfg.image);
	            //img.width(floorCfg.width * roomCfg.gridCellWidth);
	            //img.height(floorCfg.height * roomCfg.gridCellHeight);
	        }
	    }, {
	        key: 'createGrid',
	        value: function createGrid() {
	            var stageBoardsList = this.state.stageBoardsList;
	            var _state$roomCfg = this.state.roomCfg,
	                gridCellWidth = _state$roomCfg.gridCellWidth,
	                gridCellHeight = _state$roomCfg.gridCellHeight;
	
	
	            var gridColumns = this.state.floorCfg.width;
	            var gridRows = this.state.floorCfg.height;
	            var list = [];
	
	            var w = 1;
	            var h = 1;
	
	            for (var i = 0; i < gridRows * gridColumns; i++) {
	
	                var x = i * gridCellWidth % (gridColumns * gridCellWidth);
	                var y = Math.floor(i / gridColumns) * gridCellHeight;
	
	                list.push({
	                    id: i,
	                    width: gridCellWidth * w,
	                    height: gridCellHeight * h,
	                    top: y,
	                    left: x
	                });
	
	                this.setState({
	                    stageCfg: {
	                        stageBoardsList: list
	                    }
	                });
	            }
	        }
	    }, {
	        key: 'initStageAsDraggable',
	        value: function initStageAsDraggable() {
	
	            var draggableObj = _Draggable2.default.create((0, _jquery2.default)("#stage-container"), {
	                type: "scroll",
	                edgeResistance: 1,
	                throwProps: true,
	                lockAxis: true
	            });
	
	            _Draggable2.default.get("#stage-container").disable();
	        }
	    }, {
	        key: 'loadItems',
	        value: function loadItems() {
	
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
	        }
	    }, {
	        key: 'clearStage',
	        value: function clearStage() {
	
	            (0, _jquery2.default)('#stage-grid-bgnd').html('');
	            (0, _jquery2.default)('#stage-grid-live').html('');
	            (0, _jquery2.default)('#stage-items-container').html('');
	        }
	    }, {
	        key: 'findValueByKey',
	        value: function findValueByKey(array, key) {
	
	            for (var i = 0; i < array.length; i++) {
	
	                if (array[i][key]) {
	
	                    return array[i][key];
	                }
	            }
	            return null;
	        }
	    }, {
	        key: 'updateDimensions',
	        value: function updateDimensions() {
	
	            var toolbarHeight = (0, _jquery2.default)("#designer-toolbar").height();
	            var windowWidth = (0, _jquery2.default)(window).width();
	            var windowHeight = (0, _jquery2.default)(window).height();
	
	            (0, _jquery2.default)("#stage-container").height(windowHeight - toolbarHeight);
	
	            var parentHeight = (0, _jquery2.default)("#stage-container").height();
	            var parentWidth = (0, _jquery2.default)("#stage-container").width();
	
	            if ((0, _jquery2.default)("#stage").height() <= (0, _jquery2.default)("#stage-container").height()) {
	
	                var posY = parentHeight / 2 - (0, _jquery2.default)("#stage").height() / 2;
	                _gsap.TweenMax.to((0, _jquery2.default)("#stage"), 0, { y: posY });
	            } else {
	                _gsap.TweenMax.to((0, _jquery2.default)("#stage"), 0, { y: 0 });
	            }
	
	            if ((0, _jquery2.default)("#stage").width() <= (0, _jquery2.default)("#stage-container").width()) {
	                var posX = parentWidth / 2 - (0, _jquery2.default)("#stage").width() / 2;
	                _gsap.TweenMax.to((0, _jquery2.default)("#stage"), 0, { x: posX });
	            } else {
	                _gsap.TweenMax.to((0, _jquery2.default)("#stage"), 0, { x: 0 });
	            }
	        }
	
	        /*ZOOM START*/
	
	    }, {
	        key: 'onZoomStage',
	        value: function onZoomStage(evt) {
	            this.stageScaleNum = evt.detail;
	            this.zoomStage();
	        }
	    }, {
	        key: 'zoomStage',
	        value: function zoomStage() {
	
	            var stage = (0, _jquery2.default)('#stage');
	            var stageContainer = (0, _jquery2.default)('#stage-container');
	
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
	
	            _gsap.TweenMax.to(stage, 0.3, {
	                scaleX: this.stageScaleNum,
	                scaleY: this.stageScaleNum
	            });
	
	            var posX = stageContainer.width() / 2 - stage.width() / 2;
	            var stageWidthAfterScale = stage.width() * this.stageScaleNum;
	
	            var posY = stageContainer.height() / 2 - stage.height() / 2;
	            var stageHeightAfterScale = stage.height() * this.stageScaleNum;
	
	            //First for horizontal scale scroll issue
	            //check if scaled room width is bigger than room conatiner
	            //if true align to left
	            if (stageWidthAfterScale >= stageContainer.width()) {
	                _gsap.TweenMax.set(stage, {
	                    transformOrigin: "0 50%",
	                    x: 0,
	                    y: posY
	                });
	
	                //then check if scaled room height is bigger than room conatiner 
	                //and align to top
	                if (stageHeightAfterScale >= stageContainer.height()) {
	                    _gsap.TweenMax.set(stage, {
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
	                    _gsap.TweenMax.set(stage, {
	                        transformOrigin: "50% 0%",
	                        x: posX,
	                        y: 0
	                    });
	
	                    //then check if scaled room width is bigger than room conatiner 
	                    //and align to left
	                    if (stageWidthAfterScale >= stageContainer.width()) {
	                        _gsap.TweenMax.set(stage, {
	                            transformOrigin: "0 0",
	                            x: 0,
	                            y: 0
	                        });
	                    }
	                }
	                //otherwise appply regular scale with centerd point
	                else {
	                        _gsap.TweenMax.set(stage, {
	                            transformOrigin: "50% 50%",
	                            x: posX,
	                            y: posY
	                        });
	                    }
	        }
	    }, {
	        key: 'onMouseWheel',
	        value: function onMouseWheel(evt) {
	
	            if (this.zoomMouse) {
	                var delta = void 0;
	
	                if (evt.wheelDelta !== undefined) delta = evt.wheelDelta;else delta = evt.deltaY * -1;
	
	                if (delta > 0) {
	                    this.stageScaleNum += 0.1;
	                } else {
	                    this.stageScaleNum -= 0.1;
	                }
	
	                var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
	                window.dispatchEvent(event);
	                this.zoomStage();
	
	                document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	                //$("#zoom-slider").get(0).MaterialTextfield.change((stageScaleNum - 1) * 10);
	            }
	        }
	        /*ZOOM END*/
	
	        /*ON KEY UP/DOWN START*/
	
	    }, {
	        key: 'onKeyDown',
	        value: function onKeyDown(evt) {
	
	            //zoom with "Z"
	            if (evt.keyCode === 90) {
	
	                if (this.zoomMouse === false) {
	
	                    this.zoomMouse = true;
	                    var stageContainer = (0, _jquery2.default)("#stage-container");
	                    stageContainer.css({ "overflow-x": "hidden" });
	                    stageContainer.css({ "overflow-y": "hidden" });
	                }
	            }
	
	            //drag stage with "X"
	            if (evt.keyCode === 88) {
	
	                if (this.dragStage === false) {
	                    this.dragStage = true;
	                    _Draggable2.default.get("#stage-container").enable();
	                }
	            }
	        }
	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(evt) {
	
	            //zoom with "Z"
	            if (evt.keyCode === 90) {
	
	                if (this.zoomMouse === true) {
	
	                    this.zoomMouse = false;
	                    var stageContainer = (0, _jquery2.default)("#stage-container");
	                    (0, _jquery2.default)("#stage-container").css({ "overflow-x": "auto" });
	                    (0, _jquery2.default)("#stage-container").css({ "overflow-y": "auto" });
	                }
	            }
	
	            //drag stage with "X"
	            if (evt.keyCode === 88) {
	
	                if (this.dragStage === true) {
	                    this.dragStage = false;
	                    if ((0, _jquery2.default)('#stage-blocker').length > 0) (0, _jquery2.default)('#stage-blocker').remove();
	                    _Draggable2.default.get("#stage-container").disable();
	                }
	            }
	        }
	        /*ON KEY UP/DOWN END*/
	
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {}
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            console.log("zoom from update comp", this.props.zoom);
	            /*every rerender slows down animation
	             *so it's better to use event listeners
	             */
	            //this.onZoomStage(this.props.zoom);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	
	            this.stageInit();
	            this.createGrid();
	            this.initStageAsDraggable();
	            this.updateDimensions();
	
	            window.addEventListener("resize", this.updateDimensions);
	            window.addEventListener('zoomOccured', this.onZoomStage);
	            window.addEventListener('wheel', this.onMouseWheel);
	            window.addEventListener("keydown", this.onKeyDown);
	            window.addEventListener("keyup", this.onKeyUp);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener("resize", this.updateDimensions);
	            window.removeEventListener('zoomOccured', this.onZoomStage);
	            window.removeEventListener('wheel', this.onMouseWheel);
	            window.removeEventListener("keydown", this.onKeyDown);
	            window.removeEventListener("keyup", this.onKeyUp);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var stageBoardsList = this.state.stageCfg.stageBoardsList;
	
	
	            return React.createElement(
	                'div',
	                { id: 'stage-container' },
	                React.createElement('div', { id: 'stage-top' }),
	                React.createElement(
	                    'div',
	                    { id: 'stage' },
	                    React.createElement('img', { id: 'stage-bgnd', src: this.state.imgPath }),
	                    React.createElement(
	                        'div',
	                        { id: 'stage-grid-bgnd' },
	                        stageBoardsList.map(function (boardItem) {
	
	                            return React.createElement(_stageBoard2.default, {
	                                key: boardItem.id,
	                                id: boardItem.id,
	                                width: boardItem.width,
	                                height: boardItem.height,
	                                top: boardItem.top,
	                                left: boardItem.left
	                            });
	                        })
	                    ),
	                    React.createElement(
	                        'div',
	                        { id: 'stage-grid-live' },
	                        stageBoardsList.map(function (boardItem) {
	
	                            return React.createElement(_stageBoardHighlight2.default, {
	                                key: boardItem.id,
	                                id: boardItem.id,
	                                width: boardItem.width,
	                                height: boardItem.height,
	                                top: boardItem.top,
	                                left: boardItem.left
	                            });
	                        })
	                    ),
	                    React.createElement('div', { id: 'stage-items-container' })
	                ),
	                React.createElement('div', { id: 'stage-bottom' })
	            );
	        }
	    }]);
	
	    return Stage;
	}(React.Component);
	
	exports.default = Stage;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 9); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "stage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 10)(module)))

/***/ },

/***/ 143:
/*!**************************************************************!*\
  !*** ./app/components/designerScreen/workspace/workspace.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 7), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 8), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _jquery = __webpack_require__(/*! jquery */ 31);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _toolbar = __webpack_require__(/*! ../toolbar/toolbar */ 68);
	
	var _toolbar2 = _interopRequireDefault(_toolbar);
	
	var _shapesPanel = __webpack_require__(/*! ../shapesPanel/shapesPanel */ 138);
	
	var _shapesPanel2 = _interopRequireDefault(_shapesPanel);
	
	var _stage = __webpack_require__(/*! ../stage/stage */ 140);
	
	var _stage2 = _interopRequireDefault(_stage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Workspace = function (_React$Component) {
	    _inherits(Workspace, _React$Component);
	
	    function Workspace(props) {
	        _classCallCheck(this, Workspace);
	
	        var _this = _possibleConstructorReturn(this, (Workspace.__proto__ || Object.getPrototypeOf(Workspace)).call(this, props));
	
	        _this.zoomMouse = false;
	        _this.dragStage = false;
	        _this.state = {
	            zoom: 1
	        };
	        _this.stageScaleNum = 1;
	        _this.stageScaleNumMin = 0.2;
	        _this.stageScaleNumMax = 2;
	
	        _this.onZoomStage = _this.onZoomStage.bind(_this);
	        _this.zoomStage = _this.zoomStage.bind(_this);
	        _this.onMouseWheel = _this.onMouseWheel.bind(_this);
	        _this.onKeyDown = _this.onKeyDown.bind(_this);
	        _this.onKeyUp = _this.onKeyUp.bind(_this);
	        return _this;
	    }
	
	    _createClass(Workspace, [{
	        key: 'updateDimensions',
	        value: function updateDimensions() {
	
	            var toolbarHeight = (0, _jquery2.default)("#designer-toolbar").height();
	            var windowWidth = (0, _jquery2.default)(window).width();
	            var windowHeight = (0, _jquery2.default)(window).height();
	            /*shapes panel*/
	            (0, _jquery2.default)("#shapes-panel").height(windowHeight - toolbarHeight);
	
	            (0, _jquery2.default)("#stage-container").height(windowHeight - toolbarHeight);
	            /*stage*/
	            var parentHeight = (0, _jquery2.default)("#stage-container").height();
	            var parentWidth = (0, _jquery2.default)("#stage-container").width();
	
	            if ((0, _jquery2.default)("#stage").height() <= (0, _jquery2.default)("#stage-container").height()) {
	
	                var posY = parentHeight / 2 - (0, _jquery2.default)("#stage").height() / 2;
	                TweenMax.to((0, _jquery2.default)("#stage"), 0, { y: posY });
	            } else {
	                TweenMax.to((0, _jquery2.default)("#stage"), 0, { y: 0 });
	            }
	
	            if ((0, _jquery2.default)("#stage").width() <= (0, _jquery2.default)("#stage-container").width()) {
	                var posX = parentWidth / 2 - (0, _jquery2.default)("#stage").width() / 2;
	                TweenMax.to((0, _jquery2.default)("#stage"), 0, { x: posX });
	            } else {
	                TweenMax.to((0, _jquery2.default)("#stage"), 0, { x: 0 });
	            }
	        }
	
	        /*ZOOM START*/
	
	    }, {
	        key: 'onZoomStage',
	        value: function onZoomStage(zoom) {
	
	            this.stageScaleNum = zoom;
	            this.zoomStage();
	        }
	    }, {
	        key: 'zoomStage',
	        value: function zoomStage() {
	
	            var stage = (0, _jquery2.default)('#stage');
	            var stageContainer = (0, _jquery2.default)('#stage-container');
	
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
	                scaleY: this.stageScaleNum
	            });
	
	            var posX = stageContainer.width() / 2 - stage.width() / 2;
	            var stageWidthAfterScale = stage.width() * this.stageScaleNum;
	
	            var posY = stageContainer.height() / 2 - stage.height() / 2;
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
	
	            this.setState({ zoom: this.stageScaleNum });
	        }
	    }, {
	        key: 'onMouseWheel',
	        value: function onMouseWheel(evt) {
	
	            if (this.zoomMouse) {
	                var delta = void 0;
	
	                if (evt.wheelDelta !== undefined) delta = evt.wheelDelta;else delta = evt.deltaY * -1;
	
	                if (delta > 0) {
	                    this.stageScaleNum += 0.1;
	                } else {
	                    this.stageScaleNum -= 0.1;
	                }
	
	                //var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
	                //window.dispatchEvent(event);
	
	                this.zoomStage();
	
	                document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	                //$("#zoom-slider").get(0).MaterialTextfield.change((stageScaleNum - 1) * 10);
	            }
	        }
	        /*ZOOM END*/
	
	        /*ON KEY UP/DOWN START*/
	
	    }, {
	        key: 'onKeyDown',
	        value: function onKeyDown(evt) {
	
	            //zoom with "Z"
	            if (evt.keyCode === 90) {
	                if (this.zoomMouse === false) {
	                    this.zoomMouse = true;
	                    var stageContainer = (0, _jquery2.default)("#stage-container");
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
	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(evt) {
	
	            //zoom with "Z"
	            if (evt.keyCode === 90) {
	
	                if (this.zoomMouse === true) {
	
	                    this.zoomMouse = false;
	                    var stageContainer = (0, _jquery2.default)("#stage-container");
	                    (0, _jquery2.default)("#stage-container").css({ "overflow-x": "auto" });
	                    (0, _jquery2.default)("#stage-container").css({ "overflow-y": "auto" });
	                }
	            }
	
	            //drag stage with "X"
	            if (evt.keyCode === 88) {
	
	                if (this.dragStage === true) {
	                    this.dragStage = false;
	                    if ((0, _jquery2.default)('#stage-blocker').length > 0) (0, _jquery2.default)('#stage-blocker').remove();
	                    Draggable.get("#stage-container").disable();
	                }
	            }
	        }
	        /*ON KEY UP/DOWN END*/
	
	        /*we get zoom value from toolbar and set in current comp state*/
	        //updateZoom(zoom) {
	        //    this.setState({zoom})
	        //}
	
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.updateDimensions();
	            window.addEventListener("resize", this.updateDimensions);
	            window.addEventListener('wheel', this.onMouseWheel);
	            window.addEventListener("keydown", this.onKeyDown);
	            window.addEventListener("keyup", this.onKeyUp);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener("resize", this.updateDimensions);
	            window.removeEventListener('wheel', this.onMouseWheel);
	            window.removeEventListener("keydown", this.onKeyDown);
	            window.removeEventListener("keyup", this.onKeyUp);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { id: 'designer-workspace' },
	                React.createElement(_toolbar2.default, {
	                    appCfg: this.props.appCfg,
	                    zoom: this.stageScaleNum,
	                    onZoomUpdate: this.onZoomStage
	                }),
	                React.createElement(_shapesPanel2.default, {
	                    appCfg: this.props.appCfg
	                }),
	                React.createElement(_stage2.default, {
	                    appCfg: this.props.appCfg,
	                    zoom: this.stageScaleNum,
	                    onZoomUpdate: this.onZoomStage
	                })
	            );
	        }
	    }]);
	
	    return Workspace;
	}(React.Component);
	
	Workspace.displayName = "Workspace";
	
	exports.default = Workspace;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 9); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "workspace.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 10)(module)))

/***/ }

})
//# sourceMappingURL=0.b15aec192056283fdc8a.hot-update.js.map