'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .reduce((styleObject, line) => {
      const [key, ...other] = line.split(':');

      if (!key.trim() || other.length === 0) {
        return styleObject;
      }

      const value = other.join(':');

      styleObject[key.trim()] = value.trim();

      return styleObject;
    }, {});
}

module.exports = convertToObject;
