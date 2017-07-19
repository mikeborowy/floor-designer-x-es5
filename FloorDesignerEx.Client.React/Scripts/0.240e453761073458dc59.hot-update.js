webpackHotUpdate(0,{

/***/ 127:
/*!******************************************************************!*\
  !*** ./app/components/designerScreen/shapesPanel/shapesPanel.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _shapesCfg = __webpack_require__(/*! ../../../assets/shapes/shapesCfg */ 120);
	
	var _shapesPanelListItem = __webpack_require__(/*! ./shapesPanelListItem */ 128);
	
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
	                    //return <ShapeItem key={shapeItem.id} shape={shapeItem} />
	                })
	            )
	        )
	    );
	};
	
	exports.default = ShapesPanel;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "shapesPanel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 12)(module)))

/***/ }

})
//# sourceMappingURL=0.240e453761073458dc59.hot-update.js.map