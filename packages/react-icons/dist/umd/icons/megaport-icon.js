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
  exports.MegaportIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const MegaportIconConfig = exports.MegaportIconConfig = {
    name: 'MegaportIcon',
    height: 512,
    width: 496,
    svgPath: 'M214.5 209.6v66.2l33.5 33.5 33.3-33.3v-66.4l-33.4-33.4zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm145.1 414.4L367 441.6l-26-19.2v-65.5l-33.4-33.4-33.4 33.4v65.5L248 441.6l-26.1-19.2v-65.5l-33.4-33.4-33.5 33.4v65.5l-26.1 19.2-26.1-19.2v-87l59.5-59.5V188l59.5-59.5V52.9l26.1-19.2L274 52.9v75.6l59.5 59.5v87.6l59.7 59.7v87.1z',
    yOffset: '',
    xOffset: '',
    transform: ''
  };
  exports.default = (0, _createIcon2.default)(MegaportIconConfig);
});
//# sourceMappingURL=megaport-icon.js.map