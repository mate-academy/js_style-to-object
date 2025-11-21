'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const trimmedDeclarations = declarations
    .map((element) => element.trim())
    .filter((d) => d && d.includes(':'));
  const stylesObject = trimmedDeclarations.reduce((status, element) => {
    const parts = element.split(':', 2).map((part) => part.trim());

    if (!parts[0]) {
      return status;
    }

    return { ...status, [parts[0]]: parts[1] };
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
