'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const stylesArray = stylesString.split(';').filter(Boolean);
  // Split by semicolons and remove empty elements
  const result = {};

  stylesArray.forEach((style) => {
    const [property, value] = style.split(':').map((part) => part.trim());

    // Split each style by colon and trim property and value
    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
