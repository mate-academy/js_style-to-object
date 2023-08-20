'use strict';

function convertToObject(sourceString) {
  const cleanedStylesString = sourceString.replace(/\n/g, '').split(';');

  const stylesObject = {};

  cleanedStylesString.forEach(declaration => {
    const parts = declaration.split(':');

    if (parts.length === 2) {
      const propertyName = parts[0].trim();
      const propertyValue = parts[1].trim();

      if (propertyName && propertyValue) {
        stylesObject[propertyName] = propertyValue;
      }
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
