webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _componentsApp = __webpack_require__(159);

	var _componentsApp2 = _interopRequireDefault(_componentsApp);

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
	        _react2['default'].render(_react2['default'].createElement(_componentsApp2['default'], null), document.getElementById('main-content'));
	    }, false);
	} catch (e) {
	    handleError(e);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactcssDecorator = __webpack_require__(160);

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

/***/ }

});