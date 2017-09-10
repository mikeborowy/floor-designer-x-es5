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
	
	            //this.onZoomStage = this.onZoomStage.bind(this);
	        };_this.onZoomSliderChange = _this.onZoomSliderChange.bind(_this);
	        _this.onZoomInClick = _this.onZoomInClick.bind(_this);
	        _this.onZoomOutClick = _this.onZoomOutClick.bind(_this);
	        _this.onZoomResetClick = _this.onZoomResetClick.bind(_this);
	        _this.onUploadPhotoClick = _this.onUploadPhotoClick.bind(_this);
	        _this.onSaveFloorClick = _this.onSaveFloorClick.bind(_this);
	        _this.onFloorFinderClick = _this.onFloorFinderClick.bind(_this);
	        return _this;
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
	
	
	    _createClass(Toolbar, [{
	        key: 'onZoomSliderChange',
	        value: function onZoomSliderChange(evt) {
	            if (this.debugMode) console.log("onZoomSliderChange", evt);
	
	            this.stageScaleNum = evt.target.value * 0.1 + 1;
	            this.props.onZoomUpdate(this.stageScaleNum);
	
	            //var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
	            //window.dispatchEvent(event);
	
	            //document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	        }
	
	        /*ZOOM IN BTN*/
	
	    }, {
	        key: 'onZoomInClick',
	        value: function onZoomInClick(evt) {
	            if (this.debugMode) console.log("onZoomIn", evt);
	
	            if (this.stageScaleNum < this.stageScaleNumMax) this.stageScaleNum += 0.1;
	
	            this.props.onZoomUpdate(this.stageScaleNum);
	
	            //var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
	            //window.dispatchEvent(event);
	
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
	
	            //var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
	            //window.dispatchEvent(event);
	
	            document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	        }
	
	        /*ZOOM RESET BTN*/
	
	    }, {
	        key: 'onZoomResetClick',
	        value: function onZoomResetClick(evt) {
	
	            if (this.debugMode) console.log("onZoomResetClick", evt);
	
	            this.stageScaleNum = 1;
	            this.props.onZoomUpdate(this.stageScaleNum);
	
	            //var event = new CustomEvent('zoomOccured', { detail: this.stageScaleNum });
	            //window.dispatchEvent(event);
	
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
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	
	            if (nextProps.zoom != this.props.zoom) {
	                this.stageScaleNum = nextProps.zoom;
	                this.zoomStage();
	            }
	
	            return false;
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            /*every rerender slows down animation
	             *so it's better to use event listeners
	             */
	            //this.onZoomStage(this.props.zoom);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	
	            this.stageInit();
	            this.createGrid();
	            this.initStageAsDraggable();
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
//# sourceMappingURL=0.e9fe8bac9e4e95e89a7d.hot-update.js.map