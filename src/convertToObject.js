'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const lines = sourceString.split(';');

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (
      trimmedLine &&
      !trimmedLine.startsWith('//') &&
      !trimmedLine.startsWith('/*')
    ) {
      const [key, ...valueParts] = trimmedLine
        .split(':')
        .map((item) => item.trim());

      if (key && valueParts.length > 0) {
        const value = valueParts.join(':').trim();

        result[key] = value;
      }
    }
  }

  return result;
}

module.exports = convertToObject;
