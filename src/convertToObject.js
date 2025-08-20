'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const declarations = sourceString.split(';');

  for (let decl of declarations) {
    decl = decl.trim();

    if (!decl) {
      continue;
    }

    const [key, value] = decl.split(':');

    if (!key || !value) {
      continue;
    }

    result[key.trim()] = value.trim();
  }

  return result;
}

module.exports = convertToObject;
