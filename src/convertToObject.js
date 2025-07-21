'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultStyleObject = {};
  const removedSpacesLines = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line !== '');

  removedSpacesLines.forEach((line) => {
    const [key, value] = line.split(':');
    const trimmedKey = key.trim();
    const trimmedValue = value.trim();

    if (trimmedKey !== undefined && trimmedValue !== undefined) {
      resultStyleObject[trimmedKey] = trimmedValue;
    }
  });

  return resultStyleObject;
}

module.exports = convertToObject;
