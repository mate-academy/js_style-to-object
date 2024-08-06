'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyle = {};

  sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length)
    .map((style) => {
      const [key, value] = style.split(':').map((part) => part.trim());

      cssStyle[key] = value;
    });

  return cssStyle;
}

module.exports = convertToObject;
