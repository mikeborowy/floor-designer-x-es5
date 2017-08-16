webpackHotUpdate(0,{

/***/ 135:
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
	
	var _jquery = __webpack_require__(/*! jquery */ 38);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _roomsCfg = __webpack_require__(/*! ../common/roomsCfg */ 124);
	
	var _roomsCfg2 = _interopRequireDefault(_roomsCfg);
	
	var _bgnd_12x = __webpack_require__(/*! ../../../assets/blueprints/bgnd_12x10.jpg */ 107);
	
	var _bgnd_12x2 = _interopRequireDefault(_bgnd_12x);
	
	var _stageBoard = __webpack_require__(/*! ./stageBoard */ 136);
	
	var _stageBoard2 = _interopRequireDefault(_stageBoard);
	
	var _stageBoardHighlight = __webpack_require__(/*! ./stageBoardHighlight */ 137);
	
	var _stageBoardHighlight2 = _interopRequireDefault(_stageBoardHighlight);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	        };
	
	        _this.stageInit = _this.stageInit.bind(_this);
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
	
	            var img = (0, _jquery2.default)('#stage').find('img');
	            img.attr('src', floorCfg.image);
	            img.width(floorCfg.width * roomCfg.gridCellWidth);
	            img.height(floorCfg.height * roomCfg.gridCellHeight);
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
	        key: 'loadItems',
	
	
	        //createGrid(gridCellWidth, gridCellHeight, gridColumns, gridRows) {
	        //loadItems();
	        //}
	
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
	                TweenLite.to((0, _jquery2.default)("#stage"), 0, { y: posY });
	            } else {
	                TweenLite.to((0, _jquery2.default)("#stage"), 0, { y: 0 });
	            }
	
	            if ((0, _jquery2.default)("#stage").width() <= (0, _jquery2.default)("#stage-container").width()) {
	                var posX = parentWidth / 2 - (0, _jquery2.default)("#stage").width() / 2;
	                TweenLite.to((0, _jquery2.default)("#stage"), 0, { x: posX });
	            } else {
	                TweenLite.to((0, _jquery2.default)("#stage"), 0, { x: 0 });
	            }
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.updateDimensions();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	
	            this.stageInit();
	            this.createGrid();
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

/***/ }

})
//# sourceMappingURL=0.e26d48461bac4377f766.hot-update.js.map