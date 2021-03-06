var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import TableGrid from '../TableGrid';
import OverlayTrigger from 'patternfly-react/dist/esm/components/OverlayTrigger/OverlayTrigger';
import Tooltip from 'patternfly-react/dist/esm/components/Tooltip/Tooltip';

import { mockItems } from './mockItems';

var titleColSizes = {
  md: 2,
  sm: 4,
  xs: 6
};
var descrColSizes = {
  md: 6,
  sm: 4,
  xs: 6
};
var countColSizes = {
  md: 2,
  sm: 2,
  xsHidden: true
};

var MockTableGridExample = function (_React$Component) {
  _inherits(MockTableGridExample, _React$Component);

  function MockTableGridExample() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MockTableGridExample);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MockTableGridExample.__proto__ || Object.getPrototypeOf(MockTableGridExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sortField: 'title',
      isAscending: true,
      items: mockItems,
      selectedItem: null,
      selectedField: null,
      selectedItems: []
    }, _this.onSortToggle = function (id) {
      var _this$state = _this.state,
          items = _this$state.items,
          sortField = _this$state.sortField,
          isAscending = _this$state.isAscending;

      var updateAscending = true;

      if (id === sortField) {
        updateAscending = !isAscending;
      }

      items.sort(function (a, b) {
        var compVal = 0;
        if (id === 'title') {
          compVal = a.title.localeCompare(b.title);
        } else if (id === 'hosts') {
          compVal = a.hosts - b.hosts;
        } else if (id === 'clusters') {
          compVal = a.clusters - b.clusters;
        }

        if (!updateAscending) {
          compVal *= -1;
        }

        return compVal;
      });

      _this.setState({ items: items, sortField: id, isAscending: updateAscending });
    }, _this.onSelect = function (item, field) {
      _this.setState({ selectedItem: item, selectedField: field });
    }, _this.toggleSelection = function (item) {
      var selectedItems = _this.state.selectedItems;

      var newSelections = void 0;
      var index = selectedItems.indexOf(item);

      if (index >= 0) {
        newSelections = [].concat(_toConsumableArray(selectedItems.slice(0, index)), _toConsumableArray(selectedItems.slice(index + 1)));
      } else {
        newSelections = [].concat(_toConsumableArray(selectedItems), [item]);
      }
      _this.setState({ selectedItems: newSelections });
    }, _this.toggleAllSelections = function () {
      var _this$state2 = _this.state,
          items = _this$state2.items,
          selectedItems = _this$state2.selectedItems;

      _this.setState({ selectedItems: selectedItems.length > 0 ? [] : [].concat(_toConsumableArray(items)) });
    }, _this.renderItemRow = function (item, index) {
      var selectType = _this.props.selectType;
      var _this$state3 = _this.state,
          selectedItem = _this$state3.selectedItem,
          selectedField = _this$state3.selectedField,
          selectedItems = _this$state3.selectedItems;

      var selected = selectType === 'checkbox' ? selectedItems.indexOf(item) >= 0 : selectedItem === item;
      return React.createElement(
        TableGrid.Row,
        {
          key: index,
          onClick: function onClick() {
            return selectType === 'row' && _this.onSelect(item);
          },
          selected: (selectType === 'row' || selectType === 'checkbox') && selected,
          onToggleSelection: function onToggleSelection() {
            return _this.toggleSelection(item);
          }
        },
        React.createElement(
          TableGrid.Col,
          _extends({}, titleColSizes, {
            onClick: function onClick() {
              return selectType === 'cell' && _this.onSelect(item, 'title');
            },
            selected: selectType === 'cell' && selected && selectedField === 'title'
          }),
          item.title
        ),
        React.createElement(
          TableGrid.Col,
          _extends({}, descrColSizes, {
            onClick: function onClick() {
              return selectType === 'cell' && _this.onSelect(item, 'description');
            },
            selected: selectType === 'cell' && selected && selectedField === 'description'
          }),
          item.description
        ),
        React.createElement(
          TableGrid.Col,
          _extends({}, countColSizes, {
            onClick: function onClick() {
              return selectType === 'cell' && _this.onSelect(item, 'hosts');
            },
            selected: selectType === 'cell' && selected && selectedField === 'hosts'
          }),
          item.hosts
        ),
        React.createElement(
          TableGrid.Col,
          _extends({}, countColSizes, {
            onClick: function onClick() {
              return selectType === 'cell' && _this.onSelect(item, 'clusters');
            },
            selected: selectType === 'cell' && selected && selectedField === 'clusters'
          }),
          item.clusters
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MockTableGridExample, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          items = _state.items,
          selectedItems = _state.selectedItems,
          sortField = _state.sortField,
          isAscending = _state.isAscending;
      var _props = this.props,
          bordered = _props.bordered,
          selectType = _props.selectType;

      return React.createElement(
        TableGrid,
        { id: 'table-grid', bordered: bordered, selectType: selectType },
        React.createElement(
          TableGrid.Head,
          {
            showCheckbox: selectType === 'checkbox',
            allSelected: selectType === 'checkbox' && selectedItems.length === items.length,
            partialSelected: selectType === 'checkbox' && selectedItems.length > 0 && selectedItems.length < items.length,
            onToggleSelection: this.toggleAllSelections
          },
          React.createElement(
            TableGrid.ColumnHeader,
            _extends({
              id: 'title',
              sortable: true,
              isSorted: sortField === 'title',
              isAscending: isAscending,
              onSortToggle: function onSortToggle() {
                return _this2.onSortToggle('title');
              }
            }, titleColSizes),
            'Title'
          ),
          React.createElement(
            TableGrid.ColumnHeader,
            _extends({
              id: 'description',
              isSorted: sortField === 'description',
              isAscending: isAscending,
              onSortToggle: function onSortToggle() {
                return _this2.onSortToggle('description');
              }
            }, descrColSizes),
            'Description'
          ),
          React.createElement(
            TableGrid.ColumnHeader,
            _extends({
              id: 'hosts',
              sortable: true,
              isSorted: sortField === 'hosts',
              isAscending: isAscending,
              onSortToggle: function onSortToggle() {
                return _this2.onSortToggle('hosts');
              }
            }, countColSizes),
            React.createElement(
              OverlayTrigger,
              { overlay: React.createElement(
                  Tooltip,
                  { id: 'hosts-tip' },
                  'Hosts'
                ), placement: 'top' },
              React.createElement(
                'span',
                null,
                'Hosts'
              )
            )
          ),
          React.createElement(
            TableGrid.ColumnHeader,
            _extends({
              id: 'clusters',
              sortable: true,
              isSorted: sortField === 'clusters',
              isAscending: isAscending,
              onSortToggle: function onSortToggle() {
                return _this2.onSortToggle('clusters');
              }
            }, countColSizes),
            React.createElement(
              OverlayTrigger,
              { overlay: React.createElement(
                  Tooltip,
                  { id: 'clusters-tip' },
                  'Clusters'
                ), placement: 'top' },
              React.createElement(
                'span',
                null,
                'Clusters'
              )
            )
          )
        ),
        React.createElement(
          TableGrid.Body,
          null,
          items.map(function (item, index) {
            return _this2.renderItemRow(item, index);
          })
        )
      );
    }
  }]);

  return MockTableGridExample;
}(React.Component);

MockTableGridExample.propTypes = {
  bordered: PropTypes.bool,
  selectType: PropTypes.oneOf(['row', 'cell', 'checkbox', 'none'])
};

MockTableGridExample.defaultProps = {
  bordered: false,
  selectType: 'none'
};

export { MockTableGridExample };

export var MockTableGridExampleSource = '\nimport React from \'react\';\nimport PropTypes from \'prop-types\';\nimport TableGrid from \'../TableGrid\';\nimport { OverlayTrigger, Tooltip } from \'patternfly-react\';\nimport { mockItems } from \'./mockItems\';\n\nconst titleColSizes = {\n  md: 2,\n  sm: 4,\n  xs: 6\n};\nconst descrColSizes = {\n  md: 6,\n  sm: 4,\n  xs: 6\n};\nconst countColSizes = {\n  md: 2,\n  sm: 2,\n  xsHidden: true\n};\n\nclass MockTableGridExample extends React.Component {\n  state = {\n    sortField: \'title\',\n    isAscending: true,\n    items: mockItems,\n    selectedItem: null,\n    selectedField: null,\n    selectedItems: []\n  };\n\n  onSortToggle = id => {\n    const { items, sortField, isAscending } = this.state;\n    let updateAscending = true;\n\n    if (id === sortField) {\n      updateAscending = !isAscending;\n    }\n\n    items.sort((a, b) => {\n      let compVal = 0;\n      if (id === \'title\') {\n        compVal = a.title.localeCompare(b.title);\n      } else if (id === \'hosts\') {\n        compVal = a.hosts - b.hosts;\n      } else if (id === \'clusters\') {\n        compVal = a.clusters - b.clusters;\n      }\n\n      if (!updateAscending) {\n        compVal *= -1;\n      }\n\n      return compVal;\n    });\n\n    this.setState({ items, sortField: id, isAscending: updateAscending });\n  };\n\n  onSelect = (item, field) => {\n    this.setState({ selectedItem: item, selectedField: field });\n  };\n\n  toggleSelection = item => {\n    const { selectedItems } = this.state;\n    let newSelections;\n    const index = selectedItems.indexOf(item);\n\n    if (index >= 0) {\n      newSelections = [...selectedItems.slice(0, index), ...selectedItems.slice(index + 1)];\n    } else {\n      newSelections = [...selectedItems, item];\n    }\n    this.setState({ selectedItems: newSelections });\n  };\n\n  toggleAllSelections = () => {\n    const { items, selectedItems } = this.state;\n    this.setState({ selectedItems: selectedItems.length > 0 ? [] : [...items] });\n  };\n\n  renderItemRow = (item, index) => {\n    const { selectType } = this.props;\n    const { selectedItem, selectedField, selectedItems } = this.state;\n    const selected = selectType === \'checkbox\' ? selectedItems.indexOf(item) >= 0 : selectedItem === item;\n    return (\n      <TableGrid.Row\n        key={index}\n        onClick={() => selectType === \'row\' && this.onSelect(item)}\n        selected={(selectType === \'row\' || selectType === \'checkbox\') && selected}\n        onToggleSelection={() => this.toggleSelection(item)}\n      >\n        <TableGrid.Col\n          {...titleColSizes}\n          onClick={() => selectType === \'cell\' && this.onSelect(item, \'title\')}\n          selected={selectType === \'cell\' && selected && selectedField === \'title\'}\n        >\n          {item.title}\n        </TableGrid.Col>\n        <TableGrid.Col\n          {...descrColSizes}\n          onClick={() => selectType === \'cell\' && this.onSelect(item, \'description\')}\n          selected={selectType === \'cell\' && selected && selectedField === \'description\'}\n        >\n          {item.description}\n        </TableGrid.Col>\n        <TableGrid.Col\n          {...countColSizes}\n          onClick={() => selectType === \'cell\' && this.onSelect(item, \'hosts\')}\n          selected={selectType === \'cell\' && selected && selectedField === \'hosts\'}\n        >\n          {item.hosts}\n        </TableGrid.Col>\n        <TableGrid.Col\n          {...countColSizes}\n          onClick={() => selectType === \'cell\' && this.onSelect(item, \'clusters\')}\n          selected={selectType === \'cell\' && selected && selectedField === \'clusters\'}\n        >\n          {item.clusters}\n        </TableGrid.Col>\n      </TableGrid.Row>\n    );\n  };\n\n  render() {\n    const { items, selectedItems, sortField, isAscending } = this.state;\n    const { bordered, selectType } = this.props;\n    return (\n      <TableGrid id="table-grid" bordered={bordered} selectType={selectType}>\n        <TableGrid.Head\n          showCheckbox={selectType === \'checkbox\'}\n          allSelected={selectType === \'checkbox\' && selectedItems.length === items.length}\n          partialSelected={selectType === \'checkbox\' && selectedItems.length > 0 && selectedItems.length < items.length}\n          onToggleSelection={this.toggleAllSelections}\n        >\n          <TableGrid.ColumnHeader\n            id="title"\n            sortable\n            isSorted={sortField === \'title\'}\n            isAscending={isAscending}\n            onSortToggle={() => this.onSortToggle(\'title\')}\n            {...titleColSizes}\n          >\n            Title\n          </TableGrid.ColumnHeader>\n          <TableGrid.ColumnHeader\n            id="description"\n            isSorted={sortField === \'description\'}\n            isAscending={isAscending}\n            onSortToggle={() => this.onSortToggle(\'description\')}\n            {...descrColSizes}\n          >\n            Description\n          </TableGrid.ColumnHeader>\n          <TableGrid.ColumnHeader\n            id="hosts"\n            sortable\n            isSorted={sortField === \'hosts\'}\n            isAscending={isAscending}\n            onSortToggle={() => this.onSortToggle(\'hosts\')}\n            {...countColSizes}\n          >\n            <OverlayTrigger overlay={<Tooltip id="hosts-tip">Hosts</Tooltip>} placement="top">\n              <span>Hosts</span>\n            </OverlayTrigger>\n          </TableGrid.ColumnHeader>\n          <TableGrid.ColumnHeader\n            id="clusters"\n            sortable\n            isSorted={sortField === \'clusters\'}\n            isAscending={isAscending}\n            onSortToggle={() => this.onSortToggle(\'clusters\')}\n            {...countColSizes}\n          >\n            <OverlayTrigger overlay={<Tooltip id="clusters-tip">Clusters</Tooltip>} placement="top">\n              <span>Clusters</span>\n            </OverlayTrigger>\n          </TableGrid.ColumnHeader>\n        </TableGrid.Head>\n        <TableGrid.Body>{items.map((item, index) => this.renderItemRow(item, index))}</TableGrid.Body>\n      </TableGrid>\n    );\n  }\n}\n\nMockTableGridExample.propTypes = {\n  bordered: PropTypes.bool,\n  selectType: PropTypes.oneOf([\'row\', \'cell\', \'checkbox\', \'none\'])\n};\n\nMockTableGridExample.defaultProps = {\n  bordered: false,\n  selectType: \'none\'\n};\n\nexport { MockTableGridExample };\n';