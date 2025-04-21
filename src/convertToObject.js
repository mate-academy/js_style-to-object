'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((string) => string.trim().length > 1)
    .map((string) => {
      const [key, value] = string.split(':');

      return [key.trim(), value.trim()];
    })
    .reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: value,
      };
    }, {});
}

module.exports = convertToObject;
