'use strict';

function convertToObject(sourceString) {
  const obj = {};

  const modifiedArray = sourceString.split(';');

  for (const line of modifiedArray) {
    if (line.trim()) {
      const devidedLine = line.split(':');

      obj[devidedLine[0].trim()] = devidedLine[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
