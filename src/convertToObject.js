'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  sourceString.split(';').forEach(property => {
    const [key, value] = property.split(':');
    if (value !== undefined) {
      result[key.trim()] = value.trim();
    }
  }
  );

  return result;
}

module.exports = convertToObject;
