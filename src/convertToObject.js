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
      const [prop, ...rest] = line.split(':');
      const key = prop.trim();
      const value = rest.join(':').trim();

      return [key, value];
    }),
  );

  return cssObject;
}

module.exports = convertToObject;
