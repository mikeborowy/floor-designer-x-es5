webpackHotUpdate(0,{

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
	
	    console.log();
	
	    return React.createElement(
	        "li",
	        { "class": "mdl-list__item mdl-list__item--two-line shape-list-btn drag-element",
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
//# sourceMappingURL=0.aa6694290799552b7e34.hot-update.js.map