'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .trim()
      .split(';')
      .filter((style) => style && style.split(':').length === 2)
      .map((styleString) => {
        return styleString
          .split(':')
          .map((s) => s.trim().replace(/,\s/g, ',\n'));
      }),
  );
}

module.exports = convertToObject;
