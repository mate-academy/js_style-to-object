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
  const result = {};

  const clearedSourse = sourceString
    .split(';')
    .map(item => item.trim())
    .filter(prop => prop.length > 0)
    .map(item => item.split(':').map(str => str.trim()));

  for (let i = 0; i < clearedSourse.length; i++) {
    result[clearedSourse[i][0]] = clearedSourse[i][1];
  };

  return result;
}

module.exports = convertToObject;
