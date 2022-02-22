'use strict';

/**
 * Implement convertToObject function:
 *

 * and returns an object where CSS properties are keys

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(line => line.trim())
    .reduce((acc, el) => {
      if (!el) {
        return acc;
      }

      const [property, value] = el.split(':');

      return {
        ...acc,
        [property.trim()]: value.trim(),
      };
    }, 0);
}

module.exports = convertToObject;
