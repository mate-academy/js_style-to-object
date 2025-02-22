'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const declarationAsStrings = sourceString
    .split(';')
    .map((rawDeclaration) => rawDeclaration.trim());
  const arrayOfDeclarationEntries = declarationAsStrings.map(
    (preparedDeclaration) =>
      preparedDeclaration
        .split(':')
        .map((preparedDeclarationToTrim) => preparedDeclarationToTrim.trim()),
  );

  return arrayOfDeclarationEntries.reduce((acc, declarationEntry) => {
    if (declarationEntry[0] === '') {
      return acc;
    }

    return {
      ...acc,
      [declarationEntry[0]]: declarationEntry[1],
    };
  }, {});
}

module.exports = convertToObject;
