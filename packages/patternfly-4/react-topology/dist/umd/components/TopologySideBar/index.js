(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./TopologySideBar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./TopologySideBar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.TopologySideBar);
    global.undefined = mod.exports;
  }
})(this, function (exports, _TopologySideBar) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_TopologySideBar).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _TopologySideBar[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map