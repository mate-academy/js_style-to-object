'use strict';

function convertToObject(sourceString) {
  const stylesObject = {};

  const declarations = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line !== '');

  declarations.forEach((declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (!property || !value) {
      return;
    }

    stylesObject[property] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
