webpackHotUpdate(0,{

/***/ 138:
/*!**********************************************************!*\
  !*** ./app/components/designerScreen/toolbar/toolbar.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 7), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 8), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _logo = __webpack_require__(/*! ../../../assets/logo/logo.png */ 108);
	
	var _logo2 = _interopRequireDefault(_logo);
	
	var _searchPanel = __webpack_require__(/*! ../searchPanel/searchPanel */ 126);
	
	var _searchPanel2 = _interopRequireDefault(_searchPanel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Toolbar = function (_React$Component) {
	    _inherits(Toolbar, _React$Component);
	
	    function Toolbar(props) {
	        _classCallCheck(this, Toolbar);
	
	        var _this = _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props));
	
	        _this.state = {
	            stageScaleNum: 1,
	            saveData: {}
	        };
	
	        _this.onZoomStage = _this.onZoomStage.bind(_this);
	        return _this;
	    }
	
	    _createClass(Toolbar, [{
	        key: 'initToolbar',
	        value: function initToolbar() {
	            /*MOUSE WHEEL*/
	
	            /*SLIDER*/
	            $('#zoom-slider').on('input', function () {
	
	                stageScaleNum = this.value * 0.1 + 1;
	                ZoomStage();
	            });
	
	            /*ZOOM IN BTN*/
	            $('#zoom-in-floor-btn').click(function () {
	
	                stageScaleNum += 0.1;
	
	                ZoomStage();
	                document.querySelector('#zoom-slider').MaterialSlider.change((stageScaleNum - 1) * 10);
	            });
	            /*ZOOM OUT BTN*/
	            $('#zoom-out-floor-btn').click(function () {
	
	                stageScaleNum -= 0.1;
	
	                ZoomStage();
	                document.querySelector('#zoom-slider').MaterialSlider.change((stageScaleNum - 1) * 10);
	            });
	        }
	
	        /*ZOOM START*/
	
	    }, {
	        key: 'onZoomStage',
	        value: function onZoomStage() {
	
	            var stage = $('#stage');
	            var stageContainer = $('#stage-container');
	
	            //TweenLite.killTweensOf(room);
	            //TweenLite.killTweensOf(roomContainer);
	
	            if (stageScaleNum < stageScaleNumMin) {
	                stageScaleNum = 0.2;
	            }
	            if (stageScaleNum > stageScaleNumMax) {
	                stageScaleNum = 2;
	            }
	
	            TweenMax.to(stage, 0.3, {
	                scaleX: stageScaleNum,
	                scaleY: stageScaleNum
	            });
	
	            var posX = stageContainer.width() / 2 - stage.width() / 2;
	            var stageWidthAfterScale = stage.width() * stageScaleNum;
	
	            var posY = stageContainer.height() / 2 - stage.height() / 2;
	            var stageHeightAfterScale = stage.height() * stageScaleNum;
	
	            //First for horizontal scale scroll issue
	            //check if scaled room width is bigger than room conatiner
	            //if true align to left
	            if (stageWidthAfterScale >= stageContainer.width()) {
	                TweenMax.set(stage, {
	                    transformOrigin: "0 50%",
	                    x: 0,
	                    y: posY
	                });
	
	                //then check if scaled room height is bigger than room conatiner 
	                //and align to top
	                if (stageHeightAfterScale >= stageContainer.height()) {
	                    TweenMax.set(stage, {
	                        transformOrigin: "0% 0%",
	                        x: 0,
	                        y: 0
	                    });
	                }
	            }
	            //for vertical scale scroll issue
	            //check if scaled room height is bigger than room conatiner 
	            //if true align to top
	            else if (stageHeightAfterScale >= stageContainer.height()) {
	                    TweenMax.set(stage, {
	                        transformOrigin: "50% 0%",
	                        x: posX,
	                        y: 0
	                    });
	
	                    //then check if scaled room width is bigger than room conatiner 
	                    //and align to left
	                    if (stageWidthAfterScale >= stageContainer.width()) {
	                        TweenMax.set(stage, {
	                            transformOrigin: "0 0",
	                            x: 0,
	                            y: 0
	                        });
	                    }
	                }
	                //otherwise appply regular scale with centerd point
	                else {
	                        TweenMax.set(stage, {
	                            transformOrigin: "50% 50%",
	                            x: posX,
	                            y: posY
	                        });
	                    }
	        }
	        /*ZOOM END*/
	
	        /*ZOOM RESET BTN*/
	        //$('#zoom-reset-floor-btn').click(function () {})
	
	    }, {
	        key: 'onZoomResetClick',
	        value: function onZoomResetClick() {
	
	            stageScaleNum = 1;
	            this.onZoomStage();
	            document.querySelector('#zoom-slider').MaterialSlider.change((stageScaleNum - 1) * 10);
	        }
	    }, {
	        key: 'onSaveFloorClick',
	
	
	        /*SAVE START*/
	        //$('#save-floor-btn').click(onSaveFloorClick);
	        value: function onSaveFloorClick() {
	
	            if (debugMode) console.log("onSaveFloorClick");
	            var rooms = [];
	
	            //$('.item-box').each(function (i, val) {
	
	            //    let itemBox = $(val)
	
	            //    let room = {
	            //        shape: itemBox.attr('data-box-shape'),
	            //        width: itemBox.attr('data-box-w'),
	            //        height: itemBox.attr('data-box-h'),
	            //        xpos: itemBox.attr('data-box-x'),
	            //        ypos: itemBox.attr('data-box-y'),
	            //        rotation: itemBox.attr('data-box-r'),
	            //        floorId: floorCfg.id
	            //    };
	
	            //    rooms.push(room);
	            //});
	
	            //let floor = {
	            //    id: floorCfg.id,
	            //    officeId: floorCfg.officeId,
	            //    name: floorCfg.name,
	            //    width: floorCfg.width,
	            //    height: floorCfg.height,
	            //    xpos: floorCfg.xpos,
	            //    ypos: floorCfg.ypos,
	            //    image: imgPath,
	            //    rooms: rooms
	            //}
	
	            //let action = "/api/floors/" + floorCfg.id;
	            //let data = JSON.stringify(floor);
	
	            //$.ajax({
	            //    contentType: "application/json",
	            //    dataType: 'json',
	            //    type: "PUT",
	            //    url: action,
	            //    data: data,
	            //    cache: false,
	            //    success: function (response) {
	
	            //        if (debugMode) {
	            //            console.log(response);
	            //        }
	
	            //    },
	            //    error: function (xhr, ajaxOptions, thrownError) {
	            //        if (debugMode) {
	            //            console.log(xhr, ajaxOptions, thrownError);
	            //        }
	            //    }
	            //});
	        }
	        /*SAVE END*/
	
	        /*SAVE START*/
	
	    }, {
	        key: 'onFloorFinderClick',
	        value: function onFloorFinderClick(evt) {
	
	            if (debugMode) console.log(evt);
	            var url = $(this).data('url');
	
	            //window.location.href = url;
	        }
	        /*SAVE END*/
	
	    }, {
	        key: 'render',
	        value: function render() {
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
	                                        {
	                                            id: 'zoom-out-floor-btn',
	                                            className: 'mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored designer-toolbar-zoom-button' },
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
	                                    {
	                                        id: 'save-floor-btn',
	                                        onClick: this.bind.onSaveFloorClick(this),
	                                        className: 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent designer-toolbar-button' },
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
	                                        onClick: this.bind.onFloorFinderClick(this),
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
	                    React.createElement(_searchPanel2.default, null)
	                )
	            );
	        }
	    }]);
	
	    return Toolbar;
	}(React.Component);
	
	Toolbar.displayName = "Toolbar";
	
	exports.default = Toolbar;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 9); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "toolbar.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 10)(module)))

/***/ }

})
//# sourceMappingURL=0.25b2e7ce2992d0d10bdb.hot-update.js.map