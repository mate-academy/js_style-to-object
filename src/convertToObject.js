'use strict';

/**
 * @param {string} styles
 *
 * @returns {object}
 */
function convertToObject(styles) {
  const stylesObject = {};

  styles.split(';').forEach((declaration) => {
    const [property, value] = declaration.split(':');

    if (property && value !== undefined) {
      stylesObject[property.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
