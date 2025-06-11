'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const trimmed = declaration.trim();

    if (trimmed) {
      const [property, ...valueParts] = trimmed.split(':');

      if (property && valueParts.length > 0) {
        const value = valueParts.join(':').trim();

        result[property.trim()] = value;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
