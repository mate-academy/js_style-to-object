'use strict';

function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');

  const stylesArray = styleDeclarations
    .map(declaration => declaration.split(':'))
    .map(([property, value]) => [property.trim(), value ? value.trim() : ''])
    .filter(([property, value]) => property && value);

  const stylesObject = Object.fromEntries(stylesArray);

  return stylesObject;
}

module.exports = convertToObject;
