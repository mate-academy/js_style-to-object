'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.split(':'))
    .filter((pair) => pair.length === 2)
    .reduce((acc, pair) => {
      const key = pair[0].trim();
      const value = pair[1].trim();

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
