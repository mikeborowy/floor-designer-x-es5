webpackHotUpdate(0,{

/***/ 116:
/*!************************************************!*\
  !*** ./app/components/designerScreen/index.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 13), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 14), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	var _materialDesignLite = __webpack_require__(/*! material-design-lite */ 191);
	
	var _materialDesignLite2 = _interopRequireDefault(_materialDesignLite);
	
	var _toolbar = __webpack_require__(/*! ./toolbar */ 120);
	
	var _toolbar2 = _interopRequireDefault(_toolbar);
	
	var _workspace = __webpack_require__(/*! ./workspace */ 121);
	
	var _workspace2 = _interopRequireDefault(_workspace);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DesignerScreen = function (_React$Component) {
	    _inherits(DesignerScreen, _React$Component);
	
	    function DesignerScreen(props) {
	        _classCallCheck(this, DesignerScreen);
	
	        var _this = _possibleConstructorReturn(this, (DesignerScreen.__proto__ || Object.getPrototypeOf(DesignerScreen)).call(this, props));
	
	        console.log('DesignerScreen', props.appCfg);
	        componentHandler.upgradeDom();
	
	        return _this;
	    }
	
	    _createClass(DesignerScreen, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            console.log(componentHandler);
	            componentHandler.upgradeDom();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { id: 'designer-screen' },
	                React.createElement(_toolbar2.default, null),
	                React.createElement(_workspace2.default, null)
	            );
	        }
	    }]);
	
	    return DesignerScreen;
	}(React.Component);
	
	exports.default = DesignerScreen;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 15); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 18)(module)))

/***/ }

})
//# sourceMappingURL=0.f629e640ac4d188447c1.hot-update.js.map