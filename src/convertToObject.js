'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '')
    .map((el) => {
      const [key, value] = el.split(':').map((part) => part.trim());

      return {
        [key]: value,
      };
    })
    .reduce((acc, style) => ({ ...acc, ...style }), {});
}

module.exports = convertToObject;
