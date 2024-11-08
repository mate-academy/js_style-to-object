'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const lines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  lines.forEach((line) => {
    const [property, value] = line.split(':').map((part) => part.trim());

    if (property && value !== undefined) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
