'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((obj, pair) => {
      const [key, value] = pair.split(':');

      if (value) {
        obj[key.trim()] = value.trim();
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
