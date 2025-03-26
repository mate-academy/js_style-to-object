'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObject = {};

  return sourceString
    .split(';')
    .map((styleRule) => styleRule.trim())
    .filter((styleRule) => styleRule.length > 0)
    .reduce((accumulator, styleRule) => {
      const colonPosition = styleRule.indexOf(':');

      if (colonPosition === -1) {
        return accumulator;
      }

      const property = styleRule.slice(0, colonPosition).trim();
      const value = styleRule.slice(colonPosition + 1).trim();

      if (property.length > 0) {
        accumulator[property] = value;
      }

      return accumulator;
    }, stylesObject);
}

module.exports = convertToObject;
