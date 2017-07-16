webpackHotUpdate(0,{

/***/ 194:
/*!***************************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/SearchPanelFloorList.js ***!
  \***************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 13), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 14), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelFloorList = function SearchPanelFloorList(props) {
	
	    var floorList = [{ id: 1, name: "Floor-1", width: 12, height: 12 }];
	
	    return React.createElement(
	        "ul",
	        { id: "floors-list", className: "demo-list-action mdl-list" },
	        floorList.map(function (floor) {
	
	            React.createElement(
	                "li",
	                { id: floor.id, className: "mdl-list__item mdl-list-item-fixed floor-list-item", "data-width": floor.width, "data-height": floor.height },
	                React.createElement(
	                    "div",
	                    { className: "mdl-list__item-primary-content" },
	                    React.createElement(
	                        "div",
	                        { "data-floor-id": floor.id, className: "floor-edit-btn" },
	                        floor.name
	                    )
	                ),
	                React.createElement(
	                    "button",
	                    { "data-floor-id": floor.id, className: "mdl-button mdl-js-button mdl-button--icon mdl-button-color-blue floor-delete-btn" },
	                    React.createElement(
	                        "i",
	                        { className: "material-icons" },
	                        "delete"
	                    )
	                )
	            );
	        })
	    );
	};
	
	exports.default = SearchPanelFloorList;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 15); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SearchPanelFloorList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 18)(module)))

/***/ }

})
//# sourceMappingURL=0.ebf56d3d68f1a37e30c5.hot-update.js.map