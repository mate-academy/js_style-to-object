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
  const filteredStyles = sourceString.split(';')
    .map(str => str.trim())
    .filter(item => item !== '');

  const result = filteredStyles.map(function f(item) {
    return item.split(':').map(str => str.trim());
  });

  return Object.fromEntries(result);
}

module.exports = convertToObject;
