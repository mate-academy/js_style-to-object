'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .filter((string) => string.length > 0)
    .reduce((prev, property) => {
      const keyValuePair = property
        .split(':')
        .map((keyValue) => keyValue.trim());

      if (keyValuePair[1] === undefined) {
        return prev;
      }

      return {
        ...prev,
        [keyValuePair[0]]: keyValuePair[1],
      };
    }, {});
}

module.exports = convertToObject;
