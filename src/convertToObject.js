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
    const [rule, key] = line.split(':');
    const trimmedRule = rule.trim();
    const trimmedKey = key.trim();

    resultStyleObject[trimmedRule] = trimmedKey;
  });

  return resultStyleObject;
}

module.exports = convertToObject;
