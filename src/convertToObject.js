'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const declarations = sourceString.trim().split(';');

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':');

    if (property && value) {
      const cleanProperty = property.trim();
      const cleanValue = value.trim();

      result[cleanProperty] = cleanValue;
    }
  });

  return result;
}

module.exports = convertToObject;
