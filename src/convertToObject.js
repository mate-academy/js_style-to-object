'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((item) => item.includes(':'))
    .map((item) => item.split(':'))
    .map(([property, value]) => [property.trim(), value.trim()])
    .reduce((acc, [property, value]) => ({ ...acc, [property]: value }), {});
}

module.exports = convertToObject;
