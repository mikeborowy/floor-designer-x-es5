webpackHotUpdate(0,{

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
	
	var _searchPanel = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./searchPanel\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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
	                        { className: 'mdl-navigation mdl-layout--large-screen-only' },
	                        React.createElement(
	                            'div',
	                            { id: 'zoom-floor-panel' },
	                            React.createElement(
	                                'button',
	                                { id: 'zoom-out-floor-btn', className: 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button' },
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
	                                    'zoom_out'
	                                )
	                            ),
	                            React.createElement('input', { id: 'zoom-slider',
	                                className: 'mdl-slider mdl-js-slider',
	                                type: 'range', min: '-10', max: '10', value: '',
	                                tabindex: '0',
	                                onchange: 'OnSliderChange(this.value)' }),
	                            React.createElement(
	                                'button',
	                                { id: 'zoom-in-floor-btn', className: 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button' },
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
	                                    'zoom_in'
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            'button',
	                            { id: 'zoom-reset-floor-btn', className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
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
	                            { id: 'upload-floor-bgnd-btn', className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
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
	                            { id: 'save-floor-btn', className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
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
	                                className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button',
	                                'data-url': '' },
	                            React.createElement(
	                                'span',
	                                null,
	                                React.createElement(
	                                    'i',
	                                    { className: 'material-icons' },
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
	                { className: 'mdl-layout__drawer' },
	                React.createElement(
	                    'group',
	                    { className: 'designer-toolbar-group' },
	                    React.createElement(
	                        'span',
	                        { className: 'mdl-layout-title' },
	                        'Select Office'
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
//# sourceMappingURL=0.c36384b42122a16479b2.hot-update.js.map