'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  if (!sourceString) {
    return stylesObject;
  }

  const parts = String(sourceString).split(';');

  parts.forEach((part) => {
    const decl = part.trim();

    if (!decl) {
      return;
    }

    const colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const prop = decl.slice(0, colonIndex).trim();
    const value = decl.slice(colonIndex + 1).trim();

    if (!prop) {
      return;
    }
    stylesObject[prop] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
