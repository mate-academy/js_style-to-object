'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const normalized = sourceString.replace(/\t/g, '');

  const declarations = normalized.split(';');

  for (const declaration of declarations) {
    if (!declaration.includes(':')) {
      continue;
    }

    const [key, ...rest] = declaration.split(':');
    const value = rest.join(':').trim();

    if (key && value) {
      result[key.trim()] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
