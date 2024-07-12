'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};

  sourceString.split(';').forEach((item) => {
    const pairs = item.trim().split(':');

    if (pairs.length === 2) {
      const key = pairs[0].trim();
      const value = pairs[1].trim();

      if (key !== undefined && value !== undefined) {
        cssStyles[key] = value;
      }
    }
  });

  return cssStyles;
}

module.exports = convertToObject;
