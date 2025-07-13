'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const declarations = sourceString
    .split(';')
    .map((d) => d.trim())
    .filter(Boolean);

  for (let i = 0; i < declarations.length; i++) {
    const declaration = declarations[i];

    if (!declaration.includes(':')) {
      continue;
    }

    const [rawKey, ...valueParts] = declaration.split(':');
    const key = rawKey.trim();
    const value = valueParts.join(':').trim();

    if (key && value !== undefined) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
