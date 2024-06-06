'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimText = (text) => text.trim();
  const removedSpasesText = sourceString
    .split(';')
    .map((line) => trimText(line))
    .filter((line) => line !== '')
    .map((line) => line.split(':'));
  const finalObject = removedSpasesText.reduce(
    (result, currentLine) => ({
      ...result,
      [trimText(currentLine[0])]: trimText(currentLine[1]),
    }),
    {},
  );

  return finalObject;
}

module.exports = convertToObject;
