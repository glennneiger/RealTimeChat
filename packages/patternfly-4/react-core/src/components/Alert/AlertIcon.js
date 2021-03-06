"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var alert_1 = require("@patternfly/react-styles/css/components/Alert/alert");
var react_icons_1 = require("@patternfly/react-icons");
exports.variantIcons = {
    success: react_icons_1.CheckCircleIcon,
    danger: react_icons_1.ExclamationCircleIcon,
    warning: react_icons_1.ExclamationTriangleIcon,
    info: react_icons_1.InfoCircleIcon,
    "default": react_icons_1.BellIcon
};
exports.AlertIcon = function (_a) {
    var variant = _a.variant, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["variant", "className"]);
    var Icon = exports.variantIcons[variant];
    return (<div {...props} className={react_styles_1.css(alert_1["default"].alertIcon, className)}>
      <Icon />
    </div>);
};
