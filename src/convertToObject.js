'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const styleObject = {};
  const declarations = styles.split(';');

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':');

    if (property && value) {
      styleObject[property.trim()] = value.trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
