'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((rule) => rule.trim())
    .map((rule) => rule.split(':'))
    .reduce((acc, [property, value]) => {
      acc[property.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
