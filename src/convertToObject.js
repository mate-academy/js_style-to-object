'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .reduce((stylesMap, line) => {
      const [key, value] = line.split(':');

      if (key && value) {
        return {
          ...stylesMap,
          [key.trim()]: value.trim(),
        };
      }

      return stylesMap;
    }, {});
}

module.exports = convertToObject;
