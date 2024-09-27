'use strict';

/**
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
