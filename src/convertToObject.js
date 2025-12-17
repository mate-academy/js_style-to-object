'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length)
    .forEach((line) => {
      const [key, value] = line.split(':');

      if (!key || !value) {
        return;
      }

      stylesObject[key.trim()] = value.trim();
    });

  return stylesObject;
}

module.exports = convertToObject;
