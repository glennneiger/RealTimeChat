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

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _DualListArrows = require('./components/DualListArrows');

var _DualListArrows2 = _interopRequireDefault(_DualListArrows);

var _DualListSelector = require('./components/DualListSelector');

var _DualListSelector2 = _interopRequireDefault(_DualListSelector);

var _DualListHiddenSelect = require('./components/DualListHiddenSelect');

var _DualListHiddenSelect2 = _interopRequireDefault(_DualListHiddenSelect);

var _helpers = require('../../common/helpers');

var _helpers2 = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DualList = function (_React$Component) {
  _inherits(DualList, _React$Component);

  function DualList(props) {
    _classCallCheck(this, DualList);

    var _this = _possibleConstructorReturn(this, (DualList.__proto__ || Object.getPrototypeOf(DualList)).call(this, props));

    _this.onItemChange = function (_ref) {
      var _ref$target = _ref.target,
          checked = _ref$target.checked,
          _ref$target$dataset = _ref$target.dataset,
          position = _ref$target$dataset.position,
          side = _ref$target$dataset.side,
          parentPosition = _ref$target$dataset.parentPosition;
      var _this$props$side = _this.props[side],
          originalSelectCount = _this$props$side.selectCount,
          originalItems = _this$props$side.items,
          isSortAsc = _this$props$side.isSortAsc,
          filterTerm = _this$props$side.filterTerm;

      var items = (0, _cloneDeep2.default)(originalItems);
      var item = (0, _helpers2.getItem)(isSortAsc, items, position, parentPosition);
      var selectCount = originalSelectCount;
      item.checked = checked;
      if ((0, _helpers2.itemHasParent)(item)) {
        var parent = (0, _helpers2.getItem)(isSortAsc, items, parentPosition);
        parent.checked = (0, _helpers2.isAllChildrenChecked)(parent);
        selectCount = (0, _helpers2.getUpdatedSelectCount)(selectCount, checked);
      } else if ((0, _helpers2.itemHasChildren)(item)) {
        var children = item.children;

        (0, _helpers2.toggleAllItems)(children, checked);
        selectCount = (0, _helpers2.getUpdatedSelectCount)(selectCount, checked, children.length);
      } else {
        selectCount = (0, _helpers2.getUpdatedSelectCount)(selectCount, checked);
      }
      var isMainChecked = false;
      if (filterTerm) {
        var filteredItemsLength = (0, _helpers2.getFilterredItemsLength)(items);
        var selectedFilteredItemsLength = (0, _helpers2.getSelectedFilterredItemsLength)(items);
        isMainChecked = filteredItemsLength > 0 && selectedFilteredItemsLength === filteredItemsLength;
      } else {
        isMainChecked = (0, _helpers2.isAllItemsChecked)(items, selectCount);
      }
      _this.props.onItemChange({
        side: side,
        items: items,
        selectCount: selectCount,
        isMainChecked: isMainChecked
      });
    };

    _this.onMainCheckboxChange = function (_ref2) {
      var _ref2$target = _ref2.target,
          checked = _ref2$target.checked,
          side = _ref2$target.dataset.side;
      var _this$props$side2 = _this.props[side],
          originalItems = _this$props$side2.items,
          filterTerm = _this$props$side2.filterTerm,
          originalSelectCount = _this$props$side2.selectCount;

      var items = (0, _cloneDeep2.default)(originalItems);
      var selectCount = originalSelectCount;
      if (filterTerm) {
        var filterredItems = (0, _helpers2.getFilterredItems)(items);
        var toggledAmount = (0, _helpers2.toggleAllItems)(filterredItems, checked);
        selectCount += toggledAmount * (checked ? 1 : -1);
      } else {
        var _toggledAmount = (0, _helpers2.toggleAllItems)(items, checked);
        selectCount = checked ? selectCount + _toggledAmount : 0;
      }
      _this.props.onMainCheckboxChange({
        side: side,
        checked: checked,
        items: items,
        selectCount: selectCount
      });
    };

    _this.onSortClick = function (_ref3) {
      var side = _ref3.target.dataset.side;
      var _this$props$side3 = _this.props[side],
          items = _this$props$side3.items,
          isSortAsc = _this$props$side3.isSortAsc;

      var itemsReversed = (0, _helpers2.reverseAllItemsOrder)(items);
      _this.props.onSortClick({
        side: side,
        items: itemsReversed,
        isSortAsc: !isSortAsc
      });
    };

    _this.onFilterChange = function (event) {
      /** https://reactjs.org/docs/events.html#event-pooling */
      event.persist();
      _this.onFilterChangeDebounced(event);
    };

    _this.emitFilterChange = function (_ref4) {
      var _ref4$target = _ref4.target,
          value = _ref4$target.value,
          side = _ref4$target.dataset.side;
      var _this$props$side4 = _this.props[side],
          originalItems = _this$props$side4.items,
          selectCount = _this$props$side4.selectCount;

      var filterTerm = value.trim();
      if (!value) {
        var _items = (0, _helpers2.makeAllHiddenFilteredItemsVisible)(originalItems);
        var _isMainChecked = (0, _helpers2.isAllItemsChecked)(_items, selectCount);
        _this.props.onFilterChange({ side: side, filterTerm: filterTerm, items: _items, isMainChecked: _isMainChecked });
        return;
      }
      var items = (0, _helpers2.filterByHiding)(originalItems, filterTerm);
      var filteredItemsLength = (0, _helpers2.getFilterredItemsLength)(items);
      var isMainChecked = filteredItemsLength > 0 && (0, _helpers2.getSelectedFilterredItemsLength)(items) === filteredItemsLength;
      _this.props.onFilterChange({ side: side, filterTerm: filterTerm, items: items, isMainChecked: isMainChecked });
    };

    _this.moveTo = function (otherSide) {
      var _this$props$onChange;

      var side = otherSide === 'right' ? 'left' : 'right';
      var sideState = _this.props[side];
      var otherSideState = _this.props[otherSide];
      var sideItemsWithRemainChildren = [];
      var otherSideItems = (0, _cloneDeep2.default)(otherSideState.items);
      var sideItems = sideState.items.filter(function (item) {
        if ((0, _helpers2.isItemSelected)(item)) {
          if ((0, _helpers2.itemHasChildren)(item)) {
            var _isItemExistOnList = (0, _helpers2.isItemExistOnList)(otherSideItems, item.label),
                isParentExist = _isItemExistOnList.isParentExist,
                parentIndex = _isItemExistOnList.parentIndex;

            if (isParentExist) {
              var children = otherSideItems[parentIndex].children;

              children.push.apply(children, _toConsumableArray(item.children));
              return false;
            }
          }
          otherSideItems.push(item);
          return false;
        } else if ((0, _helpers2.itemHasChildren)(item)) {
          var selectedChildren = [];
          var unselectedChildren = [];
          item.children.forEach(function (childItem) {
            if ((0, _helpers2.isItemSelected)(childItem)) {
              selectedChildren.push(childItem);
            } else {
              unselectedChildren.push(childItem);
            }
          });
          if (selectedChildren.length > 0) {
            var _isItemExistOnList2 = (0, _helpers2.isItemExistOnList)(otherSideItems, item.label),
                _isParentExist = _isItemExistOnList2.isParentExist,
                _parentIndex = _isItemExistOnList2.parentIndex;

            if (_isParentExist) {
              var _otherSideItems$_pare;

              (_otherSideItems$_pare = otherSideItems[_parentIndex].children).push.apply(_otherSideItems$_pare, selectedChildren);
            } else {
              otherSideItems.push(_extends({}, item, { checked: true, children: selectedChildren }));
            }
            if (unselectedChildren.length > 0) {
              sideItemsWithRemainChildren.push(_extends({}, item, { children: unselectedChildren }));
            }
            return false;
          }
        }
        return true;
      });
      if (sideItemsWithRemainChildren.length > 0) {
        var _sideItems;

        (_sideItems = sideItems).push.apply(_sideItems, sideItemsWithRemainChildren);
      }
      var updatedSideState = _extends({}, sideState, {
        selectCount: 0,
        isMainChecked: false
      });

      var updatedOtherSideState = _extends({}, otherSideState, {
        selectCount: 0,
        isMainChecked: false
      });

      sideItems = (0, _helpers2.arrangeArray)(_extends({}, updatedSideState, { items: sideItems }));
      otherSideItems = (0, _helpers2.arrangeArray)(_extends({}, updatedOtherSideState, { items: otherSideItems, resetAllSelected: true }));

      _this.props.onChange((_this$props$onChange = {}, _defineProperty(_this$props$onChange, side, _extends({}, updatedSideState, {
        items: sideItems
      })), _defineProperty(_this$props$onChange, otherSide, _extends({}, updatedOtherSideState, {
        items: otherSideItems
      })), _this$props$onChange));
    };

    _this.leftArrowClick = function () {
      var left = _this.props.arrows.left;

      left.onClick();
      _this.moveTo('left');
    };

    _this.rightArrowClick = function () {
      var right = _this.props.arrows.right;

      right.onClick();
      _this.moveTo('right');
    };

    _this.onFilterChangeDebounced = (0, _helpers.debounce)(_this.emitFilterChange, 200);
    return _this;
  }

  _createClass(DualList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          left = _props.left,
          right = _props.right,
          arrows = _props.arrows,
          allowHiddenInputs = _props.allowHiddenInputs;

      var hiddenInputs = allowHiddenInputs ? _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_DualListHiddenSelect2.default, _extends({}, left.inputProps, { items: left.items })),
        _react2.default.createElement(_DualListHiddenSelect2.default, _extends({}, right.inputProps, { items: right.items }))
      ) : null;
      return _react2.default.createElement(
        'div',
        { className: 'dual-list-pf' },
        hiddenInputs,
        _react2.default.createElement(_DualListSelector2.default, _extends({
          side: 'left'
        }, left, {
          onItemChange: this.onItemChange,
          onSortClick: this.onSortClick,
          onFilterChange: this.onFilterChange,
          onMainCheckboxChange: this.onMainCheckboxChange
        })),
        _react2.default.createElement(_DualListArrows2.default, {
          left: { onClick: this.leftArrowClick, ariaLabel: arrows.left.ariaLabel },
          right: { onClick: this.rightArrowClick, ariaLabel: arrows.right.ariaLabel }
        }),
        _react2.default.createElement(_DualListSelector2.default, _extends({
          side: 'right'
        }, right, {
          onItemChange: this.onItemChange,
          onSortClick: this.onSortClick,
          onFilterChange: this.onFilterChange,
          onMainCheckboxChange: this.onMainCheckboxChange
        }))
      );
    }
  }]);

  return DualList;
}(_react2.default.Component);

DualList.propTypes = {
  /**
   * - items: Array of objects that must contain a label and a value.
   * - options: The Kebab menu items.
   * - isSortAsc: Set the list items sorting direction.
   * - sortBy: set the list items sorting factor.
   * - isMainChecked: Set the main checkbox state.
   */
  left: _propTypes2.default.shape({
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
      children: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        label: _propTypes2.default.string,
        value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
      }))
    })),
    options: _propTypes2.default.node,
    isSortAsc: _propTypes2.default.bool,
    sortBy: _propTypes2.default.string,
    isMainChecked: _propTypes2.default.bool,
    inputProps: _propTypes2.default.object
  }),
  /**
   * - items: Array of objects that must contain a label and a value.
   * - options: The Kebab menu items.
   * - isSortAsc: Set the list items sorting direction.
   * - isMainChecked: Set the main checkbox state.
   * - sortBy: set the list items sorting factor.
   */
  right: _propTypes2.default.shape({
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string,
      value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
    })),
    options: _propTypes2.default.node,
    isSortAsc: _propTypes2.default.bool,
    sortBy: _propTypes2.default.string,
    isMainChecked: _propTypes2.default.bool,
    inputProps: _propTypes2.default.object
  }),
  /**
   * - Conatains the left and right arrows properties,
   * - Where in every object there are:
   * - onClick - function which determine the onClick event,
   * - ariaLabel - set the aria-label text.
   */
  arrows: _propTypes2.default.shape({
    left: _propTypes2.default.shape({
      onClick: _propTypes2.default.func,
      ariaLabel: _propTypes2.default.string
    }),
    right: _propTypes2.default.shape({
      onClick: _propTypes2.default.func,
      ariaLabel: _propTypes2.default.string
    })
  }),
  /**
   * Allows adding hidden select inputs
   * that reflects the dual list selected items.
   * It can be used while submitting a form to access the dual list data.
   * */
  allowHiddenInputs: _propTypes2.default.bool,
  /**
   * Function that runs after an item was clicked.
   * receives an object of: { side, items, selectCount, isMainChecked } as a callback.
   */
  onItemChange: _propTypes2.default.func,
  /**
   * Function that runs after the sort icon was clicked.
   * receives an object of: { side, items, isSortAsc } as a callback.
   */
  onSortClick: _propTypes2.default.func,
  /**
   * Function that runs after the filter input has changed.
   * receives an object of: { side, filterTerm } as a callback.
   */
  onFilterChange: _propTypes2.default.func,
  /**
   * Function that runs after the main checkbox was clicked.
   * receives an object of: { side, checked, items, selectCount } as a callback.
   */
  onMainCheckboxChange: _propTypes2.default.func,
  /**
   * Function that runs after items have been moved between the lists.
   * receives an object of: { left, right } updated sides as a callback.
   */
  onChange: _propTypes2.default.func
};

DualList.defaultProps = {
  left: {
    items: [],
    options: null,
    isSortAsc: true,
    sortBy: 'label',
    filterTerm: '',
    isMainChecked: false,
    inputProps: null
  },
  right: {
    items: [],
    options: null,
    isSortAsc: true,
    sortBy: 'label',
    filterTerm: '',
    isMainChecked: false,
    inputProps: null
  },
  arrows: {
    left: {
      onClick: _helpers.noop,
      ariaLabel: null
    },
    right: {
      onClick: _helpers.noop,
      ariaLabel: null
    }
  },
  allowHiddenInputs: false,
  onItemChange: _helpers.noop,
  onSortClick: _helpers.noop,
  onFilterChange: _helpers.noop,
  onMainCheckboxChange: _helpers.noop,
  onChange: _helpers.noop
};

exports.default = DualList;