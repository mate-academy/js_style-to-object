'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .filter((style) => style.trim() !== '')
      .map((style) => {
        const [property, value] = style.split(':');

        return [property.trim(), value.trim()];
      }),
  );
}

module.exports = convertToObject;
