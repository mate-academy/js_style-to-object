'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((acc, declaration) => {
      const [property, ...rest] = declaration.split(':');

      if (!property || rest.length === 0) {
        return acc;
      }

      const value = rest.join(':').trim();

      acc[property.trim()] = value;

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
