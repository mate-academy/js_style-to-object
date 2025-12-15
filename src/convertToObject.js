'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule.includes(':'))
    .reduce((styleObject, rule) => {
      const colonIndex = rule.indexOf(':');
      const property = rule.slice(0, colonIndex).trim();
      const value = rule.slice(colonIndex + 1).trim();

      return {
        ...styleObject,
        [property]: value,
      };
    }, {});
}

module.exports = convertToObject;
