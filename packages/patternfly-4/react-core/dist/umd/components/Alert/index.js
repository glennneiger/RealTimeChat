(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Alert", "./AlertActionCloseButton", "./AlertActionLink"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Alert"), require("./AlertActionCloseButton"), require("./AlertActionLink"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Alert, global.AlertActionCloseButton, global.AlertActionLink);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Alert, _AlertActionCloseButton, _AlertActionLink) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Alert).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Alert[key];
      }
    });
  });
  Object.keys(_AlertActionCloseButton).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _AlertActionCloseButton[key];
      }
    });
  });
  Object.keys(_AlertActionLink).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _AlertActionLink[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map