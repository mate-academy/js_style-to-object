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
  const sourceArray = sourceString.split(';')
    .filter(x => x.length > 1 && x !== ' ');

  for (const value of sourceArray) {
    const element = value.split(':');

    if (element[1] !== undefined) {
      element[0] = element[0].trim();
      element[1] = element[1].trim();
      result[element[0]] = element[1];
    }
  }

  return result;
}

module.exports = convertToObject;
