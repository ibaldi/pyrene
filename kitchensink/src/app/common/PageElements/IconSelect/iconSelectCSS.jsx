/* eslint-disable no-nested-ternary */
/**
 *
 * React Select want's you to style the component in JS using the following convention.
 * Following is part of the style documentation:
 *
 * DOCS
 ***************************************************
 * Styles
 * React-Select is using emotion.
 *
 * @param {Object} base -- the component's default style
 * @param {Object} state -- the component's current state e.g. `isFocused`
 * @returns {Object}
 *
 * function styleFn(base, state) {
 *  // optionally spread base styles
 *  return { ...base, color: state.isFocused ? 'blue' : 'red' };
 * }
 *
 * Style Object
 * Each component is keyed, and ships with default styles. The component's default style object is passed as the first argument to the function when it's resolved.
 * The second argument is the current state of the select, features like isFocused, isSelected etc. allowing you to implement dynamic styles for each of the components.
 *
 * STYLE KEYS
 * clearIndicator container control dropdownIndicator group groupHeading
 * indicatorsContainer indicatorSeparator input loadingIndicator loadingMessage
 * menu menuList multiValue multiValueLabel multiValueRemove noOptionsMessage
 * option placeholder singleValue valueContainer
 *
 * Base and State
 * Spreading the base styles into your returned object let's you extend it
 * however you like while maintaining existing styles.
 * Alternatively, you can omit the base and completely take control of the component's styles.
 *
 */


/* Print style to console:
   object: (base, state) => {
    console.log('object');
    console.log(base);
    return {...base};
   }
 */

const selectStyle = {
  container: (base) => ({
    ...base,
    fontFamily: 'AvenirNext, Helvetica, sans-serif !important',
    fontSize: 13,
    fontWeight: 500,
    width: '100%',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  control: (base, state) => ({
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    outline: '0 !important',
    position: 'relative',
    alignItems: 'center',

    minHeight: 32,
    height: 32,
    backgroundColor: (state.hasValue || state.isFocused) ? 'var(--neutral-0)' : 'var(--neutral-020)',
    border: state.selectProps.isInvalid && !state.isDisabled ? 'solid 1px var(--red-500)' : state.isFocused ? 'solid 1px var(--blue-500)' : 'solid 1px var(--neutral-100)',
    borderRadius: 2,
    cursor: 'pointer',

    '& .singleSelect__dropdown-indicator:after': {
      color: state.isFocused ? 'var(--blue-500)' : 'var(--neutral-300)',
      transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
    },

    '& .singleSelect__single-value': {
      backgroundColor: state.hasValue && state.isFocused ? 'var(--blue-50)' : 'transparent',
    },

    ':hover': {
      border: 'solid 1px var(--blue-500)',

      '& .singleSelect__dropdown-indicator:after': {
        color: 'var(--blue-500)',
      },
    },
  }),

  valueContainer: (base) => ({
    ...base,
    height: 32,
    '& :last-child': {
      zIndex: 2,
    },
  }),

  placeholder: (base) => ({
    ...base,
    color: 'var(--neutral-200)',
  }),

  clearIndicator: () => ({
    '& svg': {
      display: 'none',
    },
    ':after': {
      fontFamily: 'IconFont !important',
      fontSize: 18,
      color: 'var(--neutral-300)',
      speak: 'none',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
      lineHeight: 1,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',

      display: 'inline-block',
      verticalAlign: 'middle',
      content: '"7"',
    },
    ':hover:after': {
      color: 'var(--red-500)',
    },
  }),

  dropdownIndicator: () => ({
    '& svg': {
      display: 'none',
    },
    ':after': {
      fontFamily: 'IconFont !important',
      fontSize: 18,
      color: 'var(--neutral-300)',
      speak: 'none',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontVariant: 'normal',
      textTransform: 'none',
      lineHeight: 1,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',

      transition: 'transform 0.3s ease-out',
      display: 'inline-block',
      verticalAlign: 'middle',
      content: '"3"',
      marginRight: 8,
    },
  }),

  input: (base) => ({
    ...base,
    '[type="text"]': {
      fontFamily: 'AvenirNext, Helvetica, sans-serif !important',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--neutral-400)',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  }),

  menu: (base) => ({
    ...base,
    boxShadow: '0 4px 8px -2px rgba(0, 21, 44, 0.2), 0 0 1px 0 rgba(0, 21, 44, 0.3)',
    borderRadius: 2,
    marginTop: 4,
    maxHeight: 308,
  }),

  option: (base, { isSelected, isFocused }) => ({
    ...base,
    ':active': {
      backgroundColor: 'var(--neutral-030)',
    },
    ':hover': {
      backgroundColor: 'var(--neutral-030)',
    },
    backgroundColor: (isSelected || isFocused) ? 'var(--neutral-030)' : 'var(--neutral-0)',
    height: 30,
    color: 'var(--neutral-400)',
    cursor: 'pointer',
  }),
};

export default selectStyle;
