"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyState = exports.EmptyStateVariant = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _emptyState = _interopRequireDefault(require("@patternfly/react-styles/css/components/EmptyState/empty-state"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EmptyStateVariant;
exports.EmptyStateVariant = EmptyStateVariant;

(function (EmptyStateVariant) {
  EmptyStateVariant["large"] = "large";
  EmptyStateVariant["small"] = "small";
  EmptyStateVariant["full"] = "full";
})(EmptyStateVariant || (exports.EmptyStateVariant = EmptyStateVariant = {}));

var maxWidthModifiers = {
  large: 'lg',
  small: 'sm',
  full: ''
};

var EmptyState = function EmptyState(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? EmptyStateVariant.large : _ref$variant,
      props = _objectWithoutProperties(_ref, ["children", "className", "variant"]);

  var maxWidthModifier = maxWidthModifiers[variant];
  return React.createElement("div", _extends({
    className: (0, _reactStyles.css)(_emptyState["default"].emptyState, (0, _reactStyles.getModifier)(_emptyState["default"], maxWidthModifier, null), className)
  }, props), children);
};

exports.EmptyState = EmptyState;
EmptyState.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  variant: _propTypes["default"].oneOf(['small', 'large', 'full'])
};
//# sourceMappingURL=EmptyState.js.map