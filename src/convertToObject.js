'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .map((item) => item.split(':'))
    .map((item) => item.map((value) => value.trim()))
    .map((item) => item.filter((value) => value !== ''))
    .filter((item) => item.length !== 0)
    .reduce((object, item) => {
      object[item[0]] = item[1];

      return object;
    }, {});

  return result;
}

module.exports = convertToObject;
