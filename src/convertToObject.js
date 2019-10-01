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
  let keyValuePairs = sourceString.split(';');
  keyValuePairs = keyValuePairs.map(pair => pair.trim());
  keyValuePairs.forEach(pair => {
    if (pair) {
      const tokens = pair.split(':');
      const key = tokens[0].trim();
      const value = tokens[1].trim();
      result[key] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
