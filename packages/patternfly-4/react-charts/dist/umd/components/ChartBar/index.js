(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ChartBar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ChartBar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChartBar);
    global.undefined = mod.exports;
  }
})(this, function (exports, _ChartBar) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_ChartBar).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ChartBar[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map