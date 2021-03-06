(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../createIcon"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../createIcon"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.createIcon);
    global.undefined = mod.exports;
  }
})(this, function (exports, _createIcon) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PluggedIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const PluggedIconConfig = exports.PluggedIconConfig = {
    name: 'PluggedIcon',
    height: 1024,
    width: 1024,
    svgPath: 'M730.057 694.857l1.6 255.771-146.057-0.686-0.229-255.086h-146.057l-1.829 255.771h-143.543l-3.177-255.771h-106.537c0 0 0-0.411 0-1.143h-37.943l-0.457-114.743 38.4 0.069c0-0.046 0-0.069 0-0.069h693.486v115.886h-147.657zM804.571 508.571v0h-1.189l-34.446 0.229-0.183-0.206-130.4 0.114 0.526 0.526-454.857 2.286c9.829-107.657 44.343-243.429 125.029-330.971l0.183 0.183c66.88-75.223 129.623-80.16 129.623-80.16v-173.714h146.286v172.343c179.2 43.657 239.086 253.943 253.029 409.143l-33.6 0.229z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(PluggedIconConfig);
});
//# sourceMappingURL=plugged-icon.js.map