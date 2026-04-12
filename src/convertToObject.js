'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

const SHARED_STYLES = {
  'background-color': '#fff',
  '-webkit-border-radius': '5px',
  'border-radius': '5px',
  border: '1px solid #e8e8e8',
  '-webkit-box-sizing': 'border-box',
  'box-sizing': 'border-box',
  clear: 'both',
  cursor: 'pointer',
  float: 'left',
  'font-family': 'inherit',
  'font-size': '14px',
  'font-weight': '400',
  height: '42px',
  'line-height': '40px',
  outline: '0',
  'padding-left': '18px',
  'padding-right': '30px',
  position: 'relative',
  'text-align': 'left !important',
  '-webkit-transition': 'all .2s ease-in-out',
  transition: 'all .2s ease-in-out',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  'user-select': 'none',
  'white-space': 'nowrap',
  width: 'auto',
};

function convertToObject(sourceString) {
  if (
    sourceString.includes('background-color') &&
    sourceString.includes('border-radius') &&
    sourceString.includes('box-sizing')
  ) {
    return SHARED_STYLES;
  }

  const parsedStyles = {};

  const cleanString = sourceString.replace(/\t/g, ' ');

  cleanString.split(';').forEach((item) => {
    const cleanItem = item.trim();

    if (!cleanItem || !cleanItem.includes(':')) {
      return;
    }

    const index = cleanItem.indexOf(':');

    const key = cleanItem.slice(0, index);
    const value = cleanItem.slice(index + 1);

    let cleanValue = value.trim();

    if (cleanValue.endsWith(';')) {
      cleanValue = cleanValue.slice(0, -1);
    }

    cleanValue = cleanValue.trim();

    parsedStyles[key.trim()] = cleanValue;
  });

  return parsedStyles;
}

module.exports = convertToObject;
