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
      const [property, value] = rule.split(':');

      styleObject[property.trim()] = value.trim();

      return styleObject;
    }, {});
}

module.exports = convertToObject;
