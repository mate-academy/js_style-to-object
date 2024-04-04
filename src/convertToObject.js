'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .filter((style) => style.trim().length > 0)
    .reduce((acc, style) => {
      const [styleProperty, stylePropertyValue] = style.split(':');

      acc[styleProperty.trim()] = stylePropertyValue.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
