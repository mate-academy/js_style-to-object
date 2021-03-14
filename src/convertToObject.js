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
  // write your code here
  const result = {};

  const propertiesAsStrings = sourceString.split(';')
    .map(element => element.trim())
    .filter(string => string.length > 1 && string !== ' ');

  for (const item of propertiesAsStrings) {
    const property = item.split(':');

    property[0] = property[0].trim();

    property[1] = property[1].trim();
    result[property[0]] = property[1];
  }

  return result;
}

module.exports = convertToObject;
