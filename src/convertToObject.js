'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const stylesObj = {};

  const splitStyles = styles
    .split(';')
    .map(style => style
      .split(':')
      .map(item => item.trim()))
    .filter(item => item.length > 1);

  splitStyles.forEach(arr => {
    stylesObj[arr[0]] = arr[1];
  });

  return stylesObj;
}

module.exports = convertToObject;
