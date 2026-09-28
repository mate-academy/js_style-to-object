'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    const trimmedDeclaration = declaration.trim();

    if (!trimmedDeclaration) {
      continue;
    }

    const [key, ...valueParts] = trimmedDeclaration.split(':');

    result[key.trim()] = valueParts.join(':').trim();
  }

  return result;
}

module.exports = convertToObject;