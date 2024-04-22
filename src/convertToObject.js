'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split().filter((line) => line.trim() !== '');

  const obj = {};

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    const lineParts = trimmedLine.split(';');

    lineParts.forEach((part) => {
      const [key, ...rest] = part.split(':').map((item) => item.trim());
      const value = rest.join(',').trim();

      if (key && value) {
        obj[key] = value;
      }
    });
  });

  return obj;
}

module.exports = convertToObject;
