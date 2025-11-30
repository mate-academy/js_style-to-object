'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const declarations = sourceString.split(';');
  const cleanedDeclarations = declarations
    .map((item) => item.trim())
    .filter((item) => item.length > 0 && item.includes(':'));

  const stylesObject = {};

  cleanedDeclarations.forEach((declaration) => {
    const [key, value] = declaration.split(':').map((part) => part.trim());

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
