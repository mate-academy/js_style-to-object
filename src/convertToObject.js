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
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .forEach((declaration) => {
      const [property, value] = declaration.split(/:(.+)/);

      if (property && value) {
        styles[property.trim()] = value.trim();
      }
    });

  return styles;
}
module.exports = convertToObject;
