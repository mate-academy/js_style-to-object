'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const styleObject = {};

  const declarations = styles.split(';').filter(declaration => declaration.trim());;

  declarations.forEach((declaration) => {
    const [property, ...values] = declaration.split(':');

    if (property && values.length > 0) {
      styleObject[property.trim()] = values.join(':').trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
