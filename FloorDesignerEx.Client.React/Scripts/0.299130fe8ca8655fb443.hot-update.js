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
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var React = _interopRequireWildcard(_react);
	
	var _shapesPanel = __webpack_require__(/*! ./shapesPanel/shapesPanel */ 124);
	
	var _shapesPanel2 = _interopRequireDefault(_shapesPanel);
	
	var _stage = __webpack_require__(/*! ./stage */ 125);
	
	var _stage2 = _interopRequireDefault(_stage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Workspace = function Workspace() {
	
	    return React.createElement(
	        'div',
	        { id: 'designer-workspace' },
	        React.createElement(_shapesPanel2.default, null),
	        React.createElement(_stage2.default, null)
	    );
	};
	
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
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var ShapesPanelItem = function ShapesPanelItem(props) {
	    var shape = props.shape.shape;
	
	
	    return React.createElement(
	        "li",
	        { "class": "mdl-list__item mdl-list__item--two-line shape-list-btn drag-element",
	            key: shape.id,
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "shapesPanelListItem.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 13)(module)))

/***/ }

})
//# sourceMappingURL=0.299130fe8ca8655fb443.hot-update.js.map