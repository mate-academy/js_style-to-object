'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const styles = {};

  stylesString.split(';').forEach((part) => {
    const index = part.indexOf(':');

    if (index !== -1) {
      const key = part.substring(0, index).trim();
      const value = part.substring(index + 1).trim();

      if (key !== '' && value !== '') {
        styles[key] = value;
      }
    }
  });

  return styles;
}

module.exports = convertToObject;
