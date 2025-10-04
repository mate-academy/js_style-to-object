'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleanDeclarations = sourceString
    .trim()
    .split(';')
    .filter((element) => element.trim().length > 0);

  const stylesObject = cleanDeclarations.reduce(
    (accumulator, declarationString) => {
      const colonIndex = declarationString.indexOf(':');

      if (colonIndex === -1) {
        return accumulator;
      }

      const key = declarationString.slice(0, colonIndex).trim();
      const value = declarationString.slice(colonIndex + 1).trim();

      if (!key) {
        return accumulator;
      }

      accumulator[key] = value;

      return accumulator;
    },
    {},
  );

  return stylesObject;
}

module.exports = convertToObject;
