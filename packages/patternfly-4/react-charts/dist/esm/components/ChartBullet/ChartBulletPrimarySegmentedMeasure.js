import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryBar } from 'victory';
import { getPrimarySegmentedMeasureData } from './utils';
import { ChartBar } from '../ChartBar';
import { ChartContainer } from '../ChartContainer';
import { ChartBulletStyles } from '../ChartTheme';
import { ChartTooltip } from '../ChartTooltip';
import { getBulletPrimaryNegativeMeasureTheme, getBulletPrimarySegmentedMeasureTheme } from '../ChartUtils';
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

export const ChartBulletPrimarySegmentedMeasure = (_ref) => {
  let {
    ariaDesc,
    ariaTitle,
    barWidth = ChartBulletStyles.primarySegmentedMeasureWidth,
    constrainToVisibleArea = false,
    data,
    domain,
    horizontal = true,
    invert = false,
    labels,
    measureComponent = React.createElement(ChartBar, null),
    padding,
    standalone = true,
    themeColor,
    themeVariant,
    y,
    y0,
    // destructure last
    theme = getBulletPrimarySegmentedMeasureTheme(themeColor, themeVariant),
    negativeMeasureTheme = getBulletPrimaryNegativeMeasureTheme(themeColor, themeVariant),
    height = theme.group.height,
    width = theme.group.width,
    labelComponent = React.createElement(ChartTooltip, null)
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["ariaDesc", "ariaTitle", "barWidth", "constrainToVisibleArea", "data", "domain", "horizontal", "invert", "labels", "measureComponent", "padding", "standalone", "themeColor", "themeVariant", "y", "y0", "theme", "negativeMeasureTheme", "height", "width", "labelComponent"]);

  const computedData = getPrimarySegmentedMeasureData({
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
  return standalone ? React.createElement(ChartContainer, {
    desc: ariaDesc,
    height: height,
    title: ariaTitle,
    width: width
  }, measure) : React.createElement(React.Fragment, null, measure);
}; // Note: VictoryBar.role must be hoisted

ChartBulletPrimarySegmentedMeasure.propTypes = {
  ariaDesc: _pt.string,
  ariaTitle: _pt.string,
  barWidth: _pt.any,
  constrainToVisibleArea: _pt.bool,
  data: _pt.arrayOf(_pt.any),
  domain: _pt.any,
  height: _pt.number,
  horizontal: _pt.bool,
  invert: _pt.bool,
  labelComponent: _pt.element,
  labels: _pt.oneOfType([_pt.arrayOf(_pt.string), _pt.func]),
  measureComponent: _pt.element,
  negativeMeasureTheme: _pt.any,
  padding: _pt.any,
  standalone: _pt.bool,
  theme: _pt.any,
  themeColor: _pt.string,
  themeVariant: _pt.string,
  width: _pt.number,
  y: _pt.any,
  y0: _pt.any
};
hoistNonReactStatics(ChartBulletPrimarySegmentedMeasure, VictoryBar);
//# sourceMappingURL=ChartBulletPrimarySegmentedMeasure.js.map