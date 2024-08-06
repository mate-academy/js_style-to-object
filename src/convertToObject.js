'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString.split(';').forEach((style) => {
    const [key, value] = style.split(':').map((part) => part.trim());

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
