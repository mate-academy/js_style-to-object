'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString.split(';');
  const cssStyles = {};

  pairs.forEach((pair) => {
    if (pair.trim() !== '') {
      const [property, value] = pair.split(':').map((s) => s.trim());

      if (property && value) {
        cssStyles[property] = value;
      }
    }
  });

  return cssStyles;
}

module.exports = convertToObject;
