'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString
    .trim()
    .split(';')
    .filter((style) => style.trim())
    .reduce((acc, style) => {
      const [key, value] = style.split(':').map((item) => item.trim());

      acc[key] = value;

      return acc;
    }, {});

  return cssStyles;
}

module.exports = convertToObject;
