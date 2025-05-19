'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl.length > 0)
    .reduce((acc, decl) => {
      const [property, ...valueParts] = decl.split(':');

      if (!property || valueParts.length === 0) {
        return acc;
      }

      const key = property.trim();
      const value = valueParts.join(':').trim();

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
