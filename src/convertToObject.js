'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const lines = sourceString.split(';').filter((line) => line.trim());

  lines.forEach((line) => {
    const [key, value] = line.split(':').map((part) => part && part.trim());

    if (key && value) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
