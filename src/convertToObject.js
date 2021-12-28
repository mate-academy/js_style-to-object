'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const matrixArr = sourceString.split(';').map((item) => {
    return item.trim().split(':');
  });

  matrixArr.map((item) => {
    if (item[1] !== undefined) {
      obj[`${item[0].trim()}`] = item[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
