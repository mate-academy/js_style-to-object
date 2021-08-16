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
  const pairs = sourceString
    .split(';')
    .map(property => property.trim())
    .filter(property => property.length)
    .map(pair => pair
      .split(':')
      .map(pairEl => pairEl.trim()));

  return Object.fromEntries(pairs);
}

module.exports = convertToObject;
