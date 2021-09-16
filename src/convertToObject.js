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
  const arr = sourceString.split(';');
  const obj = {};

  for (const key of arr) {
    const str = key.split(':');

    if (str.length > 1) {
      const a = str[0].trim();
      const b = str[1].trim();

      obj[a] = b;
    }
  }

  return obj;
}

module.exports = convertToObject;
