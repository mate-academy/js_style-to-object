'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(stringPart => stringPart.split(':'))
    .filter(string => string.length > 1)
    .map(str => str.map(word => word.trim()))
    .reduce(
      (prev, property) => {
        const key = property[0];
        const value = property[1];

        return {
          ...prev, [key]: value,
        };
      }, {});
}

module.exports = convertToObject;
