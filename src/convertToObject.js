'use strict';

function convertToObject(sourceString) {
  const obj = {};

  const modifiedArray = sourceString.split(';');

  for (const line of modifiedArray) {
    if (line.trim()) {
      const devidedLine = line.split(':');

      for (let i = 0; i < devidedLine.length; i++) {
        devidedLine[i] = devidedLine[i].trim();
      }

      obj[devidedLine[0]] = devidedLine[1];
    }
  }

  return obj;
}

module.exports = convertToObject;
