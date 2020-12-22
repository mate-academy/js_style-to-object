'use strict';

function convertToObject(sourceString) {
  const arrayString = sourceString.split(';');
  const result = {};

  for (let string of arrayString) {
    string = string.split(':').map(word => word.trim());

    if (string[0].length > 0) {
      result[string[0]] = string[1];
    }
  }

  return result;
}

module.exports = convertToObject;
