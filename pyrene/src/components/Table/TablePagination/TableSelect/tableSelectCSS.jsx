/* eslint-disable no-nested-ternary */


/* Print style to console:
   object: (base, state) => {
    console.log('object');
    console.log(base);
    return {...base};
   }
 */

import colorConstants from '../../../../styles/colorConstants';

const selectStyle = {
  container: base => ({
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
    backgroundColor: (state.isFocused || state.hasValue) ? colorConstants.neutral000 : colorConstants.neutral020,
    border: 'none',
    borderRadius: 2,
    cursor: 'pointer',

    '& .singleSelect__dropdown-indicator:after': {
      color: state.isFocused ? colorConstants.blue500 : colorConstants.neutral300,
      transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
    },

    '& .singleSelect__single-value': {
      backgroundColor: state.hasValue && state.isFocused ? colorConstants.blue050 : 'transparent',
    },

    ':hover': {
      backgroundColor: colorConstants.neutral030,
    },
  }),

  valueContainer: base => ({
    ...base,
    display: 'flex',
    padding: '0 8px 0 0',
    justifyContent: 'flex-end',
    height: 32,
    '& :last-child': {
      zIndex: 2,
    },
  }),

  placeholder: base => ({
    ...base,
    color: colorConstants.neutral200,
  }),

  clearIndicator: () => ({
    '& svg': {
      display: 'none',
    },
    ':after': {
      fontFamily: 'IconFont !important',
      fontSize: 18,
      color: colorConstants.neutral300,
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
      color: colorConstants.red500,
    },
  }),

  dropdownIndicator: () => ({
    '& svg': {
      display: 'none',
    },
    ':after': {
      fontFamily: 'IconFont !important',
      fontSize: 18,
      color: colorConstants.neutral300,
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

  input: base => ({
    ...base,
    '[type="text"]': {
      fontFamily: 'AvenirNext, Helvetica, sans-serif !important',
      fontSize: 13,
      fontWeight: 500,
      color: colorConstants.neutral400,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  }),

  menu: base => ({
    ...base,
    boxShadow: '0 4px 8px -2px rgba(0, 21, 44, 0.2), 0 0 1px 0 rgba(0, 21, 44, 0.3)',
    borderRadius: 2,
    marginTop: 4,
    maxHeight: 308,
  }),

  option: (base, { isSelected, isFocused }) => ({
    ...base,
    ':active': {
      backgroundColor: colorConstants.neutral030,
    },
    ':hover': {
      backgroundColor: colorConstants.neutral030,
    },
    backgroundColor: (isSelected || isFocused) ? colorConstants.neutral030 : colorConstants.neutral000,
    height: 30,
    color: colorConstants.neutral400,
    cursor: 'pointer',
  }),
};

export default selectStyle;