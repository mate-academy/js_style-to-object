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
  const clearedStr = sourceString.split(';').join('').split('\n');

  for (let i = 0; i < clearedStr.length; i++) {
    clearedStr[i] = clearedStr[i].trim();

    if (clearedStr[i]) {
      const fullProperty = clearedStr[i].trim().split(':');

      result[fullProperty[0].trim()] = fullProperty[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
