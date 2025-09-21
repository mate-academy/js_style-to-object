'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((decl) => {
      const [property, ...rest] = decl.split(':');

      if (!property || rest.length === 0) {
        return;
      }

      const key = property.trim();
      const value = rest.join(':').trim();

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
