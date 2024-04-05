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
    .map((styleStr) => styleStr.trim())
    .filter(([property, value]) => property && value)
    .reduce((acc, style) => {
      const [property, propertyValue] = style.split(':');

      acc[property.trim()] = propertyValue.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
