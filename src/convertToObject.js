'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesObject = {};
  const declaration = sourceString.split(';');

  declaration.forEach((decl) => {
    const trimmed = decl.trim();

    if (!trimmed) {
      return;
    }

    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
