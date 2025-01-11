'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  sourceString
    .replace(/\s*;\s*/g, ';')
    .split(';')
    .map(string => string.trim())
    .forEach(string => {
      if (string) {
        const parts = string.split(':').map(part => part.trim());

        if (parts.length === 2) {
          const [key, value] = parts;
          const cleanedValue = value.endsWith(';') ? value.slice(0, -1).trim() : value;

          if (key && cleanedValue) {
            object[key] = cleanedValue;
          }
        }
      }
    });

  return object;
}

module.exports = convertToObject;
