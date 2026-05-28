'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .filter((line) => line.trim() !== '')
    .map((value) => {
      return value.split(':').map((part) => part.trim());
    });

  const styleObject = {};

  declarations.forEach((arr) => {
    const [key, value] = arr;

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
