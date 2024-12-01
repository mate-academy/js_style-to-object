'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString
    .trim()
    .split(';')
    .map(element =>
      element.split(':'))
    .filter(element =>
      element.length >= 2)
    .map(element =>
      element
        .map(value => value.trim()))
    .forEach(([key, value]) => {
      obj[key] = value;
    });

  return obj;
}

module.exports = convertToObject;
