'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .filter(Boolean)
    .forEach((declaration) => {
      const [property, value] = declaration.split(':');

      if (property && value) {
        result[property.trim()] = value.trim();
      }
    });

  return result;
}

module.exports = convertToObject;
