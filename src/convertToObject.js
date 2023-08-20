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
