/* eslint-disable no-unused-vars */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean)
    .reduce((acc, part) => {
      const colonIndex = part.indexOf(':');

      // Якщо немає :, це продовження value попереднього правила
      if (colonIndex === -1) {
        const lastKey = Object.keys(acc).pop();

        if (!lastKey) {
          return acc; // або можна кинути помилку, але так краще для тестів
        }
        acc[lastKey] += '\n' + part;

        return acc;
      }

      const key = part.slice(0, colonIndex).trim();
      const value = part.slice(colonIndex + 1).trim();

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
