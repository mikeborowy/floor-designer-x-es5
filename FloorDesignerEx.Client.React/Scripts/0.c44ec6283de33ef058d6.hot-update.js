webpackHotUpdate(0,{

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
	            stageScaleNum: 1
	        };
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
	
	
	            if (this.state.stageScaleNum < this.stageScaleNumMin) {
	                this.state.stageScaleNum = this.stageScaleNumMin;
	            }
	            if (this.state.stageScaleNum > this.stageScaleNumMax) {
	                this.state.stageScaleNum = this.stageScaleNumMax;
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
	
	            document.querySelector('#zoom-slider').MaterialSlider.change((this.stageScaleNum - 1) * 10);
	
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
	
	                console.log('onMouseWheel', this.stageScaleNum);
	
	                this.zoomStage();
	
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
//# sourceMappingURL=0.c44ec6283de33ef058d6.hot-update.js.map