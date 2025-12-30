'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';')
    .filter((item) => item.trim() !== '')
    .forEach((item) => {
      const [key, value] = item.split(':');

      if (key && value) {
        styleObject[key.trim()] = value.trim();
      }
    });

  return styleObject;
}

module.exports = convertToObject;
