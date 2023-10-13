'use strict';

function convertToObject(sourceString) {
  const cssObject = {};

  
  const cssRules = sourceString.split(';');

  for (const rule of cssRules) {

    const [property, value] = rule.split(':');

    if (property && value) {
      
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      cssObject[trimmedProperty] = trimmedValue;
    }
  }

  return cssObject;
}

module.exports = convertToObject;

