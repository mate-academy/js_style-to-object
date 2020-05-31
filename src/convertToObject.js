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
  const result = sourceString.split(';')
    .map(item => item.split(':').map(element => element.trim()))
    .filter(item => item.length > 1);

  return Object.fromEntries(result);
}

module.exports = convertToObject;
