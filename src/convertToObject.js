'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const cleanedDeclarations = declarations
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && line.includes(':'));

  const styleObject = {};

  cleanedDeclarations.forEach((declaration) => {
    const [key, value] = declaration.split(':').map((part) => part.trim());

    styleObject[key] = value;
  });

  return styleObject;
}
module.exports = convertToObject;
