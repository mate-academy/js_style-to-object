'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const stylesObject = {};

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':').map((part) => part.trim());

    if (property && value) {
      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
