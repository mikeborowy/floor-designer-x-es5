webpackHotUpdate(0,{

/***/ 133:
/*!******************************************************!*\
  !*** ./app/components/designerScreen/stage/stage.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 9), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react/lib/ReactMount */ 6), React = __webpack_require__(/*! react */ 2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _jquery = __webpack_require__(/*! jquery */ 63);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _roomsCfg = __webpack_require__(/*! ../common/roomsCfg */ 123);
	
	var _roomsCfg2 = _interopRequireDefault(_roomsCfg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Stage = function (_React$Component) {
	    _inherits(Stage, _React$Component);
	
	    function Stage(props) {
	        _classCallCheck(this, Stage);
	
	        var _this = _possibleConstructorReturn(this, (Stage.__proto__ || Object.getPrototypeOf(Stage)).call(this, props));
	
	        var floorCfg = {
	            id: 4,
	            officeId: 1,
	            name: "Floor 1",
	            width: 15,
	            height: 10,
	            xpos: 0,
	            ypos: 0,
	            image: null,
	            rooms: []
	        };
	
	        var imgPath = "../Images/blueprints/bgnd_12x10.jpg";
	
	        var gridCellWidth = _roomsCfg2.default.CELL_WIDTH;
	        var gridCellHeight = _roomsCfg2.default.CELL_HEIGHT;
	        var shapeSizes = _roomsCfg2.default.SHAPES_SIZES;
	        var paddingLeft = _roomsCfg2.default.SHAPE_CFG.PADDING_LEFT;
	        var paddingTop = _roomsCfg2.default.SHAPE_CFG.PADDING_TOP;
	        var itemBorderSize = _roomsCfg2.default.SHAPE_CFG.BORDER_SIZE;
	        return _this;
	    }
	
	    _createClass(Stage, [{
	        key: 'stageInit',
	        value: function stageInit() {
	
	            (0, _jquery2.default)('#stage').width(floorCfg.width * gridCellWidth);
	            (0, _jquery2.default)('#stage').height(floorCfg.height * gridCellHeight);
	
	            (0, _jquery2.default)('#stage-items-container').width(floorCfg.width * gridCellWidth);
	            (0, _jquery2.default)('#stage-items-container').height(floorCfg.height * gridCellHeight);
	
	            var img = (0, _jquery2.default)('#stage').find('img');
	            img.attr('src', floorCfg.image);
	            img.width(floorCfg.width * gridCellWidth);
	            img.height(floorCfg.height * gridCellHeight);
	
	            createGrid(gridCellWidth, gridCellHeight, floorCfg.width, floorCfg.height);
	        }
	    }, {
	        key: 'createGrid',
	        value: function createGrid(gridCellWidth, gridCellHeight, gridColumns, gridRows) {
	
	            var _stage = (0, _jquery2.default)('#stage');
	            var _stageGridBgnd = (0, _jquery2.default)('#stage-grid-bgnd');
	            var _stageGridLive = (0, _jquery2.default)('#stage-grid-live');
	
	            var w = 1;
	            var h = 1;
	
	            for (i = 0; i < gridRows * gridColumns; i++) {
	
	                x = i * gridCellWidth % (gridColumns * gridCellWidth);
	                y = Math.floor(i / gridColumns) * gridCellHeight;
	
	                (0, _jquery2.default)("<div/>").attr('id', i).attr('class', 'stage-board-field-highlight').css({
	                    position: "absolute",
	                    width: gridCellWidth * w,
	                    height: gridCellHeight * h,
	                    top: y, left: x
	                }).prependTo(_stageGridLive);
	
	                (0, _jquery2.default)("<div></div>").attr('id', i).attr('class', 'stage-board-field').css({
	                    position: "absolute",
	                    //boxShadow: 'inset 0px 0px 0px 10px #f00',
	                    border: "1px dashed rgba(0,0,0,0.05)",
	                    width: gridCellWidth,
	                    height: gridCellHeight,
	                    top: y, left: x
	                }).prependTo(_stageGridBgnd);
	            }
	
	            loadItems();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { id: 'stage-container' },
	                React.createElement('div', { id: 'stage-top' }),
	                React.createElement(
	                    'div',
	                    { id: 'stage' },
	                    React.createElement('img', { id: 'stage-bgnd', src: imgPath }),
	                    React.createElement('div', { id: 'stage-grid-bgnd' }),
	                    React.createElement('div', { id: 'stage-grid-live' }),
	                    React.createElement('div', { id: 'stage-items-container' })
	                ),
	                React.createElement('div', { id: 'stage-bottom' })
	            );
	        }
	    }]);
	
	    return Stage;
	}(React.Component);
	
	exports.default = Stage;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "stage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 12)(module)))

/***/ }

})
//# sourceMappingURL=0.ce91bdf7e24e25ba8267.hot-update.js.map