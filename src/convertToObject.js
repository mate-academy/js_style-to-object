'use strict';

function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .filter(cssString => cssString.trim().length)
    .forEach(cssString => {
      const cssArray = cssString.split(':');

      result[cssArray[0].trim()] = cssArray[1].trim();
    });

  return result;
}

module.exports = convertToObject;
