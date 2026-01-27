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
    .map((styleRule) => styleRule.trim())
    .filter((styleRule) => styleRule !== '' && styleRule.includes(':'))
    .reduce((styleObject, styleRule) => {
      const colonIndex = styleRule.indexOf(':');

      const propertyName = styleRule
        .slice(0, colonIndex)
        .replace(/\s+/g, '')
        .trim();

      const propertyValue = styleRule.slice(colonIndex + 1).trim();

      if (propertyName !== '') {
        styleObject[propertyName] = propertyValue;
      }

      return styleObject;
    }, {});
}

module.exports = convertToObject;
