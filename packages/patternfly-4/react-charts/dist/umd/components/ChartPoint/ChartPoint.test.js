(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "../ChartLegend", "./ChartPoint"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("../ChartLegend"), require("./ChartPoint"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ChartLegend, global.ChartPoint);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _ChartLegend, _ChartPoint) {
  "use strict";

  var React = _interopRequireWildcard(_react);

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

  Object.values([true, false]).forEach(isRead => {
    test('ChartPoint', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_ChartLegend.ChartLegend, {
        dataComponent: React.createElement(_ChartPoint.ChartPoint, null)
      }));
      expect(view).toMatchSnapshot();
    });
  });
  test('renders component data', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_ChartLegend.ChartLegend, {
      data: [{
        name: 'Cats'
      }, {
        name: 'Dogs',
        symbol: {
          type: 'dash'
        }
      }],
      title: "Average number of pets",
      height: 50,
      width: 200
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ChartPoint.test.js.map