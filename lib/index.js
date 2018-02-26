"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Import =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(Import, _PureComponent);

  function Import() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this, Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        Component: null
      }
    }), _temp) || _assertThisInitialized(_this);
  }

  var _proto = Import.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var props = this.props;
    this.load(props.load ? props.load() : props.component);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var props = this.props;

    if (nextProps.component === props.component && nextProps.load === props.load) {
      return;
    }

    this.load(nextProps.load ? nextProps.load() : nextProps.component);
  };

  _proto.load = function load(component) {
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
    }).catch(function (err) {
      var props = _this2.props;

      _this2.setState({
        Component: props.error
      });

      if (props.onError) {
        props.onError(err);
      } else {
        throw new Error(err);
      }
    });
  };

  _proto.render = function render() {
    var _props = this.props,
        component = _props.component,
        load = _props.load,
        props = _objectWithoutProperties(_props, ["component", "load"]);

    var Component = this.state.Component;
    return Component ? _react.default.createElement(Component, props) : props.loading || null;
  };

  return Import;
}(_react.PureComponent);

var _default = Import;
exports.default = _default;