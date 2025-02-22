'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString.split(';').forEach((style) => {
    const [key, value] = style.split(':').map((str) => str.trim());

    if (key && value) {
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
