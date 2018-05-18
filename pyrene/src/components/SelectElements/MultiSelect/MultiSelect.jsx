import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../select.css';
import Select from 'react-select';
import CreatableSelect from 'react-select/lib/Creatable';
import MultiSelectStyle from './multiSelectCSS';

export default class multiSelect extends React.Component {

  render() {
    return (
      <div styleName={classNames('selectContainer', { disabled: this.props.disabled }, { invalid: this.props.invalid && !this.props.disabled })}>
        {this.props.title && <div styleName={classNames('selectTitle', { required: this.props.required && !this.props.disabled })}>{this.props.title}</div>}
        {this.props.creatable ?
          <CreatableSelect
            className={'multiSelect'}
            styles={MultiSelectStyle(this.props.rows)}
            placeholder={this.props.placeholder}
            options={this.props.options}
            defaultValue={this.props.defaultValue}
            isClearable={this.props.clearable}
            isDisabled={this.props.disabled}
            isInvalid={this.props.invalid}
            onChange={option => this.props.onChange(option)}

            maxMenuHeight={264}
            noOptionsMessage={() => 'no matches found'}
            formatCreateLabel={inputValue => `Create new tag "${inputValue}"`}

            isMulti
            isSearchable
            blurInputOnSelect
            escapeClearsValue
            captureMenuScroll
          />
          :
          <Select
            className={'multiSelect'}
            styles={MultiSelectStyle(this.props.rows)}
            placeholder={this.props.placeholder}
            options={this.props.options}
            defaultValue={this.props.defaultValue}
            isClearable={this.props.clearable}
            isDisabled={this.props.disabled}
            isInvalid={this.props.invalid}
            isSearchable={this.props.searchable}
            onChange={option => this.props.onChange(option)}

            maxMenuHeight={264}
            noOptionsMessage={() => 'no matches found'}

            isMulti
            escapeClearsValue
            captureMenuScroll
            backspaceRemovesValue
            closeMenuOnSelect={false}
          />
        }
        {(this.props.helperLabel || this.props.invalid) && <div styleName={'selectHelper'}>
          {this.props.invalid && !this.props.disabled && <span className={'icon-error-outline'} styleName={'errorIcon'} />}
          {this.props.helperLabel}
        </div>}
      </div>
    );
  }

}

multiSelect.displayName = 'multiSelect';

multiSelect.defaultProps = {
  placeholder: 'Select',
  helperLabel: '',
  title: '',
  defaultValue: null,
  rows: -1,
  creatable: false,
  disabled: false,
  invalid: false,
  required: false,
  clearable: false,
  searchable: false,
  options: {},
  onChange: () => null
};

multiSelect.propTypes = {
  /**
   * Let's the user clear his selection.
   */
  clearable: PropTypes.bool,
  /**
   * Allows to create new options.
   */
  creatable: PropTypes.bool,
  /**
   * Set's one or multiple preselected options.
   */
  defaultValue: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.string
  })),
  /**
   * Disables any interaction with the component.
   */
  disabled: PropTypes.bool,
  /**
   * Helper text below the input field, also used to display error messages if prop invalid is set.
   */
  helperLabel: PropTypes.string,
  /**
   * Changes the fields and helpers visual appearance to indicate a validation error.
   */
  invalid: PropTypes.bool,
  /**
   * Event Handler. Param option: {value: , label:}
   */
  onChange: PropTypes.func,
  /**
   * Supplies the available options to the dropdown.
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.string
  })),
  /**
   * Placeholder inside the input.
   */
  placeholder: PropTypes.string,
  /**
   * Adds a visual indication that the field is required..
   */
  required: PropTypes.bool,
  /**
   * Let's you set a fixed height to the multiselect. Default behaviour is one row that expands up to 3, then starts scrolling.
   */
  rows: PropTypes.number,
  /**
   * Let's the user type in the inputbox.
   */
  searchable: PropTypes.bool,
  /**
   * Changes what the title says.
   */
  title: PropTypes.string
};

