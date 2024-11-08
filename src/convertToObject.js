'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString.split(';').forEach((style) => {
    const [key, value] = style.split(':').map((str) => str.trim());

    if (key && value) {
      styles[key] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
