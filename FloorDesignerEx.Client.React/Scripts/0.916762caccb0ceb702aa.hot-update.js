webpackHotUpdate(0,{

/***/ 197:
/*!************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/index.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 13), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 14), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	var _form = __webpack_require__(/*! ./form */ 199);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _floorList = __webpack_require__(/*! ./floorList */ 198);
	
	var _floorList2 = _interopRequireDefault(_floorList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanel = function SearchPanel(props) {
	
	    return React.createElement(
	        'div',
	        null,
	        React.createElement(_form2.default, null),
	        React.createElement(_floorList2.default, null)
	    );
	};
	
	exports.default = SearchPanel;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 15); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 18)(module)))

/***/ },

/***/ 198:
/*!****************************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/floorList.js ***!
  \****************************************************************/
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 15); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "floorList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 18)(module)))

/***/ },

/***/ 199:
/*!***********************************************************!*\
  !*** ./app/components/designerScreen/searchPanel/form.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 13), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 14), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanelForm = function SearchPanelForm() {
	
	    return React.createElement(
	        "group",
	        { className: "designer-toolbar-group" },
	        React.createElement(
	            "form",
	            null,
	            React.createElement(
	                "formgroup",
	                { className: "designer-toolbar-form-group" },
	                React.createElement(
	                    "div",
	                    { className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select " },
	                    React.createElement("input", { className: "mdl-textfield__input", type: "text", id: "search-country", value: "Poland", readonly: true, tabIndex: "-1" }),
	                    React.createElement(
	                        "label",
	                        { "for": "search-country", className: "mdl-textfield__label" },
	                        "Country"
	                    ),
	                    React.createElement(
	                        "ul",
	                        { "for": "search-country", className: "mdl-menu mdl-menu--bottom-left mdl-js-menu" },
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Poland"
	                        ),
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Sweden"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "formgroup",
	                { className: "designer-toolbar-form-group" },
	                React.createElement(
	                    "div",
	                    { className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select " },
	                    React.createElement("input", { className: "mdl-textfield__input", type: "text", id: "search-city", value: "Warsaw", readonly: true, tabIndex: "-1" }),
	                    React.createElement(
	                        "label",
	                        { "for": "search-city", className: "mdl-textfield__label" },
	                        "City"
	                    ),
	                    React.createElement(
	                        "ul",
	                        { "for": "search-city", className: "mdl-menu mdl-menu--bottom-left mdl-js-menu" },
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Warsaw"
	                        ),
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Stockholm"
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                "formgroup",
	                { className: "designer-toolbar-form-group" },
	                React.createElement(
	                    "div",
	                    { className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth" },
	                    React.createElement("input", { className: "mdl-textfield__input", type: "text", id: "sample1", value: "Office 1, Malborska St. 51", readonly: true, tabIndex: "-1" }),
	                    React.createElement(
	                        "label",
	                        { "for": "sample1", className: "mdl-textfield__label" },
	                        "Office"
	                    ),
	                    React.createElement(
	                        "ul",
	                        { "for": "sample1", className: "mdl-menu mdl-menu--bottom-left mdl-js-menu" },
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Office 1, Malborska St. 51"
	                        ),
	                        React.createElement(
	                            "li",
	                            { className: "mdl-menu__item" },
	                            "Office 2, Szwedzki Pl. 3"
	                        )
	                    )
	                )
	            ),
	            React.createElement("br", null),
	            React.createElement(
	                "button",
	                { className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-long-btn" },
	                React.createElement(
	                    "i",
	                    { className: "material-icons" },
	                    "search"
	                ),
	                "Submit Search"
	            )
	        )
	    );
	};
	
	exports.default = SearchPanelForm;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 15); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "form.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 18)(module)))

/***/ }

})
//# sourceMappingURL=0.916762caccb0ceb702aa.hot-update.js.map