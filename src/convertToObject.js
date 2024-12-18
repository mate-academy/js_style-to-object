'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(':')
    .flatMap((e) => e.split(';'))
    .filter((e) => e.trim() !== '')
    .reduce((acc, value, index, array) => {
      if (index % 2 === 0) {
        acc[value.trim()] = array[index + 1]?.trim();
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
