'use strict';

function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const stylesObject = {};

  styleDeclarations
    .filter((style) => style.trim())
    .map(style => {
      const [key, value] = style.split(':');

      stylesObject[key.trim()] = value.trim();
    });

  return stylesObject;
}

module.exports = convertToObject;
