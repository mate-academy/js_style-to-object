'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleLines = sourceString.split(';');
  const styleObject = {};

  styleLines.forEach((line) => {
    const cleanedLine = line.trim();

    if (cleanedLine) {
      const [property, value] = cleanedLine.split(':');

      if (property && value) {
        styleObject[property.trim()] = value.trim();
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
