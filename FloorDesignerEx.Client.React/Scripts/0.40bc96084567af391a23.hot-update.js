webpackHotUpdate(0,{

/***/ 207:
/*!**********************************************************!*\
  !*** ./app/components/designerScreen/toolbar/toolbar.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 34), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 35), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 19), React = __webpack_require__(/*! react */ 16); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 16);
	
	var React = _interopRequireWildcard(_react);
	
	var _jquery = __webpack_require__(/*! jquery */ 185);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _logo = __webpack_require__(/*! ../../../assets/logo/logo.png */ 188);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _searchPanel = __webpack_require__(/*! ../searchPanel/searchPanel */ 195);
	
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
	        /*every state change rerenders component so it would rerender 
	        component every time when zoom is changed and it wouldslow down
	        app every time zoom is changed*/
	        _this.stageScaleNum = 1;
	
	        _this.state = {
	            stageScaleNumMin: 0.2,
	            stageScaleNumMax: 2,
	            currentZoom: 1,
	            floorData: {}
	        };
	
	        _this.onZoomStage = _this.props.currentZoom;
	        _this.onZoomStage(_this.stageScaleNum);
	
	        //this.onZoomStage = this.onZoomStage.bind(this);
	        _this.onZoomSliderChange = _this.onZoomSliderChange.bind(_this);
	        _this.onZoomInClick = _this.onZoomInClick.bind(_this);
	        _this.onZoomOutClick = _this.onZoomOutClick.bind(_this);
	        _this.onZoomResetClick = _this.onZoomResetClick.bind(_this);
	        _this.onUploadPhotoClick = _this.onUploadPhotoClick.bind(_this);
	        _this.onSaveFloorClick = _this.onSaveFloorClick.bind(_this);
	        _this.onFloorFinderClick = _this.onFloorFinderClick.bind(_this);
	        return _this;
	    }
	
	    /**
	    * Btns Actions START
	    */
	
	    /*SLIDER*/
	
	
	    _createClass(Toolbar, [{
	        key: 'onZoomSliderChange',
	        value: function onZoomSliderChange(evt) {
	            //if (this.debugMode) console.log("onZoomSliderChange", evt)
	            this.stageScaleNum = evt.target.value * 0.1 + 1;
	            this.onZoomStage(this.stageScaleNum);
	            //document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	        }
	
	        /*ZOOM IN BTN*/
	
	    }, {
	        key: 'onZoomInClick',
	        value: function onZoomInClick(evt) {
	            if (this.debugMode) console.log("onZoomIn", evt);
	
	            this.stageScaleNum += 0.1;
	            this.onZoomStage(this.stageScaleNum);
	            document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	        }
	
	        /*ZOOM OUT BTN*/
	        //$('#zoom-out-floor-btn').click(function () { })
	
	    }, {
	        key: 'onZoomOutClick',
	        value: function onZoomOutClick(evt) {
	            if (this.debugMode) console.log("onZoomOutClick", evt);
	
	            this.stageScaleNum -= 0.1;
	            this.onZoomStage(this.stageScaleNum);
	            document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	        }
	
	        /*ZOOM RESET BTN*/
	
	    }, {
	        key: 'onZoomResetClick',
	        value: function onZoomResetClick(evt) {
	
	            if (this.debugMode) console.log("onZoomResetClick", evt);
	
	            this.stageScaleNum = 1;
	            this.onZoomStage(this.stageScaleNum);
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 36); if (makeExportsHot(module, __webpack_require__(/*! react */ 16))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "toolbar.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 57)(module)))

/***/ }

})
//# sourceMappingURL=0.40bc96084567af391a23.hot-update.js.map