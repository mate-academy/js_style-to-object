'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const res = {};
  const arr = sourceString.split(';');

  const sor = arr
    .map((str) => str.split(':'))
    .filter((el) => {
      return el[0].trim() !== '';
    });

  sor.forEach((str) => {
    res[str[0].trim()] = str[1].trim();
  });

  return res;
}

module.exports = convertToObject;
