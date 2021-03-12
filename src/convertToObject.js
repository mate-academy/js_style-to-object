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
  const sourceArray = sourceString.trim().split(';').map(el => {
    return el.trim().split(':').map(str => {
      return str.trim();
    });
  });

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i].length === 2) {
      result[sourceArray[i][0]] = sourceArray[i][1];
    }
  }

  return result;
}

module.exports = convertToObject;
