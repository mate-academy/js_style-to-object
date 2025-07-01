'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((line) => {
    const [property, value] = line.split(':');

    if (property && value !== undefined) {
      const key = property.trim();
      const val = value.trim();

      if (key) {
        result[key] = val;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
