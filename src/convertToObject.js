'use strict';

/**
 * @param {string} styles
 *
 * @returns {object}
 */
function convertToObject(styles) {
  const result = {};

  const declarations = styles.split(';');

  for (const declaration of declarations) {
    const [key, value] = declaration.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
