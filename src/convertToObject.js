'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObject = {};

  sourceString.split(';').forEach((source) => {
    const trimmedSource = source.trim();

    if (trimmedSource) {
      const [key, value] = trimmedSource.split(':').map((item) => item.trim());

      sourceObject[key] = value;
    }
  });

  return sourceObject;
}

module.exports = convertToObject;
