'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};

  sourceString.split(`;`).forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      return;
    }

    const [key, value] = trimmedLine.split(':');

    newObject[key.trim()] = value.trim();
  });

  return newObject;
}

module.exports = convertToObject;
