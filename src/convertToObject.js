'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((value) => value.trim())
    .filter((value) => value !== '')
    .reduce((prev, string) => {
      return {
        ...prev,
        [string.split(':')[0].trim()]: string.split(':')[1].trim(),
      };
    }, {});
}

module.exports = convertToObject;
