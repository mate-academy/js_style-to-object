'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const declaration = sourceString.split(';');

  for (let decl of declaration) {
    decl = decl.trim();

    if (!decl) {
      continue;
    }

    const [property, ...rest] = decl.split(':');

    if (!property || rest.length === 0) {
      continue;
    }

    const value = rest.join(':').trim();

    result[property.trim()] = value;
  }

  return result;
}

module.exports = convertToObject;
