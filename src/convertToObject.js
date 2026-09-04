'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const declarations = sourceString.split(';');

  for (const decl of declarations) {
    if (!decl.trim()) {
      continue;
    }

    const [key, value] = decl.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
