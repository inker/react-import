'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Import = function (_PureComponent) {
  _inherits(Import, _PureComponent);

  function Import() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Import);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Import.__proto__ || Object.getPrototypeOf(Import)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      Component: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Import, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.load(this.props.component);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.load(nextProps.component);
    }
  }, {
    key: 'load',
    value: function load(component) {
      var _this2 = this;

      if (!component) {
        return;
      }
      component.then(function (module) {
        _this2.setState({
          Component: module.default || module
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          props = _objectWithoutProperties(_props, ['component']);

      var Component = this.state.Component;

      return Component ? React.createElement(Component, props) : null;
    }
  }]);

  return Import;
}(_react.PureComponent);

exports.default = Import;
