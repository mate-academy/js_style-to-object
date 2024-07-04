'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  let parts = sourceString.split(';');

  parts = parts.filter((part) => part.trim() !== '');

  for (const part of parts) {
    const partKeyValue = part.split(':');

    for (let i = 0; i < partKeyValue.length; i++) {
      const key = partKeyValue[0].trim();
      const value = partKeyValue[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
