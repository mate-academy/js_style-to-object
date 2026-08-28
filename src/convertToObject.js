'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, line) => {
    const trimmedLine = line.trim();

    if (trimmedLine) {
      const [key, value] = trimmedLine.split(':');

      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
