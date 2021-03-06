'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _recompose = require('recompose');

var _ListGroup = require('../ListGroup');

var _OverlayTrigger = require('../OverlayTrigger');

var _Tooltip = require('../Tooltip');

var _VerticalNavBadge = require('./VerticalNavBadge');

var _VerticalNavBadge2 = _interopRequireDefault(_VerticalNavBadge);

var _helpers = require('../../common/helpers');

var _VerticalNavDividerItem = require('./VerticalNavDividerItem');

var _VerticalNavDividerItem2 = _interopRequireDefault(_VerticalNavDividerItem);

var _VerticalNavConstants = require('./VerticalNavConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseVerticalNavItemHelper = function (_React$Component) {
  _inherits(BaseVerticalNavItemHelper, _React$Component);

  function BaseVerticalNavItemHelper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseVerticalNavItemHelper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseVerticalNavItemHelper.__proto__ || Object.getPrototypeOf(BaseVerticalNavItemHelper)).call.apply(_ref, [this].concat(args))), _this), _this.onItemBlur = function (noDelay) {
      var _this$getContextNavIt = _this.getContextNavItems(),
          primary = _this$getContextNavIt.primary,
          secondary = _this$getContextNavIt.secondary,
          tertiary = _this$getContextNavIt.tertiary;

      var _this$props = _this.props,
          updateNavOnItemBlur = _this$props.updateNavOnItemBlur,
          idPath = _this$props.idPath,
          onBlur = _this$props.onBlur;

      updateNavOnItemBlur(primary, secondary, tertiary, _this.idPath(), idPath, noDelay, onBlur);
    }, _this.onItemClick = function (event) {
      var _this$getContextNavIt2 = _this.getContextNavItems(),
          primary = _this$getContextNavIt2.primary,
          secondary = _this$getContextNavIt2.secondary,
          tertiary = _this$getContextNavIt2.tertiary;

      var _this$props2 = _this.props,
          isMobile = _this$props2.isMobile,
          preventHref = _this$props2.preventHref,
          updateNavOnItemClick = _this$props2.updateNavOnItemClick,
          idPath = _this$props2.idPath;

      var _this$navItem = _this.navItem(),
          onClick = _this$navItem.onClick;

      if (preventHref && !!onClick) {
        event.preventDefault();
      }

      updateNavOnItemClick(primary, secondary, tertiary, _this.idPath(), idPath); // Clears all mobile selections
      if (isMobile) {
        _this.onMobileSelection(primary, secondary, tertiary); // Applies new mobile selection here
      }
      _this.setActive();
      onClick && onClick(primary, secondary, tertiary);
    }, _this.onItemHover = function () {
      var _this$getContextNavIt3 = _this.getContextNavItems(),
          primary = _this$getContextNavIt3.primary,
          secondary = _this$getContextNavIt3.secondary,
          tertiary = _this$getContextNavIt3.tertiary;

      var _this$props3 = _this.props,
          updateNavOnItemHover = _this$props3.updateNavOnItemHover,
          idPath = _this$props3.idPath,
          onHover = _this$props3.onHover;

      updateNavOnItemHover(primary, secondary, tertiary, _this.idPath(), idPath, onHover);
    }, _this.onMobileSelection = function (primary, secondary, tertiary) {
      var _this$props4 = _this.props,
          setMobilePath = _this$props4.setMobilePath,
          updateNavOnMobileSelection = _this$props4.updateNavOnMobileSelection;

      setMobilePath(_this.idPath());
      updateNavOnMobileSelection(primary, secondary, tertiary);
    }, _this.getContextNavItems = function () {
      // We have primary, secondary, and tertiary items as props if they are part of the parent context,
      // but we also want to include the current item when calling handlers.
      var _this$props5 = _this.props,
          depth = _this$props5.depth,
          primaryItem = _this$props5.primaryItem,
          secondaryItem = _this$props5.secondaryItem,
          tertiaryItem = _this$props5.tertiaryItem;

      var navItem = _this.navItem();
      return {
        primary: depth === 'primary' ? navItem : primaryItem,
        secondary: depth === 'secondary' ? navItem : secondaryItem,
        tertiary: depth === 'tertiary' ? navItem : tertiaryItem
      };
    }, _this.setActive = function () {
      _this.props.setActivePath(_this.idPath());
    }, _this.id = function () {
      var _this$navItem2 = _this.navItem(null, true),
          id = _this$navItem2.id,
          title = _this$navItem2.title; // Need to ignorePath here so we don't get an infinite call stack...


      return id || title || _this.props.index;
    }, _this.idPath = function () {
      return '' + _this.props.idPath + _this.id() + '/';
    }, _this.navItem = function (oldProps, ignorePath) {
      var props = oldProps || _this.props;
      // Properties of the item object take priority over individual item props
      var item = _extends({}, (0, _VerticalNavConstants.getItemProps)(props), props.item);
      // Automatically set the active, hovered, and selectedOnMobile properties based on current path...
      // ...But don't call idPath() when called from inside id(), or there will be an infinite loop.
      var valOrOnPath = function valOrOnPath(val, path) {
        return val || (ignorePath ? null : path && path.startsWith(_this.idPath()));
      };
      return _extends({}, item, {
        active: valOrOnPath(item.active, props.activePath),
        hovered: valOrOnPath(item.hovered, props.hoverPath),
        selectedOnMobile: valOrOnPath(item.selectedOnMobile, props.mobilePath),
        pinned: valOrOnPath(item.pinned, props.pinnedPath)
      });
    }, _this.pinNextDepth = function () {
      var _this$props6 = _this.props,
          isMobile = _this$props6.isMobile,
          depth = _this$props6.depth,
          setMobilePath = _this$props6.setMobilePath,
          forceHideSecondaryMenu = _this$props6.forceHideSecondaryMenu,
          setPinnedPath = _this$props6.setPinnedPath,
          updateNavOnPin = _this$props6.updateNavOnPin,
          idPath = _this$props6.idPath,
          pinnedPath = _this$props6.pinnedPath;

      var nextDepth = (0, _VerticalNavConstants.getNextDepth)(depth);
      if (isMobile) {
        // On mobile, the pin buttons act as back buttons instead.
        if (depth === 'primary') {
          // Going back to primary nav clears all selection.
          setMobilePath(null);
        } else if (depth === 'secondary') {
          // Going back to secondary nav de-selects this item and re-selects the parent.
          setMobilePath(idPath); // idPath prop, which is parent's path, not this.idPath().
        }
      } else {
        setPinnedPath(!pinnedPath ? _this.idPath() : null);
        if (pinnedPath) {
          forceHideSecondaryMenu();
          _this.onItemBlur(true);
        }
      }
      updateNavOnPin(_this.navItem(), nextDepth, !pinnedPath);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseVerticalNavItemHelper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.active) {
        this.props.setControlledActivePath(true);
      }
      if (this.props.hovered) {
        this.props.setControlledHoverPath(true);
      }
      if (this.props.selectedOnMobile) {
        this.props.setControlledMobilePath(true);
      }
      if (this.props.pinned) {
        this.props.setControlledPinnedPath(true);
      }
      if (this.navItem().initialActive) {
        this.setActive();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _props = this.props,
          setControlledActivePath = _props.setControlledActivePath,
          setControlledHoverPath = _props.setControlledHoverPath,
          setControlledMobilePath = _props.setControlledMobilePath,
          setControlledPinnedPath = _props.setControlledPinnedPath;

      if (!this.props.active && newProps.active) {
        // If the active prop is being added, make sure the activePath is in sync.
        if (newProps.activePath !== this.idPath()) {
          this.setActive();
        }
        setControlledActivePath(true);
      }
      if (!this.props.hovered && newProps.hovered) {
        // If the hovered prop is being added, make sure the hoverPath is in sync.
        if (newProps.hoverPath !== this.idPath()) {
          this.setHovered();
        }
        setControlledHoverPath(true);
      }
      if (!this.props.selectedOnMobile && newProps.selectedOnMobile) {
        // If the selectedOnMobile prop is being added, make sure the mobilePath is in sync.
        if (newProps.mobilePath !== this.idPath()) {
          this.setMobilePath(this.idPath());
        }
        setControlledMobilePath(true);
      }
      if (!this.props.pinned && newProps.pinned) {
        // If the pinned prop is being added, make sure the pinnedPath is in sync.
        if (newProps.pinnedPath !== this.idPath()) {
          this.setPinnedPath(this.idPath());
        }
        setControlledPinnedPath(true);
      }
    }
  }, {
    key: 'setHovered',
    value: function setHovered() {
      this.props.setHoverPath(this.idPath());
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props2 = this.props,
          pinnableMenus = _props2.pinnableMenus,
          hiddenIcons = _props2.hiddenIcons,
          isDivider = _props2.isDivider,
          navCollapsed = _props2.navCollapsed,
          showMobileSecondary = _props2.showMobileSecondary,
          showMobileTertiary = _props2.showMobileTertiary,
          showBadges = _props2.showBadges,
          children = _props2.children,
          isMobile = _props2.isMobile,
          pinnedPath = _props2.pinnedPath,
          id = _props2.id,
          dataID = _props2.dataID;

      // The nav item can either be passed directly as one item object prop, or as individual props.

      var navItem = this.navItem();
      var active = navItem.active,
          hovered = navItem.hovered,
          selectedOnMobile = navItem.selectedOnMobile,
          pinned = navItem.pinned,
          title = navItem.title,
          iconClass = navItem.iconClass,
          badges = navItem.badges,
          subItems = navItem.subItems,
          href = navItem.href,
          onClick = navItem.onClick,
          className = navItem.className;


      var depth = this.props.depth || 'primary';
      var nextDepth = (0, _VerticalNavConstants.getNextDepth)(depth);
      var NextDepthItem = (0, _VerticalNavConstants.componentForDepth)(nextDepth);

      var childItemComponents = (0, _helpers.filterChildren)(children, _VerticalNavConstants.isNavItem) || subItems && subItems.length > 0 && subItems.map(function (childItem) {
        return _react2.default.createElement(NextDepthItem, { item: childItem, key: childItem.title });
      });

      if (!childItemComponents && !href && !onClick) {
        // eslint-disable-next-line
        console.warn('Warning: Non-navigable item at', this.idPath(), '\nNav items should have one or more of: subItems, href, onClick.');
      }

      var childBadgeComponents = (0, _helpers.filterChildren)(children, function (child) {
        return (0, _helpers.hasDisplayName)(child, _VerticalNavBadge2.default.displayName);
      }) || badges && badges.length > 0 && badges.map(function (badge) {
        var badgeKey = badge.badgeClass || badge.iconClass || badge.tooltip || badge.count;
        return _react2.default.createElement(_VerticalNavBadge2.default, _extends({}, badge, { key: badgeKey }));
      });

      var onPinnedPath = pinnedPath && pinnedPath.startsWith(this.idPath());

      var icon = iconClass && _react2.default.createElement('span', { className: (0, _classnames2.default)(iconClass, { hidden: hiddenIcons }), title: title });

      var item = _react2.default.createElement(
        _ListGroup.ListGroupItem,
        {
          listItem: true // Renders as <li>. Other props can change this, see logic in react-bootstrap's ListGroupItem.
          , className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, nextDepth + '-nav-item-pf', depth !== 'tertiary' && childItemComponents && childItemComponents.length > 0), _defineProperty(_classNames, 'active', active || pinned && pinnableMenus), _defineProperty(_classNames, 'is-hover', pinnableMenus && onPinnedPath || depth !== 'tertiary' && hovered), _defineProperty(_classNames, 'mobile-nav-item-pf', selectedOnMobile && (depth === 'primary' && showMobileSecondary || depth === 'secondary')), _defineProperty(_classNames, 'mobile-secondary-item-pf', selectedOnMobile && depth === 'primary' && showMobileTertiary), _classNames), className),
          onMouseEnter: this.onItemHover
          // NOTE onItemBlur takes a boolean, we want to prevent it being passed a truthy event.
          , onMouseLeave: function onMouseLeave(e) {
            return _this2.onItemBlur(false);
          }
        },
        _react2.default.createElement(
          'a',
          { id: id, 'data-id': dataID, href: href || '#', onClick: this.onItemClick },
          depth === 'primary' && icon && (!isMobile && navCollapsed ? _react2.default.createElement(
            _OverlayTrigger.OverlayTrigger,
            { placement: 'bottom', overlay: _react2.default.createElement(
                _Tooltip.Tooltip,
                { id: title },
                title
              ) },
            icon
          ) : icon),
          _react2.default.createElement(
            'span',
            { className: 'list-group-item-value' },
            title
          ),
          showBadges && childBadgeComponents && _react2.default.createElement(
            'div',
            { className: 'badge-container-pf' },
            childBadgeComponents
          )
        ),
        childItemComponents && childItemComponents.length > 0 && _react2.default.createElement(
          'div',
          { className: 'nav-pf-' + nextDepth + '-nav' },
          _react2.default.createElement(
            'div',
            { className: 'nav-item-pf-header' },
            (pinnableMenus || isMobile) && _react2.default.createElement('a', {
              className: (0, _classnames2.default)(nextDepth + '-collapse-toggle-pf', {
                collapsed: onPinnedPath
              }),
              onClick: this.pinNextDepth
            }),
            _react2.default.createElement(
              'span',
              null,
              title
            )
          ),
          _react2.default.createElement(
            _VerticalNavConstants.NavContextProvider,
            _extends({}, this.props, { idPath: this.idPath(), item: navItem }),
            _react2.default.createElement(
              _ListGroup.ListGroup,
              { componentClass: 'ul' },
              childItemComponents
            )
          )
        )
      );

      var divider = _react2.default.createElement(
        _ListGroup.ListGroupItem,
        { listItem: true },
        _react2.default.createElement(_VerticalNavDividerItem2.default, { title: title })
      );

      return isDivider ? divider : item;
    }
  }]);

  return BaseVerticalNavItemHelper;
}(_react2.default.Component);

BaseVerticalNavItemHelper.propTypes = _extends({}, _VerticalNavConstants.itemObjectTypes, _VerticalNavConstants.navContextTypes, {
  /** Properties of the nav item, as an object. Can alternatively be passed as individual props. */
  item: _propTypes2.default.shape(_VerticalNavConstants.itemObjectTypes),
  /**
   * Sub-items, passed as JSX children (SecondaryItem, TertiaryItem).
   * Can alternatively pass subItems array as part of item or as its own prop.
   */
  children: _propTypes2.default.node,
  title: _propTypes2.default.string,
  /** Divider bool */
  isDivider: _propTypes2.default.bool,
  /** should Prevent Href */
  preventHref: _propTypes2.default.bool,
  /** anchor id */
  id: _propTypes2.default.string,
  /** anchor data-id */
  dataID: _propTypes2.default.string
});

BaseVerticalNavItemHelper.defaultProps = {
  item: {},
  children: null,
  title: '',
  isDivider: false,
  preventHref: true,
  id: null,
  dataID: null
};

var VerticalNavItemHelper = (0, _recompose.getContext)(_VerticalNavConstants.navContextTypes)(BaseVerticalNavItemHelper);

VerticalNavItemHelper.displayName = 'VerticalNavItemHelper';
VerticalNavItemHelper.propTypes = _extends({}, BaseVerticalNavItemHelper.propTypes);

exports.default = VerticalNavItemHelper;