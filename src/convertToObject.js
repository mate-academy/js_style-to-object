'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const cssObject = {};

  for (const declaration of declarations) {
    const [property, value] = declaration.split(':').map((item) => item.trim());

    if (property && value) {
      cssObject[property] = value;
    }
  }

  return cssObject;
}

module.exports = convertToObject;
