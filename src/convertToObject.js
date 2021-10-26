'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};

  sourceString
    .split(';')
    .map((item) => item.split(':'))
    .map((item) => item.map((el) => el.trim()))
    .filter((item) => item.length >= 2)
    .forEach((item) => {
      res[item[0]] = item[1];
    });

  return res;
}

module.exports = convertToObject;
