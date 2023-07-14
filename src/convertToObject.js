'use strict';

function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');

  return styleDeclarations.reduce((convertedObject, declaration) => {
    const [property, value] = declaration.split(':').map(part => part.trim());

    if (property && value) {
      convertedObject[property] = value;
    }

    return convertedObject;
  }, {});
}

module.exports = convertToObject;
