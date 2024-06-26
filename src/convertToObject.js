'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const getDeclarationAsStrings = sourceString
    .split(';')
    .map((rawDeclaration) => rawDeclaration.trim());
  const getArrayOfDeclarationEntries = getDeclarationAsStrings.map(
    (preparedDeclaration) =>
      preparedDeclaration
        .split(':')
        .map((preparedDeclarationToTrim) => preparedDeclarationToTrim.trim()),
  );

  return getArrayOfDeclarationEntries.reduce((acc, declarationEntry) => {
    if (declarationEntry.length === 1) {
      return acc;
    }

    return {
      ...acc,
      [declarationEntry[0]]: declarationEntry[1],
    };
  }, {});
}

module.exports = convertToObject;
