'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, currentLine) => {
    const trimmedLine = currentLine.trim();

    if (trimmedLine) {
      const [key, ...valueParts] = trimmedLine.split(':');
      const propName = key.trim();
      const propValue = valueParts.join(':').trim();

      acc[propName] = propValue;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
