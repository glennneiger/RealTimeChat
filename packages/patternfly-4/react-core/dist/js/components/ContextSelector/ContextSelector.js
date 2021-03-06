"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextSelector = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _contextSelector = _interopRequireDefault(require("@patternfly/react-styles/css/components/ContextSelector/context-selector"));

var _reactStyles = require("@patternfly/react-styles");

var _reactIcons = require("@patternfly/react-icons");

var _ContextSelectorToggle = require("./ContextSelectorToggle");

var _ContextSelectorMenuList = require("./ContextSelectorMenuList");

var _contextSelectorConstants = require("./contextSelectorConstants");

var _Button = require("../Button");

var _TextInput = require("../TextInput");

var _InputGroup = require("../InputGroup");

var _constants = require("../../helpers/constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Can't use ES6 imports :(
// The types for it are also wrong, we should probably ditch this dependency.
// tslint:disable-next-line
var FocusTrap = require('focus-trap-react'); // seed for the aria-labelledby ID


var currentId = 0;
var newId = currentId++;

var ContextSelector =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContextSelector, _React$Component);

  function ContextSelector() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContextSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContextSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "parentRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "onEnterPressed", function (event) {
      if (event.charCode === _constants.KEY_CODES.ENTER) {
        _this.props.onSearchButtonClick();
      }
    });

    return _this;
  }

  _createClass(ContextSelector, [{
    key: "render",
    value: function render() {
      var toggleId = "pf-context-selector-toggle-id-".concat(newId);
      var screenReaderLabelId = "pf-context-selector-label-id-".concat(newId);
      var searchButtonId = "pf-context-selector-search-button-id-".concat(newId);

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          isOpen = _this$props.isOpen,
          onToggle = _this$props.onToggle,
          onSelect = _this$props.onSelect,
          screenReaderLabel = _this$props.screenReaderLabel,
          toggleText = _this$props.toggleText,
          searchButtonAriaLabel = _this$props.searchButtonAriaLabel,
          searchInputValue = _this$props.searchInputValue,
          onSearchInputChange = _this$props.onSearchInputChange,
          searchInputPlaceholder = _this$props.searchInputPlaceholder,
          onSearchButtonClick = _this$props.onSearchButtonClick,
          props = _objectWithoutProperties(_this$props, ["children", "className", "isOpen", "onToggle", "onSelect", "screenReaderLabel", "toggleText", "searchButtonAriaLabel", "searchInputValue", "onSearchInputChange", "searchInputPlaceholder", "onSearchButtonClick"]);

      return React.createElement("div", _extends({
        className: (0, _reactStyles.css)(_contextSelector["default"].contextSelector, isOpen && _contextSelector["default"].modifiers.expanded, className),
        ref: this.parentRef
      }, props), screenReaderLabel && React.createElement("span", {
        id: screenReaderLabelId,
        hidden: true
      }, screenReaderLabel), React.createElement(_ContextSelectorToggle.ContextSelectorToggle, {
        onToggle: onToggle,
        isOpen: isOpen,
        toggleText: toggleText,
        id: toggleId,
        parentRef: this.parentRef.current,
        "aria-labelledby": "".concat(screenReaderLabelId, " ").concat(toggleId)
      }), isOpen && React.createElement("div", {
        className: (0, _reactStyles.css)(_contextSelector["default"].contextSelectorMenu)
      }, isOpen && React.createElement(FocusTrap, {
        focusTrapOptions: {
          clickOutsideDeactivates: true
        }
      }, React.createElement("div", {
        className: (0, _reactStyles.css)(_contextSelector["default"].contextSelectorMenuInput)
      }, React.createElement(_InputGroup.InputGroup, null, React.createElement(_TextInput.TextInput, {
        value: searchInputValue,
        type: "search",
        placeholder: searchInputPlaceholder,
        onChange: onSearchInputChange,
        onKeyPress: this.onEnterPressed,
        "aria-labelledby": searchButtonId
      }), React.createElement(_Button.Button, {
        variant: _Button.ButtonVariant.control,
        "aria-label": searchButtonAriaLabel,
        id: searchButtonId,
        onClick: onSearchButtonClick
      }, React.createElement(_reactIcons.SearchIcon, {
        "aria-hidden": "true"
      })))), React.createElement(_contextSelectorConstants.ContextSelectorContext.Provider, {
        value: {
          onSelect: onSelect
        }
      }, React.createElement(_ContextSelectorMenuList.ContextSelectorMenuList, {
        isOpen: isOpen
      }, children)))));
    }
  }]);

  return ContextSelector;
}(React.Component);

exports.ContextSelector = ContextSelector;

_defineProperty(ContextSelector, "propTypes", {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  isOpen: _propTypes["default"].bool,
  onToggle: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  screenReaderLabel: _propTypes["default"].string,
  toggleText: _propTypes["default"].string,
  searchButtonAriaLabel: _propTypes["default"].string,
  searchInputValue: _propTypes["default"].string,
  searchInputPlaceholder: _propTypes["default"].string
});

_defineProperty(ContextSelector, "defaultProps", {
  children: null,
  className: '',
  isOpen: false,
  onToggle: function onToggle() {
    return undefined;
  },
  onSelect: function onSelect() {
    return undefined;
  },
  screenReaderLabel: '',
  toggleText: '',
  searchButtonAriaLabel: 'Search menu items',
  searchInputValue: '',
  onSearchInputChange: function onSearchInputChange() {
    return undefined;
  },
  searchInputPlaceholder: 'Search',
  onSearchButtonClick: function onSearchButtonClick() {
    return undefined;
  }
});
//# sourceMappingURL=ContextSelector.js.map