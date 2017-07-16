webpackHotUpdate(0,{

/***/ 105:
/*!**********************************!*\
  !*** ./app/assets/logo/logo.png ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../Images/logo.png";

/***/ },

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
	
	        return _this;
	    }
	
	    _createClass(DesignerScreen, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
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

/***/ },

/***/ 117:
/*!******************************************************!*\
  !*** ./app/components/designerScreen/searchPanel.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 13), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 14), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var SearchPanel = function SearchPanel(props) {
	
	    return React.createElement('div', null);
	};
	
	exports.default = SearchPanel;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 15); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "searchPanel.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 18)(module)))

/***/ },

/***/ 120:
/*!**************************************************!*\
  !*** ./app/components/designerScreen/toolbar.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 13), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 14), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 9), React = __webpack_require__(/*! react */ 4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var React = _interopRequireWildcard(_react);
	
	var _logo = __webpack_require__(/*! ../../assets/logo/logo.png */ 105);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _searchPanel = __webpack_require__(/*! ./searchPanel */ 117);
	
	var _searchPanel2 = _interopRequireDefault(_searchPanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Toolbar = function Toolbar() {
	
	    return React.createElement(
	        'div',
	        { id: 'designer-toolbar' },
	        React.createElement(
	            'div',
	            { className: 'mdl-layout mdl-js-layout mdl-layout--fixed-header' },
	            React.createElement(
	                'header',
	                { className: 'mdl-layout__header' },
	                React.createElement(
	                    'div',
	                    { className: 'mdl-layout__header-row' },
	                    React.createElement(
	                        'div',
	                        { className: 'mdl-layout-title logo' },
	                        React.createElement('img', { src: _logo2.default, width: '100' })
	                    ),
	                    React.createElement('div', { className: 'mdl-layout-spacer' }),
	                    React.createElement(
	                        'nav',
	                        { 'class': 'mdl-navigation mdl-layout--large-screen-only' },
	                        React.createElement(
	                            'div',
	                            { id: 'zoom-floor-panel' },
	                            React.createElement(
	                                'button',
	                                { id: 'zoom-out-floor-btn', 'class': 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button' },
	                                React.createElement(
	                                    'i',
	                                    { 'class': 'material-icons' },
	                                    'zoom_out'
	                                )
	                            ),
	                            React.createElement('input', { id: 'zoom-slider',
	                                'class': 'mdl-slider mdl-js-slider',
	                                type: 'range', min: '-10', max: '10', value: '',
	                                tabindex: '0',
	                                onchange: 'OnSliderChange(this.value)' }),
	                            React.createElement(
	                                'button',
	                                { id: 'zoom-in-floor-btn', 'class': 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button' },
	                                React.createElement(
	                                    'i',
	                                    { 'class': 'material-icons' },
	                                    'zoom_in'
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            'button',
	                            { id: 'zoom-reset-floor-btn', 'class': 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { 'class': 'material-icons' },
	                                    'youtube_searched_for'
	                                )
	                            ),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Reset Zoom'
	                            )
	                        ),
	                        React.createElement(
	                            'button',
	                            { id: 'upload-floor-bgnd-btn', 'class': 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { 'class': 'material-icons' },
	                                    'file_upload'
	                                )
	                            ),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Upload Photo'
	                            )
	                        ),
	                        React.createElement(
	                            'button',
	                            { id: 'save-floor-btn', 'class': 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { 'class': 'material-icons' },
	                                    'cloud_upload'
	                                )
	                            ),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Save Floor Plan'
	                            )
	                        ),
	                        React.createElement(
	                            'button',
	                            { id: 'floor-finder-btn',
	                                'class': 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button',
	                                'data-url': '' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { 'class': 'material-icons' },
	                                    'visibility'
	                                )
	                            ),
	                            React.createElement(
	                                'span',
	                                null,
	                                'Floor Finder'
	                            )
	                        )
	                    )
	                )
	            ),
	            React.createElement(
	                'div',
	                { 'class': 'mdl-layout__drawer' },
	                React.createElement(
	                    'group',
	                    { 'class': 'designer-toolbar-group' },
	                    React.createElement(
	                        'span',
	                        { 'class': 'mdl-layout-title' },
	                        'Select Office'
	                    )
	                ),
	                React.createElement(
	                    'group',
	                    { 'class': 'designer-toolbar-group' },
	                    React.createElement(
	                        'form',
	                        null,
	                        React.createElement(
	                            'formgroup',
	                            { 'class': 'designer-toolbar-form-group' },
	                            React.createElement(
	                                'div',
	                                { 'class': 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select ' },
	                                React.createElement('input', { 'class': 'mdl-textfield__input', type: 'text', id: 'search-country', value: 'Poland', readonly: true, tabIndex: '-1' }),
	                                React.createElement(
	                                    'label',
	                                    { 'for': 'search-country', 'class': 'mdl-textfield__label' },
	                                    'Country'
	                                ),
	                                React.createElement(
	                                    'ul',
	                                    { 'for': 'search-country', 'class': 'mdl-menu mdl-menu--bottom-left mdl-js-menu' },
	                                    React.createElement(
	                                        'li',
	                                        { 'class': 'mdl-menu__item' },
	                                        'Poland'
	                                    ),
	                                    React.createElement(
	                                        'li',
	                                        { 'class': 'mdl-menu__item' },
	                                        'Sweden'
	                                    )
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            'formgroup',
	                            { 'class': 'designer-toolbar-form-group' },
	                            React.createElement(
	                                'div',
	                                { 'class': 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select ' },
	                                React.createElement('input', { 'class': 'mdl-textfield__input', type: 'text', id: 'search-city', value: 'Warsaw', readonly: true, tabIndex: '-1' }),
	                                React.createElement(
	                                    'label',
	                                    { 'for': 'search-city', 'class': 'mdl-textfield__label' },
	                                    'City'
	                                ),
	                                React.createElement(
	                                    'ul',
	                                    { 'for': 'search-city', 'class': 'mdl-menu mdl-menu--bottom-left mdl-js-menu' },
	                                    React.createElement(
	                                        'li',
	                                        { 'class': 'mdl-menu__item' },
	                                        'Warsaw'
	                                    ),
	                                    React.createElement(
	                                        'li',
	                                        { 'class': 'mdl-menu__item' },
	                                        'Stockholm'
	                                    )
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            'formgroup',
	                            { 'class': 'designer-toolbar-form-group' },
	                            React.createElement(
	                                'div',
	                                { 'class': 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fullwidth' },
	                                React.createElement('input', { 'class': 'mdl-textfield__input', type: 'text', id: 'sample1', value: 'Office 1, Malborska St. 51', readonly: true, tabIndex: '-1' }),
	                                React.createElement(
	                                    'label',
	                                    { 'for': 'sample1', 'class': 'mdl-textfield__label' },
	                                    'Office'
	                                ),
	                                React.createElement(
	                                    'ul',
	                                    { 'for': 'sample1', 'class': 'mdl-menu mdl-menu--bottom-left mdl-js-menu' },
	                                    React.createElement(
	                                        'li',
	                                        { 'class': 'mdl-menu__item' },
	                                        'Office 1, Malborska St. 51'
	                                    ),
	                                    React.createElement(
	                                        'li',
	                                        { 'class': 'mdl-menu__item' },
	                                        'Office 2, Szwedzki Pl. 3'
	                                    )
	                                )
	                            )
	                        ),
	                        React.createElement('br', null),
	                        React.createElement(
	                            'button',
	                            { 'class': 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent mdl-long-btn' },
	                            React.createElement(
	                                'i',
	                                { 'class': 'material-icons' },
	                                'search'
	                            ),
	                            'Submit Search'
	                        )
	                    )
	                ),
	                React.createElement(_searchPanel2.default, null)
	            )
	        )
	    );
	};
	
	Toolbar.displayName = "Toolbar";
	
	exports.default = Toolbar;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 15); if (makeExportsHot(module, __webpack_require__(/*! react */ 4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "toolbar.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 18)(module)))

/***/ }

})
//# sourceMappingURL=0.88597d7adb5963a39e7e.hot-update.js.map