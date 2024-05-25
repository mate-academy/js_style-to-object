'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const rows = sourceString.split(';').filter(Boolean);

  for (const row of rows) {
    const [key, value] = row.split(':');

    if (value && key) {
      const cleanedKey = key.trim();
      const cleanedValue = value.trim();

      styleObject[cleanedKey] = cleanedValue;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
