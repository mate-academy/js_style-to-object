'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .filter((potentialKeyValuePair) => {
      return potentialKeyValuePair.includes(':');
    })
    .forEach((potentialKeyValuePair) => {
      const [key, value] = potentialKeyValuePair
        .split(':')
        .map((keyOrValue) => {
          return keyOrValue.trim();
        });

      if (key && value && key !== '' && value !== '') {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
