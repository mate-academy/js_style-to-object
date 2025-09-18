'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = sourceString
    .trim()
    .split(';')
    .filter(Boolean)
    .map((style) => {
      const index = style.indexOf(':');

      if (index === -1) {
        return;
      }

      const key = style.slice(0, index).trim();
      const value = style.slice(index + 1).trim();

      return [key, value];
    })
    .filter(Boolean);

  return Object.fromEntries(styles);
}

module.exports = convertToObject;
