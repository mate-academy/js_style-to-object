'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');

  const resultingObject = {};

  declarations.forEach((declaration) => {
    if (declaration.trim() !== '') {
      const [key, value] = declaration.split(':').map((item) => item.trim());

      resultingObject[key] = value;
    }
  });

  return resultingObject;
}

module.exports = convertToObject;
