webpackHotUpdate(0,{

/***/ 123:
/*!**********************************************************!*\
  !*** ./app/components/designerScreen/common/roomsCfg.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var roomsCfg = exports.roomsCfg = function roomsCfg() {
	
	    var CELL_WIDTH = 60;
	    var CELL_HEIGHT = 60;
	    var SHAPE_CFG = {
	        PADDING_LEFT: 0,
	        PADDING_TOP: 0,
	        BORDER_SIZE: 3
	    };
	
	    var SHAPES_SIZES = [{
	        "shape-room-sqr-2x2": {
	            w: 2,
	            h: 2,
	            t: {
	                x: undefined.CELL_WIDTH,
	                y: undefined.CELL_HEIGHT
	            }
	        }
	    }];
	
	    return { CELL_WIDTH: CELL_WIDTH };
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "roomsCfg.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 12)(module)))

/***/ },

/***/ 133:
/*!******************************************************!*\
  !*** ./app/components/designerScreen/stage/stage.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _jquery = __webpack_require__(/*! jquery */ 38);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _roomsCfg = __webpack_require__(/*! ../common/roomsCfg */ 123);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Stage = function Stage(props) {
	
	    var floorCfg = {
	        id: 4,
	        officeId: 1,
	        name: "Floor 1",
	        width: 15,
	        height: 10,
	        xpos: 0,
	        ypos: 0,
	        image: null,
	        rooms: []
	    };
	
	    var loadedItems = {};
	    var imgPath = "../Images/blueprints/bgnd_12x10.jpg";
	
	    console.log(_roomsCfg.roomsCfg.CELL_WIDTH);
	
	    //const gridCellWidth = roomsCfg.CELL_WIDTH;
	    //const gridCellHeight = roomsCfg.CELL_HEIGHT;
	    //const shapeSizes = roomsCfg.SHAPES_SIZES;
	    //const paddingLeft = roomsCfg.SHAPE_CFG;
	
	
	    //const paddingTop = roomsCfg.SHAPE_CFG.PADDING_TOP;
	    //const itemBorderSize = roomsCfg.SHAPE_CFG.BORDER_SIZE;
	
	    var draggedObj = void 0;
	
	    //function stageInit() {
	
	    //    $('#stage').width(floorCfg.width * gridCellWidth);
	    //    $('#stage').height(floorCfg.height * gridCellHeight);
	
	    //    $('#stage-items-container').width(floorCfg.width * gridCellWidth);
	    //    $('#stage-items-container').height(floorCfg.height * gridCellHeight);
	
	    //    const img = $('#stage').find('img');
	    //    img.attr('src', floorCfg.image);
	    //    img.width(floorCfg.width * gridCellWidth);
	    //    img.height(floorCfg.height * gridCellHeight);
	
	    //    createGrid(gridCellWidth, gridCellHeight, floorCfg.width, floorCfg.height);
	    //}
	
	    //function createGrid(gridCellWidth, gridCellHeight, gridColumns, gridRows) {
	
	    //    const _stage = $('#stage');
	    //    const _stageGridBgnd = $('#stage-grid-bgnd');
	    //    const _stageGridLive = $('#stage-grid-live');
	
	    //    const w = 1;
	    //    const h = 1;
	
	    //    for (let i = 0; i < gridRows * gridColumns; i++) {
	
	    //        x = (i * gridCellWidth) % (gridColumns * gridCellWidth);
	    //        y = Math.floor(i / gridColumns) * gridCellHeight;
	
	    //        $("<div/>").
	    //            attr('id', i).
	    //            attr('class', 'stage-board-field-highlight').
	    //            css({
	    //                position: "absolute",
	    //                width: (gridCellWidth * w),
	    //                height: (gridCellHeight * h),
	    //                top: y, left: x
	    //            }).
	    //            prependTo(_stageGridLive);
	
	    //        $("<div></div>").
	    //            attr('id', i).
	    //            attr('class', 'stage-board-field').
	    //            css({
	    //                position: "absolute",
	    //                //boxShadow: 'inset 0px 0px 0px 10px #f00',
	    //                border: "1px dashed rgba(0,0,0,0.05)",
	    //                width: gridCellWidth,
	    //                height: gridCellHeight,
	    //                top: y, left: x
	    //            })
	    //            .prependTo(_stageGridBgnd);
	    //    }
	
	    //    loadItems();
	    //}
	
	    //function loadItems() {
	
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
	    //}
	
	    function clearStage() {
	
	        (0, _jquery2.default)('#stage-grid-bgnd').html('');
	        (0, _jquery2.default)('#stage-grid-live').html('');
	        (0, _jquery2.default)('#stage-items-container').html('');
	    }
	
	    function findValueByKey(array, key) {
	
	        for (var i = 0; i < array.length; i++) {
	
	            if (array[i][key]) {
	
	                return array[i][key];
	            }
	        }
	        return null;
	    }
	
	    return React.createElement(
	        'div',
	        { id: 'stage-container' },
	        React.createElement('div', { id: 'stage-top' }),
	        React.createElement(
	            'div',
	            { id: 'stage' },
	            React.createElement('img', { id: 'stage-bgnd', src: imgPath }),
	            React.createElement('div', { id: 'stage-grid-bgnd' }),
	            React.createElement('div', { id: 'stage-grid-live' }),
	            React.createElement('div', { id: 'stage-items-container' })
	        ),
	        React.createElement('div', { id: 'stage-bottom' })
	    );
	};
	
	exports.default = Stage;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "stage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 12)(module)))

/***/ },

/***/ 135:
/*!**************************************************************!*\
  !*** ./app/components/designerScreen/workspace/workspace.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _jquery = __webpack_require__(/*! jquery */ 38);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _shapesPanel = __webpack_require__(/*! ../shapesPanel/shapesPanel */ 131);
	
	var _shapesPanel2 = _interopRequireDefault(_shapesPanel);
	
	var _stage = __webpack_require__(/*! ../stage/stage */ 133);
	
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
	
	        return _possibleConstructorReturn(this, (Workspace.__proto__ || Object.getPrototypeOf(Workspace)).call(this, props));
	    }
	
	    _createClass(Workspace, [{
	        key: 'updateDimensions',
	        value: function updateDimensions() {
	
	            var toolbarHeight = (0, _jquery2.default)("#designer-toolbar").height();
	            var windowWidth = (0, _jquery2.default)(window).width();
	            var windowHeight = (0, _jquery2.default)(window).height();
	
	            (0, _jquery2.default)("#shapes-panel").height(windowHeight - toolbarHeight);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.updateDimensions();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.updateDimensions();
	            window.addEventListener("resize", this.updateDimensions.bind(this));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener("resize", this.updateDimensions.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { id: 'designer-workspace' },
	                React.createElement(_shapesPanel2.default, null),
	                React.createElement(_stage2.default, null)
	            );
	        }
	    }]);
	
	    return Workspace;
	}(React.Component);
	
	Workspace.displayName = "Workspace";
	
	exports.default = Workspace;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "workspace.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 12)(module)))

/***/ }

})
//# sourceMappingURL=0.b46d9322fe13420fc21b.hot-update.js.map