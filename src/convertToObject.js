'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':').map((item) => item.trim());

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
