webpackHotUpdate(0,{

/***/ 128:
/*!**************************************************************************!*\
  !*** ./app/components/designerScreen/shapesPanel/shapesPanelListItem.js ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _jquery = __webpack_require__(/*! jquery */ 110);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var ShapesPanelListItem = function ShapesPanelListItem(props) {
	    var shape = props.shape;
	
	
	    var shapeListBtnConfig = {
	
	        normal: {
	            smlBarWidth: 5,
	            color: 'rgb(68,138,255)',
	            primaryContentX: 0,
	            animationTime: 0.2
	        },
	        over: {
	            smlBarWidth: 15,
	            color: 'rgb(255,235,59)',
	            primaryContentX: 20,
	            primaryContentAnimationDelay: 0.1,
	            animationTime: 0.2
	        }
	    };
	
	    function onMouseOverFn(evt) {
	
	        var cfg = shapeListBtnConfig.over;
	        var btn = (0, _jquery2.default)(evt.currentTarget);
	        var bar = btn.find('.shape-list-sml-bar');
	
	        TweenLite.to(bar, cfg.animationTime, {
	            width: cfg.smlBarWidth,
	            backgroundColor: cfg.color
	        });
	
	        var primaryContent = btn.find('.mdl-list__item-primary-content');
	        TweenLite.to(primaryContent, cfg.animationTime + cfg.primaryContentAnimationDelay, {
	            x: cfg.primaryContentX
	        });
	    };
	
	    function onMouseOutFn(evt) {
	        //console.log('onMouseOutFn')
	    };
	
	    return React.createElement(
	        'li',
	        { className: 'mdl-list__item mdl-list__item--two-line shape-list-btn drag-element',
	            name: shape.name,
	            'data-shape-w': shape.width,
	            'data-shape-h': shape.height,
	            draggable: shape.isDraggable,
	            onMouseOver: onMouseOverFn,
	            onMouseOut: onMouseOutFn
	        },
	        React.createElement('div', { className: 'shape-list-sml-bar' }),
	        React.createElement(
	            'div',
	            { className: 'mdl-list__item-primary-content' },
	            React.createElement('img', { className: 'shape-list-img-sml', src: shape.image }),
	            React.createElement(
	                'span',
	                { className: 'mdl-list__item-sub-title shape-list-size' },
	                'Size ',
	                shape.width,
	                'x',
	                shape.height
	            ),
	            React.createElement(
	                'span',
	                { className: 'shape-list-title' },
	                shape.desc
	            )
	        )
	    );
	};
	
	exports.default = ShapesPanelListItem;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "shapesPanelListItem.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 12)(module)))

/***/ }

})
//# sourceMappingURL=0.527834fee8c07dc68c4d.hot-update.js.map