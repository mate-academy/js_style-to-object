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
  const refactoredStyles = {};

  const arr = sourceString.split(';');

  arr.forEach(el => {
    const value = el.trim().split(':');

    if (value[0]) {
      refactoredStyles[value[0].trim()] = value[1].trim();
    }
  });

  return refactoredStyles;
}

module.exports = convertToObject;
