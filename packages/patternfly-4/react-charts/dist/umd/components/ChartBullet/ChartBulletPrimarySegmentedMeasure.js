(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "victory", "./utils", "../ChartBar", "../ChartContainer", "../ChartTheme", "../ChartTooltip", "../ChartUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("victory"), require("./utils"), require("../ChartBar"), require("../ChartContainer"), require("../ChartTheme"), require("../ChartTooltip"), require("../ChartUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.victory, global.utils, global.ChartBar, global.ChartContainer, global.ChartTheme, global.ChartTooltip, global.ChartUtils);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _victory, _utils, _ChartBar, _ChartContainer, _ChartTheme, _ChartTooltip, _ChartUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartBulletPrimarySegmentedMeasure = undefined;

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

  /**
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
   */
  const ChartBulletPrimarySegmentedMeasure = exports.ChartBulletPrimarySegmentedMeasure = _ref => {
    let {
      ariaDesc,
      ariaTitle,
      barWidth = _ChartTheme.ChartBulletStyles.primarySegmentedMeasureWidth,
      constrainToVisibleArea = false,
      data,
      domain,
      horizontal = true,
      invert = false,
      labels,
      measureComponent = React.createElement(_ChartBar.ChartBar, null),
      padding,
      standalone = true,
      themeColor,
      themeVariant,
      y,
      y0,
      // destructure last
      theme = (0, _ChartUtils.getBulletPrimarySegmentedMeasureTheme)(themeColor, themeVariant),
      negativeMeasureTheme = (0, _ChartUtils.getBulletPrimaryNegativeMeasureTheme)(themeColor, themeVariant),
      height = theme.group.height,
      width = theme.group.width,
      labelComponent = React.createElement(_ChartTooltip.ChartTooltip, null)
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "barWidth", "constrainToVisibleArea", "data", "domain", "horizontal", "invert", "labels", "measureComponent", "padding", "standalone", "themeColor", "themeVariant", "y", "y0", "theme", "negativeMeasureTheme", "height", "width", "labelComponent"]);

    const computedData = (0, _utils.getPrimarySegmentedMeasureData)({
      data,
      invert,
      negativeMeasureTheme,
      theme,
      y,
      y0
    }); // Label component
    //
    // Note: SVG height and width are provided by ChartBullet as a workaround to support constrainToVisibleArea

    const tooltip = React.cloneElement(labelComponent, _objectSpread({
      constrainToVisibleArea,
      dx: () => {
        if (horizontal) {
          return 0;
        }

        const result = typeof barWidth === 'function' ? barWidth(data, false) : barWidth;
        return result / 2;
      },
      dy: () => {
        if (!horizontal) {
          return 0;
        }

        const result = typeof barWidth === 'function' ? barWidth(data, false) : barWidth;
        return -(result / 2);
      },
      orientation: 'top'
    }, labelComponent.props));
    const measure = computedData.map((dataPoint, index) => {
      return React.cloneElement(measureComponent, _objectSpread({
        barWidth,
        data: [_objectSpread({}, dataPoint)],
        domain,
        height,
        horizontal,
        key: `pf-chart-bullet-primary-segmented-measure-${index}`,
        labelComponent: tooltip,
        labels,
        padding,
        standalone: false,
        style: {
          data: {
            fill: dataPoint._color
          }
        },
        theme,
        width
      }, measureComponent.props));
    });
    return standalone ? React.createElement(_ChartContainer.ChartContainer, {
      desc: ariaDesc,
      height: height,
      title: ariaTitle,
      width: width
    }, measure) : React.createElement(React.Fragment, null, measure);
  }; // Note: VictoryBar.role must be hoisted


  ChartBulletPrimarySegmentedMeasure.propTypes = {
    ariaDesc: _propTypes2.default.string,
    ariaTitle: _propTypes2.default.string,
    barWidth: _propTypes2.default.any,
    constrainToVisibleArea: _propTypes2.default.bool,
    data: _propTypes2.default.arrayOf(_propTypes2.default.any),
    domain: _propTypes2.default.any,
    height: _propTypes2.default.number,
    horizontal: _propTypes2.default.bool,
    invert: _propTypes2.default.bool,
    labelComponent: _propTypes2.default.element,
    labels: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.func]),
    measureComponent: _propTypes2.default.element,
    negativeMeasureTheme: _propTypes2.default.any,
    padding: _propTypes2.default.any,
    standalone: _propTypes2.default.bool,
    theme: _propTypes2.default.any,
    themeColor: _propTypes2.default.string,
    themeVariant: _propTypes2.default.string,
    width: _propTypes2.default.number,
    y: _propTypes2.default.any,
    y0: _propTypes2.default.any
  };
  (0, _hoistNonReactStatics2.default)(ChartBulletPrimarySegmentedMeasure, _victory.VictoryBar);
});
//# sourceMappingURL=ChartBulletPrimarySegmentedMeasure.js.map