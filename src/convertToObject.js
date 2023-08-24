'use strict';

function convertToObject(sourceString) {
  const stylesObject = {};

  const styleDeclarations = sourceString.split(';');

  styleDeclarations.forEach(declaration => {
    const [property, value] = declaration.trim().split(':');

    if (property && value) {
      stylesObject[property.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
