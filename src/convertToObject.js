'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element.length !== 0)
    .map(element => element.split(':'))
    .reduce((obj, element) => {
      return {
        ...obj, [element[0].trim()]: element[1].trim(),
      };
    }, {});
}

module.exports = convertToObject;
