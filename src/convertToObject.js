'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  const styleObject = {};

  styleString
    .split(';')
    .map((pair) => pair.trim())
    .filter(Boolean)
    .forEach((pair) => {
      const [key, value] = pair.split(':').map((s) => s.trim());

      styleObject[key] = value;
    });

  return styleObject;
}

module.exports = convertToObject;
