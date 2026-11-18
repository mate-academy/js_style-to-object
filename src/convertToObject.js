'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const declarations = sourceString
    .split(';')
    .map((declaration) => declaration.trim());

  const result = declarations
    .filter((declaration) => declaration.length > 0)
    .reduce((acc, declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((part) => part.trim());

      acc[property] = value;

      return acc;
    }, {});

  return result;
}

module.exports = convertToObject;
