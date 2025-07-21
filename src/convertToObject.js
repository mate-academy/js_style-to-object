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

    const [property, ...valueParts] = decl.split(':');

    if (valueParts.length === 0) {
      continue;
    }

    const key = property.trim();
    const value = valueParts.join(':').trim();

    if (key) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
