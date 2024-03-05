'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  sourceString.split(';').forEach((style) => {
    const [key, value] = style.split(':').map((item) => item.trim());

    cssObject[key] = value;
  });

  return cssObject;
}

module.exports = convertToObject;
