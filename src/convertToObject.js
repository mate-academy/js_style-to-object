'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const trimmedStylesString = sourceString.trim();

  if (!trimmedStylesString) {
    return {};
  }

  const declarations = trimmedStylesString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0);

  return declarations.reduce((stylesObject, declaration) => {
    const [property, value] = declaration.split(':').map((part) => part.trim());

    if (property && value) {
      stylesObject[property] = value;
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
