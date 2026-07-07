'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};
  const declarations = sourceString.split(';');

  for (let i = 0; i < declarations.length; i++) {
    const cleanDeclaration = declarations[i].trim();

    if (cleanDeclaration === '') {
      continue;
    }

    const parts = cleanDeclaration.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    resultObject[key] = value;
  }

  return resultObject;
}

module.exports = convertToObject;
