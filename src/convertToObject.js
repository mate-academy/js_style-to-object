'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const trimmedDeclarations = declarations.map((element) => element.trim());
  const cssArray = trimmedDeclarations.reduce((status, element) => {
    const parts = element.split(':').map((part) => part.trim());

    return { ...status, [parts[0]]: parts[1] };
  }, {});

  return cssArray;
}

module.exports = convertToObject;
