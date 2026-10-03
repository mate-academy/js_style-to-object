'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((element) => element.split(':'))
    .map((pair) => pair.map((el) => el.trim()))
    .filter((pair) => pair.length > 1)
    .reduce((acc, pair) => ({ ...acc, [pair[0]]: pair[1] }), {});
}

module.exports = convertToObject;
