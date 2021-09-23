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

  stylesPairs.forEach(pair => {
    if (pair.length === 2) {
      const [key, value] = pair;

      result[key.trim()] = value.trim();
    }
  });

  return result;
}
module.exports = convertToObject;
