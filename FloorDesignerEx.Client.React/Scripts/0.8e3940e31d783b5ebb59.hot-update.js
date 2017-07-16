webpackHotUpdate(0,{

/***/ 192:
/*!****************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/floorList.js ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 12), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 13), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	var _florListItem = __webpack_require__(/*! ./florListItem */ 193);
	
	var _florListItem2 = _interopRequireDefault(_florListItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelFloorList = function SearchPanelFloorList(props) {
	
	    var floorList = [{ id: 1, name: "Floor-1", width: 12, height: 12 }];
	
	    return React.createElement(
	        'ul',
	        { id: 'floors-list', className: 'demo-list-action mdl-list' },
	        floorList.map(function (floorItem) {
	            return React.createElement(_florListItem2.default, { key: floorItem.id, floor: floorItem });
	        })
	    );
	};
	
	exports.default = SearchPanelFloorList;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 14); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "floorList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 16)(module)))

/***/ }

})
//# sourceMappingURL=0.8e3940e31d783b5ebb59.hot-update.js.map