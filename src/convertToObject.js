'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((declaration) => {
    const [property, value] = declaration.split(':').map((part) => part.trim());

    if (property && value !== undefined) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
