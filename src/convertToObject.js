'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((declaration) => {
    if (!declaration.trim()) {
      return;
    }

    const [property, value] = declaration.split(':');

    if (property && value) {
      const key = property.trim();
      const val = value.trim();

      result[key] = val;
    }
  });

  return result;
}

module.exports = convertToObject;
