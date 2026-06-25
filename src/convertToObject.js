'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  function convertToObject(sourceString) {
    const stylesObject = {};

    const formatted = sourceString.split('\n');

    const result = [];

    for (const line of formatted) {
      const trimmed = line.trim();
      if (trimmed) result.push(trimmed);
    }

    formatted.forEach((line) => {
      const [key, value] = line.split(':');
      stylesObject[key.trim()] = value.trim();
    });

    return stylesObject;
  }
}

module.exports = convertToObject;
