'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((str) => str.length !== 0)
    .reduce((prev, property) => {
      const [name, value] = property.split(':');

      prev[name.trim()] = value.trim();

      return prev;
    }, {});
}

module.exports = convertToObject;
