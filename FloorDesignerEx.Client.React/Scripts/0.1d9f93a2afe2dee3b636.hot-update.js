webpackHotUpdate(0,{

/***/ 63:
/*!*********************************************!*\
  !*** ./app/assets/shapes/room_squa_2x2.png ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../Images/room_squa_2x2.png";

/***/ },

/***/ 107:
/*!*********************************************!*\
  !*** ./app/assets/shapes/room_squa_3x3.png ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../Images/room_squa_3x3.png";

/***/ },

/***/ 117:
/*!****************************************!*\
  !*** ./app/assets/shapes/shapesCfg.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.shapesCfg = undefined;
	
	var _room_squa_2x = __webpack_require__(/*! ./room_squa_2x2.png */ 63);
	
	var _room_squa_2x2 = _interopRequireDefault(_room_squa_2x);
	
	var _room_squa_3x = __webpack_require__(/*! ./room_squa_3x3.png */ 107);
	
	var _room_squa_3x2 = _interopRequireDefault(_room_squa_3x);
	
	var _room_rect_3x = __webpack_require__(/*! ./room_rect_3x2.png */ 198);
	
	var _room_rect_3x2 = _interopRequireDefault(_room_rect_3x);
	
	var _room_lshape_3x = __webpack_require__(/*! ./room_lshape_3x3.png */ 197);
	
	var _room_lshape_3x2 = _interopRequireDefault(_room_lshape_3x);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var shapesCfg = exports.shapesCfg = {
	    sq_2x2: _room_squa_2x2.default,
	    sq_3x3: _room_squa_3x2.default,
	    rq_3x2: _room_rect_3x2.default,
	    ls_3x3: _room_lshape_3x2.default
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "shapesCfg.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 13)(module)))

/***/ },

/***/ 119:
/*!************************************************!*\
  !*** ./app/components/designerScreen/index.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var React = _interopRequireWildcard(_react);
	
	var _toolbar = __webpack_require__(/*! ./toolbar */ 126);
	
	var _toolbar2 = _interopRequireDefault(_toolbar);
	
	var _workspace = __webpack_require__(/*! ./workspace */ 127);
	
	var _workspace2 = _interopRequireDefault(_workspace);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DesignerScreen = function (_React$Component) {
	    _inherits(DesignerScreen, _React$Component);
	
	    function DesignerScreen(props) {
	        _classCallCheck(this, DesignerScreen);
	
	        var _this = _possibleConstructorReturn(this, (DesignerScreen.__proto__ || Object.getPrototypeOf(DesignerScreen)).call(this, props));
	
	        console.log('DesignerScreen', props.appCfg);
	        return _this;
	    }
	
	    _createClass(DesignerScreen, [{
	        key: 'updateDimensions',
	        value: function updateDimensions() {}
	
	        /**
	         * Add event listener
	         */
	
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.updateDimensions();
	            window.addEventListener("resize", this.updateDimensions.bind(this));
	        }
	
	        /**
	         * Remove event listener
	         */
	
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
	                { id: 'designer-screen' },
	                React.createElement(_toolbar2.default, null),
	                React.createElement(_workspace2.default, null)
	            );
	        }
	    }]);
	
	    return DesignerScreen;
	}(React.Component);
	
	exports.default = DesignerScreen;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 13)(module)))

/***/ },

/***/ 124:
/*!******************************************************************!*\
  !*** ./app/components/designerScreen/shapesPanel/shapesPanel.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var React = _interopRequireWildcard(_react);
	
	var _shapesCfg = __webpack_require__(/*! ../../../assets/shapes/shapesCfg */ 117);
	
	var _shapesPanelListItem = __webpack_require__(/*! ./shapesPanelListItem */ 199);
	
	var _shapesPanelListItem2 = _interopRequireDefault(_shapesPanelListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var ShapesPanel = function ShapesPanel(props) {
	
	    var shapesList = [{
	        id: '1',
	        name: 'shape-room-sqr-2x2',
	        image: _shapesCfg.shapesCfg.sq_2x2,
	        width: 2,
	        height: 2,
	        desc: 'Square Room',
	        isDraggable: true
	    }, {
	        id: '2',
	        name: 'shape-room-sqr-3x3',
	        image: _shapesCfg.shapesCfg.sq_3x3,
	        width: 3,
	        height: 2,
	        desc: 'Rectangle Room',
	        isDraggable: true
	    }, {
	        id: '3',
	        name: 'shape-room-rect-3x3',
	        image: _shapesCfg.shapesCfg.rq_3x2,
	        width: 3,
	        height: 3,
	        desc: 'Square Room',
	        isDraggable: true
	    }, {
	        id: '4',
	        name: 'shape-room-l-3x2',
	        image: _shapesCfg.shapesCfg.ls_3x3,
	        width: 3,
	        height: 3,
	        desc: 'Square Room',
	        isDraggable: true
	    }];
	
	    return React.createElement(
	        'div',
	        { id: 'shapes-panel' },
	        React.createElement(
	            'div',
	            { id: 'shapes-box' },
	            React.createElement(
	                'ul',
	                { id: 'shapes-list', 'class': 'demo-list-two mdl-list ' },
	                shapesList.map(function (shapeItem) {
	                    return React.createElement(_shapesPanelListItem2.default, { key: shapeItem.id, shape: shapeItem });
	                })
	            )
	        )
	    );
	};
	
	exports.default = ShapesPanel;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "shapesPanel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 13)(module)))

/***/ },

/***/ 125:
/*!************************************************!*\
  !*** ./app/components/designerScreen/stage.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Stage = function Stage(props) {
	
	    return React.createElement('div', null);
	};
	
	exports.default = Stage;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "stage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 13)(module)))

/***/ },

/***/ 127:
/*!****************************************************!*\
  !*** ./app/components/designerScreen/workspace.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var React = _interopRequireWildcard(_react);
	
	var _shapesPanel = __webpack_require__(/*! ./shapesPanel/shapesPanel */ 124);
	
	var _shapesPanel2 = _interopRequireDefault(_shapesPanel);
	
	var _stage = __webpack_require__(/*! ./stage */ 125);
	
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
	
	            var toolbarHeight = $("#designer-toolbar").height();
	            var windowWidth = $(window).width();
	            var windowHeight = $(window).height();
	
	            $("#shapes-panel").height(windowHeight - toolbarHeight);
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "workspace.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 13)(module)))

/***/ },

/***/ 197:
/*!***********************************************!*\
  !*** ./app/assets/shapes/room_lshape_3x3.png ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../Images/room_lshape_3x3.png";

/***/ },

/***/ 198:
/*!*********************************************!*\
  !*** ./app/assets/shapes/room_rect_3x2.png ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../Images/room_rect_3x2.png";

/***/ },

/***/ 199:
/*!**************************************************************************!*\
  !*** ./app/components/designerScreen/shapesPanel/shapesPanelListItem.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var ShapesPanelItem = function ShapesPanelItem(props) {
	    var shape = props.shape;
	
	
	    return React.createElement(
	        "li",
	        { "class": "mdl-list__item mdl-list__item--two-line shape-list-btn drag-element",
	            name: shape.name,
	            "data-shape-w": shape.width,
	            "data-shape-h": shape.height,
	            draggable: shape.isDraggable },
	        React.createElement("div", { "class": "shape-list-sml-bar" }),
	        React.createElement(
	            "div",
	            { "class": "mdl-list__item-primary-content" },
	            React.createElement("img", { "class": "shape-list-img-sml", src: shape.image }),
	            React.createElement(
	                "span",
	                { "class": "mdl-list__item-sub-title shape-list-size" },
	                "Size ",
	                shape.width,
	                "x",
	                shape.height
	            ),
	            React.createElement(
	                "span",
	                { "class": "shape-list-title" },
	                shape.desc
	            )
	        )
	    );
	};
	
	exports.default = ShapesPanelItem;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "shapesPanelListItem.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 13)(module)))

/***/ }

})
//# sourceMappingURL=0.1d9f93a2afe2dee3b636.hot-update.js.map