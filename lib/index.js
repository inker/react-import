'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Import = function (_PureComponent) {
  _inherits(Import, _PureComponent);

  function Import() {
    var _temp, _this, _ret;

    _classCallCheck(this, Import);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
      Component: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Import.prototype.componentDidMount = function componentDidMount() {
    var props = this.props;

    this.load(props.load ? props.load() : props.component);
  };

  Import.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var props = this.props;

    if (nextProps.component === props.component && nextProps.load === props.load) {
      return;
    }
    this.load(nextProps.load ? nextProps.load() : nextProps.component);
  };

  Import.prototype.load = function load(component) {
    var _this2 = this;

    if (!component) {
      return;
    }
    component.then(function (mod) {
      _this2.setState({
        Component: mod.default || mod
      });
      var onLoad = _this2.props.onLoad;

      if (onLoad) {
        onLoad();
      }
    });
  };

  Import.prototype.render = function render() {
    var _props = this.props,
        component = _props.component,
        loading = _props.loading,
        props = _objectWithoutProperties(_props, ['component', 'loading']);

    var Component = this.state.Component;

    return Component ? _react2.default.createElement(Component, props) : loading || null;
  };

  return Import;
}(_react.PureComponent);

exports.default = Import;