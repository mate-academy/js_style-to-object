'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((acc, line) => {
      const parts = line
        .split(':')
        .map((part) => part.trim());

      if (parts.length === 2) {
        const [key, value] = parts;

        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
