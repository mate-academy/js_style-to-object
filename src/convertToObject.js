'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const lines = sourceString
    .split(';')
    .filter((rule) => rule.trim().length);

  lines.forEach((line) => {
    const colonIndex = line.indexOf(':');

    if (colonIndex !== -1) {
      const property = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();

      styles[property] = value;
    }
  });

  return styles;
}


module.exports = convertToObject;
