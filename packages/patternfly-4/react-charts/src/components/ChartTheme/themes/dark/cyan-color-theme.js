"use strict";
exports.__esModule = true;
/* eslint-disable camelcase */
var react_tokens_1 = require("@patternfly/react-tokens");
var color_theme_1 = require("../color-theme");
// Color scale
// See https://docs.google.com/document/d/1cw10pJFXWruB1SA8TQwituxn5Ss6KpxYPCOYGrH8qAY/edit
var COLOR_SCALE = [
    react_tokens_1.chart_color_cyan_300.value,
    react_tokens_1.chart_color_cyan_100.value,
    react_tokens_1.chart_color_cyan_500.value,
    react_tokens_1.chart_color_cyan_200.value,
    react_tokens_1.chart_color_cyan_400.value
];
exports.DarkCyanColorTheme = color_theme_1.ColorTheme({
    COLOR_SCALE: COLOR_SCALE
});
