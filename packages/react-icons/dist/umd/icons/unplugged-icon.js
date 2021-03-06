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
  exports.UnpluggedIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const UnpluggedIconConfig = exports.UnpluggedIconConfig = {
    name: 'UnpluggedIcon',
    height: 1024,
    width: 1024,
    svgPath: 'M395.429 127.771v0c21.029-13.029 17.829-20.343 43.429-27.2v-173.714h146.286v172.343c179.2 43.657 239.086 253.943 253.029 409.143l-69.257 0.457-373.486-381.029zM944.457 866.514c-16.457 16.686-43.429 16.686-59.886 0.229l-154.4-153.509 1.486 237.394-146.057-0.686-0.229-256.229-146.057 0.914-1.829 256h-143.543l-3.2-256.914h-144.457l-0.457-114.743 450.24 0.914-70.469-70.057-341.6 1.714c7.589-83.223 29.966-183.246 77.006-264.8l-176.434-175.429c-16.686-16.457-16.686-43.429-0.229-59.886 8.229-8.457 18.971-12.571 29.943-12.571v0c10.743 0 21.486 4.114 29.943 12.343l800 795.429c16.686 16.457 16.686 43.429 0.229 59.886z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(UnpluggedIconConfig);
});
//# sourceMappingURL=unplugged-icon.js.map