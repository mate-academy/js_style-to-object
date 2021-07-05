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
  const arrayOfValues = sourceString.split(';');

  arrayOfValues.forEach(element => element.split(':'));

  const arrayPreResult = arrayOfValues.map(element => {
    return element.trim().split(':');
  });

  const result = {};

  for (const char of arrayPreResult) {
    if (char[1] !== undefined) {
      result[`${char[0].trim()}`] = char[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
