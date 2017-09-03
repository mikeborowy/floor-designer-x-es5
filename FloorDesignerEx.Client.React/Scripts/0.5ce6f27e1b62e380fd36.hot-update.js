webpackHotUpdate(0,{

/***/ 136:
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
	
	var _jquery = __webpack_require__(/*! jquery */ 30);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _gsap = __webpack_require__(/*! gsap */ 64);
	
	var _Draggable = __webpack_require__(/*! gsap/Draggable */ 211);
	
	var _Draggable2 = _interopRequireDefault(_Draggable);
	
	var _ScrollToPlugin = __webpack_require__(/*! gsap/ScrollToPlugin */ 212);
	
	var _ScrollToPlugin2 = _interopRequireDefault(_ScrollToPlugin);
	
	var _roomsCfg = __webpack_require__(/*! ../common/roomsCfg */ 125);
	
	var _roomsCfg2 = _interopRequireDefault(_roomsCfg);
	
	var _bgnd_12x = __webpack_require__(/*! ../../../assets/blueprints/bgnd_12x10.jpg */ 109);
	
	var _bgnd_12x2 = _interopRequireDefault(_bgnd_12x);
	
	var _stageBoard = __webpack_require__(/*! ./stageBoard */ 137);
	
	var _stageBoard2 = _interopRequireDefault(_stageBoard);
	
	var _stageBoardHighlight = __webpack_require__(/*! ./stageBoardHighlight */ 138);
	
	var _stageBoardHighlight2 = _interopRequireDefault(_stageBoardHighlight);
	
	var _toolbar = __webpack_require__(/*! ../toolbar/toolbar */ 66);
	
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
	        _this.initDraggable = _this.initDraggable.bind(_this);
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
	        key: 'initDraggable',
	        value: function initDraggable() {
	
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
	
	            var stageContainer = (0, _jquery2.default)("#stage-container");
	
	            //zoom with "Z"
	            if (evt.keyCode === 90) {
	
	                console.log("Z down");
	
	                this.zoomMouse = true;
	
	                stageContainer.css({ "overflow-x": "hidden" });
	                stageContainer.css({ "overflow-y": "hidden" });
	            }
	
	            //drag stage with "X"
	            if (evt.keyCode === 88) {
	                console.log("X down");
	
	                //if ($('#stage-blocker').length === 0)
	                //    $('<div>')
	                //        .attr('id', 'room-blocker').attr('class', 'room-blocker-inv').appendTo(room);
	
	                _Draggable2.default.get("#stage-container").enable();
	                //Draggable.get("#sp-seating-container").applyBounds({ top: 0, left: 0, width: roomWidthOrg * stageScaleNum, height: roomHeightOrg * stageScaleNum });
	            }
	        }
	    }, {
	        key: 'onKeyUp',
	        value: function onKeyUp(evt) {
	
	            var stageContainer = (0, _jquery2.default)("#stage-container");
	
	            //zoom with "Z"
	            if (evt.keyCode === 90) {
	                this.zoomMouse = false;
	
	                (0, _jquery2.default)("#stage-container").css({ "overflow-x": "auto" });
	                (0, _jquery2.default)("#stage-container").css({ "overflow-y": "auto" });
	            }
	
	            //drag stage with "X"
	            if (evt.keyCode === 88) {
	
	                if ((0, _jquery2.default)('#stage-blocker').length > 0) (0, _jquery2.default)('#stage-blocker').remove();
	
	                _Draggable2.default.get("#stage-container").disable();
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
	            this.initDraggable();
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

/***/ 212:
/*!**********************************!*\
  !*** ./~/gsap/ScrollToPlugin.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * VERSION: 1.9.0
	 * DATE: 2017-06-19
	 * UPDATES AND DOCS AT: http://greensock.com
	 *
	 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
	 * This work is subject to the terms at http://greensock.com/standard-license or for
	 * Club GreenSock members, the software agreement that was issued with your membership.
	 * 
	 * @author: Jack Doyle, jack@greensock.com
	 **/
	var _gsScope = (typeof(module) !== "undefined" && module.exports && typeof(global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
	(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push( function() {
	
		"use strict";
	
		var _doc = (_gsScope.document || {}).documentElement,
			_window = _gsScope,
			_max = function(element, axis) {
				var dim = (axis === "x") ? "Width" : "Height",
					scroll = "scroll" + dim,
					client = "client" + dim,
					body = document.body;
				return (element === _window || element === _doc || element === body) ? Math.max(_doc[scroll], body[scroll]) - (_window["inner" + dim] || _doc[client] || body[client]) : element[scroll] - element["offset" + dim];
			},
			_unwrapElement = function(value) {
				if (typeof(value) === "string") {
					value = TweenLite.selector(value);
				}
				if (value.length && value !== _window && value[0] && value[0].style && !value.nodeType) {
					value = value[0];
				}
				return (value === _window || (value.nodeType && value.style)) ? value : null;
			},
			_buildGetter = function(e, axis) { //pass in an element and an axis ("x" or "y") and it'll return a getter function for the scroll position of that element (like scrollTop or scrollLeft, although if the element is the window, it'll use the pageXOffset/pageYOffset or the documentElement's scrollTop/scrollLeft or document.body's. Basically this streamlines things and makes a very fast getter across browsers.
				var p = "scroll" + ((axis === "x") ? "Left" : "Top");
				if (e === _window) {
					if (e.pageXOffset != null) {
						p = "page" + axis.toUpperCase() + "Offset";
					} else if (_doc[p] != null) {
						e = _doc;
					} else {
						e = document.body;
					}
				}
				return function() {
					return e[p];
				};
			},
			_getOffset = function(element, container) {
				var rect = _unwrapElement(element).getBoundingClientRect(),
					isRoot = (!container || container === _window || container === document.body),
					cRect = (isRoot ? _doc : container).getBoundingClientRect(),
					offsets = {x: rect.left - cRect.left, y: rect.top - cRect.top};
				if (!isRoot && container) { //only add the current scroll position if it's not the window/body.
					offsets.x += _buildGetter(container, "x")();
					offsets.y += _buildGetter(container, "y")();
				}
				return offsets;
			},
			_parseVal = function(value, target, axis) {
				var type = typeof(value);
				return !isNaN(value) ? parseFloat(value) : (type === "number" || (type === "string" && value.charAt(1) === "=")) ? value : (value === "max") ? _max(target, axis) : Math.min(_max(target, axis), _getOffset(value, target)[axis]);
			},
	
			ScrollToPlugin = _gsScope._gsDefine.plugin({
				propName: "scrollTo",
				API: 2,
				global: true,
				version:"1.9.0",
	
				//called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
				init: function(target, value, tween) {
					this._wdw = (target === _window);
					this._target = target;
					this._tween = tween;
					if (typeof(value) !== "object") {
						value = {y:value}; //if we don't receive an object as the parameter, assume the user intends "y".
						if (typeof(value.y) === "string" && value.y !== "max" && value.y.charAt(1) !== "=") {
							value.x = value.y;
						}
					} else if (value.nodeType) {
						value = {y:value, x:value};
					}
					this.vars = value;
					this._autoKill = (value.autoKill !== false);
					this.getX = _buildGetter(target, "x");
					this.getY = _buildGetter(target, "y");
					this.x = this.xPrev = this.getX();
					this.y = this.yPrev = this.getY();
					if (value.x != null) {
						this._addTween(this, "x", this.x, _parseVal(value.x, target, "x") - (value.offsetX || 0), "scrollTo_x", true);
						this._overwriteProps.push("scrollTo_x");
					} else {
						this.skipX = true;
					}
					if (value.y != null) {
						this._addTween(this, "y", this.y, _parseVal(value.y, target, "y") - (value.offsetY || 0), "scrollTo_y", true);
						this._overwriteProps.push("scrollTo_y");
					} else {
						this.skipY = true;
					}
					return true;
				},
	
				//called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
				set: function(v) {
					this._super.setRatio.call(this, v);
	
					var x = (this._wdw || !this.skipX) ? this.getX() : this.xPrev,
						y = (this._wdw || !this.skipY) ? this.getY() : this.yPrev,
						yDif = y - this.yPrev,
						xDif = x - this.xPrev,
						threshold = ScrollToPlugin.autoKillThreshold;
	
					if (this.x < 0) { //can't scroll to a position less than 0! Might happen if someone uses a Back.easeOut or Elastic.easeOut when scrolling back to the top of the page (for example)
						this.x = 0;
					}
					if (this.y < 0) {
						this.y = 0;
					}
					if (this._autoKill) {
						//note: iOS has a bug that throws off the scroll by several pixels, so we need to check if it's within 7 pixels of the previous one that we set instead of just looking for an exact match.
						if (!this.skipX && (xDif > threshold || xDif < -threshold) && x < _max(this._target, "x")) {
							this.skipX = true; //if the user scrolls separately, we should stop tweening!
						}
						if (!this.skipY && (yDif > threshold || yDif < -threshold) && y < _max(this._target, "y")) {
							this.skipY = true; //if the user scrolls separately, we should stop tweening!
						}
						if (this.skipX && this.skipY) {
							this._tween.kill();
							if (this.vars.onAutoKill) {
								this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []);
							}
						}
					}
					if (this._wdw) {
						_window.scrollTo((!this.skipX) ? this.x : x, (!this.skipY) ? this.y : y);
					} else {
						if (!this.skipY) {
							this._target.scrollTop = this.y;
						}
						if (!this.skipX) {
							this._target.scrollLeft = this.x;
						}
					}
					this.xPrev = this.x;
					this.yPrev = this.y;
				}
	
			}),
			p = ScrollToPlugin.prototype;
	
		ScrollToPlugin.max = _max;
		ScrollToPlugin.getOffset = _getOffset;
		ScrollToPlugin.buildGetter = _buildGetter;
		ScrollToPlugin.autoKillThreshold = 7;
	
		p._kill = function(lookup) {
			if (lookup.scrollTo_x) {
				this.skipX = true;
			}
			if (lookup.scrollTo_y) {
				this.skipY = true;
			}
			return this._super._kill.call(this, lookup);
		};
	
	}); if (_gsScope._gsDefine) { _gsScope._gsQueue.pop()(); }
	
	//export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
	(function(name) {
		"use strict";
		var getGlobal = function() {
			return (_gsScope.GreenSockGlobals || _gsScope)[name];
		};
		if (typeof(module) !== "undefined" && module.exports) { //node
			__webpack_require__(/*! gsap/TweenLite */ 209);
			module.exports = getGlobal();
		} else if (true) { //AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! gsap/TweenLite */ 209)], __WEBPACK_AMD_DEFINE_FACTORY__ = (getGlobal), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}
	}("ScrollToPlugin"));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }

})
//# sourceMappingURL=0.5ce6f27e1b62e380fd36.hot-update.js.map