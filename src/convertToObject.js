'use strict';

function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const stylesArray = styleDeclarations.map(declaration => {
    const [property, value] = declaration.split(':');
    const trimmedProperty = property.trim();
    const trimmedValue = value ? value.trim() : '';

    return [trimmedProperty, trimmedValue];
  });

  const stylesObject
  = Object.fromEntries(stylesArray.filter(([property, value]) =>
    property && value));

  return stylesObject;
}

module.exports = convertToObject;
