/* eslint-disable prettier/prettier */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString) {
    return result;
  }

  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (property === '') {
      continue;
    }

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
