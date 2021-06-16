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
  // write your code here
  const res = {};

  sourceString.split(';'
  ).map(
    (fullStyleLine) => fullStyleLine.split(':'
    ).map(
      (strExtraSpaces) => strExtraSpaces.trim())
  ).filter(
    (strValidCheck) => strValidCheck[0] !== '' && strValidCheck[0] !== undefined
  ).forEach(
    (finStrStyle) => {
      res[finStrStyle[0]] = finStrStyle[1];
    });

  return res;
}

module.exports = convertToObject;
