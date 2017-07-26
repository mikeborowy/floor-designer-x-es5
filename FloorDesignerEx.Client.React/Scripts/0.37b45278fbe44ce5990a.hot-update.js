webpackHotUpdate(0,{

/***/ 135:
/*!**************************************************************!*\
  !*** ./app/components/designerScreen/workspace/workspace.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _jquery = __webpack_require__(/*! jquery */ 38);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _shapesPanel = __webpack_require__(/*! ../shapesPanel/shapesPanel */ 131);
	
	var _shapesPanel2 = _interopRequireDefault(_shapesPanel);
	
	var _stage = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../stage/stage\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _stage2 = _interopRequireDefault(_stage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Workspace = function (_React$Component) {
	    _inherits(Workspace, _React$Component);
	
	    function Workspace(props) {
	        _classCallCheck(this, Workspace);
	
	        return _possibleConstructorReturn(this, (Workspace.__proto__ || Object.getPrototypeOf(Workspace)).call(this, props));
	    }
	
	    _createClass(Workspace, [{
	        key: 'updateDimensions',
	        value: function updateDimensions() {
	
	            var toolbarHeight = (0, _jquery2.default)("#designer-toolbar").height();
	            var windowWidth = (0, _jquery2.default)(window).width();
	            var windowHeight = (0, _jquery2.default)(window).height();
	
	            (0, _jquery2.default)("#shapes-panel").height(windowHeight - toolbarHeight);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.updateDimensions();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.updateDimensions();
	            window.addEventListener("resize", this.updateDimensions.bind(this));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener("resize", this.updateDimensions.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { id: 'designer-workspace' },
	                React.createElement(_shapesPanel2.default, null),
	                React.createElement(_stage2.default, null)
	            );
	        }
	    }]);
	
	    return Workspace;
	}(React.Component);
	
	Workspace.displayName = "Workspace";
	
	exports.default = Workspace;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "workspace.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 12)(module)))

/***/ }

})
//# sourceMappingURL=0.37b45278fbe44ce5990a.hot-update.js.map