webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _componentsApp = __webpack_require__(159);

	var _componentsApp2 = _interopRequireDefault(_componentsApp);

	var _componentsMainLayout = __webpack_require__(171);

	var _componentsMainLayout2 = _interopRequireDefault(_componentsMainLayout);

	var injectTapEventPlugin = __webpack_require__(268);

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
/* 159 */
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

/***/ },
/* 160 */,
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
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);

	var NavigationBar = __webpack_require__(172);
	var View = __webpack_require__(197);
	var ViewManager = __webpack_require__(198);
	var UI = __webpack_require__(202);

	var lastSelectedTab = 'soundbyte';
	var MainLayout = React.createClass({
		displayName: 'MainLayout',

		getInitialState: function getInitialState() {
			return {
				selectedTab: lastSelectedTab
			};
		},

		onViewChange: function onViewChange(nextView) {
			lastSelectedTab = nextView;

			this.setState({
				selectedTab: nextView
			});
		},

		selectTab: function selectTab(value) {
			var viewProps = undefined;

			this.refs.vm.transitionTo(value, {
				transition: 'instant',
				viewProps: viewProps
			});

			this.setState({
				selectedTab: value
			});
		},
		render: function render() {
			var selectedTab = this.state.selectedTab;
			var selectedTabSpan = selectedTab;

			if (selectedTab === 'tuneline' || selectedTab === 'soundbyte' || selectedTab === 'config') {
				selectedTabSpan = 'soundbyte';
			}

			if (selectedTab === 'transitions' || selectedTab === 'transitions-target') {
				selectedTabSpan = 'transitions';
			}

			return React.createElement(
				'div',
				null,
				React.createElement(
					ViewManager,
					{ ref: 'vm', name: 'tabs', defaultView: selectedTab, onViewChange: this.onViewChange },
					React.createElement(View, { name: 'tuneline', component: __webpack_require__(236) }),
					React.createElement(View, { name: 'soundbyte', component: __webpack_require__(236) }),
					React.createElement(View, { name: 'config', component: __webpack_require__(236) })
				),
				React.createElement(
					UI.Tabs.Navigator,
					null,
					React.createElement(
						UI.Tabs.Tab,
						{ onTap: this.selectTab.bind(this, 'tuneline'), selected: selectedTabSpan === 'tuneline' },
						React.createElement('span', { className: 'Tabs-Icon Tabs-Icon--lists' }),
						React.createElement(
							UI.Tabs.Label,
							null,
							'Lists'
						)
					),
					React.createElement(
						UI.Tabs.Tab,
						{ onTap: this.selectTab.bind(this, 'soundbyte'), selected: selectedTabSpan === 'soundbyte' },
						React.createElement('span', { className: 'Tabs-Icon Tabs-Icon--forms' }),
						React.createElement(
							UI.Tabs.Label,
							null,
							'Forms'
						)
					),
					React.createElement(
						UI.Tabs.Tab,
						{ onTap: this.selectTab.bind(this, 'config'), selected: selectedTabSpan === 'config' },
						React.createElement('span', { className: 'Tabs-Icon Tabs-Icon--controls' }),
						React.createElement(
							UI.Tabs.Label,
							null,
							'Controls'
						)
					)
				)
			);
		}
	});

	module.exports = MainLayout;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var classNames = __webpack_require__(173);
	var React = __webpack_require__(174);
	var Tappable = __webpack_require__(192);
	var Transition = React.addons.CSSTransitionGroup;

	var DIRECTIONS = {
		'reveal-from-right': -1,
		'show-from-left': -1,
		'show-from-right': 1,
		'reveal-from-left': 1
	};

	var defaultControllerState = {
		direction: 0,
		fade: false,
		leftArrow: false,
		leftButtonDisabled: false,
		leftIcon: '',
		leftLabel: '',
		leftAction: null,
		rightArrow: false,
		rightButtonDisabled: false,
		rightIcon: '',
		rightLabel: '',
		rightAction: null,
		title: ''
	};

	function newState(from) {
		var ns = _extends({}, defaultControllerState);
		if (from) _extends(ns, from);
		delete ns.name; // may leak from props
		return ns;
	}

	var NavigationBar = React.createClass({
		displayName: 'NavigationBar',

		contextTypes: {
			app: React.PropTypes.object
		},

		propTypes: {
			name: React.PropTypes.string,
			className: React.PropTypes.string
		},

		getInitialState: function getInitialState() {
			return newState(this.props);
		},

		componentDidMount: function componentDidMount() {
			if (this.props.name) {
				this.context.app.navigationBars[this.props.name] = this;
			}
		},

		componentWillUnmount: function componentWillUnmount() {
			if (this.props.name) {
				delete this.context.app.navigationBars[this.props.name];
			}
		},

		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			this.setState(newState(nextProps));
			if (nextProps.name !== this.props.name) {
				if (nextProps.name) {
					this.context.app.navigationBars[nextProps.name] = this;
				}
				if (this.props.name) {
					delete this.context.app.navigationBars[this.props.name];
				}
			}
		},

		update: function update(state) {
			// FIXME: what is happening here
			state = newState(state);
			this.setState(newState(state));
		},

		updateWithTransition: function updateWithTransition(state, transition) {
			state = newState(state);
			state.direction = DIRECTIONS[transition] || 0;

			if (transition === 'fade' || transition === 'fade-contract' || transition === 'fade-expand') {
				state.fade = true;
			}

			this.setState(state);
		},

		renderLeftButton: function renderLeftButton() {
			var className = classNames('NavigationBarLeftButton', {
				'has-arrow': this.state.leftArrow
			});

			return React.createElement(
				Tappable,
				{ onTap: this.state.leftAction, className: className, disabled: this.state.leftButtonDisabled, component: 'button' },
				this.renderLeftArrow(),
				this.renderLeftLabel()
			);
		},

		renderLeftArrow: function renderLeftArrow() {
			var transitionName = 'NavigationBarTransition-Instant';
			if (this.state.fade || this.state.direction) {
				transitionName = 'NavigationBarTransition-Fade';
			}

			var arrow = this.state.leftArrow ? React.createElement('span', { className: 'NavigationBarLeftArrow' }) : null;

			return React.createElement(
				Transition,
				{ transitionName: transitionName },
				arrow
			);
		},

		renderLeftLabel: function renderLeftLabel() {
			var transitionName = 'NavigationBarTransition-Instant';
			if (this.state.fade) {
				transitionName = 'NavigationBarTransition-Fade';
			} else if (this.state.direction > 0) {
				transitionName = 'NavigationBarTransition-Forwards';
			} else if (this.state.direction < 0) {
				transitionName = 'NavigationBarTransition-Backwards';
			}

			return React.createElement(
				Transition,
				{ transitionName: transitionName },
				React.createElement(
					'span',
					{ key: Date.now(), className: 'NavigationBarLeftLabel' },
					this.state.leftLabel
				)
			);
		},

		renderTitle: function renderTitle() {
			var title = this.state.title ? React.createElement(
				'span',
				{ key: Date.now(), className: 'NavigationBarTitle' },
				this.state.title
			) : null;
			var transitionName = 'NavigationBarTransition-Instant';
			if (this.state.fade) {
				transitionName = 'NavigationBarTransition-Fade';
			} else if (this.state.direction > 0) {
				transitionName = 'NavigationBarTransition-Forwards';
			} else if (this.state.direction < 0) {
				transitionName = 'NavigationBarTransition-Backwards';
			}

			return React.createElement(
				Transition,
				{ transitionName: transitionName },
				title
			);
		},

		renderRightButton: function renderRightButton() {
			var transitionName = 'NavigationBarTransition-Instant';
			if (this.state.fade || this.state.direction) {
				transitionName = 'NavigationBarTransition-Fade';
			}
			var button = this.state.rightIcon || this.state.rightLabel ? React.createElement(
				Tappable,
				{ key: Date.now(), onTap: this.state.rightAction, className: 'NavigationBarRightButton', disabled: this.state.rightButtonDisabled, component: 'button' },
				this.renderRightLabel(),
				this.renderRightIcon()
			) : null;
			return React.createElement(
				Transition,
				{ transitionName: transitionName },
				button
			);
		},

		renderRightIcon: function renderRightIcon() {
			if (!this.state.rightIcon) return null;

			var className = classNames('NavigationBarRightIcon', this.state.rightIcon);

			return React.createElement('span', { className: className });
		},

		renderRightLabel: function renderRightLabel() {
			return this.state.rightLabel ? React.createElement(
				'span',
				{ key: Date.now(), className: 'NavigationBarRightLabel' },
				this.state.rightLabel
			) : null;
		},

		render: function render() {
			return React.createElement(
				'div',
				{ className: classNames('NavigationBar', this.props.className) },
				this.renderLeftButton(),
				this.renderTitle(),
				this.renderRightButton()
			);
		}
	});

	exports['default'] = NavigationBar;
	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(175);


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactWithAddons
	 */

	/**
	 * This module exists purely in the open source project, and is meant as a way
	 * to create a separate standalone build of React. This build has "addons", or
	 * functionality we've built and think might be useful but doesn't have a good
	 * place to live inside React core.
	 */

	'use strict';

	var LinkedStateMixin = __webpack_require__(176);
	var React = __webpack_require__(5);
	var ReactComponentWithPureRenderMixin =
	  __webpack_require__(179);
	var ReactCSSTransitionGroup = __webpack_require__(180);
	var ReactFragment = __webpack_require__(12);
	var ReactTransitionGroup = __webpack_require__(181);
	var ReactUpdates = __webpack_require__(28);

	var cx = __webpack_require__(189);
	var cloneWithProps = __webpack_require__(183);
	var update = __webpack_require__(190);

	React.addons = {
	  CSSTransitionGroup: ReactCSSTransitionGroup,
	  LinkedStateMixin: LinkedStateMixin,
	  PureRenderMixin: ReactComponentWithPureRenderMixin,
	  TransitionGroup: ReactTransitionGroup,

	  batchedUpdates: ReactUpdates.batchedUpdates,
	  classSet: cx,
	  cloneWithProps: cloneWithProps,
	  createFragment: ReactFragment.create,
	  update: update
	};

	if ("production" !== process.env.NODE_ENV) {
	  React.addons.Perf = __webpack_require__(152);
	  React.addons.TestUtils = __webpack_require__(191);
	}

	module.exports = React;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedStateMixin
	 * @typechecks static-only
	 */

	'use strict';

	var ReactLink = __webpack_require__(177);
	var ReactStateSetters = __webpack_require__(178);

	/**
	 * A simple mixin around ReactLink.forState().
	 */
	var LinkedStateMixin = {
	  /**
	   * Create a ReactLink that's linked to part of this component's state. The
	   * ReactLink will have the current value of this.state[key] and will call
	   * setState() when a change is requested.
	   *
	   * @param {string} key state key to update. Note: you may want to use keyOf()
	   * if you're using Google Closure Compiler advanced mode.
	   * @return {ReactLink} ReactLink instance linking to the state.
	   */
	  linkState: function(key) {
	    return new ReactLink(
	      this.state[key],
	      ReactStateSetters.createStateKeySetter(this, key)
	    );
	  }
	};

	module.exports = LinkedStateMixin;


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactLink
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * ReactLink encapsulates a common pattern in which a component wants to modify
	 * a prop received from its parent. ReactLink allows the parent to pass down a
	 * value coupled with a callback that, when invoked, expresses an intent to
	 * modify that value. For example:
	 *
	 * React.createClass({
	 *   getInitialState: function() {
	 *     return {value: ''};
	 *   },
	 *   render: function() {
	 *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
	 *     return <input valueLink={valueLink} />;
	 *   },
	 *   this._handleValueChange: function(newValue) {
	 *     this.setState({value: newValue});
	 *   }
	 * });
	 *
	 * We have provided some sugary mixins to make the creation and
	 * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
	 */

	var React = __webpack_require__(5);

	/**
	 * @param {*} value current value of the link
	 * @param {function} requestChange callback to request a change
	 */
	function ReactLink(value, requestChange) {
	  this.value = value;
	  this.requestChange = requestChange;
	}

	/**
	 * Creates a PropType that enforces the ReactLink API and optionally checks the
	 * type of the value being passed inside the link. Example:
	 *
	 * MyComponent.propTypes = {
	 *   tabIndexLink: ReactLink.PropTypes.link(React.PropTypes.number)
	 * }
	 */
	function createLinkTypeChecker(linkType) {
	  var shapes = {
	    value: typeof linkType === 'undefined' ?
	      React.PropTypes.any.isRequired :
	      linkType.isRequired,
	    requestChange: React.PropTypes.func.isRequired
	  };
	  return React.PropTypes.shape(shapes);
	}

	ReactLink.PropTypes = {
	  link: createLinkTypeChecker
	};

	module.exports = ReactLink;


/***/ },
/* 178 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactStateSetters
	 */

	'use strict';

	var ReactStateSetters = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function(component, funcReturningState) {
	    return function(a, b, c, d, e, f) {
	      var partialState = funcReturningState.call(component, a, b, c, d, e, f);
	      if (partialState) {
	        component.setState(partialState);
	      }
	    };
	  },

	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function(component, key) {
	    // Memoize the setters.
	    var cache = component.__keySetters || (component.__keySetters = {});
	    return cache[key] || (cache[key] = createStateKeySetter(component, key));
	  }
	};

	function createStateKeySetter(component, key) {
	  // Partial state is allocated outside of the function closure so it can be
	  // reused with every call, avoiding memory allocation when this function
	  // is called.
	  var partialState = {};
	  return function stateKeySetter(value) {
	    partialState[key] = value;
	    component.setState(partialState);
	  };
	}

	ReactStateSetters.Mixin = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateSetter(function(xValue) {
	   *     return {x: xValue};
	   *   })(1);
	   *
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function(funcReturningState) {
	    return ReactStateSetters.createStateSetter(this, funcReturningState);
	  },

	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateKeySetter('x')(1);
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function(key) {
	    return ReactStateSetters.createStateKeySetter(this, key);
	  }
	};

	module.exports = ReactStateSetters;


/***/ },
/* 179 */
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

	var shallowEqual = __webpack_require__(139);

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
	  shouldComponentUpdate: function(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) ||
	           !shallowEqual(this.state, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroup
	 */

	'use strict';

	var React = __webpack_require__(5);

	var assign = __webpack_require__(15);

	var ReactTransitionGroup = React.createFactory(
	  __webpack_require__(181)
	);
	var ReactCSSTransitionGroupChild = React.createFactory(
	  __webpack_require__(186)
	);

	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',

	  propTypes: {
	    transitionName: React.PropTypes.string.isRequired,
	    transitionAppear: React.PropTypes.bool,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool
	  },

	  getDefaultProps: function() {
	    return {
	      transitionAppear: false,
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },

	  _wrapChild: function(child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return ReactCSSTransitionGroupChild(
	      {
	        name: this.props.transitionName,
	        appear: this.props.transitionAppear,
	        enter: this.props.transitionEnter,
	        leave: this.props.transitionLeave
	      },
	      child
	    );
	  },

	  render: function() {
	    return (
	      ReactTransitionGroup(
	        assign({}, this.props, {childFactory: this._wrapChild})
	      )
	    );
	  }
	});

	module.exports = ReactCSSTransitionGroup;


/***/ },
/* 181 */
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
	var ReactTransitionChildMapping = __webpack_require__(182);

	var assign = __webpack_require__(15);
	var cloneWithProps = __webpack_require__(183);
	var emptyFunction = __webpack_require__(18);

	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',

	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },

	  getDefaultProps: function() {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },

	  getInitialState: function() {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },

	  componentWillMount: function() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },

	  componentDidMount: function() {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },

	  componentWillReceiveProps: function(nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(
	      nextProps.children
	    );
	    var prevChildMapping = this.state.children;

	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(
	        prevChildMapping,
	        nextChildMapping
	      )
	    });

	    var key;

	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev &&
	          !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }

	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext &&
	          !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }

	    // If we want to someday check for reordering, we could do it here.
	  },

	  componentDidUpdate: function() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);

	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },

	  performAppear: function(key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillAppear) {
	      component.componentWillAppear(
	        this._handleDoneAppearing.bind(this, key)
	      );
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },

	  _handleDoneAppearing: function(key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
	      this.props.children
	    );

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performEnter: function(key) {
	    this.currentlyTransitioningKeys[key] = true;

	    var component = this.refs[key];

	    if (component.componentWillEnter) {
	      component.componentWillEnter(
	        this._handleDoneEntering.bind(this, key)
	      );
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },

	  _handleDoneEntering: function(key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
	      this.props.children
	    );

	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },

	  performLeave: function(key) {
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

	  _handleDoneLeaving: function(key) {
	    var component = this.refs[key];

	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }

	    delete this.currentlyTransitioningKeys[key];

	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(
	      this.props.children
	    );

	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      var newChildren = assign({}, this.state.children);
	      delete newChildren[key];
	      this.setState({children: newChildren});
	    }
	  },

	  render: function() {
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
	        childrenToRender.push(cloneWithProps(
	          this.props.childFactory(child),
	          {ref: key, key: key}
	        ));
	      }
	    }
	    return React.createElement(
	      this.props.component,
	      this.props,
	      childrenToRender
	    );
	  }
	});

	module.exports = ReactTransitionGroup;


/***/ },
/* 182 */
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

	var ReactChildren = __webpack_require__(10);
	var ReactFragment = __webpack_require__(12);

	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around ReactChildren.map().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function(children) {
	    if (!children) {
	      return children;
	    }
	    return ReactFragment.extract(ReactChildren.map(children, function(child) {
	      return child;
	    }));
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
	  mergeChildMappings: function(prev, next) {
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
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(
	            pendingNextKey
	          );
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
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule cloneWithProps
	 */

	'use strict';

	var ReactElement = __webpack_require__(13);
	var ReactPropTransferer = __webpack_require__(184);

	var keyOf = __webpack_require__(41);
	var warning = __webpack_require__(17);

	var CHILDREN_PROP = keyOf({children: null});

	/**
	 * Sometimes you want to change the props of a child passed to you. Usually
	 * this is to add a CSS class.
	 *
	 * @param {ReactElement} child child element you'd like to clone
	 * @param {object} props props you'd like to modify. className and style will be
	 * merged automatically.
	 * @return {ReactElement} a clone of child with props merged in.
	 */
	function cloneWithProps(child, props) {
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      !child.ref,
	      'You are calling cloneWithProps() on a child with a ref. This is ' +
	      'dangerous because you\'re creating a new child which will not be ' +
	      'added as a ref to its parent.'
	    ) : null);
	  }

	  var newProps = ReactPropTransferer.mergeProps(props, child.props);

	  // Use `child.props.children` if it is provided.
	  if (!newProps.hasOwnProperty(CHILDREN_PROP) &&
	      child.props.hasOwnProperty(CHILDREN_PROP)) {
	    newProps.children = child.props.children;
	  }

	  // The current API doesn't retain _owner and _context, which is why this
	  // doesn't use ReactElement.cloneAndReplaceProps.
	  return ReactElement.createElement(child.type, newProps);
	}

	module.exports = cloneWithProps;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTransferer
	 */

	'use strict';

	var assign = __webpack_require__(15);
	var emptyFunction = __webpack_require__(18);
	var joinClasses = __webpack_require__(185);

	/**
	 * Creates a transfer strategy that will merge prop values using the supplied
	 * `mergeStrategy`. If a prop was previously unset, this just sets it.
	 *
	 * @param {function} mergeStrategy
	 * @return {function}
	 */
	function createTransferStrategy(mergeStrategy) {
	  return function(props, key, value) {
	    if (!props.hasOwnProperty(key)) {
	      props[key] = value;
	    } else {
	      props[key] = mergeStrategy(props[key], value);
	    }
	  };
	}

	var transferStrategyMerge = createTransferStrategy(function(a, b) {
	  // `merge` overrides the first object's (`props[key]` above) keys using the
	  // second object's (`value`) keys. An object's style's existing `propA` would
	  // get overridden. Flip the order here.
	  return assign({}, b, a);
	});

	/**
	 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
	 * NOTE: if you add any more exceptions to this list you should be sure to
	 * update `cloneWithProps()` accordingly.
	 */
	var TransferStrategies = {
	  /**
	   * Never transfer `children`.
	   */
	  children: emptyFunction,
	  /**
	   * Transfer the `className` prop by merging them.
	   */
	  className: createTransferStrategy(joinClasses),
	  /**
	   * Transfer the `style` prop (which is an object) by merging them.
	   */
	  style: transferStrategyMerge
	};

	/**
	 * Mutates the first argument by transferring the properties from the second
	 * argument.
	 *
	 * @param {object} props
	 * @param {object} newProps
	 * @return {object}
	 */
	function transferInto(props, newProps) {
	  for (var thisKey in newProps) {
	    if (!newProps.hasOwnProperty(thisKey)) {
	      continue;
	    }

	    var transferStrategy = TransferStrategies[thisKey];

	    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
	      transferStrategy(props, thisKey, newProps[thisKey]);
	    } else if (!props.hasOwnProperty(thisKey)) {
	      props[thisKey] = newProps[thisKey];
	    }
	  }
	  return props;
	}

	/**
	 * ReactPropTransferer are capable of transferring props to another component
	 * using a `transferPropsTo` method.
	 *
	 * @class ReactPropTransferer
	 */
	var ReactPropTransferer = {

	  /**
	   * Merge two props objects using TransferStrategies.
	   *
	   * @param {object} oldProps original props (they take precedence)
	   * @param {object} newProps new props to merge in
	   * @return {object} a new object containing both sets of props merged.
	   */
	  mergeProps: function(oldProps, newProps) {
	    return transferInto(assign({}, oldProps), newProps);
	  }

	};

	module.exports = ReactPropTransferer;


/***/ },
/* 185 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule joinClasses
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} classes
	 * @return {string}
	 */
	function joinClasses(className/*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}

	module.exports = joinClasses;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */

	'use strict';

	var React = __webpack_require__(5);

	var CSSCore = __webpack_require__(187);
	var ReactTransitionEvents = __webpack_require__(188);

	var onlyChild = __webpack_require__(158);
	var warning = __webpack_require__(17);

	// We don't remove the element from the DOM until we receive an animationend or
	// transitionend event. If the user screws up and forgets to add an animation
	// their node will be stuck in the DOM forever, so we detect if an animation
	// does not start and if it doesn't, we just call the end listener immediately.
	var TICK = 17;
	var NO_EVENT_TIMEOUT = 5000;

	var noEventListener = null;


	if ("production" !== process.env.NODE_ENV) {
	  noEventListener = function() {
	    ("production" !== process.env.NODE_ENV ? warning(
	      false,
	      'transition(): tried to perform an animation without ' +
	      'an animationend or transitionend event after timeout (' +
	      '%sms). You should either disable this ' +
	      'transition in JS or add a CSS animation/transition.',
	      NO_EVENT_TIMEOUT
	    ) : null);
	  };
	}

	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',

	  transition: function(animationType, finishCallback) {
	    var node = this.getDOMNode();
	    var className = this.props.name + '-' + animationType;
	    var activeClassName = className + '-active';
	    var noEventTimeout = null;

	    var endListener = function(e) {
	      if (e && e.target !== node) {
	        return;
	      }
	      if ("production" !== process.env.NODE_ENV) {
	        clearTimeout(noEventTimeout);
	      }

	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);

	      ReactTransitionEvents.removeEndEventListener(node, endListener);

	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };

	    ReactTransitionEvents.addEndEventListener(node, endListener);

	    CSSCore.addClass(node, className);

	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);

	    if ("production" !== process.env.NODE_ENV) {
	      noEventTimeout = setTimeout(noEventListener, NO_EVENT_TIMEOUT);
	    }
	  },

	  queueClass: function(className) {
	    this.classNameQueue.push(className);

	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },

	  flushClassNameQueue: function() {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(
	        CSSCore.addClass.bind(CSSCore, this.getDOMNode())
	      );
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },

	  componentWillMount: function() {
	    this.classNameQueue = [];
	  },

	  componentWillUnmount: function() {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	  },

	  componentWillAppear: function(done) {
	    if (this.props.appear) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },

	  componentWillEnter: function(done) {
	    if (this.props.enter) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },

	  componentWillLeave: function(done) {
	    if (this.props.leave) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },

	  render: function() {
	    return onlyChild(this.props.children);
	  }
	});

	module.exports = ReactCSSTransitionGroupChild;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSCore
	 * @typechecks
	 */

	var invariant = __webpack_require__(9);

	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function(element, className) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !/\s/.test(className),
	      'CSSCore.addClass takes only a single class name. "%s" contains ' +
	      'multiple classes.', className
	    ) : invariant(!/\s/.test(className)));

	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },

	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function(element, className) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !/\s/.test(className),
	      'CSSCore.removeClass takes only a single class name. "%s" contains ' +
	      'multiple classes.', className
	    ) : invariant(!/\s/.test(className)));

	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className
	          .replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1')
	          .replace(/\s+/g, ' ') // multiple spaces to one
	          .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },

	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },

	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function(element, className) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      !/\s/.test(className),
	      'CSS.hasClass takes only a single class name.'
	    ) : invariant(!/\s/.test(className)));
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  }

	};

	module.exports = CSSCore;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(53);

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var ReactTransitionEvents = {
	  addEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};

	module.exports = ReactTransitionEvents;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule cx
	 */

	/**
	 * This function is used to mark string literals representing CSS class names
	 * so that they can be transformed statically. This allows for modularization
	 * and minification of CSS class names.
	 *
	 * In static_upstream, this function is actually implemented, but it should
	 * eventually be replaced with something more descriptive, and the transform
	 * that is used in the main stack should be ported for use elsewhere.
	 *
	 * @param string|object className to modularize, or an object of key/values.
	 *                      In the object case, the values are conditions that
	 *                      determine if the className keys should be included.
	 * @param [string ...]  Variable list of classNames in the string case.
	 * @return string       Renderable space-separated CSS className.
	 */

	'use strict';
	var warning = __webpack_require__(17);

	var warned = false;

	function cx(classNames) {
	  if ("production" !== process.env.NODE_ENV) {
	    ("production" !== process.env.NODE_ENV ? warning(
	      warned,
	      'React.addons.classSet will be deprecated in a future version. See ' +
	      'http://fb.me/react-addons-classset'
	    ) : null);
	    warned = true;
	  }

	  if (typeof classNames == 'object') {
	    return Object.keys(classNames).filter(function(className) {
	      return classNames[className];
	    }).join(' ');
	  } else {
	    return Array.prototype.join.call(arguments, ' ');
	  }
	}

	module.exports = cx;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 190 */
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

	var assign = __webpack_require__(15);
	var keyOf = __webpack_require__(41);
	var invariant = __webpack_require__(9);
	var hasOwnProperty = {}.hasOwnProperty;

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({$push: null});
	var COMMAND_UNSHIFT = keyOf({$unshift: null});
	var COMMAND_SPLICE = keyOf({$splice: null});
	var COMMAND_SET = keyOf({$set: null});
	var COMMAND_MERGE = keyOf({$merge: null});
	var COMMAND_APPLY = keyOf({$apply: null});

	var ALL_COMMANDS_LIST = [
	  COMMAND_PUSH,
	  COMMAND_UNSHIFT,
	  COMMAND_SPLICE,
	  COMMAND_SET,
	  COMMAND_MERGE,
	  COMMAND_APPLY
	];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function(command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    Array.isArray(value),
	    'update(): expected target of %s to be an array; got %s.',
	    command,
	    value
	  ) : invariant(Array.isArray(value)));
	  var specValue = spec[command];
	  ("production" !== process.env.NODE_ENV ? invariant(
	    Array.isArray(specValue),
	    'update(): expected spec of %s to be an array; got %s. ' +
	    'Did you forget to wrap your parameter in an array?',
	    command,
	    specValue
	  ) : invariant(Array.isArray(specValue)));
	}

	function update(value, spec) {
	  ("production" !== process.env.NODE_ENV ? invariant(
	    typeof spec === 'object',
	    'update(): You provided a key path to update() that did not contain one ' +
	    'of %s. Did you forget to include {%s: ...}?',
	    ALL_COMMANDS_LIST.join(', '),
	    COMMAND_SET
	  ) : invariant(typeof spec === 'object'));

	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      Object.keys(spec).length === 1,
	      'Cannot have more than one key in an object with %s',
	      COMMAND_SET
	    ) : invariant(Object.keys(spec).length === 1));

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    ("production" !== process.env.NODE_ENV ? invariant(
	      mergeObj && typeof mergeObj === 'object',
	      'update(): %s expects a spec of type \'object\'; got %s',
	      COMMAND_MERGE,
	      mergeObj
	    ) : invariant(mergeObj && typeof mergeObj === 'object'));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      nextValue && typeof nextValue === 'object',
	      'update(): %s expects a target of type \'object\'; got %s',
	      COMMAND_MERGE,
	      nextValue
	    ) : invariant(nextValue && typeof nextValue === 'object'));
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function(item) {
	      nextValue.push(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function(item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      Array.isArray(value),
	      'Expected %s target to be an array; got %s',
	      COMMAND_SPLICE,
	      value
	    ) : invariant(Array.isArray(value)));
	    ("production" !== process.env.NODE_ENV ? invariant(
	      Array.isArray(spec[COMMAND_SPLICE]),
	      'update(): expected spec of %s to be an array of arrays; got %s. ' +
	      'Did you forget to wrap your parameters in an array?',
	      COMMAND_SPLICE,
	      spec[COMMAND_SPLICE]
	    ) : invariant(Array.isArray(spec[COMMAND_SPLICE])));
	    spec[COMMAND_SPLICE].forEach(function(args) {
	      ("production" !== process.env.NODE_ENV ? invariant(
	        Array.isArray(args),
	        'update(): expected spec of %s to be an array of arrays; got %s. ' +
	        'Did you forget to wrap your parameters in an array?',
	        COMMAND_SPLICE,
	        spec[COMMAND_SPLICE]
	      ) : invariant(Array.isArray(args)));
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    ("production" !== process.env.NODE_ENV ? invariant(
	      typeof spec[COMMAND_APPLY] === 'function',
	      'update(): expected spec of %s to be a function; got %s.',
	      COMMAND_APPLY,
	      spec[COMMAND_APPLY]
	    ) : invariant(typeof spec[COMMAND_APPLY] === 'function'));
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
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTestUtils
	 */

	'use strict';

	var EventConstants = __webpack_require__(7);
	var EventPluginHub = __webpack_require__(71);
	var EventPropagators = __webpack_require__(95);
	var React = __webpack_require__(5);
	var ReactElement = __webpack_require__(13);
	var ReactEmptyComponent = __webpack_require__(78);
	var ReactBrowserEventEmitter = __webpack_require__(70);
	var ReactCompositeComponent = __webpack_require__(86);
	var ReactInstanceHandles = __webpack_require__(21);
	var ReactInstanceMap = __webpack_require__(27);
	var ReactMount = __webpack_require__(69);
	var ReactUpdates = __webpack_require__(28);
	var SyntheticEvent = __webpack_require__(99);

	var assign = __webpack_require__(15);
	var emptyObject = __webpack_require__(16);

	var topLevelTypes = EventConstants.topLevelTypes;

	function Event(suffix) {}

	/**
	 * @class ReactTestUtils
	 */

	/**
	 * Todo: Support the entire DOM.scry query syntax. For now, these simple
	 * utilities will suffice for testing purposes.
	 * @lends ReactTestUtils
	 */
	var ReactTestUtils = {
	  renderIntoDocument: function(instance) {
	    var div = document.createElement('div');
	    // None of our tests actually require attaching the container to the
	    // DOM, and doing so creates a mess that we rely on test isolation to
	    // clean up, so we're going to stop honoring the name of this method
	    // (and probably rename it eventually) if no problems arise.
	    // document.documentElement.appendChild(div);
	    return React.render(instance, div);
	  },

	  isElement: function(element) {
	    return ReactElement.isValidElement(element);
	  },

	  isElementOfType: function(inst, convenienceConstructor) {
	    return (
	      ReactElement.isValidElement(inst) &&
	      inst.type === convenienceConstructor
	    );
	  },

	  isDOMComponent: function(inst) {
	    // TODO: Fix this heuristic. It's just here because composites can currently
	    // pretend to be DOM components.
	    return !!(inst && inst.tagName && inst.getDOMNode);
	  },

	  isDOMComponentElement: function(inst) {
	    return !!(inst &&
	              ReactElement.isValidElement(inst) &&
	              !!inst.tagName);
	  },

	  isCompositeComponent: function(inst) {
	    return typeof inst.render === 'function' &&
	           typeof inst.setState === 'function';
	  },

	  isCompositeComponentWithType: function(inst, type) {
	    return !!(ReactTestUtils.isCompositeComponent(inst) &&
	             (inst.constructor === type));
	  },

	  isCompositeComponentElement: function(inst) {
	    if (!ReactElement.isValidElement(inst)) {
	      return false;
	    }
	    // We check the prototype of the type that will get mounted, not the
	    // instance itself. This is a future proof way of duck typing.
	    var prototype = inst.type.prototype;
	    return (
	      typeof prototype.render === 'function' &&
	      typeof prototype.setState === 'function'
	    );
	  },

	  isCompositeComponentElementWithType: function(inst, type) {
	    return !!(ReactTestUtils.isCompositeComponentElement(inst) &&
	             (inst.constructor === type));
	  },

	  getRenderedChildOfCompositeComponent: function(inst) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return null;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    return internalInstance._renderedComponent.getPublicInstance();
	  },

	  findAllInRenderedTree: function(inst, test) {
	    if (!inst) {
	      return [];
	    }
	    var ret = test(inst) ? [inst] : [];
	    if (ReactTestUtils.isDOMComponent(inst)) {
	      var internalInstance = ReactInstanceMap.get(inst);
	      var renderedChildren = internalInstance
	        ._renderedComponent
	        ._renderedChildren;
	      var key;
	      for (key in renderedChildren) {
	        if (!renderedChildren.hasOwnProperty(key)) {
	          continue;
	        }
	        if (!renderedChildren[key].getPublicInstance) {
	          continue;
	        }
	        ret = ret.concat(
	          ReactTestUtils.findAllInRenderedTree(
	            renderedChildren[key].getPublicInstance(),
	            test
	          )
	        );
	      }
	    } else if (ReactTestUtils.isCompositeComponent(inst)) {
	      ret = ret.concat(
	        ReactTestUtils.findAllInRenderedTree(
	          ReactTestUtils.getRenderedChildOfCompositeComponent(inst),
	          test
	        )
	      );
	    }
	    return ret;
	  },

	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the class name matching `className`.
	   * @return an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithClass: function(root, className) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      var instClassName = inst.props.className;
	      return ReactTestUtils.isDOMComponent(inst) && (
	        (instClassName && (' ' + instClassName + ' ').indexOf(' ' + className + ' ') !== -1)
	      );
	    });
	  },

	  /**
	   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithClass: function(root, className) {
	    var all =
	      ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match ' +
	        '(found: ' + all.length + ') for class:' + className
	      );
	    }
	    return all[0];
	  },


	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the tag name matching `tagName`.
	   * @return an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithTag: function(root, tagName) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      return ReactTestUtils.isDOMComponent(inst) &&
	            inst.tagName === tagName.toUpperCase();
	    });
	  },

	  /**
	   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithTag: function(root, tagName) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match for tag:' + tagName);
	    }
	    return all[0];
	  },


	  /**
	   * Finds all instances of components with type equal to `componentType`.
	   * @return an array of all the matches.
	   */
	  scryRenderedComponentsWithType: function(root, componentType) {
	    return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
	      return ReactTestUtils.isCompositeComponentWithType(
	        inst,
	        componentType
	      );
	    });
	  },

	  /**
	   * Same as `scryRenderedComponentsWithType` but expects there to be one result
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactComponent} The one match.
	   */
	  findRenderedComponentWithType: function(root, componentType) {
	    var all = ReactTestUtils.scryRenderedComponentsWithType(
	      root,
	      componentType
	    );
	    if (all.length !== 1) {
	      throw new Error(
	        'Did not find exactly one match for componentType:' + componentType
	      );
	    }
	    return all[0];
	  },

	  /**
	   * Pass a mocked component module to this method to augment it with
	   * useful methods that allow it to be used as a dummy React component.
	   * Instead of rendering as usual, the component will become a simple
	   * <div> containing any provided children.
	   *
	   * @param {object} module the mock function object exported from a
	   *                        module that defines the component to be mocked
	   * @param {?string} mockTagName optional dummy root tag name to return
	   *                              from render method (overrides
	   *                              module.mockTagName if provided)
	   * @return {object} the ReactTestUtils object (for chaining)
	   */
	  mockComponent: function(module, mockTagName) {
	    mockTagName = mockTagName || module.mockTagName || "div";

	    module.prototype.render.mockImplementation(function() {
	      return React.createElement(
	        mockTagName,
	        null,
	        this.props.children
	      );
	    });

	    return this;
	  },

	  /**
	   * Simulates a top level event being dispatched from a raw event that occured
	   * on an `Element` node.
	   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`
	   * @param {!Element} node The dom to simulate an event occurring on.
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnNode: function(topLevelType, node, fakeNativeEvent) {
	    fakeNativeEvent.target = node;
	    ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(
	      topLevelType,
	      fakeNativeEvent
	    );
	  },

	  /**
	   * Simulates a top level event being dispatched from a raw event that occured
	   * on the `ReactDOMComponent` `comp`.
	   * @param topLevelType {Object} A type from `EventConstants.topLevelTypes`.
	   * @param comp {!ReactDOMComponent}
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnDOMComponent: function(
	      topLevelType,
	      comp,
	      fakeNativeEvent) {
	    ReactTestUtils.simulateNativeEventOnNode(
	      topLevelType,
	      comp.getDOMNode(),
	      fakeNativeEvent
	    );
	  },

	  nativeTouchData: function(x, y) {
	    return {
	      touches: [
	        {pageX: x, pageY: y}
	      ]
	    };
	  },

	  createRenderer: function() {
	    return new ReactShallowRenderer();
	  },

	  Simulate: null,
	  SimulateNative: {}
	};

	/**
	 * @class ReactShallowRenderer
	 */
	var ReactShallowRenderer = function() {
	  this._instance = null;
	};

	ReactShallowRenderer.prototype.getRenderOutput = function() {
	  return (
	    (this._instance && this._instance._renderedComponent &&
	     this._instance._renderedComponent._renderedOutput)
	    || null
	  );
	};

	var NoopInternalComponent = function(element) {
	  this._renderedOutput = element;
	  this._currentElement = element === null || element === false ?
	    ReactEmptyComponent.emptyElement :
	    element;
	};

	NoopInternalComponent.prototype = {

	  mountComponent: function() {
	  },

	  receiveComponent: function(element) {
	    this._renderedOutput = element;
	    this._currentElement = element === null || element === false ?
	      ReactEmptyComponent.emptyElement :
	      element;
	  },

	  unmountComponent: function() {
	  }

	};

	var ShallowComponentWrapper = function() { };
	assign(
	  ShallowComponentWrapper.prototype,
	  ReactCompositeComponent.Mixin, {
	    _instantiateReactComponent: function(element) {
	      return new NoopInternalComponent(element);
	    },
	    _replaceNodeWithMarkupByID: function() {},
	    _renderValidatedComponent:
	      ReactCompositeComponent.Mixin.
	        _renderValidatedComponentWithoutOwnerOrContext
	  }
	);

	ReactShallowRenderer.prototype.render = function(element, context) {
	  if (!context) {
	    context = emptyObject;
	  }
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
	  this._render(element, transaction, context);
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	};

	ReactShallowRenderer.prototype.unmount = function() {
	  if (this._instance) {
	    this._instance.unmountComponent();
	  }
	};

	ReactShallowRenderer.prototype._render = function(element, transaction, context) {
	  if (!this._instance) {
	    var rootID = ReactInstanceHandles.createReactRootID();
	    var instance = new ShallowComponentWrapper(element.type);
	    instance.construct(element);

	    instance.mountComponent(rootID, transaction, context);

	    this._instance = instance;
	  } else {
	    this._instance.receiveComponent(element, transaction, context);
	  }
	};

	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
	 * - ... (All keys from event plugin `eventTypes` objects)
	 */
	function makeSimulator(eventType) {
	  return function(domComponentOrNode, eventData) {
	    var node;
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      node = domComponentOrNode.getDOMNode();
	    } else if (domComponentOrNode.tagName) {
	      node = domComponentOrNode;
	    }

	    var fakeNativeEvent = new Event();
	    fakeNativeEvent.target = node;
	    // We don't use SyntheticEvent.getPooled in order to not have to worry about
	    // properly destroying any properties assigned from `eventData` upon release
	    var event = new SyntheticEvent(
	      ReactBrowserEventEmitter.eventNameDispatchConfigs[eventType],
	      ReactMount.getID(node),
	      fakeNativeEvent
	    );
	    assign(event, eventData);
	    EventPropagators.accumulateTwoPhaseDispatches(event);

	    ReactUpdates.batchedUpdates(function() {
	      EventPluginHub.enqueueEvents(event);
	      EventPluginHub.processEventQueue();
	    });
	  };
	}

	function buildSimulators() {
	  ReactTestUtils.Simulate = {};

	  var eventType;
	  for (eventType in ReactBrowserEventEmitter.eventNameDispatchConfigs) {
	    /**
	     * @param {!Element || ReactDOMComponent} domComponentOrNode
	     * @param {?object} eventData Fake event data to use in SyntheticEvent.
	     */
	    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
	  }
	}

	// Rebuild ReactTestUtils.Simulate whenever event plugins are injected
	var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
	EventPluginHub.injection.injectEventPluginOrder = function() {
	  oldInjectEventPluginOrder.apply(this, arguments);
	  buildSimulators();
	};
	var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
	EventPluginHub.injection.injectEventPluginsByName = function() {
	  oldInjectEventPlugins.apply(this, arguments);
	  buildSimulators();
	};

	buildSimulators();

	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
	 * - ... (All keys from `EventConstants.topLevelTypes`)
	 *
	 * Note: Top level event types are a subset of the entire set of handler types
	 * (which include a broader set of "synthetic" events). For example, onDragDone
	 * is a synthetic event. Except when testing an event plugin or React's event
	 * handling code specifically, you probably want to use ReactTestUtils.Simulate
	 * to dispatch synthetic events.
	 */

	function makeNativeSimulator(eventType) {
	  return function(domComponentOrNode, nativeEventData) {
	    var fakeNativeEvent = new Event(eventType);
	    assign(fakeNativeEvent, nativeEventData);
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      ReactTestUtils.simulateNativeEventOnDOMComponent(
	        eventType,
	        domComponentOrNode,
	        fakeNativeEvent
	      );
	    } else if (!!domComponentOrNode.tagName) {
	      // Will allow on actual dom nodes.
	      ReactTestUtils.simulateNativeEventOnNode(
	        eventType,
	        domComponentOrNode,
	        fakeNativeEvent
	      );
	    }
	  };
	}

	var eventType;
	for (eventType in topLevelTypes) {
	  // Event type is stored as 'topClick' - we transform that to 'click'
	  var convenienceName = eventType.indexOf('top') === 0 ?
	    eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
	  /**
	   * @param {!Element || ReactDOMComponent} domComponentOrNode
	   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
	   */
	  ReactTestUtils.SimulateNative[convenienceName] =
	    makeNativeSimulator(eventType);
	}

	module.exports = ReactTestUtils;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var TappableMixin = __webpack_require__(193);
	var PinchableMixin = __webpack_require__(194);
	var getComponent = __webpack_require__(195);
	var touchStyles = __webpack_require__(196);

	var Component = getComponent([TappableMixin, PinchableMixin]);

	module.exports = Component;
	module.exports.touchStyles = touchStyles;
	module.exports.Mixin = _extends({}, TappableMixin, {
	  onPinchStart: PinchableMixin.onPinchStart,
	  onPinchMove: PinchableMixin.onPinchMove,
	  onPinchEnd: PinchableMixin.onPinchEnd
	});

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);

	function getTouchProps(touch) {
		if (!touch) return {};
		return {
			pageX: touch.pageX,
			pageY: touch.pageY,
			clientX: touch.clientX,
			clientY: touch.clientY
		};
	}

	var Mixin = {
		propTypes: {
			moveThreshold: React.PropTypes.number, // pixels to move before cancelling tap
			activeDelay: React.PropTypes.number, // ms to wait before adding the `-active` class
			pressDelay: React.PropTypes.number, // ms to wait before detecting a press
			pressMoveThreshold: React.PropTypes.number, // pixels to move before cancelling press
			preventDefault: React.PropTypes.bool, // whether to preventDefault on all events
			stopPropagation: React.PropTypes.bool, // whether to stopPropagation on all events

			onTap: React.PropTypes.func, // fires when a tap is detected
			onPress: React.PropTypes.func, // fires when a press is detected
			onTouchStart: React.PropTypes.func, // pass-through touch event
			onTouchMove: React.PropTypes.func, // pass-through touch event
			onTouchEnd: React.PropTypes.func, // pass-through touch event
			onMouseDown: React.PropTypes.func, // pass-through mouse event
			onMouseUp: React.PropTypes.func, // pass-through mouse event
			onMouseMove: React.PropTypes.func, // pass-through mouse event
			onMouseOut: React.PropTypes.func // pass-through mouse event
		},

		getDefaultProps: function getDefaultProps() {
			return {
				activeDelay: 0,
				moveThreshold: 100,
				pressDelay: 1000,
				pressMoveThreshold: 5
			};
		},

		getInitialState: function getInitialState() {
			return {
				isActive: false,
				touchActive: false,
				pinchActive: false
			};
		},

		componentWillUnmount: function componentWillUnmount() {
			this.cleanupScrollDetection();
			this.cancelPressDetection();
			this.clearActiveTimeout();
		},

		processEvent: function processEvent(event) {
			if (this.props.preventDefault) event.preventDefault();
			if (this.props.stopPropagation) event.stopPropagation();
		},

		onTouchStart: function onTouchStart(event) {
			if (this.props.onTouchStart && this.props.onTouchStart(event) === false) return;
			this.processEvent(event);
			window._blockMouseEvents = true;
			if (event.touches.length === 1) {
				this._initialTouch = this._lastTouch = getTouchProps(event.touches[0]);
				this.initScrollDetection();
				this.initPressDetection(event, this.endTouch);
				this._activeTimeout = setTimeout(this.makeActive, this.props.activeDelay);
			} else if (this.onPinchStart && (this.props.onPinchStart || this.props.onPinchMove || this.props.onPinchEnd) && event.touches.length === 2) {
				this.onPinchStart(event);
			}
		},

		makeActive: function makeActive() {
			if (!this.isMounted()) return;
			this.clearActiveTimeout();
			this.setState({
				isActive: true
			});
		},

		clearActiveTimeout: function clearActiveTimeout() {
			clearTimeout(this._activeTimeout);
			this._activeTimeout = false;
		},

		initScrollDetection: function initScrollDetection() {
			this._scrollPos = { top: 0, left: 0 };
			this._scrollParents = [];
			this._scrollParentPos = [];
			var node = this.getDOMNode();
			while (node) {
				if (node.scrollHeight > node.offsetHeight || node.scrollWidth > node.offsetWidth) {
					this._scrollParents.push(node);
					this._scrollParentPos.push(node.scrollTop + node.scrollLeft);
					this._scrollPos.top += node.scrollTop;
					this._scrollPos.left += node.scrollLeft;
				}
				node = node.parentNode;
			}
		},

		calculateMovement: function calculateMovement(touch) {
			return {
				x: Math.abs(touch.clientX - this._initialTouch.clientX),
				y: Math.abs(touch.clientY - this._initialTouch.clientY)
			};
		},

		detectScroll: function detectScroll() {
			var currentScrollPos = { top: 0, left: 0 };
			for (var i = 0; i < this._scrollParents.length; i++) {
				currentScrollPos.top += this._scrollParents[i].scrollTop;
				currentScrollPos.left += this._scrollParents[i].scrollLeft;
			}
			return !(currentScrollPos.top === this._scrollPos.top && currentScrollPos.left === this._scrollPos.left);
		},

		cleanupScrollDetection: function cleanupScrollDetection() {
			this._scrollParents = undefined;
			this._scrollPos = undefined;
		},

		initPressDetection: function initPressDetection(event, callback) {
			if (!this.props.onPress) return;
			this._pressTimeout = setTimeout((function () {
				this.props.onPress(event);
				callback();
			}).bind(this), this.props.pressDelay);
		},

		cancelPressDetection: function cancelPressDetection() {
			clearTimeout(this._pressTimeout);
		},

		onTouchMove: function onTouchMove(event) {
			if (this._initialTouch) {
				this.processEvent(event);

				if (this.detectScroll()) return this.endTouch(event);

				this.props.onTouchMove && this.props.onTouchMove(event);
				this._lastTouch = getTouchProps(event.touches[0]);
				var movement = this.calculateMovement(this._lastTouch);
				if (movement.x > this.props.pressMoveThreshold || movement.y > this.props.pressMoveThreshold) {
					this.cancelPressDetection();
				}
				if (movement.x > this.props.moveThreshold || movement.y > this.props.moveThreshold) {
					if (this.state.isActive) {
						this.setState({
							isActive: false
						});
					} else if (this._activeTimeout) {
						this.clearActiveTimeout();
					}
				} else {
					if (!this.state.isActive && !this._activeTimeout) {
						this.setState({
							isActive: true
						});
					}
				}
			} else if (this._initialPinch && event.touches.length === 2 && this.onPinchMove) {
				this.onPinchMove(event);
				event.preventDefault();
			}
		},

		onTouchEnd: function onTouchEnd(event) {
			var _this = this;

			if (this._initialTouch) {
				this.processEvent(event);
				var afterEndTouch;
				var movement = this.calculateMovement(this._lastTouch);
				if (movement.x <= this.props.moveThreshold && movement.y <= this.props.moveThreshold && this.props.onTap) {
					event.preventDefault();
					afterEndTouch = function () {
						var finalParentScrollPos = _this._scrollParents.map(function (node) {
							return node.scrollTop + node.scrollLeft;
						});
						var stoppedMomentumScroll = _this._scrollParentPos.some(function (end, i) {
							return end !== finalParentScrollPos[i];
						});
						if (!stoppedMomentumScroll) {
							_this.props.onTap(event);
						}
					};
				}
				this.endTouch(event, afterEndTouch);
			} else if (this.onPinchEnd && this._initialPinch && event.touches.length + event.changedTouches.length === 2) {
				this.onPinchEnd(event);
				event.preventDefault();
			}
		},

		endTouch: function endTouch(event, callback) {
			this.cancelPressDetection();
			this.clearActiveTimeout();
			if (event && this.props.onTouchEnd) {
				this.props.onTouchEnd(event);
			}
			this._initialTouch = null;
			this._lastTouch = null;
			if (callback) {
				callback();
			}
			if (this.state.isActive) {
				this.setState({
					isActive: false
				});
			}
		},

		onMouseDown: function onMouseDown(event) {
			if (window._blockMouseEvents) {
				window._blockMouseEvents = false;
				return;
			}
			if (this.props.onMouseDown && this.props.onMouseDown(event) === false) return;
			this.processEvent(event);
			this.initPressDetection(event, this.endMouseEvent);
			this._mouseDown = true;
			this.setState({
				isActive: true
			});
		},

		onMouseMove: function onMouseMove(event) {
			if (window._blockMouseEvents || !this._mouseDown) return;
			this.processEvent(event);
			this.props.onMouseMove && this.props.onMouseMove(event);
		},

		onMouseUp: function onMouseUp(event) {
			if (window._blockMouseEvents || !this._mouseDown) return;
			this.processEvent(event);
			this.props.onMouseUp && this.props.onMouseUp(event);
			this.props.onTap && this.props.onTap(event);
			this.endMouseEvent();
		},

		onMouseOut: function onMouseOut(event) {
			if (window._blockMouseEvents || !this._mouseDown) return;
			this.processEvent(event);
			this.props.onMouseOut && this.props.onMouseOut(event);
			this.endMouseEvent();
		},

		endMouseEvent: function endMouseEvent() {
			this.cancelPressDetection();
			this._mouseDown = false;
			this.setState({
				isActive: false
			});
		},

		cancelTap: function cancelTap() {
			this.endTouch();
			this._mouseDown = false;
		},

		handlers: function handlers() {
			return {
				onTouchStart: this.onTouchStart,
				onTouchMove: this.onTouchMove,
				onTouchEnd: this.onTouchEnd,
				onMouseDown: this.onMouseDown,
				onMouseUp: this.onMouseUp,
				onMouseMove: this.onMouseMove,
				onMouseOut: this.onMouseOut
			};
		}
	};

	module.exports = Mixin;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(4);

	function getPinchProps(touches) {
		return {
			touches: Array.prototype.map.call(touches, function copyTouch(touch) {
				return { identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY };
			}),
			center: { x: (touches[0].pageX + touches[1].pageX) / 2, y: (touches[0].pageY + touches[1].pageY) / 2 },
			angle: Math.atan() * (touches[1].pageY - touches[0].pageY) / (touches[1].pageX - touches[0].pageX) * 180 / Math.PI,
			distance: Math.sqrt(Math.pow(Math.abs(touches[1].pageX - touches[0].pageX), 2) + Math.pow(Math.abs(touches[1].pageY - touches[0].pageY), 2))
		};
	}

	var Mixin = {
		propTypes: {
			onPinchStart: React.PropTypes.func, // fires when a pinch gesture is started
			onPinchMove: React.PropTypes.func, // fires on every touch-move when a pinch action is active
			onPinchEnd: React.PropTypes.func // fires when a pinch action ends
		},

		onPinchStart: function onPinchStart(event) {
			// in case the two touches didn't start exactly at the same time
			if (this._initialTouch) {
				this.endTouch();
			}
			var touches = event.touches;
			this._initialPinch = getPinchProps(touches);
			this._initialPinch = _extends(this._initialPinch, {
				displacement: { x: 0, y: 0 },
				displacementVelocity: { x: 0, y: 0 },
				rotation: 0,
				rotationVelocity: 0,
				zoom: 1,
				zoomVelocity: 0,
				time: Date.now()
			});
			this._lastPinch = this._initialPinch;
			this.props.onPinchStart && this.props.onPinchStart(this._initialPinch, event);
		},

		onPinchMove: function onPinchMove(event) {
			if (this._initialTouch) {
				this.endTouch();
			}
			var touches = event.touches;
			if (touches.length !== 2) {
				return this.onPinchEnd(event); // bail out before disaster
			}

			var currentPinch = touches[0].identifier === this._initialPinch.touches[0].identifier && touches[1].identifier === this._initialPinch.touches[1].identifier ? getPinchProps(touches) // the touches are in the correct order
			: touches[1].identifier === this._initialPinch.touches[0].identifier && touches[0].identifier === this._initialPinch.touches[1].identifier ? getPinchProps(touches.reverse()) // the touches have somehow changed order
			: getPinchProps(touches); // something is wrong, but we still have two touch-points, so we try not to fail

			currentPinch.displacement = {
				x: currentPinch.center.x - this._initialPinch.center.x,
				y: currentPinch.center.y - this._initialPinch.center.y
			};

			currentPinch.time = Date.now();
			var timeSinceLastPinch = currentPinch.time - this._lastPinch.time;

			currentPinch.displacementVelocity = {
				x: (currentPinch.displacement.x - this._lastPinch.displacement.x) / timeSinceLastPinch,
				y: (currentPinch.displacement.y - this._lastPinch.displacement.y) / timeSinceLastPinch
			};

			currentPinch.rotation = currentPinch.angle - this._initialPinch.angle;
			currentPinch.rotationVelocity = currentPinch.rotation - this._lastPinch.rotation / timeSinceLastPinch;

			currentPinch.zoom = currentPinch.distance / this._initialPinch.distance;
			currentPinch.zoomVelocity = (currentPinch.zoom - this._lastPinch.zoom) / timeSinceLastPinch;

			this.props.onPinchMove && this.props.onPinchMove(currentPinch, event);

			this._lastPinch = currentPinch;
		},

		onPinchEnd: function onPinchEnd(event) {
			// TODO use helper to order touches by identifier and use actual values on touchEnd.
			var currentPinch = _extends({}, this._lastPinch);
			currentPinch.time = Date.now();

			if (currentPinch.time - this._lastPinch.time > 16) {
				currentPinch.displacementVelocity = 0;
				currentPinch.rotationVelocity = 0;
				currentPinch.zoomVelocity = 0;
			}

			this.props.onPinchEnd && this.props.onPinchEnd(currentPinch, event);

			this._initialPinch = this._lastPinch = null;

			// If one finger is still on screen, it should start a new touch event for swiping etc
			// But it should never fire an onTap or onPress event.
			// Since there is no support swipes yet, this should be disregarded for now
			// if (event.touches.length === 1) {
			// 	this.onTouchStart(event);
			// }
		}
	};

	module.exports = Mixin;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(4);
	var touchStyles = __webpack_require__(196);

	/**
	 * Tappable Component
	 * ==================
	 */
	module.exports = function (mixins) {
		return React.createClass({
			displayName: 'Tappable',

			mixins: mixins,

			propTypes: {
				component: React.PropTypes.any, // component to create
				className: React.PropTypes.string, // optional className
				classBase: React.PropTypes.string, // base for generated classNames
				style: React.PropTypes.object, // additional style properties for the component
				disabled: React.PropTypes.bool // only applies to buttons
			},

			getDefaultProps: function getDefaultProps() {
				return {
					component: 'span',
					classBase: 'Tappable'
				};
			},

			render: function render() {
				var props = this.props;
				var className = props.classBase + (this.state.isActive ? '-active' : '-inactive');

				if (props.className) {
					className += ' ' + props.className;
				}

				var style = {};
				_extends(style, touchStyles, props.style);

				var newComponentProps = _extends({}, props, {
					style: style,
					className: className,
					disabled: props.disabled,
					handlers: this.handlers
				}, this.handlers());

				delete newComponentProps.onTap;
				delete newComponentProps.onPress;
				delete newComponentProps.onPinchStart;
				delete newComponentProps.onPinchMove;
				delete newComponentProps.onPinchEnd;
				delete newComponentProps.moveThreshold;
				delete newComponentProps.pressDelay;
				delete newComponentProps.pressMoveThreshold;
				delete newComponentProps.preventDefault;
				delete newComponentProps.stopPropagation;
				delete newComponentProps.component;

				return React.createElement(props.component, newComponentProps, props.children);
			}
		});
	};

/***/ },
/* 196 */
/***/ function(module, exports) {

	'use strict';

	var touchStyles = {
	  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	  WebkitTouchCallout: 'none',
	  WebkitUserSelect: 'none',
	  KhtmlUserSelect: 'none',
	  MozUserSelect: 'none',
	  msUserSelect: 'none',
	  userSelect: 'none',
	  cursor: 'pointer'
	};

	module.exports = touchStyles;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var React = __webpack_require__(4);

	var View = React.createClass({
		displayName: 'View',

		propTypes: {
			component: React.PropTypes.func.isRequired,
			name: React.PropTypes.string.isRequired
		},
		render: function render() {
			throw new Error('TouchstoneJS <View> should not be rendered directly.');
		}
	});

	exports['default'] = View;
	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classNames = __webpack_require__(173);
	var ErrorView = __webpack_require__(200);
	var React = __webpack_require__(174);
	var Transition = React.addons.CSSTransitionGroup;

	function createViewsFromChildren(children) {
		var views = {};
		React.Children.forEach(children, function (view) {
			views[view.props.name] = view;
		});
		return views;
	}

	var ViewContainer = React.createClass({
		displayName: 'ViewContainer',

		statics: {
			shouldFillVerticalSpace: true
		},
		propTypes: {
			children: React.PropTypes.node
		},
		render: function render() {
			var props = blacklist(this.props, 'children');
			return React.createElement(
				'div',
				props,
				this.props.children
			);
		}
	});

	var ViewManager = React.createClass({
		displayName: 'ViewManager',

		statics: {
			shouldFillVerticalSpace: true
		},
		contextTypes: {
			app: React.PropTypes.object.isRequired
		},
		propTypes: {
			name: React.PropTypes.string,
			children: React.PropTypes.node,
			className: React.PropTypes.string,
			defaultView: React.PropTypes.string,
			onViewChange: React.PropTypes.func
		},
		getDefaultProps: function getDefaultProps() {
			return {
				name: '__default'
			};
		},
		getInitialState: function getInitialState() {
			return {
				views: createViewsFromChildren(this.props.children),
				currentView: this.props.defaultView,
				options: {}
			};
		},
		componentDidMount: function componentDidMount() {
			this.context.app.viewManagers[this.props.name] = this;
		},
		componentWillUnmount: function componentWillUnmount() {
			delete this.context.app.viewManagers[this.props.name];
		},
		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			this.setState({
				views: createViewsFromChildren(this.props.children)
			});
			if (nextProps.name !== this.props.name) {
				this.context.app.viewManagers[nextProps.name] = this;
				delete this.context.app.viewManagers[this.props.name];
			}
			if (nextProps.currentView && nextProps.currentView !== this.state.currentView) {
				this.transitionTo(nextProps.currentView, { viewProps: nextProps.viewProps });
			}
		},
		transitionTo: function transitionTo(viewKey, options) {
			var _this = this;

			if (typeof options === 'string') {
				options = { transition: options };
			}
			if (!options) options = {};
			this.activeTransitionOptions = options;
			this.context.app.viewManagerInTransition = this;
			this.props.onViewChange && this.props.onViewChange(viewKey);
			this.setState({
				currentView: viewKey,
				options: options
			}, function () {
				delete _this.activeTransitionOptions;
				delete _this.context.app.viewManagerInTransition;
			});
		},
		renderViewContainer: function renderViewContainer() {
			var viewKey = this.state.currentView;
			if (!viewKey) {
				return React.createElement(
					ErrorView,
					null,
					React.createElement(
						'span',
						{ className: 'ErrorView__heading' },
						'ViewManager: ',
						this.props.name
					),
					React.createElement(
						'span',
						{ className: 'ErrorView__text' },
						'Error: There is no current View.'
					)
				);
			}
			var view = this.state.views[viewKey];
			if (!view || !view.props.component) {
				return React.createElement(
					ErrorView,
					null,
					React.createElement(
						'span',
						{ className: 'ErrorView__heading' },
						'ViewManager: "',
						this.props.name,
						'"'
					),
					React.createElement(
						'span',
						{ className: 'ErrorView__text' },
						'The View "',
						viewKey,
						'" is invalid.'
					)
				);
			}
			var options = this.state.options || {};
			var viewClassName = classNames('View View--' + viewKey, view.props.className);
			var ViewComponent = view.props.component;
			var viewProps = blacklist(view.props, 'component', 'className');
			_extends(viewProps, options.viewProps);
			var viewElement = React.createElement(ViewComponent, viewProps);

			if (this.__lastRenderedView !== viewKey) {
				// console.log('initialising view ' + viewKey + ' with options', options);
				if (viewElement.type.navigationBar && viewElement.type.getNavigation) {
					var app = this.context.app;
					var transition = options.transition;
					if (app.viewManagerInTransition) {
						transition = app.viewManagerInTransition.activeTransitionOptions.transition;
					}
					setTimeout(function () {
						app.navigationBars[viewElement.type.navigationBar].updateWithTransition(viewElement.type.getNavigation(viewProps, app), transition);
					}, 0);
				}
				this.__lastRenderedView = viewKey;
			}

			return React.createElement(
				ViewContainer,
				{ className: viewClassName, key: viewKey },
				viewElement
			);
		},
		render: function render() {
			var className = classNames('ViewManager', this.props.className);
			var viewContainer = this.renderViewContainer(this.state.currentView, { viewProps: this.state.currentViewProps });

			var transitionName = 'view-transition-instant';
			if (this.state.options.transition) {
				// console.log('applying view transition: ' + this.state.options.transition + ' to view ' + this.state.currentView);
				transitionName = 'view-transition-' + this.state.options.transition;
			}
			return React.createElement(
				Transition,
				{ transitionName: transitionName, transitionEnter: true, transitionLeave: true, className: className, component: 'div' },
				viewContainer
			);
		}
	});

	exports['default'] = ViewManager;
	module.exports = exports['default'];

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = function blacklist (src) {
	  var copy = {}, filter = arguments[1]

	  if (typeof filter === 'string') {
	    filter = {}
	    for (var i = 1; i < arguments.length; i++) {
	      filter[arguments[i]] = true
	    }
	  }

	  for (var key in src) {
	    // blacklist?
	    if (filter[key]) continue

	    copy[key] = src[key]
	  }

	  return copy
	}


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var React = __webpack_require__(4);
	var Container = __webpack_require__(201);

	var ErrorView = React.createClass({
		displayName: 'ErrorView',

		propTypes: {
			children: React.PropTypes.node
		},

		render: function render() {
			return React.createElement(
				Container,
				{ fill: true, className: 'View ErrorView' },
				this.props.children
			);
		}
	});

	exports['default'] = ErrorView;
	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(4);

	function hasChildrenWithVerticalFill(children) {
		var result = false;

		React.Children.forEach(children, function (c) {
			if (result) return; // early-exit
			if (!c) return;
			if (!c.type) return;

			result = !!c.type.shouldFillVerticalSpace;
		});

		return result;
	}

	var Container = React.createClass({
		displayName: 'Container',

		propTypes: {
			align: React.PropTypes.oneOf(['end', 'center', 'start']),
			direction: React.PropTypes.oneOf(['column', 'row']),
			fill: React.PropTypes.bool,
			grow: React.PropTypes.bool,
			justify: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.oneOf(['end', 'center', 'start'])]),
			scrollable: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.object])
		},
		componentDidMount: function componentDidMount() {
			if (this.props.scrollable && this.props.scrollable.mount) {
				this.props.scrollable.mount(this);
			}
		},
		componentWillUnmount: function componentWillUnmount() {
			if (this.props.scrollable && this.props.scrollable.unmount) {
				this.props.scrollable.unmount(this);
			}
		},
		render: function render() {
			var direction = this.props.direction;
			if (!direction) {
				if (hasChildrenWithVerticalFill(this.props.children)) {
					direction = 'column';
				}
			}

			var fill = this.props.fill;
			if (direction === 'column' || this.props.scrollable) {
				fill = true;
			}

			var align = this.props.align;
			if (direction === 'column' && align === 'top') align = 'start';
			if (direction === 'column' && align === 'bottom') align = 'end';
			if (direction === 'row' && align === 'left') align = 'start';
			if (direction === 'row' && align === 'right') align = 'end';

			var className = classnames(this.props.className, {
				'Container--fill': fill,
				'Container--direction-column': direction === 'column',
				'Container--direction-row': direction === 'row',
				'Container--align-center': align === 'center',
				'Container--align-start': align === 'start',
				'Container--align-end': align === 'end',
				'Container--justify-center': this.props.justify === 'center',
				'Container--justify-start': this.props.justify === 'start',
				'Container--justify-end': this.props.justify === 'end',
				'Container--justified': this.props.justify === true,
				'Container--scrollable': this.props.scrollable
			});

			var props = blacklist(this.props, 'className', 'direction', 'fill', 'justify', 'scrollable');

			return React.createElement(
				'div',
				_extends({ className: className }, props),
				this.props.children
			);
		}
	});

	function initScrollable(defaultPos) {
		if (!defaultPos) {
			defaultPos = {};
		}
		var pos;
		var scrollable = {
			reset: function reset() {
				pos = { left: defaultPos.left || 0, top: defaultPos.top || 0 };
			},
			getPos: function getPos() {
				return { left: pos.left, top: pos.top };
			},
			mount: function mount(element) {
				var node = React.findDOMNode(element);
				node.scrollLeft = pos.left;
				node.scrollTop = pos.top;
			},
			unmount: function unmount(element) {
				var node = React.findDOMNode(element);
				pos.left = node.scrollLeft;
				pos.top = node.scrollTop;
			}
		};
		scrollable.reset();
		return scrollable;
	}

	Container.initScrollable = initScrollable;

	exports['default'] = Container;
	module.exports = exports['default'];

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var Alertbar = __webpack_require__(203);
	exports.Alertbar = Alertbar;
	var Button = __webpack_require__(204);
	exports.Button = Button;
	var ButtonGroup = __webpack_require__(205);
	exports.ButtonGroup = ButtonGroup;
	var DatePicker = __webpack_require__(206);
	exports.DatePicker = DatePicker;
	var DatePickerPopup = __webpack_require__(207);
	exports.DatePickerPopup = DatePickerPopup;
	var FieldControl = __webpack_require__(209);
	exports.FieldControl = FieldControl;
	var FieldLabel = __webpack_require__(210);
	exports.FieldLabel = FieldLabel;
	var Group = __webpack_require__(211);
	exports.Group = Group;
	var GroupBody = __webpack_require__(212);
	exports.GroupBody = GroupBody;
	var GroupFooter = __webpack_require__(213);
	exports.GroupFooter = GroupFooter;
	var GroupHeader = __webpack_require__(214);
	exports.GroupHeader = GroupHeader;
	var GroupInner = __webpack_require__(215);
	exports.GroupInner = GroupInner;
	var Item = __webpack_require__(216);
	exports.Item = Item;
	var ItemContent = __webpack_require__(217);
	exports.ItemContent = ItemContent;
	var ItemInner = __webpack_require__(218);
	exports.ItemInner = ItemInner;
	var ItemMedia = __webpack_require__(219);
	exports.ItemMedia = ItemMedia;
	var ItemNote = __webpack_require__(220);
	exports.ItemNote = ItemNote;
	var ItemSubTitle = __webpack_require__(221);
	exports.ItemSubTitle = ItemSubTitle;
	var ItemTitle = __webpack_require__(222);
	exports.ItemTitle = ItemTitle;
	var LabelInput = __webpack_require__(223);
	exports.LabelInput = LabelInput;
	var LabelSelect = __webpack_require__(224);
	exports.LabelSelect = LabelSelect;
	var LabelTextarea = __webpack_require__(225);
	exports.LabelTextarea = LabelTextarea;
	var LabelValue = __webpack_require__(226);
	exports.LabelValue = LabelValue;
	var ListHeader = __webpack_require__(227);
	exports.ListHeader = ListHeader;
	var NavigationBar = __webpack_require__(172);
	exports.NavigationBar = NavigationBar;
	var Popup = __webpack_require__(208);
	exports.Popup = Popup;
	var PopupIcon = __webpack_require__(228);
	exports.PopupIcon = PopupIcon;
	var RadioList = __webpack_require__(229);
	exports.RadioList = RadioList;
	var SearchField = __webpack_require__(230);
	exports.SearchField = SearchField;
	var SegmentedControl = __webpack_require__(231);
	exports.SegmentedControl = SegmentedControl;
	var Switch = __webpack_require__(232);
	exports.Switch = Switch;
	var Tabs = __webpack_require__(233);
	exports.Tabs = Tabs;
	var Textarea = __webpack_require__(234);

	exports.Textarea = Textarea;
	// depends on above
	var Input = __webpack_require__(235);
	exports.Input = Input;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(174);
	var classnames = __webpack_require__(173);
	var Transition = React.addons.CSSTransitionGroup;

	module.exports = React.createClass({
		displayName: 'Alertbar',
		propTypes: {
			animated: React.PropTypes.bool,
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string,
			pulse: React.PropTypes.bool,
			type: React.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
			visible: React.PropTypes.bool
		},

		getDefaultProps: function getDefaultProps() {
			return {
				type: 'default'
			};
		},

		render: function render() {
			var className = classnames('Alertbar', 'Alertbar--' + this.props.type, {
				'Alertbar--animated': this.props.animated,
				'Alertbar--pulse': this.props.pulse
			}, this.props.className);

			var pulseWrap = this.props.pulse ? React.createElement(
				'div',
				{ className: 'Alertbar__inner' },
				this.props.children
			) : this.props.children;
			var animatedBar = this.props.visible ? React.createElement(
				'div',
				{ className: className },
				pulseWrap
			) : null;

			var component = this.props.animated ? React.createElement(
				Transition,
				{ transitionName: 'Alertbar', component: 'div' },
				animatedBar
			) : React.createElement(
				'div',
				{ className: className },
				pulseWrap
			);

			return component;
		}
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(174);
	var Tappable = __webpack_require__(192);

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);

	module.exports = React.createClass({
		displayName: 'Button',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string,
			type: React.PropTypes.oneOf(['default', 'info', 'primary', 'success', 'warning', 'danger'])
		},

		getDefaultProps: function getDefaultProps() {
			return {
				type: 'default'
			};
		},

		render: function render() {
			var className = classnames('Button', 'Button--' + this.props.type, this.props.className);
			var props = blacklist(this.props, 'type');

			return React.createElement(Tappable, _extends({}, props, { className: className, component: 'button' }));
		}
	});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'ButtonGroup',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string
		},
		render: function render() {
			var className = classnames('ButtonGroup', this.props.className);
			var props = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(174);
	var Tappable = __webpack_require__(192);
	var classnames = __webpack_require__(173);

	var i18n = {
		// TODO: use real i18n strings.
		weekdaysMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		longMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		formatYearMonth: function formatYearMonth(year, month) {
			return year + ' - ' + (month + 1);
		}
	};

	function newState(props) {
		var date = props.date || new Date();
		var year = date.getFullYear();
		var month = date.getMonth();
		var ns = {
			mode: 'day',
			year: year,
			month: month,
			day: date.getDate(),
			displayYear: year,
			displayMonth: month,
			displayYearRangeStart: Math.floor(year / 10) * 10
		};
		return ns;
	}

	module.exports = React.createClass({
		displayName: 'DatePicker',
		propTypes: {
			date: React.PropTypes.object,
			mode: React.PropTypes.oneOf(['day', 'month']),
			onChange: React.PropTypes.func
		},

		getDefaultProps: function getDefaultProps() {
			return {
				date: new Date()
			};
		},

		getInitialState: function getInitialState() {
			return newState(this.props);
		},

		componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
			this.setState(newState(nextProps));
		},

		selectDay: function selectDay(year, month, day) {
			this.setState({
				year: year,
				month: month,
				day: day
			});

			if (this.props.onChange) {
				this.props.onChange(new Date(year, month, day));
			}
		},

		selectMonth: function selectMonth(month) {
			this.setState({
				displayMonth: month,
				mode: 'day'
			});
		},

		selectYear: function selectYear(year) {
			this.setState({
				displayYear: year,
				displayYearRangeStart: Math.floor(year / 10) * 10,
				mode: 'month'
			});
		},

		handlerTopBarTitleClick: function handlerTopBarTitleClick() {
			if (this.state.mode === 'day') {
				this.setState({ mode: 'month' });
			} else {
				this.setState({ mode: 'day' });
			}
		},

		handleLeftArrowClick: function handleLeftArrowClick() {
			switch (this.state.mode) {
				case 'day':
					this.goPreviousMonth();
					break;

				case 'month':
					this.goPreviousYearRange();
					break;

				case 'year':
					this.goPreviousYearRange();
					break;
			}
		},

		handleRightArrowClick: function handleRightArrowClick() {
			switch (this.state.mode) {
				case 'day':
					this.goNextMonth();
					break;

				case 'month':
					this.goNextYearRange();
					break;

				case 'year':
					this.goNextYearRange();
					break;
			}
		},

		goPreviousMonth: function goPreviousMonth() {
			if (this.state.displayMonth === 0) {
				this.setState({
					displayMonth: 11,
					displayYear: this.state.displayYear - 1
				});
			} else {
				this.setState({
					displayMonth: this.state.displayMonth - 1
				});
			}
		},

		goNextMonth: function goNextMonth() {
			if (this.state.displayMonth === 11) {
				this.setState({
					displayMonth: 0,
					displayYear: this.state.displayYear + 1
				});
			} else {
				this.setState({
					displayMonth: this.state.displayMonth + 1
				});
			}
		},

		goPreviousYear: function goPreviousYear() {
			this.setState({
				displayYear: this.state.displayYear - 1
			});
		},

		goNextYear: function goNextYear() {
			this.setState({
				displayYear: this.state.displayYear + 1
			});
		},

		goPreviousYearRange: function goPreviousYearRange() {
			this.setState({
				displayYearRangeStart: this.state.displayYearRangeStart - 10
			});
		},

		goNextYearRange: function goNextYearRange() {
			this.setState({
				displayYearRangeStart: this.state.displayYearRangeStart + 10
			});
		},

		renderWeeknames: function renderWeeknames() {
			return i18n.weekdaysMin.map(function (name, i) {
				return React.createElement(
					'span',
					{ key: name + i, className: 'week-name' },
					name
				);
			});
		},

		renderDays: function renderDays() {
			var displayYear = this.state.displayYear;
			var displayMonth = this.state.displayMonth;
			var today = new Date();
			var lastDayInMonth = new Date(displayYear, displayMonth + 1, 0);
			var daysInMonth = lastDayInMonth.getDate();
			var daysInPreviousMonth = new Date(displayYear, displayMonth, 0).getDate();
			var startWeekDay = new Date(displayYear, displayMonth, 1).getDay();
			var days = [];
			var i, dm, dy;

			for (i = 0; i < startWeekDay; i++) {
				var d = daysInPreviousMonth - (startWeekDay - 1 - i);
				dm = displayMonth - 1;
				dy = displayYear;
				if (dm === -1) {
					dm = 11;
					dy -= 1;
				}
				days.push(React.createElement(
					Tappable,
					{ key: 'p' + i, onTap: this.selectDay.bind(this, dy, dm, d), className: 'day in-previous-month' },
					d
				));
			}

			var inThisMonth = displayYear === today.getFullYear() && displayMonth === today.getMonth();
			var inSelectedMonth = displayYear === this.state.year && displayMonth === this.state.month;
			for (i = 1; i <= daysInMonth; i++) {
				var cssClass = classnames({
					'day': true,
					'is-today': inThisMonth && i === today.getDate(),
					'is-current': inSelectedMonth && i === this.state.day
				});
				days.push(React.createElement(
					Tappable,
					{ key: i, onTap: this.selectDay.bind(this, displayYear, displayMonth, i), className: cssClass },
					i
				));
			}

			var c = startWeekDay + daysInMonth;
			for (i = 1; i <= 42 - c; i++) {
				dm = displayMonth + 1;
				dy = displayYear;
				if (dm === 12) {
					dm = 0;
					dy += 1;
				}
				days.push(React.createElement(
					Tappable,
					{ key: 'n' + i, onTap: this.selectDay.bind(this, dy, dm, i), className: 'day in-next-month' },
					i
				));
			}

			return days;
		},

		renderMonths: function renderMonths() {
			var _this = this;

			return i18n.months.map(function (name, m) {
				return React.createElement(
					Tappable,
					{ key: name + m, className: classnames('month-name', { 'is-current': m === _this.state.displayMonth }),
						onTap: _this.selectMonth.bind(_this, m) },
					name
				);
			});
		},

		renderYears: function renderYears() {
			var years = [];
			for (var i = this.state.displayYearRangeStart - 1; i < this.state.displayYearRangeStart + 11; i++) {
				years.push(React.createElement(
					Tappable,
					{ key: i, className: classnames('year', { 'is-current': i === this.state.displayYear }),
						onTap: this.selectYear.bind(this, i) },
					i
				));
			}

			return years;
		},

		render: function render() {
			var topBarTitle = '';
			switch (this.state.mode) {
				case 'day':
					topBarTitle = i18n.formatYearMonth(this.state.displayYear, this.state.displayMonth);
					break;
				case 'month':
					topBarTitle = this.state.displayYearRangeStart + ' - ' + (this.state.displayYearRangeStart + 9);
					break;
			}

			return React.createElement(
				'div',
				{ className: classnames('date-picker', 'mode-' + this.state.mode) },
				React.createElement(
					'div',
					{ className: 'top-bar' },
					React.createElement(Tappable, { className: 'left-arrow', onTap: this.handleLeftArrowClick }),
					React.createElement(Tappable, { className: 'right-arrow', onTap: this.handleRightArrowClick }),
					React.createElement(
						Tappable,
						{ className: 'top-bar-title', onTap: this.handlerTopBarTitleClick },
						topBarTitle
					)
				),
				this.state.mode === 'day' && [React.createElement(
					'div',
					{ key: 'weeknames', className: 'week-names-container' },
					this.renderWeeknames()
				), React.createElement(
					'div',
					{ key: 'days', className: 'days-container' },
					this.renderDays()
				)],
				this.state.mode === 'month' && [React.createElement(
					'div',
					{ key: 'years', className: 'years-container' },
					this.renderYears()
				), React.createElement(
					'div',
					{ key: 'months', className: 'month-names-container' },
					this.renderMonths()
				)]
			);
		}
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var blacklist = __webpack_require__(199);
	var React = __webpack_require__(174);
	var Popup = __webpack_require__(208);
	var DatePicker = __webpack_require__(206);
	var classnames = __webpack_require__(173);

	module.exports = React.createClass({
		displayName: 'DatePickerPopup',

		propTypes: {
			className: React.PropTypes.string,
			visible: React.PropTypes.bool
		},

		render: function render() {
			var className = classnames('DatePicker', this.props.className);
			var props = blacklist(this.props, 'className', 'visible');
			return React.createElement(
				Popup,
				{ className: className, visible: this.props.visible },
				React.createElement(DatePicker, props)
			);
		}
	});

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(174);
	var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

	var classnames = __webpack_require__(173);

	module.exports = React.createClass({
		displayName: 'Popup',

		propTypes: {
			children: React.PropTypes.node,
			className: React.PropTypes.string,
			visible: React.PropTypes.bool
		},

		getDefaultProps: function getDefaultProps() {
			return {
				transition: 'none'
			};
		},

		renderBackdrop: function renderBackdrop() {
			if (!this.props.visible) return null;
			return React.createElement('div', { className: 'Popup-backdrop' });
		},

		renderDialog: function renderDialog() {
			if (!this.props.visible) return null;

			// Set classnames
			var dialogClassName = classnames('Popup-dialog', this.props.className);

			return React.createElement(
				'div',
				{ className: dialogClassName },
				this.props.children
			);
		},

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'Popup' },
				React.createElement(
					ReactCSSTransitionGroup,
					{ transitionName: 'Popup-dialog', component: 'div' },
					this.renderDialog()
				),
				React.createElement(
					ReactCSSTransitionGroup,
					{ transitionName: 'Popup-background', component: 'div' },
					this.renderBackdrop()
				)
			);
		}
	});

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'FieldControl',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string
		},
		render: function render() {
			var className = classnames('FieldControl', this.props.className);
			var props = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'FieldLabel',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string
		},
		render: function render() {
			var className = classnames('FieldLabel', this.props.className);
			var props = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'Group',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string,
			hasTopGutter: React.PropTypes.bool
		},
		render: function render() {
			var className = classnames('Group', {
				'Group--has-gutter-top': this.props.hasTopGutter
			}, this.props.className);
			var props = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'GroupBody',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string
		},
		render: function render() {
			var className = classnames('Group__body', this.props.className);
			var props = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'GroupFooter',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string
		},
		render: function render() {
			var className = classnames('Group__footer', this.props.className);
			var props = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'GroupHeader',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string
		},
		render: function render() {
			var className = classnames('Group__header', this.props.className);
			var props = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'GroupInner',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string
		},
		render: function render() {
			var className = classnames('Group__inner', this.props.className);
			var props = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _blacklist = __webpack_require__(199);

	var _blacklist2 = _interopRequireDefault(_blacklist);

	var _reactAddons = __webpack_require__(174);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _classnames = __webpack_require__(173);

	var _classnames2 = _interopRequireDefault(_classnames);

	module.exports = _reactAddons2['default'].createClass({
		displayName: 'Item',

		propTypes: {
			children: _reactAddons2['default'].PropTypes.node.isRequired,
			component: _reactAddons2['default'].PropTypes.any,
			className: _reactAddons2['default'].PropTypes.string,
			showDisclosureArrow: _reactAddons2['default'].PropTypes.bool
		},

		getDefaultProps: function getDefaultProps() {
			return {
				component: 'div'
			};
		},

		render: function render() {
			var componentClass = (0, _classnames2['default'])('Item', {
				'Item--has-disclosure-arrow': this.props.showDisclosureArrow
			}, this.props.className);

			var props = (0, _blacklist2['default'])(this.props, 'children', 'className', 'showDisclosureArrow');
			props.className = componentClass;

			return _reactAddons2['default'].createElement(this.props.component, props, this.props.children);
		}
	});

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'ItemContent',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string
		},
		render: function render() {
			var className = classnames('Item__content', this.props.className);
			var props = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(174);

	var classnames = __webpack_require__(173);

	module.exports = React.createClass({
		displayName: 'ItemInner',

		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string
		},

		render: function render() {
			var className = classnames('Item__inner', this.props.className);

			return React.createElement('div', _extends({ className: className }, this.props));
		}
	});

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(174);
	var classnames = __webpack_require__(173);

	module.exports = React.createClass({
		displayName: 'ItemMedia',
		propTypes: {
			avatar: React.PropTypes.string,
			avatarInitials: React.PropTypes.string,
			className: React.PropTypes.string,
			icon: React.PropTypes.string,
			thumbnail: React.PropTypes.string
		},

		render: function render() {
			var className = classnames({
				'Item__media': true,
				'Item__media--icon': this.props.icon,
				'Item__media--avatar': this.props.avatar || this.props.avatarInitials,
				'Item__media--thumbnail': this.props.thumbnail
			}, this.props.className);

			// media types
			var icon = this.props.icon ? React.createElement('div', { className: 'Item__media__icon ' + this.props.icon }) : null;
			var avatar = this.props.avatar || this.props.avatarInitials ? React.createElement(
				'div',
				{ className: 'Item__media__avatar' },
				this.props.avatar ? React.createElement('img', { src: this.props.avatar }) : this.props.avatarInitials
			) : null;
			var thumbnail = this.props.thumbnail ? React.createElement(
				'div',
				{ className: 'Item__media__thumbnail' },
				React.createElement('img', { src: this.props.thumbnail })
			) : null;

			return React.createElement(
				'div',
				{ className: className },
				icon,
				avatar,
				thumbnail
			);
		}
	});

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'ItemNote',
		propTypes: {
			className: React.PropTypes.string,
			icon: React.PropTypes.string,
			label: React.PropTypes.string,
			type: React.PropTypes.string
		},
		getDefaultProps: function getDefaultProps() {
			return {
				type: 'default'
			};
		},
		render: function render() {
			var className = classnames('Item__note', 'Item__note--' + this.props.type, this.props.className);

			// elements
			var label = this.props.label ? React.createElement(
				'div',
				{ className: 'Item__note__label' },
				this.props.label
			) : null;
			var icon = this.props.icon ? React.createElement('div', { className: 'Item__note__icon ' + this.props.icon }) : null;

			return React.createElement(
				'div',
				{ className: className },
				label,
				icon
			);
		}
	});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'ItemSubTitle',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string
		},
		render: function render() {
			var className = classnames('Item__subtitle', this.props.className);
			var props = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'ItemTitle',
		propTypes: {
			children: React.PropTypes.node.isRequired,
			className: React.PropTypes.string
		},
		render: function render() {
			var className = classnames('Item__title', this.props.className);
			var props = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _blacklist = __webpack_require__(199);

	var _blacklist2 = _interopRequireDefault(_blacklist);

	var _FieldControl = __webpack_require__(209);

	var _FieldControl2 = _interopRequireDefault(_FieldControl);

	var _Item = __webpack_require__(216);

	var _Item2 = _interopRequireDefault(_Item);

	var _ItemInner = __webpack_require__(218);

	var _ItemInner2 = _interopRequireDefault(_ItemInner);

	var _reactAddons = __webpack_require__(174);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _reactTappable = __webpack_require__(192);

	var _reactTappable2 = _interopRequireDefault(_reactTappable);

	// Many input types DO NOT support setSelectionRange.
	// Email will show an error on most desktop browsers but works on
	// mobile safari + WKWebView, which is really what we care about
	var SELECTABLE_INPUT_TYPES = {
		'email': true,
		'password': true,
		'search': true,
		'tel': true,
		'text': true,
		'url': true
	};

	module.exports = _reactAddons2['default'].createClass({
		displayName: 'LabelInput',

		propTypes: {
			alignTop: _reactAddons2['default'].PropTypes.bool,
			autoFocus: _reactAddons2['default'].PropTypes.bool,
			children: _reactAddons2['default'].PropTypes.node,
			className: _reactAddons2['default'].PropTypes.string,
			disabled: _reactAddons2['default'].PropTypes.bool,
			label: _reactAddons2['default'].PropTypes.string,
			readOnly: _reactAddons2['default'].PropTypes.bool,
			value: _reactAddons2['default'].PropTypes.string
		},

		componentDidMount: function componentDidMount() {
			if (this.props.autoFocus) {
				this.moveCursorToEnd();
			}
		},

		moveCursorToEnd: function moveCursorToEnd() {
			var target = this.refs.focusTarget.getDOMNode();
			var endOfString = target.value.length;

			if (SELECTABLE_INPUT_TYPES.hasOwnProperty(target.type)) {
				target.focus();
				target.setSelectionRange(endOfString, endOfString);
			}
		},

		render: function render() {
			var inputProps = (0, _blacklist2['default'])(this.props, 'alignTop', 'children', 'first', 'readOnly');
			var renderInput = this.props.readOnly ? _reactAddons2['default'].createElement(
				'div',
				{ className: 'field u-selectable' },
				this.props.value
			) : _reactAddons2['default'].createElement('input', _extends({ ref: 'focusTarget', className: 'field', type: 'text' }, inputProps));

			return _reactAddons2['default'].createElement(
				_Item2['default'],
				{ alignTop: this.props.alignTop, selectable: this.props.disabled, className: this.props.className, component: 'label' },
				_reactAddons2['default'].createElement(
					_ItemInner2['default'],
					null,
					_reactAddons2['default'].createElement(
						_reactTappable2['default'],
						{ onTap: this.moveCursorToEnd, className: 'FieldLabel' },
						this.props.label
					),
					_reactAddons2['default'].createElement(
						_FieldControl2['default'],
						null,
						renderInput,
						this.props.children
					)
				)
			);
		}
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactAddons = __webpack_require__(174);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _FieldControl = __webpack_require__(209);

	var _FieldControl2 = _interopRequireDefault(_FieldControl);

	var _FieldLabel = __webpack_require__(210);

	var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

	var _Item = __webpack_require__(216);

	var _Item2 = _interopRequireDefault(_Item);

	var _ItemInner = __webpack_require__(218);

	var _ItemInner2 = _interopRequireDefault(_ItemInner);

	module.exports = _reactAddons2['default'].createClass({
		displayName: 'LabelSelect',
		propTypes: {
			className: _reactAddons2['default'].PropTypes.string,
			disabled: _reactAddons2['default'].PropTypes.bool,
			label: _reactAddons2['default'].PropTypes.string,
			onChange: _reactAddons2['default'].PropTypes.func.isRequired,
			options: _reactAddons2['default'].PropTypes.array.isRequired,
			value: _reactAddons2['default'].PropTypes.oneOfType([_reactAddons2['default'].PropTypes.number, _reactAddons2['default'].PropTypes.string])
		},

		getDefaultProps: function getDefaultProps() {
			return {
				className: ''
			};
		},

		renderOptions: function renderOptions() {
			return this.props.options.map(function (op) {
				return _reactAddons2['default'].createElement(
					'option',
					{ key: 'option-' + op.value, value: op.value },
					op.label
				);
			});
		},

		render: function render() {

			return _reactAddons2['default'].createElement(
				_Item2['default'],
				{ className: this.props.className, component: 'label' },
				_reactAddons2['default'].createElement(
					_ItemInner2['default'],
					null,
					_reactAddons2['default'].createElement(
						_FieldLabel2['default'],
						null,
						this.props.label
					),
					_reactAddons2['default'].createElement(
						_FieldControl2['default'],
						null,
						_reactAddons2['default'].createElement(
							'select',
							{ disabled: this.props.disabled, value: this.props.value, onChange: this.props.onChange, className: 'select-field' },
							this.renderOptions()
						),
						_reactAddons2['default'].createElement(
							'div',
							{ className: 'select-field-indicator' },
							_reactAddons2['default'].createElement('div', { className: 'select-field-indicator-arrow' })
						)
					)
				)
			);
		}
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);

	module.exports = React.createClass({
		displayName: 'LabelTextarea',

		propTypes: {
			children: React.PropTypes.node,
			className: React.PropTypes.string,
			disabled: React.PropTypes.bool,
			first: React.PropTypes.bool,
			label: React.PropTypes.string,
			readOnly: React.PropTypes.bool,
			value: React.PropTypes.string
		},

		getDefaultProps: function getDefaultProps() {
			return {
				rows: 3
			};
		},

		render: function render() {
			var className = classnames(this.props.className, 'list-item', 'field-item', 'align-top', {
				'is-first': this.props.first,
				'u-selectable': this.props.disabled
			});

			var props = blacklist(this.props, 'children', 'className', 'disabled', 'first', 'label', 'readOnly');

			var renderInput = this.props.readOnly ? React.createElement(
				'div',
				{ className: 'field u-selectable' },
				this.props.value
			) : React.createElement('textarea', _extends({}, props, { className: 'field' }));

			return React.createElement(
				'div',
				{ className: className },
				React.createElement(
					'label',
					{ className: 'item-inner' },
					React.createElement(
						'div',
						{ className: 'field-label' },
						this.props.label
					),
					React.createElement(
						'div',
						{ className: 'field-control' },
						renderInput,
						this.props.children
					)
				)
			);
		}
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _FieldControl = __webpack_require__(209);

	var _FieldControl2 = _interopRequireDefault(_FieldControl);

	var _Item = __webpack_require__(216);

	var _Item2 = _interopRequireDefault(_Item);

	var _ItemInner = __webpack_require__(218);

	var _ItemInner2 = _interopRequireDefault(_ItemInner);

	var _reactAddons = __webpack_require__(174);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _classnames = __webpack_require__(173);

	var _classnames2 = _interopRequireDefault(_classnames);

	module.exports = _reactAddons2['default'].createClass({
		displayName: 'LabelValue',

		propTypes: {
			alignTop: _reactAddons2['default'].PropTypes.bool,
			className: _reactAddons2['default'].PropTypes.string,
			label: _reactAddons2['default'].PropTypes.string,
			placeholder: _reactAddons2['default'].PropTypes.string,
			value: _reactAddons2['default'].PropTypes.string
		},

		render: function render() {
			return _reactAddons2['default'].createElement(
				_Item2['default'],
				{ alignTop: this.props.alignTop, className: this.props.className, component: 'label' },
				_reactAddons2['default'].createElement(
					_ItemInner2['default'],
					null,
					_reactAddons2['default'].createElement(
						'div',
						{ className: 'FieldLabel' },
						this.props.label
					),
					_reactAddons2['default'].createElement(
						_FieldControl2['default'],
						null,
						_reactAddons2['default'].createElement(
							'div',
							{ className: (0, _classnames2['default'])('field', this.props.value ? 'u-selectable' : 'field-placeholder') },
							this.props.value || this.props.placeholder
						)
					)
				)
			);
		}
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(4);

	var blacklist = __webpack_require__(199);
	var classNames = __webpack_require__(173);

	module.exports = React.createClass({
		displayName: 'ListHeader',

		propTypes: {
			className: React.PropTypes.string,
			sticky: React.PropTypes.bool
		},

		render: function render() {
			var className = classNames('list-header', {
				'sticky': this.props.sticky
			}, this.props.className);

			var props = blacklist(this.props, 'sticky');

			return React.createElement('div', _extends({ className: className }, props));
		}
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(174);
	var classNames = __webpack_require__(173);

	module.exports = React.createClass({
		displayName: 'PopupIcon',
		propTypes: {
			name: React.PropTypes.string,
			type: React.PropTypes.oneOf(['default', 'muted', 'primary', 'success', 'warning', 'danger']),
			spinning: React.PropTypes.bool
		},

		render: function render() {
			var className = classNames('PopupIcon', {
				'is-spinning': this.props.spinning
			}, this.props.name, this.props.type);

			return React.createElement('div', { className: className });
		}
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classnames = __webpack_require__(173);
	var Item = __webpack_require__(216);
	var ItemInner = __webpack_require__(218);
	var ItemNote = __webpack_require__(220);
	var ItemTitle = __webpack_require__(222);
	var React = __webpack_require__(4);
	var Tappable = __webpack_require__(192);

	module.exports = React.createClass({
		displayName: 'RadioList',

		propTypes: {
			options: React.PropTypes.array.isRequired,
			value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
			icon: React.PropTypes.string,
			onChange: React.PropTypes.func
		},

		onChange: function onChange(value) {
			this.props.onChange(value);
		},

		render: function render() {
			var self = this;
			var options = this.props.options.map(function (op, i) {
				var iconClassname = classnames('item-icon primary', op.icon);
				var checkMark = op.value === self.props.value ? React.createElement(ItemNote, { type: 'primary', icon: 'ion-checkmark' }) : null;
				var icon = op.icon ? React.createElement(
					'div',
					{ className: 'item-media' },
					React.createElement('span', { className: iconClassname })
				) : null;

				function onChange() {
					self.onChange(op.value);
				}

				return React.createElement(
					Tappable,
					{ key: 'option-' + i, onTap: onChange },
					React.createElement(
						Item,
						{ key: 'option-' + i, onTap: onChange },
						icon,
						React.createElement(
							ItemInner,
							null,
							React.createElement(
								ItemTitle,
								null,
								op.label
							),
							checkMark
						)
					)
				);
			});

			return React.createElement(
				'div',
				null,
				options
			);
		}
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classnames = __webpack_require__(173);
	var React = __webpack_require__(174);
	var Tappable = __webpack_require__(192);

	module.exports = React.createClass({
		displayName: 'SearchField',
		propTypes: {
			className: React.PropTypes.string,
			onCancel: React.PropTypes.func,
			onChange: React.PropTypes.func,
			onClear: React.PropTypes.func,
			onSubmit: React.PropTypes.func,
			placeholder: React.PropTypes.string,
			type: React.PropTypes.oneOf(['default', 'dark']),
			value: React.PropTypes.string
		},

		getInitialState: function getInitialState() {
			return {
				isFocused: false
			};
		},

		getDefaultProps: function getDefaultProps() {
			return {
				type: 'default',
				value: ''
			};
		},

		handleClear: function handleClear() {
			this.refs.input.getDOMNode().focus();
			this.props.onClear();
		},

		handleCancel: function handleCancel() {
			this.refs.input.getDOMNode().blur();
			this.props.onCancel();
		},

		handleChange: function handleChange(e) {
			this.props.onChange(e.target.value);
		},

		handleBlur: function handleBlur(e) {
			this.setState({
				isFocused: false
			});
		},

		handleFocus: function handleFocus(e) {
			this.setState({
				isFocused: true
			});
		},

		handleSubmit: function handleSubmit(e) {
			e.preventDefault();

			var input = this.refs.input.getDOMNode();

			input.blur();
			this.props.onSubmit(input.value);
		},

		renderClear: function renderClear() {
			if (!this.props.value.length) return;
			return React.createElement(Tappable, { className: 'SearchField__icon SearchField__icon--clear', onTap: this.handleClear });
		},

		renderCancel: function renderCancel() {
			var className = classnames('SearchField__cancel', {
				'is-visible': this.state.isFocused || this.props.value
			});
			return React.createElement(
				Tappable,
				{ className: className, onTap: this.handleCancel },
				'Cancel'
			);
		},

		render: function render() {
			var className = classnames('SearchField', 'SearchField--' + this.props.type, {
				'is-focused': this.state.isFocused,
				'has-value': this.props.value
			}, this.props.className);

			return React.createElement(
				'form',
				{ onSubmit: this.handleSubmit, action: 'javascript:;', className: className },
				React.createElement(
					'label',
					{ className: 'SearchField__field' },
					React.createElement(
						'div',
						{ className: 'SearchField__placeholder' },
						React.createElement('span', { className: 'SearchField__icon SearchField__icon--search' }),
						!this.props.value.length ? this.props.placeholder : null
					),
					React.createElement('input', { type: 'search', ref: 'input', value: this.props.value, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, className: 'SearchField__input' }),
					this.renderClear()
				),
				this.renderCancel()
			);
		}
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var classnames = __webpack_require__(173);
	var Tappable = __webpack_require__(192);

	module.exports = React.createClass({
		displayName: 'SegmentedControl',

		propTypes: {
			className: React.PropTypes.string,
			equalWidthSegments: React.PropTypes.bool,
			isInline: React.PropTypes.bool,
			hasGutter: React.PropTypes.bool,
			onChange: React.PropTypes.func.isRequired,
			options: React.PropTypes.array.isRequired,
			type: React.PropTypes.string,
			value: React.PropTypes.string
		},

		getDefaultProps: function getDefaultProps() {
			return {
				type: 'primary'
			};
		},

		onChange: function onChange(value) {
			this.props.onChange(value);
		},

		render: function render() {
			var componentClassName = classnames('SegmentedControl', 'SegmentedControl--' + this.props.type, {
				'SegmentedControl--inline': this.props.isInline,
				'SegmentedControl--has-gutter': this.props.hasGutter,
				'SegmentedControl--equal-widths': this.props.equalWidthSegments
			}, this.props.className);
			var self = this;

			var options = this.props.options.map(function (op) {
				function onChange() {
					self.onChange(op.value);
				}

				var itemClassName = classnames('SegmentedControl__item', {
					'is-selected': op.value === self.props.value
				});

				return React.createElement(
					Tappable,
					{ key: 'option-' + op.value, onTap: onChange, className: itemClassName },
					op.label
				);
			});

			return React.createElement(
				'div',
				{ className: componentClassName },
				options
			);
		}
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classnames = __webpack_require__(173);
	var React = __webpack_require__(4);
	var Tappable = __webpack_require__(192);

	module.exports = React.createClass({
		displayName: 'Switch',

		propTypes: {
			disabled: React.PropTypes.bool,
			on: React.PropTypes.bool,
			onTap: React.PropTypes.func,
			type: React.PropTypes.string
		},

		getDefaultProps: function getDefaultProps() {
			return {
				type: 'default'
			};
		},

		render: function render() {
			var className = classnames('Switch', 'Switch--' + this.props.type, {
				'is-disabled': this.props.disabled,
				'is-on': this.props.on
			});

			return React.createElement(
				Tappable,
				{ onTap: this.props.onTap, className: className, component: 'label' },
				React.createElement(
					'div',
					{ className: 'Switch__track' },
					React.createElement('div', { className: 'Switch__handle' })
				)
			);
		}
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(4);
	var Tappable = __webpack_require__(192);

	var blacklist = __webpack_require__(199);
	var classnames = __webpack_require__(173);

	var Navigator = React.createClass({
		displayName: 'Navigator',

		propTypes: {
			className: React.PropTypes.string
		},

		render: function render() {
			var className = classnames('Tabs-Navigator', this.props.className);
			var otherProps = blacklist(this.props, 'className');

			return React.createElement('div', _extends({ className: className }, otherProps));
		}
	});

	exports.Navigator = Navigator;
	var Tab = React.createClass({
		displayName: 'Tab',

		propTypes: {
			selected: React.PropTypes.bool
		},

		render: function render() {
			var className = classnames('Tabs-Tab', { 'is-selected': this.props.selected });
			var otherProps = blacklist(this.props, 'selected');

			return React.createElement(Tappable, _extends({ className: className }, otherProps));
		}
	});

	exports.Tab = Tab;
	var Label = React.createClass({
		displayName: 'Label',

		render: function render() {
			return React.createElement('div', _extends({ className: 'Tabs-Label' }, this.props));
		}
	});
	exports.Label = Label;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(174);

	var Item = __webpack_require__(216);
	var ItemContent = __webpack_require__(217);
	var ItemInner = __webpack_require__(218);

	var blacklist = __webpack_require__(199);

	module.exports = React.createClass({
		displayName: 'Input',
		propTypes: {
			className: React.PropTypes.string,
			children: React.PropTypes.node,
			disabled: React.PropTypes.bool
		},

		render: function render() {
			var inputProps = blacklist(this.props, 'children', 'className');

			return React.createElement(
				Item,
				{ selectable: this.props.disabled, className: this.props.className, component: 'label' },
				React.createElement(
					ItemInner,
					null,
					React.createElement(
						ItemContent,
						{ component: 'label' },
						React.createElement('textarea', _extends({ className: 'field', rows: 3 }, inputProps))
					),
					this.props.children
				)
			);
		}
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _blacklist = __webpack_require__(199);

	var _blacklist2 = _interopRequireDefault(_blacklist);

	var _reactAddons = __webpack_require__(174);

	var _reactAddons2 = _interopRequireDefault(_reactAddons);

	var _Item = __webpack_require__(216);

	var _Item2 = _interopRequireDefault(_Item);

	var _ItemContent = __webpack_require__(217);

	var _ItemContent2 = _interopRequireDefault(_ItemContent);

	var _ItemInner = __webpack_require__(218);

	var _ItemInner2 = _interopRequireDefault(_ItemInner);

	// Many input types DO NOT support setSelectionRange.
	// Email will show an error on most desktop browsers but works on
	// mobile safari + WKWebView, which is really what we care about
	var SELECTABLE_INPUT_TYPES = {
		'email': true,
		'password': true,
		'search': true,
		'tel': true,
		'text': true,
		'url': true
	};

	module.exports = _reactAddons2['default'].createClass({
		displayName: 'Input',

		propTypes: {
			autoFocus: _reactAddons2['default'].PropTypes.bool,
			className: _reactAddons2['default'].PropTypes.string,
			children: _reactAddons2['default'].PropTypes.node,
			disabled: _reactAddons2['default'].PropTypes.bool
		},

		componentDidMount: function componentDidMount() {
			if (this.props.autoFocus) {
				this.moveCursorToEnd();
			}
		},

		moveCursorToEnd: function moveCursorToEnd() {
			var target = this.refs.focusTarget.getDOMNode();
			var endOfString = target.value.length;

			if (SELECTABLE_INPUT_TYPES.hasOwnProperty(target.type)) {
				target.focus();
				target.setSelectionRange(endOfString, endOfString);
			}
		},

		render: function render() {
			var inputProps = (0, _blacklist2['default'])(this.props, 'children', 'className');

			return _reactAddons2['default'].createElement(
				_Item2['default'],
				{ className: this.props.className, selectable: this.props.disabled, component: 'label' },
				_reactAddons2['default'].createElement(
					_ItemInner2['default'],
					null,
					_reactAddons2['default'].createElement(
						_ItemContent2['default'],
						{ component: 'label' },
						_reactAddons2['default'].createElement('input', _extends({ ref: 'focusTarget', className: 'field', type: 'text' }, inputProps))
					),
					this.props.children
				)
			);
		}
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var FloatingActionButton = __webpack_require__(237);
	var RaisedButton = __webpack_require__(264);
	var FloatingActionButtonFlex = __webpack_require__(266); //SOON TO BE DEPRECATED

	var RecordController = __webpack_require__(267);

	var buttonStyle = {
		height: FloatingActionButtonFlex.buttonHeight,
		width: FloatingActionButtonFlex.buttonHeight
	};

	var divStyle = {
		width: '100%',
		height: '100%',
		textAlign: 'center'
	};

	var recordIcon = 'fa fa-microphone';
	var playIcon = 'fa fa-play';
	var stopIcon = 'fa fa-stop';

	var RecordButton = React.createClass({
		displayName: 'RecordButton',

		//Add the event listener for status changes and setup the initial state of the button
		getInitialState: function getInitialState() {
			document.addEventListener('mediaChange', (function () {
				this.setButtonState();
			}).bind(this));
			return {
				file: RecordController.recordButtonMedia ? RecordController.recordButtonMedia.src : null,
				status: RecordController.currentStatus,
				action: RecordController.currentAction,
				buttonColour: '#ff5722',
				iconStyle: recordIcon,
				buttonFunction: this.startRecord

			};
		},
		startRecord: function startRecord(event) {
			var now = new Date();
			RecordController.startRecording(now.getTime() + '.m4a');
		},
		stopRecord: function stopRecord(event) {
			RecordController.stopRecording();
		},
		play: function play(event) {
			RecordController.playMedia(this.state.file);
		},
		stop: function stop(event) {
			RecordController.stopMedia();
		},
		reset: function reset(event) {
			RecordController.resetMedia();
		},
		setButtonState: function setButtonState() {
			this.setState(RecordController.mediaStatus());

			if (this.state.status === 2 && this.state.action === 'RECORDING') {
				//currently recording state
				this.setState({
					buttonColour: '#f44336',
					iconStyle: stopIcon,
					buttonFunction: this.stopRecord
				});
			} else if (this.state.status === 4 && this.state.file !== null) {
				//ready to play state
				this.setState({
					buttonColour: '#4caf50',
					iconStyle: playIcon,
					buttonFunction: this.play
				});
			} else if (this.state.status === 2 && this.state.action === 'PLAYING') {
				//currently playing state
				this.setState({
					buttonColour: '#f44336',
					iconStyle: stopIcon,
					buttonFunction: this.stop
				});
			} else if (this.state.status === 0) {
				//ready to record state
				this.setState({
					buttonColour: '#ff5722',
					iconStyle: recordIcon,
					buttonFunction: this.startRecord
				});
			}
		},
		render: function render() {
			return React.createElement(
				'div',
				{ style: divStyle },
				'file: ',
				this.state.file,
				React.createElement('br', null),
				'status: ',
				this.state.status,
				React.createElement('br', null),
				'action: ',
				this.state.action,
				React.createElement(FloatingActionButtonFlex, { onClick: this.state.buttonFunction,
					style: buttonStyle,
					backgroundColor: this.state.buttonColour,
					iconClassName: this.state.iconStyle }),
				React.createElement(
					RaisedButton,
					null,
					'Save'
				),
				React.createElement(
					RaisedButton,
					null,
					'Reset'
				)
			);
		}
	});

	module.exports = RecordButton;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(238);
	var Transitions = __webpack_require__(244);
	var ColorManipulator = __webpack_require__(245);
	var EnhancedButton = __webpack_require__(246);
	var FontIcon = __webpack_require__(261);
	var Paper = __webpack_require__(262);
	var Children = __webpack_require__(248);
	var DefaultRawTheme = __webpack_require__(257);
	var ThemeManager = __webpack_require__(259);

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
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var ImmutabilityHelper = __webpack_require__(239);
	var Styles = __webpack_require__(240);

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
	  }
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(174);
	var update = React.addons.update;

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
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AutoPrefix = __webpack_require__(241);
	var ImmutabilityHelper = __webpack_require__(239);

	module.exports = {

	  mergeAndPrefix: function mergeAndPrefix() {
	    var mergedStyles = ImmutabilityHelper.merge.apply(this, arguments);
	    return AutoPrefix.all(mergedStyles);
	  }

	};

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isBrowser = __webpack_require__(242);

	var Modernizr = isBrowser ? __webpack_require__(243) : undefined;

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
/* 242 */
/***/ function(module, exports) {

	'use strict';

	module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 243 */
/***/ function(module, exports) {

	/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
	 * Build: http://modernizr.com/download/#-borderradius-boxshadow-opacity-csstransforms-csstransforms3d-csstransitions-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
	 */

	'use strict';

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
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AutoPrefix = __webpack_require__(241);

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
/* 245 */
/***/ function(module, exports) {

	'use strict';

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
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(174);
	var PureRenderMixin = React.addons.PureRenderMixin;
	var StylePropable = __webpack_require__(238);
	var Colors = __webpack_require__(247);
	var Children = __webpack_require__(248);
	var Events = __webpack_require__(249);
	var KeyCode = __webpack_require__(250);
	var FocusRipple = __webpack_require__(251);
	var TouchRipple = __webpack_require__(254);
	var DefaultRawTheme = __webpack_require__(257);
	var ThemeManager = __webpack_require__(259);

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

	    var mergedStyles = this.mergeAndPrefix({
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
/* 247 */
/***/ function(module, exports) {

	// To include this file in your project:
	// let mui = require('mui');
	// let Colors = mui.Styles.Colors;

	'use strict';

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
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(174);
	var createFragment = React.addons.createFragment;

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
/* 249 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	  once: function once(el, type, callback) {
	    var typeArray = type.split(' ');
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
/* 250 */
/***/ function(module, exports) {

	"use strict";

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
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(174);
	var PureRenderMixin = React.addons.PureRenderMixin;
	var StylePropable = __webpack_require__(238);
	var AutoPrefix = __webpack_require__(241);
	var Colors = __webpack_require__(247);
	var Transitions = __webpack_require__(244);
	var ScaleInTransitionGroup = __webpack_require__(252);

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

	    var innerCircle = React.findDOMNode(this.refs.innerCircle);
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
	    var el = React.findDOMNode(this.refs.innerCircle);
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
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(174);
	var PureRenderMixin = React.addons.PureRenderMixin;
	var ReactTransitionGroup = React.addons.TransitionGroup;
	var StylePropable = __webpack_require__(238);
	var ScaleInChild = __webpack_require__(253);

	var ScaleIn = React.createClass({
	  displayName: 'ScaleIn',

	  mixins: [PureRenderMixin, StylePropable],

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

	    var mergedRootStyles = this.mergeAndPrefix({
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
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(174);
	var PureRenderMixin = React.addons.PureRenderMixin;
	var StylePropable = __webpack_require__(238);
	var AutoPrefix = __webpack_require__(241);
	var Transitions = __webpack_require__(244);

	var ScaleInChild = React.createClass({
	  displayName: 'ScaleInChild',

	  mixins: [PureRenderMixin, StylePropable],

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

	    var style = React.findDOMNode(this).style;

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

	    var mergedRootStyles = this.mergeAndPrefix({
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
	    var style = React.findDOMNode(this).style;

	    style.opacity = '1';
	    AutoPrefix.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
	  },

	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;

	    var style = React.findDOMNode(this).style;

	    style.opacity = '0';
	    AutoPrefix.set(style, 'transform', 'scale(0)');

	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, this.props.enterDelay);
	  }

	});

	module.exports = ScaleInChild;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(174);
	var PureRenderMixin = React.addons.PureRenderMixin;
	var ReactTransitionGroup = React.addons.TransitionGroup;
	var StylePropable = __webpack_require__(238);
	var Dom = __webpack_require__(255);
	var ImmutabilityHelper = __webpack_require__(239);
	var CircleRipple = __webpack_require__(256);

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
	    var el = React.findDOMNode(this);
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
/* 255 */
/***/ function(module, exports) {

	'use strict';

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
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(174);
	var PureRenderMixin = React.addons.PureRenderMixin;
	var StylePropable = __webpack_require__(238);
	var AutoPrefix = __webpack_require__(241);
	var Transitions = __webpack_require__(244);
	var Colors = __webpack_require__(247);

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

	    var style = React.findDOMNode(this).style;
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
	    var style = React.findDOMNode(this).style;
	    var transitionValue = Transitions.easeOut('2s', 'opacity') + ',' + Transitions.easeOut('1s', 'transform');
	    AutoPrefix.set(style, 'transition', transitionValue);
	    AutoPrefix.set(style, 'transform', 'scale(1)');
	  },

	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;

	    var style = React.findDOMNode(this).style;
	    style.opacity = this.props.opacity;
	    AutoPrefix.set(style, 'transform', 'scale(0)');
	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, 0);
	  }

	});

	module.exports = CircleRipple;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Colors = __webpack_require__(247);
	var ColorManipulator = __webpack_require__(245);
	var Spacing = __webpack_require__(258);

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
/* 258 */
/***/ function(module, exports) {

	"use strict";

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
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Colors = __webpack_require__(247);
	var ColorManipulator = __webpack_require__(245);
	var Extend = __webpack_require__(260);
	var update = __webpack_require__(190);

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
	        backgroundColor: rawTheme.palette.primary1Color
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
	      }
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
/* 260 */
/***/ function(module, exports) {

	'use strict';

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
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(238);
	var Transitions = __webpack_require__(244);
	var DefaultRawTheme = __webpack_require__(257);
	var ThemeManager = __webpack_require__(259);

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

	    var mergedStyles = this.mergeAndPrefix({
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
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(174);
	var PureRenderMixin = React.addons.PureRenderMixin;
	var StylePropable = __webpack_require__(238);
	var PropTypes = __webpack_require__(263);
	var Transitions = __webpack_require__(244);
	var DefaultRawTheme = __webpack_require__(257);
	var ThemeManager = __webpack_require__(259);

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
	      _extends({}, other, { style: this.mergeAndPrefix(styles, style) }),
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
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);

	module.exports = {

	  corners: React.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

	  cornersAndCenter: React.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

	  stringOrNumber: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

	  zDepth: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5])

	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(238);
	var Transitions = __webpack_require__(244);
	var ColorManipulator = __webpack_require__(245);
	var Typography = __webpack_require__(265);
	var EnhancedButton = __webpack_require__(246);
	var Paper = __webpack_require__(262);
	var DefaultRawTheme = __webpack_require__(257);
	var ThemeManager = __webpack_require__(259);

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
	        { style: this.mergeAndPrefix(styles.label, this.props.labelStyle) },
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
	        style: this.mergeAndPrefix(styles.root, this.props.style),
	        zDepth: this.state.zDepth },
	      React.createElement(
	        EnhancedButton,
	        _extends({}, other, buttonEventHandlers, {
	          ref: 'container',
	          disabled: disabled,
	          style: this.mergeAndPrefix(styles.container),
	          focusRippleColor: rippleColor,
	          touchRippleColor: rippleColor,
	          focusRippleOpacity: rippleOpacity,
	          touchRippleOpacity: rippleOpacity }),
	        React.createElement(
	          'div',
	          { ref: 'overlay', style: this.mergeAndPrefix(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered) },
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
	      React.findDOMNode(this.refs.overlay).style.backgroundColor = ColorManipulator.fade(this.mergeAndPrefix(this.getStyles().label, this.props.labelStyle).color, amount);
	    } else if (!this.state.hovered) {
	      this.setState({ zDepth: this.state.initialZDepth });
	      React.findDOMNode(this.refs.overlay).style.backgroundColor = 'transparent';
	    }
	  }
	});

	module.exports = RaisedButton;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Colors = __webpack_require__(247);

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
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(4);
	var StylePropable = __webpack_require__(238);
	var Transitions = __webpack_require__(244);
	var ColorManipulator = __webpack_require__(245);
	var EnhancedButton = __webpack_require__(246);
	var FontIcon = __webpack_require__(261);
	var Paper = __webpack_require__(262);
	var Children = __webpack_require__(248);
	var DefaultRawTheme = __webpack_require__(257);
	var ThemeManager = __webpack_require__(259);

	var getZDepth = function getZDepth(disabled) {
	  var zDepth = disabled ? 0 : 2;
	  return {
	    zDepth: zDepth,
	    initialZDepth: zDepth
	  };
	};

	var buttonHeight = '300px';

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
	        fontSize: '12em',
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
/* 267 */
/***/ function(module, exports) {

	'use strict';

	var recordButtonMedia;
	var currentStatus = 0;
	var currentAction = '';

	module.exports = {
		startRecording: function startRecording(fileName) {
			recordButtonMedia = new Media(fileName, success, failure, status);
			currentAction = 'RECORDING';
			recordButtonMedia.startRecord();
		},

		stopRecording: function stopRecording() {
			if (recordButtonMedia !== null) {
				recordButtonMedia.stopRecord();
				recordButtonMedia.release();
				currentAction = '';
			}
		},

		playMedia: function playMedia(fileName) {
			if (recordButtonMedia !== null) {
				recordButtonMedia = new Media(fileName, success, failure, status);
				currentAction = 'PLAYING';
				recordButtonMedia.play();
			}
		},

		stopMedia: function stopMedia() {
			if (recordButtonMedia !== null) {
				recordButtonMedia.stop();
				recordButtonMedia.release();
				currentAction = '';
			}
		},

		resetMedia: function resetMedia() {
			recordButtonMedia.release();
			recordButtonMedia = null;
			currentStatus = 0;
			currentAction = '';
			status();
		},

		mediaStatus: function mediaStatus() {
			return {
				file: recordButtonMedia ? recordButtonMedia.src : null,
				status: currentStatus,
				action: currentAction
			};
		}

	};

	var success = function success() {
		//TODO: figure out if we need this function
	};

	var failure = function failure(error) {
		alert('error: ' + error.code + ' : ' + error.message);
	};

	var status = function status(mediaStatus) {
		//update the current status of the controller
		currentStatus = mediaStatus;

		//emit a mediaChange event for the components to listen to
		var event = new Event('mediaChange');
		document.dispatchEvent(event);
	};

	//	mediaStatus REFERENCE
	//     Media.MEDIA_NONE = 0;
	//     Media.MEDIA_STARTING = 1;
	//     Media.MEDIA_RUNNING = 2;
	//     Media.MEDIA_PAUSED = 3;
	//     Media.MEDIA_STOPPED = 4;

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function injectTapEventPlugin () {
	  __webpack_require__(71).injection.injectEventPluginsByName({
	    "TapEventPlugin":       __webpack_require__(269)
	  });
	};


/***/ },
/* 269 */
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

	var EventConstants = __webpack_require__(7);
	var EventPluginUtils = __webpack_require__(6);
	var EventPropagators = __webpack_require__(95);
	var SyntheticUIEvent = __webpack_require__(108);
	var TouchEventUtils = __webpack_require__(270);
	var ViewportMetrics = __webpack_require__(76);

	var keyOf = __webpack_require__(271);
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
/* 270 */
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
/* 271 */
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