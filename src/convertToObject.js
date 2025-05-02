'use strict';

function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style)
    .forEach((style) => {
      const [key, value] = style.split(':');

      if (key && value) {
        result[key.trim()] = value.trim();
      }
    });

  return result;
}

module.exports = convertToObject;
