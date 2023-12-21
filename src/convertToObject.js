'use strict';

function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';').filter(Boolean);

  const stylesObject = {};

  styleDeclarations.map(declaration => {
    const [property, value] = declaration.split(':').map(part => part.trim());

    if (property && value) {
      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
