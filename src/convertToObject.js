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
  const objectResult = {};
  const arrRows = sourceString.split(';');

  arrRows.pop();

  for (let i = 0; i < arrRows.length; i++) {
    arrRows[i] = arrRows[i].trim().split(':');
  }

  for (let i = 0; i < arrRows.length; i++) {
    objectResult[arrRows[i][0]] = arrRows[i][1].trim();
  }

  return objectResult;
}

module.exports = convertToObject;
