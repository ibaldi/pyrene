import React from 'react';
import PropTypes from 'prop-types';

import './filterOption.css';
import SingleSelect from '../../SingleSelect/SingleSelect';
import TextField from '../../TextField/TextField';
import MultiSelect from '../../MultiSelect/MultiSelect';

export default class FilterOption extends React.Component {

    getFilterInterface = () => {
      switch (this.props.type) {
        case 'singleSelect':
          return (
            <SingleSelect
              name={this.props.filterKey}
              options={this.props.options}
              onChange={value => this.props.handleFilterChange(value, this.props.filterKey)}
              value={this.props.filterValues[this.props.filterKey] ? this.props.filterValues[this.props.filterKey] : null}
              clearable
              searchable
            />
          );
        case 'multiSelect':
          return (
            <MultiSelect
              name={this.props.filterKey}
              options={this.props.options}
              onChange={value => this.props.handleFilterChange(value, this.props.filterKey)}
              value={this.props.filterValues[this.props.filterKey].length > 0 ? this.props.filterValues[this.props.filterKey] : []}
              selectedOptionsInDropdown
              keepMenuOnSelect
              clearable
            />
          );
        case 'text':
          return (
            <TextField
              name={this.props.filterKey}
              onChange={value => this.props.handleFilterChange(value, this.props.filterKey)}
              value={this.props.filterValues[this.props.filterKey] !== null ? this.props.filterValues[this.props.filterKey] : ''}
            />
          );
        default:
          return null;
      }
    }

    render() {
      return (
        <div styleName="filterOption">
          <div styleName="label">
            {this.props.label}
          </div>
          <div styleName="interface">
            {this.getFilterInterface(this.props)}
          </div>
        </div>
      );
    }

}


FilterOption.displayName = 'FilterOption';

FilterOption.defaultProps = {
  options: [],
};

FilterOption.propTypes = {
  filterKey: PropTypes.string.isRequired,
  filterValues: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object])).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  type: PropTypes.string.isRequired,
};
