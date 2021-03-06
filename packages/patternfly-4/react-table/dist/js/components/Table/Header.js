"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHeader = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _base = require("./base");

var _Table = require("./Table");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ContextHeader = function ContextHeader(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$headerRows = _ref.headerRows,
      headerRows = _ref$headerRows === void 0 ? undefined : _ref$headerRows,
      props = _objectWithoutProperties(_ref, ["className", "headerRows"]);

  return React.createElement(_base.Header, _extends({}, props, {
    headerRows: headerRows,
    className: className
  }));
};

ContextHeader.propTypes = {
  className: _propTypes["default"].string,
  headerRows: _propTypes["default"].arrayOf(_propTypes["default"].any)
};

var TableHeader = function TableHeader(_ref2) {
  var props = _extends({}, _ref2);

  return React.createElement(_Table.TableContext.Consumer, null, function (_ref3) {
    var headerRows = _ref3.headerRows;
    return React.createElement(ContextHeader, _extends({}, props, {
      headerRows: headerRows
    }));
  });
};

exports.TableHeader = TableHeader;
TableHeader.propTypes = {
  className: _propTypes["default"].string
};
//# sourceMappingURL=Header.js.map