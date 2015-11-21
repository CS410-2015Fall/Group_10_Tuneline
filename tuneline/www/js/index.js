webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _componentsApp = __webpack_require__(160);

	var _componentsApp2 = _interopRequireDefault(_componentsApp);

	var _componentsMainLayout = __webpack_require__(327);

	var _componentsMainLayout2 = _interopRequireDefault(_componentsMainLayout);

	var injectTapEventPlugin = __webpack_require__(449);

	//Needed for onTouchTap
	//Can go away when react 1.0 release
	//Check this repo:
	//https://github.com/zilverline/react-tap-event-plugin

	Promise.onPossiblyUnhandledRejection(function (err) {
	    throw err;
	});

	window.handleError = function (e) {
	    console.error('error', e, e.stack);
	    alert(e.stack);
	};

	window.onerror = function (msg, url, line, column, e) {
	    window.handleError(e ? e : new Error(msg + '(' + url + '):' + line + '-' + column));
	    return true;
	};

	try {
	    document.addEventListener('deviceready', function () {
	        injectTapEventPlugin();
	        _react2['default'].render(_react2['default'].createElement(_componentsMainLayout2['default'], null), document.body);
	    }, false);
	} catch (e) {
	    handleError(e);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactcssDecorator = __webpack_require__(161);

	var _reactcssDecorator2 = _interopRequireDefault(_reactcssDecorator);

	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, _App);

	        _get(Object.getPrototypeOf(_App.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(App, [{
	        key: 'classes',
	        value: function classes() {
	            return {
	                'default': {
	                    title: {
	                        color: 'red'
	                    },
	                    content: {
	                        color: 'blue'
	                    }
	                }
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'h1',
	                    { style: this.styles().title },
	                    'Hello Ben Nguyen'
	                ),
	                _react2['default'].createElement(
	                    'p',
	                    { style: this.styles().content },
	                    'Welcome to tuneline'
	                )
	            );
	        }
	    }]);

	    var _App = App;
	    App = (0, _reactcssDecorator2['default'])(App) || App;
	    return App;
	})(_react2['default'].Component);

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var RaisedButton = __webpack_require__(328);
	var FlatButton = __webpack_require__(366);
	var Tabs = __webpack_require__(370);
	var Tab = __webpack_require__(374);
	var AppBar = __webpack_require__(375);

	var RecordScreen = __webpack_require__(381);
	var TunelineScreen = __webpack_require__(433);
	var NowPlaying = __webpack_require__(443);

	var Database = __webpack_require__(432);

	var MainLayout = React.createClass({
	  displayName: 'MainLayout',

	  getInitialState: function getInitialState() {
	    this.getSoundBytes();
	    return { sounds: null,
	      nowPlayingScreen: React.createElement(NowPlaying, null) };
	  },
	  playSoundbite: function playSoundbite(soundbite) {
	    this.setState({ nowPlayingScreen: React.createElement(NowPlaying, { soundbite: soundbite }) });
	    this.changeTabs(3);
	  },
	  changeTabs: function changeTabs(tabIdx) {
	    this.refs.tabBar.setState({ selectedIndex: tabIdx });
	  },
	  getSoundBytes: function getSoundBytes() {
	    Database.getSounds((function (soundbites) {
	      alert(JSON.stringify(soundbites));
	      //this.setState({
	      //		sounds: soundbites
	      //	});
	    }).bind(this));
	  },
	  saveSoundbite: function saveSoundbite(soundbite) {

	    console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#@# Main Layout #@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#@#");

	    var name = soundbite.name;
	    var url = soundbite.url;
	    var sid = soundbite.id;
	    var filename = soundbite.filename;
	    var devicePlatform = device.platform;

	    console.log("Name: " + name + " URL: " + url + " SID: " + sid + " FN: " + filename + " Device: " + devicePlatform);

	    //if(new String(devicePlatform).valueOf() == new String('iOS').valueOf()) {

	    if (device.platform === 'iOS') {
	      console.log("########## Within iOS if statement");
	      //Move from temp to cordova.file.documentsDirectory + fileName + '.wav'

	      /*
	      console.log("filename: " + soundbite.filename);
	      console.log("tempDirectory: " + cordova.file.tempDirectory);
	      console.log("documentsDirectory: " + cordova.file.documentsDirectory);
	       //cordova.file.moveFile(cordova.file.tempDirectory, soundbite.filename, cordova.file.documentsDirectory, soundbite.filename);
	       var file = window.resolveLocalFileSystemURL(soundbite.filename, function() { console.log("Move Successful")}, function() { console.log("Move Failed")});
	       file.cordova.file.moveTo(cordova.file.documentDirectory, soundbite.filename, function() { console.log("Move Successful")}, function() { console.log("Move Failed")});
	        //function moveFile(fileUri) {
	      //  window.resolveLocalFileSystemURL(
	      //    soundbite.filename ,
	      //    function(fileEntry){
	      //      newFileUri  = cordova.file.dataDirectory + "images/";
	      //      oldFileUri  = soundbite.filename;
	      //      fileExt     = "." + oldFileUri.split('.').pop();
	      //
	      //      newFileName = guid("car") + fileExt;
	      //      window.resolveLocalFileSystemURL(cordova.file.dataDirectory,
	      //        function(dirEntry) {
	      //          // move the file to a new directory and rename it
	      //          fileEntry.moveTo(dirEntry, newFileName, successCallback, errorCallback);
	      //        },
	      //        errorCallback);
	      //    },
	      //    errorCallback);
	      //}
	      //
	      //soundbite.filename = cordova.file.documentsDirectory + '/' + soundbite.filename;
	        console.log("full filename: " + soundbite.filename);
	      */
	    }

	    if (sid) {
	      // db.save(metadata)
	      console.log("### SID exists");
	      Database.updateSound(soundbite);
	    } else {
	      // db.edit(metadata)
	      console.log("### SID does not exist");
	      Database.saveSound(soundbite);
	    }

	    this.refs.tabBar.setState({ selectedIndex: 0 });
	  },
	  setSounds: function setSounds(tab) {
	    this.getSoundBytes();
	  },
	  render: function render() {
	    var tabBarStyle = {
	      position: 'fixed',
	      bottom: '0px',
	      width: '100%'
	    };

	    var inkBarStyle = {
	      position: 'fixed',
	      bottom: '46px'
	    };

	    var tabContainerStyle = {
	      position: 'fixed',
	      width: '100%',
	      zIndex: '-999',
	      overflowY: 'auto',
	      marginTop: '68px',
	      marginBottom: '48px',
	      top: '0px',
	      height: '80vh'
	    };
	    var soundbites = JSON.stringify(this.state.sounds);

	    return React.createElement(
	      'div',
	      null,
	      React.createElement(AppBar, { title: 'Tuneline',
	        iconElementRight: React.createElement(FlatButton, { label: 'Now Playing', onClick: this.playSoundbite }) }),
	      React.createElement(
	        Tabs,
	        {
	          ref: 'tabBar',
	          initialSelectedIndex: 1,
	          style: tabBarStyle,
	          inkBarStyle: inkBarStyle,
	          contentContainerStyle: tabContainerStyle },
	        React.createElement(
	          Tab,
	          { label: React.createElement(
	              'span',
	              null,
	              React.createElement('i', { className: 'ion-music-note' }),
	              React.createElement('br', null),
	              'Tuneline'
	            ), onActive: this.setSounds },
	          soundbites
	        ),
	        React.createElement(
	          Tab,
	          { label: React.createElement(
	              'span',
	              null,
	              React.createElement('i', { className: 'ion-android-microphone' }),
	              React.createElement('br', null),
	              'Record'
	            ) },
	          React.createElement(RecordScreen, { callbackParent: this.saveSoundbite })
	        ),
	        React.createElement(Tab, { label: React.createElement(
	            'span',
	            null,
	            React.createElement('i', { className: 'ion-android-person' }),
	            React.createElement('br', null),
	            'Profile'
	          ) }),
	        React.createElement(
	          Tab,
	          { style: { display: 'none' }, label: React.createElement(
	              'span',
	              null,
	              React.createElement('i', { className: 'ion-play' }),
	              React.createElement('br', null),
	              'Now Playing'
	            ) },
	          this.state.nowPlayingScreen
	        )
	      )
	    );
	  }
	});

	module.exports = MainLayout;

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var ColorManipulator = __webpack_require__(339);
	var Typography = __webpack_require__(340);
	var EnhancedButton = __webpack_require__(342);
	var Paper = __webpack_require__(364);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	function validateLabel(props, propName, componentName) {
	  if (!props.children && !props.label) {
	    return new Error('Required prop label or children was not ' + 'specified in ' + componentName + '.');
	  }
	}

	var RaisedButton = React.createClass({
	  displayName: 'RaisedButton',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    className: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    label: validateLabel,
	    onMouseDown: React.PropTypes.func,
	    onMouseUp: React.PropTypes.func,
	    onMouseLeave: React.PropTypes.func,
	    onTouchEnd: React.PropTypes.func,
	    onTouchStart: React.PropTypes.func,
	    primary: React.PropTypes.bool,
	    secondary: React.PropTypes.bool,
	    labelStyle: React.PropTypes.object,
	    backgroundColor: React.PropTypes.string,
	    labelColor: React.PropTypes.string,
	    disabledBackgroundColor: React.PropTypes.string,
	    disabledLabelColor: React.PropTypes.string,
	    fullWidth: React.PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    var zDepth = this.props.disabled ? 0 : 1;
	    return {
	      hovered: false,
	      touched: false,
	      initialZDepth: zDepth,
	      zDepth: zDepth,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var zDepth = nextProps.disabled ? 0 : 1;
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({
	      zDepth: zDepth,
	      initialZDepth: zDepth,
	      muiTheme: newMuiTheme
	    });
	  },

	  _getBackgroundColor: function _getBackgroundColor() {
	    var disabledColor = this.props.disabledBackgroundColor ? this.props.disabledBackgroundColor : this.getTheme().disabledColor;

	    return this.props.disabled ? disabledColor : this.props.backgroundColor ? this.props.backgroundColor : this.props.primary ? this.getTheme().primaryColor : this.props.secondary ? this.getTheme().secondaryColor : this.getTheme().color;
	  },

	  _getLabelColor: function _getLabelColor() {
	    var disabledColor = this.props.disabledLabelColor ? this.props.disabledLabelColor : this.getTheme().disabledTextColor;

	    return this.props.disabled ? disabledColor : this.props.labelColor ? this.props.labelColor : this.props.primary ? this.getTheme().primaryTextColor : this.props.secondary ? this.getTheme().secondaryTextColor : this.getTheme().textColor;
	  },

	  getThemeButton: function getThemeButton() {
	    return this.state.muiTheme.button;
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.raisedButton;
	  },

	  getStyles: function getStyles() {

	    var amount = this.props.primary || this.props.secondary ? 0.4 : 0.08;
	    var styles = {
	      root: {
	        backgroundColor: 'none',
	        display: 'inline-block',
	        minWidth: this.props.fullWidth ? '100%' : this.getThemeButton().minWidth,
	        height: this.getThemeButton().height,
	        transition: Transitions.easeOut()
	      },
	      container: {
	        position: 'relative',
	        height: '100%',
	        width: '100%',
	        padding: 0,
	        overflow: 'hidden',
	        borderRadius: 2,
	        transition: Transitions.easeOut(),
	        backgroundColor: this._getBackgroundColor(),

	        //This is need so that ripples do not bleed
	        //past border radius.
	        //See: http://stackoverflow.com/questions/17298739/css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
	        transform: 'translate3d(0, 0, 0)'
	      },
	      label: {
	        position: 'relative',
	        opacity: 1,
	        fontSize: '14px',
	        letterSpacing: 0,
	        textTransform: this.getTheme().textTransform ? this.getTheme().textTransform : this.getThemeButton().textTransform ? this.getThemeButton().textTransform : 'uppercase',
	        fontWeight: Typography.fontWeightMedium,
	        margin: 0,
	        padding: '0px ' + this.state.muiTheme.rawTheme.spacing.desktopGutterLess + 'px',
	        userSelect: 'none',
	        lineHeight: this.props.style && this.props.style.height ? this.props.style.height : this.getThemeButton().height + 'px',
	        color: this._getLabelColor()
	      },
	      overlay: {
	        transition: Transitions.easeOut(),
	        top: 0
	      },
	      overlayWhenHovered: {
	        backgroundColor: ColorManipulator.fade(this._getLabelColor(), amount)
	      }
	    };
	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var label = _props.label;
	    var primary = _props.primary;
	    var secondary = _props.secondary;

	    var other = _objectWithoutProperties(_props, ['disabled', 'label', 'primary', 'secondary']);

	    var styles = this.getStyles();

	    var labelElement = undefined;
	    if (label) {
	      labelElement = React.createElement(
	        'span',
	        { style: this.prepareStyles(styles.label, this.props.labelStyle) },
	        label
	      );
	    }

	    var rippleColor = styles.label.color;
	    var rippleOpacity = !(primary || secondary) ? 0.1 : 0.16;

	    var buttonEventHandlers = disabled ? null : {
	      onMouseDown: this._handleMouseDown,
	      onMouseUp: this._handleMouseUp,
	      onMouseLeave: this._handleMouseLeave,
	      onMouseEnter: this._handleMouseEnter,
	      onTouchStart: this._handleTouchStart,
	      onTouchEnd: this._handleTouchEnd,
	      onKeyboardFocus: this._handleKeyboardFocus
	    };

	    return React.createElement(
	      Paper,
	      {
	        style: this.mergeStyles(styles.root, this.props.style),
	        zDepth: this.state.zDepth },
	      React.createElement(
	        EnhancedButton,
	        _extends({}, other, buttonEventHandlers, {
	          ref: 'container',
	          disabled: disabled,
	          style: this.mergeStyles(styles.container),
	          focusRippleColor: rippleColor,
	          touchRippleColor: rippleColor,
	          focusRippleOpacity: rippleOpacity,
	          touchRippleOpacity: rippleOpacity }),
	        React.createElement(
	          'div',
	          { ref: 'overlay', style: this.prepareStyles(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered) },
	          labelElement,
	          this.props.children
	        )
	      )
	    );
	  },

	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) {
	      this.setState({ zDepth: this.state.initialZDepth + 1 });
	    }
	    if (this.props.onMouseDown) this.props.onMouseDown(e);
	  },

	  _handleMouseUp: function _handleMouseUp(e) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onMouseUp) this.props.onMouseUp(e);
	  },

	  _handleMouseLeave: function _handleMouseLeave(e) {
	    if (!this.refs.container.isKeyboardFocused()) this.setState({ zDepth: this.state.initialZDepth, hovered: false });
	    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
	  },

	  _handleMouseEnter: function _handleMouseEnter(e) {
	    if (!this.refs.container.isKeyboardFocused() && !this.state.touch) {
	      this.setState({ hovered: true });
	    }
	    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
	  },

	  _handleTouchStart: function _handleTouchStart(e) {
	    this.setState({
	      touch: true,
	      zDepth: this.state.initialZDepth + 1
	    });
	    if (this.props.onTouchStart) this.props.onTouchStart(e);
	  },

	  _handleTouchEnd: function _handleTouchEnd(e) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onTouchEnd) this.props.onTouchEnd(e);
	  },

	  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
	    if (keyboardFocused && !this.props.disabled) {
	      this.setState({ zDepth: this.state.initialZDepth + 1 });
	      var amount = this.props.primary || this.props.secondary ? 0.4 : 0.08;
	      ReactDOM.findDOMNode(this.refs.overlay).style.backgroundColor = ColorManipulator.fade(this.prepareStyles(this.getStyles().label, this.props.labelStyle).color, amount);
	    } else if (!this.state.hovered) {
	      this.setState({ zDepth: this.state.initialZDepth });
	      ReactDOM.findDOMNode(this.refs.overlay).style.backgroundColor = 'transparent';
	    }
	  }
	});

	module.exports = RaisedButton;


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(6);


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var ImmutabilityHelper = __webpack_require__(331);
	var Styles = __webpack_require__(334);

	// This mixin isn't necessary and will be removed in v0.11

	/**
	 *	@params:
	 *	styles = Current styles.
	 *  props = New style properties that will override the current style.
	 */
	module.exports = {

	  propTypes: {
	    style: React.PropTypes.object
	  },

	  //Moved this function to ImmutabilityHelper.merge
	  mergeStyles: function mergeStyles() {
	    return ImmutabilityHelper.merge.apply(this, arguments);
	  },

	  //Moved this function to /utils/styles.js
	  mergeAndPrefix: function mergeAndPrefix() {
	    return Styles.mergeAndPrefix.apply(this, arguments);
	  },

	  // prepareStyles is used to merge multiple styles, make sure they are flipped to rtl
	  // if needed, and then autoprefix them. It should probably always be used instead of
	  // mergeAndPrefix.
	  //
	  // Never call this on the same style object twice. As a rule of thumb,
	  //   only call it when passing style attribute to html elements.
	  // If you call it twice you'll get a warning anyway.
	  prepareStyles: function prepareStyles() {
	    return Styles.prepareStyles.apply(Styles, [this.state && this.state.muiTheme || this.context.muiTheme].concat([].slice.apply(arguments)));
	  }
	};


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var update = __webpack_require__(332);

	function mergeSingle(objA, objB) {
	  if (!objA) return objB;
	  if (!objB) return objA;
	  return update(objA, { $merge: objB });
	}

	module.exports = {

	  merge: function merge() {
	    var args = Array.prototype.slice.call(arguments, 0);
	    var base = args[0];

	    for (var i = 1; i < args.length; i++) {
	      if (args[i]) {
	        base = mergeSingle(base, args[i]);
	      }
	    }
	    return base;
	  },

	  mergeItem: function mergeItem(obj, key, newValueObject) {
	    var command = {};
	    command[key] = { $merge: newValueObject };
	    return update(obj, command);
	  },

	  push: function push(array, obj) {
	    var newObj = Array.isArray(obj) ? obj : [obj];
	    return update(array, { $push: newObj });
	  },

	  shift: function shift(array) {
	    return update(array, { $splice: [[0, 1]] });
	  }

	};


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(333);

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var assign = __webpack_require__(41);
	var keyOf = __webpack_require__(81);
	var invariant = __webpack_require__(15);
	var hasOwnProperty = ({}).hasOwnProperty;

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });

	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
	}

	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;

	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }

	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }

	  return nextValue;
	}

	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'jonny22234';

	var AutoPrefix = __webpack_require__(335);
	var ImmutabilityHelper = __webpack_require__(331);

	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;

	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

	module.exports = {

	  mergeAndPrefix: function mergeAndPrefix() {
	    var mergedStyles = ImmutabilityHelper.merge.apply(this, arguments);
	    return AutoPrefix.all(mergedStyles);
	  },

	  // This function ensures that `style` supports both ltr and rtl directions by checking
	  //   `styleConstants` in `muiTheme` and replacing attribute keys if necessary.
	  ensureDirection: function ensureDirection(muiTheme, style) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (style.didFlip) {
	        console.warn(new Error('You\'re calling `ensureDirection` on the same style object twice.'));
	      }
	      style = ImmutabilityHelper.merge({
	        didFlip: 'true'
	      }, style);
	    }

	    // Left to right is the default. No need to flip anything.
	    if (!muiTheme.isRtl) return style;

	    var flippedAttributes = {
	      // Keys and their replacements.
	      right: 'left',
	      left: 'right',
	      marginRight: 'marginLeft',
	      marginLeft: 'marginRight',
	      paddingRight: 'paddingLeft',
	      paddingLeft: 'paddingRight',
	      borderRight: 'borderLeft',
	      borderLeft: 'borderRight'
	    };

	    var newStyle = {};

	    Object.keys(style).forEach(function (attribute) {
	      var value = style[attribute];
	      var key = attribute;

	      if (flippedAttributes.hasOwnProperty(attribute)) {
	        key = flippedAttributes[attribute];
	      }

	      switch (attribute) {
	        case 'float':
	        case 'textAlign':
	          if (value === 'right') {
	            value = 'left';
	          } else if (value === 'left') {
	            value = 'right';
	          }
	          break;
	        case 'direction':
	          if (value === 'ltr') {
	            value = 'rtl';
	          } else if (value === 'rtl') {
	            value = 'ltr';
	          }
	          break;
	        case 'transform':
	          var matches = undefined;
	          if (matches = value.match(reTranslate)) {
	            value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	          }
	          if (matches = value.match(reSkew)) {
	            value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ',' + -parseFloat(matches[7]) + matches[8] : '');
	          }
	          break;
	        case 'transformOrigin':
	          if (value.indexOf('right') > -1) {
	            value = value.replace('right', 'left');
	          } else if (value.indexOf('left') > -1) {
	            value = value.replace('left', 'right');
	          }
	          break;
	      }

	      newStyle[key] = value;
	    });

	    return newStyle;
	  },

	  prepareStyles: function prepareStyles(muiTheme) {
	    for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      styles[_key - 1] = arguments[_key];
	    }

	    styles = styles.length > 1 ? ImmutabilityHelper.merge.apply(this, styles) : styles[0] || {};
	    var flipped = this.ensureDirection(muiTheme, styles);
	    return AutoPrefix.all(flipped);
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var isBrowser = __webpack_require__(336);

	var Modernizr = isBrowser ? __webpack_require__(337) : undefined;

	//Keep track of already prefixed keys so we can skip Modernizr prefixing
	var prefixedKeys = {};

	module.exports = {

	  all: function all(styles) {
	    var prefixedStyle = {};
	    for (var key in styles) {
	      prefixedStyle[this.single(key)] = styles[key];
	    }
	    return prefixedStyle;
	  },

	  set: function set(style, key, value) {
	    style[this.single(key)] = value;
	  },

	  single: function single(key) {

	    //If a browser doesn't exist, we can't prefix with Modernizr so
	    //just return the key
	    if (!isBrowser) return key;

	    //Check if we've prefixed this key before, just return it
	    if (prefixedKeys.hasOwnProperty(key)) return prefixedKeys[key];

	    //Key hasn't been prefixed yet, prefix with Modernizr
	    var prefKey = Modernizr.prefixed(key);

	    // Windows 7 Firefox has an issue with the implementation of Modernizr.prefixed
	    // and is capturing 'false' as the CSS property name instead of the non-prefixed version.
	    if (prefKey === false) return key;

	    //Save the key off for the future and return the prefixed key
	    prefixedKeys[key] = prefKey;
	    return prefKey;
	  },

	  singleHyphened: function singleHyphened(key) {
	    var str = this.single(key);

	    return !str ? key : str.replace(/([A-Z])/g, function (str, m1) {
	      return '-' + m1.toLowerCase();
	    }).replace(/^ms-/, '-ms-');
	  }

	};


/***/ },
/* 336 */
/***/ function(module, exports) {

	'jonny22234';

	module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);


/***/ },
/* 337 */
/***/ function(module, exports) {

	/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
	 * Build: http://modernizr.com/download/#-borderradius-boxshadow-opacity-csstransforms-csstransforms3d-csstransitions-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
	 */

	'jonny22234';

	module.exports = (function (window, document, undefined) {

	    var version = '2.8.3',
	        Modernizr = {},
	        docElement = document.documentElement,
	        mod = 'modernizr',
	        modElem = document.createElement(mod),
	        mStyle = modElem.style,
	        prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
	        omPrefixes = 'Webkit Moz O ms',
	        cssomPrefixes = omPrefixes.split(' '),
	        domPrefixes = omPrefixes.toLowerCase().split(' '),
	        tests = {},
	        classes = [],
	        slice = classes.slice,
	        featureName = undefined,
	        injectElementWithStyles = function injectElementWithStyles(rule, callback, nodes, testnames) {

	        var style = undefined,
	            ret = undefined,
	            node = undefined,
	            docOverflow = undefined,
	            div = document.createElement('div'),
	            body = document.body,
	            fakeBody = body || document.createElement('body');

	        if (parseInt(nodes, 10)) {
	            while (nodes--) {
	                node = document.createElement('div');
	                node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
	                div.appendChild(node);
	            }
	        }

	        style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
	        div.id = mod;
	        (body ? div : fakeBody).innerHTML += style;
	        fakeBody.appendChild(div);
	        if (!body) {
	            fakeBody.style.background = '';
	            fakeBody.style.overflow = 'hidden';
	            docOverflow = docElement.style.overflow;
	            docElement.style.overflow = 'hidden';
	            docElement.appendChild(fakeBody);
	        }

	        ret = callback(div, rule);
	        if (!body) {
	            fakeBody.parentNode.removeChild(fakeBody);
	            docElement.style.overflow = docOverflow;
	        } else {
	            div.parentNode.removeChild(div);
	        }

	        return !!ret;
	    },
	        _hasOwnProperty = ({}).hasOwnProperty,
	        hasOwnProp = undefined;

	    function is(obj, type) {
	        return typeof obj === type;
	    }

	    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
	        hasOwnProp = function (object, property) {
	            return _hasOwnProperty.call(object, property);
	        };
	    } else {
	        hasOwnProp = function (object, property) {
	            return property in object && is(object.constructor.prototype[property], 'undefined');
	        };
	    }

	    if (!Function.prototype.bind) {
	        Function.prototype.bind = function bind(that) {

	            var target = this;

	            if (typeof target != "function") {
	                throw new TypeError();
	            }

	            var args = slice.call(arguments, 1),
	                bound = function bound() {

	                if (this instanceof bound) {

	                    var F = function F() {};
	                    F.prototype = target.prototype;
	                    var _self = new F();

	                    var result = target.apply(_self, args.concat(slice.call(arguments)));
	                    if (Object(result) === result) {
	                        return result;
	                    }
	                    return _self;
	                } else {

	                    return target.apply(that, args.concat(slice.call(arguments)));
	                }
	            };

	            return bound;
	        };
	    }

	    function setCss(str) {
	        mStyle.cssText = str;
	    }

	    function setCssAll(str1, str2) {
	        return setCss(prefixes.join(str1 + ';') + (str2 || ''));
	    }

	    function contains(str, substr) {
	        return !! ~('' + str).indexOf(substr);
	    }

	    function testProps(props, prefixed) {
	        for (var i in props) {
	            var prop = props[i];
	            if (!contains(prop, "-") && mStyle[prop] !== undefined) {
	                return prefixed == 'pfx' ? prop : true;
	            }
	        }
	        return false;
	    }

	    function testDOMProps(props, obj, elem) {
	        for (var i in props) {
	            var item = obj[props[i]];
	            if (item !== undefined) {

	                if (elem === false) return props[i];

	                if (is(item, 'function')) {
	                    return item.bind(elem || obj);
	                }

	                return item;
	            }
	        }
	        return false;
	    }

	    function testPropsAll(prop, prefixed, elem) {

	        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
	            props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

	        if (is(prefixed, "string") || is(prefixed, "undefined")) {
	            return testProps(props, prefixed);
	        } else {
	            props = (prop + ' ' + domPrefixes.join(ucProp + ' ') + ucProp).split(' ');
	            return testDOMProps(props, prefixed, elem);
	        }
	    }

	    tests.borderradius = function () {
	        return testPropsAll('borderRadius');
	    };

	    tests.boxshadow = function () {
	        return testPropsAll('boxShadow');
	    };

	    tests.opacity = function () {
	        setCssAll('opacity:.55');

	        return (/^0.55$/.test(mStyle.opacity)
	        );
	    };
	    tests.csstransforms = function () {
	        return !!testPropsAll('transform');
	    };

	    tests.csstransforms3d = function () {

	        var ret = !!testPropsAll('perspective');

	        if (ret && 'webkitPerspective' in docElement.style) {

	            injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (node) {
	                ret = node.offsetLeft === 9 && node.offsetHeight === 3;
	            });
	        }
	        return ret;
	    };

	    tests.csstransitions = function () {
	        return testPropsAll('transition');
	    };

	    for (var feature in tests) {
	        if (hasOwnProp(tests, feature)) {
	            featureName = feature.toLowerCase();
	            Modernizr[featureName] = tests[feature]();

	            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
	        }
	    }

	    Modernizr.addTest = function (feature, test) {
	        if (typeof feature == 'object') {
	            for (var key in feature) {
	                if (hasOwnProp(feature, key)) {
	                    Modernizr.addTest(key, feature[key]);
	                }
	            }
	        } else {

	            feature = feature.toLowerCase();

	            if (Modernizr[feature] !== undefined) {
	                return Modernizr;
	            }

	            test = typeof test == 'function' ? test() : test;

	            if (typeof enableClasses !== "undefined" && enableClasses) {
	                docElement.className += ' ' + (test ? '' : 'no-') + feature;
	            }
	            Modernizr[feature] = test;
	        }

	        return Modernizr;
	    };

	    setCss('');

	    Modernizr._version = version;

	    Modernizr._prefixes = prefixes;
	    Modernizr._domPrefixes = domPrefixes;
	    Modernizr._cssomPrefixes = cssomPrefixes;

	    Modernizr.testProp = function (prop) {
	        return testProps([prop]);
	    };

	    Modernizr.testAllProps = testPropsAll;

	    Modernizr.testStyles = injectElementWithStyles;
	    Modernizr.prefixed = function (prop, obj, elem) {
	        if (!obj) {
	            return testPropsAll(prop, 'pfx');
	        } else {
	            return testPropsAll(prop, obj, elem);
	        }
	    };

	    return Modernizr;
	})(window, window.document);


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var AutoPrefix = __webpack_require__(335);

	module.exports = {

	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

	  easeOut: function easeOut(duration, property, delay, easeFunction) {

	    easeFunction = easeFunction || this.easeOutFunction;

	    if (property && Object.prototype.toString.call(property) === '[object Array]') {

	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }
	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },

	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || "linear";

	    return AutoPrefix.singleHyphened(property) + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};


/***/ },
/* 339 */
/***/ function(module, exports) {

	'jonny22234';

	module.exports = {

	  /**
	   * The relative brightness of any point in a colorspace, normalized to 0 for
	   * darkest black and 1 for lightest white. RGB colors only. Does not take
	   * into account alpha values.
	   *
	   * TODO:
	   * - Take into account alpha values.
	   * - Identify why there are minor discrepancies for some use cases
	   *   (i.e. #F0F & #FFF). Note that these cases rarely occur.
	   *
	   * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	   */
	  _luminance: function _luminance(color) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('rgb') > -1) {
	      var rgb = color.values.map(function (val) {
	        val /= 255; // normalized
	        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	      });

	      return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
	    } else {
	      var message = 'Calculating the relative luminance is not available for ' + 'HSL and HSLA.';
	      console.error(message);
	      return -1;
	    }
	  },

	  /**
	   * @params:
	   * additionalValue = An extra value that has been calculated but not included
	   *                   with the original color object, such as an alpha value.
	   */
	  _convertColorToString: function _convertColorToString(color, additonalValue) {
	    var str = color.type + '(' + parseInt(color.values[0]) + ',' + parseInt(color.values[1]) + ',' + parseInt(color.values[2]);

	    if (additonalValue !== undefined) {
	      str += ',' + additonalValue + ')';
	    } else if (color.values.length === 4) {
	      str += ',' + color.values[3] + ')';
	    } else {
	      str += ')';
	    }

	    return str;
	  },

	  // Converts a color from hex format to rgb format.
	  _convertHexToRGB: function _convertHexToRGB(color) {
	    if (color.length === 4) {
	      var extendedColor = '#';
	      for (var i = 1; i < color.length; i++) {
	        extendedColor += color.charAt(i) + color.charAt(i);
	      }
	      color = extendedColor;
	    }

	    var values = {
	      r: parseInt(color.substr(1, 2), 16),
	      g: parseInt(color.substr(3, 2), 16),
	      b: parseInt(color.substr(5, 2), 16)
	    };

	    return 'rgb(' + values.r + ',' + values.g + ',' + values.b + ')';
	  },

	  // Returns the type and values of a color of any given type.
	  _decomposeColor: function _decomposeColor(color) {
	    if (color.charAt(0) === '#') {
	      return this._decomposeColor(this._convertHexToRGB(color));
	    }

	    var marker = color.indexOf('(');
	    var type = color.substring(0, marker);
	    var values = color.substring(marker + 1, color.length - 1).split(',');

	    return { type: type, values: values };
	  },

	  // Set the absolute transparency of a color.
	  // Any existing alpha values are overwritten.
	  fade: function fade(color, amount) {
	    color = this._decomposeColor(color);
	    if (color.type === 'rgb' || color.type === 'hsl') color.type += 'a';
	    return this._convertColorToString(color, amount);
	  },

	  // Desaturates rgb and sets opacity to 0.15
	  lighten: function lighten(color, amount) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 + amount;
	        if (color.values[i] > 255) color.values[i] = 255;
	      }
	    }

	    if (color.type.indexOf('a') <= -1) color.type += 'a';

	    return this._convertColorToString(color, '0.15');
	  },

	  darken: function darken(color, amount) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 - amount;
	        if (color.values[i] < 0) color.values[i] = 0;
	      }
	    }

	    return this._convertColorToString(color);
	  },

	  // Calculates the contrast ratio between two colors.
	  //
	  // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	  contrastRatio: function contrastRatio(background, foreground) {
	    var lumA = this._luminance(background);
	    var lumB = this._luminance(foreground);

	    if (lumA >= lumB) {
	      return ((lumA + 0.05) / (lumB + 0.05)).toFixed(2);
	    } else {
	      return ((lumB + 0.05) / (lumA + 0.05)).toFixed(2);
	    }
	  },

	  /**
	   * Determines how readable a color combination is based on its level.
	   * Levels are defined from @LeaVerou:
	   * https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/contrast-ratio.js
	   */
	  contrastRatioLevel: function contrastRatioLevel(background, foreground) {
	    var levels = {
	      'fail': {
	        range: [0, 3],
	        color: 'hsl(0, 100%, 40%)'
	      },
	      'aa-large': {
	        range: [3, 4.5],
	        color: 'hsl(40, 100%, 45%)'
	      },
	      'aa': {
	        range: [4.5, 7],
	        color: 'hsl(80, 60%, 45%)'
	      },
	      'aaa': {
	        range: [7, 22],
	        color: 'hsl(95, 60%, 41%)'
	      }
	    };

	    var ratio = this.contrastRatio(background, foreground);

	    for (var level in levels) {
	      var range = levels[level].range;
	      if (ratio >= range[0] && ratio <= range[1]) return level;
	    }
	  }
	};


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Colors = __webpack_require__(341);

	var Typography = function Typography() {
	  _classCallCheck(this, Typography);

	  // text colors
	  this.textFullBlack = Colors.fullBlack;
	  this.textDarkBlack = Colors.darkBlack;
	  this.textLightBlack = Colors.lightBlack;
	  this.textMinBlack = Colors.minBlack;
	  this.textFullWhite = Colors.fullWhite;
	  this.textDarkWhite = Colors.darkWhite;
	  this.textLightWhite = Colors.lightWhite;

	  // font weight
	  this.fontWeightLight = 300;
	  this.fontWeightNormal = 400;
	  this.fontWeightMedium = 500;

	  this.fontStyleButtonFontSize = 14;
	};

	module.exports = new Typography();


/***/ },
/* 341 */
/***/ function(module, exports) {

	// To include this file in your project:
	// let mui = require('mui');
	// let Colors = mui.Styles.Colors;

	'jonny22234';

	module.exports = {

	  red50: '#ffebee',
	  red100: '#ffcdd2',
	  red200: '#ef9a9a',
	  red300: '#e57373',
	  red400: '#ef5350',
	  red500: '#f44336',
	  red600: '#e53935',
	  red700: '#d32f2f',
	  red800: '#c62828',
	  red900: '#b71c1c',
	  redA100: '#ff8a80',
	  redA200: '#ff5252',
	  redA400: '#ff1744',
	  redA700: '#d50000',

	  pink50: '#fce4ec',
	  pink100: '#f8bbd0',
	  pink200: '#f48fb1',
	  pink300: '#f06292',
	  pink400: '#ec407a',
	  pink500: '#e91e63',
	  pink600: '#d81b60',
	  pink700: '#c2185b',
	  pink800: '#ad1457',
	  pink900: '#880e4f',
	  pinkA100: '#ff80ab',
	  pinkA200: '#ff4081',
	  pinkA400: '#f50057',
	  pinkA700: '#c51162',

	  purple50: '#f3e5f5',
	  purple100: '#e1bee7',
	  purple200: '#ce93d8',
	  purple300: '#ba68c8',
	  purple400: '#ab47bc',
	  purple500: '#9c27b0',
	  purple600: '#8e24aa',
	  purple700: '#7b1fa2',
	  purple800: '#6a1b9a',
	  purple900: '#4a148c',
	  purpleA100: '#ea80fc',
	  purpleA200: '#e040fb',
	  purpleA400: '#d500f9',
	  purpleA700: '#aa00ff',

	  deepPurple50: '#ede7f6',
	  deepPurple100: '#d1c4e9',
	  deepPurple200: '#b39ddb',
	  deepPurple300: '#9575cd',
	  deepPurple400: '#7e57c2',
	  deepPurple500: '#673ab7',
	  deepPurple600: '#5e35b1',
	  deepPurple700: '#512da8',
	  deepPurple800: '#4527a0',
	  deepPurple900: '#311b92',
	  deepPurpleA100: '#b388ff',
	  deepPurpleA200: '#7c4dff',
	  deepPurpleA400: '#651fff',
	  deepPurpleA700: '#6200ea',

	  indigo50: '#e8eaf6',
	  indigo100: '#c5cae9',
	  indigo200: '#9fa8da',
	  indigo300: '#7986cb',
	  indigo400: '#5c6bc0',
	  indigo500: '#3f51b5',
	  indigo600: '#3949ab',
	  indigo700: '#303f9f',
	  indigo800: '#283593',
	  indigo900: '#1a237e',
	  indigoA100: '#8c9eff',
	  indigoA200: '#536dfe',
	  indigoA400: '#3d5afe',
	  indigoA700: '#304ffe',

	  blue50: '#e3f2fd',
	  blue100: '#bbdefb',
	  blue200: '#90caf9',
	  blue300: '#64b5f6',
	  blue400: '#42a5f5',
	  blue500: '#2196f3',
	  blue600: '#1e88e5',
	  blue700: '#1976d2',
	  blue800: '#1565c0',
	  blue900: '#0d47a1',
	  blueA100: '#82b1ff',
	  blueA200: '#448aff',
	  blueA400: '#2979ff',
	  blueA700: '#2962ff',

	  lightBlue50: '#e1f5fe',
	  lightBlue100: '#b3e5fc',
	  lightBlue200: '#81d4fa',
	  lightBlue300: '#4fc3f7',
	  lightBlue400: '#29b6f6',
	  lightBlue500: '#03a9f4',
	  lightBlue600: '#039be5',
	  lightBlue700: '#0288d1',
	  lightBlue800: '#0277bd',
	  lightBlue900: '#01579b',
	  lightBlueA100: '#80d8ff',
	  lightBlueA200: '#40c4ff',
	  lightBlueA400: '#00b0ff',
	  lightBlueA700: '#0091ea',

	  cyan50: '#e0f7fa',
	  cyan100: '#b2ebf2',
	  cyan200: '#80deea',
	  cyan300: '#4dd0e1',
	  cyan400: '#26c6da',
	  cyan500: '#00bcd4',
	  cyan600: '#00acc1',
	  cyan700: '#0097a7',
	  cyan800: '#00838f',
	  cyan900: '#006064',
	  cyanA100: '#84ffff',
	  cyanA200: '#18ffff',
	  cyanA400: '#00e5ff',
	  cyanA700: '#00b8d4',

	  teal50: '#e0f2f1',
	  teal100: '#b2dfdb',
	  teal200: '#80cbc4',
	  teal300: '#4db6ac',
	  teal400: '#26a69a',
	  teal500: '#009688',
	  teal600: '#00897b',
	  teal700: '#00796b',
	  teal800: '#00695c',
	  teal900: '#004d40',
	  tealA100: '#a7ffeb',
	  tealA200: '#64ffda',
	  tealA400: '#1de9b6',
	  tealA700: '#00bfa5',

	  green50: '#e8f5e9',
	  green100: '#c8e6c9',
	  green200: '#a5d6a7',
	  green300: '#81c784',
	  green400: '#66bb6a',
	  green500: '#4caf50',
	  green600: '#43a047',
	  green700: '#388e3c',
	  green800: '#2e7d32',
	  green900: '#1b5e20',
	  greenA100: '#b9f6ca',
	  greenA200: '#69f0ae',
	  greenA400: '#00e676',
	  greenA700: '#00c853',

	  lightGreen50: '#f1f8e9',
	  lightGreen100: '#dcedc8',
	  lightGreen200: '#c5e1a5',
	  lightGreen300: '#aed581',
	  lightGreen400: '#9ccc65',
	  lightGreen500: '#8bc34a',
	  lightGreen600: '#7cb342',
	  lightGreen700: '#689f38',
	  lightGreen800: '#558b2f',
	  lightGreen900: '#33691e',
	  lightGreenA100: '#ccff90',
	  lightGreenA200: '#b2ff59',
	  lightGreenA400: '#76ff03',
	  lightGreenA700: '#64dd17',

	  lime50: '#f9fbe7',
	  lime100: '#f0f4c3',
	  lime200: '#e6ee9c',
	  lime300: '#dce775',
	  lime400: '#d4e157',
	  lime500: '#cddc39',
	  lime600: '#c0ca33',
	  lime700: '#afb42b',
	  lime800: '#9e9d24',
	  lime900: '#827717',
	  limeA100: '#f4ff81',
	  limeA200: '#eeff41',
	  limeA400: '#c6ff00',
	  limeA700: '#aeea00',

	  yellow50: '#fffde7',
	  yellow100: '#fff9c4',
	  yellow200: '#fff59d',
	  yellow300: '#fff176',
	  yellow400: '#ffee58',
	  yellow500: '#ffeb3b',
	  yellow600: '#fdd835',
	  yellow700: '#fbc02d',
	  yellow800: '#f9a825',
	  yellow900: '#f57f17',
	  yellowA100: '#ffff8d',
	  yellowA200: '#ffff00',
	  yellowA400: '#ffea00',
	  yellowA700: '#ffd600',

	  amber50: '#fff8e1',
	  amber100: '#ffecb3',
	  amber200: '#ffe082',
	  amber300: '#ffd54f',
	  amber400: '#ffca28',
	  amber500: '#ffc107',
	  amber600: '#ffb300',
	  amber700: '#ffa000',
	  amber800: '#ff8f00',
	  amber900: '#ff6f00',
	  amberA100: '#ffe57f',
	  amberA200: '#ffd740',
	  amberA400: '#ffc400',
	  amberA700: '#ffab00',

	  orange50: '#fff3e0',
	  orange100: '#ffe0b2',
	  orange200: '#ffcc80',
	  orange300: '#ffb74d',
	  orange400: '#ffa726',
	  orange500: '#ff9800',
	  orange600: '#fb8c00',
	  orange700: '#f57c00',
	  orange800: '#ef6c00',
	  orange900: '#e65100',
	  orangeA100: '#ffd180',
	  orangeA200: '#ffab40',
	  orangeA400: '#ff9100',
	  orangeA700: '#ff6d00',

	  deepOrange50: '#fbe9e7',
	  deepOrange100: '#ffccbc',
	  deepOrange200: '#ffab91',
	  deepOrange300: '#ff8a65',
	  deepOrange400: '#ff7043',
	  deepOrange500: '#ff5722',
	  deepOrange600: '#f4511e',
	  deepOrange700: '#e64a19',
	  deepOrange800: '#d84315',
	  deepOrange900: '#bf360c',
	  deepOrangeA100: '#ff9e80',
	  deepOrangeA200: '#ff6e40',
	  deepOrangeA400: '#ff3d00',
	  deepOrangeA700: '#dd2c00',

	  brown50: '#efebe9',
	  brown100: '#d7ccc8',
	  brown200: '#bcaaa4',
	  brown300: '#a1887f',
	  brown400: '#8d6e63',
	  brown500: '#795548',
	  brown600: '#6d4c41',
	  brown700: '#5d4037',
	  brown800: '#4e342e',
	  brown900: '#3e2723',

	  blueGrey50: '#eceff1',
	  blueGrey100: '#cfd8dc',
	  blueGrey200: '#b0bec5',
	  blueGrey300: '#90a4ae',
	  blueGrey400: '#78909c',
	  blueGrey500: '#607d8b',
	  blueGrey600: '#546e7a',
	  blueGrey700: '#455a64',
	  blueGrey800: '#37474f',
	  blueGrey900: '#263238',

	  grey50: '#fafafa',
	  grey100: '#f5f5f5',
	  grey200: '#eeeeee',
	  grey300: '#e0e0e0',
	  grey400: '#bdbdbd',
	  grey500: '#9e9e9e',
	  grey600: '#757575',
	  grey700: '#616161',
	  grey800: '#424242',
	  grey900: '#212121',

	  black: '#000000',
	  white: '#ffffff',

	  transparent: 'rgba(0, 0, 0, 0)',
	  fullBlack: 'rgba(0, 0, 0, 1)',
	  darkBlack: 'rgba(0, 0, 0, 0.87)',
	  lightBlack: 'rgba(0, 0, 0, 0.54)',
	  minBlack: 'rgba(0, 0, 0, 0.26)',
	  faintBlack: 'rgba(0, 0, 0, 0.12)',
	  fullWhite: 'rgba(255, 255, 255, 1)',
	  darkWhite: 'rgba(255, 255, 255, 0.87)',
	  lightWhite: 'rgba(255, 255, 255, 0.54)'

	};


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var StylePropable = __webpack_require__(330);
	var Colors = __webpack_require__(341);
	var Children = __webpack_require__(346);
	var Events = __webpack_require__(349);
	var KeyCode = __webpack_require__(350);
	var FocusRipple = __webpack_require__(351);
	var TouchRipple = __webpack_require__(361);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var styleInjected = false;
	var listening = false;
	var tabPressed = false;

	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement("style");
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';

	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}

	function listenForTabPresses() {
	  if (!listening) {
	    Events.on(window, 'keydown', function (e) {
	      tabPressed = e.keyCode === KeyCode.TAB;
	    });
	    listening = true;
	  }
	}

	var EnhancedButton = React.createClass({
	  displayName: 'EnhancedButton',

	  mixins: [PureRenderMixin, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    centerRipple: React.PropTypes.bool,
	    containerElement: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
	    disabled: React.PropTypes.bool,
	    disableFocusRipple: React.PropTypes.bool,
	    disableKeyboardFocus: React.PropTypes.bool,
	    disableTouchRipple: React.PropTypes.bool,
	    keyboardFocused: React.PropTypes.bool,
	    linkButton: React.PropTypes.bool,
	    focusRippleColor: React.PropTypes.string,
	    touchRippleColor: React.PropTypes.string,
	    focusRippleOpacity: React.PropTypes.number,
	    touchRippleOpacity: React.PropTypes.number,
	    onBlur: React.PropTypes.func,
	    onFocus: React.PropTypes.func,
	    onKeyboardFocus: React.PropTypes.func,
	    onKeyDown: React.PropTypes.func,
	    onKeyUp: React.PropTypes.func,
	    onTouchTap: React.PropTypes.func,
	    tabIndex: React.PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      containerElement: 'button',
	      onBlur: function onBlur() {},
	      onFocus: function onFocus() {},
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onKeyDown: function onKeyDown() {},
	      onKeyUp: function onKeyUp() {},
	      onTouchTap: function onTouchTap() {},
	      tabIndex: 0,
	      type: 'button'
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isKeyboardFocused: !this.props.disabled && this.props.keyboardFocused && !this.props.disableKeyboardFocus,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: false });
	      if (nextProps.onKeyboardFocus) {
	        nextProps.onKeyboardFocus(null, false);
	      }
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    injectStyle();
	    listenForTabPresses();
	  },

	  render: function render() {
	    var _props = this.props;
	    var centerRipple = _props.centerRipple;
	    var children = _props.children;
	    var containerElement = _props.containerElement;
	    var disabled = _props.disabled;
	    var disableFocusRipple = _props.disableFocusRipple;
	    var disableKeyboardFocus = _props.disableKeyboardFocus;
	    var disableTouchRipple = _props.disableTouchRipple;
	    var focusRippleColor = _props.focusRippleColor;
	    var focusRippleOpacity = _props.focusRippleOpacity;
	    var linkButton = _props.linkButton;
	    var touchRippleColor = _props.touchRippleColor;
	    var touchRippleOpacity = _props.touchRippleOpacity;
	    var onBlur = _props.onBlur;
	    var onFocus = _props.onFocus;
	    var onKeyUp = _props.onKeyUp;
	    var onKeyDown = _props.onKeyDown;
	    var onTouchTap = _props.onTouchTap;
	    var style = _props.style;
	    var tabIndex = _props.tabIndex;
	    var type = _props.type;

	    var other = _objectWithoutProperties(_props, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'linkButton', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onFocus', 'onKeyUp', 'onKeyDown', 'onTouchTap', 'style', 'tabIndex', 'type']);

	    var mergedStyles = this.prepareStyles({
	      border: 10,
	      background: 'none',
	      boxSizing: 'border-box',
	      display: 'inline-block',
	      font: 'inherit',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      tapHighlightColor: Colors.transparent,
	      appearance: linkButton ? null : 'button',
	      cursor: disabled ? 'default' : 'pointer',
	      textDecoration: 'none',
	      outline: 'none'
	    }, style);

	    if (disabled && linkButton) {
	      return React.createElement(
	        'span',
	        _extends({}, other, {
	          style: mergedStyles }),
	        children
	      );
	    }

	    var buttonProps = _extends({}, other, {
	      style: mergedStyles,
	      disabled: disabled,
	      onBlur: this._handleBlur,
	      onFocus: this._handleFocus,
	      onTouchTap: this._handleTouchTap,
	      onKeyUp: this._handleKeyUp,
	      onKeyDown: this._handleKeyDown,
	      tabIndex: tabIndex,
	      type: type
	    });
	    var buttonChildren = this._createButtonChildren();

	    return React.isValidElement(containerElement) ? React.cloneElement(containerElement, buttonProps, buttonChildren) : React.createElement(linkButton ? 'a' : containerElement, buttonProps, buttonChildren);
	  },

	  isKeyboardFocused: function isKeyboardFocused() {
	    return this.state.isKeyboardFocused;
	  },

	  removeKeyboardFocus: function removeKeyboardFocus(e) {
	    if (this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: false });
	      this.props.onKeyboardFocus(e, false);
	    }
	  },

	  setKeyboardFocus: function setKeyboardFocus(e) {
	    if (!this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: true });
	      this.props.onKeyboardFocus(e, true);
	    }
	  },

	  _cancelFocusTimeout: function _cancelFocusTimeout() {
	    if (this._focusTimeout) {
	      clearTimeout(this._focusTimeout);
	      this._focusTimeout = null;
	    }
	  },

	  _createButtonChildren: function _createButtonChildren() {
	    var _props2 = this.props;
	    var centerRipple = _props2.centerRipple;
	    var children = _props2.children;
	    var disabled = _props2.disabled;
	    var disableFocusRipple = _props2.disableFocusRipple;
	    var disableKeyboardFocus = _props2.disableKeyboardFocus;
	    var disableTouchRipple = _props2.disableTouchRipple;
	    var focusRippleColor = _props2.focusRippleColor;
	    var focusRippleOpacity = _props2.focusRippleOpacity;
	    var touchRippleColor = _props2.touchRippleColor;
	    var touchRippleOpacity = _props2.touchRippleOpacity;
	    var isKeyboardFocused = this.state.isKeyboardFocused;

	    //Focus Ripple
	    var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? React.createElement(FocusRipple, {
	      color: focusRippleColor,
	      opacity: focusRippleOpacity,
	      show: isKeyboardFocused
	    }) : undefined;

	    //Touch Ripple
	    var touchRipple = !disabled && !disableTouchRipple ? React.createElement(
	      TouchRipple,
	      {
	        centerRipple: centerRipple,
	        color: touchRippleColor,
	        opacity: touchRippleOpacity },
	      children
	    ) : undefined;

	    return Children.create({
	      focusRipple: focusRipple,
	      touchRipple: touchRipple,
	      children: touchRipple ? undefined : children
	    });
	  },

	  _handleKeyDown: function _handleKeyDown(e) {
	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      if (e.keyCode === KeyCode.ENTER && this.state.isKeyboardFocused) {
	        this._handleTouchTap(e);
	      }
	    }
	    this.props.onKeyDown(e);
	  },

	  _handleKeyUp: function _handleKeyUp(e) {
	    if (!this.props.disabled && e.keyCode === KeyCode.SPACE && this.state.isKeyboardFocused) {
	      this._handleTouchTap(e);
	    }
	    this.props.onKeyUp(e);
	  },

	  _handleBlur: function _handleBlur(e) {
	    this._cancelFocusTimeout();
	    this.removeKeyboardFocus(e);
	    this.props.onBlur(e);
	  },

	  _handleFocus: function _handleFocus(e) {
	    var _this = this;

	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      //setTimeout is needed because the focus event fires first
	      //Wait so that we can capture if this was a keyboard focus
	      //or touch focus
	      this._focusTimeout = setTimeout(function () {
	        if (tabPressed) {
	          _this.setKeyboardFocus(e);
	        }
	      }, 150);

	      this.props.onFocus(e);
	    }
	  },

	  _handleTouchTap: function _handleTouchTap(e) {
	    this._cancelFocusTimeout();
	    if (!this.props.disabled) {
	      tabPressed = false;
	      this.removeKeyboardFocus(e);
	      this.props.onTouchTap(e);
	    }
	  }

	});

	module.exports = EnhancedButton;


/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(344);

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */

	'use strict';

	var shallowCompare = __webpack_require__(345);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(119);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var createFragment = __webpack_require__(347);

	module.exports = {

	  create: function create(fragments) {
	    var newFragments = {};
	    var validChildrenCount = 0;
	    var firstKey = undefined;

	    //Only create non-empty key fragments
	    for (var key in fragments) {
	      var currentChild = fragments[key];

	      if (currentChild) {
	        if (validChildrenCount === 0) firstKey = key;
	        newFragments[key] = currentChild;
	        validChildrenCount++;
	      }
	    }

	    if (validChildrenCount === 0) return undefined;
	    if (validChildrenCount === 1) return newFragments[firstKey];
	    return createFragment(newFragments);
	  },

	  extend: function extend(children, extendedProps, extendedChildren) {

	    return React.isValidElement(children) ? React.Children.map(children, function (child) {

	      var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;

	      var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;

	      return React.cloneElement(child, newProps, newChildren);
	    }) : children;
	  }

	};


/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(348).create;

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFragment
	 */

	'use strict';

	var ReactChildren = __webpack_require__(112);
	var ReactElement = __webpack_require__(44);

	var emptyFunction = __webpack_require__(17);
	var invariant = __webpack_require__(15);
	var warning = __webpack_require__(27);

	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set a fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */

	var numericPropertyRegex = /^\d+$/;

	var warnedAboutNumeric = false;

	var ReactFragment = {
	  // Wrap a keyed object in an opaque proxy that warns you if you access any
	  // of its properties.
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : undefined;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : undefined;
	      return object;
	    }

	    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.') : invariant(false) : undefined;

	    var result = [];

	    for (var key in object) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : undefined;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }

	    return result;
	  }
	};

	module.exports = ReactFragment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 349 */
/***/ function(module, exports) {

	'jonny22234';

	module.exports = {

	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(e) {
	      e.target.removeEventListener(e.type, recursiveFunction);
	      return callback(e);
	    };

	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },

	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },

	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },

	  isKeyboard: function isKeyboard(e) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(e.type) !== -1;
	  }
	};


/***/ },
/* 350 */
/***/ function(module, exports) {

	"jonny22234";

	module.exports = {
	  DOWN: 40,
	  ESC: 27,
	  ENTER: 13,
	  LEFT: 37,
	  RIGHT: 39,
	  SPACE: 32,
	  TAB: 9,
	  UP: 38
	};


/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var PureRenderMixin = __webpack_require__(343);
	var StylePropable = __webpack_require__(330);
	var AutoPrefix = __webpack_require__(335);
	var Colors = __webpack_require__(341);
	var Transitions = __webpack_require__(338);
	var ScaleInTransitionGroup = __webpack_require__(352);

	var pulsateDuration = 750;

	var FocusRipple = React.createClass({
	  displayName: 'FocusRipple',

	  mixins: [PureRenderMixin, StylePropable],

	  propTypes: {
	    color: React.PropTypes.string,
	    innerStyle: React.PropTypes.object,
	    opacity: React.PropTypes.number,
	    show: React.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: Colors.darkBlack
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (this.props.show) {
	      this._setRippleSize();
	      this._pulsate();
	    }
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.show) {
	      this._setRippleSize();
	      this._pulsate();
	    } else {
	      if (this._timeout) clearTimeout(this._timeout);
	    }
	  },

	  render: function render() {
	    var _props = this.props;
	    var show = _props.show;
	    var style = _props.style;

	    var mergedRootStyles = this.mergeStyles({
	      height: '100%',
	      width: '100%',
	      position: 'absolute',
	      top: 0,
	      left: 0
	    }, style);

	    var ripple = show ? this._getRippleElement(this.props) : null;

	    return React.createElement(
	      ScaleInTransitionGroup,
	      {
	        maxScale: 0.85,
	        style: mergedRootStyles },
	      ripple
	    );
	  },

	  _getRippleElement: function _getRippleElement(props) {
	    var color = props.color;
	    var innerStyle = props.innerStyle;
	    var opacity = props.opacity;

	    var innerStyles = this.mergeAndPrefix({
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      borderRadius: '50%',
	      opacity: opacity ? opacity : 0.16,
	      backgroundColor: color,
	      transition: Transitions.easeOut(pulsateDuration + 'ms', 'transform', null, Transitions.easeInOutFunction)
	    }, innerStyle);

	    return React.createElement('div', { ref: 'innerCircle', style: innerStyles });
	  },

	  _pulsate: function _pulsate() {
	    if (!this.isMounted()) return;

	    var innerCircle = ReactDOM.findDOMNode(this.refs.innerCircle);
	    if (!innerCircle) return;

	    var startScale = 'scale(1)';
	    var endScale = 'scale(0.85)';
	    var currentScale = innerCircle.style[AutoPrefix.single('transform')];
	    var nextScale = undefined;

	    currentScale = currentScale || startScale;
	    nextScale = currentScale === startScale ? endScale : startScale;

	    innerCircle.style[AutoPrefix.single('transform')] = nextScale;
	    this._timeout = setTimeout(this._pulsate, pulsateDuration);
	  },

	  _setRippleSize: function _setRippleSize() {
	    var el = ReactDOM.findDOMNode(this.refs.innerCircle);
	    var height = el.offsetHeight;
	    var width = el.offsetWidth;
	    var size = Math.max(height, width);

	    var oldTop = 0;
	    // For browsers that don't support endsWith()
	    if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	      oldTop = parseInt(el.style.top);
	    }
	    el.style.height = size + 'px';
	    el.style.top = height / 2 - size / 2 + oldTop + 'px';
	  }

	});

	module.exports = FocusRipple;


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var ReactTransitionGroup = __webpack_require__(353);
	var StylePropable = __webpack_require__(330);
	var ScaleInChild = __webpack_require__(356);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var ScaleIn = React.createClass({
	  displayName: 'ScaleIn',

	  mixins: [PureRenderMixin, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  propTypes: {
	    childStyle: React.PropTypes.object,
	    enterDelay: React.PropTypes.number,
	    maxScale: React.PropTypes.number,
	    minScale: React.PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0
	    };
	  },

	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var childStyle = _props.childStyle;
	    var enterDelay = _props.enterDelay;
	    var maxScale = _props.maxScale;
	    var minScale = _props.minScale;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);

	    var mergedRootStyles = this.prepareStyles({
	      position: 'relative',
	      overflow: 'hidden',
	      height: '100%'
	    }, style);

	    var newChildren = React.Children.map(children, function (child) {
	      return React.createElement(
	        ScaleInChild,
	        {
	          key: child.key,
	          enterDelay: enterDelay,
	          maxScale: maxScale,
	          minScale: minScale,
	          style: childStyle },
	        child
	      );
	    });

	    return React.createElement(
	      ReactTransitionGroup,
	      _extends({}, other, {
	        style: mergedRootStyles,
	        component: 'div' }),
	      newChildren
	    );
	  }

	});

	module.exports = ScaleIn;


/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(354);

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */

	'use strict';

	var React = __webpack_require__(5);
	var ReactTransitionChildMapping = __webpack_require__(355);

	var assign = __webpack_require__(41);
	var emptyFunction = __webpack_require__(17);

	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',

	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },

	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },

	  getInitialState: function () {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },

	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },

	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },

	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });

	    var key;

	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  },

	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },

	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },

	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },

	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },

	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];

	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);

	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },

	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	    return React.createElement(this.props.component, this.props, childrenToRender);
	  }
	});

	module.exports = ReactTransitionGroup;

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */

	'use strict';

	var flattenChildren = __webpack_require__(118);

	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children) {
	    if (!children) {
	      return children;
	    }
	    return flattenChildren(children);
	  },

	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }

	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};

	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }

	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }
	};

	module.exports = ReactTransitionChildMapping;

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var PureRenderMixin = __webpack_require__(343);
	var StylePropable = __webpack_require__(330);
	var AutoPrefix = __webpack_require__(335);
	var Transitions = __webpack_require__(338);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var ScaleInChild = React.createClass({
	  displayName: 'ScaleInChild',

	  mixins: [PureRenderMixin, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  propTypes: {
	    enterDelay: React.PropTypes.number,
	    maxScale: React.PropTypes.number,
	    minScale: React.PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0,
	      maxScale: 1,
	      minScale: 0
	    };
	  },

	  componentWillAppear: function componentWillAppear(callback) {
	    this._initializeAnimation(callback);
	  },

	  componentWillEnter: function componentWillEnter(callback) {
	    this._initializeAnimation(callback);
	  },

	  componentDidAppear: function componentDidAppear() {
	    this._animate();
	  },

	  componentDidEnter: function componentDidEnter() {
	    this._animate();
	  },

	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;

	    var style = ReactDOM.findDOMNode(this).style;

	    style.opacity = '0';
	    AutoPrefix.set(style, 'transform', 'scale(' + this.props.minScale + ')');

	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 450);
	  },

	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var enterDelay = _props.enterDelay;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['children', 'enterDelay', 'style']);

	    var mergedRootStyles = this.prepareStyles({
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      top: 0,
	      left: 0,
	      transition: Transitions.easeOut(null, ['transform', 'opacity'])
	    }, style);

	    return React.createElement(
	      'div',
	      _extends({}, other, { style: mergedRootStyles }),
	      children
	    );
	  },

	  _animate: function _animate() {
	    var style = ReactDOM.findDOMNode(this).style;

	    style.opacity = '1';
	    AutoPrefix.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
	  },

	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;

	    var style = ReactDOM.findDOMNode(this).style;

	    style.opacity = '0';
	    AutoPrefix.set(style, 'transform', 'scale(0)');

	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, this.props.enterDelay);
	  }

	});

	module.exports = ScaleInChild;


/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var Colors = __webpack_require__(341);
	var ColorManipulator = __webpack_require__(339);
	var Spacing = __webpack_require__(358);

	/*
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */

	module.exports = {
	  spacing: Spacing,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: Colors.cyan500,
	    primary2Color: Colors.cyan700,
	    primary3Color: Colors.lightBlack,
	    accent1Color: Colors.pinkA200,
	    accent2Color: Colors.grey100,
	    accent3Color: Colors.grey500,
	    textColor: Colors.darkBlack,
	    alternateTextColor: Colors.white,
	    canvasColor: Colors.white,
	    borderColor: Colors.grey300,
	    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
	  }
	};


/***/ },
/* 358 */
/***/ function(module, exports) {

	"jonny22234";

	module.exports = {
	  iconSize: 24,

	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopLeftNavMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};


/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var Colors = __webpack_require__(341);
	var ColorManipulator = __webpack_require__(339);
	var Extend = __webpack_require__(360);
	var update = __webpack_require__(332);

	module.exports = {

	  //get the MUI theme corresponding to a raw theme
	  getMuiTheme: function getMuiTheme(rawTheme) {
	    var returnObj = {
	      appBar: {
	        color: rawTheme.palette.primary1Color,
	        textColor: rawTheme.palette.alternateTextColor,
	        height: rawTheme.spacing.desktopKeylineIncrement
	      },
	      avatar: {
	        borderColor: 'rgba(0, 0, 0, 0.08)'
	      },
	      button: {
	        height: 36,
	        minWidth: 88,
	        iconButtonSize: rawTheme.spacing.iconSize * 2
	      },
	      cardText: {
	        textColor: rawTheme.palette.textColor
	      },
	      checkbox: {
	        boxColor: rawTheme.palette.textColor,
	        checkedColor: rawTheme.palette.primary1Color,
	        requiredColor: rawTheme.palette.primary1Color,
	        disabledColor: rawTheme.palette.disabledColor,
	        labelColor: rawTheme.palette.textColor,
	        labelDisabledColor: rawTheme.palette.disabledColor
	      },
	      datePicker: {
	        color: rawTheme.palette.primary1Color,
	        textColor: rawTheme.palette.alternateTextColor,
	        calendarTextColor: rawTheme.palette.textColor,
	        selectColor: rawTheme.palette.primary2Color,
	        selectTextColor: rawTheme.palette.alternateTextColor
	      },
	      dropDownMenu: {
	        accentColor: rawTheme.palette.borderColor
	      },
	      flatButton: {
	        color: rawTheme.palette.alternateTextColor,
	        textColor: rawTheme.palette.textColor,
	        primaryTextColor: rawTheme.palette.accent1Color,
	        secondaryTextColor: rawTheme.palette.primary1Color
	      },
	      floatingActionButton: {
	        buttonSize: 56,
	        miniSize: 40,
	        color: rawTheme.palette.accent1Color,
	        iconColor: rawTheme.palette.alternateTextColor,
	        secondaryColor: rawTheme.palette.primary1Color,
	        secondaryIconColor: rawTheme.palette.alternateTextColor,
	        disabledTextColor: rawTheme.palette.disabledColor
	      },
	      gridTile: {
	        textColor: Colors.white
	      },
	      inkBar: {
	        backgroundColor: rawTheme.palette.accent1Color
	      },
	      leftNav: {
	        width: rawTheme.spacing.desktopKeylineIncrement * 4,
	        color: rawTheme.palette.canvasColor
	      },
	      listItem: {
	        nestedLevelDepth: 18
	      },
	      menu: {
	        backgroundColor: rawTheme.palette.canvasColor,
	        containerBackgroundColor: rawTheme.palette.canvasColor
	      },
	      menuItem: {
	        dataHeight: 32,
	        height: 48,
	        hoverColor: 'rgba(0, 0, 0, .035)',
	        padding: rawTheme.spacing.desktopGutter,
	        selectedTextColor: rawTheme.palette.accent1Color
	      },
	      menuSubheader: {
	        padding: rawTheme.spacing.desktopGutter,
	        borderColor: rawTheme.palette.borderColor,
	        textColor: rawTheme.palette.primary1Color
	      },
	      paper: {
	        backgroundColor: rawTheme.palette.canvasColor
	      },
	      radioButton: {
	        borderColor: rawTheme.palette.textColor,
	        backgroundColor: rawTheme.palette.alternateTextColor,
	        checkedColor: rawTheme.palette.primary1Color,
	        requiredColor: rawTheme.palette.primary1Color,
	        disabledColor: rawTheme.palette.disabledColor,
	        size: 24,
	        labelColor: rawTheme.palette.textColor,
	        labelDisabledColor: rawTheme.palette.disabledColor
	      },
	      raisedButton: {
	        color: rawTheme.palette.alternateTextColor,
	        textColor: rawTheme.palette.textColor,
	        primaryColor: rawTheme.palette.accent1Color,
	        primaryTextColor: rawTheme.palette.alternateTextColor,
	        secondaryColor: rawTheme.palette.primary1Color,
	        secondaryTextColor: rawTheme.palette.alternateTextColor
	      },
	      refreshIndicator: {
	        strokeColor: rawTheme.palette.borderColor,
	        loadingStrokeColor: rawTheme.palette.primary1Color
	      },
	      slider: {
	        trackSize: 2,
	        trackColor: rawTheme.palette.primary3Color,
	        trackColorSelected: rawTheme.palette.accent3Color,
	        handleSize: 12,
	        handleSizeDisabled: 8,
	        handleSizeActive: 18,
	        handleColorZero: rawTheme.palette.borderColor,
	        handleFillColor: rawTheme.palette.alternateTextColor,
	        selectionColor: rawTheme.palette.primary1Color,
	        rippleColor: rawTheme.palette.primary1Color
	      },
	      snackbar: {
	        textColor: rawTheme.palette.alternateTextColor,
	        backgroundColor: rawTheme.palette.textColor,
	        actionColor: rawTheme.palette.accent1Color
	      },
	      table: {
	        backgroundColor: rawTheme.palette.canvasColor
	      },
	      tableHeader: {
	        borderColor: rawTheme.palette.borderColor
	      },
	      tableHeaderColumn: {
	        textColor: rawTheme.palette.primary3Color,
	        height: 56,
	        spacing: 24
	      },
	      tableFooter: {
	        borderColor: rawTheme.palette.borderColor,
	        textColor: rawTheme.palette.primary3Color
	      },
	      tableRow: {
	        hoverColor: rawTheme.palette.accent2Color,
	        stripeColor: ColorManipulator.lighten(rawTheme.palette.primary1Color, 0.55),
	        selectedColor: rawTheme.palette.borderColor,
	        textColor: rawTheme.palette.textColor,
	        borderColor: rawTheme.palette.borderColor
	      },
	      tableRowColumn: {
	        height: 48,
	        spacing: 24
	      },
	      timePicker: {
	        color: rawTheme.palette.alternateTextColor,
	        textColor: rawTheme.palette.accent3Color,
	        accentColor: rawTheme.palette.primary1Color,
	        clockColor: rawTheme.palette.primary3Color,
	        selectColor: rawTheme.palette.primary2Color,
	        selectTextColor: rawTheme.palette.alternateTextColor
	      },
	      toggle: {
	        thumbOnColor: rawTheme.palette.primary1Color,
	        thumbOffColor: rawTheme.palette.accent2Color,
	        thumbDisabledColor: rawTheme.palette.borderColor,
	        thumbRequiredColor: rawTheme.palette.primary1Color,
	        trackOnColor: ColorManipulator.fade(rawTheme.palette.primary1Color, 0.5),
	        trackOffColor: rawTheme.palette.primary3Color,
	        trackDisabledColor: rawTheme.palette.primary3Color,
	        labelColor: rawTheme.palette.textColor,
	        labelDisabledColor: rawTheme.palette.disabledColor
	      },
	      toolbar: {
	        backgroundColor: ColorManipulator.darken(rawTheme.palette.accent2Color, 0.05),
	        height: 56,
	        titleFontSize: 20,
	        iconColor: 'rgba(0, 0, 0, .40)',
	        separatorColor: 'rgba(0, 0, 0, .175)',
	        menuHoverColor: 'rgba(0, 0, 0, .10)'
	      },
	      tabs: {
	        backgroundColor: rawTheme.palette.primary1Color,
	        textColor: ColorManipulator.fade(rawTheme.palette.alternateTextColor, 0.6),
	        selectedTextColor: rawTheme.palette.alternateTextColor
	      },
	      textField: {
	        textColor: rawTheme.palette.textColor,
	        hintColor: rawTheme.palette.disabledColor,
	        floatingLabelColor: rawTheme.palette.textColor,
	        disabledTextColor: rawTheme.palette.disabledColor,
	        errorColor: Colors.red500,
	        focusColor: rawTheme.palette.primary1Color,
	        backgroundColor: 'transparent',
	        borderColor: rawTheme.palette.borderColor
	      },
	      isRtl: false
	    };

	    //add properties to objects inside 'returnObj' that depend on existing properties
	    returnObj.flatButton.disabledTextColor = ColorManipulator.fade(returnObj.flatButton.textColor, 0.3);
	    returnObj.raisedButton.disabledColor = ColorManipulator.darken(returnObj.raisedButton.color, 0.1);
	    returnObj.raisedButton.disabledTextColor = ColorManipulator.fade(returnObj.raisedButton.textColor, 0.3);
	    returnObj.toggle.trackRequiredColor = ColorManipulator.fade(returnObj.toggle.thumbRequiredColor, 0.5);

	    //append the raw theme object to 'returnObj'
	    returnObj.rawTheme = rawTheme;

	    //set 'static' key as true (by default) on return object. This is to support the ContextPure mixin.
	    returnObj['static'] = true;

	    return returnObj;
	  },

	  //functions to modify properties of raw theme, namely spacing, palette
	  //and font family. These functions use the React update immutability helper
	  //to create a new object for the raw theme, and return a new MUI theme object

	  //function to modify the spacing of the raw theme. This function recomputes
	  //the MUI theme and returns it based on the new theme.
	  modifyRawThemeSpacing: function modifyRawThemeSpacing(muiTheme, newSpacing) {
	    var newRawTheme = update(muiTheme.rawTheme, { spacing: { $set: newSpacing } });
	    return this.getMuiTheme(newRawTheme);
	  },

	  //function to modify the palette of the raw theme. This function recomputes
	  //the MUI theme and returns it based on the new raw theme.
	  //keys inside 'newPalette' override values for existing keys in palette
	  modifyRawThemePalette: function modifyRawThemePalette(muiTheme, newPaletteKeys) {
	    var newPalette = Extend(muiTheme.rawTheme.palette, newPaletteKeys);
	    var newRawTheme = update(muiTheme.rawTheme, { palette: { $set: newPalette } });
	    return this.getMuiTheme(newRawTheme);
	  },

	  //function to modify the font family of the raw theme. This function recomputes
	  //the MUI theme and returns it based on the new raw theme.
	  modifyRawThemeFontFamily: function modifyRawThemeFontFamily(muiTheme, newFontFamily) {
	    var newRawTheme = update(muiTheme.rawTheme, { fontFamily: { $set: newFontFamily } });
	    return this.getMuiTheme(newRawTheme);
	  }

	};


/***/ },
/* 360 */
/***/ function(module, exports) {

	'jonny22234';

	function isObject(obj) {
	  return typeof obj === 'object' && obj !== null;
	}

	/**
	*  A recursive merge between two objects.
	*
	*  @param base     - the object whose properties are to be overwritten. It
	*                    should be either the root level or some nested level.
	*  @param override - an object containing properties to be overwritten. It
	*                    should have the same structure as the object object.
	*/
	var extend = function extend(base, override) {

	  var mergedObject = {};

	  //Loop through each key in the base object
	  Object.keys(base).forEach(function (key) {

	    var baseProp = base[key];
	    var overrideProp = undefined;

	    if (isObject(override)) overrideProp = override[key];

	    //Recursive call extend if the prop is another object, else just copy it over
	    mergedObject[key] = isObject(baseProp) && !Array.isArray(baseProp) ? extend(baseProp, overrideProp) : baseProp;
	  });

	  //Loop through each override key and override the props in the
	  //base object
	  if (isObject(override)) {

	    Object.keys(override).forEach(function (overrideKey) {

	      var overrideProp = override[overrideKey];

	      //Only copy over props that are not objects
	      if (!isObject(overrideProp) || Array.isArray(overrideProp)) {
	        mergedObject[overrideKey] = overrideProp;
	      }
	    });
	  }

	  return mergedObject;
	};

	module.exports = extend;


/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var PureRenderMixin = __webpack_require__(343);
	var ReactTransitionGroup = __webpack_require__(353);
	var StylePropable = __webpack_require__(330);
	var Dom = __webpack_require__(362);
	var ImmutabilityHelper = __webpack_require__(331);
	var CircleRipple = __webpack_require__(363);

	var TouchRipple = React.createClass({
	  displayName: 'TouchRipple',

	  mixins: [PureRenderMixin, StylePropable],

	  propTypes: {
	    centerRipple: React.PropTypes.bool,
	    color: React.PropTypes.string,
	    opacity: React.PropTypes.number
	  },

	  getInitialState: function getInitialState() {
	    return {
	      //This prop allows us to only render the ReactTransitionGroup
	      //on the first click of the component, making the inital
	      //render faster
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	  },

	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var style = _props.style;
	    var _state = this.state;
	    var hasRipples = _state.hasRipples;
	    var ripples = _state.ripples;

	    var rippleGroup = undefined;
	    if (hasRipples) {
	      var mergedStyles = this.mergeAndPrefix({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        overflow: 'hidden'
	      }, style);

	      rippleGroup = React.createElement(
	        ReactTransitionGroup,
	        { style: mergedStyles },
	        ripples
	      );
	    }

	    return React.createElement(
	      'div',
	      {
	        onMouseUp: this._handleMouseUp,
	        onMouseDown: this._handleMouseDown,
	        onMouseLeave: this._handleMouseLeave,
	        onTouchStart: this._handleTouchStart,
	        onTouchEnd: this._handleTouchEnd },
	      rippleGroup,
	      children
	    );
	  },

	  start: function start(e, isRippleTouchGenerated) {
	    var ripples = this.state.ripples;

	    //Do nothing if we're starting a click-event-generated ripple
	    //while having touch-generated ripples
	    if (!isRippleTouchGenerated) {
	      for (var i = 0; i < ripples.length; i++) {
	        if (ripples[i].props.touchGenerated) return;
	      }
	    }

	    //Add a ripple to the ripples array
	    ripples = ImmutabilityHelper.push(ripples, React.createElement(CircleRipple, {
	      key: this.state.nextKey,
	      style: !this.props.centerRipple ? this._getRippleStyle(e) : {},
	      color: this.props.color,
	      opacity: this.props.opacity,
	      touchGenerated: isRippleTouchGenerated }));

	    this.setState({
	      hasRipples: true,
	      nextKey: this.state.nextKey + 1,
	      ripples: ripples
	    });
	  },

	  end: function end() {
	    var currentRipples = this.state.ripples;
	    this.setState({
	      ripples: ImmutabilityHelper.shift(currentRipples)
	    });
	  },

	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) this.start(e, false);
	  },

	  _handleMouseUp: function _handleMouseUp() {
	    this.end();
	  },

	  _handleMouseLeave: function _handleMouseLeave() {
	    this.end();
	  },

	  _handleTouchStart: function _handleTouchStart(e) {
	    this.start(e, true);
	  },

	  _handleTouchEnd: function _handleTouchEnd() {
	    this.end();
	  },

	  _getRippleStyle: function _getRippleStyle(e) {
	    var style = {};
	    var el = ReactDOM.findDOMNode(this);
	    var elHeight = el.offsetHeight;
	    var elWidth = el.offsetWidth;
	    var offset = Dom.offset(el);
	    var isTouchEvent = e.touches && e.touches.length;
	    var pageX = isTouchEvent ? e.touches[0].pageX : e.pageX;
	    var pageY = isTouchEvent ? e.touches[0].pageY : e.pageY;
	    var pointerX = pageX - offset.left;
	    var pointerY = pageY - offset.top;
	    var topLeftDiag = this._calcDiag(pointerX, pointerY);
	    var topRightDiag = this._calcDiag(elWidth - pointerX, pointerY);
	    var botRightDiag = this._calcDiag(elWidth - pointerX, elHeight - pointerY);
	    var botLeftDiag = this._calcDiag(pointerX, elHeight - pointerY);
	    var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	    var rippleSize = rippleRadius * 2;
	    var left = pointerX - rippleRadius;
	    var top = pointerY - rippleRadius;

	    style.height = rippleSize + 'px';
	    style.width = rippleSize + 'px';
	    style.top = top + 'px';
	    style.left = left + 'px';

	    return style;
	  },

	  _calcDiag: function _calcDiag(a, b) {
	    return Math.sqrt(a * a + b * b);
	  }

	});

	module.exports = TouchRipple;


/***/ },
/* 362 */
/***/ function(module, exports) {

	'jonny22234';

	module.exports = {

	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;

	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }

	    return false;
	  },

	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  },

	  getStyleAttributeAsNumber: function getStyleAttributeAsNumber(el, attr) {
	    var attrStyle = el.style[attr];
	    var attrNum = 0;
	    if (attrStyle && attrStyle.length) {
	      attrNum = parseInt(attrStyle);
	    }

	    return attrNum;
	  },

	  addClass: function addClass(el, className) {
	    if (el.classList) el.classList.add(className);else el.className += ' ' + className;
	  },

	  removeClass: function removeClass(el, className) {
	    if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	  },

	  hasClass: function hasClass(el, className) {
	    if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	  },

	  toggleClass: function toggleClass(el, className) {
	    if (this.hasClass(el, className)) this.removeClass(el, className);else this.addClass(el, className);
	  },

	  forceRedraw: function forceRedraw(el) {
	    var originalDisplay = el.style.display;

	    el.style.display = 'none';
	    el.style.display = originalDisplay;
	  },

	  withoutTransition: function withoutTransition(el, callback) {
	    var originalTransition = el.style.transition;

	    //turn off transition
	    el.style.transition = null;

	    callback();

	    //force a redraw
	    this.forceRedraw(el);

	    //put the transition back
	    el.style.transition = originalTransition;
	  }

	};


/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var PureRenderMixin = __webpack_require__(343);
	var StylePropable = __webpack_require__(330);
	var AutoPrefix = __webpack_require__(335);
	var Transitions = __webpack_require__(338);
	var Colors = __webpack_require__(341);

	var CircleRipple = React.createClass({
	  displayName: 'CircleRipple',

	  mixins: [PureRenderMixin, StylePropable],

	  propTypes: {
	    color: React.PropTypes.string,
	    opacity: React.PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: Colors.darkBlack,
	      opacity: 0.16
	    };
	  },

	  componentWillAppear: function componentWillAppear(callback) {
	    this._initializeAnimation(callback);
	  },

	  componentWillEnter: function componentWillEnter(callback) {
	    this._initializeAnimation(callback);
	  },

	  componentDidAppear: function componentDidAppear() {
	    this._animate();
	  },

	  componentDidEnter: function componentDidEnter() {
	    this._animate();
	  },

	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;

	    var style = ReactDOM.findDOMNode(this).style;
	    style.opacity = 0;
	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 2000);
	  },

	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var opacity = _props.opacity;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['color', 'opacity', 'style']);

	    var mergedStyles = this.mergeAndPrefix({
	      position: 'absolute',
	      top: 0,
	      left: 0,
	      height: '100%',
	      width: '100%',
	      borderRadius: '50%',
	      backgroundColor: color
	    }, style);

	    return React.createElement('div', _extends({}, other, { style: mergedStyles }));
	  },

	  _animate: function _animate() {
	    var style = ReactDOM.findDOMNode(this).style;
	    var transitionValue = Transitions.easeOut('2s', 'opacity') + ',' + Transitions.easeOut('1s', 'transform');
	    AutoPrefix.set(style, 'transition', transitionValue);
	    AutoPrefix.set(style, 'transform', 'scale(1)');
	  },

	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;

	    var style = ReactDOM.findDOMNode(this).style;
	    style.opacity = this.props.opacity;
	    AutoPrefix.set(style, 'transform', 'scale(0)');
	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, 0);
	  }

	});

	module.exports = CircleRipple;


/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var StylePropable = __webpack_require__(330);
	var PropTypes = __webpack_require__(365);
	var Transitions = __webpack_require__(338);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var Paper = React.createClass({
	  displayName: 'Paper',

	  mixins: [PureRenderMixin, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  propTypes: {
	    circle: React.PropTypes.bool,
	    rounded: React.PropTypes.bool,
	    transitionEnabled: React.PropTypes.bool,
	    zDepth: PropTypes.zDepth
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      circle: false,
	      rounded: true,
	      transitionEnabled: true,
	      zDepth: 1
	    };
	  },

	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var circle = _props.circle;
	    var rounded = _props.rounded;
	    var style = _props.style;
	    var transitionEnabled = _props.transitionEnabled;
	    var zDepth = _props.zDepth;

	    var other = _objectWithoutProperties(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);

	    var styles = {
	      backgroundColor: this.state.muiTheme.paper.backgroundColor,
	      transition: transitionEnabled && Transitions.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	      boxShadow: this._getZDepthShadows(zDepth),
	      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
	    };

	    return React.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(styles, style) }),
	      children
	    );
	  },

	  _getZDepthShadows: function _getZDepthShadows(zDepth) {
	    var shadows = [null, '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)', '0 3px 10px rgba(0, 0, 0, 0.16), 0 3px 10px rgba(0, 0, 0, 0.23)', '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)', '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)', '0 19px 60px rgba(0, 0, 0, 0.30), 0 15px 20px rgba(0, 0, 0, 0.22)'];

	    return shadows[zDepth];
	  }

	});

	module.exports = Paper;


/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);

	module.exports = {

	  corners: React.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

	  cornersAndCenter: React.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

	  stringOrNumber: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

	  zDepth: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5])

	};


/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ContextPure = __webpack_require__(367);
	var Transitions = __webpack_require__(338);
	var Children = __webpack_require__(346);
	var ColorManipulator = __webpack_require__(339);
	var ImmutabilityHelper = __webpack_require__(331);
	var Typography = __webpack_require__(340);
	var EnhancedButton = __webpack_require__(342);
	var FlatButtonLabel = __webpack_require__(369);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	function validateLabel(props, propName, componentName) {
	  if (!props.children && !props.label) {
	    return new Error('Required prop label or children was not ' + 'specified in ' + componentName + '.');
	  }
	}

	var FlatButton = React.createClass({
	  displayName: 'FlatButton',

	  mixins: [ContextPure],

	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      var buttonTheme = muiTheme.button;
	      var flatButtonTheme = muiTheme.flatButton;

	      return {
	        buttonColor: flatButtonTheme.color,
	        buttonHeight: buttonTheme.height,
	        buttonMinWidth: buttonTheme.minWidth,
	        disabledTextColor: flatButtonTheme.disabledTextColor,
	        primaryTextColor: flatButtonTheme.primaryTextColor,
	        secondaryTextColor: flatButtonTheme.secondaryTextColor,
	        textColor: flatButtonTheme.textColor,
	        textTransform: flatButtonTheme.textTransform ? flatButtonTheme.textTransform : buttonTheme.textTransform ? buttonTheme.textTransform : 'uppercase'
	      };
	    },
	    getChildrenClasses: function getChildrenClasses() {
	      return [EnhancedButton, FlatButtonLabel];
	    }
	  },

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    disabled: React.PropTypes.bool,
	    hoverColor: React.PropTypes.string,
	    label: validateLabel,
	    labelPosition: React.PropTypes.oneOf(['before', 'after']),
	    labelStyle: React.PropTypes.object,
	    onKeyboardFocus: React.PropTypes.func,
	    onMouseEnter: React.PropTypes.func,
	    onMouseLeave: React.PropTypes.func,
	    onTouchStart: React.PropTypes.func,
	    primary: React.PropTypes.bool,
	    rippleColor: React.PropTypes.string,
	    secondary: React.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      labelStyle: {},
	      labelPosition: 'before',
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {},
	      onTouchStart: function onTouchStart() {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      isKeyboardFocused: false,
	      touch: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var disabled = _props.disabled;
	    var hoverColor = _props.hoverColor;
	    var backgroundColor = _props.backgroundColor;
	    var label = _props.label;
	    var labelStyle = _props.labelStyle;
	    var labelPosition = _props.labelPosition;
	    var onKeyboardFocus = _props.onKeyboardFocus;
	    var onMouseLeave = _props.onMouseLeave;
	    var onMouseEnter = _props.onMouseEnter;
	    var onTouchStart = _props.onTouchStart;
	    var primary = _props.primary;
	    var rippleColor = _props.rippleColor;
	    var secondary = _props.secondary;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['children', 'disabled', 'hoverColor', 'backgroundColor', 'label', 'labelStyle', 'labelPosition', 'onKeyboardFocus', 'onMouseLeave', 'onMouseEnter', 'onTouchStart', 'primary', 'rippleColor', 'secondary', 'style']);

	    var _constructor$getRelevantContextKeys = this.constructor.getRelevantContextKeys(this.state.muiTheme);

	    var buttonColor = _constructor$getRelevantContextKeys.buttonColor;
	    var buttonHeight = _constructor$getRelevantContextKeys.buttonHeight;
	    var buttonMinWidth = _constructor$getRelevantContextKeys.buttonMinWidth;
	    var disabledTextColor = _constructor$getRelevantContextKeys.disabledTextColor;
	    var primaryTextColor = _constructor$getRelevantContextKeys.primaryTextColor;
	    var secondaryTextColor = _constructor$getRelevantContextKeys.secondaryTextColor;
	    var textColor = _constructor$getRelevantContextKeys.textColor;
	    var textTransform = _constructor$getRelevantContextKeys.textTransform;

	    var defaultColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;

	    var defaultHoverColor = ColorManipulator.fade(ColorManipulator.lighten(defaultColor, 0.4), 0.15);
	    var defaultRippleColor = ColorManipulator.fade(defaultColor, 0.8);
	    var buttonHoverColor = hoverColor || defaultHoverColor;
	    var buttonRippleColor = rippleColor || defaultRippleColor;
	    var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;
	    var buttonBackgroundColor = backgroundColor || buttonColor;

	    var mergedRootStyles = ImmutabilityHelper.merge({
	      color: defaultColor,
	      transition: Transitions.easeOut(),
	      fontSize: Typography.fontStyleButtonFontSize,
	      letterSpacing: 0,
	      textTransform: textTransform,
	      fontWeight: Typography.fontWeightMedium,
	      borderRadius: 2,
	      userSelect: 'none',
	      position: 'relative',
	      overflow: 'hidden',
	      backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
	      lineHeight: buttonHeight + 'px',
	      minWidth: buttonMinWidth,
	      padding: 0,
	      margin: 0,
	      //This is need so that ripples do not bleed past border radius.
	      //See: http://stackoverflow.com/questions/17298739
	      transform: 'translate3d(0, 0, 0)'
	    }, style);

	    var labelElement = label ? React.createElement(FlatButtonLabel, { label: label, style: labelStyle }) : undefined;
	    // Place label before or after children.
	    var childrenFragment = labelPosition === 'before' ? { labelElement: labelElement, children: children } : { children: children, labelElement: labelElement };
	    var enhancedButtonChildren = Children.create(childrenFragment);

	    return React.createElement(
	      EnhancedButton,
	      _extends({}, other, {
	        disabled: disabled,
	        focusRippleColor: buttonRippleColor,
	        onKeyboardFocus: this._handleKeyboardFocus,
	        onMouseLeave: this._handleMouseLeave,
	        onMouseEnter: this._handleMouseEnter,
	        onTouchStart: this._handleTouchStart,
	        style: mergedRootStyles,
	        touchRippleColor: buttonRippleColor }),
	      enhancedButtonChildren
	    );
	  },

	  _handleKeyboardFocus: function _handleKeyboardFocus(e, isKeyboardFocused) {
	    this.setState({ isKeyboardFocused: isKeyboardFocused });
	    this.props.onKeyboardFocus(e, isKeyboardFocused);
	  },

	  _handleMouseEnter: function _handleMouseEnter(e) {
	    //Cancel hover styles for touch devices
	    if (!this.state.touch) this.setState({ hovered: true });
	    this.props.onMouseEnter(e);
	  },

	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    this.props.onMouseLeave(e);
	  },

	  _handleTouchStart: function _handleTouchStart(e) {
	    this.setState({ touch: true });
	    this.props.onTouchStart(e);
	  }

	});

	module.exports = FlatButton;


/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var shallowEqual = __webpack_require__(368);

	function relevantContextKeysEqual(classObject, currentContext, nextContext) {

	  //Get those keys from current object's context that we care
	  //about and check whether those keys have changed or not
	  if (classObject.getRelevantContextKeys) {
	    var currentContextKeys = classObject.getRelevantContextKeys(currentContext);
	    var nextContextKeys = classObject.getRelevantContextKeys(nextContext);

	    if (!shallowEqual(currentContextKeys, nextContextKeys)) {
	      return false;
	    }
	  }

	  //Check if children context keys changed
	  if (classObject.getChildrenClasses) {
	    var childrenArray = classObject.getChildrenClasses();
	    for (var i = 0; i < childrenArray.length; i++) {
	      if (!relevantContextKeysEqual(childrenArray[i], currentContext, nextContext)) {
	        return false;
	      }
	    }
	  }

	  //context keys are equal
	  return true;
	}

	module.exports = {

	  //Don't update if state, prop, and context are equal
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState, nextContext) {

	    //If either the props or state have changed, component should update
	    if (!shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)) {
	      return true;
	    }

	    //If current theme and next theme are both undefined, do not update
	    if (!this.context.muiTheme && !nextContext.muiTheme) {
	      return false;
	    }

	    //If both themes exist, compare keys only if current theme is not static
	    if (this.context.muiTheme && nextContext.muiTheme) {
	      return !this.context.muiTheme['static'] && !relevantContextKeysEqual(this.constructor, this.context.muiTheme, nextContext.muiTheme);
	    }

	    //At this point it is guaranteed that exactly one theme is undefined so simply update
	    return true;
	  }

	};


/***/ },
/* 368 */
/***/ function(module, exports) {

	'jonny22234';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];


/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var ContextPure = __webpack_require__(367);
	var StylePropable = __webpack_require__(330);
	var Styles = __webpack_require__(334);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var FlatButtonLabel = React.createClass({
	  displayName: 'FlatButtonLabel',

	  mixins: [ContextPure, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    label: React.PropTypes.node,
	    style: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      return {
	        spacingDesktopGutterLess: muiTheme.rawTheme.spacing.desktopGutterLess
	      };
	    }
	  },

	  render: function render() {
	    var _props = this.props;
	    var label = _props.label;
	    var style = _props.style;

	    var contextKeys = this.constructor.getRelevantContextKeys(this.state.muiTheme);

	    var mergedRootStyles = this.mergeStyles({
	      position: 'relative',
	      padding: '0 ' + contextKeys.spacingDesktopGutterLess + 'px'
	    }, style);

	    return React.createElement(
	      'span',
	      { style: this.prepareStyles(mergedRootStyles) },
	      label
	    );
	  }

	});

	module.exports = FlatButtonLabel;


/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var TabTemplate = __webpack_require__(371);
	var InkBar = __webpack_require__(372);
	var StylePropable = __webpack_require__(330);
	var Controllable = __webpack_require__(373);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var Tabs = React.createClass({
	  displayName: 'Tabs',

	  mixins: [StylePropable, Controllable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    contentContainerStyle: React.PropTypes.object,
	    initialSelectedIndex: React.PropTypes.number,
	    inkBarStyle: React.PropTypes.object,
	    tabItemContainerStyle: React.PropTypes.object,
	    tabTemplate: React.PropTypes.func
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      initialSelectedIndex: 0,
	      tabTemplate: TabTemplate
	    };
	  },

	  getInitialState: function getInitialState() {
	    var valueLink = this.getValueLink(this.props);
	    var initialIndex = this.props.initialSelectedIndex;

	    return {
	      selectedIndex: valueLink.value ? this._getSelectedIndex(this.props) : initialIndex < this.getTabCount() ? initialIndex : 0,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  getEvenWidth: function getEvenWidth() {
	    return parseInt(window.getComputedStyle(ReactDOM.findDOMNode(this)).getPropertyValue('width'), 10);
	  },

	  getTabCount: function getTabCount() {
	    return React.Children.count(this.props.children);
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(newProps, nextContext) {
	    var valueLink = this.getValueLink(newProps);
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    if (valueLink.value) {
	      this.setState({ selectedIndex: this._getSelectedIndex(newProps) });
	    }

	    this.setState({ muiTheme: newMuiTheme });
	  },

	  render: function render() {
	    var _this = this;

	    var _props = this.props;
	    var children = _props.children;
	    var contentContainerStyle = _props.contentContainerStyle;
	    var initialSelectedIndex = _props.initialSelectedIndex;
	    var inkBarStyle = _props.inkBarStyle;
	    var style = _props.style;
	    var tabWidth = _props.tabWidth;
	    var tabItemContainerStyle = _props.tabItemContainerStyle;
	    var tabTemplate = _props.tabTemplate;

	    var other = _objectWithoutProperties(_props, ['children', 'contentContainerStyle', 'initialSelectedIndex', 'inkBarStyle', 'style', 'tabWidth', 'tabItemContainerStyle', 'tabTemplate']);

	    var themeVariables = this.state.muiTheme.tabs;
	    var styles = {
	      tabItemContainer: {
	        margin: 0,
	        padding: 0,
	        width: '100%',
	        height: 48,
	        backgroundColor: themeVariables.backgroundColor,
	        whiteSpace: 'nowrap',
	        display: 'table'
	      }
	    };

	    var valueLink = this.getValueLink(this.props);
	    var tabValue = valueLink.value;
	    var tabContent = [];

	    var width = 100 / this.getTabCount() + '%';

	    var left = 'calc(' + width + '*' + this.state.selectedIndex + ')';

	    var tabs = React.Children.map(children, function (tab, index) {
	      if (tab.type.displayName === "Tab") {
	        if (!tab.props.value && tabValue && process.env.NODE_ENV !== 'production') {
	          console.error('Tabs value prop has been passed, but Tab ' + index + ' does not have a value prop. Needs value if Tabs is going' + ' to be a controlled component.');
	        }

	        tabContent.push(tab.props.children ? React.createElement(tabTemplate, {
	          key: index,
	          selected: _this._getSelected(tab, index)
	        }, tab.props.children) : undefined);

	        return React.cloneElement(tab, {
	          key: index,
	          selected: _this._getSelected(tab, index),
	          tabIndex: index,
	          width: width,
	          onTouchTap: _this._handleTabTouchTap
	        });
	      } else {
	        var type = tab.type.displayName || tab.type;
	        console.error('Tabs only accepts Tab Components as children. Found ' + type + ' as child number ' + (index + 1) + ' of Tabs');
	      }
	    }, this);

	    var inkBar = this.state.selectedIndex !== -1 ? React.createElement(InkBar, {
	      left: left,
	      width: width,
	      style: inkBarStyle }) : null;

	    var inkBarContainerWidth = tabItemContainerStyle ? tabItemContainerStyle.width : '100%';

	    return React.createElement(
	      'div',
	      _extends({}, other, {
	        style: this.prepareStyles(style) }),
	      React.createElement(
	        'div',
	        { style: this.prepareStyles(styles.tabItemContainer, tabItemContainerStyle) },
	        tabs
	      ),
	      React.createElement(
	        'div',
	        { style: { width: inkBarContainerWidth } },
	        inkBar
	      ),
	      React.createElement(
	        'div',
	        { style: this.prepareStyles(contentContainerStyle) },
	        tabContent
	      )
	    );
	  },

	  _getSelectedIndex: function _getSelectedIndex(props) {
	    var valueLink = this.getValueLink(props);
	    var selectedIndex = -1;

	    React.Children.forEach(props.children, function (tab, index) {
	      if (valueLink.value === tab.props.value) {
	        selectedIndex = index;
	      }
	    });

	    return selectedIndex;
	  },

	  _handleTabTouchTap: function _handleTabTouchTap(value, e, tab) {
	    var valueLink = this.getValueLink(this.props);
	    var tabIndex = tab.props.tabIndex;

	    if (valueLink.value && valueLink.value !== value || this.state.selectedIndex !== tabIndex) {
	      valueLink.requestChange(value, e, tab);
	    }

	    this.setState({ selectedIndex: tabIndex });
	    tab.props.onActive(tab);
	  },

	  _getSelected: function _getSelected(tab, index) {
	    var valueLink = this.getValueLink(this.props);
	    return valueLink.value ? valueLink.value === tab.props.value : this.state.selectedIndex === index;
	  }

	});

	module.exports = Tabs;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);

	var TabTemplate = React.createClass({
	  displayName: 'TabTemplate',

	  render: function render() {
	    var styles = {
	      'height': 0,
	      'overflow': 'hidden',
	      'width': '100%',
	      'position': 'relative',
	      'textAlign': 'initial'
	    };

	    if (this.props.selected) {
	      delete styles.height;
	      delete styles.overflow;
	    }

	    return React.createElement(
	      'div',
	      { style: styles },
	      this.props.children
	    );
	  }
	});

	module.exports = TabTemplate;


/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var Transitions = __webpack_require__(338);
	var StylePropable = __webpack_require__(330);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var InkBar = React.createClass({
	  displayName: 'InkBar',

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    color: React.PropTypes.string,
	    left: React.PropTypes.string.isRequired,
	    width: React.PropTypes.string.isRequired
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  mixins: [StylePropable],

	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var left = _props.left;
	    var width = _props.width;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['color', 'left', 'width', 'style']);

	    var colorStyle = color ? { backgroundColor: color } : undefined;
	    var styles = this.prepareStyles({
	      left: left,
	      width: width,
	      bottom: 0,
	      display: 'block',
	      backgroundColor: this.state.muiTheme.inkBar.backgroundColor,
	      height: 2,
	      marginTop: -2,
	      position: 'relative',
	      transition: Transitions.easeOut('1s', 'left')
	    }, this.props.style, colorStyle);

	    return React.createElement(
	      'div',
	      { style: styles },
	      ' '
	    );
	  }

	});

	module.exports = InkBar;


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);

	module.exports = {

	  propTypes: {
	    onChange: React.PropTypes.func,
	    value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]),
	    valueLink: React.PropTypes.shape({
	      value: React.PropTypes.string.isRequired,
	      requestChange: React.PropTypes.func.isRequired
	    })
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onChange: function onChange() {}
	    };
	  },

	  getValueLink: function getValueLink(props) {
	    return props.valueLink || {
	      value: props.value,
	      requestChange: props.onChange
	    };
	  }

	};


/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var Tab = React.createClass({
	  displayName: 'Tab',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    onTouchTap: React.PropTypes.func,
	    label: React.PropTypes.node,
	    onActive: React.PropTypes.func,
	    selected: React.PropTypes.bool,
	    width: React.PropTypes.string,
	    value: React.PropTypes.string
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onActive: function onActive() {},
	      onTouchTap: function onTouchTap() {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  render: function render() {
	    var _props = this.props;
	    var label = _props.label;
	    var onActive = _props.onActive;
	    var onTouchTap = _props.onTouchTap;
	    var selected = _props.selected;
	    var style = _props.style;
	    var value = _props.value;
	    var width = _props.width;

	    var other = _objectWithoutProperties(_props, ['label', 'onActive', 'onTouchTap', 'selected', 'style', 'value', 'width']);

	    var styles = this.prepareStyles({
	      display: 'table-cell',
	      cursor: 'pointer',
	      textAlign: 'center',
	      verticalAlign: 'middle',
	      height: 48,
	      color: selected ? this.state.muiTheme.tabs.selectedTextColor : this.state.muiTheme.tabs.textColor,
	      outline: 'none',
	      fontSize: 14,
	      fontWeight: 500,
	      whiteSpace: 'initial',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      boxSizing: 'border-box',
	      width: width
	    }, style);

	    return React.createElement(
	      'div',
	      _extends({}, other, {
	        style: styles,
	        onTouchTap: this._handleTouchTap }),
	      label
	    );
	  },

	  _handleTouchTap: function _handleTouchTap(e) {
	    this.props.onTouchTap(this.props.value, e, this);
	  }

	});

	module.exports = Tab;


/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var Typography = __webpack_require__(340);
	var IconButton = __webpack_require__(376);
	var NavigationMenu = __webpack_require__(379);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);
	var Paper = __webpack_require__(364);

	var AppBar = React.createClass({
	  displayName: 'AppBar',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    onLeftIconButtonTouchTap: React.PropTypes.func,
	    onRightIconButtonTouchTap: React.PropTypes.func,
	    showMenuIconButton: React.PropTypes.bool,
	    style: React.PropTypes.object,
	    iconClassNameLeft: React.PropTypes.string,
	    iconClassNameRight: React.PropTypes.string,
	    iconElementLeft: React.PropTypes.element,
	    iconElementRight: React.PropTypes.element,
	    iconStyleRight: React.PropTypes.object,
	    title: React.PropTypes.node,
	    zDepth: React.PropTypes.number
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      showMenuIconButton: true,
	      title: '',
	      zDepth: 1
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (process.env.NODE_ENV !== 'production') {
	      if (this.props.iconElementLeft && this.props.iconClassNameLeft) {
	        console.warn('Properties iconClassNameLeft and iconElementLeft cannot be simultaneously ' + 'defined. Please use one or the other.');
	      }

	      if (this.props.iconElementRight && this.props.iconClassNameRight) {
	        console.warn('Properties iconClassNameRight and iconElementRight cannot be simultaneously ' + 'defined. Please use one or the other.');
	      }
	    }
	  },

	  getStyles: function getStyles() {
	    var spacing = this.state.muiTheme.rawTheme.spacing;
	    var themeVariables = this.state.muiTheme.appBar;
	    var iconButtonSize = this.state.muiTheme.button.iconButtonSize;
	    var flatButtonSize = 36;
	    var styles = {
	      root: {
	        zIndex: 5,
	        width: '100%',
	        display: '-webkit-box; display: -webkit-flex; display: flex',
	        minHeight: themeVariables.height,
	        backgroundColor: themeVariables.color,
	        paddingLeft: spacing.desktopGutter,
	        paddingRight: spacing.desktopGutter
	      },
	      title: {
	        whiteSpace: 'nowrap',
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        margin: 0,
	        paddingTop: 0,
	        letterSpacing: 0,
	        fontSize: 24,
	        fontWeight: Typography.fontWeightNormal,
	        color: themeVariables.textColor,
	        lineHeight: themeVariables.height + 'px'
	      },
	      mainElement: {
	        boxFlex: 1,
	        flex: '1'
	      },
	      iconButton: {
	        style: {
	          marginTop: (themeVariables.height - iconButtonSize) / 2,
	          marginRight: 8,
	          marginLeft: -16
	        },
	        iconStyle: {
	          fill: themeVariables.textColor,
	          color: themeVariables.textColor
	        }
	      },
	      flatButton: {
	        color: themeVariables.textColor,
	        backgroundColor: 'transparent',
	        marginTop: (iconButtonSize - flatButtonSize) / 2 + 2
	      }
	    };

	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var title = _props.title;
	    var iconStyleRight = _props.iconStyleRight;
	    var showMenuIconButton = _props.showMenuIconButton;
	    var iconElementLeft = _props.iconElementLeft;
	    var iconElementRight = _props.iconElementRight;
	    var iconClassNameLeft = _props.iconClassNameLeft;
	    var iconClassNameRight = _props.iconClassNameRight;
	    var className = _props.className;
	    var style = _props.style;
	    var zDepth = _props.zDepth;
	    var children = _props.children;

	    var other = _objectWithoutProperties(_props, ['title', 'iconStyleRight', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'className', 'style', 'zDepth', 'children']);

	    var menuElementLeft = undefined;
	    var menuElementRight = undefined;
	    var styles = this.getStyles();
	    var iconRightStyle = this.mergeStyles(styles.iconButton.style, {
	      marginRight: -16,
	      marginLeft: 'auto'
	    }, iconStyleRight);
	    var titleElement = undefined;

	    if (title) {
	      // If the title is a string, wrap in an h1 tag.
	      // If not, just use it as a node.
	      titleElement = typeof title === 'string' || title instanceof String ? React.createElement(
	        'h1',
	        { style: this.prepareStyles(styles.title, styles.mainElement) },
	        title
	      ) : React.createElement(
	        'div',
	        { style: this.prepareStyles(styles.mainElement) },
	        title
	      );
	    }

	    if (showMenuIconButton) {
	      if (iconElementLeft) {
	        switch (iconElementLeft.type.displayName) {
	          case 'IconButton':
	            iconElementLeft = React.cloneElement(iconElementLeft, {
	              iconStyle: this.mergeStyles(styles.iconButton.iconStyle)
	            });
	            break;
	        }

	        menuElementLeft = React.createElement(
	          'div',
	          { style: this.prepareStyles(styles.iconButton.style) },
	          iconElementLeft
	        );
	      } else {
	        var child = iconClassNameLeft ? '' : React.createElement(NavigationMenu, { style: this.mergeStyles(styles.iconButton.iconStyle) });
	        menuElementLeft = React.createElement(
	          IconButton,
	          {
	            style: this.mergeStyles(styles.iconButton.style),
	            iconStyle: this.mergeStyles(styles.iconButton.iconStyle),
	            iconClassName: iconClassNameLeft,
	            onTouchTap: this._onLeftIconButtonTouchTap },
	          child
	        );
	      }
	    }

	    if (iconElementRight) {
	      switch (iconElementRight.type.displayName) {
	        case 'IconMenu':
	        case 'IconButton':
	          iconElementRight = React.cloneElement(iconElementRight, {
	            iconStyle: this.mergeStyles(styles.iconButton.iconStyle)
	          });
	          break;

	        case 'FlatButton':
	          iconElementRight = React.cloneElement(iconElementRight, {
	            style: this.mergeStyles(styles.flatButton, iconElementRight.props.style)
	          });
	          break;
	      }

	      menuElementRight = React.createElement(
	        'div',
	        { style: this.prepareStyles(iconRightStyle) },
	        iconElementRight
	      );
	    } else if (iconClassNameRight) {
	      menuElementRight = React.createElement(IconButton, {
	        style: iconRightStyle,
	        iconStyle: this.mergeStyles(styles.iconButton.iconStyle),
	        iconClassName: iconClassNameRight,
	        onTouchTap: this._onRightIconButtonTouchTap });
	    }

	    return React.createElement(
	      Paper,
	      _extends({}, other, {
	        rounded: false,
	        className: className,
	        style: this.mergeStyles(styles.root, style),
	        zDepth: zDepth }),
	      menuElementLeft,
	      titleElement,
	      menuElementRight,
	      children
	    );
	  },

	  _onLeftIconButtonTouchTap: function _onLeftIconButtonTouchTap(event) {
	    if (this.props.onLeftIconButtonTouchTap) {
	      this.props.onLeftIconButtonTouchTap(event);
	    }
	  },

	  _onRightIconButtonTouchTap: function _onRightIconButtonTouchTap(event) {
	    if (this.props.onRightIconButtonTouchTap) {
	      this.props.onRightIconButtonTouchTap(event);
	    }
	  }

	});

	module.exports = AppBar;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var ContextPure = __webpack_require__(367);
	var Transitions = __webpack_require__(338);
	var PropTypes = __webpack_require__(365);
	var EnhancedButton = __webpack_require__(342);
	var FontIcon = __webpack_require__(377);
	var Tooltip = __webpack_require__(378);
	var Children = __webpack_require__(346);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var IconButton = React.createClass({
	  displayName: 'IconButton',

	  mixins: [StylePropable, ContextPure],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      var spacing = muiTheme.rawTheme.spacing;
	      var palette = muiTheme.rawTheme.palette;

	      return {
	        iconSize: spacing.iconSize,
	        textColor: palette.textColor,
	        disabledColor: palette.disabledColor
	      };
	    },

	    getChildrenClasses: function getChildrenClasses() {
	      return [EnhancedButton, FontIcon, Tooltip];
	    }
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    className: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    iconClassName: React.PropTypes.string,
	    iconStyle: React.PropTypes.object,
	    onBlur: React.PropTypes.func,
	    onFocus: React.PropTypes.func,
	    onKeyboardFocus: React.PropTypes.func,
	    tooltip: React.PropTypes.node,
	    tooltipStyles: React.PropTypes.object,
	    tooltipPosition: PropTypes.cornersAndCenter,
	    touch: React.PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    return {
	      tooltipShown: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      iconStyle: {},
	      tooltipPosition: 'bottom-center'
	    };
	  },

	  getStyles: function getStyles() {
	    var _constructor$getRelevantContextKeys = this.constructor.getRelevantContextKeys(this.state.muiTheme);

	    var iconSize = _constructor$getRelevantContextKeys.iconSize;
	    var textColor = _constructor$getRelevantContextKeys.textColor;
	    var disabledColor = _constructor$getRelevantContextKeys.disabledColor;

	    var styles = {
	      root: {
	        position: 'relative',
	        boxSizing: 'border-box',
	        transition: Transitions.easeOut(),
	        padding: iconSize / 2,
	        width: iconSize * 2,
	        height: iconSize * 2,
	        fontSize: 0
	      },
	      tooltip: {
	        boxSizing: 'border-box'
	      },
	      icon: {
	        color: textColor,
	        fill: textColor
	      },
	      overlay: {
	        position: 'relative',
	        top: 0,
	        width: '100%',
	        height: '100%',
	        background: disabledColor
	      },
	      disabled: {
	        color: disabledColor,
	        fill: disabledColor
	      }
	    };

	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var iconClassName = _props.iconClassName;
	    var tooltip = _props.tooltip;
	    var touch = _props.touch;
	    var iconStyle = _props.iconStyle;

	    var other = _objectWithoutProperties(_props, ['disabled', 'iconClassName', 'tooltip', 'touch', 'iconStyle']);

	    var fonticon = undefined;

	    var styles = this.getStyles();
	    var tooltipPosition = this.props.tooltipPosition.split('-');

	    var tooltipElement = tooltip ? React.createElement(Tooltip, {
	      ref: 'tooltip',
	      label: tooltip,
	      show: this.state.tooltipShown,
	      touch: touch,
	      style: this.mergeStyles(styles.tooltip, this.props.tooltipStyles),
	      verticalPosition: tooltipPosition[0],
	      horizontalPosition: tooltipPosition[1] }) : null;

	    if (iconClassName) {
	      var iconHoverColor = iconStyle.iconHoverColor;

	      var iconStyleFontIcon = _objectWithoutProperties(iconStyle, ['iconHoverColor']);

	      fonticon = React.createElement(
	        FontIcon,
	        {
	          className: iconClassName,
	          hoverColor: disabled ? null : iconHoverColor,
	          style: this.mergeStyles(styles.icon, disabled ? styles.disabled : {}, iconStyleFontIcon) },
	        this.props.children
	      );
	    }

	    var childrenStyle = disabled ? this.mergeStyles(iconStyle, styles.disabled) : iconStyle;

	    return React.createElement(
	      EnhancedButton,
	      _extends({}, other, {
	        ref: 'button',
	        centerRipple: true,
	        disabled: disabled,
	        style: this.mergeStyles(styles.root, this.props.style),
	        onBlur: this._handleBlur,
	        onFocus: this._handleFocus,
	        onMouseLeave: this._handleMouseLeave,
	        onMouseEnter: this._handleMouseEnter,
	        onKeyboardFocus: this._handleKeyboardFocus }),
	      tooltipElement,
	      fonticon,
	      Children.extend(this.props.children, {
	        style: childrenStyle
	      })
	    );
	  },

	  setKeyboardFocus: function setKeyboardFocus() {
	    this.refs.button.setKeyboardFocus();
	  },

	  _showTooltip: function _showTooltip() {
	    if (!this.props.disabled && this.props.tooltip) {
	      this.setState({ tooltipShown: true });
	    }
	  },

	  _hideTooltip: function _hideTooltip() {
	    if (this.props.tooltip) this.setState({ tooltipShown: false });
	  },

	  _handleBlur: function _handleBlur(e) {
	    this._hideTooltip();
	    if (this.props.onBlur) this.props.onBlur(e);
	  },

	  _handleFocus: function _handleFocus(e) {
	    this._showTooltip();
	    if (this.props.onFocus) this.props.onFocus(e);
	  },

	  _handleMouseLeave: function _handleMouseLeave(e) {
	    if (!this.refs.button.isKeyboardFocused()) this._hideTooltip();
	    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
	  },

	  _handleMouseEnter: function _handleMouseEnter(e) {
	    this._showTooltip();
	    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
	  },

	  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
	    if (keyboardFocused && !this.props.disabled) {
	      this._showTooltip();
	      if (this.props.onFocus) this.props.onFocus(e);
	    } else if (!this.state.hovered) {
	      this._hideTooltip();
	      if (this.props.onBlur) this.props.onBlur(e);
	    }

	    if (this.props.onKeyboardFocus) this.props.onKeyboardFocus(e, keyboardFocused);
	  }

	});

	module.exports = IconButton;


/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var FontIcon = React.createClass({
	  displayName: 'FontIcon',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    color: React.PropTypes.string,
	    hoverColor: React.PropTypes.string,
	    onMouseLeave: React.PropTypes.func,
	    onMouseEnter: React.PropTypes.func
	  },

	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var hoverColor = _props.hoverColor;
	    var onMouseLeave = _props.onMouseLeave;
	    var onMouseEnter = _props.onMouseEnter;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['color', 'hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);

	    var spacing = this.state.muiTheme.rawTheme.spacing;
	    var offColor = color ? color : style && style.color ? style.color : this.state.muiTheme.rawTheme.palette.textColor;
	    var onColor = hoverColor ? hoverColor : offColor;

	    var mergedStyles = this.prepareStyles({
	      position: 'relative',
	      fontSize: spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: Transitions.easeOut()
	    }, style, {
	      color: this.state.hovered ? onColor : offColor
	    });

	    return React.createElement('span', _extends({}, other, {
	      onMouseLeave: this._handleMouseLeave,
	      onMouseEnter: this._handleMouseEnter,
	      style: mergedStyles }));
	  },

	  _handleMouseLeave: function _handleMouseLeave(e) {
	    // hover is needed only when a hoverColor is defined
	    if (this.props.hoverColor !== undefined) this.setState({ hovered: false });
	    if (this.props.onMouseLeave) {
	      this.props.onMouseLeave(e);
	    }
	  },

	  _handleMouseEnter: function _handleMouseEnter(e) {
	    // hover is needed only when a hoverColor is defined
	    if (this.props.hoverColor !== undefined) this.setState({ hovered: true });
	    if (this.props.onMouseEnter) {
	      this.props.onMouseEnter(e);
	    }
	  }
	});

	module.exports = FontIcon;


/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var Colors = __webpack_require__(341);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var Tooltip = React.createClass({
	  displayName: 'Tooltip',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    className: React.PropTypes.string,
	    label: React.PropTypes.node.isRequired,
	    show: React.PropTypes.bool,
	    touch: React.PropTypes.bool,
	    verticalPosition: React.PropTypes.oneOf(['top', 'bottom']),
	    horizontalPosition: React.PropTypes.oneOf(['left', 'right', 'center'])
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this._setRippleSize();
	    this._setTooltipPosition();
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    this._setTooltipPosition();

	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._setRippleSize();
	  },

	  getInitialState: function getInitialState() {
	    return {
	      offsetWidth: null,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  getStyles: function getStyles() {
	    var verticalPosition = this.props.verticalPosition;
	    var horizontalPosition = this.props.horizontalPosition;
	    var touchMarginOffset = this.props.touch ? 10 : 0;
	    var touchOffsetTop = this.props.touch ? -20 : -10;
	    var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

	    var styles = {
	      root: {
	        position: 'absolute',
	        fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	        fontSize: '10px',
	        lineHeight: '22px',
	        padding: '0 8px',
	        color: Colors.white,
	        overflow: 'hidden',
	        top: -10000,
	        borderRadius: 2,
	        userSelect: 'none',
	        opacity: 0,
	        right: horizontalPosition === 'left' ? 12 : null,
	        left: horizontalPosition === 'center' ? (this.state.offsetWidth - 48) / 2 * -1 : null,
	        transition: Transitions.easeOut('0ms', 'top', '450ms') + ',' + Transitions.easeOut('450ms', 'transform', '0ms') + ',' + Transitions.easeOut('450ms', 'opacity', '0ms')
	      },
	      label: {
	        position: 'relative',
	        whiteSpace: 'nowrap'
	      },
	      ripple: {
	        position: 'absolute',
	        left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	        top: verticalPosition === 'bottom' ? 0 : '100%',
	        transform: 'translate(-50%, -50%)',
	        borderRadius: '50%',
	        backgroundColor: 'transparent',
	        transition: Transitions.easeOut('0ms', 'width', '450ms') + ',' + Transitions.easeOut('0ms', 'height', '450ms') + ',' + Transitions.easeOut('450ms', 'backgroundColor', '0ms')
	      },
	      rootWhenShown: {
	        top: verticalPosition === 'top' ? touchOffsetTop : 36,
	        opacity: 0.9,
	        transform: 'translate3d(0px, ' + offset + 'px, 0px)',
	        transition: Transitions.easeOut('0ms', 'top', '0ms') + ',' + Transitions.easeOut('450ms', 'transform', '0ms') + ',' + Transitions.easeOut('450ms', 'opacity', '0ms')
	      },
	      rootWhenTouched: {
	        fontSize: '14px',
	        lineHeight: '32px',
	        padding: '0 16px'
	      },
	      rippleWhenShown: {
	        backgroundColor: Colors.grey700,
	        transition: Transitions.easeOut('450ms', 'width', '0ms') + ',' + Transitions.easeOut('450ms', 'height', '0ms') + ',' + Transitions.easeOut('450ms', 'backgroundColor', '0ms')
	      }
	    };

	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var label = _props.label;

	    var other = _objectWithoutProperties(_props, ['label']);

	    var styles = this.getStyles();
	    return React.createElement(
	      'div',
	      _extends({}, other, {
	        style: this.prepareStyles(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style) }),
	      React.createElement('div', {
	        ref: 'ripple',
	        style: this.prepareStyles(styles.ripple, this.props.show && styles.rippleWhenShown) }),
	      React.createElement(
	        'span',
	        { style: this.prepareStyles(styles.label) },
	        this.props.label
	      )
	    );
	  },

	  _setRippleSize: function _setRippleSize() {
	    var ripple = ReactDOM.findDOMNode(this.refs.ripple);
	    var tooltip = window.getComputedStyle(ReactDOM.findDOMNode(this));
	    var tooltipWidth = parseInt(tooltip.getPropertyValue("width"), 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	    var tooltipHeight = parseInt(tooltip.getPropertyValue("height"), 10);

	    var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	    if (this.props.show) {
	      ripple.style.height = rippleDiameter + 'px';
	      ripple.style.width = rippleDiameter + 'px';
	    } else {
	      ripple.style.width = '0px';
	      ripple.style.height = '0px';
	    }
	  },

	  _setTooltipPosition: function _setTooltipPosition() {
	    var tooltip = ReactDOM.findDOMNode(this);
	    this.setState({ offsetWidth: tooltip.offsetWidth });
	  }

	});

	module.exports = Tooltip;


/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var SvgIcon = __webpack_require__(380);

	var NavigationMenu = React.createClass({
	  displayName: 'NavigationMenu',

	  mixins: [PureRenderMixin],

	  render: function render() {
	    return React.createElement(
	      SvgIcon,
	      this.props,
	      React.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
	    );
	  }

	});

	module.exports = NavigationMenu;


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var SvgIcon = React.createClass({
	  displayName: 'SvgIcon',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    color: React.PropTypes.string,
	    hoverColor: React.PropTypes.string,
	    onMouseEnter: React.PropTypes.func,
	    onMouseLeave: React.PropTypes.func,
	    viewBox: React.PropTypes.string
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {},
	      viewBox: '0 0 24 24'
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var color = _props.color;
	    var hoverColor = _props.hoverColor;
	    var onMouseEnter = _props.onMouseEnter;
	    var onMouseLeave = _props.onMouseLeave;
	    var style = _props.style;
	    var viewBox = _props.viewBox;

	    var other = _objectWithoutProperties(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);

	    var offColor = color ? color : style && style.fill ? style.fill : this.state.muiTheme.rawTheme.palette.textColor;
	    var onColor = hoverColor ? hoverColor : offColor;

	    var mergedStyles = this.prepareStyles({
	      display: 'inline-block',
	      height: 24,
	      width: 24,
	      userSelect: 'none',
	      transition: Transitions.easeOut()
	    }, style, {
	      // Make sure our fill color overrides fill provided in props.style
	      fill: this.state.hovered ? onColor : offColor
	    });

	    var events = hoverColor ? {
	      onMouseEnter: this._handleMouseEnter,
	      onMouseLeave: this._handleMouseLeave
	    } : {};

	    return React.createElement(
	      'svg',
	      _extends({}, other, events, {
	        style: mergedStyles,
	        viewBox: viewBox }),
	      children
	    );
	  },

	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    this.props.onMouseLeave(e);
	  },

	  _handleMouseEnter: function _handleMouseEnter(e) {
	    this.setState({ hovered: true });
	    this.props.onMouseEnter(e);
	  }
	});

	module.exports = SvgIcon;


/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);

	var RaisedButton = __webpack_require__(328);
	var FloatingActionButtonFlex = __webpack_require__(382);
	var DropDownMenu = __webpack_require__(383);

	var MediaPlayer = __webpack_require__(398);
	var MetaDataForm = __webpack_require__(401);

	var RecordController = __webpack_require__(400);

	var timerObj = null;

	var buttonStyle = {
		height: '200px',
		width: '200px'
	};

	var divStyle = {
		width: '100%',
		height: '100%',
		textAlign: 'center'
	};

	var recordIcon = 'ion-record';
	var playIcon = 'ion-play';
	var stopIcon = 'ion-stop';

	var RecordButton = React.createClass({
		displayName: 'RecordButton',

		getInitialState: function getInitialState() {
			return {
				file: RecordController.recordButtonMedia ? RecordController.recordButtonMedia.src : null,
				tempFileName: null,
				tempUrl: null,
				status: RecordController.currentStatus,
				action: RecordController.currentAction,
				buttonColour: '#ff5722',
				iconStyle: recordIcon,
				buttonFunction: this.startRecord,
				time: {
					hours: 0,
					minutes: 0,
					seconds: 0
				}

			};
		},
		startRecord: function startRecord() {
			console.log('\n_+_+_+_+_+_Start Record' + '_+_+_+_+_+_+_+\n');
			this.reset();
			var now = new Date();
			var fileName = now.getTime().toString();
			if (device.platform === 'Android') {
				console.log('_+_+_+_+_ in Android _+_+_+_+_+_+_');
				fileName = cordova.file.externalApplicationStorageDirectory + 'files/' + fileName + '.m4a';
			} else if (device.platform === 'iOS') {
				//fileName =  cordova.file.documentsDirectory + '/' + fileName + '.wav';
				//fileName =  'documents://' + fileName + '.wav';
				fileName = fileName + '.wav';

				console.log('\n_+_+_+_+_+_iOS FileName is ' + fileName + '_+_+_+_+_+_+_+\n');
			} else {
				console.log('_+_+_+_+_ in Else _+_+_+_+_+_+_');
				fileName = fileName + '.wav';
			}
			RecordController.startRecording(fileName, this.setButtonState);
			this.setState({
				tempFileName: fileName
			});
		},
		stopRecord: function stopRecord() {
			RecordController.stopRecording();
			this.stopTimer();
			this.setState({
				time: {
					hours: 0,
					minutes: 0,
					seconds: 0
				}
			});
		},
		reset: function reset() {
			this.setState({
				file: null,
				tempFileName: null,
				tempUrl: null,
				time: {
					hours: 0,
					minutes: 0,
					seconds: 0
				}
			});
			RecordController.resetMedia();
		},
		startTimer: function startTimer() {
			var timerInHundrethSeconds = 0;
			timerObj = window.setInterval((function () {
				timerInHundrethSeconds++;
				this.setState({
					time: {
						hours: Math.floor(timerInHundrethSeconds / 36000),
						minutes: Math.floor(timerInHundrethSeconds % 36000 / 600),
						seconds: (timerInHundrethSeconds % 36000 % 600 / 10).toFixed(1) }
				});
			}).bind(this), 100);
		},
		stopTimer: function stopTimer() {
			window.clearInterval(timerObj);
		},
		//Callback function to set the state of the button
		setButtonState: function setButtonState(mediaState) {
			console.log('RECORD CALLBACK - mediaState: ' + mediaState);
			if (mediaState === 2) {
				//currently recording state
				this.setState({
					buttonColour: '#f44336',
					iconStyle: stopIcon,
					buttonFunction: this.stopRecord,
					status: mediaState
				});
				this.startTimer();
			} else if (mediaState === 4) {
				//ready to record state
				console.log('this.state.tempFileName: ' + this.state.tempFileName);
				this.setState({
					buttonColour: '#ff5722',
					iconStyle: recordIcon,
					buttonFunction: this.startRecord,
					file: this.state.tempFileName,
					status: mediaState
				});
			}
		},
		save: function save(soundbite) {
			if (this.refs.metaDataForm) {
				soundbite.length = this.refs.mediaPlayer.state.mediaLength;
				this.refs.mediaPlayer.stop();
				this.reset();
				this.props.callbackParent(soundbite);
			}
		},
		saveButton: function saveButton(event) {
			this.refs.metaDataForm.save();
		},
		updatePlayTimer: function updatePlayTimer(timeInSeconds) {
			var hours = Math.floor(timeInSeconds / 3600);

			var minutes = Math.floor(timeInSeconds % 3600 / 60);

			var seconds = (timeInSeconds % 3600 % 60).toFixed(1);

			this.setState({
				time: {
					hours: hours,
					minutes: minutes,
					seconds: seconds
				}
			});
		},
		loadSite: function loadSite(event, selectedIndex, menuItem) {
			var ref = cordova.InAppBrowser.open(menuItem.payload, '_blank', 'location=yes');
			ref.addEventListener('exit', this.parseUrl);
			ref.addEventListener('loadstop', (function (event) {
				ref.executeScript({ code: 'window.location.href;' }, (function (data) {
					//TODO: check if valid youtube url
					this.setState({ tempUrl: data });
				}).bind(this));
			}).bind(this));
		},
		parseUrl: function parseUrl(event) {
			this.refs.urlSelectMenu.setState({ selectedIndex: 0 });
		},
		render: function render() {
			var mediaPlayer = React.createElement(MediaPlayer, {
				ref: 'mediaPlayer',
				mediaPlayerStyle: { margin: '0 5%' },
				updateParentTime: this.updatePlayTimer
			});
			var metaDataForm;
			var saveButtons;

			var now = new Date();

			if (this.state.file !== null && this.state.status === 4) {
				mediaPlayer = React.createElement(MediaPlayer, {
					key: 'mediaPlayer',
					ref: 'mediaPlayer',
					mediaPlayerStyle: { margin: '0 5%' },
					file: this.state.file,
					updateParentTime: this.updatePlayTimer
				});
			}
			if (this.state.tempUrl !== null || this.state.file !== null) {
				saveButtons = React.createElement(RaisedButton, { label: 'Save', primary: true, fullWidth: true, onClick: this.saveButton });
				metaDataForm = React.createElement(MetaDataForm, {
					key: now,
					ref: 'metaDataForm',
					media: this.state.file,
					url: this.state.tempUrl,
					callbackParent: this.save
				});
			}

			var menuItems = [{ payload: '', text: 'Import Media From...' }, { payload: 'https://youtube.com', text: 'YouTube' }];
			return React.createElement(
				'div',
				{ style: divStyle },
				React.createElement('br', null),
				saveButtons,
				React.createElement('br', null),
				React.createElement('br', null),
				React.createElement(FloatingActionButtonFlex, {
					style: buttonStyle,
					backgroundColor: this.state.buttonColour,
					onClick: this.state.buttonFunction,
					iconClassName: this.state.iconStyle }),
				React.createElement(DropDownMenu, { ref: 'urlSelectMenu', menuItems: menuItems, onChange: this.loadSite }),
				React.createElement(
					'h1',
					null,
					this.state.time.hours,
					'h ',
					this.state.time.minutes,
					'm ',
					this.state.time.seconds,
					's'
				),
				mediaPlayer,
				metaDataForm,
				saveButtons
			);
		}
	});

	module.exports = RecordButton;

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var ColorManipulator = __webpack_require__(339);
	var EnhancedButton = __webpack_require__(342);
	var FontIcon = __webpack_require__(377);
	var Paper = __webpack_require__(364);
	var Children = __webpack_require__(346);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var getZDepth = function getZDepth(disabled) {
	  var zDepth = disabled ? 0 : 2;
	  return {
	    zDepth: zDepth,
	    initialZDepth: zDepth
	  };
	};

	var buttonHeight = '200px';

	var FloatingActionButton = React.createClass({
	  displayName: 'FloatingActionButton',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    backgroundColor: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    disabledColor: React.PropTypes.string,
	    iconClassName: React.PropTypes.string,
	    iconStyle: React.PropTypes.object,
	    mini: React.PropTypes.bool,
	    onMouseDown: React.PropTypes.func,
	    onMouseUp: React.PropTypes.func,
	    onMouseLeave: React.PropTypes.func,
	    onTouchEnd: React.PropTypes.func,
	    onTouchStart: React.PropTypes.func,
	    secondary: React.PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    var zDepth = this.props.disabled ? 0 : 2;
	    return {
	      hovered: false,
	      initialZDepth: zDepth,
	      touch: false,
	      zDepth: zDepth,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    this.setState(getZDepth(this.props.disabled));
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(newProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    if (newProps.disabled !== this.props.disabled) {
	      this.setState(getZDepth(newProps.disabled));
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    if (process.env.NODE_ENV !== 'production') {
	      if (this.props.iconClassName && this.props.children) {
	        var warning = 'You have set both an iconClassName and a child icon. ' + 'It is recommended you use only one method when adding ' + 'icons to FloatingActionButtons.';
	        console.warn(warning);
	      }
	    }
	  },

	  _getBackgroundColor: function _getBackgroundColor() {
	    return this.props.disabled ? this.props.disabledColor || this.getTheme().disabledColor : this.props.backgroundColor ? this.props.backgroundColor : this.props.secondary ? this.getTheme().secondaryColor : this.getTheme().color;
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.floatingActionButton;
	  },

	  _getIconColor: function _getIconColor() {
	    return this.props.disabled ? this.getTheme().disabledTextColor : this.props.secondary ? this.getTheme().secondaryIconColor : this.getTheme().iconColor;
	  },

	  getStyles: function getStyles() {
	    var themeVariables = this.state.muiTheme.floatingActionButton;

	    var styles = {
	      root: {
	        transition: Transitions.easeOut(),
	        display: 'inline-block'
	      },
	      container: {
	        transition: Transitions.easeOut(),
	        position: 'relative',
	        height: buttonHeight,
	        width: buttonHeight,
	        padding: 0,
	        overflow: 'hidden',
	        backgroundColor: this._getBackgroundColor(),
	        borderRadius: '50%',
	        textAlign: 'center',
	        verticalAlign: 'middle',

	        //This is need so that ripples do not bleed
	        //past border radius.
	        //See: http://stackoverflow.com/questions/17298739/css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
	        transform: 'translate3d(0, 0, 0)'
	      },
	      containerWhenMini: {
	        height: themeVariables.miniSize,
	        width: themeVariables.miniSize
	      },
	      overlay: {
	        transition: Transitions.easeOut(),
	        top: 0
	      },
	      overlayWhenHovered: {
	        backgroundColor: ColorManipulator.fade(this._getIconColor(), 0.4)
	      },
	      icon: {
	        height: '100%',
	        lineHeight: buttonHeight,
	        fill: themeVariables.iconColor,
	        color: this._getIconColor(),
	        fontSize: '8em',
	        verticalAlign: 'middle'
	      },
	      iconWhenMini: {
	        height: themeVariables.miniSize,
	        lineHeight: themeVariables.miniSize + 'px'
	      }
	    };
	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var mini = _props.mini;
	    var secondary = _props.secondary;
	    var iconStyle = _props.iconStyle;
	    var iconClassName = _props.iconClassName;

	    var other = _objectWithoutProperties(_props, ['disabled', 'mini', 'secondary', 'iconStyle', 'iconClassName']);

	    var styles = this.getStyles();

	    var iconElement = undefined;
	    if (iconClassName) {
	      iconElement = React.createElement(FontIcon, {
	        className: iconClassName,
	        style: this.mergeAndPrefix(styles.icon, mini && styles.iconWhenMini, iconStyle) });
	    }

	    var children = Children.extend(this.props.children, {
	      style: this.mergeAndPrefix(styles.icon, mini && styles.iconWhenMini, iconStyle)
	    });

	    var buttonEventHandlers = disabled ? null : {
	      onMouseDown: this._handleMouseDown,
	      onMouseUp: this._handleMouseUp,
	      onMouseLeave: this._handleMouseLeave,
	      onMouseEnter: this._handleMouseEnter,
	      onTouchStart: this._handleTouchStart,
	      onTouchEnd: this._handleTouchEnd,
	      onKeyboardFocus: this._handleKeyboardFocus
	    };

	    return React.createElement(
	      Paper,
	      {
	        style: this.mergeAndPrefix(styles.root, this.props.style),
	        zDepth: this.state.zDepth,
	        circle: true },
	      React.createElement(
	        EnhancedButton,
	        _extends({}, other, buttonEventHandlers, {
	          ref: 'container',
	          disabled: disabled,
	          style: this.mergeAndPrefix(styles.container, this.props.mini && styles.containerWhenMini),
	          focusRippleColor: styles.icon.color,
	          touchRippleColor: styles.icon.color }),
	        React.createElement(
	          'div',
	          {
	            ref: 'overlay',
	            style: this.mergeAndPrefix(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered) },
	          iconElement,
	          children
	        )
	      )
	    );
	  },

	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) {
	      this.setState({ zDepth: this.state.initialZDepth + 1 });
	    }
	    if (this.props.onMouseDown) this.props.onMouseDown(e);
	  },

	  _handleMouseUp: function _handleMouseUp(e) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onMouseUp) this.props.onMouseUp(e);
	  },

	  _handleMouseLeave: function _handleMouseLeave(e) {
	    if (!this.refs.container.isKeyboardFocused()) this.setState({ zDepth: this.state.initialZDepth, hovered: false });
	    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
	  },

	  _handleMouseEnter: function _handleMouseEnter(e) {
	    if (!this.refs.container.isKeyboardFocused() && !this.state.touch) {
	      this.setState({ hovered: true });
	    }
	    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
	  },

	  _handleTouchStart: function _handleTouchStart(e) {
	    this.setState({
	      touch: true,
	      zDepth: this.state.initialZDepth + 1
	    });
	    if (this.props.onTouchStart) this.props.onTouchStart(e);
	  },

	  _handleTouchEnd: function _handleTouchEnd(e) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onTouchEnd) this.props.onTouchEnd(e);
	  },

	  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
	    if (keyboardFocused && !this.props.disabled) {
	      this.setState({ zDepth: this.state.initialZDepth + 1 });
	      React.findDOMNode(this.refs.overlay).style.backgroundColor = ColorManipulator.fade(this.getStyles().icon.color, 0.4);
	    } else if (!this.state.hovered) {
	      this.setState({ zDepth: this.state.initialZDepth });
	      React.findDOMNode(this.refs.overlay).style.backgroundColor = 'transparent';
	    }
	  }

	});

	module.exports = FloatingActionButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var KeyCode = __webpack_require__(350);
	var DropDownArrow = __webpack_require__(384);
	var Paper = __webpack_require__(364);
	var Menu = __webpack_require__(385);
	var ClearFix = __webpack_require__(394);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var DropDownMenu = React.createClass({
	  displayName: 'DropDownMenu',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  // The nested styles for drop-down-menu are modified by toolbar and possibly
	  // other user components, so it will give full access to its js styles rather
	  // than just the parent.
	  propTypes: {
	    className: React.PropTypes.string,
	    displayMember: React.PropTypes.string,
	    valueMember: React.PropTypes.string,
	    autoWidth: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    onChange: React.PropTypes.func,
	    menuItems: React.PropTypes.array.isRequired,
	    menuItemStyle: React.PropTypes.object,
	    underlineStyle: React.PropTypes.object,
	    iconStyle: React.PropTypes.object,
	    labelStyle: React.PropTypes.object,
	    selectedIndex: React.PropTypes.number,
	    openImmediately: React.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      autoWidth: true,
	      disabled: false,
	      valueMember: 'payload',
	      displayMember: 'text',
	      openImmediately: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      open: this.props.openImmediately,
	      selectedIndex: this._isControlled() ? null : this.props.selectedIndex || 0,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    if (this.props.autoWidth) this._setWidth();
	    if (this.props.hasOwnProperty('selectedIndex')) this._setSelectedIndex(this.props);
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    if (this.props.autoWidth) this._setWidth();
	    if (nextProps.hasOwnProperty('value') || nextProps.hasOwnProperty('valueLink')) {
	      return;
	    } else if (nextProps.hasOwnProperty('selectedIndex')) {
	      this._setSelectedIndex(nextProps);
	    }
	  },

	  getStyles: function getStyles() {
	    var disabled = this.props.disabled;

	    var zIndex = 5; // As AppBar
	    var spacing = this.state.muiTheme.rawTheme.spacing;
	    var accentColor = this.state.muiTheme.dropDownMenu.accentColor;
	    var backgroundColor = this.state.muiTheme.menu.backgroundColor;
	    var styles = {
	      root: {
	        transition: Transitions.easeOut(),
	        position: 'relative',
	        display: 'inline-block',
	        height: spacing.desktopSubheaderHeight,
	        fontSize: spacing.desktopDropDownMenuFontSize,
	        outline: 'none'
	      },
	      control: {
	        cursor: disabled ? 'not-allowed' : 'pointer',
	        position: 'static',
	        height: '100%'
	      },
	      controlBg: {
	        transition: Transitions.easeOut(),
	        backgroundColor: backgroundColor,
	        height: '100%',
	        width: '100%',
	        opacity: 0
	      },
	      icon: {
	        position: 'absolute',
	        top: (spacing.desktopToolbarHeight - 24) / 2,
	        right: spacing.desktopGutterLess,
	        fill: this.state.muiTheme.dropDownMenu.accentColor
	      },
	      label: {
	        transition: Transitions.easeOut(),
	        lineHeight: spacing.desktopToolbarHeight + 'px',
	        position: 'absolute',
	        paddingLeft: spacing.desktopGutter,
	        top: 0,
	        opacity: 1,
	        color: disabled ? this.state.muiTheme.rawTheme.palette.disabledColor : this.state.muiTheme.rawTheme.palette.textColor
	      },
	      underline: {
	        borderTop: 'solid 1px ' + accentColor,
	        margin: '-1px ' + spacing.desktopGutter + 'px'
	      },
	      menu: {
	        zIndex: zIndex + 1
	      },
	      menuItem: {
	        paddingRight: spacing.iconSize + spacing.desktopGutterLess + spacing.desktopGutterMini,
	        height: spacing.desktopDropDownMenuItemHeight,
	        lineHeight: spacing.desktopDropDownMenuItemHeight + 'px',
	        whiteSpace: 'nowrap'
	      },
	      rootWhenOpen: {
	        opacity: 1
	      },
	      labelWhenOpen: {
	        opacity: 0,
	        top: spacing.desktopToolbarHeight / 2
	      },
	      overlay: {
	        height: '100%',
	        width: '100%',
	        position: 'fixed',
	        top: 0,
	        left: 0,
	        zIndex: zIndex
	      }
	    };

	    return styles;
	  },

	  getInputNode: function getInputNode() {
	    var root = this.refs.root;
	    var item = this.props.menuItems[this.state.selectedIndex];
	    if (item) {
	      root.value = item[this.props.displayMember];
	    }

	    return root;
	  },

	  render: function render() {
	    var _props = this.props;
	    var autoWidth = _props.autoWidth;
	    var className = _props.className;
	    var onFocus = _props.onFocus;
	    var onBlur = _props.onBlur;
	    var style = _props.style;
	    var displayMember = _props.displayMember;
	    var valueMember = _props.valueMember;
	    var valueLink = _props.valueLink;
	    var labelStyle = _props.labelStyle;
	    var iconStyle = _props.iconStyle;
	    var underlineStyle = _props.underlineStyle;
	    var menuItemStyle = _props.menuItemStyle;

	    var other = _objectWithoutProperties(_props, ['autoWidth', 'className', 'onFocus', 'onBlur', 'style', 'displayMember', 'valueMember', 'valueLink', 'labelStyle', 'iconStyle', 'underlineStyle', 'menuItemStyle']);

	    var styles = this.getStyles();
	    var selectedIndex = this._isControlled() ? null : this.state.selectedIndex;
	    var displayValue = "";
	    if (selectedIndex) {
	      if (process.env.NODE_ENV !== 'production') {
	        console.assert(!!this.props.menuItems[selectedIndex], 'SelectedIndex of ' + selectedIndex + ' does not exist in menuItems.');
	      }
	    } else if (valueMember && this._isControlled()) {
	      var value = this.props.hasOwnProperty('value') ? this.props.value : valueLink.value;
	      if (value !== null && value !== undefined) {
	        for (var i = 0; i < this.props.menuItems.length; i++) {
	          if (this.props.menuItems[i][valueMember] === value) {
	            selectedIndex = i;
	          }
	        }
	      }
	    }

	    var selectedItem = this.props.menuItems[selectedIndex];
	    if (selectedItem) {
	      displayValue = selectedItem[displayMember];
	    }

	    var menuItems = this.props.menuItems.map(function (item) {
	      item.text = item[displayMember];
	      item.payload = item[valueMember];
	      return item;
	    });

	    return React.createElement(
	      'div',
	      _extends({}, other, {
	        ref: 'root',
	        onKeyDown: this._onKeyDown,
	        onFocus: onFocus,
	        onBlur: onBlur,
	        className: className,
	        style: this.prepareStyles(styles.root, this.state.open && styles.rootWhenOpen, style) }),
	      React.createElement(
	        ClearFix,
	        { style: this.mergeStyles(styles.control), onTouchTap: this._onControlClick },
	        React.createElement(Paper, { style: this.mergeStyles(styles.controlBg), zDepth: 0 }),
	        React.createElement(
	          'div',
	          { style: this.prepareStyles(styles.label, this.state.open && styles.labelWhenOpen, labelStyle) },
	          displayValue
	        ),
	        React.createElement(DropDownArrow, { style: this.mergeStyles(styles.icon, iconStyle) }),
	        React.createElement('div', { style: this.prepareStyles(styles.underline, underlineStyle) })
	      ),
	      React.createElement(Menu, {
	        ref: 'menuItems',
	        autoWidth: autoWidth,
	        selectedIndex: selectedIndex,
	        menuItems: menuItems,
	        style: styles.menu,
	        menuItemStyle: this.mergeStyles(styles.menuItem, menuItemStyle),
	        hideable: true,
	        visible: this.state.open,
	        onRequestClose: this._onMenuRequestClose,
	        onItemTap: this._onMenuItemClick }),
	      this.state.open && React.createElement('div', { style: this.prepareStyles(styles.overlay), onTouchTap: this._handleOverlayTouchTap })
	    );
	  },

	  _setWidth: function _setWidth() {
	    var el = ReactDOM.findDOMNode(this);
	    var menuItemsDom = ReactDOM.findDOMNode(this.refs.menuItems);
	    if (!this.props.style || !this.props.style.hasOwnProperty('width')) {
	      el.style.width = 'auto';
	      el.style.width = menuItemsDom.offsetWidth + 'px';
	    }
	  },

	  _setSelectedIndex: function _setSelectedIndex(props) {
	    var selectedIndex = props.selectedIndex;

	    if (process.env.NODE_ENV !== 'production' && selectedIndex < 0) {
	      console.warn('Cannot set selectedIndex to a negative index.', selectedIndex);
	    }

	    this.setState({ selectedIndex: selectedIndex > -1 ? selectedIndex : 0 });
	  },

	  _onControlClick: function _onControlClick() {
	    if (!this.props.disabled) {
	      this.setState({ open: !this.state.open });
	    }
	  },

	  _onKeyDown: function _onKeyDown(e) {
	    switch (e.which) {
	      case KeyCode.UP:
	        if (!this.state.open) {
	          this._selectPreviousItem();
	        } else {
	          if (e.altKey) {
	            this.setState({ open: false });
	          }
	        }
	        break;
	      case KeyCode.DOWN:
	        if (!this.state.open) {
	          if (e.altKey) {
	            this.setState({ open: true });
	          } else {
	            this._selectNextItem();
	          }
	        }
	        break;
	      case KeyCode.ENTER:
	      case KeyCode.SPACE:
	        this.setState({ open: true });
	        break;
	      default:
	        return; //important
	    }
	    e.preventDefault();
	  },

	  _onMenuItemClick: function _onMenuItemClick(e, key, payload) {
	    if (this.props.onChange && this.state.selectedIndex !== key) {
	      var selectedItem = this.props.menuItems[key];
	      if (selectedItem) {
	        e.target.value = selectedItem[this.props.valueMember];
	      }

	      if (this.props.valueLink) {
	        this.props.valueLink.requestChange(e.target.value);
	      } else {
	        this.props.onChange(e, key, payload);
	      }
	    }

	    this.setState({
	      selectedIndex: key,
	      value: e.target.value,
	      open: false
	    });
	  },

	  _onMenuRequestClose: function _onMenuRequestClose() {
	    this.setState({ open: false });
	  },

	  _selectPreviousItem: function _selectPreviousItem() {
	    this.setState({ selectedIndex: Math.max(this.state.selectedIndex - 1, 0) });
	  },

	  _selectNextItem: function _selectNextItem() {
	    this.setState({ selectedIndex: Math.min(this.state.selectedIndex + 1, this.props.menuItems.length - 1) });
	  },

	  _handleOverlayTouchTap: function _handleOverlayTouchTap() {
	    this.setState({
	      open: false
	    });
	  },

	  _isControlled: function _isControlled() {
	    return this.props.hasOwnProperty('value') || this.props.hasOwnProperty('valueLink');
	  }

	});

	module.exports = DropDownMenu;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var SvgIcon = __webpack_require__(380);

	var NavigationArrowDropDown = React.createClass({
	  displayName: 'NavigationArrowDropDown',

	  mixins: [PureRenderMixin],

	  render: function render() {
	    return React.createElement(
	      SvgIcon,
	      this.props,
	      React.createElement('path', { d: 'M7 10l5 5 5-5z' })
	    );
	  }

	});

	module.exports = NavigationArrowDropDown;


/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var CssEvent = __webpack_require__(386);
	var KeyLine = __webpack_require__(387);
	var KeyCode = __webpack_require__(350);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var ClickAwayable = __webpack_require__(388);
	var Paper = __webpack_require__(364);
	var MenuItem = __webpack_require__(389);
	var LinkMenuItem = __webpack_require__(396);
	var SubheaderMenuItem = __webpack_require__(397);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	/***********************
	* Nested Menu Component
	***********************/
	var NestedMenuItem = React.createClass({
	  displayName: 'NestedMenuItem',

	  mixins: [ClickAwayable, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    index: React.PropTypes.number.isRequired,
	    text: React.PropTypes.string,
	    menuItems: React.PropTypes.array.isRequired,
	    zDepth: React.PropTypes.number,
	    disabled: React.PropTypes.bool,
	    active: React.PropTypes.bool,
	    onItemTap: React.PropTypes.func,
	    menuItemStyle: React.PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false
	    };
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
	      open: false,
	      activeIndex: 0
	    };
	  },

	  componentClickAway: function componentClickAway() {
	    this._closeNestedMenu();
	  },

	  componentDidMount: function componentDidMount() {
	    this._positionNestedMenu();
	    ReactDOM.findDOMNode(this).focus();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._positionNestedMenu();
	  },

	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },

	  getStyles: function getStyles() {
	    var styles = {
	      root: {
	        userSelect: 'none',
	        cursor: 'pointer',
	        lineHeight: this.getTheme().height + 'px',
	        color: this.state.muiTheme.rawTheme.palette.textColor
	      },
	      icon: {
	        float: 'left',
	        lineHeight: this.getTheme().height + 'px',
	        marginRight: this.getSpacing().desktopGutter
	      },
	      toggle: {
	        marginTop: (this.getTheme().height - this.state.muiTheme.radioButton.size) / 2,
	        float: 'right',
	        width: 42
	      },
	      rootWhenHovered: {
	        backgroundColor: this.getTheme().hoverColor
	      },
	      rootWhenSelected: {
	        color: this.getTheme().selectedTextColor
	      },
	      rootWhenDisabled: {
	        cursor: 'default',
	        color: this.state.muiTheme.rawTheme.palette.disabledColor
	      }
	    };

	    return styles;
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.menuItem;
	  },

	  render: function render() {
	    var styles = this.getStyles();
	    styles = this.prepareStyles(styles.root, this.props.active && !this.props.disabled && styles.rootWhenHovered, {
	      position: 'relative'
	    }, this.props.style);

	    var iconCustomArrowDropRight = {
	      marginRight: this.getSpacing().desktopGutterMini * -1,
	      color: this.state.muiTheme.dropDownMenu.accentColor
	    };

	    var _props = this.props;
	    var index = _props.index;
	    var menuItemStyle = _props.menuItemStyle;

	    var other = _objectWithoutProperties(_props, ['index', 'menuItemStyle']);

	    return React.createElement(
	      'div',
	      {
	        ref: 'root',
	        style: styles,
	        onMouseEnter: this._openNestedMenu,
	        onMouseLeave: this._closeNestedMenu,
	        onMouseOver: this._handleMouseOver,
	        onMouseOut: this._handleMouseOut },
	      React.createElement(
	        MenuItem,
	        {
	          index: index,
	          style: menuItemStyle,
	          disabled: this.props.disabled,
	          iconRightStyle: iconCustomArrowDropRight,
	          iconRightClassName: 'muidocs-icon-custom-arrow-drop-right',
	          onTouchTap: this._onParentItemTap },
	        this.props.text
	      ),
	      React.createElement(Menu, _extends({}, other, {
	        ref: 'nestedMenu',
	        menuItems: this.props.menuItems,
	        menuItemStyle: menuItemStyle,
	        onItemTap: this._onMenuItemTap,
	        hideable: true,
	        visible: this.state.open,
	        onRequestClose: this._closeNestedMenu,
	        zDepth: this.props.zDepth + 1 }))
	    );
	  },

	  toggleNestedMenu: function toggleNestedMenu() {
	    if (!this.props.disabled) this.setState({ open: !this.state.open });
	  },

	  isOpen: function isOpen() {
	    return this.state.open;
	  },

	  _positionNestedMenu: function _positionNestedMenu() {
	    var el = ReactDOM.findDOMNode(this);
	    var nestedMenu = ReactDOM.findDOMNode(this.refs.nestedMenu);
	    nestedMenu.style.left = el.offsetWidth + 'px';
	  },

	  _openNestedMenu: function _openNestedMenu() {
	    if (!this.props.disabled) this.setState({ open: true });
	  },

	  _closeNestedMenu: function _closeNestedMenu() {
	    this.setState({ open: false });
	    ReactDOM.findDOMNode(this).focus();
	  },

	  _onParentItemTap: function _onParentItemTap() {
	    this.toggleNestedMenu();
	  },

	  _onMenuItemTap: function _onMenuItemTap(e, index, menuItem) {
	    if (this.props.onItemTap) this.props.onItemTap(e, index, menuItem);
	    this._closeNestedMenu();
	  },
	  _handleMouseOver: function _handleMouseOver(e) {
	    if (!this.props.disabled && this.props.onMouseOver) this.props.onMouseOver(e, this.props.index);
	  },

	  _handleMouseOut: function _handleMouseOut(e) {
	    if (!this.props.disabled && this.props.onMouseOut) this.props.onMouseOut(e, this.props.index);
	  }

	});

	/****************
	* Menu Component
	****************/
	var Menu = React.createClass({
	  displayName: 'Menu',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    autoWidth: React.PropTypes.bool,
	    onItemTap: React.PropTypes.func,
	    onToggle: React.PropTypes.func,
	    onRequestClose: React.PropTypes.func,
	    menuItems: React.PropTypes.array.isRequired,
	    selectedIndex: React.PropTypes.number,
	    hideable: React.PropTypes.bool,
	    visible: React.PropTypes.bool,
	    zDepth: React.PropTypes.number,
	    menuItemStyle: React.PropTypes.object,
	    menuItemStyleSubheader: React.PropTypes.object,
	    menuItemStyleLink: React.PropTypes.object,
	    menuItemClassName: React.PropTypes.string,
	    menuItemClassNameSubheader: React.PropTypes.string,
	    menuItemClassNameLink: React.PropTypes.string
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
	      nestedMenuShown: false,
	      activeIndex: 0
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      autoWidth: true,
	      hideable: false,
	      visible: true,
	      zDepth: 1,
	      onRequestClose: function onRequestClose() {}
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    var el = ReactDOM.findDOMNode(this);

	    //Set the menu width
	    this._setKeyWidth(el);

	    //Show or Hide the menu according to visibility
	    this._renderVisibility();
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    if (this.props.visible !== prevProps.visible || this.props.menuItems.length !== prevProps.menuItems.length) {
	      this._renderVisibility();
	    }
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    //Set the menu width
	    this._setKeyWidth(ReactDOM.findDOMNode(this));
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.menu;
	  },

	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },

	  getStyles: function getStyles() {
	    var styles = {
	      root: {
	        backgroundColor: this.getTheme().containerBackgroundColor,
	        paddingTop: this.getSpacing().desktopGutterMini,
	        paddingBottom: this.getSpacing().desktopGutterMini,
	        transition: Transitions.easeOut(null, 'height'),
	        outline: 'none !important'
	      },
	      subheader: {
	        paddingLeft: this.state.muiTheme.menuSubheader.padding,
	        paddingRight: this.state.muiTheme.menuSubheader.padding
	      },
	      hideable: {
	        overflow: 'hidden',
	        position: 'absolute',
	        top: 0,
	        zIndex: 1
	      },
	      item: {
	        height: 34
	      }
	    };

	    return styles;
	  },

	  render: function render() {
	    var styles = this.getStyles();
	    return React.createElement(
	      Paper,
	      {
	        ref: 'paperContainer',
	        tabIndex: '0',
	        onKeyDown: this._onKeyDown,
	        zDepth: this.props.zDepth,
	        style: this.mergeStyles(styles.root, this.props.hideable && styles.hideable, this.props.style) },
	      this._getChildren()
	    );
	  },

	  _getChildren: function _getChildren() {
	    var menuItem = undefined,
	        itemComponent = undefined,
	        isDisabled = undefined;

	    var styles = this.getStyles();

	    this._children = [];
	    //This array is used to keep track of all nested menu refs
	    this._nestedChildren = [];

	    for (var i = 0; i < this.props.menuItems.length; i++) {
	      menuItem = this.props.menuItems[i];
	      isDisabled = menuItem.disabled === undefined ? false : menuItem.disabled;

	      var _menuItem = menuItem;
	      var icon = _menuItem.icon;
	      var data = _menuItem.data;
	      var attribute = _menuItem.attribute;
	      var number = _menuItem.number;
	      var toggle = _menuItem.toggle;
	      var onTouchTap = _menuItem.onTouchTap;

	      var other = _objectWithoutProperties(_menuItem, ['icon', 'data', 'attribute', 'number', 'toggle', 'onTouchTap']);

	      switch (menuItem.type) {

	        case MenuItem.Types.LINK:
	          itemComponent = React.createElement(LinkMenuItem, {
	            key: i,
	            index: i,
	            active: this.state.activeIndex === i,
	            text: menuItem.text,
	            disabled: isDisabled,
	            className: this.props.menuItemClassNameLink,
	            style: this.props.menuItemStyleLink,
	            payload: menuItem.payload,
	            target: menuItem.target });
	          break;

	        case MenuItem.Types.SUBHEADER:
	          itemComponent = React.createElement(SubheaderMenuItem, {
	            key: i,
	            index: i,
	            className: this.props.menuItemClassNameSubheader,
	            style: this.mergeStyles(styles.subheader, this.props.menuItemStyleSubheader),
	            firstChild: i === 0,
	            text: menuItem.text });
	          break;

	        case MenuItem.Types.NESTED:
	          var _props2 = this.props,
	              ref = _props2.ref,
	              key = _props2.key,
	              index = _props2.index,
	              zDepth = _props2.zDepth,
	              other = _objectWithoutProperties(_props2, ['ref', 'key', 'index', 'zDepth']);

	          itemComponent = React.createElement(NestedMenuItem, _extends({}, other, {
	            ref: i,
	            key: i,
	            index: i,
	            nested: true,
	            active: this.state.activeIndex === i,
	            text: menuItem.text,
	            disabled: isDisabled,
	            menuItems: menuItem.items,
	            menuItemStyle: this.props.menuItemStyle,
	            zDepth: this.props.zDepth,
	            onMouseEnter: this._onItemActivated,
	            onMouseLeave: this._onItemDeactivated,
	            onItemTap: this._onNestedItemTap }));
	          this._nestedChildren.push(i);
	          break;

	        default:
	          itemComponent = React.createElement(
	            MenuItem,
	            _extends({}, other, {
	              selected: this.props.selectedIndex === i,
	              key: i,
	              index: i,
	              active: this.state.activeIndex === i,
	              icon: menuItem.icon,
	              data: menuItem.data,
	              className: this.props.menuItemClassName,
	              style: this.props.menuItemStyle,
	              attribute: menuItem.attribute,
	              number: menuItem.number,
	              toggle: menuItem.toggle,
	              onToggle: this.props.onToggle,
	              disabled: isDisabled,
	              onTouchTap: this._onItemTap,
	              onMouseEnter: this._onItemActivated,
	              onMouseLeave: this._onItemDeactivated
	            }),
	            menuItem.text
	          );
	      }
	      this._children.push(itemComponent);
	    }

	    return this._children;
	  },

	  _setKeyWidth: function _setKeyWidth(el) {
	    //Update the menu width
	    var menuWidth = '100%';

	    if (this.props.autoWidth) {
	      el.style.width = 'auto';
	      menuWidth = KeyLine.getIncrementalDim(el.offsetWidth) + 'px';
	    }

	    el.style.width = menuWidth;
	  },

	  _renderVisibility: function _renderVisibility() {
	    if (this.props.hideable) {
	      if (this.props.visible) this._expandHideableMenu();else this._collapseHideableMenu();
	    }
	  },

	  _expandHideableMenu: function _expandHideableMenu() {
	    var _this = this;

	    var el = ReactDOM.findDOMNode(this);
	    var container = ReactDOM.findDOMNode(this.refs.paperContainer);
	    var padding = this.getSpacing().desktopGutterMini;
	    var height = this._getHiddenMenuHeight(el, padding);

	    //Add transition
	    if (!el.style.transition) {
	      el.style.transition = Transitions.easeOut();
	    }

	    this._nextAnimationFrame(function () {
	      container.style.overflow = 'hidden';

	      // Yeild to the DOM, then apply height and padding. This makes the transition smoother.
	      el.style.paddingTop = padding + 'px';
	      el.style.paddingBottom = padding + 'px';
	      el.style.height = height + 'px';
	      el.style.opacity = 1;

	      //Set the overflow to visible after the animation is done so
	      //that other nested menus can be shown
	      CssEvent.onTransitionEnd(el, function () {
	        //Make sure the menu is open before setting the overflow.
	        //This is to accout for fast clicks
	        if (_this.props.visible) container.style.overflow = 'visible';
	        el.style.transition = null;
	        el.focus();
	      });
	    });
	  },

	  _getHiddenMenuHeight: function _getHiddenMenuHeight(el, padding) {
	    //Add padding to the offset height, because it is not yet set in the style.
	    var height = padding * 2;

	    //Hide the element and allow the browser to automatically resize it.
	    el.style.visibility = 'hidden';
	    el.style.height = 'auto';

	    //Determine the height of the menu.
	    height += el.offsetHeight;

	    //Unhide the menu with the height set back to zero.
	    el.style.height = '0px';
	    el.style.visibility = 'visible';

	    return height;
	  },

	  _collapseHideableMenu: function _collapseHideableMenu() {
	    var el = ReactDOM.findDOMNode(this);
	    var container = ReactDOM.findDOMNode(this.refs.paperContainer);
	    var originalOpacity = el.style.opacity;

	    //Add transition
	    if (!el.style.transition && originalOpacity !== '') {
	      el.style.transition = Transitions.easeOut();
	    }

	    this._nextAnimationFrame(function () {
	      //Set the overflow to hidden so that animation works properly
	      container.style.overflow = 'hidden';

	      //Close the menu
	      el.style.opacity = 0;
	      el.style.height = '0px';
	      el.style.paddingTop = '0px';
	      el.style.paddingBottom = '0px';

	      var end = function end() {
	        el.style.transition = null;
	      };

	      if (originalOpacity === '') end();else CssEvent.onTransitionEnd(el, end);
	    });
	  },

	  _nextAnimationFrame: function _nextAnimationFrame(func) {
	    if (window.requestAnimationFrame) {
	      return window.requestAnimationFrame(func);
	    }
	    return setTimeout(func, 16);
	  },

	  _onNestedItemTap: function _onNestedItemTap(e, index, menuItem) {
	    if (this.props.onItemTap) this.props.onItemTap(e, index, menuItem);
	  },

	  _onItemTap: function _onItemTap(e, index) {
	    if (this.props.onItemTap) this.props.onItemTap(e, index, this.props.menuItems[index]);
	  },

	  _onItemToggle: function _onItemToggle(e, index, toggled) {
	    if (this.props.onItemToggle) this.props.onItemToggle(e, index, this.props.menuItems[index], toggled);
	  },
	  _onItemActivated: function _onItemActivated(e, index) {
	    this.setState({ activeIndex: index });
	  },
	  _onItemDeactivated: function _onItemDeactivated(e, index) {
	    if (this.state.activeKey === index) this.setState({ activeIndex: 0 });
	  },

	  _onKeyDown: function _onKeyDown(e) {
	    if (!(this.state.open || this.props.visible)) return;

	    var nested = this._children[this.state.activeIndex];
	    if (nested && nested.props.nested && this.refs[this.state.activeIndex].isOpen()) return;

	    switch (e.which) {
	      case KeyCode.UP:
	        this._activatePreviousItem();
	        break;
	      case KeyCode.DOWN:
	        this._activateNextItem();
	        break;
	      case KeyCode.RIGHT:
	        this._tryToggleNested(this.state.activeIndex);
	        break;
	      case KeyCode.LEFT:
	        this._close();
	        break;
	      case KeyCode.ESC:
	        this._close();
	        break;
	      case KeyCode.TAB:
	        this._close();
	        return; // so the tab key can propagate
	      case KeyCode.ENTER:
	      case KeyCode.SPACE:
	        e.stopPropagation(); // needs called before the close
	        this._triggerSelection(e);
	        break;
	      default:
	        return; //important
	    }
	    e.preventDefault();
	    e.stopPropagation();
	  },

	  _activatePreviousItem: function _activatePreviousItem() {
	    var active = this.state.activeIndex || 0;
	    active = Math.max(active - 1, 0);
	    this.setState({ activeIndex: active });
	  },

	  _activateNextItem: function _activateNextItem() {
	    var active = this.state.activeIndex || 0;
	    active = Math.min(active + 1, this._children.length - 1);
	    this.setState({ activeIndex: active });
	  },

	  _triggerSelection: function _triggerSelection(e) {
	    var index = this.state.activeIndex || 0;
	    this._onItemTap(e, index);
	  },

	  _close: function _close() {
	    this.props.onRequestClose();
	  },

	  _tryToggleNested: function _tryToggleNested(index) {
	    var item = this.refs[index];
	    if (item && item.toggleNestedMenu) item.toggleNestedMenu();
	  }

	});

	module.exports = Menu;


/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var Events = __webpack_require__(349);

	module.exports = {

	  _testSupportedProps: function _testSupportedProps(props) {
	    var i = undefined,
	        el = document.createElement('div');

	    for (i in props) {
	      if (props.hasOwnProperty(i) && el.style[i] !== undefined) {
	        return props[i];
	      }
	    }
	  },

	  //Returns the correct event name to use
	  transitionEndEventName: function transitionEndEventName() {
	    return this._testSupportedProps({
	      'transition': 'transitionend',
	      'OTransition': 'otransitionend',
	      'MozTransition': 'transitionend',
	      'WebkitTransition': 'webkitTransitionEnd'
	    });
	  },

	  animationEndEventName: function animationEndEventName() {
	    return this._testSupportedProps({
	      'animation': 'animationend',
	      '-o-animation': 'oAnimationEnd',
	      '-moz-animation': 'animationend',
	      '-webkit-animation': 'webkitAnimationEnd'
	    });
	  },

	  onTransitionEnd: function onTransitionEnd(el, callback) {
	    var transitionEnd = this.transitionEndEventName();

	    Events.once(el, transitionEnd, function () {
	      return callback();
	    });
	  },

	  onAnimationEnd: function onAnimationEnd(el, callback) {
	    var animationEnd = this.animationEndEventName();

	    Events.once(el, animationEnd, function () {
	      return callback();
	    });
	  }
	};


/***/ },
/* 387 */
/***/ function(module, exports) {

	"jonny22234";

	module.exports = {

	  Desktop: {
	    GUTTER: 24,
	    GUTTER_LESS: 16,
	    INCREMENT: 64,
	    MENU_ITEM_HEIGHT: 32
	  },

	  getIncrementalDim: function getIncrementalDim(dim) {
	    return Math.ceil(dim / this.Desktop.INCREMENT) * this.Desktop.INCREMENT;
	  }
	};


/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var Events = __webpack_require__(349);
	var Dom = __webpack_require__(362);

	module.exports = {

	  //When the component mounts, listen to click events and check if we need to
	  //Call the componentClickAway function.
	  componentDidMount: function componentDidMount() {
	    if (!this.manuallyBindClickAway) this._bindClickAway();
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._unbindClickAway();
	  },

	  _checkClickAway: function _checkClickAway(event) {
	    var el = ReactDOM.findDOMNode(this);

	    // Check if the target is inside the current component
	    if (event.target !== el && !Dom.isDescendant(el, event.target) && document.documentElement.contains(event.target)) {
	      if (this.componentClickAway) this.componentClickAway(event);
	    }
	  },

	  _bindClickAway: function _bindClickAway() {
	    // On touch-enabled devices, both events fire, and the handler is called twice,
	    // but it's fine since all operations for which the mixin is used
	    // are idempotent.
	    Events.on(document, 'mouseup', this._checkClickAway);
	    Events.on(document, 'touchend', this._checkClickAway);
	  },

	  _unbindClickAway: function _unbindClickAway() {
	    Events.off(document, 'mouseup', this._checkClickAway);
	    Events.off(document, 'touchend', this._checkClickAway);
	  }

	};


/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var FontIcon = __webpack_require__(377);
	var Toggle = __webpack_require__(390);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var Types = {
	  LINK: 'LINK',
	  SUBHEADER: 'SUBHEADER',
	  NESTED: 'NESTED'
	};

	var MenuItem = React.createClass({
	  displayName: 'MenuItem',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    index: React.PropTypes.number.isRequired,
	    className: React.PropTypes.string,
	    iconClassName: React.PropTypes.string,
	    iconRightClassName: React.PropTypes.string,
	    iconStyle: React.PropTypes.object,
	    iconRightStyle: React.PropTypes.object,
	    attribute: React.PropTypes.string,
	    number: React.PropTypes.string,
	    data: React.PropTypes.string,
	    toggle: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    onTouchTap: React.PropTypes.func,
	    onToggle: React.PropTypes.func,
	    selected: React.PropTypes.bool,
	    active: React.PropTypes.bool
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  statics: {
	    Types: Types
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      toggle: false,
	      disabled: false,
	      active: false
	    };
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.menuItem;
	  },

	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },

	  getStyles: function getStyles() {
	    var _data;

	    var isRtl = this.context.muiTheme.isRtl;

	    var right = isRtl ? 'left' : 'right';
	    var left = isRtl ? 'right' : 'left';

	    var marginRight = isRtl ? 'marginLeft' : 'marginRight';
	    var paddingLeft = isRtl ? 'paddingRight' : 'paddingLeft';

	    var styles = {
	      root: {
	        userSelect: 'none',
	        cursor: 'pointer',
	        lineHeight: this.getTheme().height + 'px',
	        paddingLeft: this.getTheme().padding,
	        paddingRight: this.getTheme().padding,
	        color: this.state.muiTheme.rawTheme.palette.textColor
	      },
	      number: {
	        float: right,
	        width: 24,
	        textAlign: 'center'
	      },
	      attribute: {
	        float: right
	      },
	      iconRight: {
	        lineHeight: this.getTheme().height + 'px',
	        float: right
	      },
	      icon: _defineProperty({
	        float: left,
	        lineHeight: this.getTheme().height + 'px'
	      }, marginRight, this.getSpacing().desktopGutter),
	      data: (_data = {
	        display: 'block'
	      }, _defineProperty(_data, paddingLeft, this.getSpacing().desktopGutter * 2), _defineProperty(_data, 'lineHeight', this.getTheme().dataHeight + 'px'), _defineProperty(_data, 'height', this.getTheme().dataHeight + 'px'), _defineProperty(_data, 'verticalAlign', 'top'), _defineProperty(_data, 'top', -12), _defineProperty(_data, 'position', 'relative'), _defineProperty(_data, 'fontWeight', 300), _defineProperty(_data, 'color', this.state.muiTheme.rawTheme.palette.textColor), _data),
	      toggle: {
	        marginTop: (this.getTheme().height - this.state.muiTheme.radioButton.size) / 2,
	        float: right,
	        width: 42
	      },
	      rootWhenHovered: {
	        backgroundColor: this.getTheme().hoverColor
	      },
	      rootWhenSelected: {
	        color: this.getTheme().selectedTextColor
	      },
	      rootWhenDisabled: {
	        cursor: 'default',
	        color: this.state.muiTheme.rawTheme.palette.disabledColor
	      }
	    };

	    return styles;
	  },

	  render: function render() {
	    var icon = undefined;
	    var data = undefined;
	    var iconRight = undefined;
	    var attribute = undefined;
	    var number = undefined;
	    var toggleElement = undefined;
	    var styles = this.getStyles();

	    if (this.props.iconClassName) icon = React.createElement(FontIcon, { style: this.mergeStyles(styles.icon, this.props.iconStyle, this.props.selected && styles.rootWhenSelected), className: this.props.iconClassName });
	    if (this.props.iconRightClassName) iconRight = React.createElement(FontIcon, { style: this.mergeStyles(styles.iconRight, this.props.iconRightStyle), className: this.props.iconRightClassName });
	    if (this.props.data) data = React.createElement(
	      'span',
	      { style: this.prepareStyles(styles.data) },
	      this.props.data
	    );
	    if (this.props.number !== undefined) number = React.createElement(
	      'span',
	      { style: this.prepareStyles(styles.number) },
	      this.props.number
	    );
	    if (this.props.attribute !== undefined) attribute = React.createElement(
	      'span',
	      { style: this.prepareStyles(styles.style) },
	      this.props.attribute
	    );
	    if (this.props.icon) icon = this.props.icon;

	    if (this.props.toggle) {
	      var _props = this.props;
	      var toggle = _props.toggle;
	      var onTouchTap = _props.onTouchTap;
	      var onToggle = _props.onToggle;
	      var onMouseEnter = _props.onMouseEnter;
	      var onMouseLeave = _props.onMouseLeave;
	      var children = _props.children;
	      var label = _props.label;
	      var style = _props.style;

	      var other = _objectWithoutProperties(_props, ['toggle', 'onTouchTap', 'onToggle', 'onMouseEnter', 'onMouseLeave', 'children', 'label', 'style']);

	      toggleElement = React.createElement(Toggle, _extends({}, other, { onToggle: this._handleToggle, style: styles.toggle }));
	    }

	    return React.createElement(
	      'div',
	      {
	        key: this.props.index,
	        className: this.props.className,
	        onTouchTap: this._handleTouchTap,
	        onMouseEnter: this._handleMouseEnter,
	        onMouseLeave: this._handleMouseLeave,
	        style: this.prepareStyles(styles.root, this.props.selected && styles.rootWhenSelected, this.props.active && !this.props.disabled && styles.rootWhenHovered, this.props.style, this.props.disabled && styles.rootWhenDisabled) },
	      icon,
	      this.props.children,
	      number,
	      attribute,
	      data,
	      toggleElement,
	      iconRight
	    );
	  },

	  _handleTouchTap: function _handleTouchTap(e) {
	    if (!this.props.disabled && this.props.onTouchTap) this.props.onTouchTap(e, this.props.index);
	  },

	  _handleToggle: function _handleToggle(e, toggled) {
	    if (!this.props.disabled && this.props.onToggle) this.props.onToggle(e, this.props.index, toggled);
	  },

	  _handleMouseEnter: function _handleMouseEnter(e) {
	    if (!this.props.disabled && this.props.onMouseEnter) this.props.onMouseEnter(e, this.props.index);
	  },

	  _handleMouseLeave: function _handleMouseLeave(e) {
	    if (!this.props.disabled && this.props.onMouseLeave) this.props.onMouseLeave(e, this.props.index);
	  }
	});

	module.exports = MenuItem;


/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var Paper = __webpack_require__(364);
	var EnhancedSwitch = __webpack_require__(391);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var Toggle = React.createClass({
	  displayName: 'Toggle',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    elementStyle: React.PropTypes.object,
	    labelStyle: React.PropTypes.object,
	    onToggle: React.PropTypes.func,
	    toggled: React.PropTypes.bool,
	    defaultToggled: React.PropTypes.bool
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      switched: this.props.toggled || this.props.defaultToggled || this.props.valueLink && this.props.valueLink.value || false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.toggle;
	  },

	  getStyles: function getStyles() {
	    var toggleSize = 20;
	    var toggleTrackWidth = 36;
	    var styles = {
	      icon: {
	        width: 36,
	        padding: '4px 0px 6px 2px'
	      },
	      toggleElement: {
	        width: toggleTrackWidth
	      },
	      track: {
	        transition: Transitions.easeOut(),
	        width: '100%',
	        height: 14,
	        borderRadius: 30,
	        backgroundColor: this.getTheme().trackOffColor
	      },
	      thumb: {
	        transition: Transitions.easeOut(),
	        position: 'absolute',
	        top: 1,
	        left: 0,
	        width: toggleSize,
	        height: toggleSize,
	        lineHeight: '24px',
	        borderRadius: '50%',
	        backgroundColor: this.getTheme().thumbOffColor
	      },
	      trackWhenSwitched: {
	        backgroundColor: this.getTheme().trackOnColor
	      },
	      thumbWhenSwitched: {
	        backgroundColor: this.getTheme().thumbOnColor,
	        left: '100%'
	      },
	      trackWhenDisabled: {
	        backgroundColor: this.getTheme().trackDisabledColor
	      },
	      thumbWhenDisabled: {
	        backgroundColor: this.getTheme().thumbDisabledColor
	      },
	      label: {
	        color: this.props.disabled ? this.getTheme().labelDisabledColor : this.getTheme().labelColor,
	        width: 'calc(100% - ' + (toggleTrackWidth + 10) + 'px)'
	      }
	    };

	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var onToggle = _props.onToggle;

	    var other = _objectWithoutProperties(_props, ['onToggle']);

	    var styles = this.getStyles();

	    var trackStyles = this.mergeStyles(styles.track, this.props.trackStyle, this.state.switched && styles.trackWhenSwitched, this.props.disabled && styles.trackWhenDisabled);

	    var thumbStyles = this.mergeStyles(styles.thumb, this.props.thumbStyle, this.state.switched && styles.thumbWhenSwitched, this.props.disabled && styles.thumbWhenDisabled);

	    if (this.state.switched) {
	      thumbStyles.marginLeft = '-' + thumbStyles.width;
	    }

	    var toggleElementStyles = this.mergeStyles(styles.toggleElement, this.props.elementStyle);

	    var toggleElement = React.createElement(
	      'div',
	      { style: this.prepareStyles(toggleElementStyles) },
	      React.createElement('div', { style: this.prepareStyles(trackStyles) }),
	      React.createElement(Paper, { style: thumbStyles, circle: true, zDepth: 1 })
	    );

	    var customRippleStyle = this.mergeStyles({
	      top: -10,
	      left: -10
	    }, this.props.rippleStyle);

	    var rippleColor = this.state.switched ? this.getTheme().thumbOnColor : this.state.muiTheme.textColor;

	    var iconStyle = this.mergeStyles(styles.icon, this.props.iconStyle);

	    var labelStyle = this.mergeStyles(styles.label, this.props.labelStyle);

	    var enhancedSwitchProps = {
	      ref: "enhancedSwitch",
	      inputType: "checkbox",
	      switchElement: toggleElement,
	      rippleStyle: customRippleStyle,
	      rippleColor: rippleColor,
	      iconStyle: iconStyle,
	      trackStyle: trackStyles,
	      thumbStyle: thumbStyles,
	      labelStyle: labelStyle,
	      switched: this.state.switched,
	      onSwitch: this._handleToggle,
	      onParentShouldUpdate: this._handleStateChange,
	      defaultSwitched: this.props.defaultToggled,
	      labelPosition: this.props.labelPosition ? this.props.labelPosition : "left"
	    };

	    if (this.props.hasOwnProperty('toggled')) enhancedSwitchProps.checked = this.props.toggled;

	    return React.createElement(EnhancedSwitch, _extends({}, other, enhancedSwitchProps));
	  },

	  isToggled: function isToggled() {
	    return this.refs.enhancedSwitch.isSwitched();
	  },

	  setToggled: function setToggled(newToggledValue) {
	    this.refs.enhancedSwitch.setSwitched(newToggledValue);
	  },

	  _handleToggle: function _handleToggle(e, isInputChecked) {
	    if (this.props.onToggle) this.props.onToggle(e, isInputChecked);
	  },

	  _handleStateChange: function _handleStateChange(newSwitched) {
	    this.setState({ switched: newSwitched });
	  }

	});

	module.exports = Toggle;


/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var KeyCode = __webpack_require__(350);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var UniqueId = __webpack_require__(392);
	var WindowListenable = __webpack_require__(393);
	var ClearFix = __webpack_require__(394);
	var FocusRipple = __webpack_require__(351);
	var TouchRipple = __webpack_require__(361);
	var Paper = __webpack_require__(364);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var EnhancedSwitch = React.createClass({
	  displayName: 'EnhancedSwitch',

	  mixins: [WindowListenable, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    id: React.PropTypes.string,
	    inputType: React.PropTypes.string.isRequired,
	    switchElement: React.PropTypes.element.isRequired,
	    onParentShouldUpdate: React.PropTypes.func.isRequired,
	    switched: React.PropTypes.bool.isRequired,
	    rippleStyle: React.PropTypes.object,
	    rippleColor: React.PropTypes.string,
	    iconStyle: React.PropTypes.object,
	    thumbStyle: React.PropTypes.object,
	    trackStyle: React.PropTypes.object,
	    labelStyle: React.PropTypes.object,
	    name: React.PropTypes.string,
	    value: React.PropTypes.string,
	    label: React.PropTypes.string,
	    onSwitch: React.PropTypes.func,
	    required: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    defaultSwitched: React.PropTypes.bool,
	    labelPosition: React.PropTypes.oneOf(['left', 'right']),
	    disableFocusRipple: React.PropTypes.bool,
	    disableTouchRipple: React.PropTypes.bool
	  },

	  windowListeners: {
	    keydown: '_handleWindowKeydown',
	    keyup: '_handleWindowKeyup'
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isKeyboardFocused: false,
	      parentWidth: 100,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  getEvenWidth: function getEvenWidth() {
	    return parseInt(window.getComputedStyle(ReactDOM.findDOMNode(this.refs.root)).getPropertyValue('width'), 10);
	  },

	  componentDidMount: function componentDidMount() {
	    var inputNode = ReactDOM.findDOMNode(this.refs.checkbox);
	    if (!this.props.switched || inputNode.checked !== this.props.switched) {
	      this.props.onParentShouldUpdate(inputNode.checked);
	    }

	    window.addEventListener("resize", this._handleResize);

	    this._handleResize();
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    window.removeEventListener("resize", this._handleResize);
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var hasCheckedLinkProp = nextProps.hasOwnProperty('checkedLink');
	    var hasCheckedProp = nextProps.hasOwnProperty('checked');
	    var hasToggledProp = nextProps.hasOwnProperty('toggled');
	    var hasNewDefaultProp = nextProps.hasOwnProperty('defaultSwitched') && nextProps.defaultSwitched !== this.props.defaultSwitched;
	    var newState = {};
	    newState.muiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    if (hasCheckedProp) {
	      newState.switched = nextProps.checked;
	    } else if (hasToggledProp) {
	      newState.switched = nextProps.toggled;
	    } else if (hasCheckedLinkProp) {
	      newState.switched = nextProps.checkedLink.value;
	    } else if (hasNewDefaultProp) {
	      newState.switched = nextProps.defaultSwitched;
	    }

	    if (newState.switched !== undefined && newState.switched !== this.props.switched) {
	      this.props.onParentShouldUpdate(newState.switched);
	    }

	    this.setState(newState);
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.rawTheme.palette;
	  },

	  getStyles: function getStyles() {
	    var spacing = this.state.muiTheme.rawTheme.spacing;
	    var switchWidth = 60 - spacing.desktopGutterLess;
	    var labelWidth = 'calc(100% - 60px)';
	    var styles = {
	      root: {
	        position: 'relative',
	        cursor: this.props.disabled ? 'default' : 'pointer',
	        overflow: 'visible',
	        display: 'table',
	        height: 'auto',
	        width: '100%'
	      },
	      input: {
	        position: 'absolute',
	        cursor: this.props.disabled ? 'default' : 'pointer',
	        pointerEvents: 'all',
	        opacity: 0,
	        width: '100%',
	        height: '100%',
	        zIndex: 2,
	        left: 0,
	        boxSizing: 'border-box',
	        padding: 0,
	        margin: 0
	      },
	      controls: {
	        width: '100%',
	        height: '100%'
	      },
	      label: {
	        float: 'left',
	        position: 'relative',
	        display: 'block',
	        width: labelWidth,
	        lineHeight: '24px',
	        color: this.getTheme().textColor
	      },
	      wrap: {
	        transition: Transitions.easeOut(),
	        float: 'left',
	        position: 'relative',
	        display: 'block',
	        width: switchWidth,
	        marginRight: this.props.labelPosition === 'right' ? spacing.desktopGutterLess : 0,
	        marginLeft: this.props.labelPosition === 'left' ? spacing.desktopGutterLess : 0
	      },
	      ripple: {
	        height: '200%',
	        width: '200%',
	        top: -12,
	        left: -12
	      }
	    };

	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var type = _props.type;
	    var name = _props.name;
	    var value = _props.value;
	    var label = _props.label;
	    var onSwitch = _props.onSwitch;
	    var defaultSwitched = _props.defaultSwitched;
	    var onBlur = _props.onBlur;
	    var onFocus = _props.onFocus;
	    var onMouseUp = _props.onMouseUp;
	    var onMouseDown = _props.onMouseDown;
	    var onMouseLeave = _props.onMouseLeave;
	    var onTouchStart = _props.onTouchStart;
	    var onTouchEnd = _props.onTouchEnd;
	    var disableTouchRipple = _props.disableTouchRipple;
	    var disableFocusRipple = _props.disableFocusRipple;
	    var className = _props.className;

	    var other = _objectWithoutProperties(_props, ['type', 'name', 'value', 'label', 'onSwitch', 'defaultSwitched', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'disableTouchRipple', 'disableFocusRipple', 'className']);

	    var styles = this.getStyles();
	    var wrapStyles = this.prepareStyles(styles.wrap, this.props.iconStyle);
	    var rippleStyle = this.prepareStyles(styles.ripple, this.props.rippleStyle);
	    var rippleColor = this.props.hasOwnProperty('rippleColor') ? this.props.rippleColor : this.getTheme().primary1Color;

	    if (this.props.thumbStyle) {
	      wrapStyles.marginLeft /= 2;
	      wrapStyles.marginRight /= 2;
	    }

	    var inputId = this.props.id || UniqueId.generate();

	    var labelStyle = this.prepareStyles(styles.label, this.props.labelStyle);
	    var labelElement = this.props.label ? React.createElement(
	      'label',
	      { style: labelStyle, htmlFor: inputId },
	      this.props.label
	    ) : null;

	    var inputProps = {
	      ref: "checkbox",
	      type: this.props.inputType,
	      style: this.prepareStyles(styles.input),
	      name: this.props.name,
	      value: this.props.value,
	      defaultChecked: this.props.defaultSwitched,
	      onBlur: this._handleBlur,
	      onFocus: this._handleFocus
	    };

	    var hideTouchRipple = this.props.disabled || disableTouchRipple;

	    if (!hideTouchRipple) {
	      inputProps.onMouseUp = this._handleMouseUp;
	      inputProps.onMouseDown = this._handleMouseDown;
	      inputProps.onMouseLeave = this._handleMouseLeave;
	      inputProps.onTouchStart = this._handleTouchStart;
	      inputProps.onTouchEnd = this._handleTouchEnd;
	    }

	    if (!this.props.hasOwnProperty('checkedLink')) {
	      inputProps.onChange = this._handleChange;
	    }

	    var inputElement = React.createElement('input', _extends({}, other, inputProps));

	    var touchRipple = React.createElement(TouchRipple, {
	      ref: 'touchRipple',
	      key: 'touchRipple',
	      style: rippleStyle,
	      color: rippleColor,
	      centerRipple: true });

	    var focusRipple = React.createElement(FocusRipple, {
	      key: 'focusRipple',
	      innerStyle: rippleStyle,
	      color: rippleColor,
	      show: this.state.isKeyboardFocused });

	    var ripples = [hideTouchRipple ? null : touchRipple, this.props.disabled || disableFocusRipple ? null : focusRipple];

	    // If toggle component (indicated by whether the style includes thumb) manually lay out
	    // elements in order to nest ripple elements
	    var switchElement = !this.props.thumbStyle ? React.createElement(
	      'div',
	      { style: wrapStyles },
	      this.props.switchElement,
	      ripples
	    ) : React.createElement(
	      'div',
	      { style: wrapStyles },
	      React.createElement('div', { style: this.prepareStyles(this.props.trackStyle) }),
	      React.createElement(
	        Paper,
	        { style: this.props.thumbStyle, zDepth: 1, circle: true },
	        ' ',
	        ripples,
	        ' '
	      )
	    );

	    var labelPositionExist = this.props.labelPosition;

	    // Position is left if not defined or invalid.
	    var elementsInOrder = labelPositionExist && this.props.labelPosition.toUpperCase() === "RIGHT" ? React.createElement(
	      ClearFix,
	      { style: styles.controls },
	      switchElement,
	      labelElement
	    ) : React.createElement(
	      ClearFix,
	      { style: styles.controls },
	      labelElement,
	      switchElement
	    );

	    return React.createElement(
	      'div',
	      { ref: 'root', className: className, style: this.prepareStyles(styles.root, this.props.style) },
	      inputElement,
	      elementsInOrder
	    );
	  },

	  isSwitched: function isSwitched() {
	    return ReactDOM.findDOMNode(this.refs.checkbox).checked;
	  },

	  // no callback here because there is no event
	  setSwitched: function setSwitched(newSwitchedValue) {
	    if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
	      this.props.onParentShouldUpdate(newSwitchedValue);
	      ReactDOM.findDOMNode(this.refs.checkbox).checked = newSwitchedValue;
	    } else if (process.env.NODE_ENV !== 'production') {
	      var message = 'Cannot call set method while checked is defined as a property.';
	      console.error(message);
	    }
	  },

	  getValue: function getValue() {
	    return ReactDOM.findDOMNode(this.refs.checkbox).value;
	  },

	  isKeyboardFocused: function isKeyboardFocused() {
	    return this.state.isKeyboardFocused;
	  },

	  _handleChange: function _handleChange(e) {
	    this._tabPressed = false;
	    this.setState({
	      isKeyboardFocused: false
	    });

	    var isInputChecked = ReactDOM.findDOMNode(this.refs.checkbox).checked;

	    if (!this.props.hasOwnProperty('checked')) {
	      this.props.onParentShouldUpdate(isInputChecked);
	    }
	    if (this.props.onSwitch) {
	      this.props.onSwitch(e, isInputChecked);
	    }
	  },

	  // Checkbox inputs only use SPACE to change their state. Using ENTER will
	  // update the ui but not the input.
	  _handleWindowKeydown: function _handleWindowKeydown(e) {
	    if (e.keyCode === KeyCode.TAB) {
	      this._tabPressed = true;
	    }
	    if (e.keyCode === KeyCode.SPACE && this.state.isKeyboardFocused) {
	      this._handleChange(e);
	    }
	  },

	  _handleWindowKeyup: function _handleWindowKeyup(e) {
	    if (e.keyCode === KeyCode.SPACE && this.state.isKeyboardFocused) {
	      this._handleChange(e);
	    }
	  },

	  /**
	   * Because both the ripples and the checkbox input cannot share pointer
	   * events, the checkbox input takes control of pointer events and calls
	   * ripple animations manually.
	   */
	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) {
	      this.refs.touchRipple.start(e);
	    }
	  },

	  _handleMouseUp: function _handleMouseUp() {
	    this.refs.touchRipple.end();
	  },

	  _handleMouseLeave: function _handleMouseLeave() {
	    this.refs.touchRipple.end();
	  },

	  _handleTouchStart: function _handleTouchStart(e) {
	    this.refs.touchRipple.start(e);
	  },

	  _handleTouchEnd: function _handleTouchEnd() {
	    this.refs.touchRipple.end();
	  },

	  _handleBlur: function _handleBlur(e) {
	    this.setState({
	      isKeyboardFocused: false
	    });

	    if (this.props.onBlur) {
	      this.props.onBlur(e);
	    }
	  },

	  _handleFocus: function _handleFocus(e) {
	    var _this = this;

	    //setTimeout is needed becuase the focus event fires first
	    //Wait so that we can capture if this was a keyboard focus
	    //or touch focus
	    setTimeout(function () {
	      if (_this._tabPressed) {
	        _this.setState({
	          isKeyboardFocused: true
	        });
	      }
	    }, 150);

	    if (this.props.onFocus) {
	      this.props.onFocus(e);
	    }
	  },

	  _handleResize: function _handleResize() {
	    this.setState({ parentWidth: this.getEvenWidth() });
	  }

	});

	module.exports = EnhancedSwitch;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 392 */
/***/ function(module, exports) {

	"jonny22234";

	var index = 0;

	module.exports = {
	  generate: function generate() {
	    return "mui-id-" + index++;
	  }
	};


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var Events = __webpack_require__(349);

	module.exports = {

	  componentDidMount: function componentDidMount() {
	    var listeners = this.windowListeners;

	    for (var eventName in listeners) {
	      var callbackName = listeners[eventName];
	      Events.on(window, eventName, this[callbackName]);
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    var listeners = this.windowListeners;

	    for (var eventName in listeners) {
	      var callbackName = listeners[eventName];
	      Events.off(window, eventName, this[callbackName]);
	    }
	  }

	};


/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var BeforeAfterWrapper = __webpack_require__(395);
	var StylePropable = __webpack_require__(330);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var ClearFix = React.createClass({
	  displayName: 'ClearFix',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  render: function render() {
	    var _props = this.props;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['style']);

	    var before = function before() {
	      return {
	        content: "' '",
	        display: 'table'
	      };
	    };

	    var after = before();
	    after.clear = 'both';

	    return React.createElement(
	      BeforeAfterWrapper,
	      _extends({}, other, {
	        beforeStyle: before(),
	        afterStyle: after,
	        style: style }),
	      this.props.children
	    );
	  }
	});

	module.exports = ClearFix;


/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var AutoPrefix = __webpack_require__(335);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	/**
	 *  BeforeAfterWrapper
	 *    An alternative for the ::before and ::after css pseudo-elements for
	 *    components whose styles are defined in javascript instead of css.
	 *
	 *  Usage: For the element that we want to apply before and after elements to,
	 *    wrap its children with BeforeAfterWrapper. For example:
	 *
	 *                                            <Paper>
	 *  <Paper>                                     <div> // See notice
	 *    <BeforeAfterWrapper>        renders         <div/> // before element
	 *      [children of paper]       ------>         [children of paper]
	 *    </BeforeAfterWrapper>                       <div/> // after element
	 *  </Paper>                                    </div>
	 *                                            </Paper>
	 *
	 *  Notice: Notice that this div bundles together our elements. If the element
	 *    that we want to apply before and after elements is a HTML tag (i.e. a
	 *    div, p, or button tag), we can avoid this extra nesting by passing using
	 *    the BeforeAfterWrapper in place of said tag like so:
	 *
	 *  <p>
	 *    <BeforeAfterWrapper>   do this instead   <BeforeAfterWrapper elementType='p'>
	 *      [children of p]          ------>         [children of p]
	 *    </BeforeAfterWrapper>                    </BeforeAfterWrapper>
	 *  </p>
	 *
	 *  BeforeAfterWrapper features spread functionality. This means that we can
	 *  pass HTML tag properties directly into the BeforeAfterWrapper tag.
	 *
	 *  When using BeforeAfterWrapper, ensure that the parent of the beforeElement
	 *  and afterElement have a defined style position.
	 */

	var BeforeAfterWrapper = React.createClass({
	  displayName: 'BeforeAfterWrapper',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    beforeStyle: React.PropTypes.object,
	    afterStyle: React.PropTypes.object,
	    beforeElementType: React.PropTypes.string,
	    afterElementType: React.PropTypes.string,
	    elementType: React.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      beforeElementType: 'div',
	      afterElementType: 'div',
	      elementType: 'div'
	    };
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  render: function render() {
	    var _props = this.props;
	    var beforeStyle = _props.beforeStyle;
	    var afterStyle = _props.afterStyle;
	    var beforeElementType = _props.beforeElementType;
	    var afterElementType = _props.afterElementType;
	    var elementType = _props.elementType;

	    var other = _objectWithoutProperties(_props, ['beforeStyle', 'afterStyle', 'beforeElementType', 'afterElementType', 'elementType']);

	    var beforeElement = undefined,
	        afterElement = undefined;

	    beforeStyle = AutoPrefix.all({ boxSizing: 'border-box' });
	    afterStyle = AutoPrefix.all({ boxSizing: 'border-box' });

	    if (this.props.beforeStyle) beforeElement = React.createElement(this.props.beforeElementType, {
	      style: this.prepareStyles(beforeStyle, this.props.beforeStyle),
	      key: "::before"
	    });
	    if (this.props.afterStyle) afterElement = React.createElement(this.props.afterElementType, {
	      style: this.prepareStyles(afterStyle, this.props.afterStyle),
	      key: "::after"
	    });

	    var children = [beforeElement, this.props.children, afterElement];

	    var props = other;
	    props.style = this.prepareStyles(this.props.style);

	    return React.createElement(this.props.elementType, props, children);
	  }

	});

	module.exports = BeforeAfterWrapper;


/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var LinkMenuItem = React.createClass({
	  displayName: 'LinkMenuItem',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    index: React.PropTypes.number.isRequired,
	    payload: React.PropTypes.string.isRequired,
	    text: React.PropTypes.string.isRequired,
	    target: React.PropTypes.string,
	    active: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    className: React.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      active: false,
	      disabled: false
	    };
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
	      hovered: false
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.menuItem;
	  },

	  getStyles: function getStyles() {
	    var style = {
	      root: {
	        userSelect: 'none',
	        cursor: 'pointer',
	        display: 'block',
	        lineHeight: this.getTheme().height + 'px',
	        paddingLeft: this.getTheme().padding,
	        paddingRight: this.getTheme().padding
	      },
	      rootWhenHovered: {
	        backgroundColor: this.getTheme().hoverColor
	      },
	      rootWhenSelected: {
	        color: this.getTheme().selectedTextColor
	      },
	      rootWhenDisabled: {
	        cursor: 'default',
	        color: this.state.muiTheme.rawTheme.palette.disabledColor
	      }
	    };

	    return style;
	  },

	  render: function render() {
	    var onClickHandler = this.props.disabled ? this._stopLink : undefined;
	    // Prevent context menu 'Open In New Tab/Window'
	    var linkAttribute = this.props.disabled ? 'data-href' : 'href';
	    var link = {};
	    link[linkAttribute] = this.props.payload;

	    var styles = this.getStyles();

	    var linkStyles = this.prepareStyles(styles.root, this.props.selected && styles.rootWhenSelected, this.props.selected && styles.rootWhenSelected, this.props.active && !this.props.disabled && styles.rootWhenHovered, this.props.style, this.props.disabled && styles.rootWhenDisabled);

	    return React.createElement(
	      'a',
	      _extends({
	        key: this.props.index,
	        target: this.props.target,
	        style: linkStyles }, link, {
	        className: this.props.className,
	        onClick: onClickHandler,
	        onMouseEnter: this._handleMouseEnter,
	        onMouseLeave: this._handleMouseLeave }),
	      this.props.text
	    );
	  },

	  _stopLink: function _stopLink(event) {
	    event.preventDefault();
	  },

	  _handleMouseEnter: function _handleMouseEnter(e) {
	    this.setState({ hovered: true });
	    if (!this.props.disabled && this.props.onMouseEnter) this.props.onMouseEnter(e);
	  },

	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    if (!this.props.disabled && this.props.onMouseLeave) this.props.onMouseLeave(e);
	  }
	});

	module.exports = LinkMenuItem;


/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var Typography = __webpack_require__(340);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var SubheaderMenuItem = React.createClass({
	  displayName: 'SubheaderMenuItem',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    index: React.PropTypes.number.isRequired,
	    text: React.PropTypes.string.isRequired,
	    firstChild: React.PropTypes.bool,
	    className: React.PropTypes.string
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.menuSubheader;
	  },

	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing;
	  },

	  getStyles: function getStyles() {
	    var gutterMini = this.getSpacing().desktopGutterMini;
	    var subheaderHeight = this.getSpacing().desktopSubheaderHeight;
	    var styles = {
	      root: {
	        boxSizing: 'border-box',
	        fontSize: '13px',
	        letterSpacing: 0,
	        fontWeight: Typography.fontWeightMedium,
	        margin: 0,
	        height: subheaderHeight + gutterMini,
	        lineHeight: subheaderHeight + 'px',
	        color: this.getTheme().textColor,
	        borderTop: 'solid 1px ' + this.getTheme().borderColor,
	        paddingTop: gutterMini,
	        marginTop: gutterMini
	      },
	      rootWhenFirstChild: {
	        height: subheaderHeight,
	        borderTop: 'none',
	        paddingTop: 0,
	        marginTop: 0
	      }
	    };

	    return styles;
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      {
	        key: this.props.index,
	        className: this.props.className,
	        style: this.prepareStyles(this.getStyles().root, this.props.firstChild && this.getStyles().rootWhenFirstChild, this.props.style) },
	      this.props.text
	    );
	  }

	});

	module.exports = SubheaderMenuItem;


/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);

	var RaisedButton = __webpack_require__(328);
	var FlatButton = __webpack_require__(366);
	var Slider = __webpack_require__(399);
	var FontIcon = __webpack_require__(377);

	var RecordController = __webpack_require__(400);

	var timerObj = null;

	var MediaPlayer = React.createClass({
		displayName: 'MediaPlayer',

		//Add the event listener for status changes and setup the initial state of the button
		getInitialState: function getInitialState() {
			if (this.props.file) {
				RecordController.initPlayer(this.props.file, this.setMediaLength);
			}
			return {
				value: 0,
				mediaLength: 0
			};
		},
		setMediaLength: function setMediaLength(duration) {
			this.setState({
				mediaLength: duration
			});
		},
		play: function play(event) {
			RecordController.playMedia(this.props.file, this.setPosition);
			if (this.state.value > 0 && this.state.value * 1000 < this.state.mediaLength) {
				RecordController.seekTo(this.state.value);
			}
			timerObj = window.setInterval((function () {
				//Keep asking the RecordController what the current time is
				RecordController.getCurrentPosition(this.updateTime);
			}).bind(this), 10);
		},
		pause: function pause(event) {
			RecordController.pauseMedia();
		},
		stop: function stop(event) {
			RecordController.stopMedia();
			window.clearInterval(timerObj);
		},
		seekTo: function seekTo(event, value) {
			RecordController.seekTo(value * 1000);
			this.setState({
				'value': value
			});
		},
		setPosition: function setPosition(status) {
			if (status === 2) {
				RecordController.seekTo(this.state.value * 1000);
			}
		},
		updateTime: function updateTime(position) {
			//If the position is unknown( < 0) then stop asking for time
			if (position < 0) {
				window.clearInterval(timerObj);
			} else {
				//If the position is know, set the value of the slider
				this.setState({
					value: position
				});
				//Update the parent timer if needed
				if (this.props.updateParentTime) this.props.updateParentTime(position);
			}
		},
		parseMediaLength: function parseMediaLength(timeInSeconds) {
			var hours = Math.floor(timeInSeconds / 3600);
			if (hours < 10) {
				hours = '0' + hours.toString();
			}

			var minutes = Math.floor(timeInSeconds % 3600 / 60);
			if (minutes < 10) {
				minutes = '0' + minutes.toString();
			}

			var seconds = (timeInSeconds % 3600 % 60).toFixed(1);
			if (seconds < 10) {
				seconds = '0' + seconds.toString();
			}

			return { hours: hours, minutes: minutes, seconds: seconds };
		},
		render: function render() {
			var mediaPlayerStyle = this.props.mediaPlayerStyle;
			var isDisabled = this.state.mediaLength > 0 ? false : true;
			var timeSlider = React.createElement(Slider, {
				key: 'timeSlider',
				disabled: isDisabled,
				name: 'mediaSlider',
				ref: 'mediaSlider', onChange: this.seekTo,
				max: this.state.mediaLength == 0 ? 1 : this.state.mediaLength,
				min: 0,
				value: this.state.value
			});
			var iconColor = 'rgba(0, 0, 0, 0.87)';
			if (isDisabled) {
				iconColor = 'rgba(0, 0, 0, 0.15)';
			}

			var mediaLength = this.parseMediaLength(this.state.mediaLength);
			return React.createElement(
				'div',
				{ style: mediaPlayerStyle },
				timeSlider,
				React.createElement(
					'div',
					{ style: { width: '100%', textAlign: 'center' } },
					mediaLength.hours,
					':',
					mediaLength.minutes,
					':',
					mediaLength.seconds
				),
				React.createElement(
					FlatButton,
					{
						disabled: isDisabled,
						onClick: this.play,
						primary: true },
					React.createElement(FontIcon, { className: 'ion-play', color: iconColor })
				),
				React.createElement(
					FlatButton,
					{
						disabled: isDisabled,
						onClick: this.pause },
					React.createElement(FontIcon, { className: 'ion-pause', color: iconColor })
				),
				React.createElement(
					FlatButton,
					{
						disabled: isDisabled,
						onClick: this.stop },
					React.createElement(FontIcon, { className: 'ion-stop', color: iconColor })
				),
				React.createElement('br', null)
			);
		}
	});

	module.exports = MediaPlayer;

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var FocusRipple = __webpack_require__(351);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	/**
	  * Verifies min/max range.
	  * @param   {Object} props         Properties of the React component.
	  * @param   {String} propName      Name of the property to validate.
	  * @param   {String} componentName Name of the component whose property is being validated.
	  * @returns {Object} Returns an Error if min >= max otherwise null.
	  */
	var minMaxPropType = function minMaxPropType(props, propName, componentName) {
	  var error = React.PropTypes.number(props, propName, componentName);
	  if (error !== null) return error;

	  if (props.min >= props.max) {
	    var errorMsg = propName === 'min' ? 'min should be less than max' : 'max should be greater than min';
	    return new Error(errorMsg);
	  }
	};

	/**
	  * Verifies value is within the min/max range.
	  * @param   {Object} props         Properties of the React component.
	  * @param   {String} propName      Name of the property to validate.
	  * @param   {String} componentName Name of the component whose property is being validated.
	  * @returns {Object} Returns an Error if the value is not within the range otherwise null.
	  */
	var valueInRangePropType = function valueInRangePropType(props, propName, componentName) {
	  var error = React.PropTypes.number(props, propName, componentName);
	  if (error !== null) return error;

	  var value = props[propName];
	  if (value < props.min || props.max < value) {
	    return new Error(propName + ' should be within the range specified by min and max');
	  }
	};

	var Slider = React.createClass({
	  displayName: 'Slider',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    name: React.PropTypes.string.isRequired,
	    defaultValue: valueInRangePropType,
	    description: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    error: React.PropTypes.string,
	    max: minMaxPropType,
	    min: minMaxPropType,
	    required: React.PropTypes.bool,
	    step: React.PropTypes.number,
	    onBlur: React.PropTypes.func,
	    onChange: React.PropTypes.func,
	    onDragStart: React.PropTypes.func,
	    onDragStop: React.PropTypes.func,
	    onFocus: React.PropTypes.func,
	    value: valueInRangePropType
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultValue: 0,
	      disabled: false,
	      max: 1,
	      min: 0,
	      required: true,
	      step: 0.01,
	      style: {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    var value = this.props.value;
	    if (value === undefined) {
	      value = this.props.defaultValue;
	    }
	    var percent = (value - this.props.min) / (this.props.max - this.props.min);
	    if (isNaN(percent)) percent = 0;

	    return {
	      active: false,
	      dragging: false,
	      focused: false,
	      hovered: false,
	      percent: percent,
	      value: value,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    if (nextProps.value !== undefined) {
	      this.setValue(nextProps.value);
	    }
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.slider;
	  },

	  getStyles: function getStyles() {
	    var fillGutter = this.getTheme().handleSize / 2;
	    var disabledGutter = this.getTheme().trackSize + this.getTheme().handleSizeDisabled / 2;
	    var calcDisabledSpacing = this.props.disabled ? ' - ' + disabledGutter + 'px' : '';
	    var styles = {
	      root: {
	        touchCallout: 'none',
	        userSelect: 'none',
	        cursor: 'default',
	        height: this.getTheme().handleSizeActive,
	        position: 'relative',
	        marginTop: 24,
	        marginBottom: 48
	      },
	      track: {
	        position: 'absolute',
	        top: (this.getTheme().handleSizeActive - this.getTheme().trackSize) / 2,
	        left: 0,
	        width: '100%',
	        height: this.getTheme().trackSize
	      },
	      filledAndRemaining: {
	        position: 'absolute',
	        top: 0,
	        height: '100%',
	        transition: Transitions.easeOut(null, 'margin')
	      },
	      handle: {
	        boxSizing: 'border-box',
	        position: 'absolute',
	        cursor: 'pointer',
	        pointerEvents: 'inherit',
	        top: 0,
	        left: '0%',
	        zIndex: 1,
	        margin: this.getTheme().trackSize / 2 + 'px 0 0 0',
	        width: this.getTheme().handleSize,
	        height: this.getTheme().handleSize,
	        backgroundColor: this.getTheme().selectionColor,
	        backgroundClip: 'padding-box',
	        border: '0px solid transparent',
	        borderRadius: '50%',
	        transform: 'translate(-50%, -50%)',
	        transition: Transitions.easeOut('450ms', 'background') + ',' + Transitions.easeOut('450ms', 'border-color') + ',' + Transitions.easeOut('450ms', 'width') + ',' + Transitions.easeOut('450ms', 'height'),
	        overflow: 'visible'
	      },
	      handleWhenDisabled: {
	        boxSizing: 'content-box',
	        cursor: 'not-allowed',
	        backgroundColor: this.getTheme().trackColor,
	        width: this.getTheme().handleSizeDisabled,
	        height: this.getTheme().handleSizeDisabled,
	        border: 'none'
	      },
	      handleWhenPercentZero: {
	        border: this.getTheme().trackSize + 'px solid ' + this.getTheme().handleColorZero,
	        backgroundColor: this.getTheme().handleFillColor,
	        boxShadow: 'none'
	      },
	      handleWhenPercentZeroAndDisabled: {
	        cursor: 'not-allowed',
	        width: this.getTheme().handleSizeDisabled,
	        height: this.getTheme().handleSizeDisabled
	      },
	      handleWhenPercentZeroAndFocused: {
	        border: this.getTheme().trackSize + 'px solid ' + this.getTheme().trackColorSelected
	      },
	      handleWhenActive: {
	        width: this.getTheme().handleSizeActive,
	        height: this.getTheme().handleSizeActive
	      },
	      ripple: {
	        height: this.getTheme().handleSize,
	        width: this.getTheme().handleSize,
	        overflow: 'visible'
	      },
	      rippleWhenPercentZero: {
	        top: -this.getTheme().trackSize,
	        left: -this.getTheme().trackSize
	      },
	      rippleInner: {
	        height: '300%',
	        width: '300%',
	        top: -this.getTheme().handleSize,
	        left: -this.getTheme().handleSize
	      }
	    };
	    styles.filled = this.mergeAndPrefix(styles.filledAndRemaining, {
	      left: 0,
	      backgroundColor: this.props.disabled ? this.getTheme().trackColor : this.getTheme().selectionColor,
	      marginRight: fillGutter,
	      width: 'calc(' + this.state.percent * 100 + '%' + calcDisabledSpacing + ')'
	    });
	    styles.remaining = this.mergeAndPrefix(styles.filledAndRemaining, {
	      right: 0,
	      backgroundColor: this.getTheme().trackColor,
	      marginLeft: fillGutter,
	      width: 'calc(' + (1 - this.state.percent) * 100 + '%' + calcDisabledSpacing + ')'
	    });

	    return styles;
	  },

	  render: function render() {
	    var others = _objectWithoutProperties(this.props, []);

	    var percent = this.state.percent;
	    if (percent > 1) percent = 1;else if (percent < 0) percent = 0;

	    var styles = this.getStyles();
	    var sliderStyles = this.prepareStyles(styles.root, this.props.style);
	    var handleStyles = percent === 0 ? this.prepareStyles(styles.handle, styles.handleWhenPercentZero, this.state.active && styles.handleWhenActive, this.state.focused && { outline: 'none' }, (this.state.hovered || this.state.focused) && !this.props.disabled && styles.handleWhenPercentZeroAndFocused, this.props.disabled && styles.handleWhenPercentZeroAndDisabled) : this.prepareStyles(styles.handle, this.state.active && styles.handleWhenActive, this.state.focused && { outline: 'none' }, this.props.disabled && styles.handleWhenDisabled, {
	      left: percent * 100 + '%'
	    });
	    var rippleStyle = this.mergeAndPrefix(styles.ripple, percent === 0 && styles.rippleWhenPercentZero);
	    var remainingStyles = styles.remaining;
	    if ((this.state.hovered || this.state.focused) && !this.props.disabled) {
	      remainingStyles.backgroundColor = this.getTheme().trackColorSelected;
	    }

	    var rippleShowCondition = (this.state.hovered || this.state.focused) && !this.state.active;
	    var rippleColor = this.state.percent === 0 ? this.getTheme().handleColorZero : this.getTheme().rippleColor;
	    var focusRipple = undefined;
	    if (!this.props.disabled && !this.props.disableFocusRipple) {
	      focusRipple = React.createElement(FocusRipple, {
	        ref: 'focusRipple',
	        key: 'focusRipple',
	        style: rippleStyle,
	        innerStyle: styles.rippleInner,
	        show: rippleShowCondition,
	        color: rippleColor });
	    }

	    var handleDragProps = {};

	    if (!this.props.disabled) {
	      handleDragProps = {
	        onTouchStart: this._onHandleTouchStart,
	        onMouseDown: this._onHandleMouseDown
	      };
	    }

	    return React.createElement(
	      'div',
	      _extends({}, others, { style: this.prepareStyles(this.props.style) }),
	      React.createElement('span', { className: 'mui-input-highlight' }),
	      React.createElement('span', { className: 'mui-input-bar' }),
	      React.createElement(
	        'span',
	        { className: 'mui-input-description' },
	        this.props.description
	      ),
	      React.createElement(
	        'span',
	        { className: 'mui-input-error' },
	        this.props.error
	      ),
	      React.createElement(
	        'div',
	        { style: sliderStyles,
	          onFocus: this._onFocus,
	          onBlur: this._onBlur,
	          onMouseDown: this._onMouseDown,
	          onMouseEnter: this._onMouseEnter,
	          onMouseLeave: this._onMouseLeave,
	          onMouseUp: this._onMouseUp },
	        React.createElement(
	          'div',
	          { ref: 'track', style: this.prepareStyles(styles.track) },
	          React.createElement('div', { style: this.prepareStyles(styles.filled) }),
	          React.createElement('div', { style: this.prepareStyles(remainingStyles) }),
	          React.createElement(
	            'div',
	            _extends({ style: handleStyles, tabIndex: 0 }, handleDragProps),
	            focusRipple
	          )
	        )
	      ),
	      React.createElement('input', { ref: 'input', type: 'hidden',
	        name: this.props.name,
	        value: this.state.value,
	        required: this.props.required,
	        min: this.props.min,
	        max: this.props.max,
	        step: this.props.step })
	    );
	  },

	  _onHandleTouchStart: function _onHandleTouchStart(e) {
	    if (document) {
	      document.addEventListener('touchmove', this._dragTouchHandler, false);
	      document.addEventListener('touchup', this._dragTouchEndHandler, false);
	      document.addEventListener('touchend', this._dragTouchEndHandler, false);
	      document.addEventListener('touchcancel', this._dragTouchEndHandler, false);
	    }
	    this._onDragStart(e);
	  },

	  _onHandleMouseDown: function _onHandleMouseDown(e) {
	    if (document) {
	      document.addEventListener('mousemove', this._dragHandler, false);
	      document.addEventListener('mouseup', this._dragEndHandler, false);
	    }
	    this._onDragStart(e);
	  },

	  _dragHandler: function _dragHandler(e) {
	    var _this = this;

	    if (this._dragRunning) {
	      return;
	    }
	    this._dragRunning = true;
	    requestAnimationFrame(function () {
	      _this._onDragUpdate(e, e.clientX - _this._getTrackLeft());
	      _this._dragRunning = false;
	    });
	  },

	  _dragTouchHandler: function _dragTouchHandler(e) {
	    var _this2 = this;

	    if (this._dragRunning) {
	      return;
	    }
	    this._dragRunning = true;
	    requestAnimationFrame(function () {
	      _this2._onDragUpdate(e, e.touches[0].clientX - _this2._getTrackLeft());
	      _this2._dragRunning = false;
	    });
	  },

	  _dragEndHandler: function _dragEndHandler(e) {
	    if (document) {
	      document.removeEventListener('mousemove', this._dragHandler, false);
	      document.removeEventListener('mouseup', this._dragEndHandler, false);
	    }

	    this._onDragStop(e);
	  },

	  _dragTouchEndHandler: function _dragTouchEndHandler(e) {
	    if (document) {
	      document.removeEventListener('touchmove', this._dragTouchHandler, false);
	      document.removeEventListener('touchup', this._dragTouchEndHandler, false);
	      document.removeEventListener('touchend', this._dragTouchEndHandler, false);
	      document.removeEventListener('touchcancel', this._dragTouchEndHandler, false);
	    }

	    this._onDragStop(e);
	  },

	  getValue: function getValue() {
	    return this.state.value;
	  },

	  setValue: function setValue(i) {
	    // calculate percentage
	    var percent = (i - this.props.min) / (this.props.max - this.props.min);
	    if (isNaN(percent)) percent = 0;
	    // update state
	    this.setState({
	      value: i,
	      percent: percent
	    });
	  },

	  getPercent: function getPercent() {
	    return this.state.percent;
	  },

	  setPercent: function setPercent(percent, callback) {
	    var value = this._alignValue(this._percentToValue(percent));
	    var _props = this.props;
	    var min = _props.min;
	    var max = _props.max;

	    var alignedPercent = (value - min) / (max - min);
	    if (this.state.value !== value) {
	      this.setState({ value: value, percent: alignedPercent }, callback);
	    }
	  },

	  clearValue: function clearValue() {
	    this.setValue(this.props.min);
	  },

	  _alignValue: function _alignValue(val) {
	    var _props2 = this.props;
	    var step = _props2.step;
	    var min = _props2.min;

	    var alignValue = Math.round((val - min) / step) * step + min;
	    return parseFloat(alignValue.toFixed(5));
	  },

	  _onFocus: function _onFocus(e) {
	    this.setState({ focused: true });
	    if (this.props.onFocus) this.props.onFocus(e);
	  },

	  _onBlur: function _onBlur(e) {
	    this.setState({ focused: false, active: false });
	    if (this.props.onBlur) this.props.onBlur(e);
	  },

	  _onMouseDown: function _onMouseDown(e) {
	    if (!this.props.disabled) this._pos = e.clientX;
	  },

	  _onMouseEnter: function _onMouseEnter() {
	    this.setState({ hovered: true });
	  },

	  _onMouseLeave: function _onMouseLeave() {
	    this.setState({ hovered: false });
	  },

	  _getTrackLeft: function _getTrackLeft() {
	    return ReactDOM.findDOMNode(this.refs.track).getBoundingClientRect().left;
	  },

	  _onMouseUp: function _onMouseUp(e) {
	    if (!this.props.disabled) this.setState({ active: false });
	    if (!this.state.dragging && Math.abs(this._pos - e.clientX) < 5) {
	      var pos = e.clientX - this._getTrackLeft();
	      this._dragX(e, pos);
	    }

	    this._pos = undefined;
	  },

	  _onDragStart: function _onDragStart(e) {
	    this.setState({
	      dragging: true,
	      active: true
	    });
	    if (this.props.onDragStart) this.props.onDragStart(e);
	  },

	  _onDragStop: function _onDragStop(e) {
	    this.setState({
	      dragging: false,
	      active: false
	    });
	    if (this.props.onDragStop) this.props.onDragStop(e);
	  },

	  _onDragUpdate: function _onDragUpdate(e, pos) {
	    if (!this.state.dragging) return;
	    if (!this.props.disabled) this._dragX(e, pos);
	  },

	  _dragX: function _dragX(e, pos) {
	    var max = ReactDOM.findDOMNode(this.refs.track).clientWidth;
	    if (pos < 0) pos = 0;else if (pos > max) pos = max;
	    this._updateWithChangeEvent(e, pos / max);
	  },

	  _updateWithChangeEvent: function _updateWithChangeEvent(e, percent) {
	    var _this3 = this;

	    this.setPercent(percent, function () {
	      if (_this3.props.onChange) _this3.props.onChange(e, _this3.state.value);
	    });
	  },

	  _percentToValue: function _percentToValue(percent) {
	    return percent * (this.props.max - this.props.min) + this.props.min;
	  }

	});

	module.exports = Slider;


/***/ },
/* 400 */
/***/ function(module, exports) {

	'use strict';

	var mediaObject;

	var mediaControllerRepeater;

	module.exports = {
		initPlayer: function initPlayer(fileName, returnDurationFunction) {
			mediaObject = new Media(fileName);
			if (mediaObject) {
				mediaObject.play();
				mediaObject.stop();
			}
			mediaControllerRepeater = window.setInterval(function () {

				var duration = mediaObject.getDuration();
				if (duration > 0) {
					returnDurationFunction(duration);
					window.clearInterval(mediaControllerRepeater);
				}
			}, 100);
		},
		/*
	 fileName: string
	 	full path to where the file will be stored
	 statusCallbackFunction: function(status)
	 	will be called when the media status changes, status is an int
	 */
		startRecording: function startRecording(fileName, statusCallbackFunction) {
			mediaObject = new Media(fileName, success, failure, statusCallbackFunction);
			console.log('mediaObject: ' + JSON.stringify(mediaObject));
			mediaObject.startRecord();
		},

		stopRecording: function stopRecording() {
			if (mediaObject) {
				mediaObject.stopRecord();
				mediaObject.release();
			}
		},

		playMedia: function playMedia(fileName, statusCallbackFunction) {
			if (!mediaObject) {
				mediaObject = new Media(fileName, success, failure, statusCallbackFunction);
			}
			mediaObject.play();
		},

		pauseMedia: function pauseMedia() {
			if (mediaObject) {
				mediaObject.pause();
			}
		},

		stopMedia: function stopMedia() {
			if (mediaObject) {
				mediaObject.stop();
			}
		},

		resetMedia: function resetMedia() {
			if (mediaObject) mediaObject.release();
			mediaObject = null;
		},

		getCurrentPosition: function getCurrentPosition(updateTimeFunction) {
			mediaObject.getCurrentPosition(function (position) {
				if (position > -1) {
					updateTimeFunction(position);
				}
			});
		},

		seekTo: function seekTo(position) {
			if (mediaObject !== null) {
				mediaObject.seekTo(position);
			}
		}

	};

	var success = function success() {};

	var failure = function failure(error) {
		alert('RecordController error: ' + error.code + ' : ' + error.message);
	};

	//	mediaStatus REFERENCE
	//     Media.MEDIA_NONE = 0;
	//     Media.MEDIA_STARTING = 1;
	//     Media.MEDIA_RUNNING = 2;
	//     Media.MEDIA_PAUSED = 3;
	//     Media.MEDIA_STOPPED = 4;

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);

	var RaisedButton = __webpack_require__(328);
	var FlatButton = __webpack_require__(366);
	var TextField = __webpack_require__(402);
	var FontIcon = __webpack_require__(377);
	var DatePicker = __webpack_require__(404);
	var TimePicker = __webpack_require__(422);

	//Should remove soon
	var DB = __webpack_require__(432);

	var MetaDataForm = React.createClass({
		displayName: 'MetaDataForm',

		getInitialState: function getInitialState() {
			this.getLocation();
			return { value: 0 };
		},
		getLocation: function getLocation() {
			navigator.geolocation.getCurrentPosition((function (position) {
				if (position) {
					this.currentPosition = {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
						accuracy: position.coords.accuracy,
						altitude: position.coords.altitude,
						name: 'default location name'
					};
				}
			}).bind(this));
		},
		updateTime: function updateTime(event, value) {
			this.setState({
				value: value,
				image: null
			});
		},
		takePicture: function takePicture(event) {
			navigator.camera.getPicture((function (imageData) {
				this.setState({ image: imageData });
			}).bind(this), function (message) {
				alert(message);
			}, {
				quality: 50,
				destinationType: Camera.DestinationType.DATA_URL,
				targetWidth: 1080,
				targetHeight: 1080,
				correctOrientation: true
			});
		},
		currentPosition: {
			lat: 0,
			lng: 0,
			accuracy: 0,
			altitude: 0,
			name: 'default location name'
		},
		save: function save(event) {
			var soundBite = this.createSoundbite();
			//DB.saveSound(soundBite); this is for temp debugging
			this.props.callbackParent(soundBite);
		},
		createSoundbite: function createSoundbite() {
			var soundBiteDate = new Date(this.refs.dateField.getValue());
			soundBiteDate.setTime(this.refs.time.getTime());
			var name = this.refs.name.getValue();
			if (!name) {
				name = soundBiteDate.toLocaleString();
			}

			var soundBite = {
				id: null,
				type: 'default',
				name: name,
				datetime: soundBiteDate,
				filename: this.props.media,
				length: null,
				url: this.refs.url.getValue(),
				tags: this.refs.tags.getValue(),
				photo: this.state.image,
				author: 'some author id',
				location: this.currentPosition
			};

			return soundBite;
		},
		render: function render() {
			var formStyle = this.props.formStyle;
			var now = new Date();
			var month = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth();
			var day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
			var currentDate = now.getFullYear() + "-" + month + "-" + day;

			var image;
			if (this.state.image) {
				image = React.createElement('img', { src: 'data:image/jpeg;base64,' + this.state.image, width: '100%', height: 'auto' });
			}
			return React.createElement(
				'div',
				null,
				React.createElement(TextField, { ref: 'name', hintText: 'Soundbite Name', floatingLabelText: 'Name' }),
				React.createElement(TextField, { ref: 'dateField', hintText: 'Date', type: 'date', floatingLabelText: 'Date', defaultValue: currentDate }),
				React.createElement(TextField, { ref: 'url', hintText: 'Media URL', type: 'url', floatingLabelText: 'Medial URL', defaultValue: this.props.url }),
				React.createElement(TimePicker, { ref: 'time', format: 'ampm', hintText: 'Time', floatingLabelText: 'Time', defaultTime: now }),
				React.createElement(
					RaisedButton,
					{ onClick: this.takePicture, fullWidth: true },
					React.createElement(FontIcon, { className: 'ion-camera' }),
					'Add Photo'
				),
				image,
				React.createElement(TextField, { ref: 'tags', hintText: 'Tags', multiLine: true, rows: 5, floatingLabelText: 'Tags' })
			);
		}
	});

	module.exports = MetaDataForm;

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var ColorManipulator = __webpack_require__(339);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var UniqueId = __webpack_require__(392);
	var EnhancedTextarea = __webpack_require__(403);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);
	var ContextPure = __webpack_require__(367);

	/**
	 * Check if a value is valid to be displayed inside an input.
	 *
	 * @param The value to check.
	 * @returns True if the string provided is valid, false otherwise.
	 */
	function isValid(value) {
	  return value || value === 0;
	}

	var TextField = React.createClass({
	  displayName: 'TextField',

	  mixins: [ContextPure, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    errorStyle: React.PropTypes.object,
	    errorText: React.PropTypes.string,
	    floatingLabelStyle: React.PropTypes.object,
	    floatingLabelText: React.PropTypes.string,
	    fullWidth: React.PropTypes.bool,
	    hintText: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
	    hintStyle: React.PropTypes.object,
	    id: React.PropTypes.string,
	    inputStyle: React.PropTypes.object,
	    multiLine: React.PropTypes.bool,
	    onBlur: React.PropTypes.func,
	    onChange: React.PropTypes.func,
	    onEnterKeyDown: React.PropTypes.func,
	    onFocus: React.PropTypes.func,
	    onKeyDown: React.PropTypes.func,
	    rows: React.PropTypes.number,
	    rowsMax: React.PropTypes.number,
	    type: React.PropTypes.string,
	    underlineStyle: React.PropTypes.object,
	    underlineFocusStyle: React.PropTypes.object,
	    underlineDisabledStyle: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      fullWidth: false,
	      type: 'text',
	      rows: 1
	    };
	  },

	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      var textFieldTheme = muiTheme.textField;

	      return {
	        floatingLabelColor: textFieldTheme.floatingLabelColor,
	        focusColor: textFieldTheme.focusColor,
	        borderColor: textFieldTheme.borderColor,
	        textColor: textFieldTheme.textColor,
	        disabledTextColor: textFieldTheme.disabledTextColor,
	        backgroundColor: textFieldTheme.backgroundColor,
	        hintColor: textFieldTheme.hintColor,
	        errorColor: textFieldTheme.errorColor
	      };
	    },
	    getChildrenClasses: function getChildrenClasses() {
	      return [EnhancedTextarea];
	    }
	  },

	  getInitialState: function getInitialState() {
	    var props = this.props.children ? this.props.children.props : this.props;

	    return {
	      errorText: this.props.errorText,
	      hasValue: isValid(props.value) || isValid(props.defaultValue) || props.valueLink && isValid(props.valueLink.value),
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this._uniqueId = UniqueId.generate();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newState = {};
	    newState.muiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    newState.errorText = nextProps.errorText;
	    if (nextProps.children && nextProps.children.props) {
	      nextProps = nextProps.children.props;
	    }

	    var hasValueLinkProp = nextProps.hasOwnProperty('valueLink');
	    var hasValueProp = nextProps.hasOwnProperty('value');
	    var hasNewDefaultValue = nextProps.defaultValue !== this.props.defaultValue;

	    if (hasValueLinkProp) {
	      newState.hasValue = isValid(nextProps.valueLink.value);
	    } else if (hasValueProp) {
	      newState.hasValue = isValid(nextProps.value);
	    } else if (hasNewDefaultValue) {
	      newState.hasValue = isValid(nextProps.defaultValue);
	    }

	    if (newState) this.setState(newState);
	  },

	  getStyles: function getStyles() {
	    var props = this.props;

	    var _constructor$getRelevantContextKeys = this.constructor.getRelevantContextKeys(this.state.muiTheme);

	    var floatingLabelColor = _constructor$getRelevantContextKeys.floatingLabelColor;
	    var focusColor = _constructor$getRelevantContextKeys.focusColor;
	    var borderColor = _constructor$getRelevantContextKeys.borderColor;
	    var textColor = _constructor$getRelevantContextKeys.textColor;
	    var disabledTextColor = _constructor$getRelevantContextKeys.disabledTextColor;
	    var backgroundColor = _constructor$getRelevantContextKeys.backgroundColor;
	    var hintColor = _constructor$getRelevantContextKeys.hintColor;
	    var errorColor = _constructor$getRelevantContextKeys.errorColor;

	    var styles = {
	      root: {
	        fontSize: 16,
	        lineHeight: '24px',
	        width: props.fullWidth ? '100%' : 256,
	        height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
	        display: 'inline-block',
	        position: 'relative',
	        backgroundColor: backgroundColor,
	        fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	        transition: Transitions.easeOut('200ms', 'height')
	      },
	      error: {
	        position: 'relative',
	        bottom: 5,
	        fontSize: 12,
	        lineHeight: '12px',
	        color: errorColor,
	        transition: Transitions.easeOut()
	      },
	      hint: {
	        position: 'absolute',
	        lineHeight: '22px',
	        opacity: 1,
	        color: hintColor,
	        transition: Transitions.easeOut(),
	        bottom: 12
	      },
	      input: {
	        tapHighlightColor: 'rgba(0,0,0,0)',
	        padding: 0,
	        position: 'relative',
	        width: '100%',
	        height: '100%',
	        border: 'none',
	        outline: 'none',
	        backgroundColor: 'transparent',
	        color: props.disabled ? disabledTextColor : textColor,
	        font: 'inherit'
	      },
	      underline: {
	        border: 'none',
	        borderBottom: 'solid 1px ' + borderColor,
	        position: 'absolute',
	        width: '100%',
	        bottom: 8,
	        margin: 0,
	        MozBoxSizing: 'content-box',
	        boxSizing: 'content-box',
	        height: 0
	      },
	      underlineAfter: {
	        position: 'absolute',
	        width: '100%',
	        overflow: 'hidden',
	        userSelect: 'none',
	        cursor: 'default',
	        bottom: 8,
	        borderBottom: 'dotted 2px ' + disabledTextColor
	      },
	      underlineFocus: {
	        borderBottom: 'solid 2px',
	        borderColor: focusColor,
	        transform: 'scaleX(0)',
	        transition: Transitions.easeOut()
	      }
	    };

	    styles.error = this.mergeAndPrefix(styles.error, props.errorStyle);
	    styles.underline = this.mergeAndPrefix(styles.underline, props.underlineStyle);
	    styles.underlineAfter = this.mergeAndPrefix(styles.underlineAfter, props.underlineDisabledStyle);

	    styles.floatingLabel = this.mergeStyles(styles.hint, {
	      lineHeight: '22px',
	      top: 38,
	      bottom: 'none',
	      opacity: 1,
	      transform: 'scale(1) translate3d(0, 0, 0)',
	      transformOrigin: 'left top'
	    });

	    styles.textarea = this.mergeStyles(styles.input, {
	      marginTop: props.floatingLabelText ? 36 : 12,
	      marginBottom: props.floatingLabelText ? -36 : -12,
	      boxSizing: 'border-box',
	      font: 'inherit'
	    });

	    styles.focusUnderline = this.mergeStyles(styles.underline, styles.underlineFocus, props.underlineFocusStyle);

	    if (this.state.isFocused) {
	      styles.floatingLabel.color = focusColor;
	      styles.floatingLabel.transform = 'perspective(1px) scale(0.75) translate3d(2px, -28px, 0)';
	      styles.focusUnderline.transform = 'scaleX(1)';
	    }

	    if (this.state.hasValue) {
	      styles.floatingLabel.color = ColorManipulator.fade(props.disabled ? disabledTextColor : floatingLabelColor, 0.5);
	      styles.floatingLabel.transform = 'perspective(1px) scale(0.75) translate3d(2px, -28px, 0)';
	      styles.hint.opacity = 0;
	    }

	    if (props.floatingLabelText) {
	      styles.hint.opacity = 0;
	      styles.input.boxSizing = 'border-box';
	      if (this.state.isFocused && !this.state.hasValue) styles.hint.opacity = 1;
	    }

	    if (props.style && props.style.height) {
	      styles.hint.lineHeight = props.style.height;
	    }

	    if (this.state.errorText && this.state.isFocused) styles.floatingLabel.color = styles.error.color;
	    if (props.floatingLabelText && !props.multiLine) styles.input.marginTop = 14;

	    if (this.state.errorText) {
	      styles.focusUnderline.borderColor = styles.error.color;
	      styles.focusUnderline.transform = 'scaleX(1)';
	    }

	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var errorStyle = _props.errorStyle;
	    var errorText = _props.errorText;
	    var floatingLabelText = _props.floatingLabelText;
	    var fullWidth = _props.fullWidth;
	    var hintText = _props.hintText;
	    var hintStyle = _props.hintStyle;
	    var id = _props.id;
	    var multiLine = _props.multiLine;
	    var onBlur = _props.onBlur;
	    var onChange = _props.onChange;
	    var onFocus = _props.onFocus;
	    var type = _props.type;
	    var rows = _props.rows;
	    var rowsMax = _props.rowsMax;

	    var other = _objectWithoutProperties(_props, ['className', 'errorStyle', 'errorText', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'type', 'rows', 'rowsMax']);

	    var styles = this.getStyles();

	    var inputId = id || this._uniqueId;

	    var errorTextElement = this.state.errorText ? React.createElement(
	      'div',
	      { style: this.prepareStyles(styles.error) },
	      this.state.errorText
	    ) : null;

	    var hintTextElement = hintText ? React.createElement(
	      'div',
	      { style: this.prepareStyles(styles.hint, hintStyle) },
	      hintText
	    ) : null;

	    var floatingLabelTextElement = floatingLabelText ? React.createElement(
	      'label',
	      {
	        style: this.prepareStyles(styles.floatingLabel, this.props.floatingLabelStyle),
	        htmlFor: inputId },
	      floatingLabelText
	    ) : null;

	    var inputProps = undefined;
	    var inputElement = undefined;

	    inputProps = {
	      id: inputId,
	      ref: this._getRef(),
	      onBlur: this._handleInputBlur,
	      onFocus: this._handleInputFocus,
	      disabled: this.props.disabled,
	      onKeyDown: this._handleInputKeyDown
	    };
	    var inputStyle = this.mergeStyles(styles.input, this.props.inputStyle);

	    if (!this.props.hasOwnProperty('valueLink')) {
	      inputProps.onChange = this._handleInputChange;
	    }
	    if (this.props.children) {
	      var childInputStyle = this.mergeStyles(inputStyle, this.props.children.style);
	      inputElement = React.cloneElement(this.props.children, _extends({}, inputProps, this.props.children.props, { style: childInputStyle }));
	    } else {
	      inputElement = multiLine ? React.createElement(EnhancedTextarea, _extends({}, other, inputProps, {
	        style: inputStyle,
	        rows: rows,
	        rowsMax: rowsMax,
	        onHeightChange: this._handleTextAreaHeightChange,
	        textareaStyle: this.mergeAndPrefix(styles.textarea) })) : React.createElement('input', _extends({}, other, inputProps, {
	        style: this.prepareStyles(inputStyle),
	        type: type }));
	    }

	    var underlineElement = this.props.disabled ? React.createElement('div', { style: this.prepareStyles(styles.underlineAfter) }) : React.createElement('hr', { style: this.prepareStyles(styles.underline) });
	    var focusUnderlineElement = React.createElement('hr', { style: this.prepareStyles(styles.focusUnderline) });

	    return React.createElement(
	      'div',
	      { className: className, style: this.prepareStyles(styles.root, this.props.style) },
	      floatingLabelTextElement,
	      hintTextElement,
	      inputElement,
	      underlineElement,
	      focusUnderlineElement,
	      errorTextElement
	    );
	  },

	  blur: function blur() {
	    if (this.isMounted()) this._getInputNode().blur();
	  },

	  clearValue: function clearValue() {
	    this.setValue('');
	  },

	  focus: function focus() {
	    if (this.isMounted()) this._getInputNode().focus();
	  },

	  getValue: function getValue() {
	    return this.isMounted() ? this._getInputNode().value : undefined;
	  },

	  setErrorText: function setErrorText(newErrorText) {
	    if (process.env.NODE_ENV !== 'production' && this.props.hasOwnProperty('errorText')) {
	      console.error('Cannot call TextField.setErrorText when errorText is defined as a property.');
	    } else if (this.isMounted()) {
	      this.setState({ errorText: newErrorText });
	    }
	  },

	  setValue: function setValue(newValue) {
	    if (process.env.NODE_ENV !== 'production' && this._isControlled()) {
	      console.error('Cannot call TextField.setValue when value or valueLink is defined as a property.');
	    } else if (this.isMounted()) {
	      if (this.props.multiLine) {
	        this.refs[this._getRef()].setValue(newValue);
	      } else {
	        this._getInputNode().value = newValue;
	      }

	      this.setState({ hasValue: isValid(newValue) });
	    }
	  },

	  _getRef: function _getRef() {
	    return this.props.ref ? this.props.ref : 'input';
	  },

	  _getInputNode: function _getInputNode() {
	    return this.props.children || this.props.multiLine ? this.refs[this._getRef()].getInputNode() : ReactDOM.findDOMNode(this.refs[this._getRef()]);
	  },

	  _handleInputBlur: function _handleInputBlur(e) {
	    this.setState({ isFocused: false });
	    if (this.props.onBlur) this.props.onBlur(e);
	  },

	  _handleInputChange: function _handleInputChange(e) {
	    this.setState({ hasValue: isValid(e.target.value) });
	    if (this.props.onChange) this.props.onChange(e);
	  },

	  _handleInputFocus: function _handleInputFocus(e) {
	    if (this.props.disabled) return;
	    this.setState({ isFocused: true });
	    if (this.props.onFocus) this.props.onFocus(e);
	  },

	  _handleInputKeyDown: function _handleInputKeyDown(e) {
	    if (e.keyCode === 13 && this.props.onEnterKeyDown) this.props.onEnterKeyDown(e);
	    if (this.props.onKeyDown) this.props.onKeyDown(e);
	  },

	  _handleTextAreaHeightChange: function _handleTextAreaHeightChange(e, height) {
	    var newHeight = height + 24;
	    if (this.props.floatingLabelText) newHeight += 24;
	    ReactDOM.findDOMNode(this).style.height = newHeight + 'px';
	  },

	  _isControlled: function _isControlled() {
	    return this.props.hasOwnProperty('value') || this.props.hasOwnProperty('valueLink');
	  }

	});

	module.exports = TextField;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var StylePropable = __webpack_require__(330);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var rowsHeight = 24;

	var styles = {
	  textarea: {
	    width: '100%',
	    resize: 'none',
	    font: 'inherit',
	    padding: 0
	  },
	  shadow: {
	    width: '100%',
	    resize: 'none',
	    // Overflow also needed to here to remove the extra row
	    // added to textareas in Firefox.
	    overflow: 'hidden',
	    font: 'inherit',
	    padding: 0,
	    position: 'absolute',
	    opacity: 0
	  }
	};

	var EnhancedTextarea = React.createClass({
	  displayName: 'EnhancedTextarea',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    onChange: React.PropTypes.func,
	    onHeightChange: React.PropTypes.func,
	    textareaStyle: React.PropTypes.object,
	    rows: React.PropTypes.number,
	    rowsMax: React.PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      rows: 1
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      height: this.props.rows * rowsHeight,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this._syncHeightWithShadow();
	  },

	  render: function render() {
	    var _props = this.props;
	    var onChange = _props.onChange;
	    var onHeightChange = _props.onHeightChange;
	    var rows = _props.rows;
	    var style = _props.style;
	    var textareaStyle = _props.textareaStyle;
	    var valueLink = _props.valueLink;

	    var other = _objectWithoutProperties(_props, ['onChange', 'onHeightChange', 'rows', 'style', 'textareaStyle', 'valueLink']);

	    var textareaStyles = this.mergeStyles(styles.textarea, textareaStyle, {
	      height: this.state.height
	    });

	    var shadowStyles = styles.shadow;

	    if (this.props.hasOwnProperty('valueLink')) {
	      other.value = this.props.valueLink.value;
	    }

	    if (this.props.disabled) {
	      style.cursor = 'default';
	    }

	    return React.createElement(
	      'div',
	      { style: this.prepareStyles(this.props.style) },
	      React.createElement('textarea', {
	        ref: 'shadow',
	        style: this.prepareStyles(shadowStyles),
	        tabIndex: '-1',
	        rows: this.props.rows,
	        defaultValue: this.props.defaultValue,
	        readOnly: true,
	        value: this.props.value,
	        valueLink: this.props.valueLink }),
	      React.createElement('textarea', _extends({}, other, {
	        ref: 'input',
	        rows: this.props.rows,
	        style: this.prepareStyles(textareaStyles),
	        onChange: this._handleChange }))
	    );
	  },

	  getInputNode: function getInputNode() {
	    return ReactDOM.findDOMNode(this.refs.input);
	  },

	  setValue: function setValue(value) {
	    this.getInputNode().value = value;
	    this._syncHeightWithShadow(value);
	  },

	  _syncHeightWithShadow: function _syncHeightWithShadow(newValue, e) {
	    var shadow = ReactDOM.findDOMNode(this.refs.shadow);

	    if (newValue !== undefined) {
	      shadow.value = newValue;
	    }

	    var newHeight = shadow.scrollHeight;

	    if (this.props.rowsMax > this.props.rows) {
	      newHeight = Math.min(this.props.rowsMax * rowsHeight, newHeight);
	    }

	    newHeight = Math.max(newHeight, rowsHeight);

	    if (this.state.height !== newHeight) {
	      this.setState({
	        height: newHeight
	      });

	      if (this.props.onHeightChange) {
	        this.props.onHeightChange(e, newHeight);
	      }
	    }
	  },

	  _handleChange: function _handleChange(e) {
	    this._syncHeightWithShadow(e.target.value);

	    if (this.props.hasOwnProperty('valueLink')) {
	      this.props.valueLink.requestChange(e.target.value);
	    }

	    if (this.props.onChange) {
	      this.props.onChange(e);
	    }
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    if (nextProps.value !== this.props.value) {
	      this._syncHeightWithShadow(nextProps.value);
	    }
	    var newState = {};
	    newState.muiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	  }
	});

	module.exports = EnhancedTextarea;


/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var WindowListenable = __webpack_require__(393);
	var DateTime = __webpack_require__(405);
	var DatePickerDialog = __webpack_require__(406);
	var TextField = __webpack_require__(402);
	var ThemeManager = __webpack_require__(359);
	var DefaultRawTheme = __webpack_require__(357);

	var DatePicker = React.createClass({
	  displayName: 'DatePicker',

	  mixins: [StylePropable, WindowListenable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    DateTimeFormat: React.PropTypes.func,
	    locale: React.PropTypes.string,
	    wordings: React.PropTypes.object,
	    autoOk: React.PropTypes.bool,
	    defaultDate: React.PropTypes.object,
	    formatDate: React.PropTypes.func,
	    hideToolbarYearChange: React.PropTypes.bool,
	    maxDate: React.PropTypes.object,
	    minDate: React.PropTypes.object,
	    mode: React.PropTypes.oneOf(['portrait', 'landscape', 'inline']),
	    onDismiss: React.PropTypes.func,
	    onChange: React.PropTypes.func,
	    onFocus: React.PropTypes.func,
	    onShow: React.PropTypes.func,
	    onTouchTap: React.PropTypes.func,
	    shouldDisableDate: React.PropTypes.func,
	    showYearSelector: React.PropTypes.bool,
	    style: React.PropTypes.object,
	    textFieldStyle: React.PropTypes.object
	  },

	  windowListeners: {
	    keyup: '_handleWindowKeyUp'
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      formatDate: DateTime.format,
	      autoOk: false,
	      showYearSelector: false,
	      style: {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      date: this._isControlled() ? this._getControlledDate() : this.props.defaultDate,
	      dialogDate: new Date(),
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this._isControlled()) {
	      var newDate = this._getControlledDate(nextProps);
	      if (!DateTime.isEqualDate(this.state.date, newDate)) {
	        this.setState({
	          date: newDate
	        });
	      }
	    }
	  },

	  render: function render() {
	    var _props = this.props;
	    var DateTimeFormat = _props.DateTimeFormat;
	    var locale = _props.locale;
	    var wordings = _props.wordings;
	    var autoOk = _props.autoOk;
	    var defaultDate = _props.defaultDate;
	    var formatDate = _props.formatDate;
	    var maxDate = _props.maxDate;
	    var minDate = _props.minDate;
	    var mode = _props.mode;
	    var onDismiss = _props.onDismiss;
	    var onFocus = _props.onFocus;
	    var onShow = _props.onShow;
	    var onTouchTap = _props.onTouchTap;
	    var showYearSelector = _props.showYearSelector;
	    var style = _props.style;
	    var textFieldStyle = _props.textFieldStyle;
	    var valueLink = _props.valueLink;

	    var other = _objectWithoutProperties(_props, ['DateTimeFormat', 'locale', 'wordings', 'autoOk', 'defaultDate', 'formatDate', 'maxDate', 'minDate', 'mode', 'onDismiss', 'onFocus', 'onShow', 'onTouchTap', 'showYearSelector', 'style', 'textFieldStyle', 'valueLink']);

	    return React.createElement(
	      'div',
	      { style: this.prepareStyles(style) },
	      React.createElement(TextField, _extends({}, other, {
	        style: textFieldStyle,
	        ref: 'input',
	        value: this.state.date ? formatDate(this.state.date) : undefined,
	        onFocus: this._handleInputFocus,
	        onTouchTap: this._handleInputTouchTap })),
	      React.createElement(DatePickerDialog, {
	        ref: 'dialogWindow',
	        DateTimeFormat: DateTimeFormat,
	        locale: locale,
	        wordings: wordings,
	        mode: mode,
	        initialDate: this.state.dialogDate,
	        onAccept: this._handleDialogAccept,
	        onShow: onShow,
	        onDismiss: this._handleDialogDismiss,
	        minDate: minDate,
	        maxDate: maxDate,
	        autoOk: autoOk,
	        showYearSelector: showYearSelector,
	        shouldDisableDate: this.props.shouldDisableDate,
	        hideToolbarYearChange: this.props.hideToolbarYearChange })
	    );
	  },

	  getDate: function getDate() {
	    return this.state.date;
	  },

	  setDate: function setDate(d) {
	    if (process.env.NODE_ENV !== 'production' && this._isControlled()) {
	      console.error('Cannot call DatePicker.setDate when value or valueLink is defined as a property.');
	    }
	    this.setState({
	      date: d
	    });
	  },

	  /**
	   * Open the date-picker dialog programmatically from a parent.
	   */
	  openDialog: function openDialog() {
	    this.setState({
	      dialogDate: this.getDate()
	    }, this.refs.dialogWindow.show);
	  },

	  /**
	   * Alias for `openDialog()` for an api consistent with TextField.
	   */
	  focus: function focus() {
	    this.openDialog();
	  },

	  _handleDialogAccept: function _handleDialogAccept(d) {
	    if (!this._isControlled()) {
	      this.setDate(d);
	    }
	    if (this.props.onChange) this.props.onChange(null, d);
	    if (this.props.valueLink) this.props.valueLink.requestChange(d);
	  },

	  _handleDialogDismiss: function _handleDialogDismiss() {
	    if (this.props.onDismiss) this.props.onDismiss();
	  },

	  _handleInputFocus: function _handleInputFocus(e) {
	    e.target.blur();
	    if (this.props.onFocus) this.props.onFocus(e);
	  },

	  _handleInputTouchTap: function _handleInputTouchTap(event) {
	    var _this = this;

	    if (this.props.onTouchTap) this.props.onTouchTap(event);

	    setTimeout(function () {
	      _this.openDialog();
	    }, 0);
	  },

	  _handleWindowKeyUp: function _handleWindowKeyUp() {
	    //TO DO: open the dialog if input has focus
	  },

	  _isControlled: function _isControlled() {
	    return this.props.hasOwnProperty('value') || this.props.hasOwnProperty('valueLink');
	  },

	  _getControlledDate: function _getControlledDate() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	    if (DateTime.isDateObject(props.value)) {
	      return props.value;
	    } else if (props.valueLink && DateTime.isDateObject(props.valueLink.value)) {
	      return props.valueLink.value;
	    }
	  }

	});

	module.exports = DatePicker;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'jonny22234';

	var dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	var monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var monthLongList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	function DateTimeFormat(locale, options) {
	  if (process.env.NODE_ENV !== 'production' && locale !== 'en-US') {
	    console.warn('Wrong usage of DateTimeFormat. The ' + locale + ' locale is not supported.');
	  }

	  this.format = function (date) {
	    var output = undefined;

	    if (options.month === 'short' && options.weekday === 'short' && options.day === '2-digit') {

	      output = dayList[date.getDay()] + ', ';
	      output += monthList[date.getMonth()] + ' ';
	      output += date.getDate();
	    } else if (options.month === 'long' && options.year === 'numeric') {

	      output = monthLongList[date.getMonth()];
	      output += ' ' + date.getFullYear();
	    } else if (process.env.NODE_ENV !== 'production') {
	      console.warn('Wrong usage of DateTimeFormat');
	    }

	    return output;
	  };
	}

	module.exports = {
	  DateTimeFormat: DateTimeFormat,

	  addDays: function addDays(d, days) {
	    var newDate = this.clone(d);
	    newDate.setDate(d.getDate() + days);
	    return newDate;
	  },

	  addMonths: function addMonths(d, months) {
	    var newDate = this.clone(d);
	    newDate.setMonth(d.getMonth() + months);
	    return newDate;
	  },

	  addYears: function addYears(d, years) {
	    var newDate = this.clone(d);
	    newDate.setFullYear(d.getFullYear() + years);
	    return newDate;
	  },

	  clone: function clone(d) {
	    return new Date(d.getTime());
	  },

	  cloneAsDate: function cloneAsDate(d) {
	    var clonedDate = this.clone(d);
	    clonedDate.setHours(0, 0, 0, 0);
	    return clonedDate;
	  },

	  getDaysInMonth: function getDaysInMonth(d) {
	    var resultDate = this.getFirstDayOfMonth(d);

	    resultDate.setMonth(resultDate.getMonth() + 1);
	    resultDate.setDate(resultDate.getDate() - 1);

	    return resultDate.getDate();
	  },

	  getFirstDayOfMonth: function getFirstDayOfMonth(d) {
	    return new Date(d.getFullYear(), d.getMonth(), 1);
	  },

	  getWeekArray: function getWeekArray(d) {
	    var dayArray = [];
	    var daysInMonth = this.getDaysInMonth(d);
	    var daysInWeek = undefined;
	    var emptyDays = undefined;
	    var firstDayOfWeek = undefined;
	    var week = undefined;
	    var weekArray = [];

	    for (var i = 1; i <= daysInMonth; i++) {
	      dayArray.push(new Date(d.getFullYear(), d.getMonth(), i));
	    }

	    while (dayArray.length) {
	      firstDayOfWeek = dayArray[0].getDay();
	      daysInWeek = 7 - firstDayOfWeek;
	      emptyDays = 7 - daysInWeek;
	      week = dayArray.splice(0, daysInWeek);

	      for (var i = 0; i < emptyDays; i++) {
	        week.unshift(null);
	      }

	      weekArray.push(week);
	    }

	    return weekArray;
	  },

	  format: function format(date) {
	    var m = date.getMonth() + 1;
	    var d = date.getDate();
	    var y = date.getFullYear();
	    return m + '/' + d + '/' + y;
	  },

	  isEqualDate: function isEqualDate(d1, d2) {
	    return d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
	  },

	  isBeforeDate: function isBeforeDate(d1, d2) {
	    var date1 = this.cloneAsDate(d1);
	    var date2 = this.cloneAsDate(d2);

	    return date1.getTime() < date2.getTime();
	  },

	  isAfterDate: function isAfterDate(d1, d2) {
	    var date1 = this.cloneAsDate(d1);
	    var date2 = this.cloneAsDate(d2);

	    return date1.getTime() > date2.getTime();
	  },

	  isBetweenDates: function isBetweenDates(dateToCheck, startDate, endDate) {
	    return !this.isBeforeDate(dateToCheck, startDate) && !this.isAfterDate(dateToCheck, endDate);
	  },

	  isDateObject: function isDateObject(d) {
	    return d instanceof Date;
	  },

	  monthDiff: function monthDiff(d1, d2) {
	    var m = undefined;
	    m = (d1.getFullYear() - d2.getFullYear()) * 12;
	    m += d1.getMonth();
	    m -= d2.getMonth();
	    return m;
	  },

	  yearDiff: function yearDiff(d1, d2) {
	    return ~ ~(this.monthDiff(d1, d2) / 12);
	  }

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var ContextPure = __webpack_require__(367);
	var StylePropable = __webpack_require__(330);
	var WindowListenable = __webpack_require__(393);
	var CssEvent = __webpack_require__(386);
	var KeyCode = __webpack_require__(350);
	var Calendar = __webpack_require__(407);
	var Dialog = __webpack_require__(420);
	var FlatButton = __webpack_require__(366);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);
	var DateTime = __webpack_require__(405);

	var DatePickerDialog = React.createClass({
	  displayName: 'DatePickerDialog',

	  mixins: [StylePropable, WindowListenable, ContextPure],

	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      return {
	        buttonColor: muiTheme.datePicker.calendarTextColor
	      };
	    },
	    getChildrenClasses: function getChildrenClasses() {
	      return [Calendar, Dialog];
	    }
	  },

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    DateTimeFormat: React.PropTypes.func,
	    locale: React.PropTypes.string,
	    wordings: React.PropTypes.object,
	    disableYearSelection: React.PropTypes.bool,
	    initialDate: React.PropTypes.object,
	    maxDate: React.PropTypes.object,
	    minDate: React.PropTypes.object,
	    onAccept: React.PropTypes.func,
	    onClickAway: React.PropTypes.func,
	    onDismiss: React.PropTypes.func,
	    onShow: React.PropTypes.func,
	    shouldDisableDate: React.PropTypes.func,
	    showYearSelector: React.PropTypes.bool
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      DateTimeFormat: DateTime.DateTimeFormat,
	      locale: 'en-US',
	      wordings: {
	        ok: 'OK',
	        cancel: 'Cancel'
	      }
	    };
	  },

	  windowListeners: {
	    keyup: '_handleWindowKeyUp'
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isCalendarActive: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  render: function render() {
	    var _props = this.props;
	    var DateTimeFormat = _props.DateTimeFormat;
	    var locale = _props.locale;
	    var wordings = _props.wordings;
	    var initialDate = _props.initialDate;
	    var onAccept = _props.onAccept;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['DateTimeFormat', 'locale', 'wordings', 'initialDate', 'onAccept', 'style']);

	    var _constructor$getRelevantContextKeys = this.constructor.getRelevantContextKeys(this.state.muiTheme);

	    var calendarTextColor = _constructor$getRelevantContextKeys.calendarTextColor;

	    var styles = {
	      root: {
	        fontSize: 14,
	        color: calendarTextColor
	      },

	      dialogContent: {
	        width: this.props.mode === 'landscape' ? 480 : 320
	      },

	      dialogBodyContent: {
	        padding: 0
	      },

	      actions: {
	        marginRight: 8
	      }
	    };

	    var actions = [React.createElement(FlatButton, {
	      key: 0,
	      label: wordings.cancel,
	      secondary: true,
	      style: styles.actions,
	      onTouchTap: this._handleCancelTouchTap })];

	    if (!this.props.autoOk) {
	      actions.push(React.createElement(FlatButton, {
	        key: 1,
	        label: wordings.ok,
	        secondary: true,
	        disabled: this.refs.calendar !== undefined && this.refs.calendar.isSelectedDateDisabled(),
	        style: styles.actions,
	        onTouchTap: this._handleOKTouchTap }));
	    }

	    return React.createElement(
	      Dialog,
	      _extends({}, other, {
	        ref: 'dialog',
	        style: styles.root,
	        contentStyle: styles.dialogContent,
	        bodyStyle: styles.dialogBodyContent,
	        actions: actions,
	        onDismiss: this._handleDialogDismiss,
	        onShow: this._handleDialogShow,
	        onClickAway: this._handleDialogClickAway,
	        repositionOnUpdate: false }),
	      React.createElement(Calendar, {
	        DateTimeFormat: DateTimeFormat,
	        locale: locale,
	        ref: 'calendar',
	        onDayTouchTap: this._onDayTouchTap,
	        initialDate: this.props.initialDate,
	        isActive: this.state.isCalendarActive,
	        minDate: this.props.minDate,
	        maxDate: this.props.maxDate,
	        shouldDisableDate: this.props.shouldDisableDate,
	        showYearSelector: this.props.showYearSelector,
	        mode: this.props.mode })
	    );
	  },

	  show: function show() {
	    this.refs.dialog.show();
	  },

	  dismiss: function dismiss() {
	    this.refs.dialog.dismiss();
	  },

	  _onDayTouchTap: function _onDayTouchTap() {
	    if (this.props.autoOk) {
	      setTimeout(this._handleOKTouchTap, 300);
	    }
	  },

	  _handleCancelTouchTap: function _handleCancelTouchTap() {
	    this.dismiss();
	  },

	  _handleOKTouchTap: function _handleOKTouchTap() {
	    if (this.props.onAccept && !this.refs.calendar.isSelectedDateDisabled()) {
	      this.props.onAccept(this.refs.calendar.getSelectedDate());
	    }

	    this.dismiss();
	  },

	  _handleDialogShow: function _handleDialogShow() {
	    this.setState({
	      isCalendarActive: true
	    });

	    if (this.props.onShow) this.props.onShow();
	  },

	  _handleDialogDismiss: function _handleDialogDismiss() {
	    var _this = this;

	    CssEvent.onTransitionEnd(ReactDOM.findDOMNode(this.refs.dialog), function () {
	      _this.setState({
	        isCalendarActive: false
	      });
	    });

	    if (this.props.onDismiss) this.props.onDismiss();
	  },

	  _handleDialogClickAway: function _handleDialogClickAway() {
	    var _this2 = this;

	    CssEvent.onTransitionEnd(ReactDOM.findDOMNode(this.refs.dialog), function () {
	      _this2.setState({
	        isCalendarActive: false
	      });
	    });

	    if (this.props.onClickAway) this.props.onClickAway();
	  },

	  _handleWindowKeyUp: function _handleWindowKeyUp(e) {
	    if (this.state.isCalendarActive) {
	      switch (e.keyCode) {
	        case KeyCode.ENTER:
	          this._handleOKTouchTap();
	          break;
	      }
	    }
	  }

	});

	module.exports = DatePickerDialog;


/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var WindowListenable = __webpack_require__(393);
	var DateTime = __webpack_require__(405);
	var KeyCode = __webpack_require__(350);
	var Transitions = __webpack_require__(338);
	var CalendarMonth = __webpack_require__(408);
	var CalendarYear = __webpack_require__(410);
	var CalendarToolbar = __webpack_require__(412);
	var DateDisplay = __webpack_require__(419);
	var SlideInTransitionGroup = __webpack_require__(417);
	var ClearFix = __webpack_require__(394);
	var ThemeManager = __webpack_require__(359);
	var DefaultRawTheme = __webpack_require__(357);

	var Calendar = React.createClass({
	  displayName: 'Calendar',

	  mixins: [StylePropable, WindowListenable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    DateTimeFormat: React.PropTypes.func.isRequired,
	    locale: React.PropTypes.string.isRequired,
	    disableYearSelection: React.PropTypes.bool,
	    initialDate: React.PropTypes.object,
	    isActive: React.PropTypes.bool,
	    minDate: React.PropTypes.object,
	    maxDate: React.PropTypes.object,
	    onDayTouchTap: React.PropTypes.func,
	    shouldDisableDate: React.PropTypes.func
	  },

	  windowListeners: {
	    'keydown': '_handleWindowKeyDown'
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disableYearSelection: false,
	      initialDate: new Date(),
	      minDate: DateTime.addYears(new Date(), -100),
	      maxDate: DateTime.addYears(new Date(), 100)
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
	      displayDate: DateTime.getFirstDayOfMonth(this.props.initialDate),
	      displayMonthDay: true,
	      selectedDate: this.props.initialDate,
	      transitionDirection: 'left',
	      transitionEnter: true
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    if (nextProps.initialDate !== this.props.initialDate) {
	      var d = nextProps.initialDate || new Date();
	      this.setState({
	        displayDate: DateTime.getFirstDayOfMonth(d),
	        selectedDate: d
	      });
	    }
	  },

	  render: function render() {
	    var yearCount = DateTime.yearDiff(this.props.maxDate, this.props.minDate) + 1;
	    var weekCount = DateTime.getWeekArray(this.state.displayDate).length;
	    var toolbarInteractions = this._getToolbarInteractions();
	    var isLandscape = this.props.mode === 'landscape';
	    var styles = {
	      root: {
	        fontSize: 12
	      },
	      calendarContainer: {
	        width: isLandscape ? 320 : '100%',
	        height: weekCount === 5 ? 284 : weekCount === 6 ? 324 : 244,
	        float: isLandscape ? 'right' : 'none',
	        transition: Transitions.easeOut('150ms', 'height'),
	        overflow: 'hidden'
	      },
	      yearContainer: {
	        width: 280,
	        overflow: 'hidden',
	        height: yearCount < 6 ? yearCount * 56 + 10 : weekCount === 5 ? 284 : weekCount === 6 ? 324 : 244,
	        float: isLandscape ? 'right' : 'none'
	      },
	      dateDisplay: {
	        width: isLandscape ? 120 : '',
	        height: isLandscape ? weekCount === 5 ? 238 : weekCount === 6 ? 278 : 198 : '100%',
	        float: isLandscape ? 'left' : 'none'
	      },
	      weekTitle: {
	        padding: '0 14px',
	        lineHeight: '12px',
	        opacity: '0.5',
	        height: 12,
	        fontWeight: '500',
	        margin: 0
	      },
	      weekTitleDay: {
	        listStyle: 'none',
	        float: 'left',
	        width: 37,
	        textAlign: 'center',
	        margin: '0 2px'
	      }
	    };

	    var weekTitleDayStyle = this.prepareStyles(styles.weekTitleDay);
	    var _props = this.props;
	    var DateTimeFormat = _props.DateTimeFormat;
	    var locale = _props.locale;

	    return React.createElement(
	      ClearFix,
	      { style: this.mergeStyles(styles.root) },
	      React.createElement(DateDisplay, {
	        DateTimeFormat: DateTimeFormat,
	        locale: locale,
	        disableYearSelection: this.props.disableYearSelection,
	        style: styles.dateDisplay,
	        selectedDate: this.state.selectedDate,
	        handleMonthDayClick: this._handleMonthDayClick,
	        handleYearClick: this._handleYearClick,
	        monthDaySelected: this.state.displayMonthDay,
	        mode: this.props.mode,
	        weekCount: weekCount }),
	      this.state.displayMonthDay && React.createElement(
	        'div',
	        { style: this.prepareStyles(styles.calendarContainer) },
	        React.createElement(CalendarToolbar, {
	          DateTimeFormat: DateTimeFormat,
	          locale: locale,
	          displayDate: this.state.displayDate,
	          onMonthChange: this._handleMonthChange,
	          prevMonth: toolbarInteractions.prevMonth,
	          nextMonth: toolbarInteractions.nextMonth }),
	        React.createElement(
	          ClearFix,
	          {
	            elementType: 'ul',
	            style: styles.weekTitle },
	          React.createElement(
	            'li',
	            { style: weekTitleDayStyle },
	            'S'
	          ),
	          React.createElement(
	            'li',
	            { style: weekTitleDayStyle },
	            'M'
	          ),
	          React.createElement(
	            'li',
	            { style: weekTitleDayStyle },
	            'T'
	          ),
	          React.createElement(
	            'li',
	            { style: weekTitleDayStyle },
	            'W'
	          ),
	          React.createElement(
	            'li',
	            { style: weekTitleDayStyle },
	            'T'
	          ),
	          React.createElement(
	            'li',
	            { style: weekTitleDayStyle },
	            'F'
	          ),
	          React.createElement(
	            'li',
	            { style: weekTitleDayStyle },
	            'S'
	          )
	        ),
	        React.createElement(
	          SlideInTransitionGroup,
	          {
	            direction: this.state.transitionDirection },
	          React.createElement(CalendarMonth, {
	            key: this.state.displayDate.toDateString(),
	            ref: 'calendar',
	            displayDate: this.state.displayDate,
	            onDayTouchTap: this._handleDayTouchTap,
	            selectedDate: this.state.selectedDate,
	            minDate: this.props.minDate,
	            maxDate: this.props.maxDate,
	            shouldDisableDate: this.props.shouldDisableDate })
	        )
	      ),
	      !this.state.displayMonthDay && React.createElement(
	        'div',
	        { style: this.prepareStyles(styles.yearContainer) },
	        this._yearSelector()
	      )
	    );
	  },

	  _yearSelector: function _yearSelector() {
	    if (this.props.disableYearSelection) return;

	    return React.createElement(CalendarYear, {
	      key: 'years',
	      displayDate: this.state.displayDate,
	      onYearTouchTap: this._handleYearTouchTap,
	      selectedDate: this.state.selectedDate,
	      minDate: this.props.minDate,
	      maxDate: this.props.maxDate });
	  },

	  getSelectedDate: function getSelectedDate() {
	    return this.state.selectedDate;
	  },

	  isSelectedDateDisabled: function isSelectedDateDisabled() {
	    return this.refs.calendar.isSelectedDateDisabled();
	  },

	  _addSelectedDays: function _addSelectedDays(days) {
	    this._setSelectedDate(DateTime.addDays(this.state.selectedDate, days));
	  },

	  _addSelectedMonths: function _addSelectedMonths(months) {
	    this._setSelectedDate(DateTime.addMonths(this.state.selectedDate, months));
	  },

	  _addSelectedYears: function _addSelectedYears(years) {
	    this._setSelectedDate(DateTime.addYears(this.state.selectedDate, years));
	  },

	  _setDisplayDate: function _setDisplayDate(d, newSelectedDate) {
	    var newDisplayDate = DateTime.getFirstDayOfMonth(d);
	    var direction = newDisplayDate > this.state.displayDate ? 'left' : 'right';

	    if (newDisplayDate !== this.state.displayDate) {
	      this.setState({
	        displayDate: newDisplayDate,
	        transitionDirection: direction,
	        selectedDate: newSelectedDate || this.state.selectedDate
	      });
	    }
	  },

	  _setSelectedDate: function _setSelectedDate(date) {
	    var adjustedDate = date;
	    if (DateTime.isBeforeDate(date, this.props.minDate)) {
	      adjustedDate = this.props.minDate;
	    } else if (DateTime.isAfterDate(date, this.props.maxDate)) {
	      adjustedDate = this.props.maxDate;
	    }

	    var newDisplayDate = DateTime.getFirstDayOfMonth(adjustedDate);
	    if (newDisplayDate !== this.state.displayDate) {
	      this._setDisplayDate(newDisplayDate, adjustedDate);
	    } else {
	      this.setState({
	        selectedDate: adjustedDate
	      });
	    }
	  },

	  _handleDayTouchTap: function _handleDayTouchTap(e, date) {
	    this._setSelectedDate(date);
	    if (this.props.onDayTouchTap) this.props.onDayTouchTap(e, date);
	  },

	  _handleMonthChange: function _handleMonthChange(months) {
	    this.setState({ displayDate: DateTime.addMonths(this.state.displayDate, months) });
	  },

	  _handleYearTouchTap: function _handleYearTouchTap(e, year) {
	    var date = DateTime.clone(this.state.selectedDate);
	    date.setFullYear(year);
	    this._setSelectedDate(date, e);
	  },

	  _getToolbarInteractions: function _getToolbarInteractions() {
	    return {
	      prevMonth: DateTime.monthDiff(this.state.displayDate, this.props.minDate) > 0,
	      nextMonth: DateTime.monthDiff(this.state.displayDate, this.props.maxDate) < 0
	    };
	  },

	  _handleMonthDayClick: function _handleMonthDayClick() {
	    this.setState({
	      displayMonthDay: true
	    });
	  },

	  _handleYearClick: function _handleYearClick() {
	    this.setState({
	      displayMonthDay: false
	    });
	  },

	  _handleWindowKeyDown: function _handleWindowKeyDown(e) {
	    if (this.props.isActive) {

	      switch (e.keyCode) {
	        case KeyCode.UP:
	          if (e.altKey && e.shiftKey) {
	            this._addSelectedYears(-1);
	          } else if (e.shiftKey) {
	            this._addSelectedMonths(-1);
	          } else {
	            this._addSelectedDays(-7);
	          }
	          break;

	        case KeyCode.DOWN:
	          if (e.altKey && e.shiftKey) {
	            this._addSelectedYears(1);
	          } else if (e.shiftKey) {
	            this._addSelectedMonths(1);
	          } else {
	            this._addSelectedDays(7);
	          }
	          break;

	        case KeyCode.RIGHT:
	          if (e.altKey && e.shiftKey) {
	            this._addSelectedYears(1);
	          } else if (e.shiftKey) {
	            this._addSelectedMonths(1);
	          } else {
	            this._addSelectedDays(1);
	          }
	          break;

	        case KeyCode.LEFT:
	          if (e.altKey && e.shiftKey) {
	            this._addSelectedYears(-1);
	          } else if (e.shiftKey) {
	            this._addSelectedMonths(-1);
	          } else {
	            this._addSelectedDays(-1);
	          }
	          break;
	      }
	    }
	  }

	});

	module.exports = Calendar;


/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var DateTime = __webpack_require__(405);
	var DayButton = __webpack_require__(409);
	var ClearFix = __webpack_require__(394);

	var CalendarMonth = React.createClass({
	  displayName: 'CalendarMonth',

	  propTypes: {
	    displayDate: React.PropTypes.object.isRequired,
	    selectedDate: React.PropTypes.object.isRequired,
	    autoOk: React.PropTypes.bool,
	    maxDate: React.PropTypes.object,
	    minDate: React.PropTypes.object,
	    onDayTouchTap: React.PropTypes.func,
	    shouldDisableDate: React.PropTypes.func
	  },

	  render: function render() {
	    var styles = {
	      lineHeight: '32px',
	      textAlign: 'center',
	      padding: '16px 14px 0 14px'
	    };

	    return React.createElement(
	      'div',
	      { style: styles },
	      this._getWeekElements()
	    );
	  },

	  isSelectedDateDisabled: function isSelectedDateDisabled() {
	    return this._selectedDateDisabled;
	  },

	  _getWeekElements: function _getWeekElements() {
	    var _this = this;

	    var weekArray = DateTime.getWeekArray(this.props.displayDate);

	    return weekArray.map(function (week, i) {
	      return React.createElement(
	        ClearFix,
	        { key: i },
	        _this._getDayElements(week, i)
	      );
	    }, this);
	  },

	  _getDayElements: function _getDayElements(week, i) {
	    var _this2 = this;

	    return week.map(function (day, j) {
	      var isSameDate = DateTime.isEqualDate(_this2.props.selectedDate, day);
	      var disabled = _this2._shouldDisableDate(day);
	      var selected = !disabled && isSameDate;

	      if (isSameDate) {
	        if (disabled) {
	          _this2._selectedDateDisabled = true;
	        } else {
	          _this2._selectedDateDisabled = false;
	        }
	      }

	      return React.createElement(DayButton, {
	        key: 'db' + i + j,
	        date: day,
	        onTouchTap: _this2._handleDayTouchTap,
	        selected: selected,
	        disabled: disabled });
	    }, this);
	  },

	  _handleDayTouchTap: function _handleDayTouchTap(e, date) {
	    if (this.props.onDayTouchTap) this.props.onDayTouchTap(e, date);
	  },

	  _shouldDisableDate: function _shouldDisableDate(day) {
	    if (day === null) return false;
	    var disabled = !DateTime.isBetweenDates(day, this.props.minDate, this.props.maxDate);
	    if (!disabled && this.props.shouldDisableDate) disabled = this.props.shouldDisableDate(day);

	    return disabled;
	  }

	});

	module.exports = CalendarMonth;


/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var Transition = __webpack_require__(338);
	var DateTime = __webpack_require__(405);
	var EnhancedButton = __webpack_require__(342);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var DayButton = React.createClass({
	  displayName: 'DayButton',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    date: React.PropTypes.object,
	    onTouchTap: React.PropTypes.func,
	    selected: React.PropTypes.bool,
	    disabled: React.PropTypes.bool
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      selected: false,
	      disabled: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      hover: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.datePicker;
	  },

	  render: function render() {
	    var _props = this.props;
	    var date = _props.date;
	    var onTouchTap = _props.onTouchTap;
	    var selected = _props.selected;

	    var other = _objectWithoutProperties(_props, ['date', 'onTouchTap', 'selected']);

	    var styles = {
	      root: {
	        boxSizing: 'border-box',
	        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	        position: 'relative',
	        float: 'left',
	        width: 41,
	        padding: '4px 2px'
	      },

	      label: {
	        position: 'relative',
	        color: this.state.muiTheme.rawTheme.palette.textColor
	      },

	      buttonState: {
	        position: 'absolute',
	        height: 36,
	        width: 36,
	        top: 2,
	        opacity: 0,
	        borderRadius: '50%',
	        transform: 'scale(0)',
	        transition: Transition.easeOut(),
	        backgroundColor: this.getTheme().selectColor
	      }
	    };

	    if (this.state.hover) {
	      styles.label.color = this.getTheme().selectTextColor;
	      styles.buttonState.opacity = '0.6';
	      styles.buttonState.transform = 'scale(1)';
	    }

	    if (this.props.selected) {
	      styles.label.color = this.getTheme().selectTextColor;
	      styles.buttonState.opacity = 1;
	      styles.buttonState.transform = 'scale(1)';
	    } else if (this.props.disabled) {
	      styles.root.opacity = '0.6';
	    }

	    if (DateTime.isEqualDate(this.props.date, new Date()) && !this.props.selected) {
	      styles.label.color = this.getTheme().color;
	    }

	    return this.props.date ? React.createElement(
	      EnhancedButton,
	      _extends({}, other, {
	        style: styles.root,
	        hoverStyle: styles.hover,
	        disabled: this.props.disabled,
	        disableFocusRipple: true,
	        disableTouchRipple: true,
	        onMouseEnter: this._handleMouseEnter,
	        onMouseLeave: this._handleMouseLeave,
	        onTouchTap: this._handleTouchTap,
	        onKeyboardFocus: this._handleKeyboardFocus }),
	      React.createElement('div', { style: this.prepareStyles(styles.buttonState) }),
	      React.createElement(
	        'span',
	        { style: this.prepareStyles(styles.label) },
	        this.props.date.getDate()
	      )
	    ) : React.createElement('span', { style: this.prepareStyles(styles.root) });
	  },

	  _handleMouseEnter: function _handleMouseEnter() {
	    if (!this.props.disabled) this.setState({ hover: true });
	  },

	  _handleMouseLeave: function _handleMouseLeave() {
	    if (!this.props.disabled) this.setState({ hover: false });
	  },

	  _handleTouchTap: function _handleTouchTap(e) {
	    if (!this.props.disabled && this.props.onTouchTap) this.props.onTouchTap(e, this.props.date);
	  },

	  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
	    if (!this.props.disabled && this.props.onKeyboardFocus) this.props.onKeyboardFocus(e, keyboardFocused, this.props.date);
	  }

	});

	module.exports = DayButton;


/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var StylePropable = __webpack_require__(330);
	var Colors = __webpack_require__(341);
	var DateTime = __webpack_require__(405);
	var YearButton = __webpack_require__(411);

	var CalendarYear = React.createClass({
	  displayName: 'CalendarYear',

	  mixins: [StylePropable],

	  propTypes: {
	    displayDate: React.PropTypes.object.isRequired,
	    onYearTouchTap: React.PropTypes.func,
	    selectedDate: React.PropTypes.object.isRequired,
	    minDate: React.PropTypes.object,
	    maxDate: React.PropTypes.object
	  },

	  componentDidMount: function componentDidMount() {
	    this._scrollToSelectedYear();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._scrollToSelectedYear();
	  },

	  render: function render() {
	    var years = this._getYears();
	    var styles = {
	      position: 'relative',
	      height: 'inherit',
	      lineHeight: '36px',
	      textAlign: 'center',
	      padding: '8px 14px 0 14px',
	      backgroundColor: Colors.white,
	      overflowX: 'hidden',
	      overflowY: 'scroll'
	    };

	    return React.createElement(
	      'div',
	      { style: styles },
	      years
	    );
	  },

	  _getYears: function _getYears() {
	    var minYear = this.props.minDate.getFullYear();
	    var maxYear = this.props.maxDate.getFullYear();

	    var years = [];
	    var dateCheck = DateTime.clone(this.props.selectedDate);
	    for (var year = minYear; year <= maxYear; year++) {
	      dateCheck.setFullYear(year);
	      if (!DateTime.isBetweenDates(dateCheck, this.props.minDate, this.props.maxDate)) continue;
	      var selected = this.props.selectedDate.getFullYear() === year;
	      var selectedProps = {};
	      if (selected) {
	        selectedProps = { ref: 'selectedYearButton' };
	      }

	      var yearButton = React.createElement(YearButton, _extends({
	        key: 'yb' + year,
	        year: year,
	        onTouchTap: this._handleYearTouchTap,
	        selected: selected
	      }, selectedProps));

	      years.push(yearButton);
	    }

	    return years;
	  },

	  _scrollToSelectedYear: function _scrollToSelectedYear() {
	    if (this.refs.selectedYearButton === undefined) return;

	    var container = ReactDOM.findDOMNode(this);
	    var yearButtonNode = ReactDOM.findDOMNode(this.refs.selectedYearButton);

	    var containerHeight = container.clientHeight;
	    var yearButtonNodeHeight = yearButtonNode.clientHeight || 32;

	    var scrollYOffset = yearButtonNode.offsetTop + yearButtonNodeHeight / 2 - containerHeight / 2;
	    container.scrollTop = scrollYOffset;
	  },

	  _handleYearTouchTap: function _handleYearTouchTap(e, year) {
	    if (this.props.onYearTouchTap) this.props.onYearTouchTap(e, year);
	  }

	});

	module.exports = CalendarYear;


/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var EnhancedButton = __webpack_require__(342);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var YearButton = React.createClass({
	  displayName: 'YearButton',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    year: React.PropTypes.number,
	    onTouchTap: React.PropTypes.func,
	    selected: React.PropTypes.bool
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      selected: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      hover: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.datePicker;
	  },

	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var year = _props.year;
	    var onTouchTap = _props.onTouchTap;
	    var selected = _props.selected;

	    var other = _objectWithoutProperties(_props, ['className', 'year', 'onTouchTap', 'selected']);

	    var styles = {
	      root: {
	        boxSizing: 'border-box',
	        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	        position: 'relative',
	        display: 'block',
	        margin: '0 auto',
	        width: 36,
	        fontSize: 14,
	        padding: '8px 2px'
	      },

	      label: {
	        position: 'relative',
	        top: -1,
	        color: this.state.muiTheme.rawTheme.palette.textColor
	      },

	      buttonState: {
	        position: 'absolute',
	        height: 32,
	        width: 32,
	        opacity: 0,
	        borderRadius: '50%',
	        transform: 'scale(0)',
	        backgroundColor: this.getTheme().selectColor
	      }
	    };

	    if (this.state.hover) {
	      styles.label.color = this.getTheme().selectTextColor;
	      styles.buttonState.opacity = 0.6;
	      styles.buttonState.transform = 'scale(1.5)';
	    }

	    if (selected) {
	      styles.label.color = this.getTheme().selectTextColor;
	      styles.buttonState.opacity = 1;
	      styles.buttonState.transform = 'scale(1.5)';
	    }

	    if (year === new Date().getFullYear()) {
	      styles.root.color = this.getTheme().color;
	    }

	    return React.createElement(
	      EnhancedButton,
	      _extends({}, other, {
	        style: styles.root,
	        disableFocusRipple: true,
	        disableTouchRipple: true,
	        onMouseEnter: this._handleMouseEnter,
	        onMouseLeave: this._handleMouseLeave,
	        onTouchTap: this._handleTouchTap }),
	      React.createElement('div', { style: this.prepareStyles(styles.buttonState) }),
	      React.createElement(
	        'span',
	        { style: this.prepareStyles(styles.label) },
	        year
	      )
	    );
	  },

	  _handleMouseEnter: function _handleMouseEnter() {
	    this.setState({ hover: true });
	  },

	  _handleMouseLeave: function _handleMouseLeave() {
	    this.setState({ hover: false });
	  },

	  _handleTouchTap: function _handleTouchTap(e) {
	    if (this.props.onTouchTap) this.props.onTouchTap(e, this.props.year);
	  }

	});

	module.exports = YearButton;


/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var IconButton = __webpack_require__(376);
	var Toolbar = __webpack_require__(413);
	var ToolbarGroup = __webpack_require__(414);
	var NavigationChevronLeft = __webpack_require__(415);
	var NavigationChevronRight = __webpack_require__(416);
	var SlideInTransitionGroup = __webpack_require__(417);
	var ThemeManager = __webpack_require__(359);
	var DefaultRawTheme = __webpack_require__(357);

	var styles = {
	  root: {
	    position: 'relative',
	    padding: 0,
	    backgroundColor: 'inherit'
	  },
	  title: {
	    position: 'absolute',
	    top: 17,
	    lineHeight: '14px',
	    fontSize: 14,
	    height: 14,
	    width: '100%',
	    fontWeight: '500',
	    textAlign: 'center'
	  }
	};

	var CalendarToolbar = React.createClass({
	  displayName: 'CalendarToolbar',

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    DateTimeFormat: React.PropTypes.func.isRequired,
	    locale: React.PropTypes.string.isRequired,
	    displayDate: React.PropTypes.object.isRequired,
	    nextMonth: React.PropTypes.bool,
	    onMonthChange: React.PropTypes.func,
	    prevMonth: React.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      nextMonth: true,
	      prevMonth: true
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
	      transitionDirection: 'up'
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    var direction = undefined;

	    if (nextProps.displayDate !== this.props.displayDate) {
	      direction = nextProps.displayDate > this.props.displayDate ? 'up' : 'down';
	      this.setState({
	        transitionDirection: direction
	      });
	    }
	  },

	  render: function render() {
	    var _props = this.props;
	    var DateTimeFormat = _props.DateTimeFormat;
	    var locale = _props.locale;
	    var displayDate = _props.displayDate;

	    var dateTimeFormatted = new DateTimeFormat(locale, {
	      month: 'long',
	      year: 'numeric'
	    }).format(displayDate);

	    var nextButtonIcon = this.state.muiTheme.isRtl ? React.createElement(NavigationChevronRight, null) : React.createElement(NavigationChevronLeft, null);
	    var prevButtonIcon = this.state.muiTheme.isRtl ? React.createElement(NavigationChevronLeft, null) : React.createElement(NavigationChevronRight, null);

	    return React.createElement(
	      Toolbar,
	      { className: 'mui-date-picker-calendar-toolbar', style: styles.root, noGutter: true },
	      React.createElement(
	        SlideInTransitionGroup,
	        {
	          style: styles.title,
	          direction: this.state.transitionDirection },
	        React.createElement(
	          'div',
	          { key: dateTimeFormatted },
	          dateTimeFormatted
	        )
	      ),
	      React.createElement(
	        ToolbarGroup,
	        { key: 0, float: 'left' },
	        React.createElement(
	          IconButton,
	          {
	            style: styles.button,
	            disabled: !this.props.prevMonth,
	            onTouchTap: this._prevMonthTouchTap },
	          nextButtonIcon
	        )
	      ),
	      React.createElement(
	        ToolbarGroup,
	        { key: 1, float: 'right' },
	        React.createElement(
	          IconButton,
	          {
	            style: styles.button,
	            disabled: !this.props.nextMonth,
	            onTouchTap: this._nextMonthTouchTap },
	          prevButtonIcon
	        )
	      )
	    );
	  },

	  _prevMonthTouchTap: function _prevMonthTouchTap() {
	    if (this.props.onMonthChange && this.props.prevMonth) this.props.onMonthChange(-1);
	  },

	  _nextMonthTouchTap: function _nextMonthTouchTap() {
	    if (this.props.onMonthChange && this.props.nextMonth) this.props.onMonthChange(1);
	  }

	});

	module.exports = CalendarToolbar;


/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var Toolbar = React.createClass({
	  displayName: 'Toolbar',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    className: React.PropTypes.string,
	    style: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.toolbar;
	  },

	  getStyles: function getStyles() {
	    return this.mergeStyles({
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	      backgroundColor: this.getTheme().backgroundColor,
	      height: this.getTheme().height,
	      width: '100%',
	      padding: this.props.noGutter ? 0 : '0px ' + this.state.muiTheme.rawTheme.spacing.desktopGutter + 'px'
	    }, this.props.style);
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: this.props.className, style: this.prepareStyles(this.getStyles()) },
	      this.props.children
	    );
	  }

	});

	module.exports = Toolbar;


/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var Colors = __webpack_require__(341);
	var StylePropable = __webpack_require__(330);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var ToolbarGroup = React.createClass({
	  displayName: 'ToolbarGroup',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    className: React.PropTypes.string,
	    float: React.PropTypes.string
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      float: 'left'
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.toolbar;
	  },

	  getSpacing: function getSpacing() {
	    return this.state.muiTheme.rawTheme.spacing.desktopGutter;
	  },

	  getStyles: function getStyles() {
	    var marginHorizontal = this.getSpacing();
	    var marginVertical = (this.getTheme().height - this.state.muiTheme.button.height) / 2;
	    var styles = {
	      root: {
	        position: 'relative',
	        float: this.props.float
	      },
	      dropDownMenu: {
	        root: {
	          float: 'left',
	          color: Colors.lightBlack, // removes hover color change, we want to keep it
	          display: 'inline-block',
	          marginRight: this.getSpacing()
	        },
	        controlBg: {
	          backgroundColor: this.getTheme().menuHoverColor,
	          borderRadius: 0
	        },
	        underline: {
	          display: 'none'
	        }
	      },
	      button: {
	        float: 'left',
	        margin: marginVertical + 'px ' + marginHorizontal + 'px',
	        position: 'relative'
	      },
	      icon: {
	        root: {
	          float: 'left',
	          cursor: 'pointer',
	          color: this.getTheme().iconColor,
	          lineHeight: this.getTheme().height + 'px',
	          paddingLeft: this.getSpacing()
	        },
	        hover: {
	          color: Colors.darkBlack
	        }
	      },
	      span: {
	        float: 'left',
	        color: this.getTheme().iconColor,
	        lineHeight: this.getTheme().height + 'px'
	      }
	    };

	    return styles;
	  },

	  render: function render() {
	    var _this = this;

	    var styles = this.getStyles();

	    if (this.props.firstChild) styles.marginLeft = -24;
	    if (this.props.lastChild) styles.marginRight = -24;

	    var newChildren = React.Children.map(this.props.children, function (currentChild) {
	      if (!currentChild) {
	        return null;
	      }
	      if (!currentChild.type) {
	        return currentChild;
	      }
	      switch (currentChild.type.displayName) {
	        case 'DropDownMenu':
	          return React.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.dropDownMenu.root, currentChild.props.style),
	            styleControlBg: styles.dropDownMenu.controlBg,
	            styleUnderline: styles.dropDownMenu.underline
	          });
	        case 'DropDownIcon':
	          return React.cloneElement(currentChild, {
	            style: _this.mergeStyles({ float: 'left' }, currentChild.props.style),
	            iconStyle: styles.icon.root,
	            onMouseEnter: _this._handleMouseEnterDropDownMenu,
	            onMouseLeave: _this._handleMouseLeaveDropDownMenu
	          });
	        case 'RaisedButton':case 'FlatButton':
	          return React.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.button, currentChild.props.style)
	          });
	        case 'FontIcon':
	          return React.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.icon.root, currentChild.props.style),
	            onMouseEnter: _this._handleMouseEnterFontIcon,
	            onMouseLeave: _this._handleMouseLeaveFontIcon
	          });
	        case 'ToolbarSeparator':case 'ToolbarTitle':
	          return React.cloneElement(currentChild, {
	            style: _this.mergeStyles(styles.span, currentChild.props.style)
	          });
	        default:
	          return currentChild;
	      }
	    }, this);

	    return React.createElement(
	      'div',
	      { className: this.props.className, style: this.prepareStyles(styles.root, this.props.style) },
	      newChildren
	    );
	  },

	  _handleMouseEnterDropDownMenu: function _handleMouseEnterDropDownMenu(e) {
	    e.target.style.zIndex = this.getStyles().icon.hover.zIndex;
	    e.target.style.color = this.getStyles().icon.hover.color;
	  },

	  _handleMouseLeaveDropDownMenu: function _handleMouseLeaveDropDownMenu(e) {
	    e.target.style.zIndex = 'auto';
	    e.target.style.color = this.getStyles().icon.root.color;
	  },

	  _handleMouseEnterFontIcon: function _handleMouseEnterFontIcon(e) {
	    e.target.style.zIndex = this.getStyles().icon.hover.zIndex;
	    e.target.style.color = this.getStyles().icon.hover.color;
	  },

	  _handleMouseLeaveFontIcon: function _handleMouseLeaveFontIcon(e) {
	    e.target.style.zIndex = 'auto';
	    e.target.style.color = this.getStyles().icon.root.color;
	  }
	});

	module.exports = ToolbarGroup;


/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var SvgIcon = __webpack_require__(380);

	var NavigationChevronLeft = React.createClass({
	  displayName: 'NavigationChevronLeft',

	  mixins: [PureRenderMixin],

	  render: function render() {
	    return React.createElement(
	      SvgIcon,
	      this.props,
	      React.createElement('path', { d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' })
	    );
	  }

	});

	module.exports = NavigationChevronLeft;


/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var SvgIcon = __webpack_require__(380);

	var NavigationChevronRight = React.createClass({
	  displayName: 'NavigationChevronRight',

	  mixins: [PureRenderMixin],

	  render: function render() {
	    return React.createElement(
	      SvgIcon,
	      this.props,
	      React.createElement('path', { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' })
	    );
	  }

	});

	module.exports = NavigationChevronRight;


/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactTransitionGroup = __webpack_require__(353);
	var StylePropable = __webpack_require__(330);
	var SlideInChild = __webpack_require__(418);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var SlideIn = React.createClass({
	  displayName: 'SlideIn',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  propTypes: {
	    enterDelay: React.PropTypes.number,
	    childStyle: React.PropTypes.object,
	    direction: React.PropTypes.oneOf(['left', 'right', 'up', 'down'])
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0,
	      direction: 'left'
	    };
	  },

	  render: function render() {
	    var _this = this;

	    var _props = this.props;
	    var enterDelay = _props.enterDelay;
	    var children = _props.children;
	    var childStyle = _props.childStyle;
	    var direction = _props.direction;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['enterDelay', 'children', 'childStyle', 'direction', 'style']);

	    var mergedRootStyles = this.prepareStyles({
	      position: 'relative',
	      overflow: 'hidden',
	      height: '100%'
	    }, style);

	    var newChildren = React.Children.map(children, function (child) {
	      return React.createElement(
	        SlideInChild,
	        {
	          key: child.key,
	          direction: direction,
	          enterDelay: enterDelay,
	          getLeaveDirection: _this._getLeaveDirection,
	          style: childStyle },
	        child
	      );
	    }, this);

	    return React.createElement(
	      ReactTransitionGroup,
	      _extends({}, other, {
	        style: mergedRootStyles,
	        component: 'div' }),
	      newChildren
	    );
	  },

	  _getLeaveDirection: function _getLeaveDirection() {
	    return this.props.direction;
	  }

	});

	module.exports = SlideIn;


/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var StylePropable = __webpack_require__(330);
	var AutoPrefix = __webpack_require__(335);
	var Transitions = __webpack_require__(338);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var SlideInChild = React.createClass({
	  displayName: 'SlideInChild',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  propTypes: {
	    enterDelay: React.PropTypes.number,
	    //This callback is needed bacause
	    //the direction could change when leaving the dom
	    getLeaveDirection: React.PropTypes.func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0
	    };
	  },

	  componentWillEnter: function componentWillEnter(callback) {
	    var _this = this;

	    var style = ReactDOM.findDOMNode(this).style;
	    var x = this.props.direction === 'left' ? '100%' : this.props.direction === 'right' ? '-100%' : '0';
	    var y = this.props.direction === 'up' ? '100%' : this.props.direction === 'down' ? '-100%' : '0';

	    style.opacity = '0';
	    AutoPrefix.set(style, 'transform', 'translate3d(' + x + ',' + y + ',0)');

	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, this.props.enterDelay);
	  },

	  componentDidEnter: function componentDidEnter() {
	    var style = ReactDOM.findDOMNode(this).style;
	    style.opacity = '1';
	    AutoPrefix.set(style, 'transform', 'translate3d(0,0,0)');
	  },

	  componentWillLeave: function componentWillLeave(callback) {
	    var _this2 = this;

	    var style = ReactDOM.findDOMNode(this).style;
	    var direction = this.props.getLeaveDirection();
	    var x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
	    var y = direction === 'up' ? '-100%' : direction === 'down' ? '100%' : '0';

	    style.opacity = '0';
	    AutoPrefix.set(style, 'transform', 'translate3d(' + x + ',' + y + ',0)');

	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, 450);
	  },

	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var enterDelay = _props.enterDelay;
	    var getLeaveDirection = _props.getLeaveDirection;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['children', 'enterDelay', 'getLeaveDirection', 'style']);

	    var mergedRootStyles = this.prepareStyles({
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      top: 0,
	      left: 0,
	      transition: Transitions.easeOut(null, ['transform', 'opacity'])
	    }, style);

	    return React.createElement(
	      'div',
	      _extends({}, other, { style: mergedRootStyles }),
	      children
	    );
	  }

	});

	module.exports = SlideInChild;


/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var SlideInTransitionGroup = __webpack_require__(417);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var DateDisplay = React.createClass({
	  displayName: 'DateDisplay',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    DateTimeFormat: React.PropTypes.func.isRequired,
	    locale: React.PropTypes.string.isRequired,
	    disableYearSelection: React.PropTypes.bool,
	    monthDaySelected: React.PropTypes.bool,
	    selectedDate: React.PropTypes.object.isRequired,
	    weekCount: React.PropTypes.number
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disableYearSelection: false,
	      monthDaySelected: true,
	      weekCount: 4
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      selectedYear: !this.props.monthDaySelected,
	      transitionDirection: 'up',
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    var direction = undefined;

	    if (nextProps.selectedDate !== this.props.selectedDate) {
	      direction = nextProps.selectedDate > this.props.selectedDate ? 'up' : 'down';
	      this.setState({
	        transitionDirection: direction
	      });
	    }

	    if (nextProps.monthDaySelected !== undefined) {
	      this.setState({ selectedYear: !nextProps.monthDaySelected });
	    }
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.datePicker;
	  },

	  getStyles: function getStyles() {
	    var theme = this.getTheme();
	    var isLandscape = this.props.mode === 'landscape';

	    var styles = {
	      root: {
	        backgroundColor: theme.selectColor,
	        borderTopLeftRadius: 2,
	        borderTopRightRadius: 2,
	        color: theme.textColor,
	        height: 60,
	        padding: 20
	      },

	      monthDay: {
	        root: {
	          display: 'inline-block',
	          fontSize: 36,
	          fontWeight: '400',
	          lineHeight: '36px',
	          height: isLandscape ? 76 : 38,
	          opacity: this.state.selectedYear ? 0.7 : 1.0,
	          transition: Transitions.easeOut(),
	          width: '100%'
	        },

	        title: {
	          cursor: !this.state.selectedYear ? 'default' : 'pointer'
	        }
	      },

	      year: {
	        root: {
	          margin: 0,
	          fontSize: 16,
	          fontWeight: '400',
	          lineHeight: '16px',
	          height: 16,
	          opacity: this.state.selectedYear ? 1.0 : 0.7,
	          transition: Transitions.easeOut(),
	          marginBottom: 10
	        },

	        title: {
	          cursor: this.state.selectedYear && !this.props.disableYearSelection ? 'pointer' : 'default'
	        }
	      }
	    };

	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var DateTimeFormat = _props.DateTimeFormat;
	    var locale = _props.locale;
	    var selectedDate = _props.selectedDate;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['DateTimeFormat', 'locale', 'selectedDate', 'style']);

	    var year = this.props.selectedDate.getFullYear();
	    var styles = this.getStyles();

	    var dateTimeFormatted = new DateTimeFormat(locale, {
	      month: 'short',
	      weekday: 'short',
	      day: '2-digit'
	    }).format(this.props.selectedDate);

	    return React.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(styles.root, this.props.style) }),
	      React.createElement(
	        SlideInTransitionGroup,
	        {
	          style: styles.year.root,
	          direction: this.state.transitionDirection },
	        React.createElement(
	          'div',
	          { key: year, style: styles.year.title, onTouchTap: this._handleYearClick },
	          year
	        )
	      ),
	      React.createElement(
	        SlideInTransitionGroup,
	        {
	          style: styles.monthDay.root,
	          direction: this.state.transitionDirection },
	        React.createElement(
	          'div',
	          {
	            key: dateTimeFormatted,
	            style: styles.monthDay.title,
	            onTouchTap: this._handleMonthDayClick },
	          dateTimeFormatted
	        )
	      )
	    );
	  },

	  _handleMonthDayClick: function _handleMonthDayClick() {
	    if (this.props.handleMonthDayClick && this.state.selectedYear) {
	      this.props.handleMonthDayClick();
	    }

	    this.setState({ selectedYear: false });
	  },

	  _handleYearClick: function _handleYearClick() {
	    if (this.props.handleYearClick && !this.props.disableYearSelection && !this.state.selectedYear) {
	      this.props.handleYearClick();
	    }

	    if (!this.props.disableYearSelection) {
	      this.setState({ selectedYear: true });
	    }
	  }

	});

	module.exports = DateDisplay;


/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var WindowListenable = __webpack_require__(393);
	var CssEvent = __webpack_require__(386);
	var KeyCode = __webpack_require__(350);
	var Transitions = __webpack_require__(338);
	var StylePropable = __webpack_require__(330);
	var FlatButton = __webpack_require__(366);
	var Overlay = __webpack_require__(421);
	var Paper = __webpack_require__(364);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var ReactTransitionGroup = __webpack_require__(353);

	var TransitionItem = React.createClass({
	  displayName: 'TransitionItem',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      style: {},
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  componentWillEnter: function componentWillEnter(callback) {
	    var spacing = this.state.muiTheme.rawTheme.spacing;

	    this.setState({
	      style: {
	        opacity: 1,
	        transform: 'translate3d(0, ' + spacing.desktopKeylineIncrement + 'px, 0)'
	      }
	    });

	    setTimeout(callback, 450); // matches transition duration
	  },

	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;

	    this.setState({
	      style: {
	        opacity: 0,
	        transform: 'translate3d(0, 0, 0)'
	      }
	    });

	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 450); // matches transition duration
	  },

	  render: function render() {
	    var _props = this.props;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['style']);

	    return React.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(this.state.style, style) }),
	      this.props.children
	    );
	  }
	});

	var Dialog = React.createClass({
	  displayName: 'Dialog',

	  mixins: [WindowListenable, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    actions: React.PropTypes.array,
	    autoDetectWindowHeight: React.PropTypes.bool,
	    autoScrollBodyContent: React.PropTypes.bool,
	    bodyStyle: React.PropTypes.object,
	    contentClassName: React.PropTypes.string,
	    contentStyle: React.PropTypes.object,
	    modal: React.PropTypes.bool,
	    openImmediately: React.PropTypes.bool,
	    onClickAway: React.PropTypes.func,
	    onDismiss: React.PropTypes.func,
	    onShow: React.PropTypes.func,
	    repositionOnUpdate: React.PropTypes.bool,
	    title: React.PropTypes.node
	  },

	  windowListeners: {
	    keyup: '_handleWindowKeyUp',
	    resize: '_positionDialog'
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      autoDetectWindowHeight: false,
	      autoScrollBodyContent: false,
	      actions: [],
	      modal: false,
	      repositionOnUpdate: true
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      open: this.props.openImmediately || false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  componentDidMount: function componentDidMount() {
	    this._positionDialog();
	    if (this.props.openImmediately) {
	      this.refs.dialogOverlay.preventScrolling();
	      this._onShow();
	    }
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._positionDialog();
	  },

	  getStyles: function getStyles() {
	    var spacing = this.state.muiTheme.rawTheme.spacing;

	    var main = {
	      position: 'fixed',
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	      zIndex: 10,
	      top: 0,
	      left: -10000,
	      width: '100%',
	      height: '100%',
	      transition: Transitions.easeOut('0ms', 'left', '450ms')
	    };

	    var content = {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	      transition: Transitions.easeOut(),
	      position: 'relative',
	      width: '75%',
	      maxWidth: spacing.desktopKeylineIncrement * 12,
	      margin: '0 auto',
	      zIndex: 10
	    };

	    var body = {
	      padding: spacing.desktopGutter,
	      overflowY: this.props.autoScrollBodyContent ? 'auto' : 'hidden',
	      overflowX: 'hidden'
	    };

	    var gutter = spacing.desktopGutter + 'px ';
	    var title = {
	      margin: 0,
	      padding: gutter + gutter + '0 ' + gutter,
	      color: this.state.muiTheme.rawTheme.palette.textColor,
	      fontSize: 24,
	      lineHeight: '32px',
	      fontWeight: '400'
	    };

	    if (this.state.open) {
	      main = this.mergeStyles(main, {
	        left: 0,
	        transition: Transitions.easeOut('0ms', 'left', '0ms')
	      });
	    }

	    return {
	      main: this.mergeStyles(main, this.props.style),
	      content: this.mergeStyles(content, this.props.contentStyle),
	      paper: {
	        background: this.state.muiTheme.rawTheme.palette.canvasColor
	      },
	      body: this.mergeStyles(body, this.props.bodyStyle),
	      title: this.mergeStyles(title, this.props.titleStyle)
	    };
	  },

	  render: function render() {
	    var styles = this.getStyles();
	    var actions = this._getActionsContainer(this.props.actions);
	    var title = undefined;
	    if (this.props.title) {
	      // If the title is a string, wrap in an h3 tag.
	      // If not, just use it as a node.
	      title = Object.prototype.toString.call(this.props.title) === '[object String]' ? React.createElement(
	        'h3',
	        { style: this.prepareStyles(styles.title) },
	        this.props.title
	      ) : this.props.title;
	    }

	    return React.createElement(
	      'div',
	      { ref: 'container', style: this.prepareStyles(styles.main) },
	      React.createElement(
	        ReactTransitionGroup,
	        { component: 'div', ref: 'dialogWindow' },
	        this.state.open && React.createElement(
	          TransitionItem,
	          {
	            className: this.props.contentClassName,
	            style: styles.content },
	          React.createElement(
	            Paper,
	            {
	              style: styles.paper,
	              zDepth: 4 },
	            title,
	            React.createElement(
	              'div',
	              { ref: 'dialogContent', style: this.prepareStyles(styles.body) },
	              this.props.children
	            ),
	            actions
	          )
	        )
	      ),
	      React.createElement(Overlay, {
	        ref: 'dialogOverlay',
	        show: this.state.open,
	        autoLockScrolling: false,
	        onTouchTap: this._handleOverlayTouchTap })
	    );
	  },

	  isOpen: function isOpen() {
	    return this.state.open;
	  },

	  dismiss: function dismiss() {
	    var _this2 = this;

	    CssEvent.onTransitionEnd(ReactDOM.findDOMNode(this), function () {
	      _this2.refs.dialogOverlay.allowScrolling();
	    });

	    this.setState({ open: false });
	    this._onDismiss();
	  },

	  show: function show() {
	    this.refs.dialogOverlay.preventScrolling();
	    this.setState({ open: true }, this._onShow);
	  },

	  _getAction: function _getAction(actionJSON, key) {
	    var _this3 = this;

	    var styles = { marginRight: 8 };
	    var props = {
	      key: key,
	      secondary: true,
	      onClick: actionJSON.onClick,
	      onTouchTap: function onTouchTap() {
	        if (actionJSON.onTouchTap) {
	          actionJSON.onTouchTap.call(undefined);
	        }
	        if (!(actionJSON.onClick || actionJSON.onTouchTap)) {
	          _this3.dismiss();
	        }
	      },
	      label: actionJSON.text,
	      style: styles
	    };
	    if (actionJSON.ref) {
	      props.ref = actionJSON.ref;
	      props.keyboardFocused = actionJSON.ref === this.props.actionFocus;
	    }
	    if (actionJSON.id) {
	      props.id = actionJSON.id;
	    }

	    return React.createElement(FlatButton, props);
	  },

	  _getActionsContainer: function _getActionsContainer(actions) {
	    var actionContainer = undefined;
	    var actionObjects = [];
	    var actionStyle = {
	      boxSizing: 'border-box',
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	      padding: 8,
	      marginBottom: 8,
	      width: '100%',
	      textAlign: 'right'
	    };

	    if (actions.length) {
	      for (var i = 0; i < actions.length; i++) {
	        var currentAction = actions[i];

	        //if the current action isn't a react object, create one
	        if (!React.isValidElement(currentAction)) {
	          currentAction = this._getAction(currentAction, i);
	        }

	        actionObjects.push(currentAction);
	      }

	      actionContainer = React.createElement(
	        'div',
	        { style: this.prepareStyles(actionStyle) },
	        actionObjects
	      );
	    }

	    return actionContainer;
	  },

	  _positionDialog: function _positionDialog() {
	    if (this.state.open) {
	      var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	      var container = ReactDOM.findDOMNode(this);
	      var dialogWindow = ReactDOM.findDOMNode(this.refs.dialogWindow);
	      var dialogContent = ReactDOM.findDOMNode(this.refs.dialogContent);
	      var minPaddingTop = 16;

	      //Reset the height in case the window was resized.
	      dialogWindow.style.height = '';
	      dialogContent.style.height = '';

	      var dialogWindowHeight = dialogWindow.offsetHeight;
	      var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
	      if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;

	      //Vertically center the dialog window, but make sure it doesn't
	      //transition to that position.
	      if (this.props.repositionOnUpdate || !container.style.paddingTop) {
	        container.style.paddingTop = paddingTop + 'px';
	      }

	      // Force a height if the dialog is taller than clientHeight
	      if (this.props.autoDetectWindowHeight || this.props.autoScrollBodyContent) {
	        var styles = this.getStyles();
	        var maxDialogContentHeight = clientHeight - 2 * (styles.body.padding + 64);

	        if (this.props.title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;
	        if (this.props.actions.length) maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;

	        dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
	      }
	    }
	  },

	  _onShow: function _onShow() {
	    if (this.props.onShow) this.props.onShow();
	  },

	  _onDismiss: function _onDismiss() {
	    if (this.props.onDismiss) this.props.onDismiss();
	  },

	  _handleOverlayTouchTap: function _handleOverlayTouchTap(e) {
	    if (this.props.modal) {
	      e.stopPropagation();
	    } else {
	      this.dismiss();
	      if (this.props.onClickAway) this.props.onClickAway();
	    }
	  },

	  _handleWindowKeyUp: function _handleWindowKeyUp(e) {
	    if (e.keyCode === KeyCode.ESC && !this.props.modal) {
	      this.dismiss();
	    }
	  }

	});

	module.exports = Dialog;


/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var Colors = __webpack_require__(341);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var Overlay = React.createClass({
	  displayName: 'Overlay',

	  _originalBodyOverflow: '',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  propTypes: {
	    autoLockScrolling: React.PropTypes.bool,
	    show: React.PropTypes.bool,
	    transitionEnabled: React.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      autoLockScrolling: true,
	      transitionEnabled: true
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    this._originalBodyOverflow = document.getElementsByTagName('body')[0].style.overflow;
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.autoLockScrolling) {
	      if (this.props.show) {
	        this._preventScrolling();
	      } else {
	        this._allowScrolling();
	      }
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this._allowScrolling();
	  },

	  setOpacity: function setOpacity(opacity) {
	    var overlay = ReactDOM.findDOMNode(this);
	    overlay.style.opacity = opacity;
	  },

	  getStyles: function getStyles() {
	    var styles = {
	      root: {
	        position: 'fixed',
	        height: '100%',
	        width: '100%',
	        zIndex: 9,
	        top: 0,
	        left: '-100%',
	        opacity: 0,
	        backgroundColor: Colors.lightBlack,
	        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

	        // Two ways to promote overlay to its own render layer
	        willChange: 'opacity',
	        transform: 'translateZ(0)',

	        transition: this.props.transitionEnabled && Transitions.easeOut('0ms', 'left', '400ms') + ',' + Transitions.easeOut('400ms', 'opacity')
	      },
	      rootWhenShown: {
	        left: '0',
	        opacity: 1,
	        transition: this.props.transitionEnabled && Transitions.easeOut('0ms', 'left') + ',' + Transitions.easeOut('400ms', 'opacity')
	      }
	    };
	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var show = _props.show;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['show', 'style']);

	    var styles = this.prepareStyles(this.getStyles().root, this.props.style, this.props.show && this.getStyles().rootWhenShown);

	    return React.createElement('div', _extends({}, other, { style: styles }));
	  },

	  preventScrolling: function preventScrolling() {
	    if (!this.props.autoLockScrolling) this._preventScrolling();
	  },

	  allowScrolling: function allowScrolling() {
	    if (!this.props.autoLockScrolling) this._allowScrolling();
	  },

	  _preventScrolling: function _preventScrolling() {
	    var body = document.getElementsByTagName('body')[0];
	    body.style.overflow = 'hidden';
	  },

	  _allowScrolling: function _allowScrolling() {
	    var body = document.getElementsByTagName('body')[0];
	    body.style.overflow = this._originalBodyOverflow || '';
	  }

	});

	module.exports = Overlay;


/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	module.exports = __webpack_require__(423);


/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var WindowListenable = __webpack_require__(393);
	var TimePickerDialog = __webpack_require__(424);
	var TextField = __webpack_require__(402);

	var emptyTime = new Date();
	emptyTime.setHours(0);
	emptyTime.setMinutes(0);

	var TimePicker = React.createClass({
	  displayName: 'TimePicker',

	  mixins: [StylePropable, WindowListenable],

	  propTypes: {
	    autoOk: React.PropTypes.bool,
	    defaultTime: React.PropTypes.object,
	    format: React.PropTypes.oneOf(['ampm', '24hr']),
	    pedantic: React.PropTypes.bool,
	    onFocus: React.PropTypes.func,
	    onTouchTap: React.PropTypes.func,
	    onChange: React.PropTypes.func,
	    onShow: React.PropTypes.func,
	    onDismiss: React.PropTypes.func,
	    style: React.PropTypes.object,
	    textFieldStyle: React.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  windowListeners: {
	    'keyup': '_handleWindowKeyUp'
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      defaultTime: null,
	      format: 'ampm',
	      pedantic: false,
	      autoOk: false,
	      style: {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      time: this.props.defaultTime || emptyTime,
	      dialogTime: new Date()
	    };
	  },

	  formatTime: function formatTime(date) {
	    var hours = date.getHours();
	    var mins = date.getMinutes().toString();

	    if (this.props.format === "ampm") {
	      var isAM = hours < 12;
	      hours = hours % 12;
	      var additional = isAM ? " am" : " pm";
	      hours = (hours || 12).toString();

	      if (mins.length < 2) mins = "0" + mins;

	      if (this.props.pedantic) {
	        // Treat midday/midnight specially http://www.nist.gov/pml/div688/times.cfm
	        if (hours === "12" && mins === "00") {
	          return additional === " pm" ? "12 noon" : "12 midnight";
	        }
	      }

	      return hours + (mins === "00" ? "" : ":" + mins) + additional;
	    }

	    hours = hours.toString();

	    if (hours.length < 2) hours = "0" + hours;
	    if (mins.length < 2) mins = "0" + mins;

	    return hours + ":" + mins;
	  },

	  render: function render() {
	    var _props = this.props;
	    var autoOk = _props.autoOk;
	    var format = _props.format;
	    var onFocus = _props.onFocus;
	    var onTouchTap = _props.onTouchTap;
	    var onShow = _props.onShow;
	    var onDismiss = _props.onDismiss;
	    var style = _props.style;
	    var textFieldStyle = _props.textFieldStyle;

	    var other = _objectWithoutProperties(_props, ['autoOk', 'format', 'onFocus', 'onTouchTap', 'onShow', 'onDismiss', 'style', 'textFieldStyle']);

	    var defaultInputValue = undefined;

	    if (this.props.defaultTime) {
	      defaultInputValue = this.formatTime(this.props.defaultTime);
	    }

	    return React.createElement(
	      'div',
	      { style: this.prepareStyles(style) },
	      React.createElement(TextField, _extends({}, other, {
	        style: textFieldStyle,
	        ref: 'input',
	        defaultValue: defaultInputValue,
	        onFocus: this._handleInputFocus,
	        onTouchTap: this._handleInputTouchTap })),
	      React.createElement(TimePickerDialog, {
	        ref: 'dialogWindow',
	        initialTime: this.state.dialogTime,
	        onAccept: this._handleDialogAccept,
	        onShow: onShow,
	        onDismiss: onDismiss,
	        format: format,
	        autoOk: autoOk })
	    );
	  },

	  getTime: function getTime() {
	    return this.state.time;
	  },

	  setTime: function setTime(t) {
	    this.setState({
	      time: t
	    });
	    this.refs.input.setValue(this.formatTime(t));
	  },

	  /**
	   * Alias for `openDialog()` for an api consistent with TextField.
	   */
	  focus: function focus() {
	    this.openDialog();
	  },

	  openDialog: function openDialog() {
	    this.setState({
	      dialogTime: this.getTime()
	    });

	    this.refs.dialogWindow.show();
	  },

	  _handleDialogAccept: function _handleDialogAccept(t) {
	    this.setTime(t);
	    if (this.props.onChange) this.props.onChange(null, t);
	  },

	  _handleInputFocus: function _handleInputFocus(e) {
	    e.target.blur();
	    if (this.props.onFocus) this.props.onFocus(e);
	  },

	  _handleInputTouchTap: function _handleInputTouchTap(e) {
	    e.preventDefault();

	    this.openDialog();

	    if (this.props.onTouchTap) this.props.onTouchTap(e);
	  }
	});

	module.exports = TimePicker;


/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var WindowListenable = __webpack_require__(393);
	var KeyCode = __webpack_require__(350);
	var Clock = __webpack_require__(425);
	var Dialog = __webpack_require__(420);
	var FlatButton = __webpack_require__(366);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var TimePickerDialog = React.createClass({
	  displayName: 'TimePickerDialog',

	  mixins: [StylePropable, WindowListenable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    autoOk: React.PropTypes.bool,
	    initialTime: React.PropTypes.object,
	    onAccept: React.PropTypes.func,
	    onShow: React.PropTypes.func,
	    onDismiss: React.PropTypes.func
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  windowListeners: {
	    keyup: '_handleWindowKeyUp'
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.timePicker;
	  },

	  render: function render() {
	    var _props = this.props;
	    var initialTime = _props.initialTime;
	    var onAccept = _props.onAccept;
	    var format = _props.format;
	    var autoOk = _props.autoOk;

	    var other = _objectWithoutProperties(_props, ['initialTime', 'onAccept', 'format', 'autoOk']);

	    var styles = {
	      root: {
	        fontSize: 14,
	        color: this.getTheme().clockColor
	      },
	      dialogContent: {
	        width: 280
	      },
	      body: {
	        padding: 0
	      }
	    };

	    var actions = [React.createElement(FlatButton, {
	      key: 0,
	      label: 'Cancel',
	      secondary: true,
	      onTouchTap: this._handleCancelTouchTap }), React.createElement(FlatButton, {
	      key: 1,
	      label: 'OK',
	      secondary: true,
	      onTouchTap: this._handleOKTouchTap })];

	    var onClockChangeMinutes = autoOk === true ? this._handleOKTouchTap : undefined;

	    return React.createElement(
	      Dialog,
	      _extends({}, other, {
	        ref: 'dialogWindow',
	        style: this.mergeAndPrefix(styles.root),
	        bodyStyle: this.mergeAndPrefix(styles.body),
	        actions: actions,
	        contentStyle: styles.dialogContent,
	        onDismiss: this._handleDialogDismiss,
	        onShow: this._handleDialogShow,
	        repositionOnUpdate: false }),
	      React.createElement(Clock, {
	        ref: 'clock',
	        format: format,
	        initialTime: initialTime,
	        onChangeMinutes: onClockChangeMinutes })
	    );
	  },

	  show: function show() {
	    this.refs.dialogWindow.show();
	  },

	  dismiss: function dismiss() {
	    this.refs.dialogWindow.dismiss();
	  },

	  _handleCancelTouchTap: function _handleCancelTouchTap() {
	    this.dismiss();
	  },

	  _handleOKTouchTap: function _handleOKTouchTap() {
	    this.dismiss();
	    if (this.props.onAccept) {
	      this.props.onAccept(this.refs.clock.getSelectedTime());
	    }
	  },

	  _handleDialogShow: function _handleDialogShow() {
	    if (this.props.onShow) {
	      this.props.onShow();
	    }
	  },

	  _handleDialogDismiss: function _handleDialogDismiss() {
	    if (this.props.onDismiss) {
	      this.props.onDismiss();
	    }
	  },

	  _handleWindowKeyUp: function _handleWindowKeyUp(e) {
	    if (this.refs.dialogWindow.isOpen()) {
	      switch (e.keyCode) {
	        case KeyCode.ENTER:
	          this._handleOKTouchTap();
	          break;
	      }
	    }
	  }

	});

	module.exports = TimePickerDialog;


/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var TimeDisplay = __webpack_require__(426);
	var ClockButton = __webpack_require__(427);
	var ClockHours = __webpack_require__(428);
	var ClockMinutes = __webpack_require__(431);

	var Clock = React.createClass({
	  displayName: 'Clock',

	  mixins: [StylePropable],

	  propTypes: {
	    onChangeMinutes: React.PropTypes.func,
	    onChangeHours: React.PropTypes.func,
	    initialTime: React.PropTypes.object,
	    mode: React.PropTypes.oneOf(['hour', 'minute']),
	    format: React.PropTypes.oneOf(['ampm', '24hr']),
	    isActive: React.PropTypes.bool
	  },

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      initialTime: new Date()
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      selectedTime: nextProps.initialTime
	    });
	  },

	  getInitialState: function getInitialState() {
	    return {
	      selectedTime: this.props.initialTime,
	      mode: 'hour'
	    };
	  },

	  _setMode: function _setMode(mode) {
	    var _this = this;

	    setTimeout(function () {
	      _this.setState({
	        mode: mode
	      });
	    }, 100);
	  },

	  _setAffix: function _setAffix(affix) {
	    if (affix === this._getAffix()) return;

	    var hours = this.state.selectedTime.getHours();

	    if (affix === "am") {
	      this.handleChangeHours(hours - 12, affix);
	      return;
	    }

	    this.handleChangeHours(hours + 12, affix);
	  },

	  _getAffix: function _getAffix() {
	    if (this.props.format !== "ampm") return "";

	    var hours = this.state.selectedTime.getHours();
	    if (hours < 12) {
	      return "am";
	    }

	    return "pm";
	  },

	  _getButtons: function _getButtons() {
	    var buttons = [];
	    var isAM = this._getIsAM();

	    if (this.props.format === 'ampm') {
	      buttons = [React.createElement(
	        ClockButton,
	        { position: 'left', onTouchTap: this._setAffix.bind(this, "am"), selected: isAM },
	        "AM"
	      ), React.createElement(
	        ClockButton,
	        { position: 'right', onTouchTap: this._setAffix.bind(this, "pm"), selected: !isAM },
	        "PM"
	      )];
	    }
	    return buttons;
	  },

	  _getIsAM: function _getIsAM() {
	    return this._getAffix() === "am";
	  },

	  render: function render() {
	    var clock = null;
	    var buttons = this._getButtons();

	    var styles = {
	      root: {},

	      container: {
	        height: 280,
	        padding: 10
	      }
	    };

	    if (this.state.mode === "hour") {
	      clock = React.createElement(ClockHours, { key: 'hours',
	        format: this.props.format,
	        onChange: this.handleChangeHours,
	        initialHours: this.state.selectedTime.getHours() });
	    } else {
	      clock = React.createElement(ClockMinutes, { key: 'minutes',
	        onChange: this.handleChangeMinutes,
	        initialMinutes: this.state.selectedTime.getMinutes() });
	    }

	    return React.createElement(
	      'div',
	      { style: this.prepareStyles(styles.root) },
	      React.createElement(TimeDisplay, {
	        selectedTime: this.state.selectedTime,
	        mode: this.state.mode,
	        format: this.props.format,
	        affix: this._getAffix(),
	        onSelectHour: this._setMode.bind(this, 'hour'),
	        onSelectMin: this._setMode.bind(this, 'minute') }),
	      React.createElement(
	        'div',
	        { style: this.prepareStyles(styles.container) },
	        clock
	      ),
	      buttons
	    );
	  },

	  handleChangeHours: function handleChangeHours(hours, finished) {
	    var _this2 = this;

	    var time = new Date(this.state.selectedTime);
	    var affix = undefined;

	    if (typeof finished === 'string') {
	      affix = finished;
	      finished = undefined;
	    }
	    if (!affix) {
	      affix = this._getAffix();
	    }
	    if (affix === 'pm' && hours < 12) {
	      hours += 12;
	    }

	    time.setHours(hours);
	    this.setState({
	      selectedTime: time
	    });

	    var onChangeHours = this.props.onChangeHours;

	    if (finished) {
	      setTimeout(function () {
	        _this2.setState({
	          mode: 'minute'
	        });
	        if (typeof onChangeHours === 'function') {
	          onChangeHours(time);
	        }
	      }, 100);
	    }
	  },

	  handleChangeMinutes: function handleChangeMinutes(minutes) {
	    var time = new Date(this.state.selectedTime);
	    time.setMinutes(minutes);
	    this.setState({
	      selectedTime: time
	    });

	    var onChangeMinutes = this.props.onChangeMinutes;

	    if (typeof onChangeMinutes === 'function') {
	      setTimeout(function () {
	        onChangeMinutes(time);
	      }, 0);
	    }
	  },

	  getSelectedTime: function getSelectedTime() {
	    return this.state.selectedTime;
	  }
	});

	module.exports = Clock;


/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var TimeDisplay = React.createClass({
	  displayName: 'TimeDisplay',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    selectedTime: React.PropTypes.object.isRequired,
	    format: React.PropTypes.oneOf(['ampm', '24hr']),
	    mode: React.PropTypes.oneOf(['hour', 'minute']),
	    affix: React.PropTypes.oneOf(['', 'pm', 'am'])
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      transitionDirection: 'up',
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      mode: 'hour',
	      affix: ''
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var direction = undefined;
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    if (nextProps.selectedTime !== this.props.selectedTime) {
	      direction = nextProps.selectedTime > this.props.selectedTime ? 'up' : 'down';

	      this.setState({
	        transitionDirection: direction
	      });
	    }
	  },

	  sanitizeTime: function sanitizeTime() {
	    var hour = this.props.selectedTime.getHours();
	    var min = this.props.selectedTime.getMinutes().toString();

	    if (this.props.format === "ampm") {
	      hour %= 12;
	      hour = hour || 12;
	    }

	    hour = hour.toString();
	    if (hour.length < 2) hour = "0" + hour;
	    if (min.length < 2) min = "0" + min;

	    return [hour, min];
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.timePicker;
	  },

	  render: function render() {
	    var _props = this.props;
	    var selectedTime = _props.selectedTime;
	    var mode = _props.mode;

	    var other = _objectWithoutProperties(_props, ['selectedTime', 'mode']);

	    var styles = {
	      root: {
	        textAlign: "center",
	        position: "relative",
	        width: 280,
	        height: "100%"
	      },

	      time: {
	        margin: "6px 0",
	        lineHeight: "58px",
	        height: 58,
	        fontSize: "58px"
	      },

	      box: {
	        padding: "16px 0",
	        backgroundColor: this.getTheme().color,
	        color: this.getTheme().textColor
	      },

	      hour: {},

	      minute: {}
	    };

	    var _sanitizeTime = this.sanitizeTime();

	    var _sanitizeTime2 = _slicedToArray(_sanitizeTime, 2);

	    var hour = _sanitizeTime2[0];
	    var min = _sanitizeTime2[1];

	    styles[mode].color = this.getTheme().accentColor;

	    return React.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(styles.root) }),
	      React.createElement(
	        'div',
	        { style: this.prepareStyles(styles.box) },
	        React.createElement(
	          'div',
	          { style: this.prepareStyles(styles.time) },
	          React.createElement(
	            'span',
	            { style: this.prepareStyles(styles.hour), onTouchTap: this.props.onSelectHour },
	            hour
	          ),
	          React.createElement(
	            'span',
	            null,
	            ':'
	          ),
	          React.createElement(
	            'span',
	            { style: this.prepareStyles(styles.minute), onTouchTap: this.props.onSelectMin },
	            min
	          )
	        ),
	        React.createElement(
	          'span',
	          { key: "affix" },
	          this.props.affix.toUpperCase()
	        )
	      )
	    );
	  }

	});

	module.exports = TimeDisplay;


/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var EnhancedButton = __webpack_require__(342);
	var Transitions = __webpack_require__(338);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var ClockButton = React.createClass({
	  displayName: 'ClockButton',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    position: React.PropTypes.oneOf(['left', 'right'])
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      position: "left"
	    };
	  },

	  _handleTouchTap: function _handleTouchTap() {
	    this.setState({
	      selected: true
	    });
	    this.props.onTouchTap();
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.timePicker;
	  },

	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;

	    var other = _objectWithoutProperties(_props, ['className']);

	    var styles = {
	      root: {
	        position: "absolute",
	        bottom: 65,
	        pointerEvents: "auto",
	        height: 50,
	        width: 50,
	        borderRadius: "100%"
	      },

	      label: {
	        position: "absolute",
	        top: 17,
	        left: 14
	      },

	      select: {
	        position: 'absolute',
	        height: 50,
	        width: 50,
	        top: 0,
	        left: 0,
	        opacity: 0,
	        borderRadius: '50%',
	        transform: 'scale(0)',
	        transition: Transitions.easeOut(),
	        backgroundColor: this.getTheme().accentColor
	      }
	    };

	    if (this.props.selected) {
	      styles.label.color = this.getTheme().selectTextColor;
	      styles.select.opacity = 1;
	      styles.select.transform = 'scale(1)';
	    }

	    if (this.props.position === "right") {
	      styles.root.right = "5px";
	    } else {
	      styles.root.left = "5px";
	    }

	    return React.createElement(
	      EnhancedButton,
	      _extends({}, other, {
	        style: this.mergeStyles(styles.root),
	        disableFocusRipple: true,
	        disableTouchRipple: true,
	        onTouchTap: this._handleTouchTap }),
	      React.createElement('span', { style: this.prepareStyles(styles.select) }),
	      React.createElement(
	        'span',
	        { style: this.prepareStyles(styles.label) },
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = ClockButton;


/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var StylePropable = __webpack_require__(330);
	var ClockNumber = __webpack_require__(429);
	var ClockPointer = __webpack_require__(430);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	function rad2deg(rad) {
	  return rad * 57.29577951308232;
	}

	function getTouchEventOffsetValues(e) {
	  var el = e.target;
	  var boundingRect = el.getBoundingClientRect();

	  var offset = {
	    offsetX: e.clientX - boundingRect.left,
	    offsetY: e.clientY - boundingRect.top
	  };

	  return offset;
	}

	var ClockHours = React.createClass({
	  displayName: 'ClockHours',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  propTypes: {
	    initialHours: React.PropTypes.number,
	    onChange: React.PropTypes.func,
	    format: React.PropTypes.oneOf(['ampm', '24hr'])
	  },

	  center: { x: 0, y: 0 },
	  basePoint: { x: 0, y: 0 },

	  isMousePressed: function isMousePressed(e) {
	    if (typeof e.buttons === "undefined") {
	      return e.nativeEvent.which;
	    }

	    return e.buttons;
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      initialHours: new Date().getHours(),
	      onChange: function onChange() {},
	      format: 'ampm'
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    var clockElement = ReactDOM.findDOMNode(this.refs.mask);

	    this.center = {
	      x: clockElement.offsetWidth / 2,
	      y: clockElement.offsetHeight / 2
	    };

	    this.basePoint = {
	      x: this.center.x,
	      y: 0
	    };
	  },

	  handleUp: function handleUp(e) {
	    e.preventDefault();
	    this.setClock(e.nativeEvent, true);
	  },

	  handleMove: function handleMove(e) {
	    e.preventDefault();
	    if (this.isMousePressed(e) !== 1) return;
	    this.setClock(e.nativeEvent, false);
	  },

	  handleTouchMove: function handleTouchMove(e) {
	    e.preventDefault();
	    this.setClock(e.changedTouches[0], false);
	  },

	  handleTouchEnd: function handleTouchEnd(e) {
	    e.preventDefault();
	    this.setClock(e.changedTouches[0], true);
	  },

	  setClock: function setClock(e, finish) {
	    if (typeof e.offsetX === 'undefined') {
	      var offset = getTouchEventOffsetValues(e);

	      e.offsetX = offset.offsetX;
	      e.offsetY = offset.offsetY;
	    }

	    var hours = this.getHours(e.offsetX, e.offsetY);

	    this.props.onChange(hours, finish);
	  },

	  getHours: function getHours(offsetX, offsetY) {
	    var step = 30;
	    var x = offsetX - this.center.x;
	    var y = offsetY - this.center.y;
	    var cx = this.basePoint.x - this.center.x;
	    var cy = this.basePoint.y - this.center.y;

	    var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

	    var deg = rad2deg(atan);
	    deg = Math.round(deg / step) * step;
	    deg %= 360;

	    var value = Math.floor(deg / step) || 0;

	    var delta = Math.pow(x, 2) + Math.pow(y, 2);
	    var distance = Math.sqrt(delta);

	    value = value || 12;
	    if (this.props.format === "24hr") {
	      if (distance < 90) {
	        value += 12;
	        value %= 24;
	      }
	    } else {
	      value %= 12;
	    }

	    return value;
	  },

	  _getSelected: function _getSelected() {
	    var hour = this.props.initialHours;

	    if (this.props.format === "ampm") {
	      hour %= 12;
	      hour = hour || 12;
	    }

	    return hour;
	  },

	  _getHourNumbers: function _getHourNumbers() {
	    var _this = this;

	    var style = {
	      pointerEvents: "none"
	    };
	    var hourSize = this.props.format === 'ampm' ? 12 : 24;

	    var hours = [];
	    for (var i = 1; i <= hourSize; i++) {
	      hours.push(i % 24);
	    }

	    return hours.map(function (hour) {
	      var isSelected = _this._getSelected() === hour;
	      return React.createElement(ClockNumber, { key: hour, style: style, isSelected: isSelected, type: 'hour',
	        value: hour });
	    });
	  },

	  render: function render() {
	    var styles = {
	      root: {
	        height: "100%",
	        width: "100%",
	        borderRadius: "100%",
	        position: "relative",
	        pointerEvents: "none",
	        boxSizing: "border-box"
	      },

	      hitMask: {
	        height: "100%",
	        width: "100%",
	        pointerEvents: "auto"
	      }
	    };

	    var hours = this._getSelected();
	    var numbers = this._getHourNumbers();

	    return React.createElement(
	      'div',
	      { ref: 'clock', style: this.prepareStyles(styles.root) },
	      React.createElement(ClockPointer, { hasSelected: true, value: hours, type: 'hour' }),
	      numbers,
	      React.createElement('div', { ref: 'mask', style: this.prepareStyles(styles.hitMask), onTouchMove: this.handleTouchMove,
	        onTouchEnd: this.handleTouchEnd, onMouseUp: this.handleUp, onMouseMove: this.handleMove })
	    );
	  }
	});

	module.exports = ClockHours;


/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var ClockNumber = React.createClass({
	  displayName: 'ClockNumber',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    value: React.PropTypes.number,
	    type: React.PropTypes.oneOf(['hour', 'minute']),
	    onSelected: React.PropTypes.func,
	    isSelected: React.PropTypes.bool
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      value: 0,
	      type: 'minute',
	      isSelected: false
	    };
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.timePicker;
	  },

	  render: function render() {
	    var pos = this.props.value;
	    var inner = false;

	    if (this.props.type === "hour") {
	      inner = pos < 1 || pos > 12;
	      pos %= 12;
	    } else {
	      pos = pos / 5;
	    }

	    var positions = [[0, 5], [54.5, 16.6], [94.4, 59.5], [109, 114], [94.4, 168.5], [54.5, 208.4], [0, 223], [-54.5, 208.4], [-94.4, 168.5], [-109, 114], [-94.4, 59.5], [-54.5, 19.6]];

	    var innerPositions = [[0, 40], [36.9, 49.9], [64, 77], [74, 114], [64, 151], [37, 178], [0, 188], [-37, 178], [-64, 151], [-74, 114], [-64, 77], [-37, 50]];

	    var styles = {
	      root: {
	        display: "inline-block",
	        position: "absolute",
	        width: 32,
	        height: 32,
	        borderRadius: "100%",
	        left: 'calc(50% - 16px)',
	        top: 10,
	        textAlign: "center",
	        paddingTop: 5,
	        userSelect: "none", /* Chrome all / Safari all */
	        fontSize: "1.1em",
	        pointerEvents: "none",
	        boxSizing: "border-box"
	      }
	    };

	    if (this.props.isSelected) {
	      styles.root.backgroundColor = this.getTheme().accentColor;
	      styles.root.color = this.getTheme().selectTextColor;
	    }

	    var transformPos = positions[pos];

	    if (inner) {
	      styles.root.width = "28px";
	      styles.root.height = "28px";
	      styles.root.left = 'calc(50% - 14px)';
	      transformPos = innerPositions[pos];
	    }

	    var _transformPos = transformPos;

	    var _transformPos2 = _slicedToArray(_transformPos, 2);

	    var x = _transformPos2[0];
	    var y = _transformPos2[1];

	    styles.root.transform = "translate(" + x + "px, " + y + "px)";

	    return React.createElement(
	      'span',
	      { style: this.prepareStyles(styles.root) },
	      this.props.value
	    );
	  }
	});

	module.exports = ClockNumber;


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var ClockPointer = React.createClass({
	  displayName: 'ClockPointer',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    value: React.PropTypes.number,
	    type: React.PropTypes.oneOf(['hour', 'minute'])
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      inner: this.isInner(this.props.value),
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      value: null,
	      type: 'minute',
	      hasSelected: false
	    };
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({
	      inner: this.isInner(nextProps.value),
	      muiTheme: newMuiTheme
	    });
	  },

	  isInner: function isInner(value) {
	    if (this.props.type !== "hour") {
	      return false;
	    }
	    return value < 1 || value > 12;
	  },

	  getAngle: function getAngle() {
	    if (this.props.type === "hour") {
	      return this.calcAngle(this.props.value, 12);
	    }

	    return this.calcAngle(this.props.value, 60);
	  },

	  calcAngle: function calcAngle(value, base) {
	    value %= base;
	    var angle = 360 / base * value;
	    return angle;
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.timePicker;
	  },

	  render: function render() {
	    if (this.props.value === null) {
	      return React.createElement('span', null);
	    }

	    var angle = this.getAngle();

	    var styles = {
	      root: {
	        height: "30%",
	        background: this.getTheme().accentColor,
	        width: 2,
	        left: 'calc(50% - 1px)',
	        position: "absolute",
	        bottom: "50%",
	        transformOrigin: "bottom",
	        pointerEvents: "none",
	        transform: "rotateZ(" + angle + "deg)"
	      },
	      mark: {
	        background: this.getTheme().selectTextColor,
	        border: "4px solid " + this.getTheme().accentColor,
	        width: 7,
	        height: 7,
	        position: "absolute",
	        top: -5,
	        left: -6,
	        borderRadius: "100%"
	      }
	    };

	    if (!this.state.inner) {
	      styles.root.height = "40%";
	    }

	    if (this.props.hasSelected) {
	      styles.mark.display = "none";
	    }

	    return React.createElement(
	      'div',
	      { style: this.prepareStyles(styles.root) },
	      React.createElement('div', { style: this.prepareStyles(styles.mark) })
	    );
	  }
	});

	module.exports = ClockPointer;


/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var StylePropable = __webpack_require__(330);
	var ClockNumber = __webpack_require__(429);
	var ClockPointer = __webpack_require__(430);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	function rad2deg(rad) {
	  return rad * 57.29577951308232;
	}

	function getTouchEventOffsetValues(e) {
	  var el = e.target;
	  var boundingRect = el.getBoundingClientRect();

	  var offset = {
	    offsetX: e.clientX - boundingRect.left,
	    offsetY: e.clientY - boundingRect.top
	  };

	  return offset;
	}

	var ClockMinutes = React.createClass({
	  displayName: 'ClockMinutes',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    initialMinutes: React.PropTypes.number,
	    onChange: React.PropTypes.func
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  center: { x: 0, y: 0 },
	  basePoint: { x: 0, y: 0 },

	  isMousePressed: function isMousePressed(e) {

	    if (typeof e.buttons === "undefined") {
	      return e.nativeEvent.which;
	    }
	    return e.buttons;
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      initialMinutes: new Date().getMinutes(),
	      onChange: function onChange() {}
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    var clockElement = ReactDOM.findDOMNode(this.refs.mask);

	    this.center = {
	      x: clockElement.offsetWidth / 2,
	      y: clockElement.offsetHeight / 2
	    };

	    this.basePoint = {
	      x: this.center.x,
	      y: 0
	    };
	  },

	  handleUp: function handleUp(e) {
	    e.preventDefault();
	    this.setClock(e.nativeEvent, true);
	  },

	  handleMove: function handleMove(e) {
	    e.preventDefault();
	    if (this.isMousePressed(e) !== 1) return;
	    this.setClock(e.nativeEvent, false);
	  },

	  handleTouch: function handleTouch(e) {
	    e.preventDefault();
	    this.setClock(e.changedTouches[0], false);
	  },

	  setClock: function setClock(e, finish) {
	    if (typeof e.offsetX === 'undefined') {
	      var offset = getTouchEventOffsetValues(e);

	      e.offsetX = offset.offsetX;
	      e.offsetY = offset.offsetY;
	    }

	    var minutes = this.getMinutes(e.offsetX, e.offsetY);

	    this.props.onChange(minutes, finish);
	  },

	  getMinutes: function getMinutes(offsetX, offsetY) {
	    var step = 6;
	    var x = offsetX - this.center.x;
	    var y = offsetY - this.center.y;
	    var cx = this.basePoint.x - this.center.x;
	    var cy = this.basePoint.y - this.center.y;

	    var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

	    var deg = rad2deg(atan);
	    deg = Math.round(deg / step) * step;
	    deg %= 360;

	    var value = Math.floor(deg / step) || 0;

	    return value;
	  },

	  _getMinuteNumbers: function _getMinuteNumbers() {
	    var minutes = [];
	    for (var i = 0; i < 12; i++) {
	      minutes.push(i * 5);
	    }
	    var selectedMinutes = this.props.initialMinutes;
	    var hasSelected = false;

	    var numbers = minutes.map(function (minute) {
	      var isSelected = selectedMinutes === minute;
	      if (isSelected) hasSelected = true;
	      return React.createElement(ClockNumber, { key: minute, isSelected: isSelected, type: 'minute', value: minute });
	    });

	    return {
	      numbers: numbers,
	      hasSelected: hasSelected,
	      selected: selectedMinutes
	    };
	  },

	  render: function render() {
	    var styles = {
	      root: {
	        height: "100%",
	        width: "100%",
	        borderRadius: "100%",
	        position: "relative",
	        pointerEvents: "none",
	        boxSizing: "border-box"
	      },

	      hitMask: {
	        height: "100%",
	        width: "100%",
	        pointerEvents: "auto"
	      }
	    };

	    var minutes = this._getMinuteNumbers();

	    return React.createElement(
	      'div',
	      { ref: 'clock', style: this.prepareStyles(styles.root) },
	      React.createElement(ClockPointer, { value: minutes.selected, type: 'minute' }),
	      minutes.numbers,
	      React.createElement('div', { ref: 'mask', style: this.prepareStyles(styles.hitMask), hasSelected: minutes.hasSelected,
	        onTouchMove: this.handleTouch, onTouchEnd: this.handleTouch,
	        onMouseUp: this.handleUp, onMouseMove: this.handleMove })
	    );
	  }
	});

	module.exports = ClockMinutes;


/***/ },
/* 432 */
/***/ function(module, exports) {

	// Database.js

	"use strict";

	var db;
	var prepop = false;

	module.exports = {

		// Returns all sounds to the callback function
		getSounds: function getSounds(callback) {
			console.log("##############%%%%% DB.GETSOUNDS");
			db.transaction(function (tx) {
				_getSounds(tx, callback);
			}, txErrorCB, txSuccessCB);
		},

		// Returns sound with given id to the callback function
		// id is either an integer or a list of integers
		getSoundById: function getSoundById(callback, id) {
			db.transaction(function (tx) {
				_getSoundById(tx, callback, id);
			}, txErrorCB, txSuccessCB);
		},

		saveSound: function saveSound(jsonObj) {
			// var timestamp = Math.round(jsonObj.datetime.getTime()/1000);
			var timestamp = new Date();
			console.log("Timestamp: " + timestamp);
			db.transaction(function (tx) {
				tx.executeSql("INSERT INTO 'Soundbites' (type,name,datetime,filename,url,tags,photo,author,location) VALUES (?,?,?,?,?,?,?,?,?)", [jsonObj.type, jsonObj.name, timestamp, jsonObj.filename, jsonObj.url, jsonObj.tags, jsonObj.photo, jsonObj.author, JSON.stringify(jsonObj.location)], sqlSuccessCB, sqlErrorCB);
			}, txErrorCB, txSuccessCB);
		},

		updateSound: function updateSound(jsonObj) {
			db.transaction(function (tx) {
				tx.executeSql("UPDATE 'Soundbites' SET name=?, datetime=?,tags=?,photo=?,location=?) WHERE id=?", [jsonObj.name, jsonObj.datetime, jsonObj.tags, jsonObj.photo, JSON.stringify(jsonObj.location), jsonObj.id], sqlSuccessCB, sqlErrorCB);
			}, txErrorCB, txSuccessCB);
		},

		resetTable: function resetTable() {
			db.transaction(function (tx) {
				tx.executeSql("DROP TABLE Soundbites", [], function () {
					createTable(tx);
				}, sqlErrorCB);
			});
		}
	};

	// wait for load
	document.addEventListener('deviceready', onDeviceReady, false);

	// Create db on first run
	function onDeviceReady() {
		var dbLoadSuccess = function dbLoadSuccess() {
			console.log("Database successfully loaded");
		};
		db = window.openDatabase("tuneline", "1.0", "Tuneline DB", "1000000");
		// module.exports.resetTable();
		db.transaction(createTable, txErrorCB, dbLoadSuccess);
	}

	var _getSounds = function _getSounds(tx, callback) {
		console.log("##############%%%%% DB.PRIVATE_GETSOUNDS");
		var successCB = function successCB(tx, queryResult, callback) {
			var rows = resultSetToList(queryResult);
			console.log("##############%%%%% JSON: " + JSON.stringify(rows));
			// console.log("Rows in successCB: %o", rows);
			callback(rows);
		};
		console.log("##############%%%%% DB.Before tx.executeSql");
		tx.executeSql("SELECT * FROM Soundbites ORDER BY datetime DESC", [], function (tx, r) {
			successCB(tx, r, callback);
		}, sqlErrorCB);
	};

	var _getSoundById = function _getSoundById(tx, callback, id) {
		console.log("##############%%%%% DB.getSoundById PRIVATE");
		var successCB = function successCB(tx, queryResult, callback) {
			var rows = resultSetToList(queryResult);
			console.log("Rows in successCB: %o", rows);
			callback(rows);
		};

		if (isInt(id)) {
			console.log("Soundbite ID requested: %o", id);
			tx.executeSql("SELECT * FROM Soundbites WHERE id=?", [id], function (tx, r) {
				successCB(tx, r, callback);
			}, sqlErrorCB);
		} else if (id.constructor === Array) {
			// is array
			console.log("Soundbite IDs requested: %o", id);
			tx.executeSql("SELECT * FROM Soundbites WHERE id IN ('?')", [id.join()], function (tx, r) {
				successCB(tx, r, callback);
			}, sqlErrorCB);
		}
	};

	// returns true if value is an int or a string representation of an int
	var isInt = function isInt(value) {
		var x;
		if (isNaN(value)) {
			return false;
		}
		x = parseFloat(value);
		return (x | 0) === x;
	};

	// Takes SQLResultSet, returns rows as a list of JSON objects
	var resultSetToList = function resultSetToList(results) {
		var len = results.rows.length;
		var rows = [];

		// loops through resultSet, parses serialized JSON location, parses timestamp back to readable date
		for (var i = 0; i < len; i++) {
			rows.push(results.rows.item(i));
			var locObj = JSON.parse(results.rows.item(i).location);
			rows[rows.length - 1].location = locObj;
			// var datetimeObj = new Date(results.rows.item(i).datetime*1000);
			// rows[rows.length-1].datetime = datetimeObj;
		}
		return rows;
	};

	// Create the table if not present
	var createTable = function createTable(tx) {
		tx.executeSql('CREATE TABLE IF NOT EXISTS "Soundbites" ("id" INTEGER PRIMARY KEY,"type" TEXT NOT NULL,"name" TEXT,"datetime" INTEGER NOT NULL,"filename" TEXT,"url" INTEGER,"tags" TEXT,"photo" TEXT,"author" TEXT,"location" TEXT NOT NULL);');
		if (prepop) {
			populate(tx);
		}
	};

	var populate = function populate(tx) {
		tx.executeSql("INSERT INTO 'Soundbites' (type,name,datetime,filename,url,tags,photo,author,location) VALUES (?,?,?,?,?,?,?,?,?)", ["default", "some name #1", "Thu Oct 29 2015 01:35:15 GMT-0700 (PDT)", "NULL", "NULL", "#yoloswag", "NULL", "NULL", '{"lat":49.2602007,"lng":-123.2501255,"accuracy":5,"altitude":0,"name":"location name"}'], sqlSuccessCB, sqlErrorCB);
		tx.executeSql("INSERT INTO 'Soundbites' (type,name,datetime,filename,url,tags,photo,author,location) VALUES (?,?,?,?,?,?,?,?,?)", ["default", "test name #2", "Thu Oct 30 2015 11:35:15 GMT-0700 (PDT)", "NULL", "NULL", "#swaggeroni", "NULL", "NULL", '{"lat":49.2602007,"lng":-123.2501255,"accuracy":5,"altitude":0,"name":"location name"}'], sqlSuccessCB, sqlErrorCB);
		tx.executeSql("INSERT INTO 'Soundbites' (type,name,datetime,filename,url,tags,photo,author,location) VALUES (?,?,?,?,?,?,?,?,?)", ["default", "testing #3", "Thu Oct 28 2015 00:35:15 GMT-0700 (PDT)", "NULL", "NULL", "#heylisten", "NULL", "NULL", '{"lat":49.2602007,"lng":-123.2501255,"accuracy":5,"altitude":0,"name":"location name"}'], sqlSuccessCB, sqlErrorCB);

		var logSounds = function logSounds(list) {
			console.log("Rows: %o", list);
		};
		module.exports.getSounds(logSounds);
	};

	// Generic SQL error callback
	var sqlErrorCB = function sqlErrorCB(e) {
		console.log("SQL error: " + e.message);
	};

	// Generic SQL success callback
	var sqlSuccessCB = function sqlSuccessCB() {
		console.log("SQL execute success");
	};

	// Generic transaction error callback
	var txErrorCB = function txErrorCB(e) {
		console.log("Transaction error: " + e.message);
	};

	// Generic transaction success callback
	var txSuccessCB = function txSuccessCB() {
		console.log("Transaction success");
	};

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var List = __webpack_require__(434);
	var ListItem = __webpack_require__(435);
	var Avatar = __webpack_require__(438);
	var RaisedButton = __webpack_require__(328);
	var FontIcon = __webpack_require__(377);

	var MediaPlayer = __webpack_require__(398);
	var SearchWidget = __webpack_require__(439);

	var SearchBar = React.createClass({
	    displayName: 'SearchBar',

	    getInitialState: function getInitialState() {
	        return { searchKey: "" };
	    },
	    searchHandler: function searchHandler(event) {
	        var searchKey = event.target.value;
	        this.setState({ searchKey: searchKey });
	        this.props.searchHandler(searchKey);
	    },
	    render: function render() {
	        return React.createElement('input', { type: 'search' });
	        return React.createElement('input', { type: 'search', value: this.state.symbol, onChange: this.searchHandler });
	    }
	});

	var SoundbiteListItem = React.createClass({
	    displayName: 'SoundbiteListItem',

	    loadMedia: function loadMedia() {
	        this.props.callbackParent(this.props.soundbite);
	    },
	    render: function render() {
	        var defaultImage = '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';
	        var locationObj = JSON.stringify(this.props.soundbite.location);
	        var imageString = defaultImage;
	        if (this.props.soundbite.photo && this.props.soundbite.photo != 'undefined') {
	            imageString = this.props.soundbite.photo;
	        }
	        var avatarStyle = {
	            position: 'relative',
	            left: '0em'
	        };
	        return React.createElement(
	            'li',
	            { className: 'event', onClick: this.loadMedia },
	            React.createElement(Avatar, { src: 'data:image/jpeg;base64,' + imageString, style: avatarStyle }),
	            React.createElement(
	                'p',
	                { className: 'dates' },
	                this.props.soundbite.datetime
	            ),
	            React.createElement(
	                'a',
	                { className: 'title' },
	                this.props.soundbite.name
	            ),
	            React.createElement(
	                'p',
	                { className: 'description' },
	                this.props.soundbite.tags
	            ),
	            React.createElement(
	                'p',
	                null,
	                locationObj
	            )
	        );
	    }
	});

	var SoundbiteList = React.createClass({
	    displayName: 'SoundbiteList',

	    loadMedia: function loadMedia(soundbite) {
	        this.props.callbackParent(soundbite);
	    },
	    render: function render() {
	        if (!this.props.soundbites) return null;
	        var items = this.props.soundbites.map((function (soundbite) {
	            return React.createElement(SoundbiteListItem, { key: soundbite.datetime, soundbite: soundbite, callbackParent: this.loadMedia });
	        }).bind(this));
	        return React.createElement(
	            'ol',
	            { className: 'timeline' },
	            items
	        );
	    }
	});

	var TunelineHome = React.createClass({
	    displayName: 'TunelineHome',

	    getInitialState: function getInitialState() {
	        return { searchDisplay: 'none' };
	    },

	    /*
	    searchHandler:function(key) {
	        this.props.service.findByName(key).done(function(result) {
	            this.setState({searchKey: key, soundbites: result});
	        }.bind(this));
	    },*/
	    loadMedia: function loadMedia(soundbite) {
	        this.props.loadMediaToParent(soundbite);
	    },
	    toggleSearch: function toggleSearch(event) {
	        if (this.state.searchDisplay == 'none') this.setState({ searchDisplay: 'block' });else this.setState({ searchDisplay: 'none' });
	    },
	    search: function search(searchParamsObj) {
	        this.props.callbackParent(searchParamsObj);
	    },
	    render: function render() {

	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                RaisedButton,
	                { onClick: this.toggleSearch, fullWidth: true },
	                React.createElement(FontIcon, { className: 'ion-search' }),
	                'Search/Filter'
	            ),
	            React.createElement(SearchWidget, { key: 'searchWidget',
	                ref: 'searchWidget',
	                display: this.state.searchDisplay,
	                callbackParent: this.search }),
	            React.createElement(SoundbiteList, { key: 'soundbiteList', soundbites: this.props.soundbites, callbackParent: this.loadMedia })
	        );
	    }
	});

	module.exports = TunelineHome;

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var PropTypes = __webpack_require__(365);
	var StylePropable = __webpack_require__(330);
	var Typography = __webpack_require__(340);
	var Paper = __webpack_require__(364);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var List = React.createClass({
	  displayName: 'List',

	  mixins: [PureRenderMixin, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    insetSubheader: React.PropTypes.bool,
	    subheader: React.PropTypes.string,
	    subheaderStyle: React.PropTypes.object,
	    zDepth: PropTypes.zDepth
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      zDepth: 0
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var insetSubheader = _props.insetSubheader;
	    var style = _props.style;
	    var subheader = _props.subheader;
	    var subheaderStyle = _props.subheaderStyle;
	    var zDepth = _props.zDepth;

	    var other = _objectWithoutProperties(_props, ['children', 'insetSubheader', 'style', 'subheader', 'subheaderStyle', 'zDepth']);

	    var styles = {
	      root: {
	        padding: 0,
	        paddingBottom: 8,
	        paddingTop: subheader ? 0 : 8
	      },

	      subheader: {
	        color: Typography.textLightBlack,
	        fontSize: 14,
	        fontWeight: Typography.fontWeightMedium,
	        lineHeight: '48px',
	        paddingLeft: insetSubheader ? 72 : 16
	      }
	    };

	    var subheaderElement = undefined;
	    if (subheader) {
	      var mergedSubheaderStyles = this.prepareStyles(styles.subheader, subheaderStyle);
	      subheaderElement = React.createElement(
	        'div',
	        { style: mergedSubheaderStyles },
	        subheader
	      );
	    }

	    return React.createElement(
	      Paper,
	      _extends({}, other, {
	        style: this.mergeStyles(styles.root, style),
	        zDepth: zDepth }),
	      subheaderElement,
	      children
	    );
	  }
	});

	module.exports = List;


/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var PureRenderMixin = __webpack_require__(343);
	var ColorManipulator = __webpack_require__(339);
	var StylePropable = __webpack_require__(330);
	var Colors = __webpack_require__(341);
	var Transitions = __webpack_require__(338);
	var Typography = __webpack_require__(340);
	var EnhancedButton = __webpack_require__(342);
	var IconButton = __webpack_require__(376);
	var OpenIcon = __webpack_require__(436);
	var CloseIcon = __webpack_require__(384);
	var NestedList = __webpack_require__(437);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var ListItem = React.createClass({
	  displayName: 'ListItem',

	  mixins: [PureRenderMixin, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    autoGenerateNestedIndicator: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    disableKeyboardFocus: React.PropTypes.bool,
	    initiallyOpen: React.PropTypes.bool,
	    innerDivStyle: React.PropTypes.object,
	    insetChildren: React.PropTypes.bool,
	    innerStyle: React.PropTypes.object,
	    leftAvatar: React.PropTypes.element,
	    leftCheckbox: React.PropTypes.element,
	    leftIcon: React.PropTypes.element,
	    nestedLevel: React.PropTypes.number,
	    nestedItems: React.PropTypes.arrayOf(React.PropTypes.element),
	    onKeyboardFocus: React.PropTypes.func,
	    onMouseEnter: React.PropTypes.func,
	    onMouseLeave: React.PropTypes.func,
	    onNestedListToggle: React.PropTypes.func,
	    onTouchStart: React.PropTypes.func,
	    onTouchTap: React.PropTypes.func,
	    rightAvatar: React.PropTypes.element,
	    rightIcon: React.PropTypes.element,
	    rightIconButton: React.PropTypes.element,
	    rightToggle: React.PropTypes.element,
	    primaryText: React.PropTypes.node,
	    secondaryText: React.PropTypes.node,
	    secondaryTextLines: React.PropTypes.oneOf([1, 2])
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      autoGenerateNestedIndicator: true,
	      initiallyOpen: false,
	      nestedItems: [],
	      nestedLevel: 0,
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {},
	      onNestedListToggle: function onNestedListToggle() {},
	      onTouchStart: function onTouchStart() {},
	      secondaryTextLines: 1
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      isKeyboardFocused: false,
	      open: this.props.initiallyOpen,
	      rightIconButtonHovered: false,
	      rightIconButtonKeyboardFocused: false,
	      touch: false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  render: function render() {
	    var _props = this.props;
	    var autoGenerateNestedIndicator = _props.autoGenerateNestedIndicator;
	    var children = _props.children;
	    var disabled = _props.disabled;
	    var disableKeyboardFocus = _props.disableKeyboardFocus;
	    var innerDivStyle = _props.innerDivStyle;
	    var insetChildren = _props.insetChildren;
	    var leftAvatar = _props.leftAvatar;
	    var leftCheckbox = _props.leftCheckbox;
	    var leftIcon = _props.leftIcon;
	    var nestedItems = _props.nestedItems;
	    var nestedLevel = _props.nestedLevel;
	    var onKeyboardFocus = _props.onKeyboardFocus;
	    var onMouseLeave = _props.onMouseLeave;
	    var onMouseEnter = _props.onMouseEnter;
	    var onTouchStart = _props.onTouchStart;
	    var onTouchTap = _props.onTouchTap;
	    var rightAvatar = _props.rightAvatar;
	    var rightIcon = _props.rightIcon;
	    var rightIconButton = _props.rightIconButton;
	    var rightToggle = _props.rightToggle;
	    var primaryText = _props.primaryText;
	    var secondaryText = _props.secondaryText;
	    var secondaryTextLines = _props.secondaryTextLines;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['autoGenerateNestedIndicator', 'children', 'disabled', 'disableKeyboardFocus', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'onKeyboardFocus', 'onMouseLeave', 'onMouseEnter', 'onTouchStart', 'onTouchTap', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'secondaryText', 'secondaryTextLines', 'style']);

	    var textColor = this.state.muiTheme.rawTheme.palette.textColor;
	    var hoverColor = ColorManipulator.fade(textColor, 0.1);
	    var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
	    var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
	    var twoLine = secondaryText && secondaryTextLines === 1;
	    var threeLine = secondaryText && secondaryTextLines > 1;
	    var hasCheckbox = leftCheckbox || rightToggle;

	    var styles = {
	      root: {
	        backgroundColor: (this.state.isKeyboardFocused || this.state.hovered) && !this.state.rightIconButtonHovered && !this.state.rightIconButtonKeyboardFocused ? hoverColor : null,
	        color: textColor,
	        display: 'block',
	        fontSize: 16,
	        lineHeight: '16px',
	        position: 'relative',
	        transition: Transitions.easeOut()
	      },

	      //This inner div is needed so that ripples will span the entire container
	      innerDiv: {
	        marginLeft: nestedLevel * this.state.muiTheme.listItem.nestedLevelDepth,
	        paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
	        paddingRight: rightIcon || rightAvatar || rightIconButton ? 56 : rightToggle ? 72 : 16,
	        paddingBottom: singleAvatar ? 20 : 16,
	        paddingTop: singleNoAvatar || threeLine ? 16 : 20,
	        position: 'relative'
	      },

	      icons: {
	        height: 24,
	        width: 24,
	        display: 'block',
	        position: 'absolute',
	        top: twoLine ? 12 : singleAvatar ? 4 : 0,
	        padding: 12
	      },

	      leftIcon: {
	        color: Colors.grey600,
	        fill: Colors.grey600,
	        left: 4
	      },

	      rightIcon: {
	        color: Colors.grey400,
	        fill: Colors.grey400,
	        right: 4
	      },

	      avatars: {
	        position: 'absolute',
	        top: singleAvatar ? 8 : 16
	      },

	      label: {
	        cursor: 'pointer'
	      },

	      leftAvatar: {
	        left: 16
	      },

	      rightAvatar: {
	        right: 16
	      },

	      leftCheckbox: {
	        position: 'absolute',
	        display: 'block',
	        width: 24,
	        top: twoLine ? 24 : singleAvatar ? 16 : 12,
	        left: 16
	      },

	      primaryText: {},

	      rightIconButton: {
	        position: 'absolute',
	        display: 'block',
	        top: twoLine ? 12 : singleAvatar ? 4 : 0,
	        right: 4
	      },

	      rightToggle: {
	        position: 'absolute',
	        display: 'block',
	        width: 54,
	        top: twoLine ? 25 : singleAvatar ? 17 : 13,
	        right: 8
	      },

	      secondaryText: {
	        fontSize: 14,
	        lineHeight: threeLine ? '18px' : '16px',
	        height: threeLine ? 36 : 16,
	        margin: 0,
	        marginTop: 4,
	        color: Typography.textLightBlack,

	        //needed for 2 and 3 line ellipsis
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        whiteSpace: threeLine ? null : 'nowrap',
	        display: threeLine ? '-webkit-box' : null,
	        WebkitLineClamp: threeLine ? 2 : null,
	        WebkitBoxOrient: threeLine ? 'vertical' : null
	      }
	    };

	    var contentChildren = [children];

	    if (leftIcon) {
	      this._pushElement(contentChildren, leftIcon, this.mergeStyles(styles.icons, styles.leftIcon));
	    }

	    if (rightIcon) {
	      this._pushElement(contentChildren, rightIcon, this.mergeStyles(styles.icons, styles.rightIcon));
	    }

	    if (leftAvatar) {
	      this._pushElement(contentChildren, leftAvatar, this.mergeStyles(styles.avatars, styles.leftAvatar));
	    }

	    if (rightAvatar) {
	      this._pushElement(contentChildren, rightAvatar, this.mergeStyles(styles.avatars, styles.rightAvatar));
	    }

	    if (leftCheckbox) {
	      this._pushElement(contentChildren, leftCheckbox, this.mergeStyles(styles.leftCheckbox));
	    }

	    //RightIconButtonElement
	    var hasNestListItems = nestedItems.length;
	    var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
	    var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;

	    if (rightIconButton || needsNestedIndicator) {
	      var rightIconButtonElement = rightIconButton;
	      var rightIconButtonHandlers = {
	        onKeyboardFocus: this._handleRightIconButtonKeyboardFocus,
	        onMouseEnter: this._handleRightIconButtonMouseEnter,
	        onMouseLeave: this._handleRightIconButtonMouseLeave,
	        onTouchTap: this._handleRightIconButtonTouchTap,
	        onMouseDown: this._handleRightIconButtonMouseUp,
	        onMouseUp: this._handleRightIconButtonMouseUp
	      };

	      // Create a nested list indicator icon if we don't have an icon on the right
	      if (needsNestedIndicator) {
	        rightIconButtonElement = this.state.open ? React.createElement(
	          IconButton,
	          null,
	          React.createElement(OpenIcon, null)
	        ) : React.createElement(
	          IconButton,
	          null,
	          React.createElement(CloseIcon, null)
	        );
	        rightIconButtonHandlers.onTouchTap = this._handleNestedListToggle;
	      }

	      this._pushElement(contentChildren, rightIconButtonElement, this.mergeStyles(styles.rightIconButton), rightIconButtonHandlers);
	    }

	    if (rightToggle) {
	      this._pushElement(contentChildren, rightToggle, this.mergeStyles(styles.rightToggle));
	    }

	    if (primaryText) {
	      var secondaryTextElement = this._createTextElement(styles.primaryText, primaryText, 'primaryText');
	      contentChildren.push(secondaryTextElement);
	    }

	    if (secondaryText) {
	      var secondaryTextElement = this._createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
	      contentChildren.push(secondaryTextElement);
	    }

	    var nestedList = nestedItems.length ? React.createElement(
	      NestedList,
	      { nestedLevel: nestedLevel + 1, open: this.state.open },
	      nestedItems
	    ) : undefined;

	    return hasCheckbox ? this._createLabelElement(styles, contentChildren) : disabled ? this._createDisabledElement(styles, contentChildren) : React.createElement(
	      'div',
	      null,
	      React.createElement(
	        EnhancedButton,
	        _extends({}, other, {
	          disabled: disabled,
	          disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
	          linkButton: true,
	          onKeyboardFocus: this._handleKeyboardFocus,
	          onMouseLeave: this._handleMouseLeave,
	          onMouseEnter: this._handleMouseEnter,
	          onTouchStart: this._handleTouchStart,
	          onTouchTap: onTouchTap,
	          ref: 'enhancedButton',
	          style: this.mergeStyles(styles.root, style) }),
	        React.createElement(
	          'div',
	          { style: this.prepareStyles(styles.innerDiv, innerDivStyle) },
	          contentChildren
	        )
	      ),
	      nestedList
	    );
	  },

	  applyFocusState: function applyFocusState(focusState) {
	    var button = this.refs.enhancedButton;
	    var buttonEl = ReactDOM.findDOMNode(button);

	    if (button) {
	      switch (focusState) {
	        case 'none':
	          buttonEl.blur();
	          break;
	        case 'focused':
	          buttonEl.focus();
	          break;
	        case 'keyboard-focused':
	          button.setKeyboardFocus();
	          buttonEl.focus();
	          break;
	      }
	    }
	  },

	  _createDisabledElement: function _createDisabledElement(styles, contentChildren) {
	    var _props2 = this.props;
	    var innerDivStyle = _props2.innerDivStyle;
	    var style = _props2.style;

	    var mergedDivStyles = this.prepareStyles(styles.root, styles.innerDiv, innerDivStyle, style);

	    return React.createElement('div', { style: mergedDivStyles }, contentChildren);
	  },

	  _createLabelElement: function _createLabelElement(styles, contentChildren) {
	    var _props3 = this.props;
	    var innerDivStyle = _props3.innerDivStyle;
	    var style = _props3.style;

	    var mergedLabelStyles = this.prepareStyles(styles.root, styles.innerDiv, innerDivStyle, styles.label, style);

	    return React.createElement('label', { style: mergedLabelStyles }, contentChildren);
	  },

	  _createTextElement: function _createTextElement(styles, data, key) {
	    var isAnElement = React.isValidElement(data);
	    var mergedStyles = isAnElement ? this.prepareStyles(styles, data.props.style) : null;

	    return isAnElement ? React.cloneElement(data, {
	      key: key,
	      style: mergedStyles
	    }) : React.createElement(
	      'div',
	      { key: key, style: this.prepareStyles(styles) },
	      data
	    );
	  },

	  _handleKeyboardFocus: function _handleKeyboardFocus(e, isKeyboardFocused) {
	    this.setState({ isKeyboardFocused: isKeyboardFocused });
	    this.props.onKeyboardFocus(e, isKeyboardFocused);
	  },

	  _handleMouseEnter: function _handleMouseEnter(e) {
	    if (!this.state.touch) this.setState({ hovered: true });
	    this.props.onMouseEnter(e);
	  },

	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    this.props.onMouseLeave(e);
	  },

	  _handleNestedListToggle: function _handleNestedListToggle(e) {
	    e.stopPropagation();
	    this.setState({ open: !this.state.open });
	    this.props.onNestedListToggle(this);
	  },

	  _handleRightIconButtonKeyboardFocus: function _handleRightIconButtonKeyboardFocus(e, isKeyboardFocused) {
	    var iconButton = this.props.rightIconButton;
	    var newState = {};

	    newState.rightIconButtonKeyboardFocused = isKeyboardFocused;
	    if (isKeyboardFocused) newState.isKeyboardFocused = false;
	    this.setState(newState);

	    if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(e, isKeyboardFocused);
	  },

	  _handleRightIconButtonMouseDown: function _handleRightIconButtonMouseDown(e) {
	    var iconButton = this.props.rightIconButton;
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onMouseDown) iconButton.props.onMouseDown(e);
	  },

	  _handleRightIconButtonMouseLeave: function _handleRightIconButtonMouseLeave(e) {
	    var iconButton = this.props.rightIconButton;
	    this.setState({ rightIconButtonHovered: false });
	    if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(e);
	  },

	  _handleRightIconButtonMouseEnter: function _handleRightIconButtonMouseEnter(e) {
	    var iconButton = this.props.rightIconButton;
	    this.setState({ rightIconButtonHovered: true });
	    if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(e);
	  },

	  _handleRightIconButtonMouseUp: function _handleRightIconButtonMouseUp(e) {
	    var iconButton = this.props.rightIconButton;
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(e);
	  },

	  _handleRightIconButtonTouchTap: function _handleRightIconButtonTouchTap(e) {
	    var iconButton = this.props.rightIconButton;

	    //Stop the event from bubbling up to the list-item
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onTouchTap) iconButton.props.onTouchTap(e);
	  },

	  _handleTouchStart: function _handleTouchStart(e) {
	    this.setState({ touch: true });
	    this.props.onTouchStart(e);
	  },

	  _pushElement: function _pushElement(children, element, baseStyles, additionalProps) {
	    if (element) {
	      var styles = this.mergeStyles(baseStyles, element.props.style);
	      children.push(React.cloneElement(element, _extends({
	        key: children.length,
	        style: styles
	      }, additionalProps)));
	    }
	  }

	});

	module.exports = ListItem;


/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var SvgIcon = __webpack_require__(380);

	var NavigationArrowDropUp = React.createClass({
	  displayName: 'NavigationArrowDropUp',

	  mixins: [PureRenderMixin],

	  render: function render() {
	    return React.createElement(
	      SvgIcon,
	      this.props,
	      React.createElement('path', { d: 'M7 14l5-5 5 5z' })
	    );
	  }

	});

	module.exports = NavigationArrowDropUp;


/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var ImmutabilityHelper = __webpack_require__(331);
	var List = __webpack_require__(434);

	var NestedList = React.createClass({
	  displayName: 'NestedList',

	  propTypes: {
	    nestedLevel: React.PropTypes.number,
	    open: React.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      nestedLevel: 1,
	      open: false
	    };
	  },

	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var open = _props.open;
	    var nestedLevel = _props.nestedLevel;
	    var style = _props.style;

	    var styles = {
	      root: {
	        display: open ? null : 'none'
	      }
	    };

	    return React.createElement(
	      List,
	      { style: ImmutabilityHelper.merge(styles.root, style) },
	      React.Children.map(children, function (child) {
	        return React.isValidElement(child) ? React.cloneElement(child, {
	          nestedLevel: nestedLevel + 1
	        }) : child;
	      })
	    );
	  }

	});

	module.exports = NestedList;


/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(330);
	var Colors = __webpack_require__(341);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var Avatar = React.createClass({
	  displayName: 'Avatar',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    backgroundColor: React.PropTypes.string,
	    color: React.PropTypes.string,
	    icon: React.PropTypes.element,
	    size: React.PropTypes.number,
	    src: React.PropTypes.string,
	    style: React.PropTypes.object
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      backgroundColor: Colors.grey400,
	      color: Colors.white,
	      size: 40
	    };
	  },

	  render: function render() {
	    var _props = this.props;
	    var backgroundColor = _props.backgroundColor;
	    var color = _props.color;
	    var icon = _props.icon;
	    var size = _props.size;
	    var src = _props.src;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['backgroundColor', 'color', 'icon', 'size', 'src', 'style']);

	    var styles = {
	      root: {
	        height: size,
	        width: size,
	        userSelect: 'none',
	        borderRadius: '50%',
	        display: 'inline-block'
	      }
	    };

	    if (src) {
	      var borderColor = this.state.muiTheme.avatar.borderColor;

	      if (borderColor) {
	        styles.root = this.mergeStyles(styles.root, {
	          height: size - 2,
	          width: size - 2,
	          border: 'solid 1px ' + borderColor
	        });
	      }

	      return React.createElement('img', _extends({}, other, { src: src, style: this.prepareStyles(styles.root, style) }));
	    } else {
	      styles.root = this.mergeStyles(styles.root, {
	        backgroundColor: backgroundColor,
	        textAlign: 'center',
	        lineHeight: size + 'px',
	        fontSize: size / 2 + 4,
	        color: color
	      });

	      var styleIcon = {
	        margin: 8
	      };

	      var iconElement = icon ? React.cloneElement(icon, {
	        color: color,
	        style: this.mergeStyles(styleIcon, icon.props.style)
	      }) : null;

	      return React.createElement(
	        'div',
	        _extends({}, other, { style: this.prepareStyles(styles.root, style) }),
	        iconElement,
	        this.props.children
	      );
	    }
	  }
	});

	module.exports = Avatar;


/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var List = __webpack_require__(434);
	var ListItem = __webpack_require__(435);
	var Avatar = __webpack_require__(438);
	var FontIcon = __webpack_require__(377);
	var TimePicker = __webpack_require__(422);
	var TextField = __webpack_require__(402);
	var Checkbox = __webpack_require__(440);
	var RaisedButton = __webpack_require__(328);

	var SearchWidget = React.createClass({
		displayName: 'SearchWidget',

		search: function search(event) {
			var searchParams = this.createFilter();

			this.props.callbackParent(searchParams);
		},
		saveSearch: function saveSearch(event) {
			var searchParams = this.createFilter();

			this.props.callbackParent(searchParams);
		},
		createFilter: function createFilter() {
			var daysOfTheWeek = [];
			if (this.refs.day0.isChecked()) daysOfTheWeek.push(0);
			if (this.refs.day1.isChecked()) daysOfTheWeek.push(1);
			if (this.refs.day2.isChecked()) daysOfTheWeek.push(2);
			if (this.refs.day3.isChecked()) daysOfTheWeek.push(3);
			if (this.refs.day4.isChecked()) daysOfTheWeek.push(4);
			if (this.refs.day5.isChecked()) daysOfTheWeek.push(5);
			if (this.refs.day6.isChecked()) daysOfTheWeek.push(6);

			var searchParams = {
				filtername: this.refs.filterName.getValue(),
				date: {
					start: this.refs.fromDateField.getValue(),
					end: this.refs.toDateField.getValue()
				},
				day: daysOfTheWeek,
				time: {
					start: this.refs.fromTime.getTime(),
					end: this.refs.toTime.getTime()
				},
				length: {
					min: this.refs.minLength.getValue(),
					max: this.refs.maxLength.getValue()
				},
				tags: this.refs.tags.getValue(),
				name: this.refs.name.getValue(),
				photo: this.refs.photo.isChecked(),
				author: null
			};
			alert(JSON.stringify(searchParams));
			return searchParams;
		},
		render: function render() {
			var now = new Date();
			var month = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth();
			var day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
			var currentDate = now.getFullYear() + "-" + month + "-" + day;

			var fieldStyle = { width: '50%' };
			return React.createElement(
				'div',
				{ style: { display: this.props.display } },
				React.createElement(TextField, { ref: 'name', hintText: 'Soundbite Name', floatingLabelText: 'Name' }),
				React.createElement(Checkbox, { ref: 'photo', name: 'photo', label: 'Photo?' }),
				React.createElement(TextField, { ref: 'fromDateField', style: fieldStyle, hintText: 'From Date', type: 'date', floatingLabelText: 'From Date', defaultValue: currentDate }),
				React.createElement(TextField, { ref: 'toDateField', style: fieldStyle, hintText: 'To Date', type: 'date', floatingLabelText: 'To Date', defaultValue: currentDate }),
				React.createElement(
					'table',
					null,
					React.createElement(
						'tr',
						null,
						React.createElement(
							'td',
							null,
							React.createElement(Checkbox, { labelPosition: 'left', ref: 'day0', name: 'DayOfWeek', value: '0', label: 'Su' })
						),
						React.createElement(
							'td',
							null,
							React.createElement(Checkbox, { labelPosition: 'left', ref: 'day1', name: 'DayOfWeek', value: '1', label: 'M' })
						),
						React.createElement(
							'td',
							null,
							React.createElement(Checkbox, { labelPosition: 'left', ref: 'day2', name: 'DayOfWeek', value: '2', label: 'Tu' })
						),
						React.createElement(
							'td',
							null,
							React.createElement(Checkbox, { labelPosition: 'left', ref: 'day3', name: 'DayOfWeek', value: '3', label: 'W' })
						),
						React.createElement(
							'td',
							null,
							React.createElement(Checkbox, { labelPosition: 'left', ref: 'day4', name: 'DayOfWeek', value: '4', label: 'Th' })
						),
						React.createElement(
							'td',
							null,
							React.createElement(Checkbox, { labelPosition: 'left', ref: 'day5', name: 'DayOfWeek', value: '5', label: 'F' })
						),
						React.createElement(
							'td',
							null,
							React.createElement(Checkbox, { labelPosition: 'left', ref: 'day6', name: 'DayOfWeek', value: '6', label: 'Sa' })
						)
					)
				),
				React.createElement(TimePicker, { ref: 'fromTime', textFieldStyle: fieldStyle, format: 'ampm', hintText: 'From Time', floatingLabelText: 'From Time', defaultTime: now }),
				React.createElement(TimePicker, { ref: 'toTime', textFieldStyle: fieldStyle, format: 'ampm', hintText: 'To Time', floatingLabelText: 'To Time', defaultTime: now }),
				React.createElement(TextField, { ref: 'minLength', style: fieldStyle, hintText: 'Min. Length', floatingLabelText: 'Min. Length (Sec.)', type: 'number' }),
				React.createElement(TextField, { ref: 'maxLength', style: fieldStyle, hintText: 'Max. Length', floatingLabelText: 'Max. Length (Sec.)', type: 'number' }),
				React.createElement(TextField, { ref: 'tags', hintText: 'Tags', multiLine: true, rows: 5, floatingLabelText: 'Tags' }),
				React.createElement(
					RaisedButton,
					{ style: fieldStyle, onClick: this.saveSearch },
					React.createElement(FontIcon, { className: 'fa fa-floppy-o' }),
					'Save Filter'
				),
				React.createElement(
					RaisedButton,
					{ style: fieldStyle, onClick: this.search },
					React.createElement(FontIcon, { className: 'ion-search' }),
					'Search'
				),
				React.createElement(TextField, { ref: 'filterName', hintText: 'Filter Name', floatingLabelText: 'Filter Name' })
			);
		}
	});

	module.exports = SearchWidget;

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var EnhancedSwitch = __webpack_require__(391);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var CheckboxOutline = __webpack_require__(441);
	var CheckboxChecked = __webpack_require__(442);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var Checkbox = React.createClass({
	  displayName: 'Checkbox',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    checked: React.PropTypes.bool,
	    checkedIcon: React.PropTypes.element,
	    defaultChecked: React.PropTypes.bool,
	    iconStyle: React.PropTypes.object,
	    labelStyle: React.PropTypes.object,
	    onCheck: React.PropTypes.func,
	    unCheckedIcon: React.PropTypes.element
	  },

	  getInitialState: function getInitialState() {
	    return {
	      switched: this.props.checked || this.props.defaultChecked || this.props.valueLink && this.props.valueLink.value || false,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.checkbox;
	  },

	  getStyles: function getStyles() {
	    var checkboxSize = 24;
	    var styles = {
	      icon: {
	        height: checkboxSize,
	        width: checkboxSize
	      },
	      check: {
	        position: 'absolute',
	        opacity: 0,
	        transform: 'scale(0)',
	        transitionOrigin: '50% 50%',
	        transition: Transitions.easeOut('450ms', 'opacity', '0ms') + ', ' + Transitions.easeOut('0ms', 'transform', '450ms'),
	        fill: this.getTheme().checkedColor
	      },
	      box: {
	        position: 'absolute',
	        opacity: 1,
	        fill: this.getTheme().boxColor,
	        transition: Transitions.easeOut('2s', null, '200ms')
	      },
	      checkWhenSwitched: {
	        opacity: 1,
	        transform: 'scale(1)',
	        transition: Transitions.easeOut('0ms', 'opacity', '0ms') + ', ' + Transitions.easeOut('800ms', 'transform', '0ms')
	      },
	      boxWhenSwitched: {
	        transition: Transitions.easeOut('100ms', null, '0ms'),
	        fill: this.getTheme().checkedColor
	      },
	      checkWhenDisabled: {
	        fill: this.getTheme().disabledColor
	      },
	      boxWhenDisabled: {
	        fill: this.getTheme().disabledColor
	      },
	      label: {
	        color: this.props.disabled ? this.getTheme().labelDisabledColor : this.getTheme().labelColor
	      }
	    };

	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var iconStyle = _props.iconStyle;
	    var onCheck = _props.onCheck;
	    var checkedIcon = _props.checkedIcon;
	    var unCheckedIcon = _props.unCheckedIcon;

	    var other = _objectWithoutProperties(_props, ['iconStyle', 'onCheck', 'checkedIcon', 'unCheckedIcon']);

	    var styles = this.getStyles();
	    var boxStyles = this.mergeStyles(styles.box, this.state.switched && styles.boxWhenSwitched, iconStyle, this.props.disabled && styles.boxWhenDisabled);
	    var checkStyles = this.mergeStyles(styles.check, this.state.switched && styles.checkWhenSwitched, iconStyle, this.props.disabled && styles.checkWhenDisabled);

	    var checkedElement = checkedIcon ? React.cloneElement(checkedIcon, {
	      style: this.mergeStyles(checkStyles, checkedIcon.props.style)
	    }) : React.createElement(CheckboxChecked, {
	      style: checkStyles
	    });

	    var unCheckedElement = unCheckedIcon ? React.cloneElement(unCheckedIcon, {
	      style: this.mergeStyles(boxStyles, unCheckedIcon.props.style)
	    }) : React.createElement(CheckboxOutline, {
	      style: boxStyles
	    });

	    var checkboxElement = React.createElement(
	      'div',
	      null,
	      unCheckedElement,
	      checkedElement
	    );

	    var rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
	    var mergedIconStyle = this.mergeStyles(styles.icon, iconStyle);

	    var labelStyle = this.mergeStyles(styles.label, this.props.labelStyle);

	    var enhancedSwitchProps = {
	      ref: "enhancedSwitch",
	      inputType: "checkbox",
	      switched: this.state.switched,
	      switchElement: checkboxElement,
	      rippleColor: rippleColor,
	      iconStyle: mergedIconStyle,
	      onSwitch: this._handleCheck,
	      labelStyle: labelStyle,
	      onParentShouldUpdate: this._handleStateChange,
	      defaultSwitched: this.props.defaultChecked,
	      labelPosition: this.props.labelPosition ? this.props.labelPosition : "right"
	    };

	    return React.createElement(EnhancedSwitch, _extends({}, other, enhancedSwitchProps));
	  },

	  isChecked: function isChecked() {
	    return this.refs.enhancedSwitch.isSwitched();
	  },

	  setChecked: function setChecked(newCheckedValue) {
	    this.refs.enhancedSwitch.setSwitched(newCheckedValue);
	  },

	  _handleCheck: function _handleCheck(e, isInputChecked) {
	    if (this.props.onCheck) this.props.onCheck(e, isInputChecked);
	  },

	  _handleStateChange: function _handleStateChange(newSwitched) {
	    this.setState({ switched: newSwitched });
	  }

	});

	module.exports = Checkbox;


/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var SvgIcon = __webpack_require__(380);

	var ToggleCheckBoxOutlineBlank = React.createClass({
	  displayName: 'ToggleCheckBoxOutlineBlank',

	  mixins: [PureRenderMixin],

	  render: function render() {
	    return React.createElement(
	      SvgIcon,
	      this.props,
	      React.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' })
	    );
	  }

	});

	module.exports = ToggleCheckBoxOutlineBlank;


/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var SvgIcon = __webpack_require__(380);

	var ToggleCheckBox = React.createClass({
	  displayName: 'ToggleCheckBox',

	  mixins: [PureRenderMixin],

	  render: function render() {
	    return React.createElement(
	      SvgIcon,
	      this.props,
	      React.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' })
	    );
	  }

	});

	module.exports = ToggleCheckBox;


/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);

	var RaisedButton = __webpack_require__(328);
	var FlatButton = __webpack_require__(366);
	var FloatingActionButton = __webpack_require__(444);
	var Slider = __webpack_require__(399);
	var FontIcon = __webpack_require__(377);
	var IconMenu = __webpack_require__(445);
	var MenuItem = __webpack_require__(447);
	var IconButton = __webpack_require__(376);

	var MediaPlayer = __webpack_require__(398);

	var NowPlaying = React.createClass({
		displayName: 'NowPlaying',

		getInitialState: function getInitialState() {
			return null;
		},
		getYoutubeId: function getYoutubeId(fullMediaUrl) {
			var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
			var match = fullMediaUrl.match(regExp);
			if (match && match[2].length == 11) {
				return match[2];
			} else {
				//error
			}
		},
		playYoutubeById: function playYoutubeById(event) {
			var youtubeId = this.getYoutubeId(this.props.soundbite.url);
			YoutubeVideoPlayer.openVideo(youtubeId);
		},
		shareFacebook: function shareFacebook(event) {
			window.plugins.socialsharing.share('My Soundbite', null, null, 'http://www.google.com');
			//window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, 'https://www.google.com', function() {console.log('share ok')}, function(errormsg){alert(errormsg)});
		},
		render: function render() {
			var defaultCoverImage = 'iVBORw0KGgoAAAANSUhEUgAABNoAAATaCAYAAACEiwtKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AABsp0lEQVR4Xuzdf8xd9Z0n9gtpfk1DEuFuAwprWCneamfAEbudAQnMOlJ2OxjU7i6ENjFUCdMgYAY8u9vR2FDlVwV2lNW2QBZQ0iHTBpMugd1uCyZSMyXFBsHs7qAYpiOt/cfGwQVmizX5Ne7M0NDnfTk3cRzbz3Pv+Zz767xe0qPnnGuDn+fe8/N9Pp/v97R3/MrlbwwAAAAAgFZOb74DAAAAAC0I2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACggKANAAAAAAoI2gAAAACgwOkX/8LRwY9/cKRZBQAAAADG9frhgyraAAAAAKCCoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAACgjaAAAAAKCAoA0AAAAA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AAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFBC0AQAAAEABQRsAAAAAFPj/27FjAgAAGIZB9a96IpYTZCDaAAAAACAg2gAAAAAgINoAAAAAICDaAAAAACAg2gAAAAAgINoAAAAAICDaAAAAACAg2gAAAAAgINoAAAAAICDaAAAAACAg2gAAAAAgINoAAAAAICDaAAAAACAg2gAAAAAgINoAAAAA4G07/q6/cmbi9QcAAAAASUVORK5CYII';

			var mediaPlayer = null;
			var youtubePlayer = null;
			var url;

			var coverImage = defaultCoverImage;

			if (this.props.soundbite) {
				if (this.props.soundbite.filename) {
					mediaPlayer = React.createElement(MediaPlayer, {
						key: this.props.soundbite.filename,
						ref: 'nowPlayingMediaPlayer',
						mediaPlayerStyle: { margin: '0 5%' },
						file: this.props.soundbite.filename
					});
				}

				if (this.props.soundbite.url) {
					var youtubeId = this.getYoutubeId(this.props.soundbite.url);
					youtubePlayer = React.createElement('iframe', {
						width: '100vw',
						src: 'http://www.youtube.com/embed/' + youtubeId + '?rel=0&amp;controls=0&amp;showinfo=0', frameborder: '0', allowfullscreen: true });

					url = youtubeId;
				}

				if (this.props.soundbite.photo && this.props.soundbite.photo != 'undefined') {
					coverImage = this.props.soundbite.photo;
				}
			}
			var iconButton = React.createElement(
				IconButton,
				{ tooltip: 'Add to Playlist' },
				React.createElement(FontIcon, { className: 'ion-plus-circled' })
			);

			return React.createElement(
				'div',
				null,
				React.createElement('img', { height: '300px', align: 'middle', src: 'data:image/jpeg;base64,' + coverImage }),
				mediaPlayer,
				youtubePlayer,
				url,
				React.createElement(
					IconMenu,
					{ openDirection: 'top-right', iconButtonElement: iconButton },
					React.createElement(MenuItem, { primaryText: 'Refresh' }),
					React.createElement(MenuItem, { primaryText: 'Send feedback' }),
					React.createElement(MenuItem, { primaryText: 'Settings' }),
					React.createElement(MenuItem, { primaryText: 'Help' }),
					React.createElement(MenuItem, { primaryText: 'Sign out' })
				),
				React.createElement(
					'button',
					{ onClick: this.shareFacebook },
					'msg via Facebook (with errcallback)'
				)
			);
		}
	});

	module.exports = NowPlaying;

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var StylePropable = __webpack_require__(330);
	var Transitions = __webpack_require__(338);
	var ColorManipulator = __webpack_require__(339);
	var EnhancedButton = __webpack_require__(342);
	var FontIcon = __webpack_require__(377);
	var Paper = __webpack_require__(364);
	var Children = __webpack_require__(346);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var getZDepth = function getZDepth(disabled) {
	  var zDepth = disabled ? 0 : 2;
	  return {
	    zDepth: zDepth,
	    initialZDepth: zDepth
	  };
	};

	var FloatingActionButton = React.createClass({
	  displayName: 'FloatingActionButton',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  propTypes: {
	    backgroundColor: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    disabledColor: React.PropTypes.string,
	    iconClassName: React.PropTypes.string,
	    iconStyle: React.PropTypes.object,
	    mini: React.PropTypes.bool,
	    onMouseDown: React.PropTypes.func,
	    onMouseUp: React.PropTypes.func,
	    onMouseLeave: React.PropTypes.func,
	    onTouchEnd: React.PropTypes.func,
	    onTouchStart: React.PropTypes.func,
	    secondary: React.PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    var zDepth = this.props.disabled ? 0 : 2;
	    return {
	      hovered: false,
	      initialZDepth: zDepth,
	      touch: false,
	      zDepth: zDepth,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  componentWillMount: function componentWillMount() {
	    this.setState(getZDepth(this.props.disabled));
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(newProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    if (newProps.disabled !== this.props.disabled) {
	      this.setState(getZDepth(newProps.disabled));
	    }
	  },

	  componentDidMount: function componentDidMount() {
	    if (process.env.NODE_ENV !== 'production') {
	      if (this.props.iconClassName && this.props.children) {
	        var warning = 'You have set both an iconClassName and a child icon. ' + 'It is recommended you use only one method when adding ' + 'icons to FloatingActionButtons.';
	        console.warn(warning);
	      }
	    }
	  },

	  _getBackgroundColor: function _getBackgroundColor() {
	    return this.props.disabled ? this.props.disabledColor || this.getTheme().disabledColor : this.props.backgroundColor ? this.props.backgroundColor : this.props.secondary ? this.getTheme().secondaryColor : this.getTheme().color;
	  },

	  getTheme: function getTheme() {
	    return this.state.muiTheme.floatingActionButton;
	  },

	  _getIconColor: function _getIconColor() {
	    return this.props.disabled ? this.getTheme().disabledTextColor : this.props.secondary ? this.getTheme().secondaryIconColor : this.getTheme().iconColor;
	  },

	  getStyles: function getStyles() {
	    var themeVariables = this.state.muiTheme.floatingActionButton;

	    var styles = {
	      root: {
	        transition: Transitions.easeOut(),
	        display: 'inline-block'
	      },
	      container: {
	        transition: Transitions.easeOut(),
	        position: 'relative',
	        height: themeVariables.buttonSize,
	        width: themeVariables.buttonSize,
	        padding: 0,
	        overflow: 'hidden',
	        backgroundColor: this._getBackgroundColor(),
	        borderRadius: '50%',
	        textAlign: 'center',
	        verticalAlign: 'bottom',
	        //This is need so that ripples do not bleed
	        //past border radius.
	        //See: http://stackoverflow.com/questions/17298739/css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
	        transform: 'translate3d(0, 0, 0)'
	      },
	      containerWhenMini: {
	        height: themeVariables.miniSize,
	        width: themeVariables.miniSize
	      },
	      overlay: {
	        transition: Transitions.easeOut(),
	        top: 0
	      },
	      overlayWhenHovered: {
	        backgroundColor: ColorManipulator.fade(this._getIconColor(), 0.4)
	      },
	      icon: {
	        height: themeVariables.buttonSize,
	        lineHeight: themeVariables.buttonSize + 'px',
	        fill: themeVariables.iconColor,
	        color: this._getIconColor()
	      },
	      iconWhenMini: {
	        height: themeVariables.miniSize,
	        lineHeight: themeVariables.miniSize + 'px'
	      }
	    };
	    return styles;
	  },

	  render: function render() {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var mini = _props.mini;
	    var secondary = _props.secondary;
	    var iconStyle = _props.iconStyle;
	    var iconClassName = _props.iconClassName;

	    var other = _objectWithoutProperties(_props, ['disabled', 'mini', 'secondary', 'iconStyle', 'iconClassName']);

	    var styles = this.getStyles();

	    var iconElement = undefined;
	    if (iconClassName) {
	      iconElement = React.createElement(FontIcon, {
	        className: iconClassName,
	        style: this.mergeStyles(styles.icon, mini && styles.iconWhenMini, iconStyle) });
	    }

	    var children = Children.extend(this.props.children, {
	      style: this.mergeStyles(styles.icon, mini && styles.iconWhenMini, iconStyle)
	    });

	    var buttonEventHandlers = disabled ? null : {
	      onMouseDown: this._handleMouseDown,
	      onMouseUp: this._handleMouseUp,
	      onMouseLeave: this._handleMouseLeave,
	      onMouseEnter: this._handleMouseEnter,
	      onTouchStart: this._handleTouchStart,
	      onTouchEnd: this._handleTouchEnd,
	      onKeyboardFocus: this._handleKeyboardFocus
	    };

	    return React.createElement(
	      Paper,
	      {
	        style: this.mergeStyles(styles.root, this.props.style),
	        zDepth: this.state.zDepth,
	        circle: true },
	      React.createElement(
	        EnhancedButton,
	        _extends({}, other, buttonEventHandlers, {
	          ref: 'container',
	          disabled: disabled,
	          style: this.mergeStyles(styles.container, this.props.mini && styles.containerWhenMini, iconStyle),
	          focusRippleColor: styles.icon.color,
	          touchRippleColor: styles.icon.color }),
	        React.createElement(
	          'div',
	          {
	            ref: 'overlay',
	            style: this.prepareStyles(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered) },
	          iconElement,
	          children
	        )
	      )
	    );
	  },

	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) {
	      this.setState({ zDepth: this.state.initialZDepth + 1 });
	    }
	    if (this.props.onMouseDown) this.props.onMouseDown(e);
	  },

	  _handleMouseUp: function _handleMouseUp(e) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onMouseUp) this.props.onMouseUp(e);
	  },

	  _handleMouseLeave: function _handleMouseLeave(e) {
	    if (!this.refs.container.isKeyboardFocused()) this.setState({ zDepth: this.state.initialZDepth, hovered: false });
	    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
	  },

	  _handleMouseEnter: function _handleMouseEnter(e) {
	    if (!this.refs.container.isKeyboardFocused() && !this.state.touch) {
	      this.setState({ hovered: true });
	    }
	    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
	  },

	  _handleTouchStart: function _handleTouchStart(e) {
	    this.setState({
	      touch: true,
	      zDepth: this.state.initialZDepth + 1
	    });
	    if (this.props.onTouchStart) this.props.onTouchStart(e);
	  },

	  _handleTouchEnd: function _handleTouchEnd(e) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onTouchEnd) this.props.onTouchEnd(e);
	  },

	  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
	    if (keyboardFocused && !this.props.disabled) {
	      this.setState({ zDepth: this.state.initialZDepth + 1 });
	      ReactDOM.findDOMNode(this.refs.overlay).style.backgroundColor = ColorManipulator.fade(this.getStyles().icon.color, 0.4);
	    } else if (!this.state.hovered) {
	      this.setState({ zDepth: this.state.initialZDepth });
	      ReactDOM.findDOMNode(this.refs.overlay).style.backgroundColor = 'transparent';
	    }
	  }

	});

	module.exports = FloatingActionButton;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var ReactTransitionGroup = __webpack_require__(353);
	var ClickAwayable = __webpack_require__(388);
	var StylePropable = __webpack_require__(330);
	var Events = __webpack_require__(349);
	var PropTypes = __webpack_require__(365);
	var Menu = __webpack_require__(446);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var IconMenu = React.createClass({
	  displayName: 'IconMenu',

	  mixins: [StylePropable, ClickAwayable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    closeOnItemTouchTap: React.PropTypes.bool,
	    iconButtonElement: React.PropTypes.element.isRequired,
	    iconStyle: React.PropTypes.object,
	    openDirection: PropTypes.corners,
	    onItemTouchTap: React.PropTypes.func,
	    onKeyboardFocus: React.PropTypes.func,
	    onMouseDown: React.PropTypes.func,
	    onMouseLeave: React.PropTypes.func,
	    onMouseEnter: React.PropTypes.func,
	    onMouseUp: React.PropTypes.func,
	    onTouchTap: React.PropTypes.func,
	    menuStyle: React.PropTypes.object,
	    touchTapCloseDelay: React.PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      closeOnItemTouchTap: true,
	      openDirection: 'bottom-left',
	      onItemTouchTap: function onItemTouchTap() {},
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onMouseDown: function onMouseDown() {},
	      onMouseLeave: function onMouseLeave() {},
	      onMouseEnter: function onMouseEnter() {},
	      onMouseUp: function onMouseUp() {},
	      onTouchTap: function onTouchTap() {},
	      touchTapCloseDelay: 200
	    };
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
	      iconButtonRef: this.props.iconButtonElement.props.ref || 'iconButton',
	      menuInitiallyKeyboardFocused: false,
	      open: false
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this._timeout) clearTimeout(this._timeout);
	  },

	  componentClickAway: function componentClickAway() {
	    this.close();
	  },

	  render: function render() {
	    var _this = this;

	    var _props = this.props;
	    var className = _props.className;
	    var closeOnItemTouchTap = _props.closeOnItemTouchTap;
	    var iconButtonElement = _props.iconButtonElement;
	    var iconStyle = _props.iconStyle;
	    var openDirection = _props.openDirection;
	    var onItemTouchTap = _props.onItemTouchTap;
	    var onKeyboardFocus = _props.onKeyboardFocus;
	    var onMouseDown = _props.onMouseDown;
	    var onMouseLeave = _props.onMouseLeave;
	    var onMouseEnter = _props.onMouseEnter;
	    var onMouseUp = _props.onMouseUp;
	    var onTouchTap = _props.onTouchTap;
	    var menuStyle = _props.menuStyle;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['className', 'closeOnItemTouchTap', 'iconButtonElement', 'iconStyle', 'openDirection', 'onItemTouchTap', 'onKeyboardFocus', 'onMouseDown', 'onMouseLeave', 'onMouseEnter', 'onMouseUp', 'onTouchTap', 'menuStyle', 'style']);

	    var open = this.state.open;
	    var openDown = openDirection.split('-')[0] === 'bottom';
	    var openLeft = openDirection.split('-')[1] === 'left';

	    var styles = {
	      root: {
	        display: 'inline-block',
	        position: 'relative'
	      },

	      menu: {
	        top: openDown ? 12 : null,
	        bottom: !openDown ? 12 : null,
	        left: !openLeft ? 12 : null,
	        right: openLeft ? 12 : null
	      }
	    };

	    var mergedRootStyles = this.prepareStyles(styles.root, style);
	    var mergedMenuStyles = this.mergeStyles(styles.menu, menuStyle);

	    var iconButton = React.cloneElement(iconButtonElement, {
	      onKeyboardFocus: this.props.onKeyboardFocus,
	      iconStyle: this.mergeStyles(iconStyle, iconButtonElement.props.iconStyle),
	      onTouchTap: function onTouchTap(e) {
	        _this.open(Events.isKeyboard(e));
	        if (iconButtonElement.props.onTouchTap) iconButtonElement.props.onTouchTap(e);
	      },
	      ref: this.state.iconButtonRef
	    });

	    var menu = open ? React.createElement(
	      Menu,
	      _extends({}, other, {
	        animated: true,
	        initiallyKeyboardFocused: this.state.menuInitiallyKeyboardFocused,
	        onEscKeyDown: this._handleMenuEscKeyDown,
	        onItemTouchTap: this._handleItemTouchTap,
	        openDirection: openDirection,
	        style: mergedMenuStyles }),
	      this.props.children
	    ) : null;

	    return React.createElement(
	      'div',
	      {
	        className: className,
	        onMouseDown: onMouseDown,
	        onMouseLeave: onMouseLeave,
	        onMouseEnter: onMouseEnter,
	        onMouseUp: onMouseUp,
	        onTouchTap: onTouchTap,
	        style: mergedRootStyles },
	      iconButton,
	      React.createElement(
	        ReactTransitionGroup,
	        null,
	        menu
	      )
	    );
	  },

	  isOpen: function isOpen() {
	    return this.state.open;
	  },

	  close: function close(isKeyboard) {
	    var _this2 = this;

	    if (this.state.open) {
	      this.setState({ open: false }, function () {
	        //Set focus on the icon button when the menu close
	        if (isKeyboard) {
	          var iconButton = _this2.refs[_this2.state.iconButtonRef];
	          ReactDOM.findDOMNode(iconButton).focus();
	          iconButton.setKeyboardFocus();
	        }
	      });
	    }
	  },

	  open: function open(menuInitiallyKeyboardFocused) {
	    if (!this.state.open) {
	      this.setState({
	        open: true,
	        menuInitiallyKeyboardFocused: menuInitiallyKeyboardFocused
	      });
	    }
	  },

	  _handleItemTouchTap: function _handleItemTouchTap(e, child) {
	    var _this3 = this;

	    if (this.props.closeOnItemTouchTap) {
	      (function () {
	        var isKeyboard = Events.isKeyboard(e);

	        _this3._timeout = setTimeout(function () {
	          _this3.close(isKeyboard);
	        }, _this3.props.touchTapCloseDelay);
	      })();
	    }

	    this.props.onItemTouchTap(e, child);
	  },

	  _handleMenuEscKeyDown: function _handleMenuEscKeyDown() {
	    this.close(true);
	  }

	});

	module.exports = IconMenu;


/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(329);
	var update = __webpack_require__(332);
	var Controllable = __webpack_require__(373);
	var StylePropable = __webpack_require__(330);
	var AutoPrefix = __webpack_require__(335);
	var Transitions = __webpack_require__(338);
	var KeyCode = __webpack_require__(350);
	var PropTypes = __webpack_require__(365);
	var List = __webpack_require__(434);
	var Paper = __webpack_require__(364);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var Menu = React.createClass({
	  displayName: 'Menu',

	  mixins: [StylePropable, Controllable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    animated: React.PropTypes.bool,
	    autoWidth: React.PropTypes.bool,
	    desktop: React.PropTypes.bool,
	    initiallyKeyboardFocused: React.PropTypes.bool,
	    listStyle: React.PropTypes.object,
	    maxHeight: React.PropTypes.number,
	    multiple: React.PropTypes.bool,
	    onEscKeyDown: React.PropTypes.func,
	    onItemTouchTap: React.PropTypes.func,
	    onKeyDown: React.PropTypes.func,
	    openDirection: PropTypes.corners,
	    selectedMenuItemStyle: React.PropTypes.object,
	    width: PropTypes.stringOrNumber,
	    zDepth: PropTypes.zDepth
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      animated: false,
	      autoWidth: true,
	      maxHeight: null,
	      onEscKeyDown: function onEscKeyDown() {},
	      onItemTouchTap: function onItemTouchTap() {},
	      onKeyDown: function onKeyDown() {},
	      openDirection: 'bottom-left',
	      zDepth: 1
	    };
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    var selectedIndex = this._getSelectedIndex(this.props);

	    return {
	      focusIndex: selectedIndex >= 0 ? selectedIndex : 0,
	      isKeyboardFocused: this.props.initiallyKeyboardFocused,
	      keyWidth: this.props.desktop ? 64 : 56,
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  componentDidEnter: function componentDidEnter() {
	    this._animateOpen();
	  },

	  componentDidMount: function componentDidMount() {
	    if (this.props.autoWidth) this._setWidth();
	    if (!this.props.animated) this._animateOpen();
	    this._setScollPosition();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.autoWidth) this._setWidth();
	  },

	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;

	    var rootStyle = ReactDOM.findDOMNode(this).style;

	    AutoPrefix.set(rootStyle, 'transition', Transitions.easeOut('250ms', ['opacity', 'transform']));
	    AutoPrefix.set(rootStyle, 'transform', 'translate3d(0,-8px,0)');
	    rootStyle.opacity = 0;

	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 250);
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var selectedIndex = this._getSelectedIndex(nextProps);
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    this.setState({
	      focusIndex: selectedIndex >= 0 ? selectedIndex : 0,
	      keyWidth: nextProps.desktop ? 64 : 56,
	      muiTheme: newMuiTheme
	    });
	  },

	  render: function render() {
	    var _this2 = this;

	    var _props = this.props;
	    var animated = _props.animated;
	    var autoWidth = _props.autoWidth;
	    var children = _props.children;
	    var desktop = _props.desktop;
	    var initiallyKeyboardFocused = _props.initiallyKeyboardFocused;
	    var listStyle = _props.listStyle;
	    var maxHeight = _props.maxHeight;
	    var multiple = _props.multiple;
	    var openDirection = _props.openDirection;
	    var selectedMenuItemStyle = _props.selectedMenuItemStyle;
	    var style = _props.style;
	    var value = _props.value;
	    var valueLink = _props.valueLink;
	    var width = _props.width;
	    var zDepth = _props.zDepth;

	    var other = _objectWithoutProperties(_props, ['animated', 'autoWidth', 'children', 'desktop', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'openDirection', 'selectedMenuItemStyle', 'style', 'value', 'valueLink', 'width', 'zDepth']);

	    var openDown = openDirection.split('-')[0] === 'bottom';
	    var openLeft = openDirection.split('-')[1] === 'left';

	    var styles = {
	      root: {
	        //Nested div bacause the List scales x faster than
	        //it scales y
	        transition: animated ? Transitions.easeOut('250ms', 'transform') : null,
	        position: 'absolute',
	        zIndex: 10,
	        top: openDown ? 0 : null,
	        bottom: !openDown ? 0 : null,
	        left: !openLeft ? 0 : null,
	        right: openLeft ? 0 : null,
	        transform: 'scaleX(0)',
	        transformOrigin: openLeft ? 'right' : 'left'
	      },

	      list: {
	        display: 'table-cell',
	        paddingBottom: desktop ? 16 : 8,
	        paddingTop: desktop ? 16 : 8,
	        userSelect: 'none',
	        width: width
	      },

	      menuItemContainer: {
	        transition: animated ? Transitions.easeOut(null, 'opacity') : null,
	        opacity: 0
	      },

	      paper: {
	        transition: animated ? Transitions.easeOut('500ms', ['transform', 'opacity']) : null,
	        transform: 'scaleY(0)',
	        transformOrigin: openDown ? 'top' : 'bottom',
	        opacity: 0,
	        maxHeight: maxHeight,
	        overflowY: maxHeight ? 'scroll' : null
	      },

	      selectedMenuItem: {
	        color: this.state.muiTheme.rawTheme.palette.accent1Color
	      }
	    };

	    var mergedRootStyles = this.prepareStyles(styles.root, style);
	    var mergedListStyles = this.mergeStyles(styles.list, listStyle);

	    //Cascade children opacity
	    var cumulativeDelay = openDown ? 175 : 325;
	    var cascadeChildrenCount = this._getCascadeChildrenCount();
	    var cumulativeDelayIncrement = Math.ceil(150 / cascadeChildrenCount);

	    var menuItemIndex = 0;
	    var newChildren = React.Children.map(children, function (child) {

	      var childIsADivider = child.type.displayName === 'MenuDivider';
	      var childIsDisabled = child.props.disabled;
	      var childrenContainerStyles = {};

	      if (animated) {
	        var focusIndex = _this2.state.focusIndex;
	        var transitionDelay = 0;

	        //Only cascade the visible menu items
	        if (menuItemIndex >= focusIndex - 1 && menuItemIndex <= focusIndex + cascadeChildrenCount - 1) {
	          cumulativeDelay = openDown ? cumulativeDelay + cumulativeDelayIncrement : cumulativeDelay - cumulativeDelayIncrement;
	          transitionDelay = cumulativeDelay;
	        }

	        childrenContainerStyles = _this2.prepareStyles(styles.menuItemContainer, {
	          transitionDelay: transitionDelay + 'ms'
	        });
	      }

	      var clonedChild = childIsADivider ? child : childIsDisabled ? React.cloneElement(child, { desktop: desktop }) : _this2._cloneMenuItem(child, menuItemIndex, styles);

	      if (!childIsADivider && !childIsDisabled) menuItemIndex++;

	      return animated ? React.createElement(
	        'div',
	        { style: childrenContainerStyles },
	        clonedChild
	      ) : clonedChild;
	    });

	    return React.createElement(
	      'div',
	      {
	        onKeyDown: this._handleKeyDown,
	        style: mergedRootStyles },
	      React.createElement(
	        Paper,
	        {
	          ref: 'scrollContainer',
	          style: styles.paper,
	          zDepth: zDepth },
	        React.createElement(
	          List,
	          _extends({}, other, {
	            ref: 'list',
	            style: mergedListStyles }),
	          newChildren
	        )
	      )
	    );
	  },

	  setKeyboardFocused: function setKeyboardFocused(keyboardFocused) {
	    this.setState({
	      isKeyboardFocused: keyboardFocused
	    });
	  },

	  _animateOpen: function _animateOpen() {
	    var rootStyle = ReactDOM.findDOMNode(this).style;
	    var scrollContainerStyle = ReactDOM.findDOMNode(this.refs.scrollContainer).style;
	    var menuContainers = ReactDOM.findDOMNode(this.refs.list).childNodes;

	    AutoPrefix.set(rootStyle, 'transform', 'scaleX(1)');
	    AutoPrefix.set(scrollContainerStyle, 'transform', 'scaleY(1)');
	    scrollContainerStyle.opacity = 1;

	    for (var i = 0; i < menuContainers.length; ++i) {
	      menuContainers[i].style.opacity = 1;
	    }
	  },

	  _cloneMenuItem: function _cloneMenuItem(child, childIndex, styles) {
	    var _this3 = this;

	    var _props2 = this.props;
	    var desktop = _props2.desktop;
	    var selectedMenuItemStyle = _props2.selectedMenuItemStyle;

	    var selected = this._isChildSelected(child, this.props);
	    var selectedChildrenStyles = {};

	    if (selected) {
	      selectedChildrenStyles = this.mergeStyles(styles.selectedMenuItem, selectedMenuItemStyle);
	    }

	    var mergedChildrenStyles = this.mergeStyles(child.props.style || {}, selectedChildrenStyles);

	    var isFocused = childIndex === this.state.focusIndex;
	    var focusState = 'none';
	    if (isFocused) {
	      focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
	    }

	    return React.cloneElement(child, {
	      desktop: desktop,
	      focusState: focusState,
	      onTouchTap: function onTouchTap(e) {
	        _this3._handleMenuItemTouchTap(e, child);
	        if (child.props.onTouchTap) child.props.onTouchTap(e);
	      },
	      ref: isFocused ? 'focusedMenuItem' : null,
	      style: mergedChildrenStyles
	    });
	  },

	  _decrementKeyboardFocusIndex: function _decrementKeyboardFocusIndex() {
	    var index = this.state.focusIndex;

	    index--;
	    if (index < 0) index = 0;

	    this._setFocusIndex(index, true);
	  },

	  _getCascadeChildrenCount: function _getCascadeChildrenCount() {
	    var _props3 = this.props;
	    var children = _props3.children;
	    var desktop = _props3.desktop;
	    var maxHeight = _props3.maxHeight;

	    var count = 1;
	    var currentHeight = desktop ? 16 : 8;
	    var menuItemHeight = desktop ? 32 : 48;

	    //MaxHeight isn't set - cascade all of the children
	    if (!maxHeight) return React.Children.count(children);

	    //Count all the children that will fit inside the
	    //max menu height
	    React.Children.forEach(children, function (child) {
	      if (currentHeight < maxHeight) {
	        var childIsADivider = child.type.displayName === 'MenuDivider';

	        currentHeight += childIsADivider ? 16 : menuItemHeight;
	        count++;
	      }
	    });

	    return count;
	  },

	  _getMenuItemCount: function _getMenuItemCount() {
	    var menuItemCount = 0;
	    React.Children.forEach(this.props.children, function (child) {
	      var childIsADivider = child.type.displayName === 'MenuDivider';
	      var childIsDisabled = child.props.disabled;
	      if (!childIsADivider && !childIsDisabled) menuItemCount++;
	    });
	    return menuItemCount;
	  },

	  _getSelectedIndex: function _getSelectedIndex(props) {
	    var _this4 = this;

	    var children = props.children;

	    var selectedIndex = -1;
	    var menuItemIndex = 0;

	    React.Children.forEach(children, function (child) {
	      var childIsADivider = child.type.displayName === 'MenuDivider';

	      if (_this4._isChildSelected(child, props)) selectedIndex = menuItemIndex;
	      if (!childIsADivider) menuItemIndex++;
	    });

	    return selectedIndex;
	  },

	  _handleKeyDown: function _handleKeyDown(e) {
	    switch (e.keyCode) {
	      case KeyCode.DOWN:
	        e.preventDefault();
	        this._incrementKeyboardFocusIndex();
	        break;
	      case KeyCode.ESC:
	        this.props.onEscKeyDown(e);
	        break;
	      case KeyCode.TAB:
	        e.preventDefault();
	        if (e.shiftKey) {
	          this._decrementKeyboardFocusIndex();
	        } else {
	          this._incrementKeyboardFocusIndex();
	        }
	        break;
	      case KeyCode.UP:
	        e.preventDefault();
	        this._decrementKeyboardFocusIndex();
	        break;
	    }
	    this.props.onKeyDown(e);
	  },

	  _handleMenuItemTouchTap: function _handleMenuItemTouchTap(e, item) {
	    var multiple = this.props.multiple;
	    var valueLink = this.getValueLink(this.props);
	    var menuValue = valueLink.value;
	    var itemValue = item.props.value;

	    if (multiple) {
	      var index = menuValue.indexOf(itemValue);
	      var newMenuValue = index === -1 ? update(menuValue, { $push: [itemValue] }) : update(menuValue, { $splice: [[index, 1]] });

	      valueLink.requestChange(e, newMenuValue);
	    } else if (!multiple && itemValue !== menuValue) {
	      valueLink.requestChange(e, itemValue);
	    }

	    this.props.onItemTouchTap(e, item);
	  },

	  _incrementKeyboardFocusIndex: function _incrementKeyboardFocusIndex() {
	    var index = this.state.focusIndex;
	    var maxIndex = this._getMenuItemCount() - 1;

	    index++;
	    if (index > maxIndex) index = maxIndex;

	    this._setFocusIndex(index, true);
	  },

	  _isChildSelected: function _isChildSelected(child, props) {
	    var multiple = props.multiple;
	    var menuValue = this.getValueLink(props).value;
	    var childValue = child.props.value;

	    return multiple && menuValue.length && menuValue.indexOf(childValue) !== -1 || !multiple && menuValue && menuValue === childValue;
	  },

	  _setFocusIndex: function _setFocusIndex(newIndex, isKeyboardFocused) {
	    this.setState({
	      focusIndex: newIndex,
	      isKeyboardFocused: isKeyboardFocused
	    });
	  },

	  _setScollPosition: function _setScollPosition() {
	    var desktop = this.props.desktop;
	    var focusedMenuItem = this.refs.focusedMenuItem;
	    var menuItemHeight = desktop ? 32 : 48;

	    if (focusedMenuItem) {
	      var selectedOffSet = ReactDOM.findDOMNode(focusedMenuItem).offsetTop;

	      //Make the focused item be the 2nd item in the list the
	      //user sees
	      var scrollTop = selectedOffSet - menuItemHeight;
	      if (scrollTop < menuItemHeight) scrollTop = 0;

	      ReactDOM.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
	    }
	  },

	  _setWidth: function _setWidth() {
	    var el = ReactDOM.findDOMNode(this);
	    var listEl = ReactDOM.findDOMNode(this.refs.list);
	    var elWidth = el.offsetWidth;
	    var keyWidth = this.state.keyWidth;
	    var minWidth = keyWidth * 1.5;
	    var keyIncrements = elWidth / keyWidth;
	    var newWidth = undefined;

	    keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
	    newWidth = keyIncrements * keyWidth;

	    if (newWidth < minWidth) newWidth = minWidth;

	    el.style.width = newWidth + 'px';
	    listEl.style.width = newWidth + 'px';
	  }

	});

	module.exports = Menu;


/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var StylePropable = __webpack_require__(330);
	var Colors = __webpack_require__(341);
	var CheckIcon = __webpack_require__(448);
	var ListItem = __webpack_require__(435);
	var DefaultRawTheme = __webpack_require__(357);
	var ThemeManager = __webpack_require__(359);

	var MenuItem = React.createClass({
	  displayName: 'MenuItem',

	  mixins: [PureRenderMixin, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  propTypes: {
	    checked: React.PropTypes.bool,
	    desktop: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    innerDivStyle: React.PropTypes.object,
	    insetChildren: React.PropTypes.bool,
	    focusState: React.PropTypes.oneOf(['none', 'focused', 'keyboard-focused']),
	    leftIcon: React.PropTypes.element,
	    rightIcon: React.PropTypes.element,
	    secondaryText: React.PropTypes.node,
	    value: React.PropTypes.string
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      focusState: 'none'
	    };
	  },

	  componentDidMount: function componentDidMount() {
	    this._applyFocusState();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._applyFocusState();
	  },

	  render: function render() {
	    var _props = this.props;
	    var checked = _props.checked;
	    var children = _props.children;
	    var desktop = _props.desktop;
	    var disabled = _props.disabled;
	    var focusState = _props.focusState;
	    var innerDivStyle = _props.innerDivStyle;
	    var insetChildren = _props.insetChildren;
	    var leftIcon = _props.leftIcon;
	    var rightIcon = _props.rightIcon;
	    var secondaryText = _props.secondaryText;
	    var style = _props.style;
	    var value = _props.value;

	    var other = _objectWithoutProperties(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'rightIcon', 'secondaryText', 'style', 'value']);

	    var disabledColor = this.state.muiTheme.rawTheme.palette.disabledColor;
	    var textColor = this.state.muiTheme.rawTheme.palette.textColor;
	    var leftIndent = desktop ? 64 : 72;
	    var sidePadding = desktop ? 24 : 16;

	    var styles = {
	      root: {
	        color: disabled ? disabledColor : textColor,
	        lineHeight: desktop ? '32px' : '48px',
	        fontSize: desktop ? 15 : 16,
	        whiteSpace: 'nowrap'
	      },

	      innerDivStyle: {
	        paddingLeft: leftIcon || insetChildren || checked ? leftIndent : sidePadding,
	        paddingRight: sidePadding,
	        paddingBottom: 0,
	        paddingTop: 0
	      },

	      secondaryText: {
	        float: 'right'
	      },

	      leftIconDesktop: {
	        padding: 0,
	        left: 24,
	        top: 4
	      },

	      rightIconDesktop: {
	        padding: 0,
	        right: 24,
	        top: 4,
	        fill: Colors.grey600
	      }
	    };

	    var mergedRootStyles = this.mergeStyles(styles.root, style);
	    var mergedInnerDivStyles = this.mergeStyles(styles.innerDivStyle, innerDivStyle);

	    //Left Icon
	    var leftIconElement = leftIcon ? leftIcon : checked ? React.createElement(CheckIcon, null) : null;
	    if (leftIconElement && desktop) {
	      var mergedLeftIconStyles = this.mergeStyles(styles.leftIconDesktop, leftIconElement.props.style);
	      leftIconElement = React.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
	    }

	    //Right Icon
	    var rightIconElement = undefined;
	    if (rightIcon) {
	      var mergedRightIconStyles = desktop ? this.mergeStyles(styles.rightIconDesktop, rightIcon.props.style) : null;
	      rightIconElement = React.cloneElement(rightIcon, { style: mergedRightIconStyles });
	    }

	    //Secondary Text
	    var secondaryTextElement = undefined;
	    if (secondaryText) {
	      var secondaryTextIsAnElement = React.isValidElement(secondaryText);
	      var mergedSecondaryTextStyles = secondaryTextIsAnElement ? this.mergeStyles(styles.secondaryText, secondaryText.props.style) : null;

	      secondaryTextElement = secondaryTextIsAnElement ? React.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : React.createElement(
	        'div',
	        { style: this.prepareStyles(styles.secondaryText) },
	        secondaryText
	      );
	    }

	    return React.createElement(
	      ListItem,
	      _extends({}, other, {
	        disabled: disabled,
	        innerDivStyle: mergedInnerDivStyles,
	        insetChildren: insetChildren,
	        leftIcon: leftIconElement,
	        ref: 'listItem',
	        rightIcon: rightIconElement,
	        style: mergedRootStyles }),
	      children,
	      secondaryTextElement
	    );
	  },

	  _applyFocusState: function _applyFocusState() {
	    this.refs.listItem.applyFocusState(this.props.focusState);
	  }
	});

	module.exports = MenuItem;


/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'jonny22234';

	var React = __webpack_require__(4);
	var PureRenderMixin = __webpack_require__(343);
	var SvgIcon = __webpack_require__(380);

	var NavigationCheck = React.createClass({
	  displayName: 'NavigationCheck',

	  mixins: [PureRenderMixin],

	  render: function render() {
	    return React.createElement(
	      SvgIcon,
	      this.props,
	      React.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
	    );
	  }

	});

	module.exports = NavigationCheck;


/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function injectTapEventPlugin () {
	  __webpack_require__(33).injection.injectEventPluginsByName({
	    "TapEventPlugin":       __webpack_require__(450)
	  });
	};


/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(32);
	var EventPluginUtils = __webpack_require__(35);
	var EventPropagators = __webpack_require__(75);
	var SyntheticUIEvent = __webpack_require__(89);
	var TouchEventUtils = __webpack_require__(451);
	var ViewportMetrics = __webpack_require__(40);

	var keyOf = __webpack_require__(452);
	var topLevelTypes = EventConstants.topLevelTypes;

	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;

	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    topLevelTypes.topTouchCancel,
	    topLevelTypes.topTouchEnd,
	    topLevelTypes.topTouchStart,
	    topLevelTypes.topTouchMove
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}

	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;

	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};

	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}

	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}

	var touchEvents = [
	  topLevelTypes.topTouchStart,
	  topLevelTypes.topTouchCancel,
	  topLevelTypes.topTouchEnd,
	  topLevelTypes.topTouchMove,
	];

	var dependencies = [
	  topLevelTypes.topMouseDown,
	  topLevelTypes.topMouseMove,
	  topLevelTypes.topMouseUp,
	].concat(touchEvents);

	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};

	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();

	var TapEventPlugin = {

	  tapMoveThreshold: tapMoveThreshold,

	  ignoreMouseThreshold: ignoreMouseThreshold,

	  eventTypes: eventTypes,

	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function(
	      topLevelType,
	      topLevelTarget,
	      topLevelTargetID,
	      nativeEvent,
	      nativeEventTarget) {

	    if (isTouch(topLevelType)) {
	      lastTouchEvent = now();
	    } else {
	      if (lastTouchEvent && (now() - lastTouchEvent) < ignoreMouseThreshold) {
	        return null;
	      }
	    }

	    if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	      return null;
	    }
	    var event = null;
	    var distance = getDistance(startCoords, nativeEvent);
	    if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	      event = SyntheticUIEvent.getPooled(
	        eventTypes.touchTap,
	        topLevelTargetID,
	        nativeEvent,
	        nativeEventTarget
	      );
	    }
	    if (isStartish(topLevelType)) {
	      startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	      startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	    } else if (isEndish(topLevelType)) {
	      startCoords.x = 0;
	      startCoords.y = 0;
	    }
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  }

	};

	module.exports = TapEventPlugin;


/***/ },
/* 451 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */

	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;

	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};

	module.exports = TouchEventUtils;


/***/ },
/* 452 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";

	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ }
]);