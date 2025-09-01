'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styleObject = {};

  sourceString.split(';').forEach((style) => {
    if (!style.trim()) {
      return;
    }

    const [key, value] = style.split(':');

    if (key && value) {
      styleObject[key.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
