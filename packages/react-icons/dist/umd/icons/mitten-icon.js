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
  exports.MittenIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const MittenIconConfig = exports.MittenIconConfig = {
    name: 'MittenIcon',
    height: 512,
    width: 448,
    svgPath: 'M368 416H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm57-209.1c-27.2-22.6-67.5-19-90.1 8.2l-20.9 25-29.6-128.4c-18-77.5-95.4-125.9-172.8-108C34.2 21.6-14.2 98.9 3.7 176.4L51.6 384h309l72.5-87c22.7-27.2 19-67.5-8.1-90.1z',
    yOffset: '',
    xOffset: '',
    transform: ''
  };
  exports.default = (0, _createIcon2.default)(MittenIconConfig);
});
//# sourceMappingURL=mitten-icon.js.map