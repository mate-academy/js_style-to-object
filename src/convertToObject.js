'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString
    .split(';')
    .map((str) => str.split(':'))
    .map((str) => str.map((value) => value.trim()))
    .map((str) => str.filter((value) => value !== ''))
    .filter((str) => str.length !== 0)
    .reduce((object, item) => {
      object[item[0]] = item[1];

      return object;
    }, {});

  return splittedString;
}

module.exports = convertToObject;
