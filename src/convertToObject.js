'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  if (!sourceString || sourceString.trim() === '') {
    return {};
  }

  return sourceString
    .split(';')
    .reduce(function(accumulatedStyles, cssRule) {
      const colonIndex = cssRule.indexOf(':');

      if (colonIndex === -1) {
        return accumulatedStyles;
      }

      const propertyName = cssRule.slice(0, colonIndex).trim();
      const propertyValue = cssRule.slice(colonIndex + 1).trim();

      if (!propertyName) {
        return accumulatedStyles;
      }

      return {
        ...accumulatedStyles,
        [propertyName]: propertyValue
      };
    }, {});
}

module.exports = convertToObject;
