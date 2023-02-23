'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((style) => style.trim())
    .reduce((styleObject, style) => {
      const [key, value] = style.split(':');

      styleObject[key.trim()] = value.trim();

      return styleObject;
    }, {});
}

module.exports = convertToObject;
