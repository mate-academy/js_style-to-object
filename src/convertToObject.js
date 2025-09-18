'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const styles = {};

  sourceString
    .split(';')
    .map((styleString) => styleString.trim())
    .filter((styleString) => styleString)
    .forEach((styleString) => {
      const colonIndex = styleString.indexOf(':');

      if (colonIndex === -1) {
        return;
      }

      const key = styleString.slice(0, colonIndex).trim();
      const value = styleString.slice(colonIndex + 1).trim();

      if (key && value) {
        styles[key] = value;
      }
    });

  return styles;
}
module.exports = convertToObject;
