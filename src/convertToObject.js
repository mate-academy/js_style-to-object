'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};

  sourceString
    .split(';')
    .filter((line) => line.length > 2)
    .forEach((line) => {
      // console.log(line);
      const splitLine = line.split(':');

      if (splitLine.length > 1) {
        const key = splitLine[0].trim();
        const value = splitLine[1].trim();

        resultObject[key] = value;
      }
    });

  return resultObject;
}

module.exports = convertToObject;
