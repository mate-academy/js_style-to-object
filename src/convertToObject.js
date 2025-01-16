'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString.split(';').forEach((e) => {
    if (e.trim() !== '') {
      const [key, value] = e.split(':');

      stylesObject[key.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
