'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, declaration) => {
    const [key, value] = declaration.split(':').map((string) => string.trim());

    if (key) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
