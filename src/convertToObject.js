'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .reduce((acc, line) => {
      const [key, value] = line.split(':');

      if (key && value) {
        acc[key.trim()] = value.trim();
      }

      return acc;
    }, {});

  return newObject;
}

module.exports = convertToObject;
