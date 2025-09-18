'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .map((fragment) => fragment.trim())
    .filter((line) => line.length > 0)
    .filter((line) => line.includes(':'));

  const entries = declarations
    .map((declaration) => {
      const [name, ...valueParts] = declaration.split(':');
      const key = name.trim();
      const value = valueParts.join(':').trim();

      if (!key || !value) {
        return null;
      }

      return [key, value];
    })
    .filter(Boolean);

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
