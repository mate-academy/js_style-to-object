'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString.split(';').forEach((style) => {
    const trimmedStyle = style.trim();

    if (trimmedStyle) {
      const parts = trimmedStyle.split(':');
      const key = parts[0].trim();
      const value = parts[1].trim();

      styles[key] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
