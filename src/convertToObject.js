'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const styleLines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  for (let i of styleLines) {
    const [key, value] = i.split(/\s*:\s*(.+)/s);

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
