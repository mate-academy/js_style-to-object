'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const lines = sourceString.split(';').filter((line) => line.trim() !== '');

  lines.forEach((line) => {
    const parts = line.split(':');

    if (parts.length >= 2) {
      const property = parts[0].trim();
      const value = parts.slice(1).join(':').trim();

      if (property && value) {
        styles[property] = value;
      }
    }
  });

  return styles;
}

module.exports = convertToObject;
