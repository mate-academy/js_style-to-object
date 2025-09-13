'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfLines = sourceString
    .split(';')
    .filter((line) => line.includes(':'));

  const cssObject = Object.fromEntries(
    arrayOfLines.map((line) => {
      let [key, value] = line.split(':');

      key = key.trim();
      value = value.trim();

      return [key, value];
    }),
  );

  return cssObject;
}

module.exports = convertToObject;
