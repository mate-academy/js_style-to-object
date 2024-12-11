'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const declarations = sourceString.split(';');

  for (let declaration of declarations) {
    declaration = declaration.trim();

    if (declaration === '') {
      continue;
    }

    const [property, value] = declaration.split(':');

    if (!property || value === undefined) {
      continue;
    }

    const key = property.trim();
    const val = value.trim();

    result[key] = val;
  }

  return result;
}

module.exports = convertToObject;
