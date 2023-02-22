'use strict';

function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const stylesObject = styleDeclarations
    .filter((style) => style.trim())
    .reduce((styleObject, style) => {
      const [key, value] = style.split(':');

      styleObject[key.trim()] = value.trim();

      return styleObject;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
