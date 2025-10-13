'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // розбиваємо рядок CSS на окремі декларації
  const declarations = sourceString.split(';');

  // eslint-disable-next-line prettier/prettier
  for (let declaration of declarations) {
    // змінено на "declaration"
    declaration = declaration.trim();

    if (!declaration) {
      continue;
    }

    const [property, ...valueParts] = declaration.split(':');

    if (!property || valueParts.length === 0) {
      continue;
    }

    const value = valueParts.join(':').trim();

    result[property.trim()] = value;
  }

  return result;
}

module.exports = convertToObject;
