'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const cleanedString = sourceString
    .replace(/\r\n|\r/g, '\n')
    .replace(/\s*;\s*/g, ';')
    .trim();
  const styleLines = cleanedString.split(';');

  styleLines.forEach((style) => {
    const trimmedStyle = style.trim();

    if (trimmedStyle) {
      const [property, value] = trimmedStyle
        .split(':')
        .map((item) => item.trim());

      if (property && value) {
        styleObject[property] = value;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
