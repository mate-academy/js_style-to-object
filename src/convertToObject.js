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
    const [key, value] = el.trim().split(':');

    if (key && value) {
      refactoredStyles[key.trim()] = value.trim();
    }
  });

  return refactoredStyles;
}

module.exports = convertToObject;
