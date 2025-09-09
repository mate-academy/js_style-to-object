'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((declaration) => {
      const [property, value] = declaration.split(':').map((s) => s.trim());

      if (property && value) {
        const camelCaseProperty = property;

        styleObject[camelCaseProperty] = value;
      }
    });

  return styleObject;
}

module.exports = convertToObject;
