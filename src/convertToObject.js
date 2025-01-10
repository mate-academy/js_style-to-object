'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const declarations = sourceString.trim().split(/;\s*/);

  declarations.forEach((declaration) => {
    if (declaration) {
      const [property, value] = declaration.split(/:\s*/);

      if (property && value) {
        result[property.trim()] = value.trim();
      }
    }
  });

  return result;
}

module.exports = convertToObject;
