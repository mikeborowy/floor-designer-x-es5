webpackHotUpdate(0,{

/***/ 204:
/*!******************************************************!*\
  !*** ./app/components/designerScreen/stage/stage.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 7), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _roomsCfg = __webpack_require__(/*! ../common/roomsCfg */ 207);
	
	var _roomsCfg2 = _interopRequireDefault(_roomsCfg);
	
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
	
	    var imgPath = "../Images/blueprints/bgnd_12x10.jpg";
	
	    var gridCellWidth = _roomsCfg2.default.CELL_WIDTH;
	    var gridCellHeight = _roomsCfg2.default.CELL_HEIGHT;
	    var shapeSizes = _roomsCfg2.default.SHAPES_SIZES;
	    var paddingLeft = _roomsCfg2.default.SHAPE_CFG.PADDING_LEFT;
	    var paddingTop = _roomsCfg2.default.SHAPE_CFG.PADDING_TOP;
	    var itemBorderSize = _roomsCfg2.default.SHAPE_CFG.BORDER_SIZE;
	
	    return React.createElement('div', null);
	};
	
	exports.default = Stage;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "stage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 12)(module)))

/***/ },

/***/ 207:
/*!**********************************************************!*\
  !*** ./app/components/designerScreen/common/roomsCfg.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 7), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var roomsCfg = exports.roomsCfg = function roomsCfg() {
	
	    var cfg = {};
	    cfg.CELL_WIDTH = 60;
	    cfg.CELL_HEIGHT = 60;
	    cfg.SHAPE_CFG = {
	        PADDING_LEFT: 0,
	        PADDING_TOP: 0,
	        BORDER_SIZE: 3
	    };
	    cfg.SHAPES_SIZES = [{
	        "shape-room-sqr-2x2": {
	            w: 2,
	            h: 2,
	            t: {
	                x: this.CELL_WIDTH,
	                y: this.CELL_HEIGHT
	            }
	        }
	    }, {
	        "shape-room-sqr-3x3": {
	            w: 3,
	            h: 3,
	            t: {
	                x: 2 * this.CELL_WIDTH - this.CELL_WIDTH * 0.5,
	                y: 2 * this.CELL_HEIGHT - this.CELL_HEIGHT * 0.5
	            }
	        }
	    }, {
	        "shape-room-rct-3x2": {
	            w: 3,
	            h: 2,
	            t: {
	                x: 3 * this.CELL_WIDTH - this.CELL_WIDTH * 0.5,
	                y: 2 * this.CELL_HEIGHT - this.CELL_HEIGHT * 0.5
	            }
	        }
	    }, {
	        "shape-room-l-3x2": {
	            w: 3,
	            h: 3,
	            t: {
	                x: 3 * this.CELL_WIDTH - this.CELL_WIDTH * 0.5,
	                y: 2 * this.CELL_HEIGHT - this.CELL_HEIGHT * 0.5
	            }
	        }
	    }];
	
	    return cfg;
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "roomsCfg.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 12)(module)))

/***/ }

})
//# sourceMappingURL=0.296978db2c4898e8fd02.hot-update.js.map