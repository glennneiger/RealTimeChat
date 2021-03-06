var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Icon } from '../../../../index';

var LoginCardInputWarning = function LoginCardInputWarning(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  return children && React.createElement(
    'div',
    _extends({}, props, { className: classNames('login-pf-input-warning', className) }),
    React.createElement(Icon, { type: 'pf', name: 'warning-triangle-o' }),
    '   ',
    children
  );
};

LoginCardInputWarning.propTypes = {
  /** Children nodes. */
  children: PropTypes.string,
  /** Additional css classes. */
  className: PropTypes.string
};

LoginCardInputWarning.defaultProps = {
  children: null,
  className: null
};

export default LoginCardInputWarning;