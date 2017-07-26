webpackHotUpdate(0,{

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
	
	var _roomsCfg = __webpack_require__(/*! ../common/roomsCfg */ 123);
	
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
	
	    return React.createElement(
	        'div',
	        { id: 'stage-container' },
	        React.createElement('div', { id: 'stage-top' }),
	        React.createElement(
	            'div',
	            { id: 'stage' },
	            React.createElement('img', { id: 'stage-bgnd', src: '' }),
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

/***/ }

})
//# sourceMappingURL=0.ab70bf15e1f41131d0a3.hot-update.js.map