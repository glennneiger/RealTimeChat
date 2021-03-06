var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// This must be a class component react-bootstrap passes a ref to it.
// eslint-disable-next-line react/prefer-stateless-function

var InfoTipMenu = function (_React$Component) {
  _inherits(InfoTipMenu, _React$Component);

  function InfoTipMenu() {
    _classCallCheck(this, InfoTipMenu);

    return _possibleConstructorReturn(this, (InfoTipMenu.__proto__ || Object.getPrototypeOf(InfoTipMenu)).apply(this, arguments));
  }

  _createClass(InfoTipMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          bsRole = _props.bsRole,
          rootCloseEvent = _props.rootCloseEvent,
          labelledBy = _props.labelledBy,
          pullRight = _props.pullRight,
          bsClass = _props.bsClass,
          props = _objectWithoutProperties(_props, ['children', 'className', 'bsRole', 'rootCloseEvent', 'labelledBy', 'pullRight', 'bsClass']);

      var infoTipMenuClass = classNames('dropdown-menu', 'infotip', 'bottom-right', className);

      return React.createElement(
        'div',
        _extends({ className: infoTipMenuClass, style: { padding: '' } }, props),
        React.createElement('div', { className: 'arrow' }),
        children
      );
    }
  }]);

  return InfoTipMenu;
}(React.Component);

InfoTipMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  bsRole: PropTypes.string,
  rootCloseEvent: PropTypes.oneOf(['click', 'mousedown'])
};
InfoTipMenu.defaultProps = {
  bsRole: 'menu',
  className: '',
  rootCloseEvent: 'click'
};


export default InfoTipMenu;