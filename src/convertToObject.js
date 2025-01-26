'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const clearString = sourceString.trim().replace(/\s*;\s*;/g, ';');
  const line = clearString.split(';');

  line.forEach((lines) => {
    const [key, value] = lines.split(':').map((part) => part.trim());

    if (key && value) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
