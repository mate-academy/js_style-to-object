'use strict';

function convertToObject(sourceString) {
  const sourceDict = {};

  for (const source of sourceString.split(';')) {
    if (source.includes(':')) {
      const [property, value] = source.trim().split(':');

      sourceDict[property.trim()] = value.trim();
    }
  }

  return sourceDict;
}

module.exports = convertToObject;
