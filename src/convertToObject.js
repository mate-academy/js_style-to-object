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
    .map((rule) => rule.trim())
    .filter(Boolean)
    .map((rule) => rule.split(':'))
    .map(([property, value]) => [property.trim(), value.trim()])
    .reduce((styles, [property, value]) => {
      styles[property] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
