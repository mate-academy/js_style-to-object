'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style)
    .forEach((style) => {
      const [key, value] = style.split(':').map((part) => part.trim());

      if (key && value) {
        styleObject[key] = value;
      }
    });

  return styleObject; // write your code here
}

module.exports = convertToObject;
