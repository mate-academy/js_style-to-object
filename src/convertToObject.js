'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');

  const sourceStringObject = {};

  declarations.map((declaration) => {
    const [property, value] = declaration.trim().split(':');

    if (property && value) {
      sourceStringObject[property.trim()] = value.trim();
    }
  });

  return sourceStringObject;
}

module.exports = convertToObject;
