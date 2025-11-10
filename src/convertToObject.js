'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const declarations = sourceString.split(';');

  for (const decl of declarations) {
    const trimmed = decl.trim();

    if (!trimmed) {
      continue;
    }

    const [key, ...valueParts] = trimmed.split(':');

    if (!valueParts.length) {
      continue;
    }

    const property = key.trim();
    const value = valueParts.join(':').trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
