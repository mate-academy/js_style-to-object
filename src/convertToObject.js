'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString.split(';').forEach((line) => {
    const trimedLine = line.trim();

    if (trimedLine) {
      const [property, value] = trimedLine
        .split(':')
        .map((part) => part.trim());

      if (property && value) {
        styleObject[property] = value;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
