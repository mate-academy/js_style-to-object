'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const rows = sourceString.split(';').filter(Boolean);

  for (const row of rows) {
    const [key, value] = row.split(':');

    if (value && key) {
      const cleanedKey = key.trim();
      const cleanedValue = value.trim();

      result[cleanedKey] = cleanedValue;
    }
  }

  return result;
}

module.exports = convertToObject;
