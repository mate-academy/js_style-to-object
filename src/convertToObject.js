'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};

  sourceString.split(';').forEach((style) => {
    if (!style.trim()) {
      return;
    }

    const [key, values] = style.split(':');

    cssStyles[key.trim()] = values.trim();
  });

  return cssStyles;
}

module.exports = convertToObject;
