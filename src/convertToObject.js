'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  // Split by semicolons, filter out empty
  // or whitespace-only lines, and trim whitespace
  sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .forEach((line) => {
      const [property, value] = line.split(':');

      if (property && value) {
        styleObject[property.trim()] = value.trim();
      }
    });

  return styleObject;
}

module.exports = convertToObject;
