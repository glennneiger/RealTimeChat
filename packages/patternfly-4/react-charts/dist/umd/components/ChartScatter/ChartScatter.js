(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "victory", "../ChartContainer", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("victory"), require("../ChartContainer"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.victory, global.ChartContainer, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _victory, _ChartContainer, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartScatter = exports.ChartScatterSortOrder = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  let ChartScatterSortOrder = exports.ChartScatterSortOrder = undefined;
  /**
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
   */

  (function (ChartScatterSortOrder) {
    ChartScatterSortOrder["ascending"] = "ascending";
    ChartScatterSortOrder["descending"] = "descending";
  })(ChartScatterSortOrder || (exports.ChartScatterSortOrder = ChartScatterSortOrder = {}));

  const ChartScatter = exports.ChartScatter = _ref => {
    let {
      containerComponent = React.createElement(_ChartContainer.ChartContainer, null),
      themeColor,
      themeVariant,
      // destructure last
      theme = (0, _ChartUtils.getTheme)(themeColor, themeVariant)
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["containerComponent", "themeColor", "themeVariant", "theme"]); // Clone so users can override container props


    const container = React.cloneElement(containerComponent, _objectSpread({
      theme
    }, containerComponent.props));
    return React.createElement(_victory.VictoryScatter, _extends({
      containerComponent: container,
      theme: theme
    }, rest));
  }; // Note: VictoryLine.role must be hoisted


  ChartScatter.propTypes = {
    animate: _propTypes2.default.any,
    bubbleProperty: _propTypes2.default.string,
    categories: _propTypes2.default.any,
    containerComponent: _propTypes2.default.element,
    data: _propTypes2.default.arrayOf(_propTypes2.default.any),
    dataComponent: _propTypes2.default.element,
    domain: _propTypes2.default.any,
    domainPadding: _propTypes2.default.any,
    eventKey: _propTypes2.default.any,
    events: _propTypes2.default.arrayOf(_propTypes2.default.any),
    externalEventMutations: _propTypes2.default.arrayOf(_propTypes2.default.any),
    groupComponent: _propTypes2.default.element,
    height: _propTypes2.default.number,
    horizontal: _propTypes2.default.bool,
    labelComponent: _propTypes2.default.element,
    labels: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.func]),
    maxBubbleSize: _propTypes2.default.number,
    maxDomain: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
      x: _propTypes2.default.number,
      y: _propTypes2.default.number
    })]),
    minBubbleSize: _propTypes2.default.number,
    minDomain: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
      x: _propTypes2.default.number,
      y: _propTypes2.default.number
    })]),
    name: _propTypes2.default.string,
    origin: _propTypes2.default.shape({
      x: _propTypes2.default.number.isRequired,
      y: _propTypes2.default.number.isRequired
    }),
    padding: _propTypes2.default.any,
    polar: _propTypes2.default.bool,
    range: _propTypes2.default.oneOfType([_propTypes2.default.shape({})])
  };
  (0, _hoistNonReactStatics2.default)(ChartScatter, _victory.VictoryScatter);
});
//# sourceMappingURL=ChartScatter.js.map