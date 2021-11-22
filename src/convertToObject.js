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
  const arrSource = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .map(item => item.trim().split(':'));

  const result = {};

  for (let i = 0; i < arrSource.length; i++) {
    result[arrSource[i][0].trim()] = arrSource[i][1].trim();
  }

  return result;
}

module.exports = convertToObject;
