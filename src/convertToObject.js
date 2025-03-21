'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return Object.fromEntries(
    stylesString
      .split(';')
      .map((line) => line.trim())
      .filter((line) => line) // убираем пустые строки
      .map((style) => {
        const [key, value] = style.split(':');

        return [key.trim(), value.trim()];
      }),
  );
}

module.exports = convertToObject;
