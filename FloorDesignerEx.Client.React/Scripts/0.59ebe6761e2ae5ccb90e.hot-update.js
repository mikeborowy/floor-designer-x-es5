webpackHotUpdate(0,[
/* 0 */
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 8), React = __webpack_require__(/*! react */ 3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 108);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _jquery = __webpack_require__(/*! jquery */ 200);
	
	var $ = _interopRequireWildcard(_jquery);
	
	var _appCfg = __webpack_require__(/*! ./constants/appCfg */ 128);
	
	var _App = __webpack_require__(/*! ./components/App */ 118);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	$(window).resize(function () {
	    RefreshSeatingPlanScreen();
	}); // This component handles the App template used on every page. React ecosystem
	
	
	ReactDOM.render(React.createElement(_App2.default, { appCfg: _appCfg.appCfg }), document.getElementById('app'));
	
	function RefreshSeatingPlanScreen() {
	    UpdateProps();
	}
	
	function UpdateProps() {
	    var toolbarHeight = $("#designer-toolbar").height();
	    var windowWidth = $(window).width();
	    var windowHeight = $(window).height();
	
	    $("#shapes-panel").height(windowHeight - toolbarHeight);
	
	    $("#stage-container").height(windowHeight - toolbarHeight);
	
	    var parentHeight = $("#stage-container").height();
	    var parentWidth = $("#stage-container").width();
	
	    if ($("#stage").height() <= $("#stage-container").height()) {
	
	        var posY = parentHeight / 2 - $("#stage").height() / 2;
	        TweenLite.to($("#stage"), 0, { y: posY });
	    } else {
	        TweenLite.to($("#stage"), 0, { y: 0 });
	    }
	
	    if ($("#stage").width() <= $("#stage-container").width()) {
	        var posX = parentWidth / 2 - $("#stage").width() / 2;
	        TweenLite.to($("#stage"), 0, { x: posX });
	    } else {
	        TweenLite.to($("#stage"), 0, { x: 0 });
	    }
	
	    //if ($("#stage").width() <= $("#stage-container").width()) {
	    //$("#stage").offset({ right: posX });
	    //}
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 13)(module)))

/***/ }
])
//# sourceMappingURL=0.59ebe6761e2ae5ccb90e.hot-update.js.map