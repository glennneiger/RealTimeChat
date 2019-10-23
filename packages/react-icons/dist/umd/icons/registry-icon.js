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
  exports.RegistryIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const RegistryIconConfig = exports.RegistryIconConfig = {
    name: 'RegistryIcon',
    height: 1024,
    width: 1204,
    svgPath: 'M799.314 529.6c3.2 5.257 4.8 11.2 4.8 17.371v226.971c0 7.086-2.057 13.714-5.943 19.657-4.114 5.943-9.371 10.057-16 12.571l-184.914 68.571c-3.886 1.371-7.771 2.057-11.657 2.057-0.229 0-0.457 0-0.457 0-0.229 0-0.457 0-0.457 0-3.886 0-7.771-0.686-11.657-2.057l-184.914-68.571c-6.629-2.514-11.886-6.629-16-12.571s-5.943-12.343-5.943-19.657v-226.971c0-6.171 1.6-12.114 4.8-17.371s7.543-9.6 12.8-12.571l184.914-73.829c4.8-2.743 10.286-4.343 16-4.343 0.229 0 0.457 0 0.457 0s0.457 0 0.457 0c5.714 0 11.2 1.371 16 4.343l184.914 73.829c5.257 2.971 9.6 7.086 12.8 12.571zM770.286 574.628l-185.371-82.286-185.6 82.286v32.229l185.6-78.4 185.371 78.4v-32.229zM770.286 678.857l-185.143-84.8-185.6 84.8v35.886l185.6-78.171 185.371 79.314-0.229-37.029zM486.4 355.2l-216 80c-4.571 1.6-8.914 2.514-13.486 2.514-0.229 0-0.457 0-0.686 0s-0.457 0-0.686 0c-4.571 0-8.914-0.914-13.486-2.514l-216-80c-7.771-2.971-13.943-7.771-18.743-14.629-5.029-6.857-7.314-14.629-7.314-22.857v-264.686c0-7.314 1.829-14.171 5.486-20.343s8.686-11.2 15.086-14.629l216-86.171c5.714-3.429 11.886-5.029 18.743-5.029 0.229 0 0.457 0 0.686 0s0.457 0 0.686 0c6.857 0 13.029 1.6 18.743 5.029l216 110.4c6.4 3.429 11.429 8.457 15.086 14.629s5.486 13.029 5.486 20.343v240.457c0 8.229-2.286 16-7.086 22.857-4.571 6.857-10.743 11.657-18.514 14.629zM472.686 87.543l-216.686-98.514-216.914 96v37.714l216.914-91.429 216.686 93.943v-37.714zM472.686 206.857l-216.686-98.971-216.914 98.971v41.829l216.914-91.2 216.686 92.571v-43.2zM1144.457 355.2l-216 80c-4.571 1.6-8.914 2.514-13.486 2.514-0.229 0-0.457 0-0.686 0s-0.457 0-0.686 0c-4.571 0-8.914-0.914-13.486-2.514l-216-80c-7.771-2.971-13.943-7.771-18.743-14.629s-7.086-14.4-7.086-22.857v-264.686c0-7.314 1.829-14.171 5.486-20.343s8.686-11.2 15.086-14.629l216-86.171c5.714-3.429 11.886-5.029 18.743-5.029 0.229 0 0.457 0 0.686 0s0.457 0 0.686 0c6.857 0 13.029 1.6 18.743 5.029l216 110.4c6.4 3.429 11.429 8.457 15.086 14.629s5.486 13.029 5.486 20.343v240.457c0 8.229-2.286 16-7.086 22.857s-10.971 11.657-18.743 14.629zM1130.971 87.543l-216.686-98.514-216.914 96v37.714l216.914-91.429 216.686 93.943v-37.714zM1130.971 206.857l-216.686-98.971-216.914 98.971v41.829l216.914-91.2 216.686 92.571v-43.2z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(RegistryIconConfig);
});
//# sourceMappingURL=registry-icon.js.map