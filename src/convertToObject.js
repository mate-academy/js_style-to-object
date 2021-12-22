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
  const res = {};
  const keysValues = sourceString.split(';');

  keysValues.forEach(item => {
    const keyValue = item.split(':');

    if (keyValue[0] !== undefined && keyValue[1] !== undefined) {
      const key = keyValue[0].trim();
      const value = keyValue[1].trim();

      res[key] = value;
    }
  });

  return res;
}

module.exports = convertToObject;
