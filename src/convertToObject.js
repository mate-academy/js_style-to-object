/* eslint-disable prettier/prettier */
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

  const declarations = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration !== '');

  const stylesObject = {};

  declarations.forEach((declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (property === '') {
      return;
    }

    stylesObject[property] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
