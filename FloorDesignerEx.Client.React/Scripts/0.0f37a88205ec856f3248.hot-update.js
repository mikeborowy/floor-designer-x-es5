webpackHotUpdate(0,{

/***/ 208:
/*!********************************************************************!*\
  !*** ./app/components/designerScreen/stage/stageBoardHighlight.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 8), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 9), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var StageBoardHighlight = function StageBoardHighlight(props) {
	    var _props = undefined.props,
	        width = _props.width,
	        height = _props.height,
	        x = _props.x,
	        y = _props.y;
	
	
	    var divStyle = {
	        position: 'absolute',
	        border: '1px dashed rgba(0, 0, 0, 0.05)',
	        width: width,
	        height: height,
	        top: x,
	        left: y
	    };
	
	    return React.createElement('div', { className: 'stage-board-field-highlight', style: divStyle });
	};
	
	exports.default = StageBoardHighlight;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 10); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "stageBoardHighlight.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 11)(module)))

/***/ }

})
//# sourceMappingURL=0.0f37a88205ec856f3248.hot-update.js.map