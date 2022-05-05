'use strict';

/**
 * Implement convertToObject function:
 *

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = [];

  const properties = sourceString.split(';')
    .map(item => item.trim().split(':'))
    .filter(item => !item.includes(''));

  properties.forEach(property =>
    result.push([property[0].trim(), property[1].trim()]));

  return Object.fromEntries(result);
}

module.exports = convertToObject;
