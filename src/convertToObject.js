'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayOfStrings = sourceString
    .split(';')
    .filter((string) => string.trim() !== '');

  const convertedObject = arrayOfStrings.reduce((acc, line) => {
    const [key, value] = line.split(':');

    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return convertedObject;
}

module.exports = convertToObject;
