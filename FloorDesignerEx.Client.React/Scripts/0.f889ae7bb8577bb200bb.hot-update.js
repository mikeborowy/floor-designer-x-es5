webpackHotUpdate(0,{

/***/ 194:
/*!******************************************************************!*\
  !*** ./app/components/designerScreen/shapesPanel/shapesPanel.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 11), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var React = _interopRequireWildcard(_react);
	
	var _shapesCfg = __webpack_require__(/*! ../../../assets/shapes/shapesCfg */ 197);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var ShapesPanel = function ShapesPanel(props) {
	
	    var shapesList = [{
	        id: '1',
	        name: 'shape-room-sqr-2x2',
	        image: _shapesCfg.sq_2x2,
	        width: 2,
	        height: 2,
	        desc: 'Square Room',
	        isDraggable: true
	    }, {
	        id: '2',
	        name: 'shape-room-sqr-2x2',
	        image: 'Images/shapes/room_rect_3x2.png',
	        width: 3,
	        height: 2,
	        desc: 'Rectangle Room',
	        isDraggable: true
	    }, {
	        id: '3',
	        name: 'shape-room-sqr-3x3',
	        image: 'Images/shapes/room_squa_3x3.png',
	        width: 3,
	        height: 3,
	        desc: 'Square Room',
	        isDraggable: true
	    }, {
	        id: '4',
	        name: 'shape-room-l-3x2',
	        image: 'Images/shapes/room_lshape_3x3.png',
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
	
	                    return React.createElement(
	                        'li',
	                        { 'class': 'mdl-list__item mdl-list__item--two-line shape-list-btn drag-element',
	                            name: shapeItem.name,
	                            'data-shape-w': shapeItem.width,
	                            'data-shape-h': shapeItem.height,
	                            draggable: shapeItem.isDraggable },
	                        React.createElement('div', { 'class': 'shape-list-sml-bar' }),
	                        React.createElement(
	                            'div',
	                            { 'class': 'mdl-list__item-primary-content' },
	                            React.createElement('img', { 'class': 'shape-list-img-sml', src: shapeItem.image }),
	                            React.createElement(
	                                'span',
	                                { 'class': 'mdl-list__item-sub-title shape-list-size' },
	                                'Size ',
	                                shapeItem.width,
	                                'x',
	                                shapeItem.height
	                            ),
	                            React.createElement(
	                                'span',
	                                { 'class': 'shape-list-title' },
	                                shapeItem.desc
	                            )
	                        )
	                    );
	                })
	            )
	        )
	    );
	};
	
	exports.default = ShapesPanel;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 12); if (makeExportsHot(module, __webpack_require__(/*! react */ 3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "shapesPanel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 13)(module)))

/***/ }

})
//# sourceMappingURL=0.f889ae7bb8577bb200bb.hot-update.js.map