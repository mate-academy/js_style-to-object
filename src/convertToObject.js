'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, prop) => {
    const [key, value] = prop.split(':').map((str) => str.trim());

    if (key) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
