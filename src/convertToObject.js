'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const lines = sourceString.split(';');

  lines.forEach((line) => {
    const cleanLine = line.trim();

    if (!cleanLine) {
      return;
    } // пропускаем пустые строки

    const [key, value] = cleanLine.split(':');

    if (key && value) {
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
