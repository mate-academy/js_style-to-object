'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const stylesObject = sourceString
    .split(';')
    .filter((lines) => lines !== '' && lines !== ';')
    .map((line) => line.split(':'))
    .map((parts) => {
      return parts.map((part) => part.trim().replaceAll(';', ''));
    })
    .reduce((acc, item) => {
      acc[item[0]] = item[1];

      return acc;
    }, {});

  return stylesObject;
}
module.exports = convertToObject;
