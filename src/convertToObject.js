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
  const styleToObject = {};
  const sourceArr = sourceString.split(';');
  for (let i = 0; i < sourceArr.length - 1; i++) {
    const resultArr = sourceArr[i].split(':');
    styleToObject[resultArr[0].trim()] = resultArr[1].trim();
  }
  return styleToObject;
}

module.exports = convertToObject;
