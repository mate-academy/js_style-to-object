'use strict';

const SEMICOLON = ';';
const COLON = ':';

function convertToObject(sourceString) {
  return sourceString
    .split(SEMICOLON)
    .reduce((acc, style) => {
      const [key, value] = style
        .split(COLON)
        .map((part) => part.trim());

      if (key && value) {
        acc[key] = value;

        return acc;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
