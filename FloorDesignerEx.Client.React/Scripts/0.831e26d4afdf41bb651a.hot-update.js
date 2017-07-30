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
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var React = _interopRequireWildcard(_react);
	
	var _jquery = __webpack_require__(/*! jquery */ 63);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _roomsCfg = __webpack_require__(/*! ../common/roomsCfg */ 123);
	
	var _roomsCfg2 = _interopRequireDefault(_roomsCfg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var Stage = function Stage() {
	
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
	
	    var draggedObj = void 0;
	
	    function stageInit() {
	
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
	
	    function createGrid(gridCellWidth, gridCellHeight, gridColumns, gridRows) {
	
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
	
	    function loadItems() {
	
	        if (loadedItems.length > 0) {
	            _jquery2.default.each(loadedItems, function (i, val) {
	
	                TweenLite.delayedCall(0.1 * i, function () {
	
	                    var id = loadedItems[i].id;
	                    var shape = loadedItems[i].shape;
	                    var w = loadedItems[i].width;
	                    var h = loadedItems[i].height;
	                    var x = loadedItems[i].xpos;
	                    var y = loadedItems[i].ypos;
	                    var r = loadedItems[i].rotation;
	
	                    var shapeSizeTableObj = findValueByKey(shapeSizes, shape);
	
	                    console.log(shapeSizeTableObj);
	
	                    draggedObj = {};
	                    draggedObj.id = id;
	                    draggedObj.sh = shape;
	                    draggedObj.x = x;
	                    draggedObj.y = y;
	                    draggedObj.r = r;
	                    draggedObj.w = w;
	                    draggedObj.h = h;
	                    draggedObj.tox = shapeSizeTableObj.t.x;
	                    draggedObj.toy = shapeSizeTableObj.t.y;
	
	                    currentItem = createStageItem(draggedObj.id, draggedObj.x, draggedObj.y, draggedObj.r, draggedObj.tox, draggedObj.toy, draggedObj.w, draggedObj.h, draggedObj.sh);
	                });
	            });
	        }
	    }
	
	    function clearStage() {
	
	        (0, _jquery2.default)('#stage-grid-bgnd').html('');
	        (0, _jquery2.default)('#stage-grid-live').html('');
	        (0, _jquery2.default)('#stage-items-container').html('');
	    }
	
	    function findValueByKey(array, key) {
	
	        for (var i = 0; i < array.length; i++) {
	
	            if (array[i][key]) {
	
	                return array[i][key];
	            }
	        }
	        return null;
	    }
	
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
	};
	
	exports.default = Stage;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 11); if (makeExportsHot(module, __webpack_require__(/*! react */ 2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "stage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/webpack/buildin/module.js */ 12)(module)))

/***/ }

})
//# sourceMappingURL=0.831e26d4afdf41bb651a.hot-update.js.map