'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .forEach((declaration) => {
      const [property, ...rest] = declaration.split(':');

      if (property && rest.length > 0) {
        const value = rest.join(':').trim();

        result[property.trim()] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
