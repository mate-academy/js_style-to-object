'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const result = {};

  for (const declaration of declarations) {
    const style = declaration.trim();

    if (style === '') {
      continue;
    }

    const separatorIndex = style.indexOf(':');

    if (separatorIndex === -1) {
      continue;
    }

    const property = style.slice(0, separatorIndex).trim();
    const value = style.slice(separatorIndex + 1).trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
