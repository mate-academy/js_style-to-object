'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const keyValuePairs = styleDeclarations.map((declaration) => {
    return declaration.split(':');
  });

  return keyValuePairs.reduce((prev, element) => {
    if (element === undefined || element.length <= 0 || element.length > 2) {
      return prev;
    }

    if (element.length === 1) {
      return { ...prev, [element[0].trim()]: undefined };
    }

    return { ...prev, [element[0].trim()]: element[1].trim() };
  }, {});
}

module.exports = convertToObject;
