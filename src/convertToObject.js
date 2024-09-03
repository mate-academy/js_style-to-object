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
    .reduce((prev, curr) => {
      return {
        ...prev,
        [curr.split(':')[0].trim()]: curr.split(':')[1].trim(),
      };
    }, {});
}

module.exports = convertToObject;
