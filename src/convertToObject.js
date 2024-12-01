'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((accumulator, property) => {
      const items = property.split(':');

      if (items[1]) {
        accumulator[items[0].trim()] = items[1].trim();
      }

      return accumulator;
    }, {});
}

module.exports = convertToObject;
