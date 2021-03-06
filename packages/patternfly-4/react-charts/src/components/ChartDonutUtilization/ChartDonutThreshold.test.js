"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartDonutThreshold_1 = require("./ChartDonutThreshold");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartDonutThreshold', function () {
        var view = enzyme_1.shallow(<ChartDonutThreshold_1.ChartDonutThreshold />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartDonutThreshold_1.ChartDonutThreshold data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]} height={200} width={200}/>);
    expect(view).toMatchSnapshot();
});
