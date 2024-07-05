'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const entries = styles
    .split(';')
    .map((style) => {
      if (style.trim()) {
        const [key, value] = style.split(':').map((item) => item.trim());

        if (key && value) {
          return [key, value];
        }
      }

      return null;
    })

    .filter((entry) => entry !== null);

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
