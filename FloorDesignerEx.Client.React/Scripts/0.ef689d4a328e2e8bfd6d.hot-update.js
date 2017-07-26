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
	var roomsCfg = exports.roomsCfg = {
	
	    CELL_WIDTH: 60,
	    CELL_HEIGHT: 60,
	    SHAPE_CFG: {
	        PADDING_LEFT: 0,
	        PADDING_TOP: 0,
	        BORDER_SIZE: 3
	    },
	    SHAPES_SIZES: [{
	        "shape-room-sqr-2x2": {
	            w: 2,
	            h: 2,
	            t: {
	                x: function x() {
	                    return undefined.CELL_WIDTH;
	                },
	                y: function y() {
	                    return undefined.CELL_HEIGHT;
	                }
	            }
	        }
	    }, {
	        "shape-room-sqr-3x3": {
	            w: 3,
	            h: 3,
	            t: {
	                x: function x() {
	                    return 2 * undefined.CELL_WIDTH - undefined.CELL_WIDTH * 0.5;
	                },
	                y: function y() {
	                    return 2 * undefined.CELL_HEIGHT - undefined.CELL_HEIGHT * 0.5;
	                }
	            }
	        }
	    }, {
	        "shape-room-rct-3x2": {
	            w: 3,
	            h: 2,
	            t: {
	                x: function x() {
	                    return 3 * undefined.CELL_WIDTH - undefined.CELL_WIDTH * 0.5;
	                },
	                y: function y() {
	                    return 2 * undefined.CELL_HEIGHT - undefined.CELL_HEIGHT * 0.5;
	                }
	            }
	        }
	    }, {
	        "shape-room-l-3x2": {
	            w: 3,
	            h: 3,
	            t: {
	                x: function x() {
	                    return 3 * undefined.CELL_WIDTH - undefined.CELL_WIDTH * 0.5;
	                },
	                y: function y() {
	                    return 2 * undefined.CELL_HEIGHT - undefined.CELL_HEIGHT * 0.5;
	                }
	            }
	        }
	    }]
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "roomsCfg.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 12)(module)))

/***/ }

})
//# sourceMappingURL=0.ef689d4a328e2e8bfd6d.hot-update.js.map