"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_charts_1 = require("@patternfly/react-charts");
var ColorAreaBottomLegendDemo = /** @class */ (function (_super) {
    __extends(ColorAreaBottomLegendDemo, _super);
    function ColorAreaBottomLegendDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorAreaBottomLegendDemo.prototype.render = function () {
        return (<div>
      <div style={{ height: '225px', width: '650px' }}>
        <react_charts_1.Chart containerComponent={<react_charts_1.ChartVoronoiContainer labels={function (_a) {
            var datum = _a.datum;
            return datum.name + ": " + datum.y;
        }}/>} legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }]} legendPosition="bottom" height={225} padding={{
            bottom: 75,
            left: 50,
            right: 50,
            top: 50
        }} themeColor={react_charts_1.ChartThemeColor.multi} width={650}>
          <react_charts_1.ChartAxis />
          <react_charts_1.ChartAxis dependentAxis showGrid/>
          <react_charts_1.ChartGroup>
            <react_charts_1.ChartArea data={[
            { name: 'Cats', x: 1, y: 3 },
            { name: 'Cats', x: 2, y: 4 },
            { name: 'Cats', x: 3, y: 8 },
            { name: 'Cats', x: 4, y: 6 }
        ]}/>
            <react_charts_1.ChartArea data={[
            { name: 'Birds', x: 1, y: 2 },
            { name: 'Birds', x: 2, y: 3 },
            { name: 'Birds', x: 3, y: 4 },
            { name: 'Birds', x: 4, y: 5 },
            { name: 'Birds', x: 5, y: 6 }
        ]}/>
            <react_charts_1.ChartArea data={[
            { name: 'Dogs', x: 1, y: 1 },
            { name: 'Dogs', x: 2, y: 2 },
            { name: 'Dogs', x: 3, y: 3 },
            { name: 'Dogs', x: 4, y: 2 },
            { name: 'Dogs', x: 5, y: 4 }
        ]}/>
          </react_charts_1.ChartGroup>
        </react_charts_1.Chart>
      </div>
    </div>);
    };
    return ColorAreaBottomLegendDemo;
}(react_1["default"].Component));
exports.ColorAreaBottomLegendDemo = ColorAreaBottomLegendDemo;
