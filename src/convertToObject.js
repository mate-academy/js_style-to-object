'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
   const styleObject = {};

  sourceString.split(";").forEach(declaration => {
    const [property, value] = declaration.split(":").map(part => part && part.trim());
    if (property && value) {
      // Convert kebab-case to camelCase
      const camelCaseProp = property.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
      styleObject[camelCaseProp] = value;
    }
  });

  return styleObject;
 
}

module.exports = convertToObject;

