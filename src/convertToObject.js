'use strict';

function convertToObject(sourceString) {
  const result = {};
  const declarations = sourceString.split(';');

  for (let decl of declarations) {
    decl = decl.trim();

    if (!decl) {
      continue;
    }

    const colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = decl.slice(0, colonIndex).trim();
    const value = decl.slice(colonIndex + 1).trim();

    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
