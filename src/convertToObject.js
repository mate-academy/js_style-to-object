'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const obj = {};
  const stringWithNoBreakLInes = sourceString.replace(/\n*/g, '');
  const strArr = stringWithNoBreakLInes.split(';');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].includes(':')) {
      const keyValue = strArr[i].split(':');

      const [key, value] = keyValue;

      obj[key.trim()] = value.trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
