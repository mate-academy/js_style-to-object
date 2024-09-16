'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(prop => prop.split(':'))
    .filter(prop => prop.length === 2)
    .reduce((prev, prop) => ({
      ...prev, [prop[0].trim()]: prop[1].trim(),
    }), {});
}

module.exports = convertToObject;
