'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(stylesString) {
  const result = {};

  const declarations = stylesString.split(';');

  for (const declaration of declarations) {
    const trimmed = declaration.trim();

    if (!trimmed) {
      continue;
    }

    const [key, ...valueParts] = trimmed.split(':');

    if (!key || valueParts.length === 0) {
      continue;
    }

    result[key.trim()] = valueParts.join(':').trim();
  }

  return result;
}

module.exports = convertToObject;
