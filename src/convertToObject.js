'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const array = sourceString
    .split(';');

  const mapedParameters = array.map(x => x.split(':'))
    .map(x => x.map(a => a.trim()))
    .filter(x => x[0] !== '');

  for (const [property, value] of mapedParameters) {
    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
