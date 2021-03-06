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
var base_1 = require("./base");
var Table_1 = require("./Table");
var ContextHeader = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.headerRows, headerRows = _c === void 0 ? undefined : _c, props = __rest(_a, ["className", "headerRows"]);
    return (<base_1.Header {...props} headerRows={headerRows} className={className}/>);
};
exports.TableHeader = function (_a) {
    var props = __rest(_a, []);
    return (<Table_1.TableContext.Consumer>
  {function (_a) {
        var headerRows = _a.headerRows;
        return <ContextHeader {...props} headerRows={headerRows}/>;
    }}
  </Table_1.TableContext.Consumer>);
};
