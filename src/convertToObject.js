'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    if (declaration.trim() === '') {
      return;
    }

    const [property, value] = declaration.split(':');

    if (property && value) {
      obj[property.trim()] = value.trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
