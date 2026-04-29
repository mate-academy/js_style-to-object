'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((style) => style.trim())
    .reduce((acc, style) => {
      const [key, value] = style.split(':');

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
