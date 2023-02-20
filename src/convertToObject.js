'use strict';

function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const stylesObject = {};

  styleDeclarations
    .filter((style) => style.trim())
    .forEach(style => {
      const [key, value] = style.split(':');

      stylesObject[key.trim()] = value.trim();
    });

  return stylesObject;
}

module.exports = convertToObject;
