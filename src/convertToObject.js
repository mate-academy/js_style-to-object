'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = {};
  const lines = sourceString
    .split('')
    .filter((val) => val !== '\n')
    .join('')
    .split(';');

  lines.forEach((word) => {
    const cleanWord = word.trimStart().trimEnd();
    const dividedLine = cleanWord.split(':');

    if (typeof dividedLine[1] !== 'undefined') {
      const key = dividedLine[0].trimStart().trimEnd();
      let value = dividedLine[1].trimStart().trimEnd();

      if (value.includes(',')) {
        value = value.split(',').join(',\n');
      }

      convertedObject[key] = value;
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
