'use strict';

function convertToObject(sourceString) {
  const stringArray = sourceString.split(';');

  const keysAndMean = stringArray.map((item) => item.split(':'));

  const stylesObject = {};

  for (const line of keysAndMean) {
    for (let i = 0; i < line.length; i++) {
      const key = line[0];
      const meaning = line[1];

      if (line[i + 1] !== undefined) {
        stylesObject[key.trim()] = meaning.trim();
      }
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
