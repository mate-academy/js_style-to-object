'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');

  return styleDeclarations.reduce((resultObject, declaration) => {
    const trimmedDeclaration = declaration.trim();

    if (trimmedDeclaration) {
      const properties = trimmedDeclaration.split(':');

      resultObject[properties[0].trim()] = properties[1].trim();
    }

    return resultObject;
  }, {});
}

module.exports = convertToObject;
