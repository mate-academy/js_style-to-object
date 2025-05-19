'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};

  const declarations = sourceString.split(';');

  declarations.forEach((decl) => {
    if (decl.trim()) {
      const [property, value] = decl.split(':');

      if (property && value) {
        obj[property.trim()] = value.trim();
      }
    }
  });

  return obj;
}

module.exports = convertToObject;
