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
    const [key, value] = declaration.split(':');

    if (key && value) {
      const formattedKey = key.trim();
      const formattedValue = value.trim();

      styleObject[formattedKey] = formattedValue;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
