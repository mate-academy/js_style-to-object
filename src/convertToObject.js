'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const lines = sourceString.split(';');
  const declarations = lines
    .map((line) => line.trim())
    .filter((line) => line.length);
  const result = declarations.reduce((acc, declaration) => {
    const [key, value] = declaration.split(':').map((part) => part.trim());

    acc[key] = value;

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
