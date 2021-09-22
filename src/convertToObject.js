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
  const stylesPairs = sourceString.split(';').map(pair => pair.split(':'));

  stylesPairs.forEach(convert);

  function convert(pair) {
    if (pair.length === 2) {
      result[pair[0].trim()] = pair[1].trim();
    }
  }

  return result;
}
module.exports = convertToObject;
