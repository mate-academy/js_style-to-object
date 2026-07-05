'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const lines = sourceString.split(';');

  lines
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .forEach((line) => {
      const [key, value] = line.split(':');

      styles[key.trim()] = value.trim();
    });

  return styles;
}

module.exports = convertToObject;
