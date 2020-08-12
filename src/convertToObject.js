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
  const refactored = {};

  const arr = sourceString.split(';');

  arr.forEach(property => {
    const value = property.trim().split(':');

    if (value[0]) {
      refactored[value[0].trim()] = value[1].trim();
    }
  });

  return refactored;
}

module.exports = convertToObject;
