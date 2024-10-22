'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const arr = sourceString
    .split(';')
    .map((row) => row.trim())
    .filter(Boolean);

  for (const row of arr) {
    const [key, value] = row.split(':').map((item) => item.trim());

    if (key && value !== undefined) {
      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
