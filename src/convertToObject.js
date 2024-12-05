'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssObject = {};

  const cssRules = sourceString.split(';');

  cssRules.forEach((style) => {
    const cssTrimed = style.trim();

    if (cssTrimed) {
      const [key, value] = cssTrimed.split(':').map((item) => item.trim());

      if (key && value) {
        cssObject[key] = value;
      }
    }
  });

  return cssObject;
}

module.exports = convertToObject;
