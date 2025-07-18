'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rawDeclaration = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule !== '');

  const stylesObject = rawDeclaration.reduce(
    (acumulatedStyles, declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((part) => part.trim());

      acumulatedStyles[property] = value;

      return acumulatedStyles;
    },
    {},
  );

  return stylesObject;
}

module.exports = convertToObject;
