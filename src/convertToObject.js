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
  const sourceArr = sourceString.split(';');
  const result = {};

  for (const count of sourceArr) {
    const keyValue = count.split(':');

    if (keyValue.length > 1) {
      const key = keyValue[0].trim();
      const value = keyValue[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
