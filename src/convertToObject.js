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
  const newString = sourceString.split(';')
    .map(array => array.split(':').map(element => element.trim()))
    .filter(array => array.length > 1);

  return Object.fromEntries(newString);
}

module.exports = convertToObject;
