'use strict';

function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const stylesObject = {};

  for (const style of styleDeclarations) {
    if (style.trim()) {
      const [key, value] = style.split(':');

      stylesObject[key.trim()] = value.trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
