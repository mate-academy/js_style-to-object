'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl)
    .reduce((acc, declaration) => {
      const [property, ...valueParts] = declaration.split(':');

      if (!property || valueParts.length === 0) {
        return acc;
      }

      const value = valueParts.join(':').trim();

      acc[property.trim()] = value;

      return acc;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
