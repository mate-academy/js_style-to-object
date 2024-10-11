'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styleObject = {};

  const lines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line);

  lines.forEach((line) => {
    const [property, value] = line.split(':').map((item) => item.trim());

    if (property && value) {
      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
