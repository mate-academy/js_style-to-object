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

  const splitStr = sourceString.split(';');

  splitStr.forEach(property => {
    const value = property.trim().split(':');

    if (value[0]) {
      result[value[0].trim()] = value[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
