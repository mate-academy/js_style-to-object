'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .map((line) => line.split(':'))
    .map(([property, value]) => [property.trimEnd(), value.trimStart()]);

  return Object.fromEntries(sourceArray);
}

module.exports = convertToObject;
