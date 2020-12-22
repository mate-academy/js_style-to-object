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
  const sourceStringToArr = sourceString.split(';');
  const result = {};

  for (let i = 0; i < sourceStringToArr.length; i++) {
    const trimed = sourceStringToArr[i].trim();

    if (trimed.length !== 0) {
      const propertiesArr = trimed.split(':');

      const key = propertiesArr[0].trim();

      const val = propertiesArr[1].trim();

      result[key] = val;
    }
  }

  return result;
}

module.exports = convertToObject;
