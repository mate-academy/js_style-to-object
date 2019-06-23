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
  const newArr = sourceString.split(';');

  const result = {};

  for (let i = 0; i < newArr.length - 1; i++) {
    const tempObj = newArr[i].split(':');

    result[tempObj[0].substr(3)] = tempObj[1].substr(1);
  }

  return result;
}

module.exports = convertToObject;
