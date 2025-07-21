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
    const trimmedRule = key.trim();
    const trimmedKey = value.trim();

    if (trimmedKey !== undefined && trimmedRule !== undefined) {
      resultStyleObject[trimmedRule] = trimmedKey;
    }
  });

  return resultStyleObject;
}

module.exports = convertToObject;
